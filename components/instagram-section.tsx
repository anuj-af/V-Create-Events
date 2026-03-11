'use client';

import Image from 'next/image';
import { Play, Instagram as InstagramIcon } from 'lucide-react';

const instagramPosts = [
  {
    id: 1,
    image: '/placeholder.png',
    isVideo: true,
  },
  {
    id: 2,
    image: '/placeholder.png',
    isVideo: false,
  },
  {
    id: 3,
    image: '/placeholder.png',
    isVideo: false,
  },
  {
    id: 4,
    image: '/placeholder.png',
    isVideo: true,
  },
  {
    id: 5,
    image: '/placeholder.png',
    isVideo: true,
  },
  {
    id: 6,
    image: '/placeholder.png',
    isVideo: false,
  },
];

export function InstagramSection() {
  return (
    <section className="py-20 px-6 sm:px-8 md:py-28 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-foreground">
            OUR INSTAGRAM
          </h2>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="#"
              className="group relative aspect-square overflow-hidden bg-background-secondary"
            >
              <Image
                src={post.image}
                alt={`Instagram post ${post.id}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                {post.isVideo && (
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Play size={24} className="text-white fill-white" />
                  </div>
                )}
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <InstagramIcon size={24} className="text-white" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <button className="px-12 py-3 bg-foreground text-white font-semibold text-sm tracking-wide hover:bg-secondary hover:text-foreground transition-colors duration-300">
            LOAD MORE
          </button>
        </div>
      </div>
    </section>
  );
}
