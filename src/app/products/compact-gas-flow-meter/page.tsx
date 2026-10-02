import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: "Compact Gas Flow Meter | Manas Micro System",
  description: "Compact thermal mass flow meters for gas measurement in tight installation spaces. NIST-traceable calibration.",
  robots: { index: false }, // Temporary — update when full page is ready
};

/**
 * /products/compact-gas-flow-meter — placeholder redirect target for compact-gas-flow-meters.html
 * TODO: Build out dedicated Compact Gas Flow Meter product page.
 * Until then, redirects to the main thermal mass flow meter product page.
 */
export default function CompactGasFlowMeterPage() {
  redirect('/products/thermal-mass-flow-meter');
}
