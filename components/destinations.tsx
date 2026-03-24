'use client';

import Image from 'next/image';

const destinations = [
  {
    id: 1,
    name: 'INDIA',
    image: '/placeholder.png',
  },
  {
    id: 2,
    name: 'UNITED ARAB EMIRATES',
    image: '/placeholder.png',
  },
  {
    id: 3,
    name: 'TURKEY',
    image: '/placeholder.png',
  },
];

export function Destinations() {
  return (
    <section className="py-20 px-6 sm:px-8 md:py-28 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-foreground text-balance">
            DESTINATIONS
          </h2>
        </div>

        {/* Destinations Grid */}
        <div className="grid justify-center gap-4 md:gap-16 grid-cols-[repeat(auto-fit,minmax(200px,300px))]">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
              {/* Grayscale Image (Default) */}
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-0 grayscale"
              />

              {/* Color Image (Hover) */}
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                className="object-cover w-full h-full transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              />

              {/* Text Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-all duration-300 group-hover:bg-black/30">
                <h3 className="text-white font-serif text-2xl sm:text-xl md:text-2xl font-bold text-center tracking-wider text-balance px-4">
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
