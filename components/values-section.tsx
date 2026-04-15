'use client';

import { useInView } from '@/hooks/use-in-view';

export function ValuesSection() {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  const values = [
    {
      id: 1,
      title: 'Why Do We Do What We Do?',
      description:
        'From listening to your story in the first meet, to witness you walk the aisle and tie the knot, we feel it all. Nothing gives us more satisfaction than helping you celebrate life\'s biggest moments.',
      icon: '❤️',
    },
    {
      id: 2,
      title: 'Our Promise To You',
      description:
        'We coordinate so you can celebrate. Our team will take care of all the small, tedious details and arrangements so that you can focus on the important stuff, like soaking up every memory and cherishing it for the rest of your lives.',
      icon: '✨',
    },
  ];

  return (
    <section className="py-20 md:py-28 px-6 sm:px-8 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {values.map((value, index) => (
            <div
              key={value.id}
              className={`rounded-3xl p-8 md:p-12 flex flex-col justify-center items-center text-center border border-border/60 hover:shadow-xl transition-all duration-500 relative overflow-hidden group bg-background-secondary fade-up ${isInView ? 'animate-in' : ''} stagger-${index + 1}`}
            >
              {/* Gold top border accent */}
              <div className="absolute top-0 left-0 right-0 h-1 gradient-gold opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              <span className="text-3xl mb-4">{value.icon}</span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground mb-6 text-balance">
                {value.title}
              </h3>
              <p className="text-base sm:text-lg text-foreground-secondary leading-relaxed text-balance">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}