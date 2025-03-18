/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { SlidersHorizontal } from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const priceRanges = [
  { id: "all", label: "Tất cả mức giá", value: "", min: 0, max: 999999 },
  {
    id: "1000-5000",
    label: "Dưới 1.000.000đ",
    value: "0-1000000",
    min: 0,
    max: 1000000,
  },
  {
    id: "above-5000",
    label: "Trên 2.000.000đ",
    value: "2000000-99999999",
    min: 2000000,
    max: 99999999,
  },
];

const ProductFilterSidebar = ({ categories }: any) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // Lấy danh mục & mức giá đã chọn từ URL
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.get("categories")?.split(",") || []
  );
  const [selectedPrice, setSelectedPrice] = useState(
    searchParams.get("price") || ""
  );

  // Khi user thay đổi filter, cập nhật URL
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    if (selectedCategories.length > 0) {
      params.set("categories", selectedCategories.join(","));
    } else {
      params.delete("categories");
    }

    if (selectedPrice) {
      const selectedRange = priceRanges.find(
        (range) => range.value === selectedPrice
      );
      if (selectedRange) {
        params.set("minPrice", selectedRange.min.toString());
        params.set("maxPrice", selectedRange.max.toString());
      }
    } else {
      params.delete("minPrice");
      params.delete("maxPrice");
    }

    replace(`${pathname}?${params.toString()}`);
  }, [selectedCategories, selectedPrice, pathname, replace, searchParams]);

  // Xử lý chọn danh mục
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Xử lý chọn mức giá
  const handlePriceChange = (value) => {
    setSelectedPrice(value === selectedPrice ? "" : value);
  };

  return (
    <div className="lg:w-64 flex-shrink-0">
      <div className="bg-white p-6 rounded-lg border">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          Bộ lọc
        </h3>

        {/* Lọc theo danh mục */}
        <div className="mb-6">
          <h4 className="font-medium text-gray-700 mb-2">Danh mục</h4>
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2 mb-2">
              <Checkbox
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => handleCategoryChange(category)}
              />
              <label className="text-sm font-medium text-gray-600 hover:text-gray-900">
                {category}
              </label>
            </div>
          ))}
        </div>

        {/* Lọc theo mức giá */}
        <div>
          <h4 className="font-medium text-gray-700 mb-2">Mức giá</h4>
          {priceRanges.map((range) => (
            <div key={range.id} className="flex items-center space-x-2 mb-2">
              <Checkbox
                checked={selectedPrice === range.value}
                onCheckedChange={() => handlePriceChange(range.value)}
              />
              <label className="text-sm font-medium text-gray-600 hover:text-gray-900">
                {range.label}
              </label>
            </div>
          ))}
        </div>

        {/* Nút reset filter */}
        <Button
          className="mt-6"
          onClick={() => {
            setSelectedCategories([]);
            setSelectedPrice("");
          }}
        >
          Xóa bộ lọc
        </Button>
      </div>
    </div>
  );
};

export default ProductFilterSidebar;
