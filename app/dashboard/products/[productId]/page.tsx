import db from "@/lib/db";
import { ProductForm } from "./components/product-form";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>
}) {
  const { productId } = await params;

  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
    include: {
      images: true,
    },
  });

  const categories = await db.category.findMany({});

  return <ProductForm initialData={product} categories={categories} />;
}
