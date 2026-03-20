'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah & Michael',
    event: 'Destination Wedding in Jaipur',
    testimonial: 'The V-Create Events transformed our vision into an absolutely magical celebration. Every detail was meticulously planned and executed. We felt completely taken care of from the first consultation to the last moment of our wedding day. Their team\'s expertise and dedication made our dream wedding a reality.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya & Arjun',
    event: 'Royal Wedding Celebration',
    testimonial: 'Working with V-Create Events was an absolute pleasure. They brought creative ideas to the table and executed them flawlessly. The attention to detail was exceptional, and the entire experience was seamless. We couldn\'t have asked for a better team to bring our vision to life.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma & James',
    event: 'Luxury Fusion Wedding',
    testimonial: 'The professionalism and creativity of V-Create Events team is unmatched. They understood our requirements perfectly and delivered beyond our expectations. From the initial planning to the final execution, everything was handled with grace and sophistication. Highly recommended!',
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 px-6 sm:px-8 md:py-28 lg:py-32 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
            TESTIMONIALS
          </h2>
          <p className="text-base sm:text-lg text-foreground-secondary">
            What our cherished clients have to say
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-white rounded-lg border border-border p-8 sm:p-12 min-h-96 flex flex-col justify-between relative">
            {/* Quote Mark */}
            <div className="text-6xl text-secondary opacity-20 absolute -top-4 -left-4">
              "
            </div>

            {/* Star Rating */}
            <div className="flex gap-2 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="fill-secondary text-secondary"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-lg text-foreground leading-relaxed mb-8 text-balance">
              {currentTestimonial.testimonial}
            </p>

            {/* Client Info */}
            <div className="border-t border-border pt-6">
              <h4 className="text-xl font-semibold text-foreground mb-2">
                {currentTestimonial.name}
              </h4>
              <p className="text-sm text-secondary font-semibold tracking-wide">
                {currentTestimonial.event}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4 justify-center mt-12">
            <button
              onClick={goToPrevious}
              className="p-3 rounded-full border-2 border-foreground-secondary hover:border-secondary text-foreground-secondary hover:text-secondary transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Indicators */}
            <div className="flex gap-3 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-secondary w-8'
                      : 'bg-border w-2 hover:bg-foreground-secondary'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-3 rounded-full border-2 border-foreground-secondary hover:border-secondary text-foreground-secondary hover:text-secondary transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
