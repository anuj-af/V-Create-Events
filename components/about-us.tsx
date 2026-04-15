'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

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

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentMember = teamMembers[currentIndex];

  return (
    <section id="about" className="py-16 px-6 sm:px-8 md:py-24 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          {/* <p className="text-sm sm:text-base font-semibold text-secondary tracking-wide mb-2">
            WHO ARE WE
          </p> */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-foreground mb-8">
            ABOUT US
          </h2>
          <p className="text-base sm:text-lg text-foreground-secondary leading-relaxed max-w-4xl mx-auto">
            Discover the art of extraordinary celebrations with V-Create Events and Decor. Our team of passionate and creative professionals has successfully delivered over 100+ wedding events across India, UAE, and Turkey, bringing exceptional experiences to life across borders. At V-Create, we specialize in end-to-end event planning and décor solutions, ensuring every detail is thoughtfully curated and every moment is nothing short of spectacular. Our detail-oriented approach guarantees that each event is a uniquely personalized experience, crafted to exceed every expectation. Backed by years of combined expertise in event management and design, our dedicated team is committed to meeting your every need with precision, creativity, and care. From the first idea to the final moment, we turn your vision into a reality you will cherish forever.
          </p>
        </div>

        {/* Team Member Carousel */}
        <div className="relative">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Left Navigation Arrow */}
            {/* <button
              onClick={goToPrevious}
              className="hidden lg:flex absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-foreground-secondary hover:border-secondary text-foreground-secondary hover:text-secondary transition-colors duration-300 items-center justify-center"
              aria-label="Previous member"
            >
              <ChevronLeft size={24} />
            </button> */}

            {/* Team Member Image */}
            <div className="w-full lg:w-5/12 flex-shrink-0">
              <div className="relative aspect-square rounded-lg overflow-hidden p-4 bg-gray-100">
                <Image
                  src={currentMember.image}
                  alt={currentMember.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Team Member Info */}
            <div className="w-full lg:w-7/12">
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-3">
                {currentMember.name}
              </h3>
              <p className="text-base sm:text-lg font-semibold text-secondary mb-6 tracking-wide">
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

            {/* Right Navigation Arrow */}
            {/* <button
              onClick={goToNext}
              className="hidden lg:flex absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-foreground-secondary hover:border-secondary text-foreground-secondary hover:text-secondary transition-colors duration-300 items-center justify-center"
              aria-label="Next member"
            >
              <ChevronRight size={24} />
            </button> */}
          </div>

          {/* Mobile Navigation */}
          {/* <div className="lg:hidden flex gap-4 justify-center mt-8">
            <button
              onClick={goToPrevious}
              className="p-3 rounded-full border-2 border-foreground-secondary hover:border-secondary text-foreground-secondary hover:text-secondary transition-colors duration-300"
              aria-label="Previous member"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goToNext}
              className="p-3 rounded-full border-2 border-foreground-secondary hover:border-secondary text-foreground-secondary hover:text-secondary transition-colors duration-300"
              aria-label="Next member"
            >
              <ChevronRight size={20} />
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
