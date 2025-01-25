import { z } from "zod";

export const signInSchema = z.object({
    email: z.string()
        .min(1, "Email is required")
        .email("Please enter a valid email address"),
    password: z.string()
        .min(1, "Password is required")
        .min(8, "Password must be at least 8 characters")
        .max(100, "Password is too long")
});

export type SignInFormData = z.infer<typeof signInSchema>;