"use client";
import React from 'react';

const documents = [
  {
    title: "Thermal Mass\nFlow Meter",
    file: "Thermal Mass Flow meter-11.pdf",
    category: "Flow Meters",
    size: "2.4 MB",
    bgColor: "bg-[#eaf4ff]", // Light blue
    image: "/brochures/brochure_thermal.png"
  },
  {
    title: "Gas Flow\nMeters",
    file: "Compact Gas Flow meter.pdf",
    category: "Flow Meters",
    size: "1.8 MB",
    bgColor: "bg-[#fbe8e4]", // Peach
    image: "/brochures/brochure_thermal.png"
  },
  {
    title: "Air Flow\nMeter",
    file: "Thermal Mass Flow meter-11.pdf",
    category: "Air Meters",
    size: "2.4 MB",
    bgColor: "bg-[#eef8eb]", // Light green
    image: "/brochures/brochure_thermal.png"
  },
  {
    title: "Steam Flow\nMeter",
    file: "Steam Flow Meter-2.pdf",
    category: "Steam Meters",
    size: "3.1 MB",
    bgColor: "bg-[#f4effc]", // Lavender
    image: "/brochures/brochure_thermal.png"
  },
  {
    title: "Insertion Type\nThermal Mass",
    file: "Insertion Type Thermal Mass flow Meter.pdf",
    category: "Specialized Meters",
    size: "1.5 MB",
    bgColor: "bg-[#fff2e5]", // Light orange
    image: "/brochures/brochure_thermal.png"
  },
  {
    title: "Industrial Oxygen\nFlow Meter",
    file: "industrial-oxygen-flow-meter.pdf",
    category: "Specialized Meters",
    size: "1.2 MB",
    bgColor: "bg-[#e6f7f6]", // Cyan/mint
    image: "/brochures/brochure_thermal.png"
  },
  {
    title: "Compressed Air\nFlow Meter",
    file: "Compressor-Air-Flow-Meter.pdf",
    category: "Air Meters",
    size: "1.9 MB",
    bgColor: "bg-[#fceef5]", // Pinkish
    image: "/brochures/brochure_thermal.png"
  }
];

export default function DownloadsPage() {
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  return (
    <main className="min-h-screen bg-slate-50 py-24 selection:bg-blue-500 selection:text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div className="mb-20 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 font-semibold rounded-full text-sm mb-6 border border-blue-200">
            Technical Resources
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
            Product Brochures &<br/> Data Sheets
          </h1>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 gap-y-12">
          {documents.map((doc, index) => (
            <div key={index} className="bg-white rounded-[32px] p-6 pt-8 relative flex flex-col h-[420px] shadow-lg border border-slate-100 transition-all hover:shadow-2xl hover:-translate-y-2 duration-300">
              
              {/* Cutout Button for Download */}
              <a 
                href={`https://gasflowmeter.net/pdf/${encodeURIComponent(doc.file)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -top-3 -right-3 w-[68px] h-[68px] bg-white rounded-full border-[12px] border-slate-50 text-blue-600 flex items-center justify-center hover:scale-110 hover:bg-blue-600 hover:text-white transition-all z-10 font-light shadow-sm group"
                aria-label="Download Brochure"
              >
                <svg className="w-6 h-6 group-hover:translate-y-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </a>

              {/* Title */}
              <h2 className="text-[26px] font-extrabold text-slate-900 leading-[1.1] mb-6 max-w-[85%] tracking-tight whitespace-pre-line">
                {doc.title}
              </h2>

              {/* Image Container with colored background */}
              <div 
                className={`flex-1 w-full ${doc.bgColor} rounded-[24px] mb-6 p-2 flex items-center justify-center overflow-hidden transition-colors duration-500 cursor-pointer group`}
                onClick={() => setSelectedImage(doc.image)}
              >
                <img 
                  src={doc.image} 
                  alt={doc.title.replace('\n', ' ')} 
                  className="object-contain h-full w-full rounded-md shadow-sm mix-blend-multiply group-hover:scale-105 transition-transform duration-500" 
                />
              </div>

              {/* Footer */}
              <div className="flex flex-col mt-auto pb-2 pl-2">
                <span className="text-slate-400 text-sm font-medium mb-0.5">{doc.category}</span>
                <span className="text-slate-900 text-xl font-bold tracking-tight">{doc.size}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 cursor-zoom-out transition-opacity"
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
              alt="Full size brochure preview" 
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl" 
            />
          </div>
        </div>
      )}
    </main>
  );
}
