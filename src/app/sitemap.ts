import type { MetadataRoute } from 'next';

const BASE_URL = 'https://gasflowmeter.net';

/**
 * Next.js App Router sitemap — auto-served at /sitemap.xml
 * Only includes real indexable pages. Redirect stubs are excluded.
 * Source: gasflowmeter.net_Site_Inventory_and_301_Redirect_Map.xlsx
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Homepage ─────────────────────────────────────────────
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    // ── Product pages ────────────────────────────────────────
    {
      url: `${BASE_URL}/products/thermal-mass-flow-meter`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/products/insertion-type-thermal-mass-flow-meter`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/products/air-flow-meter`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/products/steam-flow-meter`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/products/gas-flow-meter`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/products/insertion-thermal-mass-flow-meter`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },

    // ── About pages ──────────────────────────────────────────
    {
      url: `${BASE_URL}/about/company-profile`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about/certificates`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },

    // ── Resources ────────────────────────────────────────────
    {
      url: `${BASE_URL}/resources/downloads`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/resources/videos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },

    // ── Contact ──────────────────────────────────────────────
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ];
}
