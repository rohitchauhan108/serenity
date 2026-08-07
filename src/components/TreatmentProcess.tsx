'use client';

import React from 'react';
import {
  CalendarCheck,
  Search,
  Lightbulb,
  FileText,
  Pill,
  TrendingUp,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { TREATMENT_PROCESS_STEPS } from '../data/clinicData';

const STEP_ICONS: Record<string, React.ElementType> = {
  CalendarCheck,
  Search,
  Lightbulb,
  FileText,
  Pill,
  TrendingUp
};

export const TreatmentProcess: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-gradient-to-b from-slate-50 via-teal-50/20 to-white relative overflow-hidden">
      {/* Background Radial Glow & Pattern */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#0d9488_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Your Care Journey</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            A Clear, Collaborative Path to Recovery
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            From your very first intake to sustained long-term emotional wellness, every step is guided by empathy and clinical excellence.
          </p>
        </div>

        {/* Steps Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {TREATMENT_PROCESS_STEPS.map((step) => {
            const IconComponent = STEP_ICONS[step.icon] || CalendarCheck;
            return (
              <div
                key={step.step}
                className="bg-white p-6 rounded-3xl border border-slate-200/80 hover:border-teal-400 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-teal-700 text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-110 group-hover:bg-teal-800 transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-heading font-extrabold text-slate-200 group-hover:text-teal-300 transition-colors">
                      0{step.step}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider block mb-1">
                    {step.subtitle}
                  </span>

                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-2 group-hover:text-teal-800 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>Step {step.step} of 6</span>
                  <ChevronRight className="w-4 h-4 text-teal-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
