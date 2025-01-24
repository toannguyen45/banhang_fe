'use client'

import { navItems } from '@/lib/data'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { SheetClose } from '@/components/ui/sheet'

interface DropdownState {
  [key: string]: boolean
}

const NavbarMobile = () => {
  const [openDropdowns, setOpenDropdowns] = useState<DropdownState>({})

  const toggleDropdown = (label: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [label]: !prev[label]
    }))
  }

  return (
    <ul className="divide-y divide-gray-100">
      {navItems.map((item) => (
        <li key={item.label} className="relative">
          <div className="flex items-center">
            <SheetClose asChild>
              <Link
                href={item.link}
                className="flex-1 py-4 px-4 font-bold uppercase text-gray-900 
                  hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            </SheetClose>
            {item.children && (
              <button
                onClick={() => toggleDropdown(item.label)}
                className="p-4 hover:text-primary transition-colors"
                aria-expanded={openDropdowns[item.label]}
                aria-controls={`dropdown-${item.label}`}
                aria-label={`Toggle ${item.label} submenu`}
                type="button"
              >
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200
                    ${openDropdowns[item.label] ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
            )}
          </div>

          {item.children && (
            <ul
              id={`dropdown-${item.label}`}
              className={`bg-gray-50 transition-all duration-200 overflow-hidden
                ${openDropdowns[item.label] ? 'max-h-96' : 'max-h-0'}`}
              role="menu"
            >
              {item.children.map((child) => (
                <li key={child.label} role="none">
                  <SheetClose asChild>
                    <Link
                      href={child.link}
                      className="block py-3 px-8 text-sm font-medium text-gray-600
                        hover:text-primary transition-colors"
                      role="menuitem"
                    >
                      {child.label}
                    </Link>
                  </SheetClose>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
}

export default NavbarMobile