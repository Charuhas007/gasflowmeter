"use client";
import React from 'react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f4f7fb] text-slate-900 pb-24">
      
      {/* Top Breadcrumb */}
      <div className="container mx-auto px-6 max-w-7xl pt-10 pb-4">
        <div className="text-[0.65rem] font-bold tracking-[0.2em] text-slate-500 uppercase flex items-center gap-2">
          <a href="/" className="hover:text-[#0055FF] transition-colors">HOME</a> 
          <span>{'>'}</span> 
          <span className="text-slate-800">CONTACT US</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 max-w-7xl pb-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-stretch">
          
          {/* Left: Form Area */}
          <div className="w-full lg:w-6/12 flex flex-col pt-0">
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-4 text-slate-900">
              Contact our team
            </h1>
            <p className="text-slate-500 text-lg mb-12 max-w-lg">
              Got any questions about our flow meters or calibration services? We're here to help.
            </p>

            <form className="flex flex-col gap-6 w-full max-w-lg">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="firstName" className="text-sm font-semibold text-slate-800">First name</label>
                  <input type="text" id="firstName" placeholder="First name" className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0055FF] focus:border-transparent transition-all shadow-sm" required />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="lastName" className="text-sm font-semibold text-slate-800">Last name</label>
                  <input type="text" id="lastName" placeholder="Last name" className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0055FF] focus:border-transparent transition-all shadow-sm" required />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-slate-800">Email</label>
                <input type="email" id="email" placeholder="you@company.com" className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0055FF] focus:border-transparent transition-all shadow-sm" required />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-semibold text-slate-800">Phone number</label>
                <div className="flex bg-white border border-slate-300 rounded-xl overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-[#0055FF] transition-all">
                  <div className="bg-white border-r border-slate-300 px-4 py-3 flex items-center justify-center text-slate-700 font-medium text-sm">
                    IN <svg className="w-4 h-4 ml-2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                  <input type="tel" id="phone" placeholder="+91 (555) 000-0000" className="w-full px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none" required />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="text-sm font-semibold text-slate-800">Company name</label>
                <input type="text" id="company" placeholder="Your company name" className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0055FF] focus:border-transparent transition-all shadow-sm" required />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="product" className="text-sm font-semibold text-slate-800">Product selection</label>
                <div className="relative">
                  <select id="product" className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0055FF] focus:border-transparent transition-all shadow-sm appearance-none" required defaultValue="">
                    <option value="" disabled>Select a product...</option>
                    <option value="thermal-mass">Thermal Mass Flow Meter</option>
                    <option value="electromagnetic">Electromagnetic Flow Meter</option>
                    <option value="ultrasonic">Ultrasonic Flow Meter</option>
                    <option value="orifice">Orifice Flow Meter</option>
                    <option value="other">Other / Not sure</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-800">Message</label>
                <textarea id="message" rows={4} placeholder="Leave us a message..." className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0055FF] focus:border-transparent transition-all shadow-sm resize-none" required></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full mt-4 py-4 bg-[#1e2022] hover:bg-black text-white font-semibold text-[1rem] rounded-xl transition-all shadow-md"
              >
                Send message
              </button>
            </form>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-7/12 mt-10 lg:mt-0 flex">
            <div className="rounded-[40px] overflow-hidden w-full h-full min-h-[400px] shadow-2xl">
              <img src="/contact_hero.png" alt="Manas Microsystems Engineers with Flowmeter" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </section>

      {/* Info Section */}
      <section className="container mx-auto px-6 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-t border-slate-200 pt-16">
          
          {/* E-mail */}
          <div className="flex flex-col pr-4">
            <h3 className="text-xl font-medium mb-3 text-slate-900 tracking-tight">E-mail</h3>
            <p className="text-[0.9rem] text-slate-500 font-medium leading-relaxed mb-6">
              Send us your question to our e-mail address
            </p>
            <a href="mailto:response@gasflowmeter.net" className="text-sm font-semibold text-slate-900 underline underline-offset-[6px] decoration-slate-300 hover:decoration-slate-900 transition-colors w-fit">
              response@gasflowmeter.net
            </a>
          </div>

          {/* Infoline */}
          <div className="flex flex-col pr-4">
            <h3 className="text-xl font-medium mb-3 text-slate-900 tracking-tight">Infoline</h3>
            <p className="text-[0.9rem] text-slate-500 font-medium leading-relaxed mb-6">
              In case of any questions, contact us by phone
            </p>
            <div className="flex flex-col gap-2 w-fit">
              <a href="tel:+9102027127044" className="text-sm font-semibold text-slate-900 underline underline-offset-[6px] decoration-slate-300 hover:decoration-slate-900 transition-colors">
                (020) 27127044/45
              </a>
              <a href="tel:+918530198128" className="text-sm font-semibold text-slate-900 underline underline-offset-[6px] decoration-slate-300 hover:decoration-slate-900 transition-colors">
                +91 85301 98128
              </a>
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-col pr-4">
            <h3 className="text-xl font-medium mb-3 text-slate-900 tracking-tight">Socials</h3>
            <p className="text-[0.9rem] text-slate-500 font-medium leading-relaxed mb-6">
              Here we lead an active social life, sign up
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/manasmicrosystems" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-[#0055FF] hover:-translate-y-1 transition-all shadow-md">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="https://x.com/ManasMktg" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-[#0055FF] hover:-translate-y-1 transition-all shadow-md">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
              </a>
              <a href="https://www.instagram.com/manas_microsystems" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-[#0055FF] hover:-translate-y-1 transition-all shadow-md">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/manas-microsystems-pvt-ltd" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-[#0055FF] hover:-translate-y-1 transition-all shadow-md">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://www.youtube.com/channel/UCkAb1Hs4EImjuq_0WHJbdOg" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-[#0055FF] hover:-translate-y-1 transition-all shadow-md">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.082 0 12 0 12s0 3.918.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.918 24 12 24 12s0-3.918-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col">
            <h3 className="text-xl font-medium mb-3 text-slate-900 tracking-tight">Address</h3>
            <p className="text-[0.9rem] text-slate-500 font-medium leading-relaxed mb-6">
              We invite you personally to our headquarters.
            </p>
            <a href="https://maps.google.com" target="_blank" className="text-sm font-semibold text-slate-900 underline underline-offset-[6px] decoration-slate-300 hover:decoration-slate-900 transition-colors leading-relaxed w-fit">
              EL-54, J block, Electronic Zone,<br/>M.I.D.C., Bhosari, Pune - 411 026.
            </a>
          </div>

        </div>
      </section>

      {/* Map Section */}
      <section className="container mx-auto px-6 max-w-7xl pt-10 pb-10">
        <div className="w-full rounded-[40px] overflow-hidden shadow-xl h-[450px] bg-slate-200 border border-slate-100 relative group">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.957642646399!2d73.8277259154181!3d18.62106728735072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8612140cce7%3A0x6778f30bb0bdf2!2sManas%20Microsystems%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin" 
             width="100%" 
             height="100%" 
             style={{ border: 0, filter: 'grayscale(0.4) contrast(1.1) opacity(0.9)' }} 
             allowFullScreen={false} 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
             className="group-hover:filter-none transition-all duration-500">
           </iframe>
        </div>
      </section>

    </main>
  );
}
