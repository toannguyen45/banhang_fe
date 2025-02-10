import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
import db from "@/lib/db";
import ProductEdit from "./components/ProductEdit";

async function getData(productId: string) {
  const data = await db.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

export default async function EditRoute({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  noStore();
  const { productId } = await params;
  const data = await getData(productId);

  return <ProductEdit data={data} />;
}
