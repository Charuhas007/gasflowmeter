'use client';

import { useState } from 'react';
import { CheckCircle2, Gauge, Settings, ShieldCheck, XCircle } from 'lucide-react';

const comparison = [
  {
    parameter: 'High pressure and temperature',
    orifice: 'Most suitable for demanding steam lines.',
    vortex: 'Seals can become a concern after long service.',
  },
  {
    parameter: 'Installation',
    orifice: 'Easy to install as an engineered package.',
    vortex: 'Can require special machined pipe lengths.',
  },
  {
    parameter: 'Pressure and temperature changes',
    orifice: 'Handled through online density compensation.',
    vortex: 'Needs separate consideration in the system.',
  },
  {
    parameter: 'Low velocity measurement',
    orifice: 'Suitable for low velocity steam measurement.',
    vortex: 'Measurement may stop at low velocity.',
  },
  {
    parameter: 'Durability',
    orifice: 'No moving parts, low wear and virtually maintenance-free.',
    vortex: 'Sensor construction can be more wear-prone.',
  },
];

export default function SteamComparison() {
  const [active, setActive] = useState<'orifice' | 'vortex'>('orifice');

  return (
    <div className="bg-white border border-slate-200 rounded-[2rem] p-6 md:p-8 shadow-sm">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
        <div>
          <p className="text-cyan-600 font-bold text-sm tracking-widest uppercase mb-2">Selection Guide</p>
          <h3 className="text-3xl font-light text-slate-950">Orifice type vs vortex type steam flow meter</h3>
        </div>
        <div className="inline-grid grid-cols-2 rounded-xl bg-slate-100 p-1 border border-slate-200">
          <button
            type="button"
            onClick={() => setActive('orifice')}
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
              active === 'orifice' ? 'bg-white text-cyan-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Orifice
          </button>
          <button
            type="button"
            onClick={() => setActive('vortex')}
            className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
              active === 'vortex' ? 'bg-white text-cyan-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Vortex
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8">
        <div className="rounded-2xl bg-gradient-to-br from-cyan-50 to-white border border-cyan-100 p-6">
          <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-5 border border-cyan-200">
            {active === 'orifice' ? <ShieldCheck className="w-6 h-6" /> : <Gauge className="w-6 h-6" />}
          </div>
          <h4 className="text-2xl font-semibold text-slate-950 mb-4">
            {active === 'orifice' ? 'Why the engineered orifice package fits steam' : 'Where vortex meters need review'}
          </h4>
          <p className="text-slate-600 font-light leading-relaxed">
            {active === 'orifice'
              ? 'The compact steam flow meter uses a differential flow element with online pressure and temperature measurement for density-compensated mass flow.'
              : 'Vortex meters can be useful in some steam systems, but the source comparison highlights installation, low-velocity and long-term durability considerations.'}
          </p>
        </div>

        <div className="grid gap-3">
          {comparison.map((row) => (
            <div key={row.parameter} className="grid md:grid-cols-[0.7fr_1.3fr] gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
              <div className="flex items-center gap-3">
                <Settings className="w-5 h-5 text-slate-500 shrink-0" />
                <span className="font-semibold text-slate-900">{row.parameter}</span>
              </div>
              <div className="flex items-start gap-3 text-slate-600 font-light">
                {active === 'orifice' ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                )}
                <span>{active === 'orifice' ? row.orifice : row.vortex}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
