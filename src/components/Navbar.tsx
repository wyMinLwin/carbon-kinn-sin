import {useState} from "react";
import {motion} from "framer-motion";
import {NavLink} from "react-router-dom";
import {Drawer, DrawerTrigger, DrawerClose, DrawerContent} from "@/components/ui/drawer.tsx";

const links = [
    {title: "Home", to: "/"},
    {title: "Collect", to: "/play"},
    {title: "About Us", to: "/about-us"},
    {title: "Partnerships", to: "/partnerships"},
    {title: "How To Participate", to: "/how-to-participate"},
    {title: "Rewards", to: "/rewards"},
    {title: "Profile", to: "/profile"},
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

    const topVariants = {
        closed: {rotate: 0, translateY: 0},
        open: {rotate: 45, translateY: 5},
    };

    const centerVariants = {
        closed: {opacity: 1},
        open: {opacity: 0},
    };

    const bottomVariants = {
        closed: {rotate: 0, translateY: 0},
        open: {rotate: -45, translateY: -5},
    };

    return (
        // <nav className={"relative"}>
        // 	<div className="w-fit">
        // 		<NavLink to={"/"}>
        // 			<img
        // 				src={"/CKSlogo.svg"}
        // 				width={80}
        // 				height={"auto"}
        // 				className={"ml-4 mt-4"}
        // 				alt="logo"
        // 			/>
        // 		</NavLink>
        // 	</div>
        // 	<motion.button
        // 		className="neo-wrap-btn fixed top-2 right-3 z-50 p-2 bg-primary shadow-md focus:ring-blue-500 focus:ring-opacity-50 w-10 h-10 rounded-full"
        // 		onClick={toggleMenu}
        // 		aria-label={isOpen ? "Close menu" : "Open menu"}
        // 	>
        // 		<svg
        // 			width="24"
        // 			height="24"
        // 			viewBox="0 0 24 24"
        // 			fill="none"
        // 			xmlns="http://www.w3.org/2000/svg"
        // 			className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        // 		>
        // 			<motion.rect
        // 				width="18"
        // 				height="2"
        // 				x="3"
        // 				y="6"
        // 				rx="1"
        // 				fill="#161616"
        // 				variants={topVariants}
        // 				animate={isOpen ? "open" : "closed"}
        // 				transition={{ duration: 0.3 }}
        // 			/>
        // 			<motion.rect
        // 				width="18"
        // 				height="2"
        // 				x="3"
        // 				y="11"
        // 				rx="1"
        // 				fill="#161616"
        // 				variants={centerVariants}
        // 				animate={isOpen ? "open" : "closed"}
        // 				transition={{ duration: 0.3 }}
        // 			/>
        // 			<motion.rect
        // 				width="18"
        // 				height="2"
        // 				x="3"
        // 				y="16"
        // 				rx="1"
        // 				fill="#161616"
        // 				variants={bottomVariants}
        // 				animate={isOpen ? "open" : "closed"}
        // 				transition={{ duration: 0.3 }}
        // 			/>
        // 		</svg>
        // 	</motion.button>
        // 	<motion.div
        // 		className="fixed top-0 right-0 z-40 bg-light overflow-hidden shadow"
        // 		initial={{ x: "100%" }}
        // 		animate={isOpen ? { x: 0 } : { x: "100%" }}
        // 		transition={{ duration: 0.4, ease: "easeIn" }}
        // 		style={{ width: "100vw", height: "100vh" }}
        // 	>
        // 		<div className="flex flex-col justify-center items-center gap-4 h-full">
        // 			{links.map((link) => (
        // 				<NavLink
        // 					onClick={toggleMenu}
        // 					className={({ isActive }) =>
        // 						isActive
        // 							? "font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-tl from-primary to-[#c25100]"
        // 							: "text-dark font-semibold text-2xl"
        // 					}
        // 					key={link.to}
        // 					to={link.to}
        // 				>
        // 					{link.title}
        // 				</NavLink>
        // 			))}
        // 		</div>
        // 	</motion.div>
        // </nav>
        <nav className={'relative'}>
            <div className="w-fit">
                <NavLink to={"/"}>
                    <img
                        src={"/CKSlogo.svg"}
                        width={80}
                        height={"auto"}
                        className={"ml-4 mt-4"}
                        alt="logo"
                    />
                </NavLink>

            </div>
            <Drawer snapPoints={[1]} fadeFromIndex={0} direction={'right'} open={isOpen} onOpenChange={setIsOpen}>
                <DrawerTrigger
                    className="neo-wrap-btn fixed top-2 right-3 z-[200] p-2 bg-primary shadow-md focus:ring-blue-500 focus:ring-opacity-50 w-10 h-10 rounded-full"
                    onClick={toggleMenu}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    >
                        <motion.rect
                            width="18"
                            height="2"
                            x="3"
                            y="6"
                            rx="1"
                            fill="#161616"
                            variants={topVariants}
                            animate={isOpen ? "open" : "closed"}
                            transition={{duration: 0.3}}
                        />
                        <motion.rect
                            width="18"
                            height="2"
                            x="3"
                            y="11"
                            rx="1"
                            fill="#161616"
                            variants={centerVariants}
                            animate={isOpen ? "open" : "closed"}
                            transition={{duration: 0.3}}
                        />
                        <motion.rect
                            width="18"
                            height="2"
                            x="3"
                            y="16"
                            rx="1"
                            fill="#161616"
                            variants={bottomVariants}
                            animate={isOpen ? "open" : "closed"}
                            transition={{duration: 0.3}}
                        />
                    </svg>
                </DrawerTrigger>
                <DrawerContent showBar={false} className={'h-svh w-screen rounded-none flex flex-col justify-center items-center space-y-3'}>
                    <DrawerClose
                        className="neo-wrap-btn fixed top-2 right-3 z-[200] p-2 bg-primary shadow-md focus:ring-blue-500 focus:ring-opacity-50 w-10 h-10 rounded-full"
                        onClick={toggleMenu}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        >
                            <motion.rect
                                width="18"
                                height="2"
                                x="3"
                                y="6"
                                rx="1"
                                fill="#161616"
                                variants={topVariants}
                                animate={isOpen ? "open" : "closed"}
                                transition={{duration: 0.3}}
                            />
                            <motion.rect
                                width="18"
                                height="2"
                                x="3"
                                y="11"
                                rx="1"
                                fill="#161616"
                                variants={centerVariants}
                                animate={isOpen ? "open" : "closed"}
                                transition={{duration: 0.3}}
                            />
                            <motion.rect
                                width="18"
                                height="2"
                                x="3"
                                y="16"
                                rx="1"
                                fill="#161616"
                                variants={bottomVariants}
                                animate={isOpen ? "open" : "closed"}
                                transition={{duration: 0.3}}
                            />
                        </svg>
                    </DrawerClose>
                    {links.map((link) => (
                        <NavLink
                            onClick={toggleMenu}
                            className={({isActive}) =>
                                isActive
                                    ? "font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-tl from-primary to-[#c25100]"
                                    : "text-dark font-semibold text-2xl"
                            }
                            key={link.to}
                            to={link.to}
                        >
                            {link.title}
                        </NavLink>
                    ))}
                </DrawerContent>
            </Drawer>
        </nav>
    )
        ;
};

export default Navbar;
