"use client"

import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import PasswordToggleInput from '@/components/ui/auth/password-input'
import { useLogIn } from '@/api/auth/login'
import Loader from '@/components/ui/loader'
 
const formSchema = z.object({
    username: z.string().min(1, {
        message: "Username is required",
    }),
    password: z.string().min(1, {
        message: "Password is required",
    }),
  })

function Page() {
    const {mutate, isPending} = useLogIn();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        mutate(values)
    }
    return (
        <div className='text-[#434343] h-screen grid place-content-center'>
            <div className='max-w-md mx-auto bg-[#F1F1F1] p-6 md:p-12 w-full'>
                <article className='text-center space-y-4'>
                    <h3 className='text-2xl font-medium'>Login</h3>
                    <p className='text-sm'>Hey, enter your details to get sign in to your account.</p>
                </article>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 pt-10">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input 
                                            placeholder="Enter your username" 
                                            className='h-11 shadow-none border-[#D5D8DA] focus-visible:border-[#205BF3]' 
                                            {...field} 
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <PasswordToggleInput placeholder='********' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button 
                            type="submit" 
                            className='bg-[#205BF3] w-full h-12'
                            disabled={isPending}
                        >
                            {isPending ? <Loader /> : "Submit"}
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default Page