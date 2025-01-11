import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, ShoppingBag, SquareMenu } from "lucide-react";
import Link from "next/link";

const navItems = [
  {
    label: "Trang chủ",
    link: "/",
  },
  {
    label: "Về chúng tôi",
    link: "/about",
  },
  {
    label: "Dịch vụ",
    link: "/contact",
  },
  {
    label: "Sản phẩm",
    link: "/san-pham",
    children: [
      {
        label: "Men",
        link: "/shop/men",
      },
      {
        label: "Women",
        link: "/shop/women",
      },
    ],
  },
  {
    label: "Liên hệ",
    link: "/news",
  },
];

export default function Navbar() {
  return (
    <nav className="bg-customBlue sticky top-0 z-50 bg-opacity-90 backdrop-blur-lg shadow-lg">
      <div className="container">
        <ul className="hidden md:flex items-center">
          {navItems.map((item) => (
            <li key={item.label} className="relative group">
              <Link
                href={item.link}
                className="flex items-center hover:text-customOrange text-white transition py-5 mr-10 font-medium uppercase"
              >
                {item.label}
                {item.children && (
                  <ChevronDown
                    className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180 group-hover:customOrange"
                  />
                )}
              </Link>

              {item.children && (
                <ul className="absolute left-0 hidden group-hover:block bg-customBlue shadow-lg w-48">
                  {item.children.map((child) => (
                    <li key={child.label} className="px-4 py-2">
                      <Link
                        href={child.link}
                        className="block hover:text-red-400 text-white font-medium"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
