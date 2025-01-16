import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { ShoppingBag } from 'lucide-react'
import React from 'react'

const CartButton = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className='cursor-pointer flex items-center gap-2 hover:text-red-400 font-medium text-white'>
                    <ShoppingBag className='h-5 w-5' />
                    <span className='hidden md:block font-medium uppercase'>Giỏ hàng</span>
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
    )
}

export default CartButton