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

interface Service {
  icon: ReactNode
  title: string
  description: string
  link: string
}

const services: Service[] = [
  {
    icon: <Scan className="h-8 w-8" />,
    title: "Quét 3D",
    description: "Dịch vụ quét 3D chuyên nghiệp với độ chính xác cao, phù hợp cho mọi kích thước và độ phức tạp.",
    link: "/services/3d-scanning"
  },
  {
    icon: <PenTool className="h-8 w-8" />,
    title: "Thiết kế ngược",
    description: "Chuyển đổi dữ liệu quét 3D thành mô hình CAD có thể chỉnh sửa cho mục đích sản xuất.",
    link: "/services/reverse-engineering"
  },
  {
    icon: <Microscope className="h-8 w-8" />,
    title: "Kiểm tra chất lượng",
    description: "Kiểm tra kích thước và so sánh với CAD để đảm bảo chất lượng sản phẩm theo tiêu chuẩn.",
    link: "/services/quality-inspection"
  },
  {
    icon: <MonitorPlay className="h-8 w-8" />,
    title: "Đào tạo",
    description: "Đào tạo chuyên sâu về công nghệ quét 3D và các phần mềm liên quan cho doanh nghiệp.",
    link: "/services/training"
  },
  {
    icon: <Building2 className="h-8 w-8" />,
    title: "Bảo tồn di sản",
    description: "Số hóa và lưu trữ các di tích lịch sử, tác phẩm nghệ thuật với độ chính xác tuyệt đối.",
    link: "/services/heritage-preservation"
  },
  {
    icon: <Cog className="h-8 w-8" />,
    title: "Bảo trì & Hỗ trợ",
    description: "Dịch vụ bảo trì, cập nhật và hỗ trợ kỹ thuật 24/7 cho khách hàng.",
    link: "/services/maintenance"
  }
]

const ServiceCard = ({ service }: { service: Service }) => (
  <div 
    className="bg-white border rounded-lg p-6 transition-all duration-300 hover:shadow-lg 
      flex flex-col"
  >
    <div className="bg-primary/10 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
      <div className="text-primary">
        {service.icon}
      </div>
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-900">
      {service.title}
    </h3>
    <p className="text-gray-600 mb-6 flex-grow">
      {service.description}
    </p>
    <Link href={service.link}>
      <Button 
        variant="link" 
        className="p-0 h-auto text-primary hover:text-primary/80 font-medium"
      >
        Tìm hiểu thêm <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </Link>
  </div>
)

const SectionService = () => {
  return (
    <section className="container py-16 md:py-24" aria-labelledby="services-heading">
      {/* Section Header */}
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
    </section>
  )
}

export default SectionService