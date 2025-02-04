import { Mail, MapPin, Phone, Clock } from "lucide-react";
import Link from "next/link";
import ContactForm from "./ContactForm";

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
  isExternal?: boolean;
}

const contactInfo: ContactInfo[] = [
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: "Địa chỉ",
    content: "145 N Los Ave, NY",
    link: "https://maps.google.com/?q=145+N+Los+Ave+NY",
    isExternal: true,
  },
  {
    icon: <Phone className="h-6 w-6 text-primary" />,
    title: "Điện thoại",
    content: "+84 123 456 789",
    link: "tel:+84123456789",
    isExternal: true,
  },
  {
    icon: <Mail className="h-6 w-6 text-primary" />,
    title: "Email",
    content: "contact@3dteam.com",
    link: "mailto:contact@3dteam.com",
    isExternal: true,
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "Giờ làm việc",
    content: "Thứ 2 - Thứ 7: 8:00 - 17:00",
  },
];

const SectionContact = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-4xl font-bold mb-2 uppercase">Liên hệ với chúng tôi</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-gray-600 mb-8 text-lg">
              Hãy liên hệ với chúng tôi để được tư vấn về giải pháp scan 3D phù
              hợp nhất cho doanh nghiệp của bạn.
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
                      item.isExternal ? (
                        <a
                          href={item.link}
                          className="text-gray-600 hover:text-yellow-400 transition-colors text-lg"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <Link
                          href={item.link}
                          className="text-gray-600 hover:text-yellow-400 transition-colors text-lg"
                        >
                          {item.content}
                        </Link>
                      )
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
            <h2 className="text-2xl font-bold mb-6">
              Gửi tin nhắn cho chúng tôi
            </h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
