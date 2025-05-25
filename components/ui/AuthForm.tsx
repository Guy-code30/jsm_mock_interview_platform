

// Bottom code is corrected

"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import NextLink from "next/link"; // Import Link from next/link
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation

import {
    Form
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link as LucideLink } from "lucide-react"; // Alias the lucide-react Link for icons if needed
import { toast } from "sonner";
import FormField from "./FormField"; // Import your FormField component



const authFormSchema = (type: FormType) => {
    return z.object({
        name: type === 'sign-up' ? z.string().min(2) : z.string().optional(),
        email: z.string().email(),
        password: z.string().min(3),
    });
}



type FormType = "sign-in" | "sign-up"; // Define FormType

const AuthForm = ({ type }: { type: FormType }) => {
    const router = useRouter(); // Initialize the router
    const formSchema = authFormSchema(type); // Use the schema based on the type
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    interface AuthFormValues {
        username: string;
    }

    function onSubmit(values: AuthFormValues) {
        try {
            if (type === "sign-up") {
                toast.success("Account created successfully. Plese sign in");
                router.push('/sign-in');
            } else {
                toast.success("Sign in successful");
                router.push('/');
            }
            // Perform sign-in or sign-up logic here
            // For example, you can call an API endpoint to handle authentication
            // and then redirect the user based on the response.
            toast.success("Success");
        } catch (error) {
            console.log(error);
            toast.error("An error occurred");
        }
    }


    const isSignIn = type === "sign-in";

    return (
        <div className="card-border lg:min-w-[566px]">
            <div className="flex flex-col gap-6 card py-14 px-10">
                <div className="flex flex-row gap-2 justify-center">
                    <Image src="/logo.svg" alt="logo" height={32} width={38} />
                    <h2 className="text-primary-100">PrepWise</h2>
                </div>
                <h3>Practice job interview with Ai</h3>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
                        {!isSignIn && (<FormField control={form.control}
                        name="name" label="Name" placeholder="Your Name" />)}
                        <FormField control={form.control}
                        name="email" label="Email" placeholder="Your Email Address" type="email" />
                        <FormField control={form.control}
                        name="password" label="Password" placeholder="Enter your password" type="password" />
                        <Button className="btn" type="submit">{isSignIn ? 'Sign in' : 'Create an Account'}</Button>
                    </form>
                </Form>
                <p className="text-center">
                    {isSignIn ? 'No account yet?' : 'Have and account already?'}
                    <NextLink href={!isSignIn ? '/sign-in' : '/sign-up'} className="font-bold text-user-primary ml-1">
                        {!isSignIn ? "Sign in" : 'Sign up'}
                    </NextLink>
                </p>
            </div>
        </div>
    );
};

export default AuthForm;



// "use client";

// import { z } from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import Image from "next/image";

// import {
//     Form,
//     FormControl,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
//     FormDescription,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Link } from "lucide-react";

// const formSchema = z.object({
//     username: z.string().min(2).max(50),
// });

// const AuthForm = ({ type }: { type: FormType }) => {
//     const form = useForm({
//         resolver: zodResolver(formSchema),
//         defaultValues: {
//             username: "",
//         },
//     });

//     interface AuthFormValues {
//         username: string;
//     }

//     function onSubmit(values: AuthFormValues) {
//         console.log(values);
//     }

//     const isSignIn = type === "sign-in";

//     return (
//         <div className="card-border lg:min-w-[566px]">
//             <div className="flex flex-col gap-6 card py-14 px-10">
//                 <div className="flex flex-row gap-2 justify-center">
//                     <Image src="/logo.svg" alt="logo" height={32} width={38} />
//                     <h2 className="text-primary-100">PrepWise</h2>
//                 </div>
//                 <h3>Practice job interview with Ai</h3>

//                 <Form {...form}>
//                     <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
//                         {!isSignIn && <p>Name</p>}
//                         <p>Email</p>
//                         <p>Password</p>
//                         <Button className="btn" type="submit">{isSignIn ? 'Sign in' : 'Create an Account'}</Button>
//                     </form>
//                 </Form>
//                 <p className="text-center">
//                     {isSignIn ? 'No account yet?' : 'Have and account already?'}
//                     <Link href={!isSignIn ? '/sign-in' : '/sign-up'} className="font-bold text-user-primary ml-1">
//                         {!isSignIn ? "Sign in" : 'Sign up'}
//                     </Link>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default AuthForm;


// AI edited 