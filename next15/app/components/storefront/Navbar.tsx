import { Button } from "@/components/ui/button";
import { ChevronDown, MenuIcon, ShoppingBag } from "lucide-react";
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
    <nav className="sticky top-0 z-50 bg-opacity-90 backdrop-blur-lg border-b shadow-sm">
      <div className="container flex justify-between items-center w-full">
        <h1 className='font-bold text-red-600 text-4xl py-8'>3DTEAM</h1>
        <ul className="hidden md:flex items-center">
          {navItems.map((item) => (
            <li key={item.label} className="relative group">
              <Link
                href={item.link}
                className="flex items-center hover:text-red-400 transition mr-8 py-10 font-medium"
              >
                {item.label}
                {item.children && (
                  <ChevronDown
                    className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180 group-hover:text-red-400"
                  />
                )}
              </Link>

              {item.children && (
                <ul className="absolute left-0 hidden group-hover:block bg-white border shadow-lg w-40">
                  {item.children.map((child) => (
                    <li key={child.label} className="px-4 py-2 hover:bg-red-500 border-b">
                      <Link
                        href={child.link}
                        className="block hover:text-white font-medium"
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
        <div className="flex justify-between items-center gap-5">
          <ShoppingBag className='h-7 w-7' />
          <Button className='shrink-0 md:hidden border-black bg-transparent'
            variant={'outline'}
            size='icon'
          >
            <MenuIcon className='h-5 w-5' />
          </Button>
        </div>

      </div>
    </nav>
  );
}
