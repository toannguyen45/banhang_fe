import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Header = () => {
  return (
    <header className='bg-customSlate w-full border-b'>
      <div className='container flex justify-center md:justify-between items-center'>
        <div className='flex items-center border-l'>
          <div className='flex items-center gap-2 border-r p-3'>
            <IoIosMail className='text-red-600'/>
            <Link href='mailto:email@example.com' className='hover:text-customBlue text-sm text-red-600'>
              email@example.com
            </Link>
          </div>
          <div className='flex items-center gap-2 border-r p-3'>
            <FaPhoneAlt className='text-red-600' />
            <Link href='tel:+123456789' className='hover:text-customBlue text-sm text-red-600'>
              +123 456 789
            </Link>
          </div>
        </div>
        <div className='hidden md:flex items-center border-l'>
          <Link href={''} className='flex items-center gap-2 border-r p-3'>
            <FaFacebookF className='text-red-600' />
          </Link>
          <Link href={''} className='flex items-center gap-2 border-r p-3'>
            <FaInstagram className='text-red-600' />
          </Link>
          <Link href={''} className='flex items-center gap-2 border-r p-3'>
            <FaYoutube className='text-red-600' />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;