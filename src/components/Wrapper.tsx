import DefaultLayout from "@/layouts/DefaultLayout";
import HomeView from "@/modules/home/HomeView";
import {RouterProvider, createBrowserRouter, Navigate} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginView from "@/modules/auth/login/LoginView.tsx";
import AuthLayout from "@/layouts/AuthLayout.tsx";
import RegisterView from "@/modules/auth/register/RegisterView.tsx";
import AboutUsView from "@/modules/about-us/AboutUsView.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <DefaultLayout />,
		children: [
			{
				path: "",
				element: <HomeView />,
			},
			{
				path: "/about-us",
				element: <AboutUsView />,
			},
		],
	},
	{
		path: "/auth",
		element: <AuthLayout />,
		children: [
			{
				path: "",
				element: <Navigate to="login" replace />,
			},
			{
				path: "login",
				element: <LoginView />,
			},
			{
				path: "register",
				element: <RegisterView />,
			},
		],
	},
]);

const Wrapper = () => {
	const queryClient = new QueryClient();
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router}></RouterProvider>
			</QueryClientProvider>
		</>
	);
};

export default Wrapper;
