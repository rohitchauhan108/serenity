'use client';

import React from 'react';
import {
  ShieldCheck,
  HeartHandshake,
  Clock,
  Video,
  Award,
  Sparkles,
  Lock,
  UserCheck,
  CheckCircle2,
  Brain
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Award,
      title: 'ANCC Board-Certified Doctor',
      desc: 'Care led by Dr. Barbara Clement Njoku, DNP, APRN, PMHNP-BC, combining doctoral academic rigor with genuine empathy.',
      badge: 'Expertise'
    },
    {
      icon: ShieldCheck,
      title: 'Evidence-Based Psychiatry',
      desc: 'All evaluations, diagnostic frameworks (DSM-5-TR), and medication management follow peer-reviewed clinical guidelines.',
      badge: 'Science'
    },
    {
      icon: HeartHandshake,
      title: 'Patient-Centered Philosophy',
      desc: 'You are never a diagnosis number. We listen without rushing and craft treatment plans aligned with your goals.',
      badge: 'Empathy'
    },
    {
      icon: Lock,
      title: 'Confidential & Safe Space',
      desc: '100% HIPAA-compliant sanctuary where you can speak candidly without stigma, shame, or fear of judgment.',
      badge: 'Privacy'
    },
    {
      icon: Video,
      title: 'Maryland Telehealth Care',
      desc: 'Receive virtual psychiatric care securely from the comfort of your home anywhere in Maryland.',
      badge: 'Accessibility'
    },
    {
      icon: Clock,
      title: 'Flexible Appointment Scheduling',
      desc: 'Prompt initial consultations within 3-5 days, evening availability, and streamlined refill follow-ups.',
      badge: 'Convenience'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 via-teal-50/20 to-slate-50 relative overflow-hidden">
      {/* Background Radial Glow & Pattern */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#0f766e_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.035] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>The Serenity Distinction</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Maryland Families Trust Serenity Behavioral
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We bridge advanced psychiatric science with warm, human-centered care designed to build lasting emotional health.
          </p>
        </div>

        {/* 6 Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-3xl border border-slate-200/80 hover:border-teal-400 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 bg-teal-50 text-teal-700 rounded-2xl group-hover:bg-teal-700 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-2xs">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-teal-800 bg-teal-50/80 px-2.5 py-1 rounded-full border border-teal-200/50">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-2 group-hover:text-teal-900 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Standard of Care</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
