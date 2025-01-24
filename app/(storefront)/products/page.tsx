"use client";

import React from "react";
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

interface Product {
  id: number;
  name: string;
  image: string;
  category: string;
  price: number;
  link: string;
  images: {
    main: string;
    hover: string;
  };
  inStock?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Máy quét 3D SIMSCAN Pro",
    image: "/images/products/product1.webp",
    category: "Máy quét 3D",
    price: 45000000,
    link: "/products/simscan-pro",
    images: {
      main: "/images/products/product1.webp",
      hover: "/images/products/product11.webp",
    },
    inStock: true,
  },
  {
    id: 2,
    name: "Máy quét 3D iReal 2E",
    image: "/images/products/product2.webp",
    category: "Máy quét 3D",
    price: 35000000,
    link: "/products/ireal-2e",
    images: {
      main: "/images/products/product2.webp",
      hover: "/images/products/product22.webp",
    },
    inStock: false,
  },
  {
    id: 3,
    name: "Đồ Chơi Gỗ Cho Trẻ Em PINOCCHIO",
    image: "/images/products/product3.webp",
    category: "Máy quét 3D",
    price: 67600,
    link: "/products/ireal-2e",
    images: {
      main: "/images/products/product3.webp",
      hover: "/images/products/product33.webp",
    },
    inStock: true,
  },
];

const categories = [
  { id: "scanner", label: "Máy quét 3D" },
  { id: "software", label: "Phần mềm" },
  { id: "accessory", label: "Phụ kiện" },
];

const priceRanges = [
  { id: "all", label: "Tất cả mức giá" },
  { id: "under-1000", label: "Dưới 1.000$" },
  { id: "1000-5000", label: "1.000$ - 5.000$" },
  { id: "above-5000", label: "Trên 5.000$" },
];

const AddToCartButton = () => {
  return (
    <Button
      variant="outline"
      size="sm"
      className="hover:bg-primary hover:text-white relative z-30 w-full"
      onClick={(e) => {
        e.preventDefault();
        // Add to cart logic here
      }}
    >
      <ShoppingCart className="h-4 w-4 mr-2" />
      Thêm vào giỏ
    </Button>
  );
};

const OutOfStockButton = () => {
  return (
    <Button
      variant="outline"
      size="sm"
      className="text-red-500 border-red-500 hover:bg-red-50 relative z-30 w-full"
      disabled
    >
      Hết hàng
    </Button>
  );
};

const ProductCard = ({ product }: { product: Product }) => (
  <div className="bg-white border rounded-lg transition-all duration-300 hover:shadow-lg group relative">
    <Link href={product.link} className="block absolute inset-0 z-10">
      <span className="sr-only">View {product.name}</span>
    </Link>

    <div className="relative aspect-[4/3] rounded-t-lg overflow-hidden bg-white p-4">
      {/* Main Image */}
      <div className="relative w-full h-full">
        <Image
          src={product.images.main}
          alt={product.name}
          fill
          className="object-contain transition-opacity duration-500 group-hover:opacity-0"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Hover Image */}
        <Image
          src={product.images.hover}
          alt={`${product.name} - view 2`}
          fill
          className="object-contain absolute inset-0 opacity-0 transition-opacity duration-500 
            group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>

    <div className="p-4 flex flex-col items-center text-center">
      <span className="text-sm text-primary/80 mb-1 block relative z-20">
        {product.category}
      </span>
      <h3
        className="font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-primary 
        transition-colors relative z-20"
      >
        {product.name}
      </h3>

      <div className="flex flex-col items-center gap-3 relative z-20">
        <span className="text-lg font-bold text-gray-900">
          {formatPrice(product.price)}
        </span>
        {product.inStock ? <AddToCartButton /> : <OutOfStockButton />}
      </div>
    </div>
  </div>
);

const ProductsPage = () => {
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
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg border">
              <div className="mb-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4" />
                  Bộ lọc
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Danh mục</h4>
                    {categories.map((category) => (
                      <div
                        key={category.id}
                        className="flex items-center space-x-2 mb-2"
                      >
                        <Checkbox id={category.id} />
                        <label
                          htmlFor={category.id}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed 
                            peer-disabled:opacity-70 text-gray-600 hover:text-gray-900"
                        >
                          {category.label}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Mức giá</h4>
                    {priceRanges.map((range) => (
                      <div
                        key={range.id}
                        className="flex items-center space-x-2 mb-2"
                      >
                        <Checkbox id={range.id} />
                        <label
                          htmlFor={range.id}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed 
                            peer-disabled:opacity-70 text-gray-600 hover:text-gray-900"
                        >
                          {range.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="bg-white p-4 rounded-lg border mb-8 flex items-center justify-between">
              <span className="text-gray-600">
                Hiển thị 1-9 trong số 24 sản phẩm
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
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center gap-2">
              <Button variant="outline" className="w-10 h-10 p-0">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="w-10 h-10 p-0 bg-primary text-white"
              >
                1
              </Button>
              <Button variant="outline" className="w-10 h-10 p-0">
                2
              </Button>
              <Button variant="outline" className="w-10 h-10 p-0">
                3
              </Button>
              <span className="mx-2">...</span>
              <Button variant="outline" className="w-10 h-10 p-0">
                8
              </Button>
              <Button variant="outline" className="w-10 h-10 p-0">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
