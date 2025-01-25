import React from 'react'
import { 
  Scan, 
  PenTool, 
  CheckCircle2,
  ArrowRight,
  Microscope,
  MonitorPlay,
  Building2,
  Cog
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroBanner from "@/app/components/ui/HeroBanner"

interface ServiceFeature {
  title: string
  description: string
  icon: React.ReactNode
  image: string
  benefits: string[]
  link: string
}

const services: ServiceFeature[] = [
  {
    title: "Quét 3D",
    description: "Dịch vụ quét 3D chuyên nghiệp với độ chính xác cao, phù hợp cho mọi kích thước và độ phức tạp của sản phẩm.",
    icon: <Scan className="h-8 w-8" />,
    image: "/images/services/service-1.png",
    benefits: [
      "Độ chính xác lên đến 0.02mm",
      "Phù hợp mọi kích thước vật thể",
      "Thời gian xử lý nhanh chóng",
      "Kết quả chi tiết, chất lượng cao"
    ],
    link: "/services/3d-scanning"
  },
  {
    title: "Thiết kế ngược",
    description: "Chuyển đổi dữ liệu quét 3D thành mô hình CAD có thể chỉnh sửa, tối ưu cho sản xuất và phát triển sản phẩm.",
    icon: <PenTool className="h-8 w-8" />,
    image: "/images/services/service-2.jpg",
    benefits: [
      "Tạo mô hình CAD chính xác",
      "Tối ưu hóa thiết kế",
      "Phân tích và cải tiến",
      "Hỗ trợ nhiều định dạng file"
    ],
    link: "/services/reverse-engineering"
  },
  {
    title: "Kiểm tra chất lượng",
    description: "Kiểm tra kích thước và so sánh với CAD để đảm bảo chất lượng sản phẩm theo tiêu chuẩn.",
    icon: <Microscope className="h-8 w-8" />,
    image: "/images/services/service-3.jpg",
    benefits: [
      "Báo cáo chi tiết đầy đủ",
      "So sánh với bản vẽ CAD",
      "Phân tích độ lệch",
      "Kiểm tra theo tiêu chuẩn"
    ],
    link: "/services/quality-inspection"
  },
  {
    title: "Đào tạo",
    description: "Đào tạo chuyên sâu về công nghệ quét 3D và các phần mềm liên quan cho doanh nghiệp.",
    icon: <MonitorPlay className="h-8 w-8" />,
    image: "/images/services/service-4.jpg",
    benefits: [
      "Chương trình cá nhân hóa",
      "Giảng viên giàu kinh nghiệm",
      "Thực hành trực tiếp",
      "Hỗ trợ sau đào tạo"
    ],
    link: "/services/training"
  },
  {
    title: "Bảo tồn di sản",
    description: "Số hóa và lưu trữ các di tích lịch sử, tác phẩm nghệ thuật với độ chính xác tuyệt đối.",
    icon: <Building2 className="h-8 w-8" />,
    image: "/images/services/service-5.jpg",
    benefits: [
      "Bảo tồn chi tiết nguyên bản",
      "Lưu trữ dữ liệu lâu dài",
      "Phục dựng chính xác",
      "Chia sẻ trực tuyến"
    ],
    link: "/services/heritage-preservation"
  },
  {
    title: "Bảo trì & Hỗ trợ",
    description: "Dịch vụ bảo trì, cập nhật và hỗ trợ kỹ thuật 24/7 cho khách hàng.",
    icon: <Cog className="h-8 w-8" />,
    image: "/images/services/service-6.jpg",
    benefits: [
      "Hỗ trợ kỹ thuật 24/7",
      "Bảo trì định kỳ",
      "Cập nhật phần mềm",
      "Đào tạo nâng cao"
    ],
    link: "/services/maintenance"
  }
]

const ServiceCard = ({ service }: { service: ServiceFeature }) => (
  <div className="grid md:grid-cols-2 gap-8 items-center p-8 bg-white border rounded-lg transition-all duration-300 hover:shadow-lg">
    <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
      <Image
        src={service.image}
        alt={service.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-primary/10 rounded-lg w-12 h-12 flex items-center justify-center">
          <div className="text-primary">
            {service.icon}
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900">
          {service.title}
        </h3>
      </div>
      <p className="text-gray-600 mb-6">
        {service.description}
      </p>
      <div className="space-y-3 mb-6">
        {service.benefits.map((benefit, index) => (
          <div key={index} className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="text-gray-700">{benefit}</span>
          </div>
        ))}
      </div>
      <Link href={service.link}>
        <Button className="bg-primary hover:bg-primary/90">
          Tìm hiểu thêm <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  </div>
)

const ServicesPage = () => {
  return (
    <div className="bg-gray-50">
      <HeroBanner
        title="Dịch Vụ"
        description="Khám phá các dịch vụ quét 3D chuyên nghiệp của chúng tôi"
        image="/images/services-hero.jpg"
        alt="Our Services"
        breadcrumb={[
          { label: "Dịch vụ" }
        ]}
      />

      <div className="container py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">
            GIẢI PHÁP TOÀN DIỆN
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Chúng tôi cung cấp đầy đủ các dịch vụ quét 3D và giải pháp số hóa chuyên nghiệp
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesPage