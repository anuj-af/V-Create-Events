'use client';

export function ValuesSection() {
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
    <section className="py-16 md:py-24 px-6 sm:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {values.map((value) => (
            <div
              key={value.id}
              className="rounded-3xl p-8 md:p-12 flex flex-col justify-center items-center text-center border border-border hover:shadow-lg transition-shadow duration-300"
            >
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