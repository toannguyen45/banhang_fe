"use server";

import { authenticateAdmin } from "@/lib/auth.utils";
import db from "@/lib/db";
import { bannerSchema } from "@/lib/zod";
import { redirect } from "next/navigation";
import { z } from "zod";
import { v2 as cloudinary } from "cloudinary";

export async function createBanner(formData: z.infer<typeof bannerSchema>) {
  const user = await authenticateAdmin();

  if (!user) {
    return { errors: "Vui lòng đăng nhập" };
  }

  const validatedFields = bannerSchema.safeParse(formData);
  if (!validatedFields.success) {
    const formFieldErrors = validatedFields.error.flatten().fieldErrors;

    return {
      errors: {
        title: formFieldErrors?.title?.[0] || "",
        imageString: formFieldErrors?.imageString?.[0] || "",
      },
    };
  }

  const { title, imageString } = validatedFields.data;

  await db.banner.create({
    data: {
      title: title,
      imageString: imageString,
    },
  });

  return {
    success: "Banner created successfully",
  };
}

export async function deleteBanner(formData: FormData) {
  const user = await authenticateAdmin();

  if (!user) {
    return redirect("/dashboard");
  }

  const bannerId = formData.get("bannerId") as string;

  const banner = await db.banner.findUnique({
    where: { id: bannerId },
  });

  if (banner && banner.imageString) {
    const publicId = banner.imageString.split("/").pop()?.split(".")[0];
    if (publicId) {
      try {
        await cloudinary.uploader.destroy(publicId);
      } catch (error) {
        console.error("Error deleting image from Cloudinary:", error);
      }
    }
  }

  await db.banner.delete({
    where: {
      id: bannerId,
    },
  });

  redirect("/dashboard/banners");
}
