import Script from "next/script";

export default function Home() {
  const jsonLdProduct = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Thermal Mass Flow Meter",
    "brand": {
      "@type": "Brand",
      "name": "Manas Microsystems"
    },
    "description": "High-precision gas mass flow meter with 100:1 turndown and NIST traceability. Ideal for biogas, compressed air, and flare gas monitoring.",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "lastReviewed": new Date().toISOString().split('T')[0]
    }
  };

  return (
    <main>
      <Script
        id="schema-product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }}
      />

      {/* Hero Section (Matching Reference Design) */}
      <section className="hero container" id="overview" style={{ padding: '4rem 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url("/manas-hero-contour-m-bg-1920x900.webp")', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.5, zIndex: -2 }}></div>
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(0,85,255,0.05) 0%, rgba(255,255,255,0) 70%)', zIndex: -1, borderRadius: '50%' }}></div>
        <div className="hero-grid">
          <div className="hero-content">
            <span className="section-label">PRECISION IN EVERY MEASUREMENT</span>
            <h1 className="animate-fade-in delay-1" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', lineHeight: 1.1, marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Thermal Mass <br/>
              Flow Meters
            </h1>
            <h2 className="animate-fade-in delay-1" style={{ color: 'var(--text-primary)', fontSize: '1.4rem', fontWeight: 600, marginTop: '1rem', maxWidth: '600px' }}>
              Engineered for Accuracy. Built for Reliability.
            </h2>
            <p className="animate-fade-in delay-2" style={{ maxWidth: '600px', margin: '1rem 0 2rem', fontSize: '1.05rem', color: 'var(--text-secondary)' }}>
              Advanced Thermal Mass Flow Meters for accurate gas flow measurement in industrial applications.
            </p>
            
            {/* 4 Small Icons under text */}
            <div className="animate-fade-in delay-2" style={{ display: 'flex', gap: '2rem', marginBottom: '2.5rem' }}>
              <div style={{ textAlign: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                <div style={{ fontSize: '0.75rem', marginTop: '0.5rem', fontWeight: 600 }}>High Accuracy</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <div style={{ fontSize: '0.75rem', marginTop: '0.5rem', fontWeight: 600 }}>Reliable Performance</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                <div style={{ fontSize: '0.75rem', marginTop: '0.5rem', fontWeight: 600 }}>Easy Integration</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                <div style={{ fontSize: '0.75rem', marginTop: '0.5rem', fontWeight: 600 }}>German Engineering</div>
              </div>
            </div>

            <div className="hero-actions animate-fade-in delay-3" style={{ marginTop: 0 }}>
              <button className="btn btn-primary" style={{ padding: '0.75rem 1.5rem' }}>
                Explore Products
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '0.5rem' }}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              <button className="btn btn-outline" style={{ padding: '0.75rem 1.5rem', borderColor: 'var(--primary)', color: 'var(--primary)' }}>
                Download Brochure
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '0.5rem' }}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              </button>
            </div>
          </div>
          
          <div className="hero-image animate-fade-in delay-3" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <img src="/products/thermal-dispersion-mass-flowmeters.webp" alt="Thermal Mass Flow Meters" style={{ width: '100%', maxWidth: '550px', height: 'auto', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))', mixBlendMode: 'multiply' }} />
          </div>
        </div>
      </section>

      {/* Our Products - Cards Section */}
      <section className="section products-section" style={{ padding: '5rem 0', position: 'relative', overflow: 'hidden', background: '#f8fafc' }}>
        {/* Background wave decorative element */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url("/wave-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          opacity: 0.25,
          mixBlendMode: 'multiply',
          filter: 'contrast(1.2)',
          pointerEvents: 'none',
          zIndex: 0
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="section-header" style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <span className="section-label" style={{ color: '#10B981' }}>OUR PRODUCTS</span>
              <h2 style={{ fontSize: '2.8rem', color: '#0F172A', maxWidth: '700px', lineHeight: 1.1, marginBottom: 0 }}>Precision Instruments for Every Application</h2>
            </div>
            <a href="/products" className="btn btn-dark-blue">
              VIEW ALL PRODUCTS
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '0.5rem' }}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>

          <div className="card-grid">
            <div className="product-card">
              <div className="product-card-img-container">
                <img src="/products/thermal-dispersion-mass-flowmeter.jpg" alt="Scirocco 1000" />
              </div>
              <h3 style={{ color: '#0F172A', fontWeight: 800 }}>Scirocco 1000</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem' }}>Compact insertion type thermal mass flow meter for precise industrial gas measurement.</p>
              <a href="#" className="link-arrow" style={{ color: '#1e3a8a', marginTop: 'auto' }}>Learn More <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            </div>
            <div className="product-card">
              <div className="product-card-img-container">
                <img src="/products/gasflowmeters.jpg" alt="Industrial Flow Meter" />
              </div>
              <h3 style={{ color: '#0F172A', fontWeight: 800 }}>Industrial Gas Flow Meter</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem' }}>Robust in-line thermal mass flow meter optimized for severe industrial gas applications.</p>
              <a href="#" className="link-arrow" style={{ color: '#1e3a8a', marginTop: 'auto' }}>Learn More <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            </div>
            <div className="product-card">
              <div className="product-card-img-container">
                <img src="/products/compact-steam-flow-meter1.jpg" alt="Compact Steam Flow Meter" />
              </div>
              <h3 style={{ color: '#0F172A', fontWeight: 800 }}>Compact Steam Flow Meter</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem' }}>Remote mounted electronics unit designed for hazardous and extreme high-temp areas.</p>
              <a href="#" className="link-arrow" style={{ color: '#1e3a8a', marginTop: 'auto' }}>Learn More <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            </div>
            <div className="product-card">
              <div className="product-card-img-container">
                <img src="/products/air1.png" alt="Insertion Air Flow Meter" />
              </div>
              <h3 style={{ color: '#0F172A', fontWeight: 800 }}>Insertion Air Flow Meter</h3>
              <p style={{ color: '#475569', fontSize: '0.95rem' }}>Ideal for large pipe diameters and ducts with absolutely minimal pressure drop.</p>
              <a href="#" className="link-arrow" style={{ color: '#1e3a8a', marginTop: 'auto' }}>Learn More <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Bento Features Section */}
      <section className="container" style={{ padding: '6rem 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem' }}>The Manas Advantage</span>
          <h2 style={{ fontSize: '3rem', color: '#0F172A', marginTop: '0.5rem', lineHeight: 1.2, fontWeight: 800 }}>Engineering Excellence</h2>
        </div>
        
        <div className="bento-grid">
          {/* Card 1: Large */}
          <div className="bento-card bento-large">
            <div className="bento-bg-glow"></div>
            <div>
              <div className="bento-icon-wrapper" style={{ background: 'rgba(255,255,255,0.1)', color: 'white' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
              </div>
            </div>
            <div style={{ position: 'relative', zIndex: 10 }}>
              <h3 className="bento-title">Accurate Measurement</h3>
              <p className="bento-desc">High precision thermal dispersion flow measurement engineered for exact gas monitoring across all industrial pipelines.</p>
            </div>
            <svg className="bento-decor" viewBox="0 0 100 100" style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '300px', height: '300px', opacity: 0.05, color: 'white' }}>
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
              <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>

          {/* Card 2: Wide */}
          <div className="bento-card bento-wide">
            <div className="bento-content-row">
              <div className="bento-icon-wrapper" style={{ background: 'rgba(0,85,255,0.1)', color: 'var(--primary)' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
              </div>
              <div>
                <h3 className="bento-title">Smart Technology</h3>
                <p className="bento-desc">Advanced microprocessor-based electronics featuring wireless data transfer, mobile app readings, and RS-485 network integration.</p>
              </div>
            </div>
          </div>

          {/* Card 3: Small 1 */}
          <div className="bento-card bento-small" style={{ background: '#F8FAFC' }}>
            <div className="bento-icon-wrapper" style={{ background: 'white', color: '#10B981', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
            </div>
            <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
              <h3 className="bento-title" style={{ fontSize: '1.25rem' }}>Rugged & Reliable</h3>
              <p className="bento-desc" style={{ fontSize: '0.9rem' }}>Built to perform flawlessly in demanding, high-pressure environments.</p>
            </div>
          </div>

          {/* Card 4: Small 2 */}
          <div className="bento-card bento-small">
             <div className="bento-icon-wrapper" style={{ background: 'rgba(0,85,255,0.1)', color: 'var(--primary)' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </div>
            <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
              <h3 className="bento-title" style={{ fontSize: '1.25rem' }}>Global Support</h3>
              <p className="bento-desc" style={{ fontSize: '0.9rem' }}>24/7 expert technical support across 30+ countries worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section style={{ padding: '6rem 0', backgroundColor: '#FFFFFF', backgroundImage: 'url(/wave-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center top', backgroundRepeat: 'no-repeat', backgroundBlendMode: 'multiply' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '3rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ maxWidth: '600px' }}>
            <div style={{ color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem', display: 'flex', alignItems: 'center', marginBottom: '0.75rem' }}>
              <span style={{ width: '20px', height: '2px', backgroundColor: 'var(--primary)', marginRight: '10px' }}></span>
              INDUSTRIES WE SERVE
            </div>
            <h2 style={{ fontSize: '3rem', color: '#0F172A', lineHeight: 1.1, marginBottom: '1rem' }}>
              Solutions Across <br/>
              Diverse <span style={{ color: 'var(--primary)' }}>Industries</span>
            </h2>
            <p style={{ color: '#475569', fontSize: '1.05rem', margin: 0 }}>
              Engineered solutions that power performance, optimize operations, and drive progress across a wide range of industries.
            </p>
          </div>
          <a href="/applications" className="link-arrow" style={{ marginTop: '0.5rem', fontWeight: 600 }}>
            View All Applications <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
        
        <div className="new-industry-grid">
          {/* Item 1 */}
          <div className="new-industry-card">
            <div className="new-industry-img">
              <img src="/industries/ind_automation_1779470091440.png" alt="Industrial Automation" />
            </div>
            <div className="new-industry-content">
              <div className="new-industry-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="14" width="16" height="8" rx="2" ry="2"></rect><rect x="8" y="2" width="8" height="12" rx="2" ry="2"></rect><line x1="12" y1="14" x2="12" y2="22"></line></svg>
              </div>
              <h3 className="new-industry-title">Industrial<br/>Automation</h3>
            </div>
          </div>
          {/* Item 2 */}
          <div className="new-industry-card">
            <div className="new-industry-img">
              <img src="/industries/ind_oil_gas_1779470109757.png" alt="Oil & Gas Refineries" />
            </div>
            <div className="new-industry-content">
              <div className="new-industry-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <h3 className="new-industry-title">Oil & Gas<br/>Refineries</h3>
            </div>
          </div>
          {/* Item 3 */}
          <div className="new-industry-card">
            <div className="new-industry-img">
              <img src="/industries/ind_chemical_1779470126973.png" alt="Chemical Processing" />
            </div>
            <div className="new-industry-content">
              <div className="new-industry-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 3H4v4l6 14h5l6-14V3h-5M4 7h16"></path></svg>
              </div>
              <h3 className="new-industry-title">Chemical<br/>Processing</h3>
            </div>
          </div>
          {/* Item 4 */}
          <div className="new-industry-card">
            <div className="new-industry-img">
              <img src="/industries/ind_pharma_1779470144938.png" alt="Pharmaceuticals" />
            </div>
            <div className="new-industry-content">
              <div className="new-industry-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
              </div>
              <h3 className="new-industry-title">Pharmaceuticals</h3>
            </div>
          </div>
          {/* Item 5 */}
          <div className="new-industry-card">
            <div className="new-industry-img">
              <img src="/industries/ind_food_1779470160475.png" alt="Food & Beverage" />
            </div>
            <div className="new-industry-content">
              <div className="new-industry-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h4zM3 19a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H5z"></path></svg>
              </div>
              <h3 className="new-industry-title">Food &<br/>Beverage</h3>
            </div>
          </div>
          {/* Item 6 */}
          <div className="new-industry-card">
            <div className="new-industry-img">
              <img src="/industries/ind_energy_1779470175727.png" alt="Energy & Utilities" />
            </div>
            <div className="new-industry-content">
              <div className="new-industry-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              </div>
              <h3 className="new-industry-title">Energy &<br/>Utilities</h3>
            </div>
          </div>
        </div>
      </div>
      </section>


      {/* Why Choose Us - Split Section */}
      <section className="container">
        <div className="split-section">
          <div>
            <span className="section-label">WHY CHOOSE MANAS MICRO</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>German Engineering.<br/>Trusted Worldwide.</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              Manas Baumer Group combines German engineering excellence with local expertise to deliver innovative and reliable flow measurement solutions.
            </p>
            
            <ul className="check-list">
              <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> German Technology & Quality</li>
              <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Innovative & Reliable Solutions</li>
              <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Customer-Centric Approach</li>
              <li><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> Global Presence, Local Support</li>
            </ul>
            
            <button className="btn btn-outline" style={{ marginTop: '1rem', borderColor: 'var(--primary)', color: 'var(--primary)' }}>
              Learn More About Us <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '0.5rem' }}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
          
          <div className="split-image">
            <div style={{ height: '400px', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#94a3b8' }}>Industrial Plant Image Placeholder</span>
            </div>
            <div className="play-button">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </div>
          </div>
        </div>
      </section>
      {/* Bottom Stats Banner & Downloads */}
      <section className="container">
        {/* Dark Stats Banner */}
        <div className="dark-stats-banner">
          <div className="dark-stats-item">
            <div className="dark-stats-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
            </div>
            <div className="dark-stats-content">
              <div className="dark-stats-number">25+</div>
              <div className="dark-stats-text">Years of<br/>Excellence</div>
            </div>
          </div>
          
          <div className="dark-stats-divider"></div>
          
          <div className="dark-stats-item">
            <div className="dark-stats-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <div className="dark-stats-content">
              <div className="dark-stats-number">2000+</div>
              <div className="dark-stats-text">Installations<br/>Worldwide</div>
            </div>
          </div>
          
          <div className="dark-stats-divider"></div>
          
          <div className="dark-stats-item">
            <div className="dark-stats-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
            </div>
            <div className="dark-stats-content">
              <div className="dark-stats-number">30+</div>
              <div className="dark-stats-text">Countries<br/>Served</div>
            </div>
          </div>
          
          <div className="dark-stats-divider"></div>
          
          <div className="dark-stats-item">
            <div className="dark-stats-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </div>
            <div className="dark-stats-content">
              <div className="dark-stats-number">100%</div>
              <div className="dark-stats-text">Quality<br/>Commitment</div>
            </div>
          </div>
          
          <div className="dark-stats-divider"></div>
          
          <div className="dark-stats-item">
            <div className="dark-stats-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <div className="dark-stats-content">
              <div className="dark-stats-number">24/7</div>
              <div className="dark-stats-text">Customer<br/>Support</div>
            </div>
          </div>
        </div>

        {/* Downloads & Resources */}
        <div className="downloads-section">
          <div className="downloads-left">
            <h3>Downloads & Resources</h3>
            <p>Brochures, datasheets, manuals and certificates at your fingertips.</p>
            <button className="btn btn-outline" style={{ borderColor: '#1E40AF', color: '#1E40AF', padding: '0.6rem 1.25rem', fontSize: '0.9rem' }}>
              Explore Downloads <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '0.5rem' }}><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
          
          <div className="downloads-cards">
            <div className="download-card">
              <div className="download-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#EF4444" stroke="white" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <div className="download-title">Product Brochure</div>
              <div className="download-meta">PDF 2.4 MB</div>
            </div>
            
            <div className="download-card">
              <div className="download-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#3B82F6" stroke="white" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <div className="download-title">Datasheets</div>
              <div className="download-meta">PDF 1.8 MB</div>
            </div>
            
            <div className="download-card">
              <div className="download-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#10B981" stroke="white" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <div className="download-title">User Manuals</div>
              <div className="download-meta">PDF 3.1 MB</div>
            </div>
            
            <div className="download-card">
              <div className="download-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="#F59E0B" stroke="white" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </div>
              <div className="download-title">Certificates</div>
              <div className="download-meta">PDF 1.2 MB</div>
            </div>
          </div>
          
          <div className="downloads-right">
            <img src="/brochure-mockup.png" alt="Brochures Mockup" />
          </div>
        </div>
      </section>

    </main>
  );
}
