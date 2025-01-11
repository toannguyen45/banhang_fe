import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-gray-800 text-white pt-10 mt-16">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-semibold">About Us</h3>
                    <p className="text-sm">
                        We are a team of passionate individuals committed to providing the best services and products to our customers.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-semibold">Quick Links</h3>
                    <ul className="text-sm">
                        <li>
                            <Link href="/home" className="hover:underline">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:underline">About Us</Link>
                        </li>
                        <li>
                            <Link href="/services" className="hover:underline">Services</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="text-lg font-semibold">Contact Us</h3>
                    <p className="text-sm">
                        Email: <Link href="mailto:info@example.com" className="hover:underline">info@example.com</Link>
                    </p>
                    <p className="text-sm">
                        Phone: <Link href="tel:+123456789" className="hover:underline">+123 456 789</Link>
                    </p>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-700 p-4 text-center text-sm">
                Copyright &copy; 2025 3DTeam. Powered by MinhToan
            </div>
        </footer>
    );
};

export default Footer;