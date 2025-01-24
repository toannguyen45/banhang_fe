import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { ReactNode } from 'react';

interface ContactInfo {
  icon: ReactNode;
  href: string;
  label: string;
  text?: string;
}

const contactItems: ContactInfo[] = [
  {
    icon: <IoIosMail className="h-4 w-4 text-primary transition-colors" />,
    href: 'mailto:email@example.com',
    label: 'Send us an email',
    text: 'email@example.com'
  },
  {
    icon: <FaPhoneAlt className="h-4 w-4 text-primary transition-colors" />,
    href: 'tel:+123456789',
    label: 'Call us',
    text: '+123 456 789'
  }
];

const socialLinks: ContactInfo[] = [
  {
    icon: <FaFacebookF className="h-4 w-4 text-primary transition-colors" />,
    href: 'https://facebook.com',
    label: 'Visit our Facebook page'
  },
  {
    icon: <FaInstagram className="h-4 w-4 text-primary transition-colors" />,
    href: 'https://instagram.com',
    label: 'Follow us on Instagram'
  },
  {
    icon: <FaYoutube className="h-4 w-4 text-primary transition-colors" />,
    href: 'https://youtube.com',
    label: 'Subscribe to our YouTube channel'
  }
];

const Header = () => {
  return (
    <header className="bg-customSlate w-full border-b" role="banner">
      <div className="container flex justify-center md:justify-between items-center">
        {/* Contact Information */}
        <nav className="flex items-center border-l" aria-label="Contact information">
          {contactItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center gap-2 border-r p-3 hover:bg-gray-50 transition-colors group"
              aria-label={item.label}
            >
              {item.icon}
              {item.text && (
                <span className="text-sm text-primary group-hover:text-primary/90 transition-colors">
                  {item.text}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Social Media Links */}
        <nav 
          className="hidden md:flex items-center border-l" 
          aria-label="Social media links"
        >
          {socialLinks.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center gap-2 border-r p-3 hover:bg-gray-50 transition-colors group"
              aria-label={item.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;