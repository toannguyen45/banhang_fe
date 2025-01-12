import NavbarMobile from '@/app/components/storefront/NavbarMobile';
import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Puzzle, User, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const HeaderMid = () => {
    return (
        <div className='bg-white border-b md:static md:border-none md:bg-transparent md:shadow-none sticky top-0 z-40'>
            <div className='container flex items-center justify-between'>
                <div className='flex items-center gap-1 md:hidden'>
                    <Sheet>
                        <SheetTrigger asChild>
                            <button className='border-2 border-black bg-transparent h-10 w-12 flex items-center justify-center'>
                                <Menu />
                            </button>
                        </SheetTrigger>
                        <SheetContent side={'left'}>
                            <SheetHeader>
                                <SheetTitle>3DTeam</SheetTitle>
                            </SheetHeader>
                            <div className='flex flex-col'>
                                <NavbarMobile />
                            </div>
                        </SheetContent>
                    </Sheet>
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
                    <Sheet>
                        <SheetTrigger asChild>
                            <div className='cursor-pointer flex items-center gap-2 hover:text-red-400 font-medium'>
                                <ShoppingBag className='h-5 w-5' />
                                <span className='hidden md:block font-medium'>Giỏ hàng</span>
                            </div>
                        </SheetTrigger>
                        <SheetContent side={'right'}>
                            <SheetHeader>
                                <SheetTitle>Giỏ hàng</SheetTitle>
                                <SheetDescription>
                                    Make changes to your profile here. Click save when done.
                                </SheetDescription>
                            </SheetHeader>
                            <SheetFooter>
                                <SheetClose asChild>
                                    <Button type="submit">Save changes</Button>
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    );
};

export default HeaderMid;