import Footer from '@/app/components/storefront/Footer';
import Header from '@/app/components/storefront/Header';
import Navbar from '@/app/components/storefront/Navbar';
import { Toaster } from '@/components/ui/toaster';
import React, { ReactNode } from 'react'

const StoreFrontLayout = ({
    children,
}: {
    children: ReactNode;
}) => {
    return (
        <div className='w-screen h-screen overflow-x-hidden overflow-y-auto'>
            <Header />
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
            <Toaster />
            <Footer />
        </div>
    )
}

export default StoreFrontLayout
