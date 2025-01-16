import React from 'react'
import NavbarMobile from '@/app/components/storefront/NavbarMobile';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const ToggleMobile = () => {
    return (
        <div className='lg:hidden py-4'>
            <Sheet>
                <SheetTrigger asChild>
                    <button className='border-2 border-white text-white bg-transparent h-7 w-9 flex items-center justify-center'>
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
    )
}

export default ToggleMobile