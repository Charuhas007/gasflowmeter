"use client";
import React from 'react';

const videos = [
  {
    id: "xF6UxXXXZxA",
    title: "How It All Started",
    category: "Company Journey"
  },
  {
    id: "eLm9K4QHoHs",
    title: "What Our Customers Are Saying",
    category: "Testimonials"
  },
  {
    id: "_sKhjmhpLDo",
    title: "The Science Behind Steam Flow Meter",
    category: "Technical Deep-Dive"
  },
  {
    id: "M6XqIu6YS5k",
    title: "Mass Flow Meter Calibration",
    category: "Engineering Process"
  }
];

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-[#F4F7FB] selection:bg-[#0055FF] selection:text-white">
      
      {/* Brand Gradient Hero Section */}
      <section className="bg-gradient-to-br from-[#0055FF] to-[#00D4FF] pt-40 pb-32 rounded-b-[48px] px-6 relative overflow-hidden shadow-xl shadow-[#0055FF]/10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto max-w-7xl relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-3xl">
            <div className="text-sm tracking-widest font-mono font-bold text-white/80 mb-6 uppercase">
              RESOURCES / VIDEO LIBRARY
            </div>
            <h1 className="text-6xl md:text-[5.5rem] font-black text-white leading-[0.95] tracking-tighter mb-12">
              Explore & <span className="inline-block relative">Learn<svg className="absolute -bottom-3 left-0 w-full text-[#00D4FF]" viewBox="0 0 100 20" preserveAspectRatio="none"><path d="M0,10 Q50,20 100,10" stroke="currentColor" strokeWidth="4" fill="none"/></svg></span><br/>
              The Science
            </h1>
            
            <div className="flex items-center gap-4 border-b-2 border-white/30 pb-4 max-w-[280px] cursor-pointer hover:border-white transition-colors group">
              <span className="text-lg font-bold text-white tracking-wide uppercase group-hover:text-[#00D4FF] transition-colors">WATCH ALL VIDEOS</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="ml-auto text-white group-hover:text-[#00D4FF] transition-colors group-hover:translate-x-2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </div>

          {/* Right side circular graphic abstraction mapped to brand colors */}
          <div className="hidden lg:block relative w-96 h-96 mr-12">
            <div className="absolute inset-0 rounded-full border-[1px] border-white/20 scale-150"></div>
            <div className="absolute inset-0 rounded-full border-[1px] border-white/30 scale-110"></div>
            <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-2xl shadow-[#0055FF]/40">
              {/* Circular Text Illusion */}
              <div className="absolute inset-0 rounded-full border border-[#0055FF]/10 scale-[0.8]"></div>
              <div className="text-[#0055FF] font-mono text-[10px] tracking-[0.2em] text-center w-full absolute top-1/2 -translate-y-1/2 px-2 font-bold">
                 MANAS<br/><br/>MICROSYSTEMS
              </div>
              <div className="w-3 h-3 bg-[#FF2E93] rounded-full shadow-[0_0_10px_rgba(255,46,147,0.5)]"></div>
              {/* Connecting line */}
              <div className="absolute -top-12 left-1/2 w-px h-12 bg-white/50"></div>
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Bento Grid */}
      <section className="container mx-auto max-w-7xl px-6 py-24 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Featured Video (Wide Dark Card) */}
          <div className="md:col-span-7 bg-[#0F172A] rounded-[32px] p-6 shadow-2xl relative overflow-hidden flex flex-col group border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0055FF]/10 to-transparent pointer-events-none"></div>
            <div className="flex justify-between items-start mb-6 px-2 relative z-10">
              <button className="px-5 py-2 bg-[#0055FF]/20 text-[#00D4FF] rounded-full text-sm font-semibold backdrop-blur-sm border border-[#0055FF]/30 hover:bg-[#0055FF]/40 transition-colors">
                {videos[2].category}
              </button>
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#0055FF]/20 transition-colors border border-white/5">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white group-hover:text-[#00D4FF] transition-colors"><path d="M7 7h10v10M7 17L17 7"/></svg>
              </div>
            </div>
            <div className="flex-1 rounded-2xl overflow-hidden bg-black/60 relative aspect-video shadow-2xl ring-1 ring-white/10 z-10">
               <iframe className="absolute inset-0 w-full h-full" src={`https://www.youtube.com/embed/${videos[2].id}`} frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="mt-6 px-2 pb-2 relative z-10">
              <h3 className="text-white text-3xl font-bold tracking-tight mb-2">{videos[2].title}</h3>
              <p className="text-slate-400 font-medium">Understand the physics and mechanics.</p>
            </div>
          </div>

          <div className="md:col-span-5 grid grid-rows-2 gap-6">
            {/* Small White Card 1 */}
            <div className="bg-white rounded-[32px] p-6 shadow-xl flex flex-col group h-full border border-slate-100 hover:border-[#0055FF]/30 transition-colors">
              <div className="w-full rounded-[24px] overflow-hidden bg-slate-900 relative aspect-video mb-6 shadow-inner ring-1 ring-black/5">
                 <iframe className="absolute inset-0 w-full h-full" src={`https://www.youtube.com/embed/${videos[1].id}`} frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="mt-auto px-2 pb-2">
                <div className="text-[#0055FF] font-bold text-sm mb-2 uppercase tracking-wider flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  {videos[1].category}
                </div>
                <h3 className="text-slate-900 text-2xl md:text-[1.75rem] font-black leading-tight tracking-tight group-hover:text-[#0055FF] transition-colors">
                  {videos[1].title}
                </h3>
              </div>
            </div>

            {/* Small White Card 2 */}
            <div className="bg-white rounded-[32px] p-6 shadow-xl flex flex-col group h-full border border-slate-100 hover:border-[#0055FF]/30 transition-colors">
              <div className="w-full rounded-[24px] overflow-hidden bg-slate-900 relative aspect-video mb-6 shadow-inner ring-1 ring-black/5">
                 <iframe className="absolute inset-0 w-full h-full" src={`https://www.youtube.com/embed/${videos[0].id}`} frameBorder="0" allowFullScreen></iframe>
              </div>
              <div className="mt-auto px-2 pb-2">
                <div className="text-[#FF2E93] font-bold text-sm mb-2 uppercase tracking-wider flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  {videos[0].category}
                </div>
                <h3 className="text-slate-900 text-2xl md:text-[1.75rem] font-black leading-tight tracking-tight group-hover:text-[#FF2E93] transition-colors">
                  {videos[0].title}
                </h3>
              </div>
            </div>
          </div>

          {/* Wide Card 2 */}
          <div className="md:col-span-12 bg-white rounded-[32px] p-4 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-stretch group border border-slate-100 mt-6 hover:border-[#0055FF]/30 transition-colors">
             <div className="flex-1 w-full rounded-[24px] overflow-hidden bg-slate-900 relative aspect-video md:aspect-auto md:h-80 shadow-inner">
               <iframe className="absolute inset-0 w-full h-full" src={`https://www.youtube.com/embed/${videos[3].id}`} frameBorder="0" allowFullScreen></iframe>
             </div>
             <div className="flex-1 w-full p-8 md:p-12 flex flex-col justify-center">
                <div className="px-4 py-1.5 bg-[#0055FF]/10 text-[#0055FF] rounded-full text-sm font-bold inline-flex self-start mb-6">
                  {videos[3].category}
                </div>
                <h3 className="text-slate-900 text-4xl md:text-5xl font-black tracking-tight mb-6 group-hover:text-[#0055FF] transition-colors">{videos[3].title}</h3>
                <p className="text-slate-600 text-lg font-medium leading-relaxed mb-8">Discover the precision engineering and strict calibration standards that guarantee accuracy across all our mass flow meters globally.</p>
                <button 
                  className="px-8 py-4 bg-[#0055FF] text-white font-bold rounded-xl hover:bg-[#00D4FF] transition-colors flex items-center gap-3 w-fit shadow-lg shadow-[#0055FF]/30 hover:shadow-[#00D4FF]/40 hover:-translate-y-1 transform duration-300"
                  onClick={() => window.open(`https://youtu.be/${videos[3].id}`, '_blank')}
                >
                  Watch Process <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
             </div>
          </div>

        </div>
      </section>

    </main>
  );
}
