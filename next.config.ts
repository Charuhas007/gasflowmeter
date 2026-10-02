import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ============================================================
  // 301 Redirects — mirrors .htaccess for Node / Vercel hosting
  // Source: gasflowmeter.net_Site_Inventory_and_301_Redirect_Map.xlsx
  // ============================================================
  async redirects() {
    return [
      // --------------------------------------------------------
      // Homepage duplicates
      // --------------------------------------------------------
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },

      // --------------------------------------------------------
      // About / Company pages
      // --------------------------------------------------------
      {
        source: "/manas-microsystems.html",
        destination: "/about/company-profile",
        permanent: true,
      },
      {
        source: "/certificates.html",
        destination: "/about/certificates",
        permanent: true,
      },
      {
        source: "/quality.html",
        destination: "/about/quality",
        permanent: true,
      },
      {
        source: "/global-presence.html",
        destination: "/about/global-presence",
        permanent: true,
      },

      // --------------------------------------------------------
      // Product pages
      // --------------------------------------------------------
      {
        source: "/thermal-dispersion-mass-flowmeter.html",
        destination: "/products/thermal-mass-flow-meter",
        permanent: true,
      },
      {
        source: "/compact-gas-flow-meters.html",
        destination: "/products/compact-gas-flow-meter",
        permanent: true,
      },
      {
        source: "/air-flow-meters.html",
        destination: "/products/air-flow-meter",
        permanent: true,
      },
      {
        source: "/compact-steam-flow-meters.html",
        destination: "/products/compact-steam-flow-meter",
        permanent: true,
      },
      {
        source: "/steam-gas-flow-meters.html",
        destination: "/products/steam-gas-flow-meter",
        permanent: true,
      },
      {
        source: "/insertion-type-thermal-mass-flow-meter.html",
        destination: "/products/insertion-type-thermal-mass-flow-meter",
        permanent: true,
      },

      // --------------------------------------------------------
      // Gas-type specific pages
      // --------------------------------------------------------
      {
        source: "/industrial-oxygen-flow-meter.html",
        destination: "/gas-type/oxygen-flow-meter",
        permanent: true,
      },
      {
        source: "/compressed-air-flow-meter.html",
        destination: "/gas-type/compressed-air-flow-meter",
        permanent: true,
      },

      // --------------------------------------------------------
      // Resources pages
      // --------------------------------------------------------
      {
        source: "/download.html",
        destination: "/resources/downloads",
        permanent: true,
      },
      {
        source: "/download.php",
        destination: "/resources/downloads",
        permanent: true,
      },
      // Case-sensitive fix: capital D was returning 404 on old site
      {
        source: "/Download.php",
        destination: "/resources/downloads",
        permanent: true,
      },
      {
        source: "/video.html",
        destination: "/resources/videos",
        permanent: true,
      },

      // --------------------------------------------------------
      // Contact / Enquiry
      // --------------------------------------------------------
      {
        source: "/contact.html",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/enquiry.php",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/_contact.html",
        destination: "/contact",
        permanent: true,
      },

      // --------------------------------------------------------
      // PDF asset redirects (old messy paths → clean new paths)
      // --------------------------------------------------------

      // Certificates
      {
        source: "/new%20certificates/Central%20Excise%20Reg.%20Cert..pdf",
        destination: "/downloads/certificates/central-excise-registration-certificate.pdf",
        permanent: true,
      },
      {
        source: "/certificates-new/GST%20CERT.-27AABCM2639R1ZX.pdf",
        destination: "/downloads/certificates/gst-certificate.pdf",
        permanent: true,
      },
      {
        source: "/certificates-new/NEW%20ISO%20CERT..pdf",
        destination: "/downloads/certificates/iso-certificate.pdf",
        permanent: true,
      },
      {
        source: "/certificates-new/iso-certificate.pdf",
        destination: "/downloads/certificates/iso-certificate.pdf",
        permanent: true,
      },
      {
        source: "/certificates-new/ohsas-certificate.pdf",
        destination: "/downloads/certificates/ohsas-certificate.pdf",
        permanent: true,
      },
      {
        source: "/new%20certificates/VAT%20CERTIFICATE.pdf",
        destination: "/downloads/certificates/vat-certificate.pdf",
        permanent: true,
      },
      {
        source: "/certificates-new/nabl-certificate.pdf",
        destination: "/downloads/certificates/nabl-certificate.pdf",
        permanent: true,
      },

      // Product brochures
      {
        source: "/pdf/gfm.pdf",
        destination: "/downloads/brochures/gas-flow-meter-brochure.pdf",
        permanent: true,
      },
      {
        source: "/pdf/Compact%20Gas%20Flow%20meter.pdf",
        destination: "/downloads/brochures/compact-gas-flow-meter-brochure.pdf",
        permanent: true,
      },
      {
        source: "/pdf/Compact%20Steam%20flow%20meter.pdf",
        destination: "/downloads/brochures/compact-steam-flow-meter-brochure.pdf",
        permanent: true,
      },
      {
        source: "/pdf/Compact%20GFMcatalog%20.pdf",
        destination: "/downloads/brochures/compact-gfm-catalog.pdf",
        permanent: true,
      },
      {
        source: "/pdf/Thermal%20Mass%20Flow%20meter-11.pdf",
        destination: "/downloads/brochures/thermal-mass-flow-meter-11.pdf",
        permanent: true,
      },
      {
        source: "/pdf/Steam%20Flow%20Meter-2.pdf",
        destination: "/downloads/brochures/steam-flow-meter-2.pdf",
        permanent: true,
      },
      {
        source: "/pdf/Insertion%20Type%20Thermal%20Mass%20flow%20Meter.pdf",
        destination: "/downloads/brochures/insertion-type-thermal-mass-flow-meter.pdf",
        permanent: true,
      },
      {
        source: "/pdf/industrial-oxygen-flow-meter.pdf",
        destination: "/downloads/brochures/industrial-oxygen-flow-meter.pdf",
        permanent: true,
      },
      {
        source: "/pdf/Compressor-Air-Flow-Meter.pdf",
        destination: "/downloads/brochures/compressor-air-flow-meter.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
