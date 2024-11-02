import {motion} from 'framer-motion'
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {
    Leaf,
    Wind,
    Droplet,
    SendHorizonalIcon,
    MapPinIcon,
    PhoneIcon,
    MailIcon
} from 'lucide-react'
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useState} from "react";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {UpdateIcon} from "@radix-ui/react-icons";
import {Textarea} from "@/components/ui/textarea.tsx";

const cardTransition = {
    duration: 0.35,
    ease: "easeOut",
    type: "spring",
    stiffness: 50,
}
const fadeIn = {
    hidden: {opacity: 0},
    visible: {opacity: 1, transition: {duration: 0.6}}
}

const FormSchema = z.object({
    name: z.string({required_error: "Name Required!"}).regex(/^[a-zA-Z\s]+$/, {message: "Enter a valid name."}),
    email: z.string().email(),
    message: z.string().min(8, {
        message: "Message must contain at least 8 characters.",
    }),


})
const AboutUsView = () => {

    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            name: "",
            message: "",
        }
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        // loginUser(data)
        setIsLoading(true)
        console.log(data)
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }

    return (
        <section className={'py-4 container mx-auto px-4 md:px-20'}>

            <motion.div
                className="mb-16"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <h2 className="text-3xl font-bold mb-8 ">
                    Our Mission</h2>
                <h2 className="text-3xl font-semibold mb-6 text-blue-600"></h2>
                <p className="mb-4 text-lg leading-relaxed text-gray-700">
                    Our campaign is dedicated to raising awareness about the critical importance of achieving a
                    zero-carbon future. We believe that by educating and empowering individuals and communities, we can
                    make significant strides towards reducing our carbon footprint and mitigating the effects of climate
                    change.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                    Through various initiatives, educational programs, and partnerships, we aim to inspire action and
                    drive meaningful change towards a sustainable, carbon-neutral world.
                </p>
            </motion.div>

            <motion.div
                className="mb-16 "
            >
                <h2 className="text-3xl font-bold mb-8">Environmental
                    Benefits</h2>
                <div className="grid lg:grid-cols-3 gap-6">
                    <motion.div
                        initial={{scale: 0}}
                        whileInView={{scale: 1}}
                        viewport={{once: true}}
                        transition={cardTransition}
                        className={'flex-grow'}
                    >
                        <Card className="h-full bg-green-100 neo-wrap hover:scale-105 duration-300 ease-in-out">
                            <CardHeader>
                                <CardTitle className="flex items-center text-green-700">
                                    <Leaf className="mr-2"/>
                                    Reduced Emissions
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700">A zero-carbon lifestyle can reduce greenhouse gas emissions
                                    by
                                    up
                                    to 70%, significantly slowing climate change.</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div
                        initial={{scale: 0}}
                        whileInView={{scale: 1}}
                        viewport={{once: true}}
                        transition={cardTransition}
                        className={'flex-grow'}
                    >
                        <Card className="h-full bg-blue-100 neo-wrap hover:scale-105 duration-300 ease-in-out">
                            <CardHeader>
                                <CardTitle className="flex items-center text-blue-700">
                                    <Wind className="mr-2"/>
                                    Improved Air Quality
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700">Transitioning to clean energy sources can lead to a 30%
                                    improvement
                                    in air quality in urban areas.</p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{scale: 0}}
                        whileInView={{scale: 1}}
                        viewport={{once: true}}
                        transition={cardTransition}
                        className={'flex-grow'}
                    >
                        <Card className="h-full bg-teal-100 neo-wrap hover:scale-105 duration-300 ease-in-out">
                            <CardHeader>
                                <CardTitle className="flex items-center text-teal-700">
                                    <Droplet className="mr-2"/>
                                    Biodiversity Protection
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700">Reducing carbon emissions helps preserve ecosystems,
                                    potentially
                                    saving up to 1 million species from extinction.</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                className="mb-16"
                initial={{scale: 0}}
                whileInView={{scale: 1}}
                viewport={{once: true}}
                transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 60,
                }}
            >
                <h2 className="text-3xl font-bold text-center mb-8">
                    Contact Us</h2>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="mx-auto w-full sm:w-[430px] flex flex-col gap-3"
                    >
                        <FormField
                            control={form.control}
                            name="email"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            className={'neo-wrap neo-wrap-form'}
                                            placeholder="Enter your email..."
                                            disabled={isLoading}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="name"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            className={'neo-wrap neo-wrap-form'}
                                            placeholder="Enter your name..."
                                            disabled={isLoading}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Enter your message..."
                                            className="min-h-[150px] neo-wrap neo-wrap-form"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <Button
                            type="submit"
                            className="w-full neo-wrap neo-wrap-btn font-semibold mt-4 "
                            disabled={isLoading}
                        >

                            Send
                            {isLoading ? <UpdateIcon className="ml-2 h-4 w-4"/> :
                                <SendHorizonalIcon className="ml-2 h-4 w-4"/>}
                        </Button>
                    </form>
                </Form>
            </motion.div>


            <div className="mb-16">
                <motion.div
                    initial={{scale: 0}}
                    whileInView={{scale: 1}}
                    viewport={{once: true}}
                    transition={cardTransition}>
                    <Card className="mx-auto w-full sm:w-[430px] neo-wrap hover:scale-105 duration-300 ease-in-out">
                        <CardContent className={'p-3 space-y-2.5'}>
                            <div className={'flex justify-start items-center gap-1.5'}>
                                <MapPinIcon/> Krung Thonburi, Bangkok, Thailand
                            </div>
                            <div className={'flex justify-start items-center gap-1.5'}>
                                <PhoneIcon/> 00000000000
                            </div>
                            <div className={'flex justify-start items-center gap-1.5'}>
                                <MailIcon/> testing@gmail.com
                            </div>

                            <div className={'flex justify-center items-center gap-5'}>
                                <img src={'/fb.svg'} width={30} height={30} alt={'social media'}/>
                                <img src={'/ig.svg'} width={30} height={30} alt={'social media'}/>
                                <img src={'/tt.svg'} width={30} height={30} alt={'social media'}/>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>


        </section>
    )
}

export default AboutUsView;