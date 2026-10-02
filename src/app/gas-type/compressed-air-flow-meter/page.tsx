import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: "Compressed Air Flow Meter | Manas Micro System",
  description: "Thermal mass flow meters for compressed air monitoring in industrial plants. Energy efficiency measurement.",
  robots: { index: false }, // Temporary — update when full page is ready
};

/**
 * /gas-type/compressed-air-flow-meter — placeholder redirect target for compressed-air-flow-meter.html
 * TODO: Build out dedicated Compressed Air Flow Meter gas-type page with unique content.
 *       Note from site inventory: old page had content copied from insertion-type page — must rewrite.
 * Until then, redirects to the air flow meter page (closest product match).
 */
export default function CompressedAirFlowMeterPage() {
  redirect('/products/air-flow-meter');
}
