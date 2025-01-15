import Footer from '@/app/components/storefront/Footer';
import Header from '@/app/components/storefront/Header';
import HeaderMid from '@/app/components/storefront/HeaderMid';
import Navbar from '@/app/components/storefront/Navbar';
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
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default StoreFrontLayout;