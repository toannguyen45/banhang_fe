import { Puzzle, MapPin, Mail, Smartphone } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ContactInfo {
    icon: ReactNode;
    title: string;
    content: string;
    ariaLabel: string;
}

const contactDetails: ContactInfo[] = [
    {
        icon: <MapPin className="w-6 h-6 text-primary" strokeWidth={1} />,
        title: "NƠI LÀM VIỆC",
        content: "145 N Los Ave, NY",
        ariaLabel: "Our office location"
    },
    {
        icon: <Mail className="w-6 h-6 text-primary" strokeWidth={1} />,
        title: "ĐỊA CHỈ EMAIL",
        content: "consulthp@gamil.com",
        ariaLabel: "Email us at"
    },
    {
        icon: <Smartphone className="w-6 h-6 text-primary" strokeWidth={1} />,
        title: "SỐ ĐIỆN THOẠI",
        content: "1500-2309-0202",
        ariaLabel: "Call us at"
    }
];

const HeaderMid = () => {
    return (
        <header className="bg-white border-b md:static md:border-none md:bg-transparent md:shadow-none">
            <div className="container flex items-center justify-between">
                <div className='flex items-center justify-center flex-grow lg:flex-grow-0'>
                    <Link 
                        href="/" 
                        className="flex items-center gap-1 text-3xl font-bold py-7 hover:text-primary/90 transition-colors"
                        aria-label="3DTeam - Return to homepage"
                    >
                        <Puzzle className="h-10 w-10 text-primary" />
                        <span>3DTeam</span>
                    </Link>
                </div>
                <nav 
                    className="flex-1 hidden lg:flex justify-end space-x-8" 
                    aria-label="Contact information"
                >
                    {contactDetails.map((item, index) => (
                        <div 
                            key={index} 
                            className="flex items-center space-x-3 group"
                            role="complementary"
                            aria-label={item.ariaLabel}
                        >
                            <div className="rounded-full p-3 bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-sm tracking-wide">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 group-hover:text-gray-900 transition-colors">
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default HeaderMid;