"use client";

import { sendContact } from "@/app/actions/contactActions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactInfoSchema } from "@/lib/zod";
import { mailType } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<mailType>({
    resolver: zodResolver(contactInfoSchema),
  });

  const onSubmit = async (formData: mailType) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await sendContact(formData);
      toast.success("Email đã được gửi thành công");
      reset();
    } catch {
      toast.error("Có lỗi xảy ra khi gửi mail, vui lòng thử lại sau");
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Họ và tên
          </label>
          <Input
            id="name"
            placeholder="Nhập họ và tên"
            className="w-full"
            {...register("name")}
          />
          {errors.name && (
            <span className="text-red-500">{errors.name.message}</span>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="example@domain.com"
            className="w-full"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Số điện thoại
        </label>
        <Input
          id="phone"
          type="tel"
          placeholder="Nhập số điện thoại"
          className="w-full"
          {...register("phone")}
        />
        {errors.phone && (
          <span className="text-red-500">{errors.phone.message}</span>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Nội dung
        </label>
        <Textarea
          id="message"
          placeholder="Nhập nội dung tin nhắn"
          className="w-full min-h-[120px]"
          {...register("message")}
        />
        {errors.message && (
          <span className="text-red-500">{errors.message.message}</span>
        )}
      </div>

      <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
        {isSubmitting ? "Đang gửi..." : "Gửi tin nhắn"}
      </Button>
    </form>
  );
};

export default ContactForm;
