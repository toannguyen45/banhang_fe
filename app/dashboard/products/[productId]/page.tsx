import db from "@/lib/db";
import { ProductForm } from "./components/product-form";

const ProductPage = async ({ params }: { params: { productId: string } }) => {
  const product = await db.product.findUnique({
    where: {
      id: params.productId,
    },
    include: {
      images: true,
    },
  });

  const categories = await db.category.findMany({});

  return <ProductForm initialData={product} categories={categories} />;
};

export default ProductPage;
