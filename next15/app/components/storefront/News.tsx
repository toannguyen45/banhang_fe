import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

type Props = {};

const News: FC<Props> = (props) => {
    return (
        <section className="flex flex-col gap-4 items-center py-24">
            <p className="mb-5 text-4xl">Tin tức</p>
            {/* Grid layout for responsive design */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                <div className="bg-white w-full">
                    <div className="relative overflow-hidden h-64 group">
                        <Image
                            src={'/images/news-1.jpg'}
                            alt="news"
                            fill
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
                            <span>Xem thêm</span>
                            <ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
                        </Link>
                    </div>
                </div>
                {/* Repeat the same block for other news items */}
                <div className="bg-white w-full">
                    <div className="relative overflow-hidden h-64 group">
                        <Image
                            src={'/images/news-1.jpg'}
                            alt="news"
                            fill
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
                            <span>Xem thêm</span>
                            <ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
                        </Link>
                    </div>
                </div>
                <div className="bg-white w-full">
                    <div className="relative overflow-hidden h-64 group">
                        <Image
                            src={'/images/news-1.jpg'}
                            alt="news"
                            fill
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
                            <span>Xem thêm</span>
                            <ArrowUpRight className="transition-transform duration-300 group-hover:rotate-45" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default News;