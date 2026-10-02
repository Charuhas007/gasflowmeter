import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: "Industrial Oxygen Flow Meter | Manas Micro System",
  description: "Precision oxygen flow meters for industrial, medical, and laboratory gas measurement applications — Manas Micro System.",
  robots: { index: false }, // Temporary — update when full page is ready
};

/**
 * /gas-type/oxygen-flow-meter — placeholder redirect target for industrial-oxygen-flow-meter.html
 * TODO: Build out dedicated Oxygen Flow Meter gas-type page with unique content.
 *       Note from site inventory: old page title/meta was copied from insertion-type page — must rewrite.
 * Until then, redirects to the insertion type thermal mass flow meter (closest product match).
 */
export default function OxygenFlowMeterPage() {
  redirect('/products/insertion-type-thermal-mass-flow-meter');
}
