'use client';

import Image from 'next/image';
import { useInView } from '@/hooks/use-in-view';

const destinations = [
  {
    id: 1,
    name: 'INDIA',
    image: '/destination1.png',
  },
  {
    id: 2,
    name: 'UNITED ARAB EMIRATES',
    image: '/destination2.png',
  },
  {
    id: 3,
    name: 'TURKEY',
    image: '/destination3.png',
  },
];

export function Destinations() {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <section className="py-24 px-6 sm:px-8 md:py-32 lg:py-40 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 fade-up ${isInView ? 'animate-in' : ''}`}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-foreground text-balance">
            Destinations
          </h2>
        </div>

        {/* Destinations Grid */}
        <div className="grid justify-center gap-6 md:gap-12 grid-cols-[repeat(auto-fit,minmax(200px,300px))]">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className={`relative aspect-square overflow-hidden group cursor-pointer rounded-lg shadow-md hover:shadow-xl transition-all duration-500 border-2 border-transparent hover:border-secondary/30 fade-up ${isInView ? 'animate-in' : ''} stagger-${index + 1}`}
            >
              {/* Image */}
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/25 transition-all duration-500 group-hover:bg-black/35">
                <h3 className="text-white font-serif text-2xl sm:text-xl md:text-2xl font-bold text-center tracking-[0.15em] px-4">
                  {destination.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
