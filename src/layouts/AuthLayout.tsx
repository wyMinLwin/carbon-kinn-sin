import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
    return (
        <main className='font-display'>
            <Outlet />
        </main>
    )
}

export default AuthLayout
