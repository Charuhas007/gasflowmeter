import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: "Global Presence | Manas Micro System",
  description: "Manas Micro System exports thermal mass flow meters worldwide. Explore our global distribution network.",
  robots: { index: false }, // Temporary — update when page is built out
};

/**
 * /about/global-presence — placeholder redirect target for global-presence.html (301 from old site)
 * TODO: Build out full Global Presence page content here.
 * Until then, redirects to the Company Profile which covers global reach.
 */
export default function GlobalPresencePage() {
  redirect('/about/company-profile');
}
