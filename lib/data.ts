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