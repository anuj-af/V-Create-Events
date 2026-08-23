'use client';

import { useInView } from '@/hooks/use-in-view';

export function ValuesSection() {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  const values = [
    {
      id: 1,
      title: 'WHY DO WE DO WHAT WE DO?',
      description:
        'From listening to your story in the first meet, to witness you walk the aisle and tie the knot, we feel it all. Nothing gives us more satisfaction than helping you celebrate life\'s biggest moments.',
    },
    {
      id: 2,
      title: 'OUR PROMISE TO YOU',
      description:
        'We coordinate so you can celebrate. Our team will take care of all the small, tedious details and arrangements so that you can focus on the important stuff, like soaking up every memory and cherishing it for the rest of your lives.',
    },
  ];

  return (
    <section className="py-20 md:py-28 px-6 sm:px-8 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {values.map((value, index) => (
            <div
              key={value.id}
              className={`rounded-[2.5rem] bg-white p-10 md:p-14 flex flex-col justify-center items-center text-center border border-gray-200 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] transition-all duration-500 fade-up ${isInView ? 'animate-in' : ''} stagger-${index + 1}`}
            >
              <h3 className="text-2xl sm:text-3xl md:text-[28px] font-serif font-light text-foreground mb-6 uppercase text-balance">
                {value.title}
              </h3>
              <p className="text-base md:text-[17px] text-foreground-secondary leading-[1.8] font-serif text-balance">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}