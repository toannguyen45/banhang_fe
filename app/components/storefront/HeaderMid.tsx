
import { Puzzle, MapPin, Mail, Smartphone } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const HeaderMid = () => {
    return (
        <div className='bg-white border-b md:static md:border-none md:bg-transparent md:shadow-none'>
            <div className='container flex items-center justify-between'>
                <div className='flex items-center justify-center flex-grow lg:flex-grow-0'>
                    <Link href='/home' className='flex items-center gap-1 text-3xl font-bold py-14'>
                        <Puzzle className='h-10 w-10' />
                        <span>3DTeam</span>
                    </Link>
                </div>
                <div className="flex-1 hidden lg:flex justify-end space-x-8">
                    <div className="flex items-center space-x-3">
                        <div className="rounded-full p-3 bg-red-50">
                            <MapPin className="w-6 h-6 text-red-600" strokeWidth={1} />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">NƠI LÀM VIỆC</h3>
                            <p className="text-gray-600">145 N Los Ave, NY</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3">
                        <div className="rounded-full p-3 bg-red-50">
                            <Mail className="w-6 h-6 text-red-600" strokeWidth={1} />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">ĐỊA CHỈ EMAIL</h3>
                            <p className="text-gray-600">consulthp@gamil.com</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3">
                        <div className="rounded-full p-3 bg-red-50">
                            <Smartphone className="w-6 h-6 text-red-600" strokeWidth={1} />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900">SỐ ĐIỆN THOẠI</h3>
                            <p className="text-gray-600">1500-2309-0202</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMid;