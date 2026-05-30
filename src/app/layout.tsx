import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thermal Mass Flow Meter | Precision Gas Measurement | Manas Microsystems",
  description: "High-precision gas mass flow meter with 100:1 turndown and NIST traceability. Ideal for biogas, compressed air, and flare gas monitoring.",
  keywords: ["Thermal Mass Flow Meter", "Gas Flow Measurement", "Biogas Flow Meter", "Manas Microsystems", "Thermal Dispersion"],
  authors: [{ name: "Manas Microsystems Technical Lead" }],
  openGraph: {
    title: "Thermal Mass Flow Meter | Precision Gas Measurement",
    description: "High-precision gas mass flow meter with 100:1 turndown and NIST traceability.",
    type: "website",
    url: "https://gasflowmeter.net/thermal-mass-flow-meter",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={robotoMono.variable} style={{ fontFamily: 'var(--font-sans)' }}>
        <header className="header">
          <div className="container header-content">
            <div className="logo">
              <img src="/logo.png" alt="Manas Microsystems" style={{ height: '70px', width: 'auto' }} />
            </div>
            <nav className="nav-links">
              <div className="nav-item">
                <span className="nav-link">Products</span>
                <div className="dropdown-menu">
                  <a href="/products/thermal-mass-flow-meter" className="dropdown-link">Thermal Mass Flow Meters</a>
                  <a href="/products/gas-flow-meter" className="dropdown-link">Compact Gas Flow Meters</a>
                  <a href="/products/air-flow-meter" className="dropdown-link">Air Flow Meters</a>
                  <a href="/products/steam-flow-meter" className="dropdown-link">Steam Flow Meters</a>
                  <a href="/products/insertion-thermal-mass-flow-meter" className="dropdown-link">Insertion Type Thermal Mass Flow Meter</a>
                </div>
              </div>
              
              <div className="nav-item">
                <span className="nav-link">Gas Types</span>
                <div className="dropdown-menu">
                  <a href="/gas-type/compressed-air-flow-meter" className="dropdown-link">Compressed Air</a>
                  <a href="/gas-type/biogas-flow-meter" className="dropdown-link">Biogas</a>
                  <a href="/gas-type/natural-gas-flow-meter" className="dropdown-link">Natural Gas</a>
                  <a href="/gas-type/oxygen-flow-meter" className="dropdown-link">Oxygen / Nitrogen</a>
                </div>
              </div>

              <div className="nav-item">
                <span className="nav-link">Applications</span>
                <div className="dropdown-menu">
                  <a href="/applications/compressed-air-audit" className="dropdown-link">Compressed Air Audit</a>
                  <a href="/applications/leak-detection" className="dropdown-link">Leak Detection</a>
                  <a href="/applications/boiler-steam-monitoring" className="dropdown-link">Boiler Steam Monitoring</a>
                  <a href="/applications/furnace-burner-control" className="dropdown-link">Furnace Burner Control</a>
                </div>
              </div>

              <div className="nav-item">
                <span className="nav-link">About</span>
                <div className="dropdown-menu">
                  <a href="/about/company-profile" className="dropdown-link">Company Profile</a>
                  <a href="/about/certificates" className="dropdown-link">Certificates</a>
                </div>
              </div>

              <div className="nav-item">
                <span className="nav-link">Resources</span>
                <div className="dropdown-menu">
                  <a href="/resources/downloads" className="dropdown-link">Downloads</a>
                  <a href="/resources/videos" className="dropdown-link">Video Library</a>
                </div>
              </div>

              <a href="/contact" className="nav-link" style={{ background: 'var(--primary)', color: 'white', padding: '0.5rem 1.25rem', borderRadius: '8px' }}>Contact Us</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="footer">
          <div className="footer-wave"></div>
          <div className="container">
            <div className="footer-top">
              <div className="footer-brand">
                <img src="/footer-logo-white.png" alt="Manas Baumer Group" style={{ height: '55px', width: 'auto', display: 'block', marginBottom: '1.5rem' }} />
                <p>
                  Delivering advanced flow measurement solutions with precision, reliability and German engineering excellence.
                </p>
                <div className="social-icons">
                  <a href="https://www.facebook.com/manasmicrosystems" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                  </a>
                  <a href="https://x.com/ManasMktg" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                  </a>
                  <a href="https://www.instagram.com/manas_microsystems" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="https://www.linkedin.com/company/manas-microsystems-pvt-ltd" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="https://www.youtube.com/channel/UCkAb1Hs4EImjuq_0WHJbdOg" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.082 0 12 0 12s0 3.918.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.918 24 12 24 12s0-3.918-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                </div>
              </div>
              
              <div className="footer-col">
                <h4>Products</h4>
                <a href="/products/thermal-mass-flow-meter" className="footer-link">Thermal Mass Flow Meter</a>
                <a href="/products/gas-flow-meter" className="footer-link">Gas Flow Meter</a>
                <a href="/products/air-flow-meter" className="footer-link">Air Flow Meter</a>
                <a href="/products/steam-flow-meter" className="footer-link">Steam Flow Meter</a>
                <a href="/products/insertion-thermal-mass-flow-meter" className="footer-link">Insertion Flow Meter</a>
                <a href="/products/insertion-type-thermal-mass-flow-meter" className="footer-link">Insertion Type Thermal</a>
              </div>
              
              <div className="footer-col">
                <h4>Applications</h4>
                <a href="#" className="footer-link">Gas Flow Measurement</a>
                <a href="#" className="footer-link">Process Monitoring</a>
                <a href="#" className="footer-link">Industrial Automation</a>
                <a href="#" className="footer-link">Emission Monitoring</a>
                <a href="#" className="footer-link">Energy Management</a>
                <a href="#" className="footer-link">More Applications</a>
              </div>
              
              <div className="footer-col">
                <h4>Industries</h4>
                <a href="#" className="footer-link">Industrial Automation</a>
                <a href="#" className="footer-link">Oil & Gas</a>
                <a href="#" className="footer-link">Chemical Processing</a>
                <a href="#" className="footer-link">Pharmaceuticals</a>
                <a href="#" className="footer-link">Food & Beverage</a>
                <a href="#" className="footer-link">Energy & Utilities</a>
              </div>
              
              <div className="footer-col">
                <h4>Resources</h4>
                <a href="/resources/videos" className="footer-link">Video Library</a>
                <a href="#" className="footer-link">Brochures</a>
                <a href="#" className="footer-link">Datasheets</a>
                <a href="#" className="footer-link">Case Studies</a>
                <a href="#" className="footer-link">Technical Articles</a>
                <a href="#" className="footer-link">FAQs</a>
              </div>
              
              <div className="footer-col">
                <h4>Contact Us</h4>
                <div className="contact-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  <span>Manas Microsystems Pvt. Ltd.<br/>EL - 54, J block, Electronic Zone,<br/>M.I.D.C., Bhosari, Pune - 411 026.</span>
                </div>
                <div className="contact-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span><a href="tel:+9102027127044" style={{ color: 'inherit', textDecoration: 'none' }} className="hover:text-blue-400 transition-colors">+91 (020) 27127044</a></span>
                </div>
                <div className="contact-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  <span><a href="mailto:response@gasflowmeter.net" style={{ color: 'inherit', textDecoration: 'none' }} className="hover:text-blue-400 transition-colors">response@gasflowmeter.net</a></span>
                </div>
                <div className="contact-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                  <span><a href="https://www.gasflowmeter.net" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }} className="hover:text-blue-400 transition-colors">www.gasflowmeter.net</a></span>
                </div>
              </div>
            </div>
            
            <div className="footer-bottom">
              <div>&copy; {new Date().getFullYear()} Manas Micro Systems Pvt. Ltd. All Rights Reserved.</div>
              <div className="footer-bottom-links">
                <a href="#">Privacy Policy</a>
                <span>|</span>
                <a href="#">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
