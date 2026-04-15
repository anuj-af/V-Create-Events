'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'HOME', href: '#home' },
  { name: 'WHO ARE WE?', href: '#about' },
  { name: 'WHAT WE DO?', href: '#services' },
  { name: 'HOW WE DO IT?', href: '#approach' },
  { name: 'PORTFOLIO', href: '#portfolio' },
  { name: 'CONTACT US', href: '#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial state
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'glass-dark border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="#home" className="flex-shrink-0" onClick={() => scrollToSection('#home')}>
          <span className={`text-xl sm:text-2xl md:text-3xl font-serif font-bold transition-colors duration-500 ${
            scrolled ? 'text-white' : 'text-white'
          }`}>
            V <span className="text-secondary">Create</span> Events
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`text-[11px] font-semibold tracking-[0.15em] transition-colors duration-300 hover:text-secondary ${
                scrolled ? 'text-white/80' : 'text-white/80'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden transition-all duration-300 ease-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass-dark border-t border-white/10">
          <div className="flex flex-col py-4 space-y-1 px-6">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-semibold text-white/80 hover:text-secondary transition-colors py-3 text-left tracking-[0.1em]"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
