import Link from 'next/link'
import { Facebook, Instagram, MessageCircle, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { label: 'Social Events', href: '#services' },
      { label: 'Corporate Events', href: '#services' },
      { label: 'Wedding Planning', href: '#approach' },
    ],
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Our Portfolio', href: '#portfolio' },
      { label: 'Team', href: '#' },
      { label: 'Blog', href: '#' },
    ],
    support: [
      { label: 'Contact Us', href: '#contact' },
      { label: 'FAQ', href: '#' },
      { label: 'Support', href: '#' },
      { label: 'Privacy Policy', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: MessageCircle, href: '#', label: 'WhatsApp' },
    { icon: Mail, href: 'mailto:hello@v-create.com', label: 'Email' },
  ]

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <Link href="#" className="inline-block mb-6">
              <div className="text-2xl font-serif font-bold">
                V <span className="text-secondary">Create</span> Events
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Crafting unforgettable moments with elegance, precision, and your dreams in mind.
            </p>
            {/* <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-secondary text-foreground flex items-center justify-center hover:bg-gold-light transition-colors duration-300"
                    title={social.label}
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div> */}
          </div>

          {/* Services Links */}
          <div>
            <h5 className="text-lg font-semibold mb-6">Services</h5>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-secondary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h5 className="text-lg font-semibold mb-6">Company</h5>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-secondary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h5 className="text-lg font-semibold mb-6">Support</h5>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-secondary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm">
              © {currentYear} V-Create Events. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
