import { Outlet, useLocation} from 'react-router-dom'
import Navbar from "@/components/Navbar.tsx";
import {useEffect, useRef} from "react";
// import useAuth from "@/hooks/useAuth.ts";

const DefaultLayout = () => {
    // const {isAuthenticated} = useAuth()
    const location = useLocation();
    const mainRef = useRef<HTMLDivElement>(null!);
    useEffect(() => {
        mainRef.current.scrollTo({top: 0, left: 0, behavior: "instant"})

    }, [location]);


//     return !isAuthenticated ? (
//         <Navigate to={"/auth/login"} state={{from: location}} replace/>
//     ) : (
//         <div
//             className='relative bg-light text-dark h-svh w-svw z-10 flex flex-col overflow-hidden'>
//             <div
//                 className={'grow-0'}>
//                 < Navbar />
//             </div>
//             <main className={'grow scroll-smooth overflow-y-auto'} ref={mainRef}>
//                 <Outlet/>
//             </main>
//         </div>
// )
    return (
        <div
            className='relative bg-light text-dark h-svh w-svw z-10 flex flex-col overflow-hidden'>
            <div
                className={'grow-0'}>
                < Navbar />
            </div>
            <main className={'grow scroll-smooth overflow-y-auto'} ref={mainRef}>
                <Outlet/>
            </main>
        </div>
)


}

export default DefaultLayout