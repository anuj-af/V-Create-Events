import { NextResponse } from 'next/server';

export const revalidate = 3600; // Cache for 1 hour

interface InstagramMedia {
  id: string;
  caption?: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
}

interface InstagramAPIResponse {
  data: InstagramMedia[];
  paging?: {
    cursors: {
      before: string;
      after: string;
    };
    next?: string;
  };
}

// Fallback data when API is unavailable or tokens aren't configured
const fallbackPosts: InstagramMedia[] = Array.from({ length: 12 }, (_, i) => ({
  id: `placeholder-${i + 1}`,
  media_type: i % 3 === 0 ? 'VIDEO' : 'IMAGE',
  media_url: '/placeholder.png',
  thumbnail_url: '/placeholder.png',
  permalink: 'https://www.instagram.com/v_createevents',
  timestamp: new Date().toISOString(),
  caption: 'V-Create Events & Decor',
}));

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const after = searchParams.get('after'); // Pagination cursor
  const limit = searchParams.get('limit') || '12';

  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;

  // If tokens are not configured, return fallback data
  if (!accessToken || !userId) {
    console.warn('[Instagram API] Missing INSTAGRAM_ACCESS_TOKEN or INSTAGRAM_USER_ID. Returning fallback data.');
    return NextResponse.json({
      data: fallbackPosts.slice(0, parseInt(limit)),
      paging: null,
      isFallback: true,
    });
  }

  try {
    const fields = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp';
    let url = `https://graph.instagram.com/v25.0/${userId}/media?fields=${fields}&limit=${limit}&access_token=${accessToken}`;

    if (after) {
      url += `&after=${after}`;
    }

    const response = await fetch(url, {
      next: { revalidate: 3600 }, // ISR: revalidate every 1 hour
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('[Instagram API] Error response:', response.status, errorData);

      // Return fallback data on API error
      return NextResponse.json({
        data: fallbackPosts.slice(0, parseInt(limit)),
        paging: null,
        isFallback: true,
        error: `Instagram API returned ${response.status}`,
      });
    }

    const data: InstagramAPIResponse = await response.json();

    return NextResponse.json({
      data: data.data,
      paging: data.paging || null,
      isFallback: false,
    });
  } catch (error) {
    console.error('[Instagram API] Fetch error:', error);

    return NextResponse.json({
      data: fallbackPosts.slice(0, parseInt(limit)),
      paging: null,
      isFallback: true,
      error: 'Failed to fetch Instagram posts',
    });
  }
}
