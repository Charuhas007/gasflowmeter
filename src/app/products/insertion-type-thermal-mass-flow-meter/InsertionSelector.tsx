'use client';

import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { Factory, Gauge, Radio, Ruler, Wind } from 'lucide-react';

const pipeBands = ['DN25-DN80', 'DN100-DN250', 'DN300-DN600'] as const;
const services = ['Compressed air', 'Fuel gas / CNG', 'Biogas / process gas'] as const;

export default function InsertionSelector() {
  const [pipeBand, setPipeBand] = useState<(typeof pipeBands)[number]>('DN100-DN250');
  const [service, setService] = useState<(typeof services)[number]>('Compressed air');

  const notes = useMemo(() => {
    const install =
      pipeBand === 'DN25-DN80'
        ? 'Compact insertion point with careful alignment'
        : pipeBand === 'DN100-DN250'
          ? 'Standard insertion setup for utility headers'
          : 'Large duct or pipeline survey with straight-run review';

    const gas =
      service === 'Compressed air'
        ? 'Dry, clean compressed air consumption monitoring'
        : service === 'Fuel gas / CNG'
          ? 'Fuel gas measurement and control with known gas properties'
          : 'Biogas or process gas measurement where gas properties are defined';

    return [
      ['Installation focus', install],
      ['Service recommendation', gas],
      ['Output package', 'Pulse, mA or RS485 for networking'],
      ['Maintenance note', 'No moving parts; occasional sensor cleaning with compressed air'],
    ];
  }, [pipeBand, service]);

  return (
    <div className="bg-white border border-slate-200 rounded-[2rem] p-6 md:p-8 shadow-sm">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
        <div>
          <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-5 border border-cyan-200">
            <Ruler className="w-6 h-6" />
          </div>
          <p className="text-cyan-600 font-bold text-sm tracking-widest uppercase mb-2">Selection Assistant</p>
          <h3 className="text-3xl font-light text-slate-950 mb-4">Match Scirocco 2000 to your pipe or duct</h3>
          <p className="text-slate-600 font-light leading-relaxed">
            Select line size and gas service to surface the installation and output details that matter most for insertion-type thermal mass flow measurement.
          </p>
        </div>

        <div className="grid gap-5">
          <ControlGroup label="Line size band" icon={Gauge}>
            {pipeBands.map((band) => (
              <OptionButton key={band} active={pipeBand === band} onClick={() => setPipeBand(band)}>
                {band}
              </OptionButton>
            ))}
          </ControlGroup>

          <ControlGroup label="Gas service" icon={Wind}>
            {services.map((item) => (
              <OptionButton key={item} active={service === item} onClick={() => setService(item)}>
                {item}
              </OptionButton>
            ))}
          </ControlGroup>

          <div className="rounded-2xl bg-gradient-to-br from-cyan-50 via-white to-emerald-50 border border-cyan-100 p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white text-cyan-700 flex items-center justify-center border border-cyan-100 shadow-sm">
                <Radio className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-slate-950">Recommended specification notes</h4>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {notes.map(([label, value]) => (
                <div key={label} className="rounded-xl bg-white/80 border border-white p-4">
                  <p className="text-xs uppercase tracking-widest text-slate-500 mb-1">{label}</p>
                  <p className="text-slate-900 font-medium">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ControlGroup({
  label,
  icon: Icon,
  children,
}: {
  label: string;
  icon: typeof Factory;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center border border-cyan-100">
          <Icon className="w-5 h-5" />
        </div>
        <p className="font-semibold text-slate-900">{label}</p>
      </div>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function OptionButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
        active
          ? 'bg-cyan-500 text-white shadow-sm shadow-cyan-500/20'
          : 'bg-white text-slate-600 border border-slate-200 hover:text-slate-950 hover:border-cyan-200'
      }`}
    >
      {children}
    </button>
  );
}
