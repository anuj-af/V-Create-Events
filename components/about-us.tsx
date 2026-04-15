'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useInView } from '@/hooks/use-in-view';

const teamMembers = [
  {
    id: 1,
    name: 'Vishu Patni',
    title: 'Founder, V-Create Events & Decor',
    image: '/founders/vishesh.png',
    bio: 'Vishu is the heart and soul behind every celebration we create. With a fearless, youthful energy and meticulous eye for detail, he brings visions to life with precision, creativity, and care. From the first conversation to the final moment, he listens, adapts, and goes above and beyond so every element feels personal and unforgettable.',
  }
];

export function AboutUs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const currentMember = teamMembers[currentIndex];

  return (
    <section id="about" className="py-20 px-6 sm:px-8 md:py-28 lg:py-36 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 md:mb-20 fade-up ${isInView ? 'animate-in' : ''}`}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-foreground mb-8">
            About Us
          </h2>
          <p className="text-base sm:text-lg text-foreground-secondary leading-relaxed max-w-4xl mx-auto">
            Discover the art of extraordinary celebrations with V-Create Events and Decor. Our team of passionate and creative professionals has successfully delivered over 100+ wedding events across India, UAE, and Turkey, bringing exceptional experiences to life across borders. At V-Create, we specialize in end-to-end event planning and décor solutions, ensuring every detail is thoughtfully curated and every moment is nothing short of spectacular. Our detail-oriented approach guarantees that each event is a uniquely personalized experience, crafted to exceed every expectation. Backed by years of combined expertise in event management and design, our dedicated team is committed to meeting your every need with precision, creativity, and care. From the first idea to the final moment, we turn your vision into a reality you will cherish forever.
          </p>
        </div>

        {/* Team Member */}
        <div className="relative">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Team Member Image */}
            <div className={`w-full lg:w-5/12 flex-shrink-0 scale-in ${isInView ? 'animate-in' : ''}`}>
              <div className="relative aspect-square rounded-2xl overflow-hidden p-4 bg-background-secondary shadow-lg">
                <Image
                  src={currentMember.image}
                  alt={currentMember.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Team Member Info */}
            <div className={`w-full lg:w-7/12 slide-right ${isInView ? 'animate-in' : ''}`}>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-3">
                {currentMember.name}
              </h3>
              <p className="text-base sm:text-lg font-semibold text-secondary mb-6 tracking-[0.1em]">
                {currentMember.title}
              </p>
              <p className="text-base text-foreground-secondary leading-relaxed mb-8">
                {currentMember.bio}
              </p>

              {/* Carousel Indicators */}
              <div className="flex gap-3 mb-8 lg:mb-0">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-secondary w-8'
                        : 'bg-border w-2 hover:bg-foreground-secondary'
                    }`}
                    aria-label={`Go to member ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
