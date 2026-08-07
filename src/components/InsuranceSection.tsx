'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Search,
  Sparkles,
  HelpCircle,
  FileCheck,
  Phone
} from 'lucide-react';
import { INSURANCE_DATA, CLINIC_INFO } from '../data/clinicData';

export const InsuranceSection: React.FC = () => {
  const [selectedProvider, setSelectedProvider] = useState<string>(INSURANCE_DATA[0].id);
  const [memberIdInput, setMemberIdInput] = useState('');
  const [verificationResult, setVerificationResult] = useState<string | null>(null);

  const activeInsurance = INSURANCE_DATA.find((ins) => ins.id === selectedProvider) || INSURANCE_DATA[0];

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setVerificationResult(
      `Great news! ${activeInsurance.name} is fully accepted at Serenity Behavioral. Out-of-pocket costs typically depend on your specific deductible or copay. Our intake coordinator will confirm your exact benefits prior to your appointment.`
    );
  };

  return (
    <section id="insurance" className="py-20 bg-gradient-to-b from-teal-50/40 via-white to-slate-50 relative overflow-hidden">
      {/* Background Radial Orbs & Pattern */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-teal-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/80 border border-teal-200 text-teal-900 text-xs font-bold uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-700" />
            <span>Insurance & Billing Transparency</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            In-Network Insurance Plans Accepted
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We partner with major commercial and public insurance providers across Maryland so you can focus on wellness, not financial stress.
          </p>
        </div>

        {/* Insurance Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-16">
          {INSURANCE_DATA.map((ins) => (
            <button
              key={ins.id}
              onClick={() => setSelectedProvider(ins.id)}
              className={`p-5 rounded-2xl bg-white border text-center transition-all flex flex-col items-center justify-between group ${
                selectedProvider === ins.id
                  ? 'border-teal-600 shadow-md ring-2 ring-teal-500/20'
                  : 'border-slate-200/80 hover:border-teal-300 shadow-xs'
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center font-bold text-xs mb-3 group-hover:scale-110 transition-transform">
                <FileCheck className="w-5 h-5 text-teal-600" />
              </div>
              <h3 className="font-heading font-bold text-xs sm:text-sm text-slate-900 line-clamp-2">
                {ins.name}
              </h3>
              <span className="mt-2 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                {ins.badge}
              </span>
            </button>
          ))}
        </div>

        {/* Interactive Verification Card */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-teal-100 shadow-xl max-w-4xl mx-auto bg-gradient-to-r from-white via-teal-50/20 to-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-teal-700 text-white rounded-2xl">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-2xl text-slate-900">
                Insurance Coverage Details & Verification
              </h3>
              <p className="text-xs text-slate-500">
                Select your provider to see detailed coverage guidelines.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-6 space-y-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80">
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700">Selected Provider</span>
                <div className="font-heading font-extrabold text-xl text-slate-900 mt-1">
                  {activeInsurance.name}
                </div>
                <p className="text-slate-600 text-xs leading-relaxed mt-2">
                  {activeInsurance.notes}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>In-Network for MD Patients</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-6">
              <form onSubmit={handleVerify} className="space-y-3">
                <label className="block text-xs font-bold text-slate-700">
                  Verify Your {activeInsurance.logoText} Plan
                </label>
                <input
                  type="text"
                  placeholder="Enter Member ID or Plan Name (Optional)"
                  value={memberIdInput}
                  onChange={(e) => setMemberIdInput(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-teal-500 bg-white"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl text-white font-bold text-xs gradient-teal-blue shadow-md hover:opacity-95 transition-opacity"
                >
                  Verify Plan Acceptance
                </button>
              </form>

              {verificationResult && (
                <div className="mt-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs leading-relaxed animate-in fade-in duration-200">
                  {verificationResult}
                </div>
              )}
            </div>

          </div>

          <div className="mt-6 pt-4 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
            <div className="flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-teal-600" />
              <span>Questions about copays or superbills? Call our billing coordinator:</span>
            </div>
            <a href={`tel:${CLINIC_INFO.phone}`} className="font-bold text-teal-700 hover:underline">
              {CLINIC_INFO.phone}
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
