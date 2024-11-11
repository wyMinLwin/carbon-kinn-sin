import {Button} from "@/components/ui/button.tsx";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import useAuth from "@/hooks/useAuth.ts";
import {useNavigate} from "react-router-dom";
import api from "@/api";

const stickers = [
    {path: './3R/3R.jpg', value: '3R-CKS-1'},
    {path: './3R/Artboard 9.jpg', value: '3R-CKS-2'},
    {path: './3R/carbon 4.png', value: '3R-CKS-3'},
    {path: './Transportation/Artboard 6.png', value:'Transportation-CKS-1'},
    {path: './Transportation/Artboard 8.jpg', value:'Transportation-CKS-2'},
    {path: './Transportation/carbon 2.png', value:'Transportation-CKS-3'},
    {path: './Transportation/Transport.jpg', value:'Transportation-CKS-4'},
    {path: './TreePlanting/Artboard 1.png', value:'Tree-planting-CKS-1'},
    {path: './TreePlanting/Artboard 4.png', value:'Tree-planting-CKS-2'},
    {path: './TreePlanting/Artboard 5.jpg', value:'Tree-planting-CKS-3'},
    {path: './TreePlanting/Artboard 10.jpg', value:'Tree-planting-CKS-4'},
    {path: './TreePlanting/Carbon.png', value:'Tree-planting-CKS-5'},
    {path: './TreePlanting/Tree.jpeg', value:'Tree-planting-CKS-6'},
    {path: './WasteManagement/Artboard 2.jpg', value:'Waste-management-CKS-1'},
    {path: './WasteManagement/carbon 3.png', value:'Waste-management-CKS-2'},
    {path: './WasteManagement/Waste.jpeg', value:'Waste-management-CKS-3'},
    {path: './ZeroCarbonLifestylePractice/Artboard 3.jpg', value:'Zero-carbon-CKS-1'},
    {path: './ZeroCarbonLifestylePractice/Artboard 7.png', value:'Zero-carbon-CKS-2'},
    {path: './ZeroCarbonLifestylePractice/carbon 5.png', value:'Zero-carbon-CKS-3'},
    {path: './ZeroCarbonLifestylePractice/Practices.jpeg', value:'Zero-carbon-CKS-4'},
]
const ProfileView = () => {
    const { userLogout } = useAuth();
    const navigate = useNavigate();

    const logout = () => {
        userLogout();
        navigate('/auth/login');
    }

    const {data:user} = api.auth.verify.useQuery()
    const {data} = api.profile.get_collected_stickers.useQuery()

    return (
        <section className={'py-4 container mx-auto px-4 md:px-20'}>
            <div className={'flex justify-between items-center'}>
                <h1 className={'text-2xl font-semibold text-center'}>
                    Hi! {user?.name} 👋
                </h1>
                <Button onClick={logout} variant={'outline'} className={'neo-wrap-btn'}>
                    Logout
                </Button>
            </div>

            <div className={'py-16 space-y-3'}>
                <h2 className={'text-lg font-medium'}>Your Collections</h2>
                <div className={'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full'}>
                    {
                        stickers.map((sticker, index) => (
                            <LazyLoadImage
                                key={index}
                                alt={sticker.value}
                                effect="blur"
                                className={`w-full h-auto aspect-square rounded-md shadow-sm border-[1px] ${data?.find(stc => stc.sticker_code === sticker.value) ? 'grayscale-0' : 'grayscale'}`}
                                wrapperProps={{
                                    style: {transitionDelay: "1s"},
                                }}
                                src={sticker.path} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default ProfileView