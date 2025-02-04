import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const features = [
  "Công nghệ quét 3D tiên tiến nhất",
  "Đội ngũ kỹ thuật viên giàu kinh nghiệm",
  "Giải pháp tùy chỉnh cho từng ngành",
  "Hỗ trợ kỹ thuật 24/7",
];

const SectionAbout = () => {
  return (
    <section className="container py-16 md:py-24">
      {/* Section Header */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">VỀ CHÚNG TÔI</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-lg">
          Chúng tôi là đơn vị tiên phong trong lĩnh vực công nghệ quét 3D tại
          Việt Nam
        </p>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Image */}
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/images/about-image.png"
            alt="About 3DTeam"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw" // Full width on mobile, half on desktop
            quality={85}
          />
        </div>

        {/* Right Column - Content */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Giải pháp quét 3D toàn diện cho doanh nghiệp của bạn
            </h3>
            <p className="mb-6 text-lg">
              3DTeam cung cấp giải pháp toàn diện từ tư vấn, triển khai đến hỗ
              trợ kỹ thuật. Với đội ngũ kỹ sư giàu kinh nghiệm và trang thiết bị
              hiện đại, chúng tôi cam kết mang đến những sản phẩm chất lượng cao
              nhất cho khách hàng.
            </p>
          </div>

          {/* Features List */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
              >
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Link href="/about">
              <Button className="bg-primary hover:bg-primary/90">
                Tìm hiểu thêm <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
