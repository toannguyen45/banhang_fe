import { 
  Scan, 
  Cog, 
  PenTool, 
  Microscope,
  ArrowRight,
  MonitorPlay,
  Building2
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ReactNode } from "react"
import Image from "next/image"

interface Service {
  icon: ReactNode
  title: string
  description: string
  link: string
  image: string
}

const services: Service[] = [
  {
    icon: <Scan className="h-8 w-8" />,
    title: "Quét 3D",
    description: "Dịch vụ quét 3D chuyên nghiệp với độ chính xác cao, phù hợp cho mọi kích thước và độ phức tạp.",
    link: "/services/3d-scanning",
    image: "/images/services/service-1.png"
  },
  {
    icon: <PenTool className="h-8 w-8" />,
    title: "Thiết kế ngược",
    description: "Chuyển đổi dữ liệu quét 3D thành mô hình CAD có thể chỉnh sửa cho mục đích sản xuất.",
    link: "/services/reverse-engineering",
    image: "/images/services/service-2.jpg"
  },
  {
    icon: <Microscope className="h-8 w-8" />,
    title: "Kiểm tra chất lượng",
    description: "Kiểm tra kích thước và so sánh với CAD để đảm bảo chất lượng sản phẩm theo tiêu chuẩn.",
    link: "/services/quality-inspection",
    image: "/images/services/service-3.jpg"
  },
  {
    icon: <MonitorPlay className="h-8 w-8" />,
    title: "Đào tạo",
    description: "Đào tạo chuyên sâu về công nghệ quét 3D và các phần mềm liên quan cho doanh nghiệp.",
    link: "/services/training",
    image: "/images/services/service-4.jpg"
  },
  {
    icon: <Building2 className="h-8 w-8" />,
    title: "Bảo tồn di sản",
    description: "Số hóa và lưu trữ các di tích lịch sử, tác phẩm nghệ thuật với độ chính xác tuyệt đối.",
    link: "/services/heritage-preservation",
    image: "/images/services/service-5.jpg"
  },
  {
    icon: <Cog className="h-8 w-8" />,
    title: "Bảo trì & Hỗ trợ",
    description: "Dịch vụ bảo trì, cập nhật và hỗ trợ kỹ thuật 24/7 cho khách hàng.",
    link: "/services/maintenance",
    image: "/images/services/service-6.jpg"
  }
]

const ServiceCard = ({ service }: { service: Service }) => (
  <Link 
    href={service.link}
    className="group relative overflow-hidden rounded-xl bg-white h-[300px]"
  >
    {/* Image Background */}
    <div className="absolute inset-0">
      <Image
        src={service.image}
        alt={service.title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80" />
    </div>

    {/* Content Overlay */}
    <div className="absolute inset-0 p-6 flex flex-col">
      {/* Top Content - Icon */}
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm mb-auto">
        <div className="text-white">
          {service.icon}
        </div>
      </div>

      {/* Bottom Content */}
      <div className="transform transition-transform duration-500 ease-out group-hover:-translate-y-4">
        <h3 className="text-2xl font-bold mb-2 text-white">
          {service.title}
        </h3>
        <p className="text-gray-200 mb-4 line-clamp-2 opacity-0 transition-all duration-500 group-hover:opacity-100">
          {service.description}
        </p>
        <div className="flex items-center text-sm font-medium text-white">
          Tìm hiểu thêm
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  </Link>
)

const SectionService = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24" aria-labelledby="services-heading">
      {/* Section Header */}
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 
            id="services-heading" 
            className="text-3xl font-bold mb-2"
          >
            DỊCH VỤ CỦA CHÚNG TÔI
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Cung cấp đầy đủ các dịch vụ quét 3D và giải pháp số hóa chuyên nghiệp
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Link href="/services">
            <Button className="bg-primary hover:bg-primary/90">
              Xem tất cả dịch vụ <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SectionService