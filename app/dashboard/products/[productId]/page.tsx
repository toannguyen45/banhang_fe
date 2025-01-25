import db from "@/lib/db";
import { ProductForm } from "./components/product-form";

interface SearchParams {
  [key: string]: string | string[] | undefined;
}

interface PageProps {
  params: { productId: string };
  searchParams: SearchParams;
}

const ProductPage = async ({ params }: PageProps) => {
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
