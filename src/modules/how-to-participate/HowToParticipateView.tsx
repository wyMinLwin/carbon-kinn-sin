import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const HowToParicipateView = () => {
	return (
		<section className={"py-4 sm:px-10 container mx-auto"}>
			<motion.h1
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				viewport={{ once: true }}
				transition={{
					duration: 0.7,
					ease: "easeOut",
					type: "spring",
					stiffness: 100,
				}}
				className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#E4252A]"
			>
				How To Participate
			</motion.h1>
			<ul className="py-8 space-y-6">
				<li className="">
					<h2 className="text-xl font-semibold text-pretty">Step 1. Ready</h2>
					<p className="text-lg font-medium text-pretty">
						Go to collect page or{" "}
						<NavLink className={"underline"} to={"/"}>
							Click here
						</NavLink>
						.
					</p>
				</li>
				<li className="">
					<h2 className="text-xl font-semibold text-pretty">Step 2. Check</h2>
					<p className="text-lg font-medium text-pretty">
						Check the map in order to know where the stickers are.
					</p>
				</li>
				<li className="">
					<h2 className="text-xl font-semibold text-pretty">Step 3. Go</h2>
					<p className="text-lg font-medium text-pretty">
						Find the sticker around the city.
					</p>
				</li>
				<li className="">
					<h2 className="text-xl font-semibold text-pretty">Step 4. Scan</h2>
					<p className="text-lg font-medium text-pretty">
						Scan the QR code from sticker.
					</p>
					<p className="text-lg font-medium text-pretty text-transparent bg-clip-text bg-gradient-to-r from-[#c25100] to-[#E4252A] w-fit">
						Congrats! you have collected a sticker. Keep going!
					</p>
				</li>
			</ul>

			<div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start items-center py-8">
				<Button size="lg" className="neo-wrap neo-wrap-btn w-[270px]">
					Start Collecting
				</Button>
				<Button
					size="lg"
					variant="outline"
					className="space-x-2 neo-wrap neo-wrap-btn w-[270px]"
				>
					<span>Check the rewards</span>
				</Button>
			</div>

			<div className="py-8">
				<h2>Here are some tips from our team for you</h2>
				<ul className="list-disc list-inside space-y-2">
					<li>Charge your phone - it's your sticker-scanning superpower!</li>
					<li>Wear your comfiest shoes - you've got a city to explore!</li>
					<li>Stay hydrated - sticker hunting is thirsty work!</li>
				</ul>
			</div>
		</section>
	);
};

export default HowToParicipateView;
