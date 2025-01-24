import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface HeroBannerProps {
  title: string
  description?: string
  image: string
  alt?: string
  breadcrumb: BreadcrumbItem[]
}

const HeroBanner = ({ 
  title, 
  description, 
  image, 
  alt = "Banner image",
  breadcrumb
}: HeroBannerProps) => {
  return (
    <section className="relative">
      {/* Banner Image and Content */}
      <div className="relative h-[300px] md:h-[400px]">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container relative h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {title}
            </h1>
            {description && (
              <p className="text-lg md:text-xl text-gray-100">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <nav aria-label="Breadcrumb" className="container py-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link 
                href="/"
                className="text-gray-500 hover:text-primary transition-colors flex items-center"
              >
                <Home className="h-4 w-4" />
                <span className="sr-only">Trang chủ</span>
              </Link>
            </li>
            {breadcrumb.map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <ChevronRight className="h-4 w-4 text-gray-400" />
                {item.href ? (
                  <Link 
                    href={item.href}
                    className="text-gray-500 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gray-900 font-medium">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  )
}

export default HeroBanner 