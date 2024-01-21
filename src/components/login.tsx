
import { Form, FormField, FormControl, FormItem, FormLabel, FormDescription, FormMessage } from "./ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const formSchema = z.object({
    mail:z
        .string()
        .email("Enter a valid Mail id"),
    password:z
        .string()
        .min(5,"Minumum 5 characters"),
})

const Login =() =>{

    const form = useForm<z.infer<typeof formSchema>>({
        resolver:zodResolver(formSchema),
    })

    const onSubmit =(values: z.infer<typeof formSchema>) =>{
        console.log(values);
    }
    return (
    <div className="flex items-center h-[80svh]bg-secondary">
    <Form {...form}>
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-2 border-muted border-2 p-12 bg-primary-foreground rounded-xl"
        >
            <h1 className="text-bold text-center text-3xl">Login</h1>

                <FormField
                control={form.control}
                name="mail"
                render={({field}) =>(
                    <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                            <Input placeholder="johndoe@mail.com" {...field}/>
                        </FormControl>
                    </FormItem>
                )}/>
                <FormField
                control={form.control}
                name="password"
                render={({field}) =>(
                    <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input placeholder="Password" {...field} type="password"/>
                        </FormControl>
                    </FormItem>
                )}/>
                <Button>Sign Up</Button>
        </form>

    </Form>
    </div>
    );
}

export default Login;