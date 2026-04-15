import Link from 'next/link'
import { Instagram, MessageCircle, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/v_createevents', label: 'Instagram' },
    { icon: MessageCircle, href: 'https://wa.me/917999992961', label: 'WhatsApp' },
    { icon: Mail, href: 'mailto:hello@v-create.com', label: 'Email' },
  ]

  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="flex flex-col items-center justify-center py-20 md:py-28">
        {/* Logo and Decorative Elements */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-secondary/50"></div>
            <div className="w-3 h-3 rounded-full bg-secondary/50"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-secondary/50"></div>
          </div>

          {/* Brand Logo */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-white mb-6 text-balance">
            V<span className="text-white italic">Create</span> <span className='text-secondary'>Events</span>
          </h2>

          {/* Decorative Infinity Element with gold gradient */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-secondary/50"></div>
            <svg
              width="40"
              height="20"
              viewBox="0 0 40 20"
              className="text-secondary/50"
            >
              <path
                d="M5 10 Q 10 5, 15 10 Q 20 15, 20 10 Q 20 5, 25 10 Q 30 15, 35 10"
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
              />
            </svg>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-secondary/50"></div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 mb-12 md:mb-16">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-white/20 text-white/70 flex items-center justify-center hover:bg-secondary hover:border-secondary hover:text-white transition-all duration-300"
                title={social.label}
                aria-label={social.label}
              >
                <Icon size={20} />
              </a>
            )
          })}
        </div>

        {/* Divider */}
        <div className="w-full max-w-md border-t border-white/10 mb-8"></div>

        {/* Copyright */}
        <p className="text-center text-white/40 text-sm md:text-base tracking-wide">
          The V-Create Events © {currentYear}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
