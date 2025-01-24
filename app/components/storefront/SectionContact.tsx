import { Mail, MapPin, Phone, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import Image from "next/image"

interface ContactInfo {
  icon: React.ReactNode
  title: string
  content: string
  link?: string
}

const contactInfo: ContactInfo[] = [
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: "Địa chỉ",
    content: "145 N Los Ave, NY",
    link: "https://maps.google.com/?q=145+N+Los+Ave+NY"
  },
  {
    icon: <Phone className="h-6 w-6 text-primary" />,
    title: "Điện thoại",
    content: "+84 123 456 789",
    link: "tel:+84123456789"
  },
  {
    icon: <Mail className="h-6 w-6 text-primary" />,
    title: "Email",
    content: "contact@3dteam.com",
    link: "mailto:contact@3dteam.com"
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "Giờ làm việc",
    content: "Thứ 2 - Thứ 7: 8:00 - 17:00"
  }
]

const SectionContact = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-2">Liên hệ với chúng tôi</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-gray-600 mb-8 text-lg">
              Hãy liên hệ với chúng tôi để được tư vấn về giải pháp scan 3D phù hợp nhất cho doanh nghiệp của bạn.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    {item.link ? (
                      <a 
                        href={item.link}
                        className="text-gray-600 hover:text-primary transition-colors"
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Gửi tin nhắn cho chúng tôi</h2>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quick-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Họ và tên
                  </label>
                  <Input 
                    id="quick-name"
                    placeholder="Nhập họ và tên"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="quick-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input 
                    id="quick-email"
                    type="email"
                    placeholder="example@domain.com"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="quick-phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Số điện thoại
                </label>
                <Input 
                  id="quick-phone"
                  type="tel"
                  placeholder="Nhập số điện thoại"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="quick-message" className="block text-sm font-medium text-gray-700 mb-1">
                  Nội dung
                </label>
                <Textarea 
                  id="quick-message"
                  placeholder="Nhập nội dung tin nhắn"
                  className="w-full min-h-[120px]"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90"
              >
                Gửi tin nhắn <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionContact