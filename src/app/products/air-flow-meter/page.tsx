import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  Activity,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Factory,
  Gauge,
  Radio,
  SearchCheck,
  Settings,
  TrendingDown,
  Zap,
} from 'lucide-react';
import AirFlowEstimator from './AirFlowEstimator';

const primaryKeywords = [
  'Air flow meters',
  'Compact air flow meters',
  'Compressed air flow meter',
  'Thermal mass air flow meter',
  'Air flow meter manufacturer in Pune',
];

const secondaryKeywords = [
  'Compressed air consumption monitoring',
  'Compressed air leak identification',
  'Industrial air flow measurement',
  'Mass flow measurement for compressed air',
  'RS485 air flow meter',
  'Wireless air flow meter readings',
  'Compressor performance testing',
  'Energy consumption tracking for compressed air',
  'Air flow meter supplier in Maharashtra',
  'Air flow meter exporter from India',
];

const keyFeatures = [
  'Direct mass flow measurement for compressed air.',
  'No separate pressure or temperature compensation required.',
  '20:1 turndown ratio for practical plant operating ranges.',
  'Wireless data transfer and remote reading capability.',
  'Pulse, mA and RS485 outputs for plant networking.',
  'Useful for consumption monitoring, leak identification and compressor performance testing.',
];

const benefits = [
  {
    title: 'Control utility cost',
    copy: 'Compressed air is one of the costliest industrial utilities. Flow measurement helps teams track where air is used, when demand peaks and where expenditure can be reduced.',
    icon: TrendingDown,
  },
  {
    title: 'Detect invisible leakage',
    copy: 'Leaks are difficult to see without data. A compressed air flow meter makes abnormal consumption visible across compressors, headers, machines and departments.',
    icon: SearchCheck,
  },
  {
    title: 'Improve compressor performance',
    copy: 'Flow data supports compressor testing, demand analysis and maintenance planning by showing total usage, peak consumption and operating trends.',
    icon: Gauge,
  },
  {
    title: 'Connect to plant systems',
    copy: 'Pulse, mA and RS485 output options help integrate compressed-air flow readings into dashboards, data loggers, PLCs and monitoring systems.',
    icon: Radio,
  },
];

const applications = [
  {
    title: 'Textile process machines',
    copy: 'Track air demand at weaving, spinning and process machines to understand machine-level consumption.',
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1519822472072-ec86d5ab6f5c?auto=format&fit=crop&q=80&w=900',
    signal: 'Machine-level demand',
  },
  {
    title: 'Automobile plants',
    copy: 'Monitor compressed air usage in production lines, pneumatic tools and utility headers.',
    icon: Settings,
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=900',
    signal: 'Line usage visibility',
  },
  {
    title: 'Compressor leak checks',
    copy: 'Identify unexpected flow during idle periods and prioritize leak inspection routes.',
    icon: SearchCheck,
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&q=80&w=900',
    signal: 'Idle-flow alerts',
  },
  {
    title: 'Compressor performance testing',
    copy: 'Use flow trends to evaluate compressor output, loading patterns and system demand.',
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=900',
    signal: 'Output trend checks',
  },
  {
    title: 'Energy consumption tracking',
    copy: 'Convert flow visibility into better energy-accounting and improvement planning.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=900',
    signal: 'Energy-accounting data',
  },
  {
    title: 'Plant usage analysis',
    copy: 'Compare total and peak consumption across departments, shifts and production areas.',
    icon: BarChart3,
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=900',
    signal: 'Peak demand mapping',
  },
];

const specs = [
  ['Measurement type', 'Direct mass flow measurement'],
  ['Medium', 'Compressed air'],
  ['Compensation', 'No pressure or temperature compensation required'],
  ['Turndown ratio', '20:1'],
  ['Remote reading', 'Wireless data transfer available'],
  ['Outputs', 'Pulse, mA and RS485'],
  ['Typical use', 'Consumption monitoring, leak identification and compressor testing'],
  ['Manufacturer location', 'Pune, Maharashtra, India'],
];

