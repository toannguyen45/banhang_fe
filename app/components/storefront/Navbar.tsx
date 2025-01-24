import CartButton from '@/app/components/storefront/CartButton';
import ToggleMobile from '@/app/components/storefront/ToggleMobile';
import { navItems } from '@/lib/data';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

interface NavItem {
  label: string;
  link: string;
  children?: NavItem[];
}

interface NavLinkProps {
  item: NavItem;
  className?: string;
  children?: ReactNode;
}

const NavLink = ({ item, className, children }: NavLinkProps) => (
  <Link
    href={item.link}
    className={className}
    role="menuitem"
    aria-label={item.children ? `${item.label} menu` : item.label}
    aria-haspopup={item.children ? 'true' : undefined}
    aria-expanded={item.children ? 'false' : undefined}
  >
    {item.label}
    {children}
  </Link>
);

const DropdownMenu = ({ items }: { items: NavItem[] }) => (
  <div className="absolute left-0 hidden group-hover:block">
    <ul 
      className="bg-customBlack shadow-lg w-48"
      role="menu"
    >
      {items.map((child) => (
        <li key={child.label} role="presentation">
          <NavLink
            item={child}
            className="block px-4 py-2 text-lg font-medium uppercase text-white 
              hover:text-yellow-400 transition-colors"
          />
        </li>
      ))}
    </ul>
  </div>
);

export default function Navbar() {
  return (
    <nav 
      className="bg-customBlack sticky top-0 z-50 shadow-2xl"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container flex justify-between items-center">
        <ToggleMobile />
        
        {/* Desktop Navigation */}
        <div className="hidden lg:block">
          <ul 
            className="flex items-center space-x-8" 
            role="menubar"
            aria-orientation="horizontal"
          >
            {navItems.map((item) => (
              <li 
                key={item.label} 
                className="relative group"
                role="presentation"
              >
                <NavLink
                  item={item}
                  className="flex items-center text-white text-lg transition-colors py-4 
                    font-medium uppercase hover:text-yellow-400 group-hover:text-yellow-400"
                >
                  {item.children && (
                    <ChevronDown
                      className="ml-1 h-4 w-4 transition-transform duration-300 
                        group-hover:rotate-180 text-current"
                      aria-hidden="true"
                    />
                  )}
                </NavLink>

                {item.children && <DropdownMenu items={item.children} />}
              </li>
            ))}
          </ul>
        </div>

        <CartButton />
      </div>
    </nav>
  );
}