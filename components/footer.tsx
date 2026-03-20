import Link from 'next/link'
import { Instagram, MessageCircle, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: MessageCircle, href: 'https://wa.me/919876543210', label: 'WhatsApp' },
    { icon: Mail, href: 'mailto:hello@v-create.com', label: 'Email' },
  ]

  return (
    <footer className="bg-gray-700 text-white">
      <div className="flex flex-col items-center justify-center py-20 md:py-28">
        {/* Logo and Decorative Elements */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-white opacity-50"></div>
            <div className="w-4 h-4 rounded-full bg-white opacity-50"></div>
            <div className="w-16 h-px bg-white opacity-50"></div>
          </div>

          {/* Brand Logo */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-white mb-6 text-balance">
            V<span className="text-white italic">Create</span> <span className='text-secondary'>Events</span>
          </h2>

          {/* Decorative Infinity Element */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-white opacity-50"></div>
            <svg
              width="40"
              height="20"
              viewBox="0 0 40 20"
              className="opacity-50"
            >
              <path
                d="M5 10 Q 10 5, 15 10 Q 20 15, 20 10 Q 20 5, 25 10 Q 30 15, 35 10"
                stroke="white"
                fill="none"
                strokeWidth="1.5"
              />
            </svg>
            <div className="w-16 h-px bg-white opacity-50"></div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-8 mb-12 md:mb-16">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.label}
                href={social.href}
                className="w-12 h-12 rounded-full border-2 border-white text-white flex items-center justify-center hover:bg-white hover:text-gray-700 transition-all duration-300"
                title={social.label}
                aria-label={social.label}
              >
                <Icon size={20} />
              </a>
            )
          })}
        </div>

        {/* Divider */}
        <div className="w-full border-t border-white opacity-20 mb-8"></div>

        {/* Copyright */}
        <p className="text-center text-gray-200 text-sm md:text-base">
          The V-Create Events © {currentYear}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
