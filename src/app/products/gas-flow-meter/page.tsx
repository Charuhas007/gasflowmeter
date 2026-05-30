import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ClipboardCheck,
  Factory,
  Gauge,
  Settings,
  ShieldCheck,
  Thermometer,
  Wind,
} from 'lucide-react';

const keyFeatures = [
  'Mass flow measurement for Bio Gas, LPG, Natural Gas, CNG, compressed air and other compressed gases in closed conduits.',
  'Available in line sizes from 1 inch to 8 inch.',
  'Online density compensation using pressure and temperature measurement.',
  'Easy installation, commissioning and long-term maintenance.',
];

const advantages = [
  {
    title: 'Online density compensation',
    copy: 'Line pressure and gas temperature are monitored online, helping compensate density changes that create errors in conventional DP flow measurement.',
    icon: Thermometer,
  },
  {
    title: 'Engineered orifice assembly',
    copy: 'Each compact GFM system uses an accurately designed differential flow element and orifice assembly selected for the application.',
    icon: Gauge,
  },
  {
    title: 'Integrated local display',
    copy: 'The system can display compensated mass flow rate, density, temperature and DP transmitter output for easier plant operation.',
    icon: ClipboardCheck,
  },
  {
    title: 'No moving parts',
    copy: 'A rugged differential-flow-element construction gives the meter a stable, low-maintenance measurement path for industrial gases.',
    icon: Settings,
  },
];

const applications = [
  'Compressed air consumption monitoring',
  'Biogas consumption and utility accounting',
  'LPG and CNG consumption in process plants',
  'Automotive industry gas lines',
  'Textile and steel industry utilities',
  'Nitrogen, oxygen and CO2 consumption monitoring',
];

const specs = [
  ['Service', 'Bio Gas, LPG, Natural Gas, CNG and compressed air in closed pipes'],
  ['Size', '1 inch to 8 inch'],
  ['Type of flow element', 'Differential flow element'],
  ['MOC of flow element', 'SS 316'],
  ['End connection', 'SORF flange'],
  ['MOC of flanges', 'M.S / C.S / S.S'],
  ['Flange rating', 'Class 150; other ratings on request'],
  ['DPT', 'With display'],
  ['Data logging', '4900 readings or 9800 readings optional'],
  ['Communication port', 'RS485, RS232 optional'],
  ['Communication protocol', 'MODBUS RTU'],
  ['Design standard', 'BS 1042 / ISO 5167'],
  ['Accuracy', '+/- 2.5% of actual reading'],
  ['Typical turndown', '10:3; 10:1 optional'],
  ['Density compensation', 'Online monitoring and compensation of density'],
  ['Gas temperature', 'Up to 70 deg C'],
  ['Power supply', '85 to 265 VAC at 50 Hz'],
];

const faqs = [
  {
    question: 'How does a compact gas flow meter work?',
    answer:
      'A compact gas flow meter measures gas flow in a closed pipe using a differential flow element. The system reads differential pressure, line pressure and gas temperature, then applies online density compensation to calculate compensated mass flow.',
  },
  {
    question: 'Which gases can this compact GFM measure?',
    answer:
      'It is suitable for Bio Gas, LPG, Natural Gas, CNG, compressed air and other compressed gases in closed conduits, provided the meter is selected and engineered for the application conditions.',
  },
  {
    question: 'Why is density compensation important for gas flow measurement?',
    answer:
      'Gas density changes with line pressure and temperature. Without compensation, a conventional DP system can introduce flow-rate error. Online pressure and temperature measurement helps correct this for more reliable mass flow readings.',
  },
  {
    question: 'Do you offer customized gas flow meter systems?',
    answer:
      'Yes. The compact GFM system is engineered around line size, gas service, pressure, temperature, flow range, flange rating, display, logging and communication requirements.',
  },
];

export const metadata: Metadata = {
  title: 'Compact Gas Flow Meter | Gas Flow Meter Manufacturer | Manas',
  description:
    'Compact gas flow meters for Bio Gas, LPG, Natural Gas, CNG and compressed air with online density compensation, data logging, MODBUS RTU and rugged DP flow measurement.',
  keywords:
    'compact gas flow meter, gas flow meter, compact gas flow meters manufacturer, gas flow meters supplier, Bio Gas flow meter, LPG gas flow meter, Natural Gas flow meter, CNG flow meter, compressed air flow meter, online density compensation, differential pressure gas flow meter, gas flow meter Pune, gas flow meter Mumbai, gas flow meter Bangalore, gas flow meter Chennai, gas flow meter Hyderabad, gas flow meter Ahmedabad',
};

