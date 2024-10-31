import {Outlet} from 'react-router-dom'
import Navbar from "@/components/Navbar.tsx";

const DefaultLayout = () => {
    return (
        <div className='relative font-quick bg-light text-dark h-svh w-svw z-10 flex flex-col overflow-hidden'>
            <div className={'grow-0'}>
                <Navbar/>
            </div>
            <main className={'grow overflow-y-auto'}>
                <Outlet/>
            </main>
        </div>
    )
}

export default DefaultLayout