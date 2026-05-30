"use client";
import React from 'react';

const certificates = [
  {
    title: "ISO 9001\n2015",
    image: "/certificates/iso-certificate.jpg",
    bgColor: "bg-[#eaf4ff]", // Light blue
    issuedBy: "Quality Standards",
    year: "Active"
  },
  {
    title: "ISO Cert\nPart 2",
    image: "/certificates/iso-certificate-1.jpg",
    bgColor: "bg-[#eaf4ff]",
    issuedBy: "Quality Standards",
    year: "Active"
  },
  {
    title: "NABL\nAccredited",
    image: "/certificates/nabl-certificate-1.jpg",
    bgColor: "bg-[#fbe8e4]", // Peach
    issuedBy: "Testing Lab",
    year: "Certified"
  },
  {
    title: "OHSAS\n18001",
    image: "/certificates/ohsaa-certificate.jpg",
    bgColor: "bg-[#eef8eb]", // Light green
    issuedBy: "Health & Safety",
    year: "Active"
  },
  {
    title: "GST\nCertificate",
    image: "/certificates/gst-certificate.jpg",
    bgColor: "bg-[#f4effc]", // Lavender
    issuedBy: "Govt of India",
    year: "Active"
  },
  {
    title: "Central\nExcise",
    image: "/certificates/central-excise-reg-certificate.jpg",
    bgColor: "bg-[#fff2e5]", // Light orange
    issuedBy: "Tax Dept",
    year: "Registered"
  },
  {
    title: "NSIC\nCertificate",
    image: "/certificates/nsic-certificate-new.jpg",
    bgColor: "bg-[#e6f7f6]", // Cyan/mint
    issuedBy: "MSME",
    year: "Active"
  },
  {
    title: "NSIC\nPart 2",
    image: "/certificates/nsic-certificate-new-1.jpg",
    bgColor: "bg-[#e6f7f6]",
    issuedBy: "MSME",
    year: "Active"
  },
  {
    title: "VAT\nCertificate",
    image: "/certificates/vat-certificate.jpg",
    bgColor: "bg-[#fceef5]", // Pinkish
    issuedBy: "Tax Dept",
    year: "Registered"
  }
];

export default function CertificatesPage() {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#1c1d29] py-24 selection:bg-blue-500 selection:text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div className="mb-20 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 bg-white/10 text-white font-medium rounded-full text-sm mb-6 border border-white/20 backdrop-blur-sm">
            Company Credentials
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight">
            Our Quality &<br/> Regulatory Certificates
          </h1>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 gap-y-12">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-white rounded-[32px] p-6 pt-8 relative flex flex-col h-[420px] shadow-2xl transition-transform hover:-translate-y-2 duration-300">
              
              {/* Cutout Illusion Button */}
              <button 
                className="absolute -top-3 -right-3 w-[68px] h-[68px] bg-white rounded-full border-[12px] border-[#1c1d29] text-slate-900 text-3xl flex items-center justify-center hover:scale-110 transition-transform z-10 font-light shadow-sm"
                aria-label="View Full Certificate"
                onClick={() => setSelectedImage(cert.image)}
              >
                +
              </button>

              {/* Title */}
              <h2 className="text-[28px] font-extrabold text-[#1c1d29] leading-[1.1] mb-6 max-w-[80%] tracking-tight whitespace-pre-line">
                {cert.title}
              </h2>

              {/* Image Container with colored background */}
              <div className={`flex-1 w-full ${cert.bgColor} rounded-[24px] mb-6 p-4 flex items-center justify-center overflow-hidden transition-colors duration-500`}>
                <img 
                  src={cert.image} 
                  alt={cert.title.replace('\n', ' ')} 
                  className="object-contain h-full w-full rounded-md shadow-sm mix-blend-multiply hover:scale-105 transition-transform duration-500" 
                />
              </div>

              {/* Footer */}
              <div className="flex flex-col mt-auto pb-2 pl-2">
                <span className="text-slate-400 text-sm font-medium mb-0.5">{cert.issuedBy}</span>
                <span className="text-[#1c1d29] text-2xl font-bold tracking-tight">{cert.year}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out transition-opacity"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <button 
              className="absolute top-0 right-0 md:-top-4 md:-right-4 w-12 h-12 bg-white text-slate-900 rounded-full flex items-center justify-center text-2xl transition-transform hover:scale-110 shadow-lg z-10"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              aria-label="Close modal"
            >
              ✕
            </button>
            <img 
              src={selectedImage} 
              alt="Full size certificate" 
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl" 
            />
          </div>
        </div>
      )}
    </main>
  );
}
