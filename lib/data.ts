import db from "@/lib/db";

export const navItems = [
    {
        label: "Trang chủ",
        link: "/",
    },
    {
        label: "Giới thiệu",
        link: "/about",
    },
    {
        label: "Dịch vụ",
        link: "/services",
    },
    {
        label: "Sản phẩm",
        link: "/products",
        children: [
            {
                label: "Máy in",
                link: "/products/print",
            },
            {
                label: "Máy scan",
                link: "/products/scan",
            },
        ],
    },
    {
        label: "Tin tức",
        link: "/blogs",
    },
    {
        label: "Liên hệ",
        link: "/contact",
    },
];

export const getUserByEmail = async (email: string) => {
    try {
        const user = await db.user.findFirst({
            where: {
                email,
            },
        });

        return user;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};
