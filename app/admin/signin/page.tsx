"use client";

import { Button } from '@/components/ui/button'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from "@/components/ui/input"
import GoogleSignIn from '@/components/google-signin'
import { useForm } from 'react-hook-form'
import { signInSchema } from '@/lib/zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast';
import { signIn } from '@/app/actions/authActions';

const Login = () => {
    const router = useRouter();
    const form = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof signInSchema>) => {
        try {
            const result = await signIn(values);
            
            if (result.error) {
                toast.error(result.error);
                return;
            }

            toast.success("Signed in successfully");
            router.push('/dashboard');
            router.refresh();
        } catch (error) {
            toast.error("An unexpected error occurred");
            console.error("Login error:", error);
        }
    };

    return (
        <div className="flex w-full min-h-screen items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <div className="flex flex-col gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl">Login</CardTitle>
                            <CardDescription>
                                Enter your email below to login to your account
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(onSubmit)}
                                    className="space-y-4"
                                >
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="email"
                                                        placeholder="Enter your email address"
                                                        autoComplete="off"
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
                                                    <Input
                                                        type="password"
                                                        placeholder="Enter password"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <Button 
                                        className="w-full" 
                                        type="submit" 
                                        disabled={form.formState.isSubmitting}
                                    >
                                        {form.formState.isSubmitting ? "Signing in..." : "Sign in"}
                                    </Button>
                                </form>
                            </Form>
                            <span className="text-sm text-gray-500 text-center block my-2">
                                or
                            </span>
                            <GoogleSignIn />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Login