import {motion} from "framer-motion";
import {Badge} from "@/components/ui/badge.tsx";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";

const fadeIn = {
    hidden: {opacity: 0},
    visible: {opacity: 1, transition: {duration: 0.8}}
}

const PartnershipsView = () => {
    return (
        <section className={'py-4 container mx-auto px-4 md:px-20'}>
            <motion.div
                className="mb-16"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <h1 className="text-3xl font-bold mb-8 ">
                    Our Partnerships</h1>
                <h2 className="mb-4 text-lg leading-relaxed text-gray-700">
                    Thanks to our partnership, our campaign is driving real change toward a cleaner, greener future!
                </h2>
            </motion.div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <motion.a
                        initial={{opacity: 0, scale: 0}}
                        whileInView={{opacity: 1, scale: 1}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                        href={'https://codemal.com/'} className={'flex-grow'} target={'_blank'}>
                        <Card className={'neo-wrap h-full'}>
                            <CardHeader className={'pb-3'}>
                                <CardTitle>
                                    <img
                                        src={"https://media.licdn.com/dms/image/v2/D560BAQF_W5PLJr96uQ/company-logo_200_200/company-logo_200_200/0/1727709819725/code_mal_official_logo?e=2147483647&v=beta&t=nZHIaZQbmZNaMYWdj2-HlcfT6q5f2MOsBIdb2tCPNYM"}
                                        alt={'code mal logo'} width={60} height={60}/>
                                    <p className={'mt-3'}>
                                        Code Mal
                                    </p>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Badge
                                    variant="secondary"
                                    className=" shadow-sm border-[1px] border-dark/5 mb-3  bg-accent">
                                    Technology
                                </Badge>
                                <CardDescription className={'text-dark/80 font-medium'}>
                                    Shaping the Future of Myanmar with Programming and Tech.
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </motion.a>

                </div>
            </div>
        </section>
    )
}

export default PartnershipsView;