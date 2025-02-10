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

export const contactInfoSchema = z.object({
  name: z.string().min(1, "Vui lòng nhập họ và tên"),
  email: z.string().email("Vui lòng nhập đúng định dạng email"),
  phone: z.string().min(1, "Vui lòng nhập số điện thoại"),
  message: z.string().min(1, "Vui lòng nhập nội dung tin nhắn"),
});

export const bannerSchema = z.object({
  title: z.string().min(1, "Vui lòng nhập tiêu đề"),
  imageString: z.string().min(1, "Vui lòng chọn hình ảnh"),
});

export const productSchema = z.object({
  name: z.string().min(1, "Vui lòng nhập tên sản phẩm"),
  description: z.string(),
  status: z.enum(["draft", "published", "archived"]),
  price: z.coerce.number().refine((val) => !isNaN(val) && val > 0, {
    message: "Vui lòng nhập giá hợp lệ và lớn hơn 0",
  }),
  images: z.array(z.string()).min(1, "Vui lòng tải lên ít nhất một hình ảnh"),
  category: z.enum(["printer", "scan", "product"]),
  isFeatured: z.boolean().optional(),
});