const faqs = [
  {
    question: 'Why is accurate compressed air flow measurement important?',
    answer:
      'Accurate compressed air flow measurement helps industries understand air usage, track consumption cost, identify peak demand and find areas where energy may be wasted.',
  },
  {
    question: 'What happens when a compressed air system is poorly managed?',
    answer:
      'Poor management can lead to undetected leaks, higher energy expenditure, inefficient compressor operation and limited visibility into actual air consumption.',
  },
  {
    question: 'How does monitoring compressed air usage help?',
    answer:
      'Monitoring provides data on total consumption, peak consumption and machine or department-level demand, helping teams improve productivity, reduce wastage and evaluate compressor performance.',
  },
  {
    question: 'How does a thermal mass air flow meter measure compressed air?',
    answer:
      'A thermal mass air flow meter measures air mass flow directly. Because the measurement is based on mass flow, separate pressure and temperature compensation is not required for compressed air monitoring.',
  },
  {
    question: 'Where are Manas air flow meters commonly used?',
    answer:
      'They are used for textile process machines, automobile compressed air usage, compressor leak identification, compressor performance testing and energy consumption tracking.',
  },
];

export const metadata: Metadata = {
  title: 'Air Flow Meters | Compact Compressed Air Flow Meter Manufacturer',
  description:
    'Manas manufactures, supplies and exports compact air flow meters from Pune, Maharashtra for compressed air monitoring, leak identification, consumption tracking and compressor performance testing.',
  keywords: [...primaryKeywords, ...secondaryKeywords].join(', '),
};

