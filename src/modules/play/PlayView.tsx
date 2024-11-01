import {AdvancedMarker, APIProvider, Map} from '@vis.gl/react-google-maps';
import {IDetectedBarcode, Scanner} from '@yudiel/react-qr-scanner';
import {Button} from "@/components/ui/button.tsx";
import {QrCodeIcon} from "lucide-react";
import {Drawer, DrawerContent, DrawerTitle, DrawerTrigger} from "@/components/ui/drawer";
import {useToast} from "@/hooks/use-toast.ts";
import {VisuallyHidden} from "@radix-ui/react-visually-hidden";
import {Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription} from "@/components/ui/dialog";

const PlayView = () => {
    const gKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    const {toast} = useToast();
    const scanHandler = (data: IDetectedBarcode[]) => {
        console.log(data[0].rawValue)
        toast({
            title: "🎉Yayyyyy!🎉",
            description: "You have collected a sticker!",
        })
    }

    const positions = [
        {lat: 16.779161480825866, lng: 96.15424381866856},
        {lat: 16.804827176807507, lng: 96.13663522133662}
    ];


    return (
        <section className={'container h-full mx-auto px-4 flex flex-col'}>
            <div className={' py-8 w-full mb-auto'}>
                <div className={'w-full mx-auto sm:w-[600px] aspect-video resize-none'}>
                    <APIProvider apiKey={gKey}>
                        <Map
                            mapId="CARBON_KINN_SIN"
                            defaultCenter={{
                                lat: 16.85248359012036, lng: 96.17384336748503
                            }}
                            defaultZoom={11}
                            mapTypeControl={false}
                            streetViewControl={false}
                            fullscreenControl={false}
                        >
                            {
                                positions.map((position, index) => (
                                    <AdvancedMarker key={index} position={position}/>
                                ))
                            }
                        </Map>
                    </APIProvider>
                </div>
            </div>
            <div className={'pb-[15%] flex sm:hidden'}>
                <Drawer snapPoints={[1]} fadeFromIndex={0}>
                    <DrawerTrigger asChild={true}>
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
                            <Scanner onScan={(data) => scanHandler(data)}/>
                        </div>
                    </DrawerContent>
                </Drawer>
                {/*<Scanner onScan={(data) => console.log(data)}/>*/}
            </div>

            <div className={'pb-[15%]  hidden sm:flex'}>
                <Dialog>
                    <DialogTrigger asChild={true}>
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
                            <Scanner onScan={(data) => scanHandler(data)}/>
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