import type { MetadataRoute } from 'next';

/**
 * Next.js App Router robots — auto-served at /robots.txt
 *
 * Policy:
 *  - Allow all legitimate crawlers on all public pages
 *  - Block Next.js internals and any admin/private paths
 *  - Block AI training scrapers that respect robots.txt
 *  - Reference the sitemap for discovery
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── Allow all well-behaved crawlers ──────────────────
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/_next/',          // Next.js build assets — not useful to crawlers
          '/api/',            // Internal API routes
          '/admin/',          // Admin portal
          '/admin',
          '/*.json$',         // JSON data files
          '/404',             // Error pages
          '/500',
        ],
      },

      // ── Block AI training scrapers ───────────────────────
      // These bots respect robots.txt; scraping only, no SEO benefit.
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        disallow: '/',
      },
      {
        userAgent: 'Claude-Web',
        disallow: '/',
      },
    ],

    // ── Sitemap location ─────────────────────────────────────
    sitemap: 'https://gasflowmeter.net/sitemap.xml',

    // ── Canonical host ───────────────────────────────────────
    host: 'https://gasflowmeter.net',
  };
}
