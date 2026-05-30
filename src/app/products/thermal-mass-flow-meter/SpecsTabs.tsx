"use client";

import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function SpecsTabs() {
  const [activeTab, setActiveTab] = useState<'comparison' | 'sizes' | 'specifications' | 'ordering'>('comparison');

  return (
    <section className="py-24 bg-[#F4F7FB]">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-slate-900">Technical Specifications</h2>
          <p className="text-slate-600 font-light max-w-2xl mx-auto">Explore the detailed performance metrics and available configurations for the Scirocco 1000.</p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center bg-slate-200/50 p-1.5 rounded-2xl shadow-[inset_0_2px_4px_rgb(0,0,0,0.02)] border border-slate-200/60 gap-1">
            <button
              onClick={() => setActiveTab('comparison')}
              className={`px-6 py-3 rounded-xl text-[15px] font-semibold transition-all duration-300 ease-out ${
                activeTab === 'comparison' 
                ? 'bg-white text-[#1c2c5b] shadow-[0_2px_10px_rgb(0,0,0,0.06)]' 
                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50'
              }`}
            >
              Technology Comparison
            </button>
            <button
              onClick={() => setActiveTab('sizes')}
              className={`px-6 py-3 rounded-xl text-[15px] font-semibold transition-all duration-300 ease-out ${
                activeTab === 'sizes' 
                ? 'bg-white text-[#1c2c5b] shadow-[0_2px_10px_rgb(0,0,0,0.06)]' 
                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50'
              }`}
            >
              Available Sizes & Ranges
            </button>
            <button
              onClick={() => setActiveTab('specifications')}
              className={`px-6 py-3 rounded-xl text-[15px] font-semibold transition-all duration-300 ease-out ${
                activeTab === 'specifications' 
                ? 'bg-white text-[#1c2c5b] shadow-[0_2px_10px_rgb(0,0,0,0.06)]' 
                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50'
              }`}
            >
              Specifications
            </button>
            <button
              onClick={() => setActiveTab('ordering')}
              className={`px-6 py-3 rounded-xl text-[15px] font-semibold transition-all duration-300 ease-out ${
                activeTab === 'ordering' 
                ? 'bg-white text-[#1c2c5b] shadow-[0_2px_10px_rgb(0,0,0,0.06)]' 
                : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/50'
              }`}
            >
              Ordering Information
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative">
          {activeTab === 'comparison' && <ComparisonTable />}
          {activeTab === 'sizes' && <SizesTable />}
          {activeTab === 'specifications' && <SpecificationsTable />}
          {activeTab === 'ordering' && <OrderingInformation />}
        </div>

      </div>
    </section>
  );
}

