'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Play, Instagram as InstagramIcon, Loader2, RefreshCw } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';

interface InstagramPost {
  id: string;
  caption?: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
}

interface ApiResponse {
  data: InstagramPost[];
  paging: {
    cursors: {
      after: string;
    };
    next?: string;
  } | null;
  isFallback: boolean;
}

function SkeletonCard() {
  return (
    <div className="aspect-square bg-background-secondary animate-pulse rounded-xl overflow-hidden">
      <div className="w-full h-full bg-gradient-to-br from-background-secondary to-border" />
    </div>
  );
}

export function InstagramSection() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [afterCursor, setAfterCursor] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(false);
  const [isFallback, setIsFallback] = useState(false);

  const { ref: sectionRef, isInView } = useInView({ threshold: 0.05 });

  const fetchPosts = async (cursor?: string) => {
    try {
      const params = new URLSearchParams({ limit: '6' });
      if (cursor) params.set('after', cursor);

      const response = await fetch(`/api/instagram?${params}`);
      if (!response.ok) throw new Error('Failed to fetch');

      const data: ApiResponse = await response.json();

      if (cursor) {
        setPosts((prev) => [...prev, ...data.data]);
      } else {
        setPosts(data.data);
      }

      setIsFallback(data.isFallback);
      setAfterCursor(data.paging?.cursors?.after || null);
      setHasMore(!!data.paging?.next);
      setError(null);
    } catch (err) {
      setError('Unable to load Instagram posts');
      console.error('[Instagram Section]', err);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleLoadMore = () => {
    if (!afterCursor || loadingMore) return;
    setLoadingMore(true);
    fetchPosts(afterCursor);
  };

  const handleRetry = () => {
    setLoading(true);
    setError(null);
    fetchPosts();
  };

  const getImageSrc = (post: InstagramPost) => {
    if (post.media_type === 'VIDEO') {
      return post.thumbnail_url || post.media_url || '/placeholder.png';
    }
    return post.media_url || '/placeholder.png';
  };

  return (
    <section className="py-24 px-6 sm:px-8 md:py-32 lg:py-40 bg-background-secondary" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 fade-up ${isInView ? 'animate-in' : ''}`}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">
            Our Instagram
          </h2>
          <a
            href="https://www.instagram.com/v_createevents"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors text-sm font-semibold tracking-[0.15em]"
          >
            <InstagramIcon size={16} />
            @V_CREATEEVENTS
          </a>
        </div>

        {/* Error State */}
        {error && !loading && posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-foreground-secondary mb-4">{error}</p>
            <button
              onClick={handleRetry}
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-white font-semibold text-sm rounded-full hover:bg-foreground/80 transition-colors"
            >
              <RefreshCw size={16} />
              Try Again
            </button>
          </div>
        )}

        {/* Loading Skeleton */}
        {loading && (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-12">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {/* Instagram Grid */}
        {!loading && posts.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-12">
            {posts.map((post, index) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative aspect-square overflow-hidden rounded-xl bg-background-secondary fade-up ${
                  isInView ? 'animate-in' : ''
                } stagger-${Math.min(index % 6 + 1, 6)}`}
              >
                <Image
                  src={getImageSrc(post)}
                  alt={post.caption?.slice(0, 100) || `Instagram post by @v_createevents`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center gap-3">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 flex items-center gap-3">
                    {post.media_type === 'VIDEO' && (
                      <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                        <Play size={20} className="text-white fill-white ml-0.5" />
                      </div>
                    )}
                    <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <InstagramIcon size={18} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Video Badge */}
                {post.media_type === 'VIDEO' && (
                  <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full p-1.5">
                    <Play size={12} className="text-white fill-white" />
                  </div>
                )}
              </a>
            ))}
          </div>
        )}

        {/* Load More / Follow Button */}
        <div className={`text-center fade-up ${isInView ? 'animate-in' : ''}`} style={{ transitionDelay: '0.4s' }}>
          {hasMore && !isFallback ? (
            <button
              onClick={handleLoadMore}
              disabled={loadingMore}
              className="inline-flex items-center gap-2 px-10 py-3 bg-foreground text-white font-semibold text-sm tracking-[0.1em] rounded-full hover:bg-foreground/80 transition-all duration-300 disabled:opacity-50"
            >
              {loadingMore ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  LOADING...
                </>
              ) : (
                'LOAD MORE'
              )}
            </button>
          ) : (
            <a
              href="https://www.instagram.com/v_createevents"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-3 border-2 border-foreground text-foreground font-semibold text-sm tracking-[0.1em] rounded-full hover:bg-foreground hover:text-white transition-all duration-300"
            >
              <InstagramIcon size={16} />
              FOLLOW US ON INSTAGRAM
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
