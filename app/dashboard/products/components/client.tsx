"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { PlusCircle } from "lucide-react";
// import { useRouter } from "next/navigation";
import { ProductColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api-list";
import Link from "next/link";

interface ProductClientProps {
  data: ProductColumn[];
}

export const ProductClient: React.FC<ProductClientProps> = ({ data }) => {
  // const router = useRouter();

  return (
    <>
      <div className="flex justify-between flex-col gap-3 lg:flex-row">
        <Heading
          title={`Sản phẩm (${data.length})`}
          description="Danh sách sản phẩm"
        />
        <Button asChild className="flex items-center gap-x-2">
          <Link href="/dashboard/products/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            <span>Thêm sản phẩm</span>
          </Link>
        </Button>
      </div>
      <Separator />
      <DataTable data={data} columns={columns} searchKey="name" />
      <Heading title="API" description="Danh sách API" />
      <Separator />
      <ApiList namaIndikator="products" idIndikator="productId" />
    </>
  );
};
