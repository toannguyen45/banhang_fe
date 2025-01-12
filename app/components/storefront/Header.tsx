import { Mail, PhoneCall } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className='bg-white py-3 flex justify-between w-full border-b'>
      <div className='container flex justify-between items-center'>
        <div className='flex items-center gap-10'>
          <div className='flex items-center gap-2'>
            <Mail className='h-4 w-4 text-gray-400' />
            <Link href='mailto:email@example.com' className='hover:text-red-400 text-sm'>
              email@example.com
            </Link>
          </div>
          <div className='flex items-center gap-2'>
            <PhoneCall className='h-4 w-4 text-gray-400' />
            <Link href='tel:+123456789' className='hover:text-red-400 text-sm'>
              +123 456 789
            </Link>
          </div>
        </div>
        <div className='flex items-center'>
        </div>
      </div>
    </header>
  );
};

export default Header;