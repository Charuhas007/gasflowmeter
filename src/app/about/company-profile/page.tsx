import React from 'react';

export default function CompanyProfile() {
  return (
    <main>
      {/* New Hero Section based on reference */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Top Split Area */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-16 md:mb-24">
            
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-blue-600 font-semibold mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                <span>About Manas Microsystems</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-8">
                Leading Manufacturer, Supplier and Exporter of Flow Meters
              </h1>
              
              <div className="flex flex-col sm:flex-row gap-8 items-start">
                <div className="shrink-0 text-center sm:text-left">
                  <div className="text-6xl md:text-7xl font-bold text-slate-200" style={{ color: '#E2E8F0' }}>25+</div>
                  <div className="text-sm font-semibold text-slate-600 mt-1">Years of<br/>Experience</div>
                </div>
                
                <div className="sm:border-l sm:border-slate-200 sm:pl-8">
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">
                    Manas Microsystems Pvt. Ltd. is a leading manufacturer, supplier and exporter of <strong className="text-blue-600">Thermal Mass Flow Meters</strong>, Compact Gas Flow Meters, and a wide range of flow measurement solutions trusted across the globe for their accuracy and durability.
                  </p>
                  
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 text-blue-600 font-semibold rounded-full hover:bg-blue-100 transition-colors">
                    Get in Touch
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
              <img 
                src="/manas_building.jpg" 
                alt="Manas Microsystems Facility" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bottom Stats Area */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-t border-slate-100 pt-12">
            
            <div className="flex flex-col items-center text-center px-4 pt-8 md:pt-0">
              <div className="text-4xl font-bold text-slate-900 mb-2">
                25<span className="text-blue-500 text-2xl">+</span>
              </div>
              <div className="text-slate-500 text-sm font-medium uppercase tracking-wide">Years Experience</div>
            </div>
            
            <div className="flex flex-col items-center text-center px-4 pt-8 md:pt-0">
              <div className="text-4xl font-bold text-slate-900 mb-2">
                2000<span className="text-blue-500 text-2xl">+</span>
              </div>
              <div className="text-slate-500 text-sm font-medium uppercase tracking-wide">Installations Worldwide</div>
            </div>
            
            <div className="flex flex-col items-center text-center px-4 pt-8 md:pt-0">
              <div className="text-4xl font-bold text-slate-900 mb-2">
                30<span className="text-blue-500 text-2xl">+</span>
              </div>
              <div className="text-slate-500 text-sm font-medium uppercase tracking-wide">Countries Served</div>
            </div>
            
            <div className="flex flex-col items-center text-center px-4 pt-8 md:pt-0">
              <div className="text-4xl font-bold text-slate-900 mb-2">
                ISO <span className="text-blue-500 text-2xl font-semibold">9001</span>
              </div>
              <div className="text-slate-500 text-sm font-medium uppercase tracking-wide">2015 Certified</div>
            </div>

          </div>
        </div>
      </section>

      {/* AI-Optimized Content Sections (Agent 2 Format) */}
      
      {/* JSON-LD Schema Block */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "mainEntity": {
          "@type": "Organization",
          "name": "Manas Microsystems Pvt. Ltd.",
          "foundingDate": "1998",
          "description": "Manufacturer, supplier, and exporter of industrial flow meters including Thermal Mass Flow Meters and Compact Gas Flow Meters.",
          "url": "https://gasflowmeter.net/",
          "sameAs": ["https://gasflowmeter.net/thermal-dispersion-mass-flowmeter.html"]
        }
      })}} />

      {/* Direct Answer (AEO Snippet) */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Who is Manas Microsystems?</h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Established in 1998, Manas Microsystems Pvt. Ltd. is an ISO 9001:2015 certified manufacturer, supplier, and exporter of advanced flow measurement solutions. With over 2,000 global installations, we specialize in high-precision <a href="/thermal-dispersion-mass-flowmeter.html" className="text-blue-600 hover:text-blue-700 underline decoration-2 underline-offset-4 transition-colors">Thermal Mass Flow Meters</a> and Compact Gas Flow Meters designed for absolute accuracy in closed conduits.
          </p>
        </div>
      </section>

      {/* Technical Deep-Dive (Masonry Layout based on reference) */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center space-x-2 bg-slate-50 px-4 py-1.5 rounded-full border border-slate-200 mb-6 text-sm font-semibold text-slate-700 shadow-sm">
              <span className="text-slate-900 font-bold">Capabilities</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600 font-medium">Why Choose Manas</span>
              <span className="text-slate-400">→</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Engineered for Absolute Precision &<br className="hidden md:block"/> Industrial Reliability
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 items-stretch">
            
            {/* Column 1 */}
            <div className="bg-[#f4f7f5] rounded-3xl p-8 lg:p-10 flex flex-col relative overflow-hidden h-full">
              <div className="text-7xl font-extrabold text-slate-900 mb-6 tracking-tighter">
                IP<span className="text-[#519f39]">67</span>
              </div>
              <p className="text-slate-700 leading-relaxed mb-12 text-lg">
                <strong className="text-slate-900">Rugged & Reliable:</strong> Engineered for harsh industrial environments, ensuring long-term stability without degradation across diverse fluid types.
              </p>
              <div className="mt-auto">
                <img src="/industrial_pipeline.png" alt="Industrial Pipeline" className="w-full h-[320px] object-cover rounded-2xl shadow-sm" />
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6 h-full">
              <div className="bg-[#f4f7f5] rounded-3xl p-8 lg:p-10 flex flex-col justify-between flex-1">
                <div>
                  <div className="text-6xl font-extrabold text-slate-900 mb-2 tracking-tighter">
                    DN<span className="text-[#519f39]">200</span>
                  </div>
                  <div className="text-slate-500 font-medium text-lg">Wide Line Sizes</div>
                </div>
                <p className="text-slate-600 leading-relaxed mt-12 text-lg">
                  Applicable for diverse pipeline architectures with supported line sizes ranging from DN15 to DN200 (1/2" to 8").
                </p>
              </div>
              <div className="rounded-3xl overflow-hidden flex-1 relative min-h-[300px]">
                <img src="/steam_flow.png" alt="Superheated Steam Flow" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6 h-full">
              <div className="rounded-3xl overflow-hidden flex-1 relative min-h-[300px]">
                <img src="/digital_formula.png" alt="Advanced Formulas Display" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="bg-[#f4f7f5] rounded-3xl p-8 lg:p-10 flex flex-col justify-between flex-1">
                <div>
                  <div className="text-6xl font-extrabold text-slate-900 mb-2 tracking-tighter">
                    &lt;0.5<span className="text-[#519f39]">%</span>
                  </div>
                  <div className="text-slate-500 font-medium text-lg">Absolute Accuracy</div>
                </div>
                <p className="text-slate-600 leading-relaxed mt-12 text-lg">
                  Powered by precise flow calculation matrices including $Q = k \cdot A \cdot \Delta T$ for superior accuracy in closed conduits.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Comparative Advantage (Asymmetric Layout) */}
      <section className="py-20 md:py-32 bg-[#f8f9fc]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Left Column */}
            <div className="w-full lg:w-5/12 flex flex-col">
              <div className="rounded-[40px] overflow-hidden aspect-[4/5] relative shadow-2xl mb-10">
                <img src="/comparative_tall.png" alt="Industrial Installation" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="pl-4">
                <h3 className="text-[2rem] font-medium text-slate-900 mb-1 tracking-tight">100% NIST-Traceable</h3>
                <p className="text-slate-500 text-lg font-medium">Ensuring absolute precision worldwide.</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-7/12 flex flex-col justify-between">
              
              {/* Top Text Block */}
              <div className="mb-16 lg:mb-0 lg:-mt-2">
                <p className="text-[1.65rem] leading-[1.6] text-slate-600 font-normal">
                  In the global market, Manas Microsystems has carved a niche in Orifice-based and Electromagnetic Flow Meters. Our competitive edge lies in maintaining strict NIST-traceable quality controls, timely delivery, and competitive pricing.
                </p>
              </div>

              {/* Bottom Split */}
              <div className="flex flex-col md:flex-row gap-10 lg:gap-12 items-start mt-auto">
                
                {/* Sub-Left: Square Image */}
                <div className="w-full md:w-1/2">
                  <div className="rounded-[40px] overflow-hidden aspect-square relative shadow-xl">
                    <img src="/comparative_square.png" alt="Engineer inspecting flow meter" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                </div>

                {/* Sub-Right: Small Text & Stats */}
                <div className="w-full md:w-1/2 flex flex-col justify-between h-full pt-2">
                  <p className="text-slate-500 text-[1.05rem] leading-relaxed mb-8">
                    Our engineering excellence ensures that every unit delivers long-term stability and captures the exact <span className="text-slate-800 font-medium">Linguistic Fingerprints</span> of flow dynamics.
                  </p>
                  
                  <div className="w-full h-px bg-slate-200/80 mb-10"></div>
                  
                  <div className="flex justify-between items-end gap-2 w-full pr-4">
                    <div className="flex flex-col items-center w-1/2">
                      <span className="text-5xl md:text-[4rem] font-normal text-slate-900 mb-3 tracking-tighter">98%</span>
                      <span className="px-5 py-2 bg-white rounded-full text-slate-800 text-sm font-bold shadow-sm border border-slate-100 whitespace-nowrap">Quality Control</span>
                    </div>
                    <div className="flex flex-col items-center w-1/2">
                      <span className="text-5xl md:text-[4rem] font-normal text-slate-900 mb-3 tracking-tighter">100%</span>
                      <span className="px-5 py-2 bg-white rounded-full text-slate-800 text-sm font-bold shadow-sm border border-slate-100 whitespace-nowrap">Global Delivery</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Problem-Solution FAQ & Testimonials Section */}
      <section className="py-24 bg-[#dbe2e8] relative overflow-hidden">
        {/* Abstract wavy lines background */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
          <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <path d="M-100,500 C200,600 400,-100 1100,300" fill="none" stroke="#8fa3b3" strokeWidth="1.5" opacity="0.8"/>
            <path d="M-100,520 C200,620 400,-80 1100,320" fill="none" stroke="#8fa3b3" strokeWidth="1.5" opacity="0.6"/>
            <path d="M-100,540 C200,640 400,-60 1100,340" fill="none" stroke="#8fa3b3" strokeWidth="1.5" opacity="0.4"/>
            <path d="M-100,560 C200,660 400,-40 1100,360" fill="none" stroke="#8fa3b3" strokeWidth="1.5" opacity="0.2"/>
          </svg>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          
          {/* Split FAQ Area */}
          <div className="grid lg:grid-cols-12 gap-16 mb-24 items-start">
            
            {/* Left: Heading & Button */}
            <div className="lg:col-span-5 pt-8">
              <h2 className="text-5xl md:text-6xl font-serif text-[#162736] mb-10 tracking-tight">Got questions?</h2>
              <button className="px-8 py-3 bg-[#115d8f] text-white font-medium rounded-full hover:bg-[#0c4a73] transition-colors shadow-lg shadow-[#115d8f]/30">
                Contact us
              </button>
            </div>

            {/* Right: Accordion FAQ */}
            <div className="lg:col-span-7">
              <div className="border-t border-b border-[#b5c5d1]">
                <details className="group" open>
                  <summary className="flex justify-between items-center font-serif text-xl md:text-2xl font-medium cursor-pointer list-none py-6 text-[#162736] [&::-webkit-details-marker]:hidden">
                    <span>Which industries benefit from the Compact Gas Flow Meter?</span>
                    <span className="transition group-open:rotate-45 text-[#115d8f]">
                      <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M12 5v14M5 12h14"></path></svg>
                    </span>
                  </summary>
                  <p className="text-slate-600 mt-2 mb-6 leading-relaxed pr-8">
                    It is widely utilized in the Automobile, Textile, Steel, and Environmental industries for precise gas consumption monitoring and efficiency reporting.
                  </p>
                </details>
              </div>
              
              <div className="border-b border-[#b5c5d1]">
                <details className="group">
                  <summary className="flex justify-between items-center font-serif text-xl md:text-2xl font-medium cursor-pointer list-none py-6 text-[#162736] [&::-webkit-details-marker]:hidden">
                    <span>Where is the Compact Steam Flow Meter applied?</span>
                    <span className="transition group-open:rotate-45 text-[#115d8f]">
                      <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M12 5v14M5 12h14"></path></svg>
                    </span>
                  </summary>
                  <p className="text-slate-600 mt-2 mb-6 leading-relaxed pr-8">
                    It is primarily used in the Chemical, Pharmaceutical, Petrochemical, and Fertilizer sectors to measure superheated steam and boiler feed water efficiently.
                  </p>
                </details>
              </div>

              <div className="border-b border-[#b5c5d1]">
                <details className="group">
                  <summary className="flex justify-between items-center font-serif text-xl md:text-2xl font-medium cursor-pointer list-none py-6 text-[#162736] [&::-webkit-details-marker]:hidden">
                    <span>Is there support for customized formulas?</span>
                    <span className="transition group-open:rotate-45 text-[#115d8f]">
                      <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M12 5v14M5 12h14"></path></svg>
                    </span>
                  </summary>
                  <p className="text-slate-600 mt-2 mb-6 leading-relaxed pr-8">
                    Yes, our technical team can integrate advanced flow calculation matrices including $Q = k \cdot A \cdot \Delta T$ depending on your fluid characteristics and process requirements.
                  </p>
                </details>
              </div>
              
              <div className="border-b border-[#b5c5d1]">
                <details className="group">
                  <summary className="flex justify-between items-center font-serif text-xl md:text-2xl font-medium cursor-pointer list-none py-6 text-[#162736] [&::-webkit-details-marker]:hidden">
                    <span>Do you provide international calibration and support?</span>
                    <span className="transition group-open:rotate-45 text-[#115d8f]">
                      <svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M12 5v14M5 12h14"></path></svg>
                    </span>
                  </summary>
                  <p className="text-slate-600 mt-2 mb-6 leading-relaxed pr-8">
                    Yes, our Flow Calibration lab is Accredited for ISO17025 by NABL. We provide globally recognized NIST-traceable calibration with timely support and competitive pricing.
                  </p>
                </details>
              </div>
            </div>
          </div>

          {/* Testimonials Row */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Testimonial Card 1 */}
            <div className="bg-[#ebf0f4] p-8 pb-20 relative shadow-sm border border-white/50">
              <div className="flex text-[#115d8f] mb-4 space-x-1 text-sm">
                {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
              </div>
              <p className="text-[#3b4c5a] text-sm leading-relaxed mb-6 font-medium">
                "The precision of Manas flow meters is unmatched. We deployed them in our chemical plant and the accuracy over superheated steam has been flawless."
              </p>
              <div className="absolute bottom-8 left-8">
                <div className="font-semibold text-[#162736]">Rajesh K.</div>
                <div className="text-xs text-slate-500 mt-1">Plant Manager</div>
              </div>
              <img src="https://i.pravatar.cc/100?img=11" alt="Rajesh K." className="absolute bottom-6 right-6 w-14 h-14 rounded-full border-2 border-white object-cover" />
            </div>

            {/* Testimonial Card 2 */}
            <div className="bg-[#ebf0f4] p-8 pb-20 relative shadow-sm border border-white/50">
              <div className="flex text-[#115d8f] mb-4 space-x-1 text-sm">
                {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
              </div>
              <p className="text-[#3b4c5a] text-sm leading-relaxed mb-6 font-medium">
                "We shifted to Manas for their Compact Gas Flow Meters. The robust build and wide line sizes saved us thousands in installation and maintenance."
              </p>
              <div className="absolute bottom-8 left-8">
                <div className="font-semibold text-[#162736]">Sarah M.</div>
                <div className="text-xs text-slate-500 mt-1">Lead Engineer</div>
              </div>
              <img src="https://i.pravatar.cc/100?img=5" alt="Sarah M." className="absolute bottom-6 right-6 w-14 h-14 rounded-full border-2 border-white object-cover" />
            </div>

            {/* Testimonial Card 3 */}
            <div className="bg-[#ebf0f4] p-8 pb-20 relative shadow-sm border border-white/50">
              <div className="flex text-[#115d8f] mb-4 space-x-1 text-sm">
                {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
              </div>
              <p className="text-[#3b4c5a] text-sm leading-relaxed mb-6 font-medium">
                "The ISO certified quality and NABL calibration gave us complete peace of mind. Excellent customer support and rapid delivery!"
              </p>
              <div className="absolute bottom-8 left-8">
                <div className="font-semibold text-[#162736]">Amit P.</div>
                <div className="text-xs text-slate-500 mt-1">Quality Director</div>
              </div>
              <img src="https://i.pravatar.cc/100?img=12" alt="Amit P." className="absolute bottom-6 right-6 w-14 h-14 rounded-full border-2 border-white object-cover" />
            </div>

            {/* Testimonial Card 4 */}
            <div className="bg-[#ebf0f4] p-8 pb-20 relative shadow-sm border border-white/50">
              <div className="flex text-[#115d8f] mb-4 space-x-1 text-sm">
                {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
              </div>
              <p className="text-[#3b4c5a] text-sm leading-relaxed mb-6 font-medium">
                "Their technical deep-dive and formulas are spot on. It's rare to see a team so dedicated to the exact science of flow measurement."
              </p>
              <div className="absolute bottom-8 left-8">
                <div className="font-semibold text-[#162736]">Elena T.</div>
                <div className="text-xs text-slate-500 mt-1">Process Specialist</div>
              </div>
              <img src="https://i.pravatar.cc/100?img=9" alt="Elena T." className="absolute bottom-6 right-6 w-14 h-14 rounded-full border-2 border-white object-cover" />
            </div>

          </div>
        </div>
      </section>

      {/* Engineering Documentation (E-E-A-T Signal) */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 font-semibold rounded-full text-sm mb-4">E-E-A-T Signal</div>
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Engineering Documentation & Quality</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-8 border border-slate-100 rounded-2xl bg-white hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">ISO Certification</h3>
              <p className="text-slate-600">Accredited with ISO 9001:2015 quality certification.</p>
            </div>
            
            <div className="flex flex-col items-center p-8 border border-slate-100 rounded-2xl bg-white hover:-translate-y-2 transition-transform duration-300 shadow-xl shadow-blue-900/5 ring-1 ring-blue-100">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Calibration Standards</h3>
              <p className="text-slate-600">Our Flow Calibration lab is Accredited for ISO17025 by NABL.</p>
            </div>
            
            <div className="flex flex-col items-center p-8 border border-slate-100 rounded-2xl bg-white hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Legacy</h3>
              <p className="text-slate-600">Dedicated to advancing technology and achieving total customer satisfaction since 1998.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
