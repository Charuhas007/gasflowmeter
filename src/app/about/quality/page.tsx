import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: "Quality Policy | Manas Micro System",
  description: "Manas Micro System's quality management system and policy for thermal mass flow meters — ISO certified, NABL calibrated.",
  robots: { index: false }, // Temporary — update when page is built out
};

/**
 * /about/quality — placeholder redirect target for quality.html (301 from old site)
 * TODO: Build out full Quality Policy page content here.
 * Until then, redirects to the Company Profile which covers quality credentials.
 */
export default function QualityPage() {
  redirect('/about/company-profile');
}
