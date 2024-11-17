// import {AdvancedMarker, APIProvider, Map} from '@vis.gl/react-google-maps';
import { IDetectedBarcode, Scanner } from "@yudiel/react-qr-scanner";
import { Button } from "@/components/ui/button.tsx";
import { QrCodeIcon } from "lucide-react";
import {
	Drawer,
	DrawerContent,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { useToast } from "@/hooks/use-toast.ts";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogTitle,
	DialogDescription,
} from "@/components/ui/dialog";
import { Map, Marker } from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import api from "@/api";
import { useQueryClient } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { positions } from "@/shared/constants";

//,

const PlayView = () => {
	// const gKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [location, setLocation] = useState<number | null>(null);

	const currentHint = useMemo(() => {
		return positions.find((position) => position.id === location);
	}, [location]);

	const { toast } = useToast();
	const queryClient = useQueryClient();

	const { mutate: collect } = api.collect.collect_sticker.useMutation({
		onMutate: () => setIsLoading(true),
		onSuccess: async () => {
			setDrawerOpen(false);
			toast({
				title: "🎉Yayyyyy!🎉",
				description: "You have collected a sticker!",
			});

			await queryClient.invalidateQueries({
				queryKey: ["collected-sticker"],
			});
		},
		onError: (e) => {
			setIsLoading(false);
			if (e.status === 500) {
				toast({
					variant: "destructive",
					title: "Oops! Failed to collect !😢",
					description: "Please try again later!",
				});
			} else if (e.status === 400) {
				toast({
					variant: "destructive",
					title: "Already collected"!,
					description: "You already collected this sticker!",
				});
			}
		},
	});
	const scanHandler = (data: IDetectedBarcode[]) => {
		if (data[0].rawValue.length === 0) {
			toast({
				title: "Please scan the qr code",
				duration: 1000,
			});
			return;
		}
		collect(data[0].rawValue);
	};

	return (
		<section className={"container h-full mx-auto px-4 flex flex-col"}>
			<div className={" py-8 w-full grow mb-auto"}>
				<div className={"w-full mx-auto sm:w-[600px] h-full resize-none"}>
					{/*<APIProvider apiKey={'AIzaSyBD9lTWcIUjKU84QMqS9JEevG_NJO5ITC0'}>*/}
					<Map
						mapId="CARBON_KINN_SIN"
						initialViewState={{
							latitude: 16.8055646,
							longitude: 96.1681494,
							zoom: 11,
						}}
						mapStyle={"https://tiles.openfreemap.org/styles/positron"}
						style={{ width: "100%", height: "100%" }}
					>
						{positions.map((position) => (
							<Marker
								onClick={() => setLocation(position.id)}
								key={position.id}
								className="pointer"
								latitude={position.lat}
								longitude={position.lng}
							/>
						))}
					</Map>
					{/*</APIProvider>*/}
				</div>
			</div>
			{currentHint && (
				<Card className={"grow-0 mb-2 rounded-md shadow-sm"}>
					<CardHeader className="py-3">
						<CardTitle className="text-base font-medium">Place: {currentHint.name}</CardTitle>
                        <CardDescription className="text-[0.9rem] text-dark font-medium">
                        {currentHint.hint}
                    </CardDescription>
					</CardHeader>
					
				</Card>
			)}
			<div className={"pb-[10%] flex sm:hidden grow-0"}>
				<Drawer
					open={drawerOpen}
					onOpenChange={setDrawerOpen}
					snapPoints={[1]}
					fadeFromIndex={0}
				>
					<DrawerTrigger asChild={true} onClick={() => setIsLoading(false)}>
						<Button
							size={"lg"}
							className={
								"neo-wrap neo-wrap-btn w-[200px] mx-auto text-lg font-semibold space-x-1.5"
							}
						>
							<span>Scan</span>
							<QrCodeIcon className={"w-5 h-5"} />
						</Button>
					</DrawerTrigger>
					<DrawerContent className={"h-[90svh]"}>
						{/*<VisuallyHi*/}
						<VisuallyHidden>
							<DrawerTitle>Scan QR Code</DrawerTitle>
						</VisuallyHidden>
						<div className={"p-4 w-full aspect-square"}>
							<Scanner
								paused={isLoading}
								onScan={(data) => scanHandler(data)}
							/>
						</div>
					</DrawerContent>
				</Drawer>
				{/*<Scanner onScan={(data) => console.log(data)}/>*/}
			</div>

			<div className={"pb-[15%]  hidden sm:flex grow-0"}>
				<Dialog>
					<DialogTrigger asChild={true} onClick={() => setIsLoading(false)}>
						<Button
							size={"lg"}
							className={
								"neo-wrap neo-wrap-btn w-[200px] mx-auto text-lg font-semibold space-x-1.5"
							}
						>
							<span>Scan</span>
							<QrCodeIcon className={"w-5 h-5"} />
						</Button>
					</DialogTrigger>
					<DialogContent className={"w-[440px]"}>
						{/*<VisuallyHi*/}
						<VisuallyHidden>
							<DialogTitle>Scan QR Code</DialogTitle>
						</VisuallyHidden>
						<div className={"p-4 w-full aspect-square"}>
							<Scanner
								paused={isLoading}
								onScan={(data) => scanHandler(data)}
							/>
						</div>
						<VisuallyHidden>
							<DialogDescription>
								Scan the QR code from sticker
							</DialogDescription>
						</VisuallyHidden>
					</DialogContent>
				</Dialog>
				{/*<Scanner onScan={(data) => console.log(data)}/>*/}
			</div>
		</section>
	);
};

export default PlayView;
