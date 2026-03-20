'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'HOME', href: '#home' },
  {name: 'WHO ARE WE?', href: '#about'},
  { name: 'WHAT WE DO?', href: '#services' },
  { name: 'HOW WE DO IT?', href: '#approach' },
  { name: 'PORTFOLIO', href: '#portfolio' },
  { name: 'CONTACT US', href: '#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="#home" className="flex-shrink-0">
          <span className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-foreground">
            V <span className="text-secondary">Create</span> Events
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-xs font-semibold text-foreground-secondary hover:text-secondary transition-colors duration-300 tracking-wide"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-foreground hover:bg-background-secondary rounded transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="flex flex-col py-4 space-y-4 px-6">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-semibold text-foreground hover:text-secondary transition-colors py-2 text-left"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