export default function CompactGasFlowMeterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        name: 'Compact Gas Flow Meter',
        brand: { '@type': 'Brand', name: 'Manas Microsystems' },
        description:
          'Compact gas flow meter for compensated mass flow measurement of Bio Gas, LPG, Natural Gas, CNG, compressed air and other compressed gases in closed conduits.',
        category: 'Industrial Gas Flow Measurement',
        manufacturer: {
          '@type': 'Organization',
          name: 'Manas Microsystems',
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
        <div className="absolute inset-0 bg-[var(--accent)]/60 z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1920"
          alt="Compact gas flow meter industrial process line"
          className="absolute inset-0 w-full h-full object-cover z-0 grayscale"
        />
        <div className="container mx-auto px-6 max-w-7xl relative z-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-thin text-white tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            Compact Gas Flow Meter
          </h1>
          <p className="text-cyan-400 font-light mt-4 text-lg tracking-widest uppercase drop-shadow-md">
            Online Density Compensation
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
            <span className="text-cyan-600">Gas Flow Meter</span>
          </div>
        </div>
      </div>

      <section className="py-16 bg-[#F4F7FB]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-16 items-center">
            <div className="flex justify-center p-8 bg-white border border-slate-200 rounded-2xl relative group shadow-sm">
              <div className="absolute inset-0 bg-cyan-100 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              <img
                src="/products/gasflowmeters.jpg"
                alt="Compact gas flow meter product"
                className="w-full max-w-[380px] object-contain relative z-10 hover:scale-105 transition-transform duration-500 mix-blend-multiply"
              />
            </div>

            <div>
              <p className="text-cyan-600 font-bold text-sm tracking-widest uppercase mb-2">Product Description</p>
              <h2 className="text-3xl font-light text-slate-900 mb-6">
                Gas flow measurement for compressed gases in closed conduits
              </h2>
              <p className="text-slate-600 font-light leading-relaxed mb-6 text-lg">
                Manas manufactures, supplies and exports <strong className="text-slate-900 font-semibold">Compact Gas Flow Meters</strong> for Bio Gas, LPG, Natural Gas, CNG, compressed air and other compressed gases. The compact GFM is built for plants that need affordability, ruggedness and reliable compensated mass flow measurement.
              </p>
              <p className="text-slate-600 font-light leading-relaxed">
                Conventional orifice-based systems often assume constant gas density after square-rooting the DP transmitter signal. In real compressed-gas lines, density changes with line pressure and temperature. This compact gas flow meter solves that problem with online pressure and temperature measurement for density compensation.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-colors focus:ring-4 focus:ring-cyan-500/20 shadow-lg shadow-cyan-500/30 w-full sm:w-auto text-center"
                >
                  Request Quote
                </Link>
                <Link
                  href="/products/thermal-mass-flow-meter"
                  className="px-8 py-3.5 bg-white text-slate-700 font-medium rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors flex items-center justify-center group w-full sm:w-auto shadow-sm"
                >
                  View Thermal Mass Series <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative border-y border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-cyan-600 font-bold text-sm tracking-widest uppercase mb-2">Measurement Challenge</p>
              <div className="w-12 h-1 bg-cyan-500 mb-8 rounded-full"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Why gas density compensation matters
              </h2>
              <div className="space-y-6 text-slate-600 font-light leading-relaxed">
                <p className="text-xl text-slate-800 font-normal">
                  Differential pressure measurement is dependable, but gas density is not constant. Pressure and temperature shifts directly affect the actual mass flow rate.
                </p>
                <p className="text-lg">
                  The compact gas flow meter integrates the DP transmitter signal with online pressure and temperature inputs. The system then displays compensated mass flow rate along with density, temperature and transmitter output.
                </p>
                <p className="text-lg">
                  This makes the meter well suited for industrial gas consumption monitoring where plant teams need repeatable measurement without complex field wiring or frequent mechanical maintenance.
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

      <section className="py-24 md:py-32 bg-white relative border-b border-slate-200 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="mb-16 md:mb-24">
            <p className="text-emerald-500 font-medium mb-3 tracking-wide text-sm md:text-base uppercase">
              Principal Advantages
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-[#1c2c5b] tracking-tight">Built for utility gas lines</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-end">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              const styles = [
                'bg-[#ecfdf5] border-emerald-50 lg:min-h-[380px] text-slate-800',
                'bg-[#e0f2fe] border-sky-50 lg:min-h-[440px] text-slate-800',
                'bg-[#334155] border-slate-700 lg:min-h-[500px] text-white',
                'bg-[#1c2c5b] border-[#1c2c5b] lg:min-h-[560px] text-white',
              ][index];

              return (
                <div
                  key={advantage.title}
                  className={`rounded-[2rem] p-8 md:p-10 flex flex-col justify-start w-full shadow-[0_8px_30px_rgb(0,0,0,0.03)] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 border ${styles}`}
                >
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-6 leading-tight">{advantage.title}</h3>
                    <p className={`${index > 1 ? 'text-slate-300' : 'text-slate-600'} leading-relaxed text-[15px]`}>
                      {advantage.copy}
                    </p>
                  </div>
                  <Icon className="w-48 h-48 opacity-10 absolute -bottom-10 -right-10 z-0 group-hover:scale-110 transition-transform duration-700" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F4F7FB]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-slate-900">Industrial Applications</h2>
            <p className="text-slate-600 text-lg font-light max-w-2xl mx-auto">
              Compact gas flow meters are used wherever plant teams need reliable gas consumption measurement and easy commissioning.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {applications.map((application, index) => {
              const Icon = index % 3 === 0 ? Wind : index % 3 === 1 ? Factory : ShieldCheck;

              return (
                <div
                  key={application}
                  className="bg-white border border-slate-200 shadow-sm rounded-[2rem] p-8 hover:border-cyan-500/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center mb-6 border border-cyan-100 group-hover:scale-110 transition-transform">
                    <Icon className="text-cyan-600 w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-light text-slate-900 leading-snug">{application}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-y border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <p className="text-cyan-600 font-bold text-sm tracking-widest uppercase mb-2">Technical Data</p>
              <h2 className="text-3xl md:text-4xl font-light mb-4 text-slate-900">Compact Gas Flow Meter Specifications</h2>
              <p className="text-slate-600 text-lg font-light max-w-2xl">
                Standard specifications are listed below. Final configuration can be engineered to suit your process and installation requirements.
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

      <section className="py-24 bg-[#F4F7FB]">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-600 font-light">
              Answers for engineers and buyers evaluating compact gas flow meters for industrial gas lines.
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
              <p className="text-slate-500 text-xs">Flow measurement expertise for industrial gas applications</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
