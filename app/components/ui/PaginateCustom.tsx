/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const PaginateCustom = ({ currentPage, totalPages }: any) => {
  const maxVisiblePages = 3;

  // Tạo danh sách các trang cần hiển thị
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 || // Trang đầu tiên
        i === totalPages || // Trang cuối cùng
        (i >= currentPage - maxVisiblePages &&
          i <= currentPage + maxVisiblePages) // Trang gần trang hiện tại
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("..."); // Thêm dấu "..." nếu có khoảng cách
      }
    }
    return pages;
  };

  return (
    <div className="mt-12 flex items-center justify-center gap-2">
      {/* Nút "Previous" */}
      <Link href={`/products?page=${currentPage - 1}`} passHref>
        <button
          disabled={currentPage === 1}
          className="w-10 h-10 p-0 border rounded disabled:opacity-50 justify-items-center"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
      </Link>

      {/* Hiển thị số trang */}
      {getPageNumbers().map((page, index) =>
        page === "..." ? (
          <span key={index} className="mx-2">
            ...
          </span>
        ) : (
          <Link key={page} href={`/products?page=${page}`} passHref>
            <button
              className={`w-10 h-10 p-0 border rounded ${
                page === currentPage ? "bg-primary text-white" : "bg-gray-200"
              }`}
            >
              {page}
            </button>
          </Link>
        )
      )}

      {/* Nút "Next" */}
      <Link href={`/products?page=${currentPage + 1}`} passHref>
        <button
          disabled={currentPage === totalPages}
          className="w-10 h-10 p-0 border rounded disabled:opacity-50 justify-items-center"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </Link>
    </div>
  );
};

export default PaginateCustom;
