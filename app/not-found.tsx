'use client';

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-50">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-4">
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mb-8">
          <Image
            src="/404.svg"
            alt="404 Illustration"
            fill
            priority
            className="object-contain"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-gray-900 mb-2">
          Oops! Không tìm thấy trang
        </h1>
        
        <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 mb-8">
            Trang bạn đang tìm kiếm có thể đã bị xóa, đã đổi tên hoặc tạm thời không khả dụng.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            onClick={() => router.push('/')}
            size="lg"
            className="min-w-[200px]"
          >
            Trang chủ
          </Button>
          
          <Button 
            onClick={() => router.back()}
            variant="outline"
            size="lg"
            className="min-w-[200px]"
          >
            Trở về trang trước
          </Button>
        </div>
      </div>
    </div>
  );
} 