function ComparisonTable() {
  return (
    <div className="bg-white rounded-[2rem] border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-opacity duration-500">
      <div className="overflow-x-auto">
        <table className="w-full text-left min-w-[800px] border-collapse">
          <thead>
            <tr>
              <th className="p-6 md:p-8 bg-slate-50 border-b border-slate-200 text-slate-800 font-bold text-lg w-1/4 align-bottom">Parameter</th>
              <th className="p-6 md:p-8 bg-slate-50 border-b border-slate-200 border-l border-slate-200 text-slate-600 font-bold text-lg w-1/3 align-bottom">Vortex Flow Meter</th>
              <th className="p-6 md:p-8 bg-[#f0f9ff] border-b border-sky-200 border-l border-sky-200 w-1/3 relative align-bottom shadow-[inset_0_4px_0_0_rgba(14,165,233,1)]">
                <div className="text-sky-600 text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4"/> Superior Tech</div>
                <span className="text-slate-900 font-bold text-lg">Thermal Mass Flow Meter</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-sm md:text-[15px]">
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="p-6 md:p-8 font-semibold text-slate-800 align-top">Method of measurement</td>
              <td className="p-6 md:p-8 text-slate-600 border-l border-slate-200 align-top leading-relaxed">Measures volumetric flow that needs to be converted to mass flow, using calculations.</td>
              <td className="p-6 md:p-8 bg-[#f8fcff] border-l border-sky-100 text-slate-800 align-top leading-relaxed font-medium">Directly measures mass flow. Hence more reliable.</td>
            </tr>
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="p-6 md:p-8 font-semibold text-slate-800 align-top">Pressure and Temperature Compensation</td>
              <td className="p-6 md:p-8 text-slate-600 border-l border-slate-200 align-top leading-relaxed">Required, as it is basically a volumetric flow meter hence signal generated is proportional to Velocity.</td>
              <td className="p-6 md:p-8 bg-[#f8fcff] border-l border-sky-100 text-slate-800 align-top leading-relaxed font-medium">Not Required as the signal generated is proportional to the Mass velocity of Fluid.</td>
            </tr>
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="p-6 md:p-8 font-semibold text-slate-800 align-top">Existing pipeline modifications for Installation</td>
              <td className="p-6 md:p-8 text-slate-600 border-l border-slate-200 align-top leading-relaxed">Design is based on velocity and not online size. As a result, the customer&apos;s line size and flow meter size may differ.</td>
              <td className="p-6 md:p-8 bg-[#f8fcff] border-l border-sky-100 text-slate-800 align-top leading-relaxed font-medium">No Modification is essential in most the cases.</td>
            </tr>
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="p-6 md:p-8 font-semibold text-slate-800 align-top">Installation</td>
              <td className="p-6 md:p-8 text-slate-600 border-l border-slate-200 align-top leading-relaxed">Easy, but pipeline size matters.</td>
              <td className="p-6 md:p-8 bg-[#f8fcff] border-l border-sky-100 text-slate-800 align-top leading-relaxed font-medium">Very Easy.</td>
            </tr>
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="p-6 md:p-8 font-semibold text-slate-800 align-top">Recalibration</td>
              <td className="p-6 md:p-8 text-slate-600 border-l border-slate-200 align-top leading-relaxed">This has to be done on Flow Rig.</td>
              <td className="p-6 md:p-8 bg-[#f8fcff] border-l border-sky-100 text-slate-800 align-top leading-relaxed font-medium">Has to be done on Flow Rig. Relatively less expensive, as Manas offers this service at an affordable cost.</td>
            </tr>
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="p-6 md:p-8 font-semibold text-slate-800 align-top">Suitability for low velocity</td>
              <td className="p-6 md:p-8 text-slate-600 border-l border-slate-200 align-top leading-relaxed">Not Suitable as vortices are not generated below 6 m/sec velocity.</td>
              <td className="p-6 md:p-8 bg-[#f8fcff] border-l border-sky-100 text-slate-800 align-top leading-relaxed font-medium">Works even at velocity as low as 1 m/sec.</td>
            </tr>
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="p-6 md:p-8 font-semibold text-slate-800 align-top">Turndown Ratio</td>
              <td className="p-6 md:p-8 text-slate-600 border-l border-slate-200 align-top leading-relaxed">(10: 1)</td>
              <td className="p-6 md:p-8 bg-[#f8fcff] border-l border-sky-100 text-slate-800 align-top leading-relaxed font-bold text-sky-700">Much better (50: 1)</td>
            </tr>
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="p-6 md:p-8 font-semibold text-slate-800 align-top">Compensation</td>
              <td className="p-6 md:p-8 text-slate-600 border-l border-slate-200 align-top leading-relaxed">Compensation depends on temperature. Chances of error are because of the high thermal resistance of the temperature sensor.</td>
              <td className="p-6 md:p-8 bg-[#f8fcff] border-l border-sky-100 text-slate-800 align-top leading-relaxed font-medium">Compensation not required at all. Hence more reliable.</td>
            </tr>
            <tr className="hover:bg-slate-50/50 transition-colors">
              <td className="p-6 md:p-8 font-semibold text-slate-800 align-top border-b border-transparent">Error elements</td>
              <td className="p-6 md:p-8 text-slate-600 border-l border-slate-200 align-top leading-relaxed border-b border-transparent">There are three sensor elements - Temperature, Pressure and Flow sensor. Thus, there are three sources of error.</td>
              <td className="p-6 md:p-8 bg-[#f8fcff] border-l border-sky-100 text-slate-800 align-top leading-relaxed font-medium border-b border-transparent">There is only one sensor element - Flow sensor. Hence it is more reliable.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SizesTable() {
  return (
    <div className="bg-white rounded-[2rem] border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-opacity duration-500">
      <div className="p-8 md:p-12 pb-8 text-center bg-slate-50 border-b border-slate-200">
        <h3 className="text-2xl md:text-3xl font-light text-[#4a89dc] mb-3">Available Sizes</h3>
        <p className="text-slate-600 text-lg font-medium">Scirocco 1000-1 and Scirocco 1000-2</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left min-w-[600px] border-collapse">
          <thead>
            <tr>
              <th className="p-4 md:p-6 border-b border-slate-200 text-slate-800 font-bold text-lg w-1/3">Nominal Size</th>
              <th className="p-4 md:p-6 border-b border-slate-200 text-slate-800 font-bold text-lg w-1/3">Range Nm³/Hr.</th>
              <th className="p-4 md:p-6 border-b border-slate-200 text-slate-800 font-bold text-lg w-1/3">Range SCFM</th>
            </tr>
          </thead>
          <tbody className="text-slate-700 text-[15px] font-semibold divide-y divide-slate-100">
             <tr className="bg-[#fafafa] hover:bg-slate-50 transition-colors"><td className="p-4 md:p-6">DN 15</td><td className="p-4 md:p-6">69</td><td className="p-4 md:p-6">40</td></tr>
             <tr className="bg-white hover:bg-slate-50 transition-colors"><td className="p-4 md:p-6">DN 20</td><td className="p-4 md:p-6">122</td><td className="p-4 md:p-6">72</td></tr>
             <tr className="bg-[#fafafa] hover:bg-slate-50 transition-colors"><td className="p-4 md:p-6">DN 25</td><td className="p-4 md:p-6">190</td><td className="p-4 md:p-6">112</td></tr>
             <tr className="bg-white hover:bg-slate-50 transition-colors"><td className="p-4 md:p-6">DN 32</td><td className="p-4 md:p-6">312</td><td className="p-4 md:p-6">184</td></tr>
             <tr className="bg-[#fafafa] hover:bg-slate-50 transition-colors"><td className="p-4 md:p-6">DN 40</td><td className="p-4 md:p-6">487</td><td className="p-4 md:p-6">287</td></tr>
             <tr className="bg-white hover:bg-slate-50 transition-colors"><td className="p-4 md:p-6">DN 50</td><td className="p-4 md:p-6">761</td><td className="p-4 md:p-6">448</td></tr>
             <tr className="bg-[#fafafa] hover:bg-slate-50 transition-colors"><td className="p-4 md:p-6">DN 65</td><td className="p-4 md:p-6">1287</td><td className="p-4 md:p-6">757</td></tr>
             <tr className="bg-white hover:bg-slate-50 transition-colors"><td className="p-4 md:p-6">DN 80</td><td className="p-4 md:p-6">1949</td><td className="p-4 md:p-6">1147</td></tr>
             <tr className="bg-[#fafafa] hover:bg-slate-50 transition-colors"><td className="p-4 md:p-6">DN 100</td><td className="p-4 md:p-6">3046</td><td className="p-4 md:p-6">1793</td></tr>
             <tr className="bg-white hover:bg-slate-50 transition-colors"><td className="p-4 md:p-6">DN 150</td><td className="p-4 md:p-6">6853</td><td className="p-4 md:p-6">4034</td></tr>
             <tr className="bg-[#fafafa] hover:bg-slate-50 transition-colors"><td className="p-4 md:p-6">DN 200</td><td className="p-4 md:p-6">12184</td><td className="p-4 md:p-6">7171</td></tr>
          </tbody>
        </table>
      </div>
      
      <div className="p-6 md:p-10 border-t border-slate-200 bg-white text-sm text-slate-500 leading-relaxed">
        <p className="font-semibold text-slate-700 mb-3">Table Notes:</p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Nm³/hr is defined at 21.11°C, 101.325 kPa</li>
          <li>*This is only for clean and dry compressed air.</li>
          <li>For other gases contact factory with more details.</li>
        </ol>
      </div>
    </div>
  );
}

function SpecificationsTable() {
  return (
    <div className="bg-white rounded-[2rem] border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-opacity duration-500">
      <div className="p-8 md:p-12 pb-8 bg-slate-50 border-b border-slate-200 text-left md:text-center">
        <h3 className="text-2xl md:text-3xl font-light text-[#4a89dc] mb-3">Specifications</h3>
        <p className="text-slate-600 text-lg font-medium">Scirocco 1000-1 and Scirocco 1000-2</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200">
        
        {/* Left Column Table */}
        <div className="bg-white w-full">
          <table className="w-full text-left border-collapse">
            <tbody className="text-sm md:text-[15px] divide-y divide-slate-100">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-5 md:p-6 font-semibold text-slate-800 w-1/3 align-top">Model No</td>
                <td className="p-5 md:p-6 text-slate-700 font-medium">Scirocco 1000-1 & Scirocco 1000-2</td>
              </tr>
              <tr className="bg-[#fafafa] hover:bg-slate-50 transition-colors">
                <td className="p-5 md:p-6 font-semibold text-slate-800 align-top">Scirocco 1000-1</td>
                <td className="p-5 md:p-6 text-slate-700 font-medium">Sensor and transmitter, can be mounted directly on service pipe just by drilling holes with clamps provided</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-5 md:p-6 font-semibold text-slate-800 align-top">Scirocco1000-2</td>
                <td className="p-5 md:p-6 text-slate-700 font-medium">Complete with spool with an end connection of flange /BSP(M) Threading</td>
              </tr>
              <tr className="bg-[#fafafa] hover:bg-slate-50 transition-colors">
                <td className="p-5 md:p-6 font-semibold text-slate-800 align-top">Service Fluid</td>
                <td className="p-5 md:p-6 text-slate-700 font-medium">Dry & Clean compressed Air / Gas. (Ex. Biogas, CNG, LPG, PNG & LNG etc.)</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-5 md:p-6 font-semibold text-slate-800 align-top">Line Size</td>
                <td className="p-5 md:p-6 text-slate-700 font-medium">DN15 to DN200 - DN125 not available (For others consult factory)</td>
              </tr>
              <tr className="bg-[#fafafa] hover:bg-slate-50 transition-colors">
                <td className="p-5 md:p-6 font-semibold text-slate-800 align-top">End Connection</td>
                <td className="p-5 md:p-6 text-slate-700 font-medium">Clamp / Flange (DN20-DN200) Threaded (BSP-F) (DN15 - DN20)</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-5 md:p-6 font-semibold text-slate-800 align-top">Accuracy</td>
                <td className="p-5 md:p-6 text-slate-700 font-medium">±3 % of Actual Flow Rate between 100% to 10% of Flow rate</td>
              </tr>
              <tr className="bg-[#fafafa] hover:bg-slate-50 transition-colors">
                <td className="p-5 md:p-6 font-semibold text-slate-800 align-top">Flow Velocity Range</td>
                <td className="p-5 md:p-6 text-slate-700 font-medium">5 m/s to 100 m/s max (at NTP Condition)</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-5 md:p-6 font-semibold text-slate-800 align-top">Flow Range</td>
                <td className="p-5 md:p-6 text-slate-700 font-medium">As per Table 1 above</td>
              </tr>
              <tr className="bg-[#fafafa] hover:bg-slate-50 transition-colors h-full">
                <td className="p-5 md:p-6 font-semibold text-slate-800 align-top">Display</td>
                <td className="p-5 md:p-6 text-slate-700 font-medium">Blind/LCD 16/2</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Right Column Table */}
        <div className="bg-white w-full">
          <table className="w-full text-left border-collapse">
            <tbody className="text-sm md:text-[15px] divide-y divide-slate-100">
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-5 md:p-6 font-semibold text-slate-800 w-1/3 align-top">Output</td>
                <td className="p-5 md:p-6 text-slate-700 font-medium">4-20 mA/RS 485, Pulse, Wireless Data Transfer</td>
              </tr>
              <tr className="bg-[#fafafa] hover:bg-slate-50 transition-colors">
                <td className="p-5 md:p-6 font-semibold text-slate-800 align-top">Power Supply</td>
                <td className="p-5 md:p-6 text-slate-700 font-medium">24Vdc/300mA Operating voltage between 20V to 28V 230Vac with Adaptor</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-5 md:p-6 font-semibold text-slate-800 align-top">Operating Fluid Temp.</td>
                <td className="p-5 md:p-6 text-slate-700 font-medium">0 - 100 C</td>
              </tr>
              <tr className="bg-[#fafafa] hover:bg-slate-50 transition-colors">
                <td className="p-5 md:p-6 font-semibold text-slate-800 align-top">Operating Fluid Pressure</td>
                <td className="p-5 md:p-6 text-slate-700 font-medium">20 Bar Max (other on request)</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-5 md:p-6 font-semibold text-slate-800 align-top">Wireless</td>
                <td className="p-5 md:p-6 text-slate-700 font-medium">Data on Communication</td>
              </tr>
              <tr className="bg-[#fafafa] hover:bg-slate-50 transition-colors">
                <td className="p-5 md:p-6 font-semibold text-slate-800 align-top">Mobile (mobile app available)</td>
                <td className="p-5 md:p-6 text-slate-700 font-medium">Instantaneous flow rate and total flow display on mobile With or without External antenna - WiFi 2dBi 2.4Ghz flexible Antenna</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-5 md:p-6 font-semibold text-slate-800 align-top">Operating Ambient Temperature</td>
                <td className="p-5 md:p-6 text-slate-700 font-medium">0 - 50 C</td>
              </tr>
              <tr className="bg-[#fafafa] hover:bg-slate-50 transition-colors">
                <td className="p-5 md:p-6 font-semibold text-slate-800 align-top">Temperature Drift at Ambient Temp</td>
                <td className="p-5 md:p-6 text-slate-700 font-medium">0.008 % / C maximum of Full Scale in the range 0 to 60 C</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="p-5 md:p-6 font-semibold text-slate-800 align-top">Ingress Protection</td>
                <td className="p-5 md:p-6 text-slate-700 font-medium">IP 65 for Transmitter (Sensor Excluded)</td>
              </tr>
              <tr className="bg-white hover:bg-slate-50 transition-colors">
                 <td colSpan={2} className="p-5 md:p-6">&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}

function OrderingInformation() {
  return (
    <div className="bg-white rounded-[2rem] border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-opacity duration-500 mt-8">
      <div className="p-8 md:p-12 pb-8 bg-slate-50 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-light text-[#4a89dc] mb-3">Ordering Information</h3>
        </div>
        <p className="text-slate-600 text-[15px] md:text-lg font-medium flex items-center flex-wrap gap-2">
          Sample code explained: 
          <span className="font-mono text-slate-800 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm whitespace-nowrap">
            Scirocco - 1000-1 - DN 25 - RS4 - P O/P WR - 3
          </span>
        </p>
      </div>

      <div className="p-8 md:p-12 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          
          {/* Column 1 */}
          <div className="space-y-10">
            {/* Model No */}
            <div className="flex items-stretch group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 flex-shrink-0 border border-slate-300 rounded-l-xl flex items-center justify-center font-bold text-slate-700 bg-white z-10 text-sm shadow-sm group-hover:border-[#4a89dc] transition-colors relative">
                1000-1
                <div className="absolute top-1/2 -right-[1px] w-4 h-[1px] bg-slate-300 group-hover:bg-[#4a89dc]"></div>
              </div>
              <div className="flex-grow border-y border-r border-slate-300 rounded-r-xl overflow-hidden flex flex-col shadow-sm group-hover:border-[#4a89dc] transition-colors ml-3 relative">
                <div className="absolute top-1/2 -left-[1px] w-3 h-[1px] bg-slate-300 group-hover:bg-[#4a89dc]"></div>
                <div className="bg-[#4a89dc] text-white font-bold py-2.5 px-5 text-[15px]">Model No.</div>
                <div className="bg-[#f0f9ff] px-5 py-2.5 text-sm text-slate-700 border-b border-slate-200 flex"><span className="font-semibold w-16 shrink-0">1000-1</span> <span>: Without Spool</span></div>
                <div className="bg-white px-5 py-2.5 text-sm text-slate-700 flex"><span className="font-semibold w-16 shrink-0">1000-2</span> <span>: With Spool</span></div>
              </div>
            </div>

            {/* Flow Meter Size */}
            <div className="flex items-stretch group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 flex-shrink-0 border border-slate-300 rounded-l-xl flex items-center justify-center font-bold text-slate-700 bg-white z-10 text-sm shadow-sm group-hover:border-emerald-500 transition-colors relative">
                DN 25
                <div className="absolute top-1/2 -right-[1px] w-4 h-[1px] bg-slate-300 group-hover:bg-emerald-500"></div>
              </div>
              <div className="flex-grow border-y border-r border-slate-300 rounded-r-xl overflow-hidden flex flex-col shadow-sm group-hover:border-emerald-500 transition-colors ml-3 relative">
                 <div className="absolute top-1/2 -left-[1px] w-3 h-[1px] bg-slate-300 group-hover:bg-emerald-500"></div>
                <div className="bg-emerald-600 text-white font-bold py-2.5 px-5 text-[15px]">Flow Meter Size</div>
                <div className="grid grid-cols-2 text-sm">
                  <div className="bg-[#f0f9ff] px-4 py-2 border-b border-r border-slate-200 text-slate-700 flex items-center"><span className="font-semibold inline-block w-14">DN 15</span> : 1/2"</div>
                  <div className="bg-[#f0f9ff] px-4 py-2 border-b border-slate-200 text-slate-700 flex items-center"><span className="font-semibold inline-block w-14">DN 65</span> : 2 1/2"</div>
                  
                  <div className="bg-white px-4 py-2 border-b border-r border-slate-200 text-slate-700 flex items-center"><span className="font-semibold inline-block w-14">DN 20</span> : 3/4"</div>
                  <div className="bg-white px-4 py-2 border-b border-slate-200 text-slate-700 flex items-center"><span className="font-semibold inline-block w-14">DN 80</span> : 3"</div>
                  
                  <div className="bg-[#f0f9ff] px-4 py-2 border-b border-r border-slate-200 text-slate-700 flex items-center"><span className="font-semibold inline-block w-14">DN 25</span> : 1"</div>
                  <div className="bg-[#f0f9ff] px-4 py-2 border-b border-slate-200 text-slate-700 flex items-center"><span className="font-semibold inline-block w-14">DN 100</span> : 4"</div>

                  <div className="bg-white px-4 py-2 border-b border-r border-slate-200 text-slate-700 flex items-center"><span className="font-semibold inline-block w-14">DN 32</span> : 1 1/4"</div>
                  <div className="bg-white px-4 py-2 border-b border-slate-200 text-slate-700 flex items-center"><span className="font-semibold inline-block w-14">DN 150</span> : 6"</div>

                  <div className="bg-[#f0f9ff] px-4 py-2 border-b border-r border-slate-200 text-slate-700 flex items-center"><span className="font-semibold inline-block w-14">DN 40</span> : 1 1/2"</div>
                  <div className="bg-[#f0f9ff] px-4 py-2 border-b border-slate-200 text-slate-700 flex items-center"><span className="font-semibold inline-block w-14">DN 200</span> : 8"</div>

                  <div className="bg-white px-4 py-2 border-r border-slate-200 text-slate-700 flex items-center"><span className="font-semibold inline-block w-14">DN 50</span> : 2"</div>
                  <div className="bg-white px-4 py-2 text-slate-700"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-10">
            {/* Output or Communication Port */}
            <div className="flex items-stretch group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 flex-shrink-0 border border-slate-300 rounded-l-xl flex items-center justify-center font-bold text-slate-700 bg-white z-10 text-sm shadow-sm group-hover:border-[#4a89dc] transition-colors relative">
                RS4
                 <div className="absolute top-1/2 -right-[1px] w-4 h-[1px] bg-slate-300 group-hover:bg-[#4a89dc]"></div>
              </div>
              <div className="flex-grow border-y border-r border-slate-300 rounded-r-xl overflow-hidden flex flex-col shadow-sm group-hover:border-[#4a89dc] transition-colors ml-3 relative">
                 <div className="absolute top-1/2 -left-[1px] w-3 h-[1px] bg-slate-300 group-hover:bg-[#4a89dc]"></div>
                <div className="bg-[#4a89dc] text-white font-bold py-2.5 px-5 text-[15px]">Output or<br/>Communication Port</div>
                <div className="bg-[#f0f9ff] px-5 py-2.5 text-sm text-slate-700 border-b border-slate-200 flex items-center"><span className="font-semibold w-12 shrink-0">mA</span> <span>: 4-20 mA</span></div>
                <div className="bg-white px-5 py-2.5 text-sm text-slate-700 flex items-center"><span className="font-semibold w-12 shrink-0">RS4</span> <span>: RS485</span></div>
              </div>
            </div>

            {/* Output Type */}
            <div className="flex items-stretch group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-24 flex-shrink-0 border border-slate-300 rounded-l-xl flex items-center justify-center font-bold text-slate-700 bg-white z-10 text-sm whitespace-nowrap px-1 shadow-sm group-hover:border-emerald-500 transition-colors relative">
                P O/P WR
                <div className="absolute top-1/2 -right-[1px] w-4 h-[1px] bg-slate-300 group-hover:bg-emerald-500"></div>
              </div>
              <div className="flex-grow border-y border-r border-slate-300 rounded-r-xl overflow-hidden flex flex-col shadow-sm group-hover:border-emerald-500 transition-colors ml-3 relative">
                 <div className="absolute top-1/2 -left-[1px] w-3 h-[1px] bg-slate-300 group-hover:bg-emerald-500"></div>
                <div className="bg-emerald-600 text-white font-bold py-2.5 px-5 text-[15px]">Output Type</div>
                <div className="bg-[#f0fdf4] px-5 py-4 text-sm text-slate-700 flex">
                  <span className="font-semibold shrink-0 mr-2 hidden sm:inline">P O/P WR :</span> 
                  <span>Pulse Output, Wireless</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="space-y-10">
            {/* Power Supply */}
            <div className="flex items-stretch group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 flex-shrink-0 border border-slate-300 rounded-l-xl flex items-center justify-center font-bold text-slate-700 bg-white z-10 text-sm shadow-sm group-hover:border-[#4a89dc] transition-colors relative">
                3
                 <div className="absolute top-1/2 -right-[1px] w-4 h-[1px] bg-slate-300 group-hover:bg-[#4a89dc]"></div>
              </div>
              <div className="flex-grow border-y border-r border-slate-300 rounded-r-xl overflow-hidden flex flex-col shadow-sm group-hover:border-[#4a89dc] transition-colors ml-3 relative">
                 <div className="absolute top-1/2 -left-[1px] w-3 h-[1px] bg-slate-300 group-hover:bg-[#4a89dc]"></div>
                <div className="bg-[#4a89dc] text-white font-bold py-2.5 px-5 text-[15px]">Power Supply</div>
                <div className="bg-[#f0f9ff] px-5 py-4 text-sm text-slate-700 flex items-center"><span className="font-semibold w-8 shrink-0">3</span> <span>: 24 V Dc</span></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
