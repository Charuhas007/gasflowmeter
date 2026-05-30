import React from 'react';
import { Metadata } from 'next';
import { 
  ChevronRight, 
  CheckCircle2, 
  Settings,
  Wind,
  Target,
  ChevronDown,
  Activity,
  Maximize
} from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Insertion Type Thermal Mass Flow Meter | Manas",
  description: "High-precision insertion type thermal mass flow meters for large pipes and ducts. Features hot-tap installation, direct mass measurement, and zero moving parts.",
  keywords: "Insertion Type Thermal Mass Flow Meter, Thermal Dispersion Principle, Hot-Tap Flow Meter, Large Pipe Gas Flow Measurement, Compressed Air Auditing, HVAC Flow Meter",
};

export default function InsertionThermalMassFlowMeterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "name": "Insertion Type Thermal Mass Flow Meter",
        "brand": { "@type": "Brand", "name": "Manas Microsystems" },
        "description": "High-precision insertion type thermal mass flow meters designed for large pipe diameters, offering direct mass flow measurement and hot-tap installation capabilities without process shutdown.",
        "category": "Industrial Instrumentation",
        "manufacturer": {
          "@type": "Organization",
          "name": "Manas Microsystems"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are the straight pipe requirements for insertion meters?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To achieve optimal accuracy, insertion thermal mass flow meters typically require a fully developed flow profile, which generally means 15 to 20 pipe diameters of straight run upstream and 5 to 10 diameters downstream. If this is unavailable, flow conditioners can be utilized."
            }
          },
          {
            "@type": "Question",
            "name": "Can an insertion meter be installed without shutting down the process?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our insertion meters can be equipped with a hot-tap retractor assembly (isolation valve). This allows the probe to be safely inserted or removed for maintenance without depressurizing or shutting down the gas line."
            }
          },
          {
            "@type": "Question",
            "name": "How does moisture affect the measurement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Thermal dispersion sensors measure the cooling effect of the gas. Liquid water droplets hitting the heated sensor cause a massive spike in cooling, leading to artificially high readings. Gases must be dry, or a moisture knockout system must be installed upstream."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#F4F7FB] text-slate-900 selection:bg-indigo-100 font-sans overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Banner Image */}
      <section 
        className="relative flex items-center overflow-hidden border-b border-slate-200"
        style={{ height: '350px', minHeight: '350px', maxHeight: '350px' }}
      >
        <div className="absolute inset-0 bg-indigo-900/60 z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920" 
          alt="Insertion Thermal Mass Flow Meter Industrial Background" 
          className="absolute inset-0 w-full h-full object-cover z-0 grayscale"
        />
        <div className="container mx-auto px-6 max-w-7xl relative z-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-4">
            <Settings className="w-4 h-4" /> Heavy Industry Solution
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-thin text-white tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            Insertion Thermal<br/>Mass Flow Meter
          </h1>
          <p className="text-cyan-400 font-light mt-4 text-lg tracking-widest uppercase drop-shadow-md">Large Pipes • Hot-Tap Ready • Direct Mass</p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-[#F4F7FB] pt-8 pb-4 relative z-30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="bg-white border border-slate-200 shadow-sm rounded-lg py-3 px-5 flex flex-wrap items-center text-sm font-medium text-slate-500">
            <Link href="/" className="hover:text-indigo-600 cursor-pointer transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2 text-slate-400" />
            <Link href="/products" className="hover:text-indigo-600 cursor-pointer transition-colors">Products</Link>
            <ChevronRight className="w-4 h-4 mx-2 text-slate-400" />
            <span className="text-indigo-600">Insertion Thermal Mass Flow Meter</span>
          </div>
        </div>
      </div>

      {/* Direct Answer (AEO Snippet) */}
      <section className="py-16 bg-[#F4F7FB]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-[1.5fr_1fr] gap-16 items-center bg-white border border-slate-200 rounded-[2.5rem] p-10 md:p-14 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-50/50 rounded-full blur-3xl -z-10" />
            
            <div className="z-10">
              <p className="text-indigo-600 font-bold text-sm tracking-widest uppercase mb-4">Direct Answer</p>
              <h2 className="text-3xl font-light text-slate-900 mb-6 leading-tight">What is an Insertion Type<br/>Thermal Mass Flow Meter?</h2>
              <p className="text-slate-600 font-light leading-relaxed mb-6 text-lg">
                An <strong>Insertion Type Thermal Mass Flow Meter</strong> is a specialized gas measurement device designed for large-diameter pipes and ducts. By inserting a dual-sensor probe directly into the flow stream, it delivers highly accurate, direct mass flow measurement without requiring the extensive costs and downtime associated with cutting into pipes for inline meters.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3.5 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/30 w-full sm:w-auto text-center">
                  Request Technical Quote
                </button>
              </div>
            </div>
            
            <div className="flex justify-center p-8 bg-slate-50 rounded-[2rem] relative group z-10 h-full border border-slate-100">
              <div className="absolute inset-0 bg-indigo-100 blur-2xl rounded-full opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
              <div className="w-full aspect-[4/3] bg-white rounded-2xl flex flex-col items-center justify-center relative z-10 border-4 border-slate-100 shadow-sm p-6">
                 <Maximize className="w-16 h-16 text-indigo-500 opacity-80 mb-4" />
                 <span className="text-slate-500 font-medium text-sm text-center">Engineered for pipelines<br/>above 3" (80mm)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Deep-Dive (Topic Cluster) */}
      <section className="py-24 bg-white relative border-y border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-16 text-center max-w-3xl mx-auto">
             <p className="text-indigo-600 font-bold text-sm tracking-widest uppercase mb-2">Technical Deep-Dive</p>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Thermal Dispersion Principle</h2>
             <p className="text-slate-600 font-light text-lg">Understanding how dual-sensor probe technology captures mass flow directly.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-10">
                <h4 className="text-xl font-bold text-slate-800 mb-6 border-b border-slate-200 pb-4">The Dual-Sensor Probe Mechanism</h4>
                <div className="space-y-8 text-slate-600 font-light">
                  
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-bold text-lg shrink-0">1</div>
                    <div>
                      <h5 className="font-bold text-slate-800 mb-2 text-lg">Reference Sensor</h5>
                      <p className="leading-relaxed">The unheated Platinum RTD sensor continuously monitors the actual gas temperature, providing a reliable baseline regardless of process fluctuations.</p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-lg shrink-0">2</div>
                    <div>
                      <h5 className="font-bold text-slate-800 mb-2 text-lg">Velocity (Heated) Sensor</h5>
                      <p className="leading-relaxed">A second Platinum RTD is actively heated to maintain a constant temperature differential (overheat) above the reference sensor.</p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-lg shrink-0">3</div>
                    <div>
                      <h5 className="font-bold text-slate-800 mb-2 text-lg">Convective Cooling Effect</h5>
                      <p className="leading-relaxed">As gas molecules flow past the probe, they carry heat away from the velocity sensor. The electrical power required to maintain the constant temperature difference is directly proportional to the mass flow rate.</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            
            {/* Right Text / Formula */}
            <div className="order-1 lg:order-2 space-y-6 text-slate-600 font-light leading-relaxed text-lg">
              <p>
                Because the rate of heat dissipation relies on the specific heat properties and the number of gas molecules striking the sensor, the meter measures mass flow directly. 
              </p>
              <p>
                This thermodynamic technique eliminates the complex equations and cumulative errors associated with volumetric meters that require separate temperature and pressure transmitters.
              </p>
              
              <div className="bg-[#1c2c5b] text-white rounded-2xl p-8 my-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/30 rounded-full blur-[40px]" />
                <h5 className="text-cyan-400 font-medium text-sm tracking-wider uppercase mb-4 relative z-10">Mathematical Basis (King's Law)</h5>
                <div className="flex justify-center text-3xl font-serif py-4 relative z-10">
                  <span>Q ∝ ṁ · C<sub>p</sub> · ΔT</span>
                </div>
                <p className="text-slate-300 text-sm mt-4 text-center font-normal relative z-10">
                  Where Power (Q) is proportional to Mass Flow (ṁ).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparative Advantage (GEO Citation Layer) */}
      <section className="py-24 bg-[#F4F7FB]">
        <div className="container mx-auto px-6 max-w-7xl">
           <div className="text-center mb-16">
             <p className="text-indigo-500 font-bold text-sm tracking-widest uppercase mb-2">Comparative Advantage</p>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Choose Insertion Over Inline Meters?</h2>
             <p className="text-slate-600 mt-4 max-w-2xl mx-auto font-light text-lg">When dealing with large diameter pipelines (above 3 inches), insertion probes provide unmatched economic and operational benefits.</p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1 */}
              <div className="bg-white border border-slate-200 rounded-[2rem] p-8 hover:-translate-y-2 transition-transform duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.03)] group flex flex-col">
                <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 border border-indigo-100 group-hover:scale-110 transition-transform shadow-sm">
                  <Activity className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Cost-Effective for Large Pipes</h3>
                <p className="text-slate-600 font-light leading-relaxed mt-auto">
                  Inline meters become exponentially more expensive as pipe diameter increases. An insertion probe requires only a single access port, drastically reducing hardware and installation costs for large ducts and stacks.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-slate-200 rounded-[2rem] p-8 hover:-translate-y-2 transition-transform duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.03)] group flex flex-col">
                <div className="w-14 h-14 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-6 border border-sky-100 group-hover:scale-110 transition-transform shadow-sm">
                  <Settings className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Hot-Tap Assembly Capable</h3>
                <p className="text-slate-600 font-light leading-relaxed mt-auto">
                  Equipped with a retractor mechanism and isolation ball valve, the meter can be inserted, calibrated, or removed for maintenance without depressurizing the line or halting critical plant processes.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white border border-slate-200 rounded-[2rem] p-8 hover:-translate-y-2 transition-transform duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.03)] group flex flex-col">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 border border-emerald-100 group-hover:scale-110 transition-transform shadow-sm">
                  <Wind className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">Negligible Pressure Drop</h3>
                <p className="text-slate-600 font-light leading-relaxed mt-auto">
                  Unlike orifice plates or vortex shedders that obstruct the flow path, the slender profile of an insertion probe creates virtually zero pressure drop, conserving compressor energy and lowering operational costs.
                </p>
              </div>
           </div>
        </div>
      </section>

      {/* Engineering Documentation (E-E-A-T Signal) */}
      <section className="py-24 bg-white border-y border-slate-200 relative overflow-hidden">
         <div className="absolute inset-0 bg-slate-50/50 -z-10" />
         <div className="container mx-auto px-6 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-indigo-600 font-bold text-sm tracking-widest uppercase mb-2">Engineering Documentation</p>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Rigorous Industrial Standards</h2>
                <p className="text-slate-600 font-light leading-relaxed mb-8 text-lg">Every insertion probe is manufactured to withstand harsh industrial environments while delivering pinpoint accuracy.</p>
                
                <div className="grid gap-6">
                   <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm flex gap-5 items-start">
                     <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                     <div>
                       <h4 className="font-bold text-slate-800 mb-1">Calibration & Traceability</h4>
                       <p className="text-slate-600 font-light text-sm leading-relaxed">Multi-point gas calibration performed in advanced wind tunnels using <strong className="font-semibold text-slate-800">NIST Traceable</strong> standards to ensure absolute compliance with international metrology requirements.</p>
                     </div>
                   </div>
                   
                   <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm flex gap-5 items-start">
                     <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                     <div>
                       <h4 className="font-bold text-slate-800 mb-1">Material Integrity</h4>
                       <p className="text-slate-600 font-light text-sm leading-relaxed">Probe stems and wetted parts are constructed from robust 316L Stainless Steel, ensuring longevity and resistance to corrosive gas streams like flare gas or biogas.</p>
                     </div>
                   </div>
                </div>
              </div>
              
              <div className="bg-slate-900 rounded-[2.5rem] p-12 text-white relative overflow-hidden shadow-2xl h-full flex flex-col justify-center">
                 <div className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-500/30 rounded-full blur-[100px]" />
                 <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px]" />
                 
                 <h3 className="text-3xl font-light mb-6 relative z-10 leading-tight">Explore the Scirocco<br/><span className="font-bold">Insertion Series</span></h3>
                 <p className="text-slate-400 font-light mb-10 relative z-10 text-lg">Designed for pipelines up to 1000mm and beyond, with hazardous area ATEX / Exd enclosure options available.</p>
                 
                 <div className="mt-auto relative z-10">
                   <Link href="/products/thermal-mass-flow-meter" className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-colors shadow-lg w-full sm:w-auto group">
                      View Series Specifications <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                   </Link>
                 </div>
              </div>
            </div>
         </div>
      </section>

      {/* Problem-Solution FAQ */}
      <section className="py-24 bg-[#F4F7FB]">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-600 font-light">Technical guidance for systems integrators and mechanical engineers.</p>
          </div>

          <div className="space-y-4">
            <details className="group bg-white border border-slate-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden hover:border-indigo-500/30 transition-colors shadow-sm">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-slate-900 select-none text-lg">
                What are the straight pipe requirements for insertion meters?
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:-rotate-180 transition-transform duration-300" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 font-light text-[15px] leading-relaxed border-t border-slate-200 mt-2 pt-4">
                To achieve optimal accuracy, insertion thermal mass flow meters typically require a fully developed flow profile, which generally means 15 to 20 pipe diameters of straight run upstream and 5 to 10 diameters downstream. If this is unavailable, flow conditioners can be utilized.
              </div>
            </details>

            <details className="group bg-white border border-slate-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden hover:border-indigo-500/30 transition-colors shadow-sm">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-slate-900 select-none text-lg">
                Can an insertion meter be installed without shutting down the process?
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:-rotate-180 transition-transform duration-300" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 font-light text-[15px] leading-relaxed border-t border-slate-200 mt-2 pt-4">
                Yes. Our insertion meters can be equipped with a hot-tap retractor assembly (isolation valve). This allows the probe to be safely inserted or removed for maintenance without depressurizing or shutting down the gas line.
              </div>
            </details>

            <details className="group bg-white border border-slate-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden hover:border-indigo-500/30 transition-colors shadow-sm">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-slate-900 select-none text-lg">
                How does moisture affect the measurement?
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:-rotate-180 transition-transform duration-300" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 font-light text-[15px] leading-relaxed border-t border-slate-200 mt-2 pt-4">
                Thermal dispersion sensors measure the cooling effect of the gas. Liquid water droplets hitting the heated sensor cause a massive spike in cooling, leading to artificially high readings. Gases must be dry, or a moisture knockout system must be installed upstream.
              </div>
            </details>
          </div>
        </div>
      </section>
      
      {/* E-E-A-T Author Insight Block */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-4 bg-slate-50 border border-slate-200 rounded-full py-2 px-6 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm">
              MM
            </div>
            <div className="text-left">
              <p className="text-slate-900 text-sm font-medium">Verified by Manas Engineering</p>
              <p className="text-slate-500 text-xs">Technical Authority in Flow Measurement Integration</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
