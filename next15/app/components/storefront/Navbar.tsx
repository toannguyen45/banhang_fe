import { ChevronDown } from "lucide-react";
import Link from "next/link";

const navItems = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Shop",
    link: "/shop",
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
    label: "About",
    link: "/about",
  },
  {
    label: "Contact",
    link: "/contact",
  },
  {
    label: "News",
    link: "/news",
  },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black bg-opacity-90 backdrop-blur-lg border-b shadow-sm">
      <ul className="w-[60%] mx-auto flex items-center space-x-8">
        {navItems.map((item) => (
          <li key={item.label} className="relative group">
            {/* Link chính */}
            <Link
              href={item.link}
              className="flex items-center text-white uppercase hover:text-slate-400 transition px-2 py-4"
            >
              {item.label}
              {item.children && (
                <ChevronDown
                  className="ml-1 h-4 w-4 text-white transition-transform duration-300 group-hover:rotate-180 group-hover:text-slate-400"
                />
              )}
            </Link>

            {/* Dropdown */}
            {item.children && (
              <ul className="absolute left-0 hidden group-hover:block bg-black border shadow-lg w-40">
                {item.children.map((child) => (
                  <li key={child.label} className="px-4 py-2 hover:bg-red-500">
                    <Link
                      href={child.link}
                      className="block text-white hover:text-white"
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
    </nav>
  );
}
