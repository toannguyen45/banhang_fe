"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MainNav = () => {
  const pathname = usePathname();

  const routes = [
    {
      href: `/dashboard`,
      name: "Thống kê",
    },
    {
      href: `/dashboard/banners`,
      name: "Banners",
    },
    {
      href: `/dashboard/orders`,
      name: "Đơn hàng",
    },
    {
      href: `/dashboard/products`,
      name: "Sản phẩm",
    },
    {
      href: `/dashboard/settings`,
      name: "Cài đặt",
    },
  ];

  return (
    <>
      {routes.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "font-medium text-lg",
            link.href === pathname
              ? "text-red-500"
              : "text-black hover:text-foreground"
          )}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default MainNav;
