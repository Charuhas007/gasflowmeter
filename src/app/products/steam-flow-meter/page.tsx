import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  Factory,
  Thermometer,
  Waves,
} from 'lucide-react';
import SteamAdvantages from './SteamAdvantages';
import SteamComparison from './SteamComparison';
import SteamSelector from './SteamSelector';

const primaryKeywords = [
  'steam flow meter',
  'steam flow meter manufacturer in India',
  'compact steam flow meter',
  'orifice type steam flow meter',
  'saturated and superheated steam flow meter',
  'SFMc-150 steam flow meter',
];

const secondaryKeywords = [
  'steam mass flow meter',
  'saturated steam flow meter',
  'superheated steam flow meter',
  'online density compensation steam flow meter',
  'orifice steam flow meter',
  'differential pressure steam flow meter',
  'MODBUS RTU steam flow meter',
  'RS485 steam flow meter',
  'steam flow meter supplier in Pune',
  'steam flow meter exporter from India',
  'IBR approved steam flow meter optional',
  'BS1042 ISO5167 orifice flow meter',
  'thermic fluid flow meter',
  'thermic oil flow meter',
];

const keyFeatures = [
  'Suitable for saturated and superheated steam in closed pipes.',
  'Online density compensation using pressure and temperature measurement.',
  'Mass flow calculation based on ASME algorithm.',
  'Steam status indication for saturated or superheated steam.',
  'RS232 / RS485 communication with MODBUS RTU.',
  'Data logging facility with optional higher reading capacity.',
];

const applications = [
  {
    title: 'Boiler steam monitoring',
    copy: 'Track saturated or superheated steam consumption from boilers to process areas.',
    image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=900',
    icon: Factory,
  },
  {
    title: 'Process energy accounting',
    copy: 'Measure mass flow to allocate steam cost by department, equipment or production line.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=900',
    icon: ClipboardList,
  },
  {
    title: 'Superheated steam lines',
    copy: 'Use pressure and temperature inputs to support compensated readings in superheated service.',
    image: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?auto=format&fit=crop&q=80&w=900',
    icon: Thermometer,
  },
  {
    title: 'Thermic fluid and oil',
    copy: 'The same platform can support thermic fluid or thermic oil heat-transfer measurement applications.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&q=80&w=900',
    icon: Waves,
  },
];

const specs = [
  ['Model', 'SFMc-150 Steam Flow Meter System'],
  ['Service', 'Saturated, superheated steam and thermic fluid in closed pipes'],
  ['Size', '1 inch to 10 inch'],
  ['Type of flow element', 'Differential flow element'],
  ['MOC of flow element', 'SS 316'],
  ['End connection', 'SORF flange'],
  ['MOC of flanges', 'M.S / C.S / S.S'],
  ['Flange rating', 'Class 150; others on request'],
  ['Orifice flange assembly', 'WNRF Class 300'],
  ['DPT', 'With display'],
  ['Data logging', '4900 readings or 9800 readings optional'],
  ['Communication port', 'RS485, RS232 optional'],
  ['Communication protocol', 'MODBUS RTU'],
  ['Design standard', 'BS 1042 / ISO 5167'],
  ['Accuracy', '+/- 2.5% to 3% of actual reading'],
  ['Typical turndown', '10:3 standard; 10:1 on request'],
  ['Density compensation', 'Online monitoring and compensation of density'],
  ['Temperature', 'Up to 70 deg C'],
  ['Power supply', '85 to 265 VAC at 50 Hz'],
];

const faqs = [
  {
    question: 'Why is accurate steam flow measurement important?',
    answer:
      'Accurate steam flow measurement is important for energy efficiency, process optimization and cost control. It helps industries monitor steam consumption, identify losses and keep equipment operating efficiently.',
  },
  {
    question: 'How does the compact steam flow meter calculate mass flow?',
    answer:
      'The mass flow rate of saturated and superheated steam is calculated by measuring differential pressure across the orifice plate and instantaneous density. Online density compensation is possible through pressure and temperature measurement.',
  },
  {
    question: 'What is the SFMc-150 steam flow meter used for?',
    answer:
      'The SFMc-150 steam flow meter is used to measure saturated steam, superheated steam and thermic fluid flow in closed conduits.',
  },
  {
    question: 'What are the advantages of this steam flow meter?',
    answer:
      'It offers online density compensation, easy installation, no moving parts, no wiring connections required during installation, data logging, MODBUS communication and engineered orifice assemblies.',
  },
  {
    question: 'Can this system measure fluids besides steam?',
    answer:
      'Yes. It can also be configured for thermic fluid or thermic oil flow measurement for heat-transfer applications.',
  },
];

