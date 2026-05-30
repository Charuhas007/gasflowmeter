import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Factory,
  Flame,
  Gauge,
  MonitorSmartphone,
  Radio,
  Settings,
  ShieldCheck,
  Wrench,
  Zap,
} from 'lucide-react';
import InsertionSelector from './InsertionSelector';

const primaryKeywords = [
  'insertion type thermal mass flow meter',
  'insertion thermal mass flow meter',
  'thermal mass flow meter insertion type',
  'Scirocco 2000 flow meter',
  'industrial gas mass flow meter',
];

const secondaryKeywords = [
  'compressed air flow measurement',
  'gas consumption measurement',
  'CNG flow measurement',
  'industrial oxygen flow meter',
  'biogas flow meter',
  'furnace burner control flow meter',
  'RS485 thermal mass flow meter',
  'mobile app flow meter readings',
  'DN25 to DN600 flow meter',
  '40:1 turndown ratio',
  'direct mass flow measurement',
  'gas pipeline duct flow meter',
];

const features = [
  'Direct measurement of mass flow for industrial gases.',
  'No pressure or temperature compensation required.',
  '40:1 turndown ratio for a wide measuring range.',
  'Easy-to-clean insertion sensor with no moving parts.',
  'Remote readings available on mobile app.',
  'Pulse, mA or RS485 output for networking.',
  'Fast response for air and gas measurement.',
  'Flexible insertion and mounting length options as specified by Manas.',
];

const benefits = [
  {
    title: 'Large-pipe flexibility',
    copy: 'One insertion-style meter can suit a range of pipeline sizes when the same medium is flowing, reducing product selection complexity.',
    icon: Gauge,
  },
  {
    title: 'Energy-saving visibility',
    copy: 'Direct gas mass flow data helps teams monitor compressed air and fuel gas usage for process improvement and energy saving.',
    icon: Zap,
  },
  {
    title: 'Low-maintenance sensor',
    copy: 'No moving parts means less wear and better immunity to vibration compared with many mechanical meter types.',
    icon: ShieldCheck,
  },
  {
    title: 'Network-ready outputs',
    copy: 'Pulse, mA and RS485 output options make the meter practical for totalizers, PLCs and plant monitoring systems.',
    icon: Radio,
  },
];

const applications = [
  {
    title: 'Compressed air and gas consumption',
    copy: 'Monitor consumption across headers, utility lines and production departments.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=900',
    icon: Factory,
  },
  {
    title: 'Low-pressure gas conditions',
    copy: 'Measure gas flow where pressure is low but direct mass flow visibility is still required.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=900',
    icon: Gauge,
  },
  {
    title: 'Fuel gas and CNG control',
    copy: 'Use known gas properties to support fuel gas consumption measurement and control.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=900',
    icon: Flame,
  },
  {
    title: 'Automobile gas engine testing',
    copy: 'Track gas usage during engine testing and performance validation.',
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&q=80&w=900',
    icon: Activity,
  },
  {
    title: 'Industrial oxygen flow control',
    copy: 'Measure and control oxygen flow for industrial process lines.',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=900',
    icon: Settings,
  },
  {
    title: 'Biogas digester systems',
    copy: 'Monitor biogas generation and usage where gas properties are known.',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=900',
    icon: Zap,
  },
];

const installSteps = [
  'Weld the socket on the gas pipeline or duct at the selected measuring point.',
  'Insert and screw the sensor into the socket.',
  'Align the sensor as instructed in the installation manual.',
  'Ensure the required straight pipe length on both sides of the sensor.',
  'Connect the sensor to the electronics and commission the display/outputs.',
];

const specs = [
  ['Model', 'Scirocco 2000'],
  ['Mounting', 'Insertion sensor screwed into welded socket on pipeline or duct'],
  ['Service fluid', 'Dry and clean compressed air / gas such as CNG, O2, PNG and N2'],
  ['Line size', 'DN25 to DN600'],
  ['Accuracy', '+/- 2% of actual flow rate between 100% and 2.5% of flow or +0.5% full scale'],
  ['Display', '16x2 LCD for instantaneous flow rate, totalizer, engineering units and fault messages'],
  ['Output', 'Pulse output NPN standard or PNP optional; proportional to mass flow rate'],
  ['Ingress protection', 'IP66 for transmitter'],
  ['Operating fluid temperature', '0 to 100 deg C'],
  ['Operating fluid pressure', 'Up to 16 bar'],
  ['Power supply', '24 VDC, +/-10%'],
];

