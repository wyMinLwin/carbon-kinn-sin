import {useState, ReactNode} from "react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog"

import {useToast} from "@/hooks/use-toast.ts";
import z from "zod"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button.tsx";
import {Input} from "@/components/ui/input.tsx";
import api from "@/api";

const FormSchema = z.object({
    photo: z.instanceof(File, {message: "Please provide a photo of the damaged sticker"}),
    location: z.string({required_error: "Please provide a more detailed location"}).min(5, {message: "Please provide a more detailed location"}),
})
const ReportDamagedSticker = ({children}: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false)
    const {mutate: report} = api.report.report.useMutation({
        onSuccess: () => {
            toast({
                title: "Sticker reported",
                description: "Thank you for helping us improve!",
            })
        },
        onError: () => {
            toast({
                title: "Failed to sent!",
                description: "You can only sent one report per hour",
                variant: 'destructive'
            })
        },
    })

    const {toast} = useToast()
    // const { toast } = useToast()

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        // loginUser(data)
        // console.log(data)
        report(data)

    }

    // try {}

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className=" w-[95%] sm:w-[430px]">
                <DialogHeader>
                    <DialogTitle>Report a Damaged Sticker</DialogTitle>
                    <DialogDescription>
                        Help us improve! Upload a photo of the damaged sticker and tell us where you found it.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="w-full space-y-5"
                    >
                        <FormField
                            control={form.control}
                            name="photo"
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            render={({field: {value, onChange, ...fieldProps}}) => (
                                <FormItem>
                                    <FormLabel>Resume</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...fieldProps}
                                            type="file"
                                            accept="image/png, image/jpeg, image/jpg, image/webp"
                                            onChange={(event) =>
                                                onChange(event.target.files && event.target.files[0])
                                            }
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="location"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Location</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Where did you find the damaged sticker?"
                                            className="min-h-[150px] w-full neo-wrap neo-wrap-form"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <div className={'flex'}>
                            <Button type={'submit'} variant={'destructive'}
                                    className={'w-[150px] neo-wrap-btn ml-auto'}>
                                Report Now
                            </Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

export default ReportDamagedSticker;