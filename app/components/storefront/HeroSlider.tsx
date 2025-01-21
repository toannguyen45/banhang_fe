'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const slides = [
    {
        id: 1,
        image: "/images/slide1.jpg",
        alt: "Sale up to 80% off"
    },
    {
        id: 3,
        image: "/images/slide3.png",
        alt: "Sale up to 10% off"
    },
]

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, [])

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }, [])

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide()
        }, 5000) // Change slide every 5 seconds

        return () => clearInterval(intervalId)
    }, [nextSlide])

    return (
        <div className="relative overflow-hidden">
            <div className="relative aspect-[21/9] w-full">
                {slides.map((slide, index) => (
                    <Image
                        key={slide.id}
                        src={slide.image || "/placeholder.svg"}
                        alt={slide.alt}
                        fill
                        className={`object-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                        priority={index === 0}
                        quality={100}
                    />
                ))}
            </div>

            <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={prevSlide}
                aria-label="Previous slide"
            >
                <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={nextSlide}
                aria-label="Next slide"
            >
                <ChevronRight className="h-6 w-6" />
            </Button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default HeroSlider