const faqs = [
  {
    question: 'Where is an insertion type thermal mass flow meter used?',
    answer:
      'It is used to measure precise mass flow rates of industrial gases and compressed air in pipelines or ducts, supporting energy savings and process quality.',
  },
  {
    question: 'How does an insertion thermal mass flow meter work?',
    answer:
      'It works on the thermal mass principle. Flowing gas removes heat from a heated sensor, and the heat loss is related to the mass flow rate of the gas.',
  },
  {
    question: 'Does it require pressure or temperature compensation?',
    answer:
      'No. The source specification states that pressure and temperature fluctuations pose no problem because the meter does not require pressure or temperature compensation.',
  },
  {
    question: 'How is the sensor installed?',
    answer:
      'The sensor is inserted and screwed into a socket welded to the pipeline or duct, aligned as instructed in the manual, and connected to the electronics.',
  },
  {
    question: 'Which gases can Scirocco 2000 measure?',
    answer:
      'It is intended for dry and clean compressed air or gases such as CNG, oxygen, PNG and nitrogen. Other gases can be measured when their properties are known.',
  },
];

export const metadata: Metadata = {
  title: 'Insertion Type Thermal Mass Flow Meter | Scirocco 2000',
  description:
    'Manas Scirocco 2000 insertion type thermal mass flow meter measures industrial gas and compressed air flow directly, with totalizer, RS485, pulse/mA outputs, and low maintenance.',
  keywords: [...primaryKeywords, ...secondaryKeywords].join(', '),
};

export default function InsertionThermalMassFlowMeterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        name: 'Scirocco 2000 Insertion Type Thermal Mass Flow Meter',
        brand: { '@type': 'Brand', name: 'Manas Microsystems' },
        description:
          'Insertion type thermal mass flow meter for direct mass flow measurement of compressed air and industrial gases in pipelines and ducts.',
        category: 'Industrial Gas Mass Flow Measurement',
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
        <div className="absolute inset-0 bg-[#0f766e]/55 z-10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1920"
          alt="Insertion type thermal mass flow meter in gas pipeline"
          className="absolute inset-0 w-full h-full object-cover z-0 grayscale"
        />
        <div className="container mx-auto px-6 max-w-7xl relative z-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-thin text-white tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            Insertion Type Thermal Mass Flow Meter
          </h1>
          <p className="text-cyan-300 font-light mt-4 text-lg tracking-widest uppercase drop-shadow-md">
            Scirocco 2000 | DN25 to DN600
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
            <span className="text-cyan-600">Insertion Thermal Mass Flow Meter</span>
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
                alt="Scirocco 2000 insertion type thermal mass flow meter"
                className="w-full max-w-[390px] object-contain relative z-10 hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div>
              <p className="text-cyan-600 font-bold text-sm tracking-widest uppercase mb-2">Product Description</p>
              <h2 className="text-3xl font-light text-slate-900 mb-6">
                Direct gas mass flow measurement for pipelines and ducts
              </h2>
              <p className="text-slate-600 font-light leading-relaxed mb-6 text-lg">
                Manas Microsystems offers the <strong className="text-slate-900 font-semibold">Scirocco 2000 Insertion Type Thermal Mass Flow Meter</strong> for precise industrial gas and compressed air mass flow measurement. It delivers direct mass flow measurement, instantaneous flow rate and totalized consumption for energy-saving and process-quality applications.
              </p>
              <p className="text-slate-600 font-light leading-relaxed">
                Designed for dry, clean compressed air and gases such as CNG, O2, PNG and N2, the meter uses a no-moving-parts sensor for low maintenance and vibration-resistant service. Pressure and temperature fluctuations do not require separate compensation for the stated application conditions.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-colors focus:ring-4 focus:ring-cyan-500/20 shadow-lg shadow-cyan-500/30 w-full sm:w-auto text-center"
                >
                  Request Quote
                </Link>
                <a
                  href="#insertion-selector"
                  className="px-8 py-3.5 bg-white text-slate-700 font-medium rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors flex items-center justify-center group w-full sm:w-auto shadow-sm"
                >
                  Select Pipe Size <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
                Thermal mass measurement without pressure or temperature compensation
              </h2>
              <div className="space-y-6 text-slate-600 font-light leading-relaxed">
                <p className="text-xl text-slate-800 font-normal">
                  An insertion thermal mass flow meter measures gas mass flow by sensing how flowing gas removes heat from a heated sensor.
                </p>
                <p className="text-lg">
                  When gas passes over a heated element, forced convection carries heat away. The temperature change is related to mass flow, allowing the meter to calculate flow rate without separate pressure or temperature compensation.
                </p>
                <p className="text-lg">
                  The sensor has no moving parts, so routine care is limited to occasional cleaning with compressed air in suitable dry and clean gas service.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8 shadow-sm">
              <h3 className="text-2xl font-light text-slate-900 mb-8">Key Features</h3>
              <div className="space-y-5">
                {features.map((feature) => (
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

      <section id="insertion-selector" className="py-24 bg-[#F4F7FB] border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <InsertionSelector />
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white relative border-b border-slate-200 overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="mb-16 md:mb-24">
            <p className="text-emerald-500 font-medium mb-3 tracking-wide text-sm md:text-base uppercase">
              Principal Benefits
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-[#1c2c5b] tracking-tight">
              Built for practical gas utility measurement
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
              <p className="text-cyan-600 font-bold text-sm tracking-widest uppercase mb-2">Applications</p>
              <h2 className="text-3xl md:text-5xl font-light mb-4 text-slate-900">
                Where insertion thermal mass measurement fits
              </h2>
            </div>
            <p className="text-slate-600 text-lg font-light max-w-xl lg:text-right">
              Use Scirocco 2000 where large-pipe gas measurement, easy installation and direct mass flow visibility are important.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 auto-rows-[320px] gap-6">
            {applications.map((application, index) => {
              const Icon = application.icon;
              const isFeature = index === 0;

              return (
                <div
                  key={application.title}
                  className={`group relative overflow-hidden rounded-[2rem] border border-white bg-white shadow-sm hover:shadow-xl hover:shadow-cyan-900/10 transition-all duration-500 ${isFeature ? 'md:col-span-2' : ''}`}
                >
                  <img
                    src={application.image}
                    alt={`${application.title} insertion thermal mass flow meter application`}
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

      <section className="py-24 bg-white border-y border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-start">
            <div>
              <p className="text-cyan-600 font-bold text-sm tracking-widest uppercase mb-2">Installation Flow</p>
              <h2 className="text-3xl md:text-4xl font-light mb-6 text-slate-900">
                Simple insertion mounting for existing pipelines and ducts
              </h2>
              <p className="text-slate-600 text-lg font-light leading-relaxed">
                The source installation method is straightforward: insert, screw, align, connect and commission after ensuring the required straight run.
              </p>
            </div>

            <div className="grid gap-4">
              {installSteps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl bg-slate-50 border border-slate-200 p-5">
                  <div className="w-9 h-9 rounded-full bg-cyan-500 text-white flex items-center justify-center font-semibold shrink-0">
                    {index + 1}
                  </div>
                  <p className="text-slate-700 font-light leading-relaxed pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F4F7FB]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <p className="text-cyan-600 font-bold text-sm tracking-widest uppercase mb-2">Technical Data</p>
              <h2 className="text-3xl md:text-4xl font-light mb-4 text-slate-900">Scirocco 2000 Specifications</h2>
              <p className="text-slate-600 text-lg font-light max-w-2xl">
                Standard details from the product page are summarized below. Final selection should confirm gas properties, line size, straight length and process conditions.
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
              Direct answers for engineers evaluating insertion type thermal mass flow meters for gas pipelines and ducts.
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
              <p className="text-slate-500 text-xs">ISO 9001:2015 company with industrial gas flow measurement expertise</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
