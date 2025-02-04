import { z } from "zod";

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(100, "Password is too long"),
});

export const bannerSchema = z.object({
  label: z.string(),
  imageUrl: z.string(),
});

export const contactInfoSchema = z.object({
  name: z.string().min(1, "Vui lòng nhập họ và tên"),
  email: z.string().email("Vui lòng nhập đúng định dạng email"),
  phone: z.string().min(1, "Vui lòng nhập số điện thoại"),
  message: z.string().min(1, "Vui lòng nhập nội dung tin nhắn"),
});