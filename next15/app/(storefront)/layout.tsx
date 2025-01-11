import Footer from '@/app/components/storefront/Footer';
import Header from '@/app/components/storefront/Header';
import HeaderMid from '@/app/components/storefront/HeaderMid';
import Navbar from '@/app/components/storefront/Navbar';
import { Toaster } from '@/components/ui/toaster';
import React, { ReactNode } from 'react';

const StoreFrontLayout = ({
    children,
}: {
    children: ReactNode;
}) => {
    return (
        <div className='flex min-h-screen flex-col'>
            <Header />
            <HeaderMid />
            <Navbar />
            <main className="bg-white flex-grow w-full">
                <div className='container mx-auto px-4'>
                    {children}
                </div>
            </main>
            <Footer />
            <Toaster />
        </div>
    );
};

export default StoreFrontLayout;