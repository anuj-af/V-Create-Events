'use client';

import { useState } from 'react';

const portfolioItems = [
  {
    id: 1,
    title: 'Eternal Garden Wedding',
    image: '/placeholder.png',
    testimonial: 'Absolutely magical! They made our dreams come true.',
    couple: 'Sarah & John',
  },
  {
    id: 2,
    title: 'Royal Celebration',
    image: '/placeholder.png',
    testimonial: 'Every detail was perfect. Thank you for an unforgettable day!',
    couple: 'Priya & Arjun',
  },
  {
    id: 3,
    title: 'Beachside Romance',
    image: '/placeholder.png',
    testimonial: 'Professional, creative, and so easy to work with.',
    couple: 'Emma & Michael',
  },
  {
    id: 4,
    title: 'Modern Elegance',
    image: '/placeholder.png',
    testimonial: 'Our vision became reality thanks to their expertise.',
    couple: 'Jessica & David',
  },
  {
    id: 5,
    title: 'Festive Fusion',
    image: '/placeholder.png',
    testimonial: 'Beautifully coordinated with amazing attention to detail.',
    couple: 'Aisha & Rohan',
  },
  {
    id: 6,
    title: 'Luxury Destination',
    image: '/placeholder.png',
    testimonial: 'A truly once-in-a-lifetime experience.',
    couple: 'Sophie & James',
  },
];

export function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-20 px-6 sm:px-8 md:py-28 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm sm:text-base font-semibold text-secondary tracking-wide mb-2">
            OUR PORTFOLIO
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
            OUR PORTFOLIO
          </h2>
          <p className="text-base sm:text-lg text-foreground-secondary max-w-2xl mx-auto">
            We poured our heart and soul into these weddings and maybe we will do the same for you one day soon
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer h-80 sm:h-96"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-4 text-balance">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-white/90 mb-6 italic">
                  "{item.testimonial}"
                </p>
                <p className="text-sm font-semibold text-secondary">
                  {item.couple}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