export const metadata: Metadata = {
  title: 'Steam Flow Meter Manufacturer in India | SFMc-150 System',
  description:
    'Manufacturer, supplier and exporter of SFMc-150 steam flow meters from Pune, India. Orifice-based DP system for saturated and superheated steam with density compensation.',
  keywords: [...primaryKeywords, ...secondaryKeywords].join(', '),
};

export default function SteamFlowMeterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        name: 'SFMc-150 Compact Steam Flow Meter',
        brand: { '@type': 'Brand', name: 'Manas Microsystems' },
        description:
          'SFMc-150 steam flow meter system for saturated and superheated steam using differential pressure across an orifice plate and online density compensation.',
        category: 'Industrial Steam Flow Measurement',
        manufacturer: {
          '@type': 'Organization',
          name: 'Manas Microsystems',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Pune',
            addressRegion: 'Maharashtra',
            addressCountry: 'IN',
          },
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F4F7FB] text-slate-900 selection:bg-cyan-100 font-sans overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section
        className="relative flex items-center overflow-hidden border-b border-slate-200"
        style={{ height: '300px', minHeight: '300px', maxHeight: '300px' }}
      >
        <div className="absolute inset-0 bg-[#0f766e]/50 z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=1920"
          alt="Steam flow meter installed in industrial boiler utility system"
          className="absolute inset-0 w-full h-full object-cover z-0 grayscale"
        />
        <div className="container mx-auto px-6 max-w-7xl relative z-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-thin text-white tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            Steam Flow Meter for Saturated and Superheated Steam
          </h1>
          <p className="text-cyan-300 font-light mt-4 text-lg tracking-widest uppercase drop-shadow-md">
            SFMc-150 | Saturated & Superheated Steam
          </p>
        </div>
      </section>

      <div className="bg-[#F4F7FB] pt-8 pb-4 relative z-30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="bg-white border border-slate-200 shadow-sm rounded-lg py-3 px-5 flex flex-wrap items-center text-sm font-medium text-slate-500">
            <Link href="/" className="hover:text-cyan-600 cursor-pointer transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-slate-400" />
            <Link href="/products" className="hover:text-cyan-600 cursor-pointer transition-colors">
              Products
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-slate-400" />
            <span className="text-cyan-600">Steam Flow Meter</span>
          </div>
        </div>
      </div>

      <section className="py-16 bg-[#F4F7FB]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-16 items-center">
            <div className="flex justify-center p-8 bg-white border border-slate-200 rounded-2xl relative group shadow-sm overflow-hidden">
              <div className="absolute inset-0 bg-cyan-100 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              <img
                src="/products/compact-steam-flow-meter1.jpg"
                alt="SFMc-150 compact steam flow meter product"
                className="w-full max-w-[390px] object-contain relative z-10 hover:scale-105 transition-transform duration-500 mix-blend-multiply"
              />
            </div>

            <div>
              <p className="text-cyan-600 font-bold text-sm tracking-widest uppercase mb-2">Product Description</p>
              <h2 className="text-3xl font-light text-slate-900 mb-6">
                Engineered steam mass flow measurement for closed pipelines
              </h2>
              <p className="text-slate-600 font-light leading-relaxed mb-6 text-lg">
                Manas Microsystem Pvt. Ltd. manufactures, supplies and exports <strong className="text-slate-900 font-semibold">SFMc-150 Steam Flow Meters</strong> from Pune, Maharashtra, India for saturated steam, superheated steam and thermic fluid applications. The engineered orifice-based DP system is built with no moving parts and designed for easy installation.
              </p>
              <p className="text-slate-600 font-light leading-relaxed">
                The system measures differential pressure across an orifice plate and combines it with instantaneous density from online pressure and temperature inputs. This allows compensated steam mass flow measurement in closed pipelines where standards-based design and maintainable field instrumentation matter.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-colors focus:ring-4 focus:ring-cyan-500/20 shadow-lg shadow-cyan-500/30 w-full sm:w-auto text-center"
                >
                  Request Quote
                </Link>
                <a
                  href="#steam-selector"
                  className="px-8 py-3.5 bg-white text-slate-700 font-medium rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors flex items-center justify-center group w-full sm:w-auto shadow-sm"
                >
                  Configure Package <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative border-y border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-start">
            <div>
              <p className="text-cyan-600 font-bold text-sm tracking-widest uppercase mb-2">Working Principle</p>
              <div className="w-12 h-1 bg-cyan-500 mb-8 rounded-full"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Online density compensation for saturated and superheated steam
              </h2>
              <div className="space-y-6 text-slate-600 font-light leading-relaxed">
                <p className="text-xl text-slate-800 font-normal">
                  Steam density changes with operating pressure and temperature. The compact steam flow meter measures these inputs online so mass flow can be compensated at the instrument.
                </p>
                <p className="text-lg">
                  The DP signal across the orifice plate, line pressure and temperature are combined to calculate compensated mass flow rate, density, temperature and transmitter output on the local display.
                </p>
                <p className="text-lg">
                  The system supports ASME-based mass flow calculation, steam status indication, user-friendly programming and practical field serviceability for industrial steam users.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8 shadow-sm">
              <h3 className="text-2xl font-light text-slate-900 mb-8">Key Features</h3>
              <div className="space-y-5">
                {keyFeatures.map((feature) => (
                  <div key={feature} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-slate-600 font-light leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="steam-selector" className="py-24 bg-[#F4F7FB] border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <SteamSelector />
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white relative border-b border-slate-200 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <SteamAdvantages />
        </div>
      </section>

      <section className="py-24 bg-[#F4F7FB] overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <p className="text-cyan-600 font-bold text-sm tracking-widest uppercase mb-2">Applications</p>
              <h2 className="text-3xl md:text-5xl font-light mb-4 text-slate-900">
                Where steam measurement protects energy cost
              </h2>
            </div>
            <p className="text-slate-600 text-lg font-light max-w-xl lg:text-right">
              Use compact steam flow meters for utility monitoring, process accounting and heat-transfer applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 auto-rows-[320px] gap-6">
            {applications.map((application, index) => {
              const Icon = application.icon;
              const isFeature = index === 0;

              return (
                <div
                  key={application.title}
                  className={`group relative overflow-hidden rounded-[2rem] border border-white bg-white shadow-sm hover:shadow-xl hover:shadow-cyan-900/10 transition-all duration-500 ${isFeature ? 'md:col-span-2 lg:row-span-2' : ''}`}
                >
                  <img
                    src={application.image}
                    alt={`${application.title} steam flow measurement`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 p-5 shadow-lg">
                      <div className="w-11 h-11 bg-cyan-50 text-cyan-700 rounded-xl flex items-center justify-center mb-4 border border-cyan-100">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className={`${isFeature ? 'text-3xl' : 'text-xl'} font-light text-slate-950 leading-tight mb-2`}>
                        {application.title}
                      </h3>
                      <p className="text-slate-600 text-sm font-light leading-relaxed">{application.copy}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="steam-comparison" className="py-24 bg-white border-y border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <SteamComparison />
        </div>
      </section>

      <section className="py-24 bg-[#F4F7FB]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <p className="text-cyan-600 font-bold text-sm tracking-widest uppercase mb-2">Technical Data</p>
              <h2 className="text-3xl md:text-4xl font-light mb-4 text-slate-900">Compact Steam Flow Meter Specifications</h2>
              <p className="text-slate-600 text-lg font-light max-w-2xl">
                Standard specifications are listed below. Final configuration can be engineered around application, steam condition and approval requirements.
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-sm">
            <div className="grid md:grid-cols-2">
              {specs.map(([label, value], index) => (
                <div
                  key={label}
                  className={`grid grid-cols-[0.8fr_1.2fr] gap-4 p-5 border-slate-200 ${index % 2 === 0 ? 'bg-slate-50/70' : 'bg-white'} ${index < specs.length - 1 ? 'border-b' : ''} md:[&:nth-child(odd)]:border-r`}
                >
                  <div className="font-semibold text-slate-900">{label}</div>
                  <div className="text-slate-600 font-light">{value}</div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-slate-500 text-sm font-light mt-5">Specifications are subject to change without prior notice.</p>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-600 font-light">
              Direct answers for boiler, utility and process teams evaluating compact steam flow meters.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-slate-50 border border-slate-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden hover:border-cyan-500/30 transition-colors shadow-sm"
              >
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer font-medium text-slate-900 select-none text-lg">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 text-slate-400 group-open:-rotate-180 transition-transform duration-300 shrink-0" />
                </summary>
                <div className="px-6 pb-6 text-slate-600 font-light text-[15px] leading-relaxed border-t border-slate-200 mt-2 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#F4F7FB] border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-4 bg-white border border-slate-200 rounded-full py-2 px-6 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 font-bold text-sm">
              MM
            </div>
            <div className="text-left">
              <p className="text-slate-900 text-sm font-medium">Verified by Manas Engineering</p>
              <p className="text-slate-500 text-xs">ISO 9001:2015 steam instrumentation with BS1042 / ISO5167 design basis</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
