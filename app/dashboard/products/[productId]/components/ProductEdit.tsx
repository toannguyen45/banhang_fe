"use client";

import { editProduct } from "@/app/actions/productActions";
import FileInput from "@/app/components/ui/FileInput";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { productSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { $Enums } from "@prisma/client";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

interface ProductEditProps {
  data: {
    id: string;
    name: string;
    description: string;
    status: $Enums.ProductStatus;
    price: number;
    images: string[];
    category: $Enums.Category;
    isFeatured: boolean;
  };
}

const ProductEdit: React.FC<ProductEditProps> = ({ data }) => {
  const router = useRouter();

  const updateProductWithId = editProduct.bind(null, data.id);

  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: data.name,
      description: data.description,
      status: data.status,
      price: data.price,
      images: data.images,
      category: data.category,
      isFeatured: data.isFeatured,
    },
  });

  const onSubmit = async (values: z.infer<typeof productSchema>) => {
    try {
      const result = await updateProductWithId(values);

      if (result.errors) {
        toast.error(JSON.stringify(result.errors));
        return;
      }
      toast.success("Chỉnh sửa sản phẩm thành công");
      router.push("/dashboard/products");
      router.refresh();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/dashboard/products">
              <ChevronLeft className="w-4 h-4" />
            </Link>
          </Button>
          <h1 className="text-xl font-semibold tracking-tight">
            Chỉnh sửa sản phẩm
          </h1>
        </div>

        <Card className="mt-5">
          <CardHeader>
            <CardTitle>Thông tin sản phẩm</CardTitle>
            <CardDescription>Nhập các thông tin bên dưới</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tên</FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập tên" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mô tả</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Nhập mô tả"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Giá</FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập giá" type="number" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="isFeatured"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel>Sản phẩm là nổi bật hay không?</FormLabel>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        aria-readonly
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Trạng thái</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn trạng thái" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="published">Published</SelectItem>
                        <SelectItem value="archived">Archived</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Danh mục</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn danh mục" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="printer">Máy in</SelectItem>
                        <SelectItem value="scan">Máy scan</SelectItem>
                        <SelectItem value="product">Sản phẩm tự làm</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="images"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tải hình ảnh lên</FormLabel>
                    <FormControl>
                      <FileInput
                        value={
                          Array.isArray(field.value)
                            ? field.value
                            : [field.value]
                        }
                        disabled={form.formState.isSubmitting}
                        onChange={(urls) => field.onChange(urls)}
                        maxImages={5}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Đang tạo..." : "Tạo"}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};

export default ProductEdit;
