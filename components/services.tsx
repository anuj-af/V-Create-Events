'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const socialServices = [
  {
    id: 1,
    title: 'EVENT MANAGEMENT & PLANNING',
    description: 'Effortless guest list management, RSVP tracking, dietary preferences, and seamless communication.',
  },
  {
    id: 2,
    title: 'LOCATION SCOUTING & MAPPING',
    description: 'Expert venue selection, site visits, contract negotiations, and logistics coordination.',
  },
  {
    id: 3,
    title: 'TRANSPORT & ITINERARY SCHEDULING',
    description: 'Live performances, DJ services, transportation, and logistics coordination.',
  },
  {
    id: 4,
    title: 'END-TO-END LOGISTICS',
    description: 'Floral arrangements, theme design, lighting setup, and aesthetic enhancements.',
  },
  {
    id: 5,
    title: 'CULINARY EXPERIENCES',
    description: 'Curated menus, gastronomy coordination, and premium catering services.',
  },
  {
    id: 6,
    title: 'ENTERTAINMENT & ACTIVITIES',
    description: 'Live entertainment, DJ services, activities, and curated experiences.',
  },
  {
    id: 7,
    title: 'RITUALS',
    description: 'Traditional rituals coordination and cultural ceremonies management.',
  },
  {
    id: 8,
    title: 'SAFETY & SECURITY MANAGEMENT',
    description: 'Comprehensive safety protocols and security arrangements.',
  },
];

const corporateServices = [
  {
    id: 1,
    title: 'EVENT MANAGEMENT & PLANNING',
    description: 'Complete event planning from conception to execution with meticulous attention to detail.',
  },
  {
    id: 2,
    title: 'LOCATION SCOUTING & MAPPING',
    description: 'Strategic venue selection and site planning for optimal event flow.',
  },
  {
    id: 3,
    title: 'HOTEL CONTRACTING',
    description: 'Negotiated hotel packages and accommodation arrangements for guests.',
  },
  {
    id: 4,
    title: 'AIRCRAFT CHARTERING',
    description: 'Premium travel arrangements and logistics for delegates and VIPs.',
  },
  {
    id: 5,
    title: 'TRANSPORT & ITINERARY SCHEDULING',
    description: 'Comprehensive transportation and timeline management for seamless operations.',
  },
  {
    id: 6,
    title: 'CULINARY EXPERIENCES',
    description: 'Curated menus, gastronomy coordination, and premium catering services.',
  },
  {
    id: 7,
    title: 'ENTERTAINMENT HANDLING',
    description: 'Professional entertainment coordination and performances.',
  },
  {
    id: 8,
    title: 'SAFETY & SECURITY MANAGEMENT',
    description: 'Comprehensive safety protocols and security arrangements.',
  },
];

