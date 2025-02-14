import React from "react";
import HeroBanner from "@/app/components/ui/HeroBanner";
import { NewsCard } from "@/app/components/storefront/News";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    id: 1,
    image: "/images/news-1.jpg",
    date: "May 03, 2020",
    title: "Why is a ticket to Lagos so expensive?",
    author: "admin",
    excerpt:
      "Tempor incididunt labore dolore magna aliqua. enim minim veniam quis nostrud exercitation laboris.",
    slug: "why-is-a-ticket-to-lagos-so-expensive",
    category: "Technology",
  },
  {
    id: 2,
    image: "/images/news-2.jpg",
    date: "May 03, 2020",
    title: "Máy quét 3D màu giá rẻ ScanTech iReal 2E",
    author: "admin",
    excerpt:
      "Máy quét 3D màu giá rẻ ScanTech iReal 2E là một máy quét 3D màu di động được phát triển đặc biệt để chụp các vật thể có kích thước trung bình",
    slug: "may-quet-3d-mau-gia-re-scantech",
    category: "Product",
  },
  {
    id: 3,
    image: "/images/news-3.jpg",
    date: "May 03, 2020",
    title: "Máy Scan 3D công nghiệp Scantech Simscan chính hãng",
    author: "admin",
    excerpt:
      "SIMSCAN, một máy quét 3D cầm tay có kích thước bằng lòng bàn tay, được thiết kế đặc biệt để quét 3D các khu",
    slug: "may-scan-3d-cong-nghiep-scantech",
    category: "Industry",
  },
];

const NewsPage = () => {
  return (
    <div className="bg-gray-50">
      <HeroBanner
        title="Tin Tức & Bài Viết"
        description="Cập nhật những tin tức mới nhất về công nghệ quét 3D"
        image="/images/news-hero.jpg"
        alt="Latest News"
        breadcrumb={[{ label: "Tin tức" }]}
      />

      <div className="container py-16 md:py-24">
        <div className="grid gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center gap-2">
            <Button
              variant="outline"
              className="hover:bg-yellow-400 hover:text-white transition-colors"
            >
              Previous
            </Button>
            {[1, 2, 3].map((page) => (
              <Button
                key={page}
                variant={page === 1 ? "default" : "outline"}
                className={`w-10 ${
                  page === 1
                    ? "bg-primary hover:bg-yellow-400"
                    : "hover:bg-yellow-400 hover:text-white"
                }`}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              className="hover:bg-yellow-400 hover:text-white transition-colors"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
