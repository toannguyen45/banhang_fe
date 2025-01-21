import { ArrowUpRight, CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const News = () => {
  return (
    <section className="container flex flex-col gap-4 items-center py-24">
      <p className="text-3xl font-semibold">TIN TỨC</p>
      <div className="w-28 border-b-2 border-gray-400 mb-5"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <div className="bg-white w-full hover:shadow-xl transition-shadow duration-500 border">
          <div className="relative overflow-hidden h-64 group">
            <Image
              src={"/images/news-1.jpg"}
              alt="news"
              fill
              quality={100}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col gap-3 p-6">
            <span className="font-semibold flex items-center">
              <CalendarDays className="mr-1" /> May 03, 2020
            </span>
            <h3 className="font-bold text-xl">
              Why is a ticket to Lagos so expensive?
            </h3>
            <span className="font-semibold text-textSmall">By admin</span>
            <p className="text-textSmall text-sm font-medium">
              Tempor incididunt labore dolore magna aliqua. enim minim veniam
              quis nostrud exercitation laboris.
            </p>
            <Link
              href={"/news"}
              className="font-medium flex items-center gap-1 hover:text-red-400 group"
            >
              <span className="font-bold">Xem thêm</span>
              <ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
            </Link>
          </div>
        </div>
        <div className="bg-white w-full hover:shadow-xl transition-shadow duration-500 border">
          <div className="relative overflow-hidden h-64 group">
            <Image
              src={"/images/news-2.jpg"}
              alt="news"
              fill
              quality={100}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col gap-3 p-6">
            <span className="font-semibold flex items-center">
              <CalendarDays className="mr-1" /> May 03, 2020
            </span>
            <h3 className="font-bold text-xl">
              Máy quét 3D màu giá rẻ ScanTech iReal 2E
            </h3>
            <span className="font-semibold text-textSmall">By admin</span>
            <p className="text-textSmall text-sm font-medium">
              Máy quét 3D màu giá rẻ ScanTech iReal 2E là một máy quét 3D màu di
              động được phát triển đặc biệt để chụp các vật thể có kích thước
              trung bình
            </p>
            <Link
              href={"/news"}
              className="font-medium flex items-center gap-1 hover:text-red-400 group"
            >
              <span className="font-bold">Xem thêm</span>
              <ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
            </Link>
          </div>
        </div>
        <div className="bg-white w-full hover:shadow-xl transition-shadow duration-500 border">
          <div className="relative overflow-hidden h-64 group">
            <Image
              src={"/images/news-3.jpg"}
              alt="news"
              fill
              quality={100}
              className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col gap-3 p-6">
            <span className="font-semibold flex items-center">
              <CalendarDays className="mr-1" /> May 03, 2020
            </span>
            <h3 className="font-bold text-xl">
              Máy Scan 3D công nghiệp Scantech Simscan chính hãng
            </h3>
            <span className="font-semibold text-textSmall">By admin</span>
            <p className="text-textSmall text-sm font-medium">
              SIMSCAN, một máy quét 3D cầm tay có kích thước bằng lòng bàn tay,
              được thiết kế đặc biệt để quét 3D các khu
            </p>
            <Link
              href={"/news"}
              className="font-medium flex items-center gap-1 hover:text-red-400 group"
            >
              <span className="font-bold">Xem thêm</span>
              <ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
