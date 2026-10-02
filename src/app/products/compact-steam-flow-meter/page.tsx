import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: "Compact Steam Flow Meter | Manas Micro System",
  description: "Compact thermal mass flow meters for steam and saturated steam applications. Accurate, NIST-traceable.",
  robots: { index: false }, // Temporary — update when full page is ready
};

/**
 * /products/compact-steam-flow-meter — placeholder redirect target for compact-steam-flow-meters.html
 * TODO: Build out dedicated Compact Steam Flow Meter product page.
 * Until then, redirects to the steam flow meter product page.
 */
export default function CompactSteamFlowMeterPage() {
  redirect('/products/steam-flow-meter');
}
