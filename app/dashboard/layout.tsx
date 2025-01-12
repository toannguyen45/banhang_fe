'use client'

import DashboardNavigation from '@/app/components/dashboard/DashboardNavigation'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { CircleUser, MenuIcon } from 'lucide-react'
import React, { ReactNode } from 'react'
import { useAppSelector } from '@/redux/hooks'
import { signOut, useSession } from 'next-auth/react'
import Loader from '@/app/components/dashboard/Loader'
import Login from '@/app/components/dashboard/Login'
const DashboardLayout = ({ children }: { children: ReactNode }) => {
    const isLoading = useAppSelector((store) => store.loadingReducer)
    const { data: session } = useSession()

    if (!session?.user) {
        return <Login />
    }

    return (
        <div className='flex w-full flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <header className='sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-white'>
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
                        <DropdownMenuItem onClick={() => signOut()}>
                            Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </header>
            <main className='my-5'>
                {children}
            </main>
            {isLoading && <Loader />}
        </div>
    )
}

export default DashboardLayout