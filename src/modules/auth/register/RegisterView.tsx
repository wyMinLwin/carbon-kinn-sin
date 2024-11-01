import useBlockAnimation from "@/hooks/useBlockAnimation.ts";
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import {useState} from "react"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {NavLink} from "react-router-dom";
import {UpdateIcon} from "@radix-ui/react-icons";
import {EyeIcon, EyeOffIcon} from "lucide-react";

const FormSchema = z.object({
    name: z.string().regex(/^[a-zA-Z\s]+$/, {message: "Enter a valid name."}),
    email: z.string().email(),
    password: z.string().min(4, {
        message: "Password must contain at least 4 characters.",
    }),
    phone: z.string({required_error: "Phone Required."})
        .regex(/^\+?\d{10,}$/, {message: "Enter a valid phone number."}),

})

const RegisterView = () => {
    const [showPassword, setShowPassword] = useState(false)
    const {blocks} = useBlockAnimation()
    const [isLoading, setIsLoading] = useState(false)
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        setIsLoading(true)
        console.log(data)
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    }

    return (
        <section className="auth-container bg-[#ffc300]">
            <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-svh">
                <div className={'h-full py-2 flex overflow-y-auto'}>
                    <div
                        className="w-[90vw] m-auto p-6 md:p-10 md:px-12 gap-1 bg-gray-50 flex flex-col items-center rounded-lg shadow-white/10 shadow-lg max-w-[480px]">
                        <img src={'/CKSlogo.svg'} width={120} height={'auto'} alt="logo"/>
                        <h3 className="md:text-3xl leading-[0.8] text-2xl font-medium tracking-tighter text-center mt-2">
                            Welcome
                        </h3>

                        <p className="text-sm text-center text-gray-500">
                            Create your account below
                        </p>

                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="w-full space-y-5"
                            >
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input
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
                                    name="email"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input
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
                                    name="phone"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Phone</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter your phone..."
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
                                    name="password"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <Input

                                                        type={showPassword ? 'text' : "password"}
                                                        placeholder="Enter your password..."
                                                        disabled={isLoading}
                                                        {...field}
                                                    />
                                                    <Button
                                                        type="button"
                                                        variant="ghost"
                                                        size="sm"
                                                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                                        onClick={() => setShowPassword((prev) => !prev)}
                                                    >
                                                        {showPassword ? (
                                                            <EyeIcon className="h-4 w-4" aria-hidden="true"/>
                                                        ) : (
                                                            <EyeOffIcon className="h-4 w-4" aria-hidden="true"/>
                                                        )}
                                                        <span
                                                            className="sr-only">{showPassword ? 'Hide password' : 'Show password'}</span>
                                                    </Button>

                                                    {/* hides browsers password toggles */}

                                                </div>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <Button
                                    type="submit"
                                    className="w-full"
                                    disabled={isLoading}
                                >
                                    {isLoading && <UpdateIcon className="mr-2 h-4 w-4 animate-spin"/>}
                                    Register
                                </Button>
                            </form>
                        </Form>

                        <div className="flex items-center justify-center mt-2 gap-2 w-4/5 ">
                            <div className="grow h-[1px] bg-gray-300"></div>
                            <span className={'text-gray-500 mb-1'}>or</span>
                            <div className="grow h-[1px] bg-gray-300"></div>
                        </div>

                        <div>
                            <NavLink to={'/auth/login'} className="text-sm text-[#ffc300] hover:text-[#d3a203]">Already
                                have an account? </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="auth-boxes z-0">
                {blocks.map((b, i) => {
                    return <li key={i} style={b}></li>
                })}
            </ul>
        </section>
    );
}

export default RegisterView;