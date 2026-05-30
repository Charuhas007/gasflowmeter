'use client';

import { useState } from 'react';
import {
  BadgeCheck,
  Cable,
  CheckCircle2,
  Cpu,
  Gauge,
  Monitor,
  PlugZap,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  Thermometer,
  Wrench,
  Zap,
} from 'lucide-react';

const categories = ['Measurement intelligence', 'Field reliability', 'Integration & service'] as const;

const advantages = [
  {
    category: 'Measurement intelligence',
    title: 'Online density compensation',
    copy: 'Pressure and temperature are measured online, making steam density compensation possible for compensated mass flow.',
    icon: Thermometer,
  },
  {
    category: 'Measurement intelligence',
    title: 'Accurate orifice calculations',
    copy: 'Orifice assemblies are available in multiple sizes with accurate design calculations, with or without IBR approval as required.',
    icon: Gauge,
  },
  {
    category: 'Measurement intelligence',
    title: 'Live compensated display',
    copy: 'The system displays compensated mass flow rate, density, temperature and DP transmitter output, with LED indication for saturated or superheated steam status.',
    icon: Monitor,
  },
  {
    category: 'Measurement intelligence',
    title: 'Intelligent calculation engine',
    copy: 'Operators do not need to feed complicated orifice constants because the system handles the calculation logic.',
    icon: Cpu,
  },
  {
    category: 'Field reliability',
    title: 'Rugged field transmitter',
    copy: 'A sturdy field-mounting pressure transmitter is supplied with standard end connection.',
    icon: ShieldCheck,
  },
  {
    category: 'Field reliability',
    title: 'Engineered to requirement',
    copy: 'The complete steam flow meter system is engineered to suit application and installation requirements.',
    icon: SlidersHorizontal,
  },
  {
    category: 'Field reliability',
    title: 'Standard, reliable package',
    copy: 'A standardized system architecture supports dependable field use and repeatable engineering selection.',
    icon: CheckCircle2,
  },
  {
    category: 'Field reliability',
    title: 'No moving parts',
    copy: 'The differential orifice-based package has no moving parts, reducing wear and maintenance exposure.',
    icon: Settings,
  },
  {
    category: 'Field reliability',
    title: 'Easy installation',
    copy: 'Installation is straightforward and suitable for industrial steam utility applications.',
    icon: Wrench,
  },
  {
    category: 'Field reliability',
    title: 'No site wiring connections',
    copy: 'No wiring connections are required during installation, helping reduce commissioning effort.',
    icon: BadgeCheck,
  },
  {
    category: 'Integration & service',
    title: 'Isolated 4-20 mA output',
    copy: 'An isolated 4-20 mA DC signal is available proportional to compensated flow rate.',
    icon: Zap,
  },
  {
    category: 'Integration & service',
    title: 'Sensor fault messages',
    copy: 'Disconnection of DPT, pressure transmitter and temperature sensor is indicated by error message.',
    icon: PlugZap,
  },
  {
    category: 'Integration & service',
    title: 'Simple calibration',
    copy: 'Calibration of RTD, DP transmitter and pressure transmitter is easy and inexpensive.',
    icon: Cable,
  },
];

export default function SteamAdvantages() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>('Measurement intelligence');

  const activeIndex = categories.indexOf(activeCategory);

  return (
    <div className="relative overflow-hidden bg-white border border-slate-200 rounded-[2rem] p-6 md:p-8 shadow-sm">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-r from-cyan-50 via-emerald-50 to-white" />
      <div className="relative grid lg:grid-cols-[0.8fr_1.2fr] gap-10">
        <div>
          <p className="text-emerald-500 font-medium mb-3 tracking-wide text-sm md:text-base uppercase">
            Principal Advantages
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1c2c5b] tracking-tight mb-5">
            Thirteen engineering reasons to choose SFMc-150
          </h2>
          <p className="text-slate-600 font-light leading-relaxed mb-8">
            The compact steam flow meter combines standards-based orifice measurement with density compensation, diagnostics and serviceable field instrumentation.
          </p>

          <div className="grid gap-3">
            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`flex items-center justify-between rounded-2xl border p-4 text-left transition-all ${
                  activeCategory === category
                    ? 'bg-cyan-50 border-cyan-200 text-cyan-800 shadow-sm'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-cyan-200'
                }`}
              >
                <span className="font-semibold">{category}</span>
                <span className="text-xs font-bold uppercase tracking-widest">
                  {advantages.filter((advantage) => advantage.category === category).length} points
                </span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-6 grid grid-cols-3 gap-3">
            {categories.map((category, index) => (
              <div
                key={category}
                className={`h-2 rounded-full ${index <= activeIndex ? 'bg-cyan-500' : 'bg-slate-200'}`}
              />
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              const isActive = advantage.category === activeCategory;

              return (
                <article
                  key={advantage.title}
                  className={`rounded-2xl border border-slate-200 bg-slate-50/80 p-5 transition-all hover:-translate-y-1 hover:border-cyan-200 hover:bg-white hover:shadow-lg ${
                    isActive ? 'block' : 'hidden'
                  } ${
                    advantages.filter((item) => item.category === activeCategory)[0]?.title === advantage.title ? 'md:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white text-cyan-700 border border-cyan-100 flex items-center justify-center shrink-0 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-cyan-600 mb-2">
                        Advantage {advantages.findIndex((item) => item.title === advantage.title) + 1}
                      </p>
                      <h3 className="text-xl font-semibold text-slate-950 mb-2">{advantage.title}</h3>
                      <p className="text-slate-600 font-light leading-relaxed">{advantage.copy}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
