import React from 'react'
import { navItems } from '@/lib/data';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const NavbarMobile = () => {
    return (
        <ul>
            {navItems.map((item) => (
                <li key={item.label} className="relative group">
                    <Link
                        href={item.link}
                        className="flex items-center hover:text-customOrange transition py-5 mr-10 font-bold uppercase border-b"
                    >
                        {item.label}
                        {item.children && (
                            <ChevronDown
                                className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180 group-hover:customOrange"
                            />
                        )}
                    </Link>
                </li>
            ))}
        </ul >
    )
}

export default NavbarMobile