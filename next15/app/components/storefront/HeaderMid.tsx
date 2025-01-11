import { Menu, Puzzle, User, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const HeaderMid = () => {
    return (
        <div className='bg-white sticky top-0 z-50  border-b'>
            <div className='container flex items-center justify-between'>
                <div className='flex items-center gap-1 md:hidden'>
                    <button className='border-2 border-black bg-transparent h-10 w-12 flex items-center justify-center'>
                        <Menu />
                    </button>
                </div>
                <div className='flex items-center justify-center flex-grow md:flex-grow-0'>
                    <Link href='/home' className='flex items-center gap-1 text-3xl font-bold py-4'>
                        <Puzzle className='h-10 w-10' />
                        <span>3DTeam</span>
                    </Link>
                </div>
                <div className='flex items-center gap-3 md:gap-6'>
                    <Link href='/login' className='flex items-center gap-2 hover:text-red-400 font-medium'>
                        <User className='h-5 w-5' />
                        <span className='hidden md:block'>Đăng nhập</span>
                    </Link>
                    <div className='h-6 border-l border-gray-300 hidden md:block'></div>
                    <Link href='/cart' className='flex items-center gap-2 hover:text-red-400 font-medium'>
                        <ShoppingBag className='h-5 w-5' />
                        <span className='hidden md:block'>Giỏ hàng</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeaderMid;