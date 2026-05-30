import React from 'react';
import { Metadata } from 'next';
import { 
  Activity, 
  ShieldCheck, 
  ChevronRight, 
  AlertTriangle, 
  CheckCircle2, 
  Settings,
  Wind,
  Factory,
  ArrowRight,
  ChevronDown,
  Target,
  Gauge,
  Wifi
} from 'lucide-react';
import SpecsTabs from './SpecsTabs';

export const metadata: Metadata = {
  title: "Scirocco 1000 | Thermal Mass Flow Meter | Manas",
  description: "NIST-traceable thermal mass flow meter offering a 100:1 turndown ratio. Direct gas flow measurement using constant ΔT thermal dispersion.",
  keywords: "Thermal Mass Flow Meter, Series Scirocco 1000, NIST-traceable flow meter, industrial gas measurement, thermal dispersion",
};

export default function SciroccoLandingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "name": "Series Scirocco 1000 Thermal Mass Flow Meter",
        "brand": { "@type": "Brand", "name": "Manas Microsystems" },
        "description": "High-precision gas mass flow meter with up to 100:1 turndown, direct mass flow measurement, and NIST traceability.",
        "model": "Scirocco 1000"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does gas composition affect thermal mass flow meters?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Thermal dispersion relies on the specific heat of the gas. Variations in composition change the heat transfer rate. Therefore, actual gas calibration is critical for accuracy, rather than relying on simulated air factors."
            }
          },
          {
            "@type": "Question",
            "name": "Thermal vs. Vortex flow meters for gas measurement?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Thermal mass flow meters offer a superior turndown ratio (up to 100:1) and exceptional low-flow sensitivity, whereas vortex meters require a minimum velocity to generate measurable vortices and generally need pressure/temperature compensation."
            }
          },
          {
            "@type": "Question",
            "name": "Can thermal flow meters handle moisture?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Thermal meters are highly sensitive to liquid droplets because water has a higher heat transfer coefficient than gas, causing measurement spikes. Proper flow conditioning and moisture removal are required for wet gases."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#F4F7FB] text-slate-900 selection:bg-cyan-100 font-sans overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Banner Image (Kept dark for striking contrast) */}
      <section 
        className="relative flex items-center overflow-hidden border-b border-slate-200"
        style={{ height: '300px', minHeight: '300px', maxHeight: '300px' }}
      >
        {/* Accent Color Overlay for Better Visibility */}
        <div className="absolute inset-0 bg-[var(--accent)]/60 z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920" 
          alt="Industrial Background" 
          className="absolute inset-0 w-full h-full object-cover z-0 grayscale"
        />
        <div className="container mx-auto px-6 max-w-7xl relative z-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-thin text-white tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            Thermal Mass Flow Meter
          </h1>
          <p className="text-cyan-400 font-light mt-4 text-lg tracking-widest uppercase drop-shadow-md">Series Scirocco 1000</p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-[#F4F7FB] pt-8 pb-4 relative z-30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="bg-white border border-slate-200 shadow-sm rounded-lg py-3 px-5 flex flex-wrap items-center text-sm font-medium text-slate-500">
            <span className="hover:text-cyan-600 cursor-pointer transition-colors">Home</span>
            <ChevronRight className="w-4 h-4 mx-2 text-slate-400" />
            <span className="hover:text-cyan-600 cursor-pointer transition-colors">Products</span>
            <ChevronRight className="w-4 h-4 mx-2 text-slate-400" />
            <span className="text-cyan-600">Thermal Mass Flow Meter</span>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <section className="py-16 bg-[#F4F7FB]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-16 items-center">
            {/* Left Image */}
            <div className="flex justify-center p-8 bg-white border border-slate-200 rounded-2xl relative group shadow-sm">
              <div className="absolute inset-0 bg-cyan-100 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              <img 
                src="https://gasflowmeter.net/images/thermal-dispersion-mass-flowmeter2.png" 
                alt="Thermal Dispersion Mass Flow Meter" 
                className="w-full max-w-[350px] object-contain relative z-10 hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Right Text */}
            <div>
              <h2 className="text-3xl font-light text-slate-900 mb-6">Product Description</h2>
              <p className="text-slate-600 font-light leading-relaxed mb-6 text-lg">
                <strong className="text-slate-900 font-semibold">Thermal Mass Flow Meters (Series Scirocco 1000)</strong> are precision instruments used as vital measurement tools in various industrial processes. The direct measurement of mass flow completely eliminates the need for separate temperature and pressure compensation, making them suitable for high-efficiency pipeline systems where accuracy, reliability, and long service life are absolutely critical.
              </p>
              <p className="text-slate-600 font-light leading-relaxed">
                Operating on King&apos;s Law, our instrument contains two Platinum RTD temperature sensors. One sensor measures the current fluid temperature as a reference, while the second is precisely heated. When flow begins, heat is drawn away via forced convection, and the amount of heat lost directly correlates to the mass velocity of the fluid. This advanced thermodynamic technique achieves an exceptional 100:1 turndown ratio.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-3.5 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-colors focus:ring-4 focus:ring-cyan-500/20 shadow-lg shadow-cyan-500/30 w-full sm:w-auto text-center">
                  Request Quote
                </button>
                <button className="px-8 py-3.5 bg-white text-slate-700 font-medium rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors flex items-center justify-center group w-full sm:w-auto shadow-sm">
                  Download Datasheet <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKING PRINCIPLE (New Section) */}
      <section className="py-24 bg-white relative border-y border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Top part: Text Left, Diagram Right */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <p className="text-cyan-600 font-bold text-sm tracking-widest uppercase mb-2">Working Principle</p>
              <div className="w-12 h-1 bg-cyan-500 mb-8 rounded-full"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                How Thermal Mass<br />Flow Measurement Works
              </h2>
              
              <div className="space-y-6 text-slate-600 font-light leading-relaxed">
                <p className="text-xl text-slate-800 font-normal">
                  The Thermal Mass Flow Meter, Series Scirocco 1000 is a precision instrument that measures gas & air mass flow and is used in various industrial processes.
                </p>
                <p className="text-lg">
                  Its measuring principle is based on the fact that whenever a fluid of a certain temperature is passed over any substance hotter than the fluid, the heat of the hot substance is taken away because of forced convection by the fluid, and the temperature of that substance drops. This fall in temperature is related to the mass flow of the fluid passing over the substance. If one can measure the amount of heat taken away by the flowing fluid one can calculate the mass flow rate.
                </p>
                <p className="text-lg">
                  A Thermal Dispersion Mass Flowmeter contains two Platinum RTD temperature sensors for this purpose. One sensor measures the current fluid temperature as a reference. The second sensor is heated and has a constant temperature differential relative to the first sensor. When the flow of air/gas starts heat is taken away from the warmer sensor. The amount of heat taken away is having a direct relation with the mass velocity of the fluid. This eliminates the need for temperature and pressure compensation.
                </p>
              </div>
            </div>

            {/* Right Diagram Image & Icons */}
            <div className="flex flex-col w-full">
              <div className="relative flex justify-center items-center lg:py-8 group mb-8">
                <div className="absolute inset-0 bg-cyan-50/80 rounded-full blur-[100px] scale-125 -z-10 group-hover:bg-cyan-100/60 transition-colors duration-700" />
                <img 
                  src="/products/working-principle.webp" 
                  alt="Working Principle Diagram" 
                  className="w-full max-w-2xl object-contain mix-blend-multiply group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>

              {/* Key Features List - Below Image */}
              <div className="w-full px-4 xl:px-8 mt-4">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <h4 className="text-[13px] font-bold text-cyan-700 uppercase tracking-widest mb-5">Core Capabilities</h4>
                  <div className="flex flex-col gap-3.5">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-[15px] font-medium text-slate-700 leading-tight">Direct measurement of mass flow</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-[15px] font-medium text-slate-700 leading-tight">No pressure or temperature compensation required</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-[15px] font-medium text-slate-700 leading-tight">40:1 turndown ratio</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-[15px] font-medium text-slate-700 leading-tight">Remote readings available on wireless</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-[15px] font-medium text-slate-700 leading-tight">Pulse, milliamps or RS485 output for networking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom box: HOW IT WORKS */}
          <div className="bg-white border border-slate-200 rounded-[2rem] p-10 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full">
            <div className="mb-12">
              <h3 className="text-[17px] font-bold text-[#1c2c5b] uppercase mb-3">How It Works</h3>
              <div className="flex items-center gap-1.5">
                <div className="w-12 h-1 bg-emerald-500 rounded-full"></div>
                <div className="w-2 h-1 bg-emerald-500/60 rounded-full"></div>
                <div className="w-1 h-1 bg-emerald-500/30 rounded-full"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              
              {/* Step 1 */}
              <div className="flex flex-col relative">
                <div className="flex items-start gap-4 relative z-20">
                  <div className="w-8 h-8 rounded-full bg-[#3b52a4] text-white flex items-center justify-center text-sm font-bold shrink-0 shadow-sm">1</div>
                  <div className="pt-1">
                    <h4 className="text-[15px] font-bold text-[#1c2c5b] mb-2 leading-none">Heated Sensor</h4>
                    <p className="text-xs text-slate-600 leading-relaxed pr-2">Heated sensor maintains a constant temperature above the fluid.</p>
                  </div>
                </div>
                
                {/* Vertical Drop Line */}
                <div className="hidden md:block absolute top-10 left-[40px] bottom-0 w-[1px] bg-slate-200 z-10" />
                
                {/* Image */}
                <div className="mt-12 h-36 w-full relative z-20 bg-white">
                   <img src="/products/heat-transfer.webp" alt="Heated Sensor" className="object-contain h-full w-full object-center mix-blend-multiply" />
                </div>

                {/* Arrow */}
                <div className="hidden md:block absolute top-2 -right-5 text-slate-300 z-30">
                  <ChevronRight className="w-6 h-6 stroke-1" />
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col relative">
                <div className="flex items-start gap-4 relative z-20">
                  <div className="w-8 h-8 rounded-full bg-[#3b52a4] text-white flex items-center justify-center text-sm font-bold shrink-0 shadow-sm">2</div>
                  <div className="pt-1">
                    <h4 className="text-[15px] font-bold text-[#1c2c5b] mb-2 leading-none">Heat Transfer</h4>
                    <p className="text-xs text-slate-600 leading-relaxed pr-2">Flowing fluid carries heat away from the heated sensor.</p>
                  </div>
                </div>
                
                {/* Vertical Drop Line */}
                <div className="hidden md:block absolute top-10 left-[40px] bottom-0 w-[1px] bg-slate-200 z-10" />
                
                {/* Image */}
                <div className="mt-12 h-36 w-full relative z-20 bg-white">
                   <img src="/products/heat-transfer.webp" alt="Heat Transfer" className="object-contain h-full w-full object-center mix-blend-multiply" />
                </div>

                {/* Arrow */}
                <div className="hidden md:block absolute top-2 -right-5 text-slate-300 z-30">
                  <ChevronRight className="w-6 h-6 stroke-1" />
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col relative">
                <div className="flex items-start gap-4 relative z-20">
                  <div className="w-8 h-8 rounded-full bg-[#3b52a4] text-white flex items-center justify-center text-sm font-bold shrink-0 shadow-sm">3</div>
                  <div className="pt-1">
                    <h4 className="text-[15px] font-bold text-[#1c2c5b] mb-2 leading-none">Temperature Drop</h4>
                    <p className="text-xs text-slate-600 leading-relaxed pr-2">Temperature of the heated sensor decreases.</p>
                  </div>
                </div>
                
                {/* Vertical Drop Line */}
                <div className="hidden md:block absolute top-10 left-[40px] bottom-0 w-[1px] bg-slate-200 z-10" />
                
                {/* Image */}
                <div className="mt-12 h-36 w-full relative z-20 bg-white">
                   <img src="/products/heat-transfer.webp" alt="Temperature Drop" className="object-contain h-full w-full object-center mix-blend-multiply" />
                </div>

                {/* Arrow */}
                <div className="hidden md:block absolute top-2 -right-5 text-slate-300 z-30">
                  <ChevronRight className="w-6 h-6 stroke-1" />
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col relative">
                <div className="flex items-start gap-4 relative z-20">
                  <div className="w-8 h-8 rounded-full bg-[#3b52a4] text-white flex items-center justify-center text-sm font-bold shrink-0 shadow-sm">4</div>
                  <div className="pt-1">
                    <h4 className="text-[15px] font-bold text-[#1c2c5b] mb-2 leading-none">Mass Flow Calculation</h4>
                    <p className="text-xs text-slate-600 leading-relaxed pr-2">Temperature difference is proportional to the mass flow rate.</p>
                  </div>
                </div>
                
                {/* Vertical Drop Line */}
                <div className="hidden md:block absolute top-10 left-[40px] bottom-0 w-[1px] bg-slate-200 z-10" />
                
                {/* Image */}
                <div className="mt-12 h-36 w-full relative z-20 bg-white">
                   <img src="/products/temperature-difference.webp" alt="Mass Flow Calculation Chart" className="object-contain h-full w-full object-center mix-blend-multiply" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* WHAT SETS US APART - Staircase Cards Layout */}
      <section className="py-24 md:py-32 bg-white relative border-b border-slate-200 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          
          {/* Header */}
          <div className="mb-16 md:mb-24">
            <p className="text-emerald-500 font-medium mb-3 tracking-wide text-sm md:text-base uppercase">Scirocco 1000 Advantage</p>
            <h2 className="text-4xl md:text-6xl font-bold text-[#1c2c5b] tracking-tight">Our difference</h2>
          </div>

          {/* Grid Staircase */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-end">
            
            {/* Card 1 */}
            <div className="rounded-[2rem] bg-[#ecfdf5] p-8 md:p-10 flex flex-col justify-start lg:min-h-[380px] w-full shadow-[0_8px_30px_rgb(0,0,0,0.03)] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 border border-emerald-50">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-slate-800 mb-6 leading-tight">Advanced<br/>Sensors</h3>
                <p className="text-slate-600 leading-relaxed text-[15px]">
                  Reference and heated Platinum RTD sensors ensure ultra-precision without drift, guaranteeing long-term stability.
                </p>
              </div>
              <Target className="w-48 h-48 text-emerald-100/50 absolute -bottom-10 -right-10 z-0 group-hover:scale-110 transition-transform duration-700" />
            </div>

            {/* Card 2 */}
            <div className="rounded-[2rem] bg-[#e0f2fe] p-8 md:p-10 flex flex-col justify-start lg:min-h-[440px] w-full shadow-[0_8px_30px_rgb(0,0,0,0.03)] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 border border-sky-50">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-slate-800 mb-6 leading-tight">King&apos;s Law<br/>Dynamics</h3>
                <p className="text-slate-600 leading-relaxed text-[15px]">
                  Calculates exact mass velocity by measuring forced convection heat loss, completely eliminating external compensation.
                </p>
              </div>
              <Wind className="w-48 h-48 text-sky-100/50 absolute -bottom-10 -right-10 z-0 group-hover:scale-110 transition-transform duration-700" />
            </div>

            {/* Card 3 */}
            <div className="rounded-[2rem] bg-[#334155] p-8 md:p-10 flex flex-col justify-start lg:min-h-[500px] w-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-6 leading-tight">Smart<br/>Electronics</h3>
                <p className="text-slate-300 leading-relaxed text-[15px]">
                  Equipped with local displays, isolated outputs, and telemetry options for seamless integration into modern SCADA networks.
                </p>
              </div>
              <Wifi className="w-48 h-48 text-slate-600/50 absolute -bottom-10 -right-10 z-0 group-hover:scale-110 transition-transform duration-700" />
            </div>

            {/* Card 4 */}
            <div className="rounded-[2rem] bg-[#1c2c5b] p-8 md:p-10 flex flex-col justify-start lg:min-h-[560px] w-full shadow-[0_8px_30px_rgb(0,0,0,0.08)] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-6 leading-tight">Modular<br/>Design</h3>
                <p className="text-indigo-200 leading-relaxed text-[15px]">
                  Field-replaceable modular components dramatically reduce pipeline downtime and simplify on-site maintenance procedures.
                </p>
              </div>
              <Settings className="w-48 h-48 text-[#2a3f7c]/50 absolute -bottom-10 -right-10 z-0 group-hover:scale-110 transition-transform duration-700" />
            </div>

          </div>
        </div>
      </section>

      {/* CONFIGURATIONS - Bento Grid */}
      <section className="py-24 bg-[#F4F7FB]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-4 text-slate-900">Available Variants</h2>
              <p className="text-slate-600 text-lg font-light max-w-xl">Engineered form-factors to fit any industrial environment seamlessly.</p>
            </div>
            <button className="text-cyan-600 hover:text-cyan-700 font-semibold flex items-center text-sm tracking-wide uppercase transition-colors">
              View Dimension Drawings <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Threaded */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-[2rem] p-8 hover:border-cyan-500/30 hover:shadow-lg transition-all duration-300 group flex flex-col relative overflow-hidden">
              <div className="h-48 mb-8 flex items-center justify-center relative z-10">
                <img src="https://gasflowmeter.net/images/Scirocco_1000_2_Threaded-removebg-preview.png" alt="Threaded Connection" className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="mt-auto relative z-10">
                <p className="text-cyan-600 text-xs font-semibold mb-2 uppercase tracking-widest">Inline Series</p>
                <h3 className="text-2xl font-light text-slate-900 mb-3">Scirocco 1000-2</h3>
                <p className="text-slate-600 text-sm font-light leading-relaxed">Standard threaded connection designed for precise direct measurement in small to medium pipelines.</p>
              </div>
            </div>
            
            {/* Clamp Type */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-[2rem] p-8 hover:border-cyan-500/30 hover:shadow-lg transition-all duration-300 group flex flex-col relative overflow-hidden">
              <div className="h-48 mb-8 flex items-center justify-center relative z-10">
                <img src="https://gasflowmeter.net/images/Scirocco_1000-1-removebg-preview.png" alt="Clamp Type Insertion" className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="mt-auto relative z-10">
                <p className="text-cyan-600 text-xs font-semibold mb-2 uppercase tracking-widest">Insertion Probe</p>
                <h3 className="text-2xl font-light text-slate-900 mb-3">Scirocco 1000-1</h3>
                <p className="text-slate-600 text-sm font-light leading-relaxed">Adjustable clamp-type probe design perfect for large diameter ducts, chimneys, and HVAC systems.</p>
              </div>
            </div>
            
            {/* Flameproof */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-[2rem] p-8 hover:border-cyan-500/30 hover:shadow-lg transition-all duration-300 group flex flex-col relative overflow-hidden">
              <div className="h-48 mb-8 flex items-center justify-center relative z-10">
                <img src="https://gasflowmeter.net/images/Scirocco_1000_2_Encloser_gas_group_IIB_Exd_IP66-removebg-preview.png" alt="Flameproof Exd IP66" className="max-h-full object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="mt-auto relative z-10">
                <p className="text-cyan-600 text-xs font-semibold mb-2 uppercase tracking-widest">Hazardous Area</p>
                <h3 className="text-2xl font-light text-slate-900 mb-3">Scirocco 1000-2 Exd</h3>
                <p className="text-slate-600 text-sm font-light leading-relaxed">Gas Group IIB certified flameproof enclosure built strictly for hazardous and explosive environments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS - Image Cards */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-slate-900">Industrial Applications</h2>
            <p className="text-slate-600 text-lg font-light max-w-2xl mx-auto">Trusted by global leaders across diverse engineering sectors.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 relative hover:border-cyan-500/30 hover:shadow-lg transition-all duration-300 shadow-sm">
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/50 to-transparent z-10" />
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" alt="Compressed Air" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" />
              </div>
              <div className="p-8 relative z-20 -mt-16">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 border border-slate-200 shadow-sm">
                  <Wind className="text-cyan-600 w-5 h-5" />
                </div>
                <h3 className="text-xl font-light text-slate-900 mb-3">Compressed Air</h3>
                <p className="text-slate-600 font-light text-sm leading-relaxed">
                  Monitor compressor efficiency and conduct facility-wide leak detection audits with unparalleled accuracy.
                </p>
              </div>
            </div>

            <div className="group rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 relative hover:border-cyan-500/30 hover:shadow-lg transition-all duration-300 shadow-sm">
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/50 to-transparent z-10" />
                <img src="https://images.unsplash.com/photo-1614036417651-1c390a184136?auto=format&fit=crop&q=80&w=800" alt="Biogas & Flare Gas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" />
              </div>
              <div className="p-8 relative z-20 -mt-16">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 border border-slate-200 shadow-sm">
                  <Factory className="text-cyan-600 w-5 h-5" />
                </div>
                <h3 className="text-xl font-light text-slate-900 mb-3">Biogas & Flare Gas</h3>
                <p className="text-slate-600 font-light text-sm leading-relaxed">
                  Measure complex gas mixtures in wastewater treatment plants and landfills (requires moisture knockout).
                </p>
              </div>
            </div>

            <div className="group rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 relative hover:border-cyan-500/30 hover:shadow-lg transition-all duration-300 shadow-sm">
              <div className="h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/50 to-transparent z-10" />
                <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800" alt="HVAC" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" />
              </div>
              <div className="p-8 relative z-20 -mt-16">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 border border-slate-200 shadow-sm">
                  <Activity className="text-cyan-600 w-5 h-5" />
                </div>
                <h3 className="text-xl font-light text-slate-900 mb-3">HVAC & Burner Control</h3>
                <p className="text-slate-600 font-light text-sm leading-relaxed">
                  Optimize air-to-fuel ratios in industrial boilers and furnaces to reduce fuel consumption and emissions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* TECHNICAL SPECS TABS */}
      <SpecsTabs />

      {/* TECHNICAL FAQ - Accordion */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-600 font-light">Technical answers for system integrators, plant engineers, and purchasing teams.</p>
          </div>

          <div className="space-y-4">
            <details className="group bg-slate-50 border border-slate-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden hover:border-cyan-500/30 transition-colors shadow-sm">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-slate-900 select-none">
                What is a thermal mass flow meter?
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:-rotate-180 transition-transform duration-300" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 font-light text-sm leading-relaxed border-t border-slate-200 mt-2 pt-4">
                Thermal mass flow meter is a flow meter that uses the concept of conductive and convective heat transfer from a heated sensor to directly measure gas mass flow.
              </div>
            </details>

            <details className="group bg-slate-50 border border-slate-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden hover:border-cyan-500/30 transition-colors shadow-sm">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-slate-900 select-none">
                How thermal mass flow meter works?
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:-rotate-180 transition-transform duration-300" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 font-light text-sm leading-relaxed border-t border-slate-200 mt-2 pt-4">
                Thermal mass flow meters are used for almost all of the applications for gas flow. Thermal mass flow meters, as the name suggests, use heat to calculate flow. It uses one or more temperature sensors to introduce heat into the flow stream and measures how much heat dissipates. This approach is most effective when measuring gas mass flow. Due to heat absorption considerations, it is difficult to get a reliable signal using thermal mass flow meters in liquids.
              </div>
            </details>

            <details className="group bg-slate-50 border border-slate-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden hover:border-cyan-500/30 transition-colors shadow-sm">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-slate-900 select-none">
                What are the advantages of Manas thermal mass flow meter?
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:-rotate-180 transition-transform duration-300" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 font-light text-sm leading-relaxed border-t border-slate-200 mt-2 pt-4">
                Direct measurement of mass flow. No pressure or temperature compensation required 20:1 turndown. Wireless data transfer possible. Remote readings are available on wireless. Pulse, milliamps, and RS485 output for networking.
              </div>
            </details>
            <details className="group bg-slate-50 border border-slate-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden hover:border-cyan-500/30 transition-colors shadow-sm">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-slate-900 select-none">
                How does gas composition affect readings?
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:-rotate-180 transition-transform duration-300" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 font-light text-sm leading-relaxed border-t border-slate-200 mt-2 pt-4">
                Changes in gas composition alter the convective cooling coefficient of the fluid. Because thermal meters rely on specific heat properties, actual gas calibration is critical for accuracy. We calibrate our meters for the specific gas mixture you intend to measure.
              </div>
            </details>

            <details className="group bg-slate-50 border border-slate-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden hover:border-cyan-500/30 transition-colors shadow-sm">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-slate-900 select-none">
                Can it handle raw Biogas?
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:-rotate-180 transition-transform duration-300" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 font-light text-sm leading-relaxed border-t border-slate-200 mt-2 pt-4">
                Yes, provided the gas is properly conditioned and dried. Liquid water droplets will cause false spikes in the readings. If the gas is dry, our algorithms handle varying CH₄ / CO₂ ratios effectively.
              </div>
            </details>

            <details className="group bg-slate-50 border border-slate-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden hover:border-cyan-500/30 transition-colors shadow-sm">
              <summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-slate-900 select-none">
                What are the required straight pipe runs for installation?
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:-rotate-180 transition-transform duration-300" />
              </summary>
              <div className="px-6 pb-6 text-slate-600 font-light text-sm leading-relaxed border-t border-slate-200 mt-2 pt-4">
                For optimal accuracy, we recommend a straight pipe run of at least 15D (15 x pipe diameter) upstream and 5D downstream. This ensures a fully developed, symmetrical flow profile before the gas reaches the sensor.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* E-E-A-T Author Insight Block */}
      <section className="py-12 bg-[#F4F7FB] border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-4 bg-white border border-slate-200 rounded-full py-2 px-6 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 font-bold text-sm">
              MM
            </div>
            <div className="text-left">
              <p className="text-slate-900 text-sm font-medium">Verified by Manas Engineering</p>
              <p className="text-slate-500 text-xs">Digital Lead with 25+ years in Flow Measurement Standards</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
