"use server";

import { authenticateAdmin } from "@/lib/auth.utils";
import db from "@/lib/db";
import { productSchema } from "@/lib/zod";
import { redirect } from "next/navigation";
import { z } from "zod";
import cloudinary from "@/lib/cloudinaryConfig";

export async function createProduct(formData: z.infer<typeof productSchema>) {
  const user = await authenticateAdmin();
  if (!user) {
    return { errors: "Vui lòng đăng nhập" };
  }
  const validatedFields = productSchema.safeParse(formData);
  if (!validatedFields.success) {
    const formFieldErrors = validatedFields.error.flatten().fieldErrors;

    return {
      errors: {
        name: formFieldErrors?.name?.[0] || "",
        description: formFieldErrors?.description?.[0] || "",
        status: formFieldErrors?.status?.[0] || "",
        price: formFieldErrors?.price?.[0] || "",
        images: formFieldErrors?.images?.[0] || "",
        category: formFieldErrors?.category?.[0] || "",
        isFeatured: formFieldErrors?.isFeatured?.[0] || "",
      },
    };
  }

  const { name, description, status, price, images, category, isFeatured } =
    validatedFields.data;

  const flattenUrls = images.flatMap((urlString) =>
    urlString.split(",").map((url) => url.trim())
  );

  await db.product.create({
    data: {
      name: name,
      description: description,
      status: status,
      price: price,
      images: flattenUrls,
      category: category,
      isFeatured: isFeatured === true ? true : false,
    },
  });

  return {
    success: "Product created successfully",
  };
}

export async function editProduct(
  productId: string,
  formData: z.infer<typeof productSchema>
) {
  const user = await authenticateAdmin();
  if (!user) {
    return { errors: "Vui lòng đăng nhập" };
  }

  const validatedFields = productSchema.safeParse(formData);
  if (!validatedFields.success) {
    const formFieldErrors = validatedFields.error.flatten().fieldErrors;

    return {
      errors: {
        name: formFieldErrors?.name?.[0] || "",
        description: formFieldErrors?.description?.[0] || "",
        status: formFieldErrors?.status?.[0] || "",
        price: formFieldErrors?.price?.[0] || "",
        images: formFieldErrors?.images?.[0] || "",
        category: formFieldErrors?.category?.[0] || "",
        isFeatured: formFieldErrors?.isFeatured?.[0] || "",
      },
    };
  }

  const { name, description, status, price, images, category, isFeatured } =
    validatedFields.data;

  const flattenUrls = images.flatMap((urlString) =>
    urlString.split(",").map((url) => url.trim())
  );

  await db.product.update({
    where: {
      id: productId,
    },
    data: {
      name: name,
      description: description,
      category: category,
      price: price,
      isFeatured: isFeatured === true ? true : false,
      status: status,
      images: flattenUrls,
    },
  });

  return {
    success: "Product updated successfully",
  };
}

export async function deleteProduct(formData: FormData) {
  const user = await authenticateAdmin();

  if (!user) {
    return redirect("/dashboard");
  }

  const productId = formData.get("productId") as string;

  const product = await db.product.findUnique({
    where: { id: productId },
  });

  if (product && product.images) {
    const deleteImagePromises = product.images.map(async (url) => {
      const publicId = url.split("/").pop()?.split(".")[0];
      if (publicId) {
        await cloudinary.uploader.destroy(publicId);
      }
    });

    await Promise.all(deleteImagePromises);
  }

  await db.product.delete({
    where: {
      id: productId,
    },
  });

  redirect("/dashboard/products");
}
