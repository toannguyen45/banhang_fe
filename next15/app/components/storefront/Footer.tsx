import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-gray-800 text-white pt-14">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col gap-4">
                    <h3 className="text-3xl font-semibold">Về chúng tôi</h3>
                    <p className="text-lg">
                       Chúng tôi là đội ngũ thiết kế 3D ấn tượng, tiêu chí là làm ra những sản phầm đẹp, chất lượng tốt, đáp ứng nhu cầu của khách hàng
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-semibold">Liên kết nhanh</h3>
                    <ul className="text-lg leading-8">
                        <li>
                            <Link href="/" className="hover:text-customOrange">Trang chủ</Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-customOrange">Giới thiệu</Link>
                        </li>
                        <li>
                            <Link href="/services" className="hover:text-customOrange">Dịch vụ</Link>
                        </li>
                        <li>
                            <Link href="/products" className="hover:text-customOrange">Sản phẩm</Link>
                        </li>
                        <li>
                            <Link href="/blogs" className="hover:text-customOrange">Tin tức</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-customOrange">Liên hệ</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-semibold">Liên hệ</h3>
                    <p className="text-lg">
                        Email: <Link href="mailto:info@example.com" className="hover:text-customOrange">info@example.com</Link>
                    </p>
                    <p className="text-lg">
                        SĐT: <Link href="tel:+123456789" className="hover:text-customOrange">+123 456 789</Link>
                    </p>
                </div>
            </div>
            <div className="mt-12 border-t border-gray-700 p-4 text-center text-sm">
                Copyright &copy; 2025 3DTeam. Powered by MinhToan
            </div>
        </footer>
    );
};

export default Footer;