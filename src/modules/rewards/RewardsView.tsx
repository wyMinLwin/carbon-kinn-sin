import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent
} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge";
import {BrainIcon, DropletsIcon, LeafyGreenIcon, MapPinIcon, WindIcon} from "lucide-react";
import {motion} from "framer-motion";

const rewardTiers = [
    {
        tier: 1,
        title: "Completion of 1 Theme",
        stickers: 5,
        rewards: ["Digital Badge", "Sticker Pack"],
        description: "Complete any one theme by collecting all five stickers.",
        icon: <LeafyGreenIcon className="w-12 h-12 text-green-500"/>
    },
    {
        tier: 2,
        title: "Completion of 3 Themes",
        stickers: 15,
        rewards: ["Eco-friendly Tote Bag or Water Bottle", "Certificate"],
        description: "Show your commitment to the zero-carbon lifestyle.",
        icon: <DropletsIcon className="w-12 h-12 text-blue-500"/>
    },
    {
        tier: 3,
        title: "Completion of All Themes",
        stickers: 25,
        rewards: ["Exclusive 'Zero Carbon Hero' Gift Set"],
        description: "Become a Zero Carbon Hero and receive a unique gift set.",
        icon: <WindIcon className="w-12 h-12 text-purple-500"/>
    }
]

const specialAchievements = [
    {
        title: "Limited Edition Stickers",
        description: "Find special stickers at specific locations or events.",
        icon: <MapPinIcon className="w-8 h-8 text-red-500" />
    },
    {
        title: "Riddle Solving",
        description: "Solve riddles to find hidden stickers and earn the 'Zero Carbon Detective' badge.",
        icon: <BrainIcon className="w-8 h-8 text-yellow-500" />
    },

]

const RewardsView = () => {
    return (
        <section className={"container mx-auto px-4 md:px-20"}>
            <div className="py-16">
                <h2 className="text-2xl font-semibold mb-4 ">Rewards</h2>
                <div className="grid gap-6 lg:grid-cols-3">
                    {rewardTiers.map((tier) => (
                        <motion.div
                            initial={{scale: 0}}
                            whileInView={{scale: 1}}
                            viewport={{once: true}}
                            transition={{
                                duration: 0.35,
                                ease: "easeOut",
                                type: "spring",
                                stiffness: 50,
                            }}
                            key={tier.tier}
                            className={'flex-grow'}
                        >
                            <Card className="h-full overflow-hidden neo-wrap">
                                <CardHeader className="">
                                    <CardTitle className="flex items-center justify-between">
                                        <div>Tier {tier.tier}</div>
                                    </CardTitle>
                                    <CardDescription className="text-dark font-semibold">{tier.title} <Badge
                                        variant="secondary" className="mb-2 bg-accent">
                                        {tier.stickers} Stickers
                                    </Badge></CardDescription>
                                </CardHeader>
                                <CardContent className="">
                                    <p className="text-sm text-gray-600 mb-2">{tier.description}</p>

                                    <ul className="list-disc list-inside text-sm text-gray-700">
                                        {tier.rewards.map((reward, index) => (
                                            <li key={index}>{reward}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
                <div className="py-16">
                    <h2 className="text-2xl font-semibold mb-4 ">Special Achievements</h2>
                    <div className="grid gap-6 lg:grid-cols-3">
                        {specialAchievements.map((achievement, index) => (
                            <div key={index} className={'flex-grow'}>
                                <Card className={'neo-wrap'}>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            {achievement.icon}
                                            <span>{achievement.title}</span>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-gray-600">{achievement.description}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RewardsView;