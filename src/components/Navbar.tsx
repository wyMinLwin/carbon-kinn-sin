import {useState} from "react";
import {motion} from "framer-motion";

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
        <nav className={'relative'}
        >
            <img src={'/CKSlogo.svg'} width={80} height={'auto'} className={'ml-4 mt-4'} alt="logo"/>
            <motion.button
                className="fixed top-4 right-4 z-50 p-2 bg-white shadow-md focus:ring-blue-500 focus:ring-opacity-50 w-12 h-12 rounded-full"
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
                        fill="currentColor"
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
                        fill="currentColor"
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
                        fill="currentColor"
                        variants={bottomVariants}
                        animate={isOpen ? "open" : "closed"}
                        transition={{duration: 0.3}}
                    />
                </svg>
            </motion.button>
            <motion.div
                className="fixed top-0 right-0 z-40 bg-light overflow-hidden shadow "
                initial={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "50%",
                    top: "1rem",
                    right: "1rem",
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
                            width: "3rem",
                            height: "3rem",
                            borderRadius: "50%",
                            top: "1rem",
                            right: "1rem",
                        }
                }
                transition={{duration: 0.55}}
            >
                <ul className="flex flex-col justify-center items-center gap-4 h-full">

                </ul>
            </motion.div>
        </nav>
    )
}

export default Navbar;