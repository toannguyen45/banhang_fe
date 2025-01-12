import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const News = () => {
    return (
        <section className="flex flex-col gap-4 items-center py-24">
            <p className="text-4xl font-bold">Tin tức</p>
            <div className="w-28 border-b-2 border-gray-400 mb-5"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                <div className="bg-white w-full hover:shadow-xl transition-shadow duration-500">
                    <div className="relative overflow-hidden h-64 group">
                        <Image
                            src={'/images/news-1.jpg'}
                            alt="news"
                            fill
                            quality={100}
                            loading='lazy'
                            className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
                        />
                    </div>
                    <div className="flex flex-col gap-4 border p-6">
                        <h4 className="font-semibold text-2xl">
                            Why is a ticket to Lagos so expensive?
                        </h4>
                        <p className="text-slate-400">
                            Tempor incididunt labore dolore magna aliqua. enim minim veniam quis nostrud exercitation laboris.
                        </p>
                        <Link
                            href={'/news'}
                            className="font-medium flex items-center gap-1 hover:text-red-400 group"
                        >
                            <span className='font-semibold'>Xem thêm</span>
                            <ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
                        </Link>
                    </div>
                </div>
                <div className="bg-white w-full hover:shadow-xl transition-shadow duration-500">
                    <div className="relative overflow-hidden h-64 group">
                        <Image
                            src={'/images/news-2.jpg'}
                            alt="news"
                            fill
                            quality={100}
                            loading='lazy'
                            className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
                        />
                    </div>
                    <div className="flex flex-col gap-4 border p-6">
                        <h4 className="font-semibold text-2xl">
                            Why is a ticket to Lagos so expensive?
                        </h4>
                        <p className="text-slate-400">
                            Tempor incididunt labore dolore magna aliqua. enim minim veniam quis nostrud exercitation laboris.
                        </p>
                        <Link
                            href={'/news'}
                            className="font-medium flex items-center gap-1 hover:text-red-400 group"
                        >
                            <span className='font-semibold'>Xem thêm</span>
                            <ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
                        </Link>
                    </div>
                </div>
                <div className="bg-white w-full hover:shadow-xl transition-shadow duration-500">
                    <div className="relative overflow-hidden h-64 group">
                        <Image
                            src={'/images/news-3.jpg'}
                            alt="news"
                            fill
                            quality={100}
                            className="w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
                        />
                    </div>
                    <div className="flex flex-col gap-4 border p-6">
                        <h4 className="font-semibold text-2xl">
                            Why is a ticket to Lagos so expensive?
                        </h4>
                        <p className="text-slate-400">
                            Tempor incididunt labore dolore magna aliqua. enim minim veniam quis nostrud exercitation laboris.
                        </p>
                        <Link
                            href={'/news'}
                            className="font-medium flex items-center gap-1 hover:text-red-400 group"
                        >
                            <span className='font-semibold'>Xem thêm</span>
                            <ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default News;