import React from 'react'
import NavbarMobile from '@/app/components/storefront/NavbarMobile';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const ToggleMobile = () => {
    return (
        <div className='lg:hidden py-4'>
            <Sheet>
                <SheetTrigger asChild>
                    <button 
                        className="border-2 border-white text-white bg-transparent h-9 w-10 flex items-center justify-center
                          hover:bg-white/10 transition-colors rounded-sm"
                        aria-label="Open menu"
                        type="button"
                    >
                        <Menu className="h-5 w-5" aria-hidden="true" />
                    </button>
                </SheetTrigger>

                <SheetContent 
                    side="left"
                    className="w-full max-w-xs p-0 bg-white"
                >
                    <SheetHeader className="p-4 border-b">
                        <SheetTitle className="text-xl font-bold">
                            <span className="text-primary">3D</span>Team
                        </SheetTitle>
                    </SheetHeader>

                    <nav 
                        className="flex flex-col h-full overflow-y-auto"
                        aria-label="Mobile navigation"
                    >
                        <NavbarMobile />
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default ToggleMobile