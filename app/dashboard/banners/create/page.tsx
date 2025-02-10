"use client";

import { createBanner } from "@/app/actions/bannerAction";
import ImageUpload from "@/app/components/dashboard/ImageUpload";
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
import { bannerSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

export default function BannerRoute() {
  const router = useRouter();

  const form = useForm<z.infer<typeof bannerSchema>>({
    resolver: zodResolver(bannerSchema),
    defaultValues: {
      title: "",
      imageString: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof bannerSchema>) => {
    try {
      const result = await createBanner(values);

      if (result.errors) {
        toast.error(JSON.stringify(result.errors));
        return;
      }
      toast.success("Tạo banner thành công");
      router.push("/dashboard/banners");
      router.refresh();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message || "Có lỗi xảy ra");
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex items-center gap-x-4">
            <Button variant="outline" size="icon" asChild>
              <Link href="/dashboard/banners">
                <ChevronLeft className="w-4 h-4" />
              </Link>
            </Button>
            <h1 className="text-xl font-semibold tracking-tight">
              Thêm mới Banner
            </h1>
          </div>

          <Card className="mt-5">
            <CardHeader>
              <CardTitle>Thông tin banner</CardTitle>
              <CardDescription>Nhập các thông tin bên dưới</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-y-6">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tiêu đề</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Nhập tiêu đề"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="imageString"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tải hình ảnh lên</FormLabel>
                      <FormControl>
                        <FileInput
                          value={field.value}
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
    </>
  );
}
