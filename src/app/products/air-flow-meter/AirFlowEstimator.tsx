'use client';

import { useMemo, useState } from 'react';
import { Calculator, Gauge, IndianRupee, Zap } from 'lucide-react';

const formatNumber = (value: number) =>
  new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(value);

export default function AirFlowEstimator() {
  const [flowRate, setFlowRate] = useState(550);
  const [hours, setHours] = useState(16);
  const [leakage, setLeakage] = useState(12);
  const [tariff, setTariff] = useState(9);

  const values = useMemo(() => {
    const monthlyAir = flowRate * hours * 30;
    const estimatedLeakAir = monthlyAir * (leakage / 100);
    const indicativeLeakCost = estimatedLeakAir * tariff * 0.018;

    return {
      monthlyAir,
      estimatedLeakAir,
      indicativeLeakCost,
    };
  }, [flowRate, hours, leakage, tariff]);

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-white border border-slate-200 p-6 md:p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-r from-cyan-50 via-emerald-50 to-white" />
      <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
        <div className="max-w-2xl">
          <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-5 border border-cyan-200">
            <Calculator className="w-6 h-6" />
          </div>
          <h3 className="text-2xl md:text-3xl font-light mb-3 text-slate-950">Compressed Air Monitoring Estimator</h3>
          <p className="text-slate-600 font-light leading-relaxed">
            Model monthly air usage and potential leakage exposure before selecting meter points for machines, departments or compressor rooms.
          </p>
        </div>
        <div className="rounded-2xl bg-[#0f766e] p-5 min-w-[220px] text-white shadow-lg shadow-cyan-900/10">
          <p className="text-cyan-100 text-xs uppercase tracking-widest mb-2">Indicative Leak Cost</p>
          <p className="text-3xl font-semibold">Rs {formatNumber(values.indicativeLeakCost)}</p>
          <p className="text-cyan-100 text-xs mt-1">per month</p>
        </div>
      </div>

      <div className="relative grid lg:grid-cols-[1fr_0.9fr] gap-8">
        <div className="rounded-[1.5rem] bg-slate-50 border border-slate-200 p-5 md:p-6 space-y-6">
          <SliderControl
            label="Average air flow"
            value={flowRate}
            min={100}
            max={2000}
            step={50}
            suffix="Nm3/h"
            onChange={setFlowRate}
          />
          <SliderControl
            label="Operating hours per day"
            value={hours}
            min={4}
            max={24}
            step={1}
            suffix="hours"
            onChange={setHours}
          />
          <SliderControl
            label="Estimated leakage"
            value={leakage}
            min={2}
            max={35}
            step={1}
            suffix="%"
            onChange={setLeakage}
          />
          <SliderControl
            label="Power tariff"
            value={tariff}
            min={5}
            max={18}
            step={1}
            suffix="Rs/kWh"
            onChange={setTariff}
          />
        </div>

        <div className="grid gap-4 content-start">
          <MetricCard
            icon={Gauge}
            label="Monthly air volume"
            value={`${formatNumber(values.monthlyAir)} Nm3`}
            helper="Use this to compare lines, shifts and production areas."
          />
          <MetricCard
            icon={Zap}
            label="Estimated leaked air"
            value={`${formatNumber(values.estimatedLeakAir)} Nm3`}
            helper="Invisible leaks become visible once flow data is logged."
          />
          <MetricCard
            icon={IndianRupee}
            label="Decision signal"
            value="Meter high-use points first"
            helper="Start with compressors, main headers and energy-intensive machines."
          />
        </div>
      </div>
    </div>
  );
}

function SliderControl({
  label,
  value,
  min,
  max,
  step,
  suffix,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix: string;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block">
      <div className="flex items-center justify-between gap-4 mb-3">
        <span className="text-sm font-medium text-slate-700">{label}</span>
        <span className="rounded-full bg-white border border-cyan-100 px-3 py-1 text-sm text-cyan-700 font-semibold shadow-sm">
          {formatNumber(value)} {suffix}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="w-full accent-cyan-500"
      />
    </label>
  );
}

function MetricCard({
  icon: Icon,
  label,
  value,
  helper,
}: {
  icon: typeof Gauge;
  label: string;
  value: string;
  helper: string;
}) {
  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm hover:border-cyan-200 hover:shadow-md transition-all">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center shrink-0 border border-cyan-100">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <p className="text-slate-500 text-xs uppercase tracking-widest mb-1">{label}</p>
          <p className="text-xl font-semibold text-slate-950">{value}</p>
          <p className="text-slate-600 text-sm font-light leading-relaxed mt-2">{helper}</p>
        </div>
      </div>
    </div>
  );
}
