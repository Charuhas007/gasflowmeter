import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: "Steam Gas Flow Meter | Manas Micro System",
  description: "Thermal mass flow meters for steam and gas applications — Manas Micro System, Mumbai.",
  robots: { index: false }, // Temporary — update when full page is ready
};

/**
 * /products/steam-gas-flow-meter — placeholder redirect target for steam-gas-flow-meters.html
 * TODO: Reconcile with steam-flow-meter and air-flow-meter pages (noted duplicate content in inventory).
 * Until then, redirects to the steam flow meter page.
 */
export default function SteamGasFlowMeterPage() {
  redirect('/products/steam-flow-meter');
}
