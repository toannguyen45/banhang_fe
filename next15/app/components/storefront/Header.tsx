import { PhoneCall, Mail, User } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className='bg-white py-3 flex justify-between w-full border-b'>
      <div className='container flex justify-between items-center'>
        <div className='flex items-center gap-10'>
          <div className='flex items-center gap-2'>
            <PhoneCall className='h-5 w-5 text-gray-400' />
            <Link href='tel:+123456789' className='hover:text-red-400'>
              +123 456 789
            </Link>
          </div>
          <div className='flex items-center gap-2'>
            <Mail className='h-5 w-5 text-gray-400' />
            <Link href='mailto:email@example.com' className='hover:text-red-400'>
              email@example.com
            </Link>
          </div>
        </div>
        <div className='flex items-center'>
          <Link href='/login' className='flex items-center gap-2 hover:text-red-400'>
            <User className='h-5 w-5' />
            <span>Đăng nhập</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;