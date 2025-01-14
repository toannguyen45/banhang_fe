import DashboardNavigation from '@/app/components/dashboard/DashboardNavigation'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { CircleUser, MenuIcon } from 'lucide-react'
import React, { ReactNode } from 'react'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { handleSignOut } from '@/app/actions/authActions'

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
    const session = await auth()

    if (!session) {
        redirect('/admin/signin')
    }

    return (
        <div className='flex w-full max-h-screen flex-col mx-auto'>
            <header className='sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-white px-6'>
                <nav className='hidden font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
                    <DashboardNavigation />
                </nav>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button className='shrink-0 md:hidden'
                            variant='outline'
                            size='icon'
                        >
                            <MenuIcon className='h-5 w-5' />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side='left'>
                        <SheetTitle className='mb-6'>Ecommerce</SheetTitle>
                        <SheetDescription className='flex flex-col gap-6 text-lg font-medium'>
                            <DashboardNavigation />
                        </SheetDescription>
                    </SheetContent>
                </Sheet>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant={'secondary'} size={'icon'} className='rounded-full'>
                            <CircleUser className='h-5 w-5' />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                        <DropdownMenuLabel>
                            My Account
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleSignOut}>
                            Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </header>
            <main className='p-6'>
                {children}
            </main>
        </div>
    )
}

export default DashboardLayout