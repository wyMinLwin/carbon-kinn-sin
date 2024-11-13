// import {AdvancedMarker, APIProvider, Map} from '@vis.gl/react-google-maps';
import {IDetectedBarcode, Scanner} from '@yudiel/react-qr-scanner';
import {Button} from "@/components/ui/button.tsx";
import {QrCodeIcon} from "lucide-react";
import {Drawer, DrawerContent, DrawerTitle, DrawerTrigger} from "@/components/ui/drawer";
import {useToast} from "@/hooks/use-toast.ts";
import {VisuallyHidden} from "@radix-ui/react-visually-hidden";
import {Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription} from "@/components/ui/dialog";
import {Map, Marker} from "@vis.gl/react-maplibre";
import 'maplibre-gl/dist/maplibre-gl.css';
import api from "@/api";
import {useQueryClient} from "@tanstack/react-query";
import {useState} from "react";


const PlayView = () => {
    // const gKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    const [drawerOpen,setDrawerOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const {toast} = useToast();
    const queryClient = useQueryClient()

    const {mutate: collect} = api.collect.collect_sticker.useMutation({
        onMutate: () => setIsLoading(true),
        onSuccess: async () => {
            setDrawerOpen(false)
            toast({
                title: "🎉Yayyyyy!🎉",
                description: "You have collected a sticker!",
            })

            await queryClient.invalidateQueries({
                queryKey: ['collected-sticker']
            })
        },
        onError: (e) => {
            setIsLoading(false)
            if (e.status === 500) {
                toast({
                    variant: 'destructive',
                    title: "Oops! Failed to collect !😢",
                    description: "Please try again later!",
                })
            } else if (e.status === 400) {
                toast({
                    variant: 'destructive',
                    title: "Already collected"!,
                    description: "You already collected this sticker!",
                })
            }
        }
    })
    const scanHandler = (data: IDetectedBarcode[]) => {
        if (data[0].rawValue.length === 0) {
            toast({
                title: "Please scan the qr code",
                duration: 1000,
            })
            return;
        }
        collect(data[0].rawValue)
    }

    const positions = [
        {lat: 16.77017773485478, lng: 96.16329984988117},//maw yone cafe
        {lat:  16.77229331526973, lng:96.15593236522317},//Burma bistro
        {lat: 16.775496567808524, lng: 96.1657782382362},//The Secretariat Yangon
        {lat: 16.774405968693408, lng: 96.16306036707164},//ဆိပ်ကမ်းသာလမ်း
        {lat: 16.77437910605136, lng: 96.16233967296455},//Pansoedan bus stop
        {lat:16.778045938289946, lng:96.15885737831977},//sule bus stop
        {lat: 16.774513267019238, lng: 96.15878723650745},// sule pagoda
        {lat: 16.780399145793343, lng:96.15561632631386},// bogyokezay
        {lat: 16.80846473648042, lng: 96.13607114860767},//Myaynigone Over Sky Bridge
        {lat: 16.771892874959754, lng: 96.16169623638774},//Lokanat Gallery
        {lat: 16.77113595508786, lng:96.1605223594705},//Myanmar Ahla Gallery
        {lat: 16.772818118374545, lng: 96.16560301529331},//Doh eain
        {lat: 16.776667, lng: 96.167404}, //Salavation army
        {lat: 16.826708, lng: 96.128625}, // U htun won chan lan
        {lat: 16.773148720956296, lng:96.15946971808266}, //sule kyouk tai
        {lat: 16.77449975858058, lng: 96.16169387330089},// pansodan scene gallery
        {lat: 16.776462, lng: 96.166819},// sar oak sai (won gyi myar yone)
        {lat: 16.774873218955918, lng: 96.16430209405878},//https://ourheritagehomes.com/listing/the-old-timey/?USD
        {lat: 16.771877607092847, lng: 96.16666138768299},//https://ourheritagehomes.com/listing/merchant-flat/?USD
        {lat: 16.77364684464267, lng:96.16483868426049},//https://ourheritagehomes.com/listing/ex-office/?USD
        {lat: 16.774507917847863, lng:96.16731064500972},//ymca

    ];//,


    return (
        <section className={'container h-full mx-auto px-4 flex flex-col'}>
            <div className={' py-8 w-full grow mb-auto'}>
                <div className={'w-full mx-auto sm:w-[600px] h-full resize-none'}>
                    {/*<APIProvider apiKey={'AIzaSyBD9lTWcIUjKU84QMqS9JEevG_NJO5ITC0'}>*/}
                        <Map
                            mapId="CARBON_KINN_SIN"
                            initialViewState={{
                                latitude: 16.8055646,
                                longitude: 96.1681494,
                                zoom: 11
                            }}
                            mapStyle={'https://tiles.openfreemap.org/styles/positron'}
                            style={{width: '100%', height: '100%'}}
                        >
                            {
                                positions.map((position, index) => (
                                    <Marker key={index} latitude={position.lat} longitude={position.lng}/>
                                ))
                            }
                        </Map>
                    {/*</APIProvider>*/}
                </div>
            </div>
            <div className={'pb-[10%] flex sm:hidden grow-0'}>
                <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} snapPoints={[1]} fadeFromIndex={0}>
                    <DrawerTrigger asChild={true} onClick={() => setIsLoading(false)}>
                        <Button size={'lg'} className={
                            'neo-wrap neo-wrap-btn w-[200px] mx-auto text-lg font-semibold space-x-1.5'
                        }>
                            <span>Scan</span>
                            <QrCodeIcon className={'w-5 h-5'}/>
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent className={'h-[90svh]'}>
                        {/*<VisuallyHi*/}
                        <VisuallyHidden>
                            <DrawerTitle>Scan QR Code</DrawerTitle>
                        </VisuallyHidden>
                        <div className={'p-4 w-full aspect-square'}>
                            <Scanner paused={isLoading} onScan={(data) => scanHandler(data)}/>
                        </div>
                    </DrawerContent>
                </Drawer>
                {/*<Scanner onScan={(data) => console.log(data)}/>*/}
            </div>

            <div className={'pb-[15%]  hidden sm:flex grow-0'}>
                <Dialog>
                    <DialogTrigger asChild={true} onClick={() => setIsLoading(false)}>
                        <Button size={'lg'} className={
                            'neo-wrap neo-wrap-btn w-[200px] mx-auto text-lg font-semibold space-x-1.5'
                        }>
                            <span>Scan</span>
                            <QrCodeIcon className={'w-5 h-5'}/>
                        </Button>
                    </DialogTrigger>
                    <DialogContent className={'w-[440px]'}>
                        {/*<VisuallyHi*/}
                        <VisuallyHidden>
                            <DialogTitle>Scan QR Code</DialogTitle>
                        </VisuallyHidden>
                        <div className={'p-4 w-full aspect-square'}>
                            <Scanner paused={isLoading} onScan={(data) => scanHandler(data)}/>
                        </div>
                        <VisuallyHidden>
                            <DialogDescription>Scan the QR code from sticker</DialogDescription>
                        </VisuallyHidden>
                    </DialogContent>
                </Dialog>
                {/*<Scanner onScan={(data) => console.log(data)}/>*/}
            </div>
        </section>
    )
}

export default PlayView;