import { Mail, MapPin, Phone, Clock } from "lucide-react"
import HeroBanner from "@/app/components/ui/HeroBanner"
import ContactForm from "@/app/components/storefront/ContactForm"

const contactInfo = [
  {
    icon: <MapPin className="h-7 w-7 text-primary" />,
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
    content: "Thứ 2 - Thứ 7: 8:00 - 17:00",
  }
]

export default function ContactPage() {
  return (
    <div className="bg-white">
      <HeroBanner
        title="Liên Hệ"
        description="Hãy liên hệ với chúng tôi để được tư vấn giải pháp phù hợp nhất"
        image="/images/contact-hero.jpg"
        alt="Contact Us Banner"
        breadcrumb={[
          { label: "Liên hệ" }
        ]}
      />

      <div className="container py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-4xl font-bold mb-2 uppercase">Liên hệ với chúng tôi</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-gray-600 mb-8 text-lg">
              Hãy liên hệ với chúng tôi để được tư vấn về giải pháp scan 3D phù hợp nhất cho doanh nghiệp của bạn.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 text-lg">
                      {item.title}
                    </h3>
                    {item.link ? (
                      <a 
                        href={item.link}
                        className="text-gray-600 hover:text-primary transition-colors text-lg"
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
              <ContactForm />
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 rounded-lg overflow-hidden h-[400px] shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6963477727726!2d105.84769731531904!3d21.007025393946367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac428c3336e5%3A0x8d5dd5ec6df5e595!2zSOG7kyBHxrDGoW0sIEhhbm9pLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1645496755651!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location map"
          />
        </div>
      </div>
    </div>
  )
}