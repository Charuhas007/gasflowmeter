'use client';

import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { Bell, ClipboardCheck, Gauge, Radio, Thermometer } from 'lucide-react';

const steamTypes = ['Saturated steam', 'Superheated steam', 'Thermic fluid'] as const;
const lineSizes = ['1-2 inch', '3-6 inch', '8-10 inch'] as const;

export default function SteamSelector() {
  const [steamType, setSteamType] = useState<(typeof steamTypes)[number]>('Saturated steam');
  const [lineSize, setLineSize] = useState<(typeof lineSizes)[number]>('3-6 inch');
  const [logging, setLogging] = useState(true);

  const recommendation = useMemo(() => {
    const approval = steamType === 'Thermic fluid' ? 'Thermic service review' : 'IBR option review';
    const loggingText = logging ? '4900 / 9800 reading data logging' : 'Display-first monitoring';

    return [
      ['Flow element', `${lineSize} differential orifice assembly`],
      ['Compensation', steamType === 'Superheated steam' ? 'Pressure + temperature density compensation' : 'Online density compensation'],
      ['System option', approval],
      ['Output package', `${loggingText}, RS485 / MODBUS RTU, optional RS232`],
    ];
  }, [steamType, lineSize, logging]);

  return (
    <div className="bg-white border border-slate-200 rounded-[2rem] p-6 md:p-8 shadow-sm">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
        <div>
          <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-5 border border-cyan-200">
            <ClipboardCheck className="w-6 h-6" />
          </div>
          <p className="text-cyan-600 font-bold text-sm tracking-widest uppercase mb-2">Configuration Assistant</p>
          <h3 className="text-3xl font-light text-slate-950 mb-4">Shortlist the right SFMc-150 package</h3>
          <p className="text-slate-600 font-light leading-relaxed">
            Choose service condition, line size and logging needs to see the specification points that usually matter first during selection.
          </p>
        </div>

        <div className="grid gap-5">
          <ControlGroup label="Steam service" icon={Thermometer}>
            {steamTypes.map((type) => (
              <OptionButton key={type} active={steamType === type} onClick={() => setSteamType(type)}>
                {type}
              </OptionButton>
            ))}
          </ControlGroup>

          <ControlGroup label="Pipe size band" icon={Gauge}>
            {lineSizes.map((size) => (
              <OptionButton key={size} active={lineSize === size} onClick={() => setLineSize(size)}>
                {size}
              </OptionButton>
            ))}
          </ControlGroup>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl bg-slate-50 border border-slate-200 p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center border border-cyan-100">
                <Bell className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">Data logging required</p>
                <p className="text-sm text-slate-500">For shift reports and steam consumption audits.</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setLogging((value) => !value)}
              className={`relative h-8 w-14 rounded-full transition-colors ${logging ? 'bg-cyan-500' : 'bg-slate-300'}`}
              aria-pressed={logging}
            >
              <span
                className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow-sm transition-transform ${
                  logging ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-cyan-50 via-white to-emerald-50 border border-cyan-100 p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white text-cyan-700 flex items-center justify-center border border-cyan-100 shadow-sm">
                <Radio className="w-5 h-5" />
              </div>
              <h4 className="font-semibold text-slate-950">Recommended selection notes</h4>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {recommendation.map(([label, value]) => (
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
  icon: typeof Gauge;
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