export default function AirFlowMeterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        name: 'Air Flow Meters for Compressed Air Monitoring',
        brand: { '@type': 'Brand', name: 'Manas Microsystems' },
        description:
          'Compact air flow meters for direct mass flow measurement of compressed air, consumption monitoring, leak identification and compressor performance testing.',
        category: 'Industrial Air Flow Measurement',
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
        <div className="absolute inset-0 bg-[#0f766e]/55 z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1920"
          alt="Compressed air flow meter in industrial utility system"
          className="absolute inset-0 w-full h-full object-cover z-0 grayscale"
        />
        <div className="container mx-auto px-6 max-w-7xl relative z-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-thin text-white tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            Air Flow Meters for Compressed Air Monitoring
          </h1>
          <p className="text-cyan-300 font-light mt-4 text-lg tracking-widest uppercase drop-shadow-md">
            Direct Mass Flow Measurement
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
            <span className="text-cyan-600">Air Flow Meter</span>
          </div>
        </div>
      </div>

      <section className="py-16 bg-[#F4F7FB]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-16 items-center">
            <div className="flex justify-center p-8 bg-white border border-slate-200 rounded-2xl relative group shadow-sm overflow-hidden">
              <div className="absolute inset-0 bg-cyan-100 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              <img
                src="/products/air1.png"
                alt="Compact air flow meter product"
                className="w-full max-w-[380px] object-contain relative z-10 hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div>
              <p className="text-cyan-600 font-bold text-sm tracking-widest uppercase mb-2">Product Description</p>
              <h2 className="text-3xl font-light text-slate-900 mb-6">
                Compact air flow meters for industrial compressed air systems
              </h2>
              <p className="text-slate-600 font-light leading-relaxed mb-6 text-lg">
                Manas manufactures, supplies and exports <strong className="text-slate-900 font-semibold">Compact Air Flow Meters</strong> and air flow meters for industrial compressed air measurement. These instruments help plants monitor consumption, identify wastage and understand how compressed air is being used across machines, lines and departments.
              </p>
              <p className="text-slate-600 font-light leading-relaxed">
                The meter is designed for direct mass flow measurement, helping compressed air users monitor flow without separate pressure or temperature compensation. It is a practical fit for consumption tracking, leakage identification, compressor testing and energy management programs.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-colors focus:ring-4 focus:ring-cyan-500/20 shadow-lg shadow-cyan-500/30 w-full sm:w-auto text-center"
                >
                  Request Quote
                </Link>
                <a
                  href="#air-estimator"
                  className="px-8 py-3.5 bg-white text-slate-700 font-medium rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors flex items-center justify-center group w-full sm:w-auto shadow-sm"
                >
                  Estimate Air Usage <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
              <p className="text-cyan-600 font-bold text-sm tracking-widest uppercase mb-2">Why Measure Compressed Air?</p>
              <div className="w-12 h-1 bg-cyan-500 mb-8 rounded-full"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Find the energy cost hiding in invisible air leaks
              </h2>
              <div className="space-y-6 text-slate-600 font-light leading-relaxed">
                <p className="text-xl text-slate-800 font-normal">
                  Compressed air is one of the costliest utilities in many industrial facilities, and leaks are often invisible until they show up as higher energy expenditure.
                </p>
                <p className="text-lg">
                  With accurate compressed air flow measurement, maintenance and energy teams can track total consumption, peak demand, productivity, expenditure and improvement opportunities across production areas.
                </p>
                <p className="text-lg">
                  The result is better visibility for compressor operation, machine-level usage, leak reduction work and plant-wide energy management.
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

      <section id="air-estimator" className="py-24 bg-[#F4F7FB]">
        <div className="container mx-auto px-6 max-w-7xl">
          <AirFlowEstimator />
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white relative border-y border-slate-200 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="mb-16 md:mb-24">
            <p className="text-emerald-500 font-medium mb-3 tracking-wide text-sm md:text-base uppercase">
              Operational Benefits
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-[#1c2c5b] tracking-tight">
              Turn compressed air into measurable data
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-end">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const styles = [
                'bg-[#ecfdf5] border-emerald-50 lg:min-h-[380px] text-slate-800',
                'bg-[#e0f2fe] border-sky-50 lg:min-h-[440px] text-slate-800',
                'bg-[#334155] border-slate-700 lg:min-h-[500px] text-white',
                'bg-[#1c2c5b] border-[#1c2c5b] lg:min-h-[560px] text-white',
              ][index];

              return (
                <div
                  key={benefit.title}
                  className={`rounded-[2rem] p-8 md:p-10 flex flex-col justify-start w-full shadow-[0_8px_30px_rgb(0,0,0,0.03)] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 border ${styles}`}
                >
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-6 leading-tight">{benefit.title}</h3>
                    <p className={`${index > 1 ? 'text-slate-300' : 'text-slate-600'} leading-relaxed text-[15px]`}>
                      {benefit.copy}
                    </p>
                  </div>
                  <Icon className="w-48 h-48 opacity-10 absolute -bottom-10 -right-10 z-0 group-hover:scale-110 transition-transform duration-700" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F4F7FB] overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <p className="text-cyan-600 font-bold text-sm tracking-widest uppercase mb-2">Industrial Applications</p>
              <h2 className="text-3xl md:text-5xl font-light mb-4 text-slate-900">
                Where compressed air data changes decisions
              </h2>
            </div>
            <p className="text-slate-600 text-lg font-light max-w-xl lg:text-right">
              Use air flow meters at the points where consumption data can change daily decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 auto-rows-[320px] gap-6">
            {applications.map((application, index) => {
              const Icon = application.icon;
              const isFeature = index === 0;

              return (
                <div
                  key={application.title}
                  className={`group relative overflow-hidden rounded-[2rem] border border-white/70 bg-slate-900 shadow-sm hover:shadow-2xl hover:shadow-cyan-900/15 transition-all duration-500 ${isFeature ? 'md:col-span-2 lg:row-span-2' : ''}`}
                >
                  <img
                    src={application.image}
                    alt={`${application.title} compressed air flow monitoring`}
                    className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <div className="w-12 h-12 bg-white/15 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20 group-hover:bg-cyan-400/25 transition-colors">
                        <Icon className="text-cyan-200 w-5 h-5" />
                      </div>
                      <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-cyan-100 backdrop-blur-md">
                        {application.signal}
                      </span>
                    </div>
                    <h3 className={`${isFeature ? 'text-3xl md:text-4xl' : 'text-xl'} font-light text-white leading-tight mb-3`}>
                      {application.title}
                    </h3>
                    <p className={`${isFeature ? 'text-base max-w-xl' : 'text-sm'} text-slate-200 font-light leading-relaxed`}>
                      {application.copy}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-y border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
            <div>
              <p className="text-cyan-600 font-bold text-sm tracking-widest uppercase mb-2">Working Principle</p>
              <h2 className="text-3xl md:text-4xl font-light mb-6 text-slate-900">
                Thermal mass measurement for compressed air
              </h2>
              <p className="text-slate-600 text-lg font-light leading-relaxed mb-6">
                A thermal mass air flow meter measures air mass flow directly. Since the measurement is based on mass flow, the system does not require separate pressure and temperature compensation for compressed air monitoring.
              </p>
              <p className="text-slate-600 font-light leading-relaxed">
                This makes it useful for facility teams that need practical, repeatable readings for compressor performance, consumption allocation and leak reduction programs.
              </p>
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
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F4F7FB]">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-600 font-light">
              Direct answers for compressed air users comparing flow meter options and monitoring programs.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-white border border-slate-200 rounded-2xl [&_summary::-webkit-details-marker]:hidden hover:border-cyan-500/30 transition-colors shadow-sm"
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

      <section className="py-12 bg-white border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-4 bg-slate-50 border border-slate-200 rounded-full py-2 px-6 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-700 font-bold text-sm">
              MM
            </div>
            <div className="text-left">
              <p className="text-slate-900 text-sm font-medium">Verified by Manas Engineering</p>
              <p className="text-slate-500 text-xs">Compressed air flow measurement and industrial utility monitoring</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
