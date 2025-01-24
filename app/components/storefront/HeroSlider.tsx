"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Slide {
  id: number;
  image: string;
  alt: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/images/slide1.jpg",
    alt: "Sale up to 80% off",
    title: "Summer Collection 2024",
    description:
      "Discover our latest collection with up to 80% off on selected items",
    buttonText: "Shop Now",
    buttonLink: "/products",
  },
  {
    id: 2,
    image: "/images/slide3.png",
    alt: "Sale up to 10% off",
    title: "New Arrivals",
    description:
      "Check out our newest products with special introductory prices",
    buttonText: "Explore",
    buttonLink: "/products/new-arrivals",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalId);
  }, [nextSlide]);

  return (
    <div className="relative group">
      <div className="relative overflow-hidden">
        {/* Slides */}
        <div className="relative w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 
                                ${
                                  index === currentSlide
                                    ? "opacity-100"
                                    : "opacity-0"
                                }`}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover object-center"
                priority={index === 0}
                quality={85}
                sizes="(max-width: 640px) 100vw, 
                                       (max-width: 1024px) 90vw, 
                                       85vw"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0XFyAeIRshGxsdIR0hHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                placeholder="blur"
              />
              {/* Content Overlay */}
              <div className="absolute inset-0 bg-black/40">
                <div className="container h-full flex items-center justify-center">
                  <div className="text-center text-white space-y-3 sm:space-y-4 max-w-[90%] sm:max-w-xl md:max-w-2xl mx-auto p-4 sm:p-6">
                    <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight animate-fade-up leading-tight">
                      {slide.title}
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-white/90 animate-fade-up animation-delay-100 line-clamp-3 sm:line-clamp-none">
                      {slide.description}
                    </p>
                    <div className="animate-fade-up animation-delay-200 pt-2 sm:pt-4">
                      <Link
                        href={slide.buttonLink}
                        className="inline-block min-w-[144px]"
                      >
                        <Button
                          size="lg"
                          className="bg-white text-black hover:bg-white/90 font-medium 
                                                        text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 w-full"
                        >
                          {slide.buttonText}
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="hidden md:block">
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 
                        bg-black/30 hover:bg-black/50 text-white p-2 rounded-full
                        opacity-0 group-hover:opacity-100 transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 
                        bg-black/30 hover:bg-black/50 text-white p-2 rounded-full
                        opacity-0 group-hover:opacity-100 transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full transition-colors touch-manipulation
                            ${
                              index === currentSlide
                                ? "bg-white"
                                : "bg-white/50 hover:bg-white/70"
                            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
