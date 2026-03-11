'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);

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
    { icon: Facebook, href: '#', label: 'Facebook', color: '#1877F2' },
    { icon: Instagram, href: '#', label: 'Instagram', color: '#E4405F' },
    { icon: MessageCircle, href: '#', label: 'WhatsApp', color: '#25D366' },
    { icon: Mail, href: 'mailto:hello@v-create.com', label: 'Email', color: '#EA4335' },
  ];

  return (
    <section id="contact" className="py-20 px-6 sm:px-8 md:py-28 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Hero Image Section */}
        <div className="mb-16 rounded-lg overflow-hidden">
          <div className="h-64 sm:h-80 md:h-96 relative">
            <img
              src="/placeholder.png"
              alt="Contact us"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white text-center px-6 text-balance">
                LET US COORDINATE, SO YOU CAN CELEBRATE
              </h2>
            </div>
          </div>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-8">
              GET IN TOUCH WITH US
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
                  className="px-4 py-3 border border-border rounded-lg bg-white text-foreground placeholder-foreground-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border border-border rounded-lg bg-white text-foreground placeholder-foreground-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Your E-mail"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg bg-white text-foreground placeholder-foreground-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
              />

              <button
                type="submit"
                className="w-full sm:w-auto px-12 py-3 bg-foreground text-white font-semibold text-sm hover:bg-foreground-secondary transition-colors duration-300"
              >
                {submitted ? 'Message Sent!' : 'GET IN TOUCH'}
              </button>
            </form>

            {/* Social Links */}
            <div className="mt-12">
              <p className="text-sm font-semibold text-foreground-secondary mb-6">
                CONNECT WITH US
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-12 h-12 rounded-full bg-foreground text-white flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
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
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex gap-4">
                <Phone size={20} className="text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-foreground-secondary">Phone</p>
                  <a href="tel:+91-9876543210" className="text-foreground hover:text-secondary transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail size={20} className="text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-foreground-secondary">Email</p>
                  <a href="mailto:hello@v-create.com" className="text-foreground hover:text-secondary transition-colors">
                    hello@v-create.com
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin size={20} className="text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-foreground-secondary">Location</p>
                  <p className="text-foreground">Mumbai, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
