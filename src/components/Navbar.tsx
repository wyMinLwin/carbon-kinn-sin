import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const links = [
	{
		title: "Home",
		to: "/",
	},
	{
		title: "About Us",
		to: "/about-us",
	},
	{
		title: "How To Participate",
		to: "/how-to-participate",
	},
];

const Navbar = () => {

	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

	const topVariants = {
		closed: { rotate: 0, translateY: 0 },
		open: { rotate: 45, translateY: 5 },
	};

	const centerVariants = {
		closed: { opacity: 1 },
		open: { opacity: 0 },
	};

	const bottomVariants = {
		closed: { rotate: 0, translateY: 0 },
		open: { rotate: -45, translateY: -5 },
	};

	return (
		<nav className={"relative"}>
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
			<motion.button
				className="neo-wrap-btn fixed top-2 right-3 z-50 p-2 bg-primary shadow-md focus:ring-blue-500 focus:ring-opacity-50 w-10 h-10 rounded-full"
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
						transition={{ duration: 0.3 }}
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
						transition={{ duration: 0.3 }}
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
						transition={{ duration: 0.3 }}
					/>
				</svg>
			</motion.button>
			<motion.div
				className="fixed top-0 right-0 z-40 bg-light overflow-hidden shadow "
				initial={{
					width: "2.5rem",
					height: "2.5rem",
					borderRadius: "1rem",
					top: "0.5rem",
					right: "0.75rem",
				}}
				animate={
					isOpen
						? {
								width: "100vw",
								height: "100vh",
								borderRadius: "0%",
								top: 0,
								right: 0,
						  }
						: {
								width: "2.5rem",
								height: "2.5rem",
								borderRadius: "1rem",
								top: "0.5rem",
								right: "0.75rem",
						  }
				}
				transition={{ duration: 0.35 }}
			>
				<motion.div
					initial={{opacity: 0}}
					animate={
						isOpen
							? {
								opacity:1
							}
							: {
								opacity: 0
							}
					}
					transition={{ duration: 0.15 }}
					className="flex flex-col justify-center items-center gap-4 h-full">
					{links.map((link) => (
						<NavLink
                            onClick={toggleMenu}
							className={({ isActive }) =>
								isActive ? " font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-tl from-primary to-[#c25100]" : "text-dark font-semibold text-2xl"
							}
							key={link.to}
							to={link.to}
						>
							{link.title}
						</NavLink>
					))}
				</motion.div>
			</motion.div>
		</nav>
	);
};
export default Navbar;
