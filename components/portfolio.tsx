'use client';

import { useState } from 'react';
import { useInView } from '@/hooks/use-in-view';

const portfolioItems = [
  {
    id: 1,
    title: 'Eternal Garden Wedding',
    image: '/portfolio/2.png',
    testimonial: 'Absolutely magical! They made our dreams come true.',
    couple: 'Sarah & John',
  },
  {
    id: 2,
    title: 'Royal Celebration',
    image: '/portfolio/3.png',
    testimonial: 'Every detail was perfect. Thank you for an unforgettable day!',
    couple: 'Priya & Arjun',
  },
  {
    id: 3,
    title: 'Beachside Romance',
    image: '/portfolio/1.png',
    testimonial: 'Professional, creative, and so easy to work with.',
    couple: 'Emma & Michael',
  }
];

export function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section id="portfolio" className="py-24 px-6 sm:px-8 md:py-32 lg:py-40 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 fade-up ${isInView ? 'animate-in' : ''}`}>
          <p className="text-sm sm:text-base font-semibold text-secondary tracking-[0.2em] mb-3">
            OUR WORK
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Portfolio
          </h2>
          <p className="text-base sm:text-lg text-foreground-secondary max-w-2xl mx-auto">
            We poured our heart and soul into these weddings and maybe we will do the same for you one day soon
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-lg cursor-pointer h-80 sm:h-96 shadow-md hover:shadow-xl transition-all duration-500 fade-up ${isInView ? 'animate-in' : ''} stagger-${index + 1}`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Default bottom gradient with title always visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Full Overlay on Hover */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-4 text-balance">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-white/90 mb-4 italic">
                  &ldquo;{item.testimonial}&rdquo;
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
