import { Button } from "@/components/ui/button.tsx";
import { motion } from "framer-motion";
import {
	AlertTriangle,
	ChartBarIcon,
	GiftIcon,
	MapPinIcon,
	ScanIcon,
} from "lucide-react";

const steps = [
	{ icon: MapPinIcon, text: "Find stickers around the city" },
	{ icon: ScanIcon, text: "Scan or enter the sticker code" },
	{ icon: ChartBarIcon, text: "Track your progress" },
	{ icon: GiftIcon, text: "Redeem exciting rewards" },
];
const HomeView = () => {
	return (
		<section className={"p-2"}>
			<article className={"mt-4"}>
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
					Welcome to the Zero Carbon Campaign
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 2, delay: 0.3 }}
					className="text-lg text-center max-w-2xl mx-auto"
				>
					Our campaign aims to raise awareness about carbon neutrality and
					encourage sustainable practices in our city. By collecting stickers
					placed around the city, you can learn about carbon reduction
					initiatives, track your progress, and win exciting rewards!
				</motion.p>
			</article>

			<motion.h2
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				viewport={{ once: true }}
				transition={{
					delay: 0.3,
					duration: 0.7,
					ease: "easeOut",
					type: "spring",
					stiffness: 100,
				}}
				className={
					"text-2xl font-semibold flex flex-col items-center mt-8 text-transparent bg-clip-text bg-gradient-to-r from-[#E4252A] to-primary"
				}
			>
				<span>Find, Collect, and Win!</span>
				<span>Join the Zero Carbon Movement</span>
			</motion.h2>

			<motion.div
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				viewport={{ once: true }}
				transition={{
					delay: 0.3,
					duration: 0.7,
					ease: "easeOut",
					type: "spring",
					stiffness: 100,
				}}
				className={"flex justify-center items-center mt-8"}
			>
				<Button className={"neo-wrap neo-wrap-btn w-[180px]"}>
					Start Collecting
				</Button>
			</motion.div>

			<div className="py-16">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-center mb-12">How it Works</h2>
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						{steps.map((step, index) => (
							<motion.div
								initial={{ scale: 0 }}
								whileInView={{ scale: 1 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.6,
									ease: "easeOut",
									type: "spring",
									stiffness: 70,
								}}
								key={index}
								className="flex flex-col items-center text-center"
							>
								<div className="bg-primary text-primary-foreground rounded-full p-4 mb-4">
									<step.icon size={32} />
								</div>
								<p className="font-medium">{`${index + 1}. ${step.text}`}</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 2, delay: 0.3 }}
				className="container mx-auto px-4 py-16 text-center"
			>
				<h2 className="text-3xl font-bold mb-8">Ready to Make a Difference?</h2>
				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
					<Button size="lg" className="neo-wrap neo-wrap-btn w-[270px]">
						Start Collecting
					</Button>
					<Button
						size="lg"
						variant="outline"
						className="space-x-2 neo-wrap neo-wrap-btn w-[270px]"
					>
						<AlertTriangle size={20} />
						<span>Report Damaged Sticker</span>
					</Button>
				</div>
			</motion.div>

			<footer className={"text-center text-sm text-dark/50"}>
				&copy; 2024 Carbon Kinn Sin x Code Mal reserved everything
			</footer>
		</section>
	);
};

export default HomeView;
