import { formatPrice } from "@/lib/utils";
import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({
  product: { id, name, price, category, images },
}: ProductItemProps) => {
  return (
    <div className="bg-white border rounded-lg transition-all duration-300 hover:shadow-lg group relative">
      <Link href={`/products/${id}`} className="block absolute inset-0 z-10">
        <span className="sr-only">View {name}</span>
      </Link>

      <div className="relative aspect-[4/3] rounded-t-lg overflow-hidden bg-white p-4">
        {/* Main Image */}
        <div className="relative w-full h-full">
          <Image
            src={images[0]}
            alt={name}
            fill
            className="object-contain transition-opacity duration-500 group-hover:opacity-0"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Hover Image */}
          {/* <Image
            src={product.images.hover}
            alt={`${product.name} - view 2`}
            fill
            className="object-contain absolute inset-0 opacity-0 transition-opacity duration-500 
            group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          /> */}
        </div>
      </div>

      <div className="p-4 flex flex-col items-center text-center">
        <span className="text-sm text-primary/80 mb-1 block relative z-20">
          {category}
        </span>
        <h3
          className="font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-primary 
        transition-colors relative z-20"
        >
          {name}
        </h3>

        <div className="flex flex-col items-center gap-3 relative z-20">
          <span className="text-lg font-bold text-gray-900">
            {formatPrice(price)}
          </span>
          {/* {product.inStock ? <AddToCartButton /> : <OutOfStockButton />} */}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
