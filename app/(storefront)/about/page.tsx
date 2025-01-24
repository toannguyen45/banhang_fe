import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import HeroBanner from "@/app/components/ui/HeroBanner";

const features = [
  "Công nghệ quét 3D tiên tiến nhất",
  "Đội ngũ kỹ thuật viên giàu kinh nghiệm",
  "Giải pháp tùy chỉnh cho từng ngành công nghiệp",
  "Hỗ trợ kỹ thuật 24/7",
  "Độ chính xác cao nhất trong ngành",
  "Thời gian xử lý nhanh chóng",
];

const stats = [
  {
    number: "10+",
    label: "Năm kinh nghiệm",
  },
  {
    number: "1000+",
    label: "Dự án hoàn thành",
  },
  {
    number: "50+",
    label: "Đối tác tin cậy",
  },
  {
    number: "100%",
    label: "Khách hàng hài lòng",
  },
];

const AboutPage = () => {
  return (
    <div className="bg-white">
      <HeroBanner
        title="Về Chúng Tôi"
        description="Chúng tôi là đơn vị tiên phong trong lĩnh vực công nghệ quét 3D tại Việt Nam"
        image="/images/about-hero.jpg"
        alt="3D Scanning Technology"
        breadcrumb={[
          { label: "Về chúng tôi" }
        ]}
      />

      {/* Main Content */}
      <div className="container py-16 md:py-24">
        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-2">Sứ mệnh của chúng tôi</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-gray-600 mb-6 text-lg">
              3DTeam ra đời với sứ mệnh mang công nghệ quét 3D tiên tiến đến gần
              hơn với doanh nghiệp Việt Nam. Chúng tôi cung cấp giải pháp toàn
              diện từ tư vấn, triển khai đến hỗ trợ kỹ thuật cho khách hàng.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              Với đội ngũ kỹ sư giàu kinh nghiệm và trang thiết bị hiện đại,
              chúng tôi cam kết mang đến những sản phẩm chất lượng cao nhất cho
              khách hàng.
            </p>
            <Link href="/contact">
              <Button className="bg-primary hover:bg-primary/90">
                Liên hệ ngay <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/about-image.png"
              alt="Our Mission"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-gray-50">
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Tại sao chọn chúng tôi?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm"
              >
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
