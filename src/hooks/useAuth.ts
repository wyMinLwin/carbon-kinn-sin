import Cookies from "js-cookie"
import { useState } from "react"

export default function useAuth() {
    const token = Cookies.get("cks-app-token")
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!token)

    const userLogin = (token: string) => {
        Cookies.set("cks-app-token", token)

        setIsAuthenticated(true)
    }

    const userLogout = () => {
        Cookies.remove("cks-app-token")

        setIsAuthenticated(false)
    }

    return { isAuthenticated, userLogin, userLogout }
}
