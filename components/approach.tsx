'use client';

const steps = [
  {
    number: 'ONE',
    title: 'Tell Us Your Story.',
    description:
      'Whether you\'re planning a luxury destination or a low-key wedding, we want to learn more about your story, vision, goals, budget, inspiration and challenges surrounding your upcoming celebration. Together, we can dream up an initial design and ideas to begin crafting your perfect day.',
    image: '/approach1.png',
    imagePosition: 'left' as const,
  },
  {
    number: 'TWO',
    title: "We'll Establish A Firm Plan!",
    description:
      'Based on your vision and our initial meeting, we will begin to build your event from the ground up. We secure & suggest vendors, curate the event, design all your details and present the best options for you to make the perfect decisions for you and your event.',
    image: '/approach2.png',
    imagePosition: 'right' as const,
  },
  {
    number: 'THREE',
    title: "It's All In The Details",
    description:
      'As an experienced event team, we guide you through every aspect of your big day. From color palettes to table layouts, we ensure every element aligns with your vision and style. Our expertise transforms your dream into a reality with meticulous attention to detail.',
    image: '/approach3.png',
    imagePosition: 'left' as const,
  },
  {
    number: 'FOUR',
    title: "Let's Get You Married!",
    description:
      'On the big day, our team is there to handle every detail so you can focus on what matters most—celebrating with your loved ones. From setup to breakdown, we manage all logistics, timings, and unforeseen challenges to ensure your day is nothing short of magical.',
    image: '/approach4.png',
    imagePosition: 'right' as const,
  },
];

export function Approach() {
  return (
    <section id="approach" className="py-20 px-6 sm:px-8 md:py-28 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-sm sm:text-base font-semibold text-secondary tracking-wide mb-2">
            HOW WE DO IT?
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-foreground">
            OUR APPROACH
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-20 md:space-y-32">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`grid grid-cols-1 md:grid-cols-2 items-center ${
                step.imagePosition === 'right' ? 'md:direction-rtl' : ''
              }`}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden rounded-lg ${
                  step.imagePosition === 'right' ? 'md:order-2' : ''
                }`}
              >
                <div className="aspect-square md:aspect-auto md:h-96">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={step.imagePosition === 'right' ? 'md:order-1' : ''}>
                <div className={`${step.imagePosition === 'right' ? 'me-6' : 'ms-6'} mb-6`}>
                  <p className="md:text-4xl sm:text-base font-serif font-semibold text-secondary tracking-wide mb-2">
                    STEP
                  </p>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                    {step.number}
                  </h3>
                  <h4 className="text-xl sm:text-2xl font-semibold text-foreground">
                    {step.title}
                  </h4>
                </div>
                <p className={`${step.imagePosition === 'right' ? 'me-6' : 'ms-6'} text-base sm:text-lg text-foreground-secondary leading-relaxed`}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
