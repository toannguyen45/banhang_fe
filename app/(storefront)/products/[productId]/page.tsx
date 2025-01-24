"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Minus, Plus, Check, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import HeroBanner from "@/app/components/ui/HeroBanner";

interface ProductImage {
  id: number;
  url: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
  images: ProductImage[];
  description: string;
  features: string[];
  specifications: {
    name: string;
    value: string;
  }[];
}

const product: Product = {
  id: 1,
  name: "Máy quét 3D SIMSCAN Pro",
  price: 45000000,
  category: "Máy quét 3D",
  inStock: true,
  images: [
    { id: 1, url: "/images/products/product3.webp" },
    { id: 2, url: "/images/products/product33.webp" },
    { id: 3, url: "/images/products/product2.webp" },
    { id: 4, url: "/images/products/product22.webp" },
  ],
  description: `
    <p class="mb-4">Máy quét 3D SIMSCAN Pro là thiết bị quét 3D cầm tay hiện đại với độ chính xác cao và tốc độ quét nhanh.</p>
    <p class="mb-4">Thiết bị này phù hợp cho các ứng dụng công nghiệp, kiểm tra chất lượng và thiết kế ngược.</p>
  `,
  features: [
    "Độ chính xác lên đến 0.02mm",
    "Tốc độ quét 2,020,000 điểm/giây",
    "Vùng quét siêu rộng 410×400mm",
    "Trọng lượng chỉ 1.4kg",
    "Tích hợp công nghệ AI",
    "Tương thích nhiều phần mềm CAD/CAM",
  ],
  specifications: [
    { name: "Độ chính xác", value: "0.02mm" },
    { name: "Tốc độ quét", value: "2,020,000 điểm/giây" },
    { name: "Vùng quét", value: "410×400mm" },
    { name: "Trọng lượng", value: "1.4kg" },
    { name: "Nguồn sáng", value: "LED xanh" },
    { name: "Kết nối", value: "USB 3.0" },
  ],
};

const ProductDetailPage = () => {
  const [selectedImage, setSelectedImage] = React.useState<ProductImage>(product.images[0]);
  const [quantity, setQuantity] = React.useState(1);

  const handleAddToCart = React.useCallback(() => {
    // Add to cart logic here
    console.log('Adding to cart:', { product, quantity });
  }, [quantity]);

  const handleQuantityChange = React.useCallback((newQuantity: number) => {
    setQuantity(Math.max(1, newQuantity));
  }, []);

  return (
    <div className="bg-gray-50">
      <HeroBanner
        title="Chi Tiết Sản Phẩm"
        description=""
        image="/images/products-hero.jpg"
        alt="Product Detail"
        breadcrumb={[
          { label: "Sản phẩm", href: "/products" },
          { label: product.name },
        ]}
      />

      <div className="container py-16">
        <Link 
          href="/products" 
          className="inline-flex items-center text-gray-600 hover:text-primary mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Quay lại danh sách sản phẩm
        </Link>

        <div className="bg-white rounded-lg shadow-sm p-4 md:p-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Product Images */}
            <div className="space-y-4 mx-auto w-full max-w-[500px]">
              <div className="relative aspect-square rounded-lg overflow-hidden border bg-white">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={selectedImage.url}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2 md:gap-4">
                {product.images.map((image) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImage(image)}
                    className={`relative aspect-square rounded-lg overflow-hidden border bg-white
                      ${selectedImage.id === image.id ? 'ring-2 ring-primary' : ''}`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src={image.url}
                        alt={product.name}
                        fill
                        className="object-contain p-2"
                        sizes="(max-width: 768px) 25vw, 15vw"
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <p className="text-primary/80">{product.category}</p>
              </div>

              <div className="space-y-6">
                <div className="text-2xl font-bold text-gray-900">
                  {formatPrice(product.price)}
                </div>

                {product.inStock ? (
                  <div className="flex items-center text-green-600">
                    <Check className="h-5 w-5 mr-2" />
                    Còn hàng
                  </div>
                ) : (
                  <div className="text-red-500">Hết hàng</div>
                )}

                {product.inStock && (
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center border rounded-lg">
                        <button
                          onClick={() => handleQuantityChange(quantity - 1)}
                          className="p-2 hover:text-primary"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-12 text-center">{quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(quantity + 1)}
                          className="p-2 hover:text-primary"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <Button 
                        className="flex-1"
                        onClick={handleAddToCart}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Thêm vào giỏ hàng
                      </Button>
                    </div>
                  </div>
                )}

                <div className="border-t pt-6 space-y-4">
                  <h3 className="font-semibold text-lg">Tính năng nổi bật</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold text-lg mb-4">Thông số kỹ thuật</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {product.specifications.map((spec, index) => (
                      <div key={index} className="flex flex-col">
                        <span className="text-sm text-gray-600">{spec.name}</span>
                        <span className="font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold text-lg mb-4">Mô tả sản phẩm</h3>
                  <div 
                    className="prose prose-sm max-w-none"
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
