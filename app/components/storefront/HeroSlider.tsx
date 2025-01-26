"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const carouselItems = [
  {
    id: 1,
    image: "/images/slide1.jpg",
    alt: "Featured Product 1",
    title: "New Arrivals",
    description: "Check out our latest collection",
  },
  {
    id: 2,
    image: "/images/slide3.png",
    alt: "Featured Product 2",
    title: "Summer Sale",
    description: "Up to 50% off on selected items",
  },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselItems.length) % carouselItems.length
    );
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId);
  }, [nextSlide]);

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {carouselItems.map((item) => (
          <div key={item.id} className="w-full flex-shrink-0">
            <div className="relative h-[600px]">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-4xl font-bold mb-2">{item.title}</h2>
                  <p className="text-xl">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button
        variant="outline"
        className={`absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 ${
          isHovering ? "md:opacity-100" : ""
        } hidden md:flex`}
        onClick={prevSlide}
        aria-label="Go to previous slide"
      >
        <ChevronLeft size={24} />
      </Button>
      <Button
        variant="outline"
        className={`absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 ${
          isHovering ? "md:opacity-100" : ""
        } hidden md:flex`}
        onClick={nextSlide}
        aria-label="Go to next slide"
      >
        <ChevronRight size={24} />
      </Button>
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
