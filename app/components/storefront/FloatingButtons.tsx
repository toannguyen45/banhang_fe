'use client'

import { useState, useEffect, useCallback } from 'react'
import { ArrowUp, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GrContact } from "react-icons/gr"
import { SiZalo } from "react-icons/si"

interface ContactButton {
  icon: React.ReactNode
  label: string
  bgColor: string
  hoverColor: string
  action: () => void
}

const FloatingButtons = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  const contactButtons: ContactButton[] = [
    {
      icon: <Phone className="h-7 w-7" />,
      label: "Call us",
      bgColor: "bg-red-500",
      hoverColor: "hover:bg-red-600",
      action: () => window.location.href = 'tel:+1234567890'
    },
    {
      icon: <SiZalo className="h-7 w-7" />,
      label: "Chat on Zalo",
      bgColor: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
      action: () => window.open('https://example.com/chat', '_blank')
    },
    {
      icon: (
        <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.145 2 11.259c0 2.913 1.454 5.512 3.726 7.21V22l3.405-1.869c.909.252 1.871.388 2.869.388 5.523 0 10-4.145 10-9.259C22 6.145 17.523 2 12 2zm1.059 12.469L10.059 11.5 6 14.469l4.471-4.75 3 2.969L17.529 9.5l-4.47 4.969z" />
        </svg>
      ),
      label: "Message us on Messenger",
      bgColor: "bg-[#0099FF]",
      hoverColor: "hover:bg-[#0088FF]",
      action: () => window.open('https://m.me/yourpage', '_blank')
    }
  ]

  const handleScroll = useCallback(() => {
    setShowBackToTop(window.scrollY > 200)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
      {/* Back to Top Button */}
      <Button
        variant="default"
        size="icon"
        className={`
          rounded-full bg-white hover:bg-black shadow-xl 
          transition-all duration-300 
          ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
          ${isOpen ? 'mb-36' : 'mb-3'}
        `}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUp className="h-7 w-7 text-red-500" />
      </Button>

      {/* Contact Buttons Container */}
      <div className="relative">
        <div
          className={`
            absolute bottom-12 right-0 flex flex-col items-end gap-2 
            transition-all duration-300
            ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
          `}
        >
          {contactButtons.map((button, index) => (
            <Button
              key={index}
              variant="default"
              size="icon"
              className={`rounded-full shadow-xl ${button.bgColor} ${button.hoverColor}`}
              onClick={button.action}
              aria-label={button.label}
            >
              {button.icon}
            </Button>
          ))}
        </div>

        {/* Toggle Button */}
        <Button
          variant="default"
          size="icon"
          className="rounded-full bg-orange-500 hover:bg-red-600 transition-transform duration-300 shadow-xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close contact options" : "Open contact options"}
          aria-expanded={isOpen}
        >
          <GrContact className="h-7 w-7" />
        </Button>
      </div>
    </div>
  )
}

export default FloatingButtons
