'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const { ref, isInView } = useInView({ threshold: 0.05 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '' });
      setSubmitted(false);
    }, 3000);
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/v_createevents', label: 'Instagram' },
    { icon: MessageCircle, href: 'https://wa.me/917999992961', label: 'WhatsApp' },
    { icon: Mail, href: 'mailto:hello@v-create.com', label: 'Email' },
  ];

  return (
    <section id="contact" className="py-24 px-6 sm:px-8 md:py-32 lg:py-40 bg-background-secondary" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Hero Image Section */}
        <div className={`mb-16 rounded-2xl overflow-hidden shadow-lg fade-up ${isInView ? 'animate-in' : ''}`}>
          <div className="h-64 sm:h-80 md:h-96 relative">
            <img
              src="/contact-banner.png"
              alt="Contact us"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/10 flex items-center justify-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white text-center px-6 text-balance">
                LET US COORDINATE, SO YOU CAN CELEBRATE
              </h2>
            </div>
          </div>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <div className={`lg:col-span-2 fade-up ${isInView ? 'animate-in' : ''}`} style={{ transitionDelay: '0.1s' }}>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">
              Get In Touch With Us
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="px-4 py-3.5 border border-border/60 rounded-xl bg-white text-foreground placeholder-foreground-secondary/60 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all duration-300"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="px-4 py-3.5 border border-border/60 rounded-xl bg-white text-foreground placeholder-foreground-secondary/60 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all duration-300"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Your E-mail"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3.5 border border-border/60 rounded-xl bg-white text-foreground placeholder-foreground-secondary/60 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all duration-300"
              />

              <button
                type="submit"
                className="w-full sm:w-auto px-12 py-3.5 gradient-gold text-white font-semibold text-sm tracking-[0.1em] rounded-full hover:opacity-90 hover:shadow-lg transition-all duration-300"
              >
                {submitted ? '✓ Message Sent!' : 'GET IN TOUCH'}
              </button>
            </form>

            {/* Social Links */}
            <div className="mt-12">
              <p className="text-sm font-semibold text-foreground-secondary mb-6 tracking-[0.15em]">
                CONNECT WITH US
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-foreground text-white flex items-center justify-center hover:bg-secondary transition-all duration-300"
                      title={social.label}
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className={`slide-right ${isInView ? 'animate-in' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact Info</h4>
            <div className="space-y-5">
              <div className="flex gap-4">
                <Phone size={20} className="text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-foreground-secondary tracking-wide">Phone</p>
                  <a href="tel:+91-9876543210" className="text-foreground hover:text-secondary transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail size={20} className="text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-foreground-secondary tracking-wide">Email</p>
                  <a href="mailto:hello@v-create.com" className="text-foreground hover:text-secondary transition-colors">
                    hello@v-create.com
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin size={20} className="text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-foreground-secondary tracking-wide">Location</p>
                  <p className="text-foreground">Indore, India</p>
                  <p className="text-foreground">Dubai, UAE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