function ServiceCard({ title, description, isExpanded, onToggle }: any) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-5 px-0 flex items-center justify-between hover:opacity-70 transition-opacity duration-300 group"
      >
        <h3 className="text-sm sm:text-base font-semibold text-foreground text-left">
          {title}
        </h3>
        <ChevronDown
          size={20}
          className={`text-secondary flex-shrink-0 ml-4 transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isExpanded && (
        <div className="pb-5 pr-6">
          <p className="text-sm text-foreground-secondary leading-relaxed">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}

export function Services() {
  const [activeTab, setActiveTab] = useState<'social' | 'corporate'>('social');
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const services = activeTab === 'social' ? socialServices : corporateServices;
  const bgColor = activeTab === 'social' ? 'bg-background' : 'bg-foreground';
  const textColor = activeTab === 'social' ? 'text-foreground' : 'text-white';
  const tabBgColor = activeTab === 'social' ? 'bg-background-secondary' : 'bg-gray-900';

  return (
    <section id="services" className="py-0">
      {/* Section Header - Full Width Background */}
      <div className="bg-background px-6 sm:px-8 py-16 md:py-20 border-b border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm sm:text-base font-semibold text-secondary tracking-wide mb-2">
            WHAT WE DO
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
            OUR SERVICES
          </h2>
          <p className="text-base sm:text-lg text-foreground-secondary max-w-2xl mx-auto">
            At V-Create Events, we take a dream and make it a reality. No goal is too big and no task is too small.
          </p>
        </div>
      </div>

      {/* Tab Buttons */}
      <div className="grid grid-cols-2 border-b border-border">
        <button
          onClick={() => {
            setActiveTab('social');
            setExpandedCards({});
          }}
          className={`px-6 sm:px-8 py-8 md:py-10 text-center font-semibold text-lg tracking-wide transition-colors duration-300 border-r border-border ${
            activeTab === 'social'
              ? 'bg-background text-foreground'
              : 'bg-background text-foreground-secondary hover:bg-background-secondary'
          }`}
        >
          SOCIAL
        </button>
        <button
          onClick={() => {
            setActiveTab('corporate');
            setExpandedCards({});
          }}
          className={`px-6 sm:px-8 py-8 md:py-10 text-center font-semibold text-lg tracking-wide transition-colors duration-300 ${
            activeTab === 'corporate'
              ? 'bg-foreground text-white'
              : 'bg-foreground text-gray-300 hover:bg-gray-900'
          }`}
        >
          CORPORATE
        </button>
      </div>

      {/* Content Area - Two Column Layout */}
      <div className="flex flex-col lg:flex-row">
        {/* Social Events Content - Left Column */}
        {activeTab === 'social' && (
          <>
            <div className="w-full lg:w-1/2 bg-background px-6 sm:px-8 py-8 md:py-12">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-8">SERVICES</h3>
              <div className="space-y-0">
                {services.map((service) => (
                  <ServiceCard
                    key={service.id}
                    title={service.title}
                    description={service.description}
                    isExpanded={expandedCards[service.id] || false}
                    onToggle={() => toggleCard(String(service.id))}
                  />
                ))}
              </div>
            </div>

            {/* Social Image - Right Column (hidden on mobile) */}
            <div className="hidden lg:flex w-full lg:w-1/2 bg-background">
              <div className="w-full relative min-h-96">
                <Image
                  src="/placeholder.png"
                  alt="Social Events"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Social Image - Mobile */}
            <div className="lg:hidden w-full h-64 sm:h-80 relative bg-background">
              <Image
                src="/placeholder.png"
                alt="Social Events"
                fill
                className="object-cover"
              />
            </div>
          </>
        )}

        {/* Corporate Events Content - Right Column */}
        {activeTab === 'corporate' && (
          <>
            <div className="hidden lg:flex w-full lg:w-1/2 bg-foreground">
              <div className="w-full relative min-h-96">
                <Image
                  src="/placeholder.png"
                  alt="Corporate Events"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 bg-foreground px-6 sm:px-8 py-8 md:py-12 text-white">
              <h3 className="text-xl sm:text-2xl font-semibold mb-8">SERVICES</h3>
              <div className="space-y-0">
                {services.map((service) => (
                  <div key={service.id} className="border-b border-gray-700 last:border-b-0">
                    <button
                      onClick={() => toggleCard(String(service.id))}
                      className="w-full py-5 px-0 flex items-center justify-between hover:opacity-70 transition-opacity duration-300"
                    >
                      <h4 className="text-sm sm:text-base font-semibold text-white text-left">
                        {service.title}
                      </h4>
                      <ChevronDown
                        size={20}
                        className={`text-gold flex-shrink-0 ml-4 transition-transform duration-300 ${
                          expandedCards[service.id] ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {expandedCards[service.id] && (
                      <div className="pb-5 pr-6">
                        <p className="text-sm text-gray-300 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Corporate Image - Mobile */}
            <div className="lg:hidden w-full h-64 sm:h-80 relative bg-foreground">
              <Image
                src="/placeholder.png"
                alt="Corporate Events"
                fill
                className="object-cover"
              />
            </div>
          </>
        )}
      </div>

    </section>
  );
}
