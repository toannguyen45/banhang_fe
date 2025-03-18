/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import HeroBanner from "@/app/components/ui/HeroBanner";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { formatPrice } from "@/lib/utils";
import ProductItem from "@/app/components/storefront/ProductItem";
import db from "@/lib/db";
import ProductFilterSidebar from "@/app/components/storefront/ProductFilterSidebar";
import PaginateCustom from "@/app/components/ui/PaginateCustom";

// const AddToCartButton = () => {
//   return (
//     <Button
//       variant="outline"
//       size="sm"
//       className="hover:bg-primary hover:text-white relative z-30 w-full"
//       onClick={(e) => {
//         e.preventDefault();
//         // Add to cart logic here
//       }}
//     >
//       <ShoppingCart className="h-4 w-4 mr-2" />
//       Thêm vào giỏ
//     </Button>
//   );
// };

// const OutOfStockButton = () => {
//   return (
//     <Button
//       variant="outline"
//       size="sm"
//       className="text-red-500 border-red-500 hover:bg-red-50 relative z-30 w-full"
//       disabled
//     >
//       Hết hàng
//     </Button>
//   );
// };

const ProductsPage = async ({ searchParams }: any) => {
  const categoriesDb =
    (await db.product
      .findMany({
        select: { category: true },
        distinct: ["category"],
      })
      .then((data) => data.map((item) => item.category))) || [];

  // console.log(categoriesDb, "categoriesDb");
  const {
    page = "1",
    pageSize = "10",
    sortBy,
    sortOrder,
    categories = [],
    minPrice,
    maxPrice,
    search,
  } = await searchParams;

  // Chuyển mảng category thành chuỗi phân tách bằng dấu phẩy
  const categoryQuery = Array.isArray(categories)
    ? categories.join(",")
    : categories;

  const query = new URLSearchParams({
    page,
    pageSize,
    ...(sortBy && { sortBy }),
    ...(sortOrder && { sortOrder }),
    ...(categoryQuery && { categories: categoryQuery }),
    ...(minPrice && { minPrice }),
    ...(maxPrice && { maxPrice }),
    ...(search && { search }),
  });

  console.log(query.toString(), "query");

  const res = await fetch(
    `http://localhost:3000/api/products?${query.toString()}`,
    { next: { revalidate: 5 } }
  );

  const { products, pagination } = await res.json();

  return (
    <div className="bg-gray-50">
      <HeroBanner
        title="Sản Phẩm"
        description="Khám phá các sản phẩm máy quét 3D chất lượng cao của chúng tôi"
        image="/images/products-hero.jpg"
        alt="Our Products"
        breadcrumb={[{ label: "Sản phẩm" }]}
      />

      <div className="container py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}

          <ProductFilterSidebar categories={categoriesDb} />

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white p-4 rounded-lg border mb-8 flex items-center justify-between">
              <span className="text-gray-600">
                {/* Hiển thị {products.length} sản phẩm */}
              </span>
              <Select defaultValue="newest">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sắp xếp theo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Mới nhất</SelectItem>
                  <SelectItem value="price-asc">Giá tăng dần</SelectItem>
                  <SelectItem value="price-desc">Giá giảm dần</SelectItem>
                  <SelectItem value="name-asc">Tên A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product: any) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <PaginateCustom
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPages}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
