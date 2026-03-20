'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const teamMembers = [
  {
    id: 1,
    name: 'Vishesh Patni',
    title: 'Founder & Managing Director',
    image: '/placeholder.png',
    bio: 'Mr. Vishesh Patni is a seasoned professional with extensive experience in banqueting, hospitality operations, with a career boasting senior leadership roles at esteemed institutions such as the TAJ group and The Park Hotel chain. However, it is his expertise and leadership as Managing Director of his massively successful international brainchild, V-Create Events, which has truly defined his illustrious career. His remarkable technical knowledge and tireless efforts have cemented his identity as a pioneer in the ever-growing event management industry, which continues to set new benchmarks for excellence with every event.',
  },
  {
    id: 2,
    name: 'Amanpal Tongya',
    title: 'Creative Director',
    image: '/placeholder.png',
    bio: 'With over 15 years of experience in event design and curation, Amanpal brings a unique vision to every project. Her innovative approach to storytelling through events has transformed hundreds of celebrations into unforgettable experiences. She believes in the power of meticulous details and creative excellence.',
  },
  {
    id: 3,
    name: 'Avani Tongia',
    title: 'Operations Manager',
    image: '/placeholder.png',
    bio: 'Avani ensures every event runs flawlessly with his strategic planning and impeccable execution. His background in logistics and coordination combined with his passion for excellence makes him an invaluable asset. He takes pride in turning complex requirements into seamless experiences.',
  },
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
    <section id="about" className="py-20 px-6 sm:px-8 md:py-28 lg:py-32 bg-background">
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
            Discover the epitome of luxury and excellence with VCreate Events, celebrated as one of the leading event management companies across Asia. Our team of uniquely skilled multicultural professionals has successfully executed over 150 events in the last 10 years, introducing the great Indian wedding experience to a number of locations across the world for the very first time and hosting several high-profile corporates for a variety of events, both domestic and international. We offer end-to-end event planning solutions covering every aspect of the experience, and our detail-oriented approach ensures every event we do is a distinctly personalised experience tailored to exceed every expectation. With a combined experience of over 40 years in Hospitality and the expertise of tenured hoteliers, our team is ready to meet your every need with perfection and offer you an experience to remember.
          </p>
        </div>

        {/* Team Member Carousel */}
        <div className="relative">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* Left Navigation Arrow */}
            <button
              onClick={goToPrevious}
              className="hidden lg:flex absolute -left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-foreground-secondary hover:border-secondary text-foreground-secondary hover:text-secondary transition-colors duration-300 items-center justify-center"
              aria-label="Previous member"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Team Member Image */}
            <div className="w-full lg:w-5/12 flex-shrink-0">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={currentMember.image}
                  alt={currentMember.name}
                  fill
                  className="object-cover"
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
            <button
              onClick={goToNext}
              className="hidden lg:flex absolute -right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-foreground-secondary hover:border-secondary text-foreground-secondary hover:text-secondary transition-colors duration-300 items-center justify-center"
              aria-label="Next member"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex gap-4 justify-center mt-8">
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
          </div>
        </div>
      </div>
    </section>
  );
}
