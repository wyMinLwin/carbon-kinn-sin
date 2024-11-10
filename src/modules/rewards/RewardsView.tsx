import {
    Card,
    CardHeader,
    CardTitle,
    CardContent
} from "@/components/ui/card"
import {GiftIcon, MapPinIcon, PackageIcon, PackageOpenIcon} from "lucide-react";
import {motion} from "framer-motion";

const rewardTiers = [
    {
        title: "Completion of 3 Stickers",
        stickers: 3,
        rewards: ["Respective sticker pack"],
        description: "Complete by collecting any 3 stickers."
    },
    {
        title: "Completion of 6 Stickers",
        stickers: 6,
        rewards: ["Pouch"],
        description: "Complete by collecting any 6 stickers."
    },
    {
        title: "Completion of 9 Stickers",
        stickers: 9,
        rewards: ["Purple upcycled things"],
         description: "Complete by collecting any 9 stickers."
    },
    {
        title: "Completion of 12 Stickers",
        stickers: 12,
        rewards: ["Tote bag"],
         description: "Complete by collecting any 12 stickers."
    },
    {
        title: "Completion of 15 Stickers",
        stickers: 15,
        rewards: ["Water bottle"],
         description: "Complete by collecting any 15 stickers."
    },

]

const specialAchievements = [
    {
        title: "Special Stickers",
        description: "Find special stickers to get mysterious rewards.",
        icon: <MapPinIcon className="w-8 h-8 text-red-500"/>
    },
    {
        title: "Collection of 1 theme",
        description: "Find 1 collection of stickers to get mysterious rewards.",
        icon: <PackageOpenIcon className="w-8 h-8 text-red-500"/>
    },
    {
        title: "Collection of 2 theme",
        description: "Find 2 collections of stickers to get mysterious rewards.",
        icon: <PackageIcon className="w-8 h-8 text-red-500"/>
    },
    {
        title: "Collection of 3 theme",
        description: "Find 3 collections of stickers to get mysterious rewards.",
        icon: <GiftIcon className="w-8 h-8 text-red-500"/>
    },

]

const RewardsView = () => {
    return (
        <section className={"container mx-auto px-4 md:px-20"}>
            <div className="py-16">
                <h2 className="text-2xl font-semibold mb-4 ">Rewards</h2>
                <div className="grid gap-6 lg:grid-cols-3">
                    {rewardTiers.map((tier,index) => (
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
                            key={index}
                            className={'flex-grow'}
                        >
                            <Card className="h-full overflow-hidden neo-wrap">
                                <CardHeader className="">
                                    <CardTitle className="flex items-center justify-between">
                                        <div className=" text-dark font-semibold">{tier.title}</div>
                                    </CardTitle>
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
                    <h2 className="text-2xl font-semibold mb-4 ">Mysterious Rewards</h2>
                    <div className="grid gap-6 lg:grid-cols-3">
                        {specialAchievements.map((achievement, index) => (
                            <div key={index} className={'flex-grow'}>
                                <Card className={'neo-wrap h-full'}>
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