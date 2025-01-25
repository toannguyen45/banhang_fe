import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

interface FooterLink {
  label: string
  href: string
}

interface ContactInfo {
  email: string
  phone: string
  description: string
}

const quickLinks: FooterLink[] = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Giới thiệu', href: '/about' },
  { label: 'Dịch vụ', href: '/services' },
  { label: 'Sản phẩm', href: '/products' },
  { label: 'Tin tức', href: '/news' },
  { label: 'Liên hệ', href: '/contact' }
]

const contactInfo: ContactInfo = {
  email: 'info@example.com',
  phone: '+123 456 789',
  description: 'Chúng tôi là đội ngũ thiết kế 3D chuyên nghiệp, với tiêu chí tạo ra những sản phẩm chất lượng cao, đáp ứng mọi nhu cầu của khách hàng.'
}

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-customBlack text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Về chúng tôi</h3>
            <p className="text-gray-300 leading-relaxed">
              {contactInfo.description}
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer Navigation">
            <h3 className="text-2xl font-bold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-yellow-400 transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Liên hệ</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-300 hover:text-yellow-400 transition-colors inline-flex items-center gap-2"
                >
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  <span>{contactInfo.email}</span>
                </Link>
              </li>
              <li>
                <Link 
                  href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                  className="text-gray-300 hover:text-yellow-400 transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  <span>{contactInfo.phone}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container py-6 text-center text-gray-400 text-sm">
          <p>
            Copyright &copy; {currentYear} 3DTeam. Powered by{' '}
            <a 
              href="https://github.com/minhtoan1210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-yellow-400 transition-colors"
            >
              MinhToan
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer