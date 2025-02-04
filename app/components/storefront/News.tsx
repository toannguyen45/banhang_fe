import { ArrowUpRight, CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NewsItem {
  id: number;
  image: string;
  date: string;
  title: string;
  author: string;
  excerpt: string;
  slug: string;
  category: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    image: "/images/news-1.jpg",
    date: "May 03, 2020",
    title: "Why is a ticket to Lagos so expensive?",
    author: "admin",
    excerpt:
      "Tempor incididunt labore dolore magna aliqua. enim minim veniam quis nostrud exercitation laboris.",
    slug: "why-is-a-ticket-to-lagos-so-expensive",
    category: "Technology",
  },
  {
    id: 2,
    image: "/images/news-2.jpg",
    date: "May 03, 2020",
    title: "Máy quét 3D màu giá rẻ ScanTech iReal 2E",
    author: "admin",
    excerpt:
      "Máy quét 3D màu giá rẻ ScanTech iReal 2E là một máy quét 3D màu di động được phát triển đặc biệt để chụp các vật thể có kích thước trung bình",
    slug: "may-quet-3d-mau-gia-re-scantech",
    category: "Product",
  },
  {
    id: 3,
    image: "/images/news-3.jpg",
    date: "May 03, 2020",
    title: "Máy Scan 3D công nghiệp Scantech Simscan chính hãng",
    author: "admin",
    excerpt:
      "SIMSCAN, một máy quét 3D cầm tay có kích thước bằng lòng bàn tay, được thiết kế đặc biệt để quét 3D các khu",
    slug: "may-scan-3d-cong-nghiep-scantech",
    category: "Industry",
  },
];

export const NewsCard = ({ item }: { item: NewsItem }) => (
  <article className="bg-white border rounded-lg transition-all duration-300 hover:shadow-lg">
    <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-500 hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={85}
        loading="lazy"
      />
    </div>
    <div className="p-6">
      <div className="flex items-center gap-2 text-gray-600 mb-3">
        <CalendarDays className="h-4 w-4" aria-hidden="true" />
        <time dateTime={item.date} className="text-sm">
          {item.date}
        </time>
        <span className="text-gray-400">•</span>
        <span className="text-sm">By {item.author}</span>
      </div>
      <Link href={`/news/${item.slug}`}>
        <h3 className="font-bold text-xl mb-3 line-clamp-2 text-gray-900 hover:text-yellow-400 transition-colors">
          {item.title}
        </h3>
      </Link>
      <p className="text-gray-600 mb-4 line-clamp-2">{item.excerpt}</p>
      <Link
        href={`/news/${item.slug}`}
        className="inline-flex items-center text-primary hover:text-yellow-400 font-medium 
          transition-colors group"
        aria-label={`Read more about ${item.title}`}
      >
        <span>Xem thêm</span>
        <ArrowUpRight
          className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 
            group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </Link>
    </div>
  </article>
);

const News = () => {
  return (
    <section
      className="container py-16 md:py-24"
      aria-labelledby="news-heading"
    >
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 id="news-heading" className="text-3xl font-bold mb-2">
          TIN TỨC
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-lg text-gray-600">
          Cập nhật những tin tức mới nhất về công nghệ quét 3D và các dự án của
          chúng tôi
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <NewsCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default News;
