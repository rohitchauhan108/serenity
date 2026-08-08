'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

interface InsuranceProvider {
  id: string;
  name: string;
  logo: string;
  badge?: string;
}

// Embedded Insurance Data
const INSURANCES: InsuranceProvider[] = [
  { id: '1', name: 'Medicaid', logo: '/logos/1.webp' },
  { id: '2', name: 'Medicare', logo: '/logos/2.png' },
  { id: '3', name: 'Aetna', logo: '/logos/3.webp' },
  { id: '4', name: 'CareFirst', logo: '/logos/4.webp' },
  { id: '5', name: 'Cigna', logo: '/logos/5.webp' },
  { id: '6', name: 'UnitedHealthcare', logo: '/logos/6.webp' },
  { id: '7', name: 'AmeriHealth', logo: '/logos/7.webp' },
  { id: '8', name: 'MedStar Health', logo: '/logos/8.webp' },
  { id: '9', name: 'Amerigroup', logo: '/logos/9.webp' },
  { id: '10', name: 'Optum', logo: '/logos/10.jpg' },
];

export const InsuranceSection: React.FC = () => {
  return (
    <section id="insurance" className="py-16 lg:py-24 bg-gradient-to-b from-white via-teal-50/40 to-slate-50 relative overflow-hidden">
      
      {/* --- BACKGROUND PATTERN & EFFECTS --- */}
      {/* 1. Subtle Dot Matrix Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.25] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(#0d9488 0.85px, transparent 0.85px)`,
          backgroundSize: '18px 18px'
        }}
      />

      {/* 2. Floating Ambient Glow Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[28rem] h-[28rem] bg-purple-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-5 text-center lg:text-left space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/80 border border-teal-200/80 text-teal-800 text-xs font-bold uppercase tracking-wider shadow-xs">
              <ShieldCheck className="w-4 h-4 text-teal-700" />
              <span>In-Network Care</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight tracking-tight">
              Accepted <span className="text-gradient-teal">Insurances</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              We&apos;re pleased to be in-network with most major insurance plans and are constantly working to expand our coverage options across Maryland.
            </p>

            {/* Micro-Trust Note */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-medium text-slate-500 pt-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Out-of-network claims & self-pay options also available</span>
            </div>

          </div>

          {/* Right Column: 4-Column Responsive Grid with Larger Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-5">
              {INSURANCES.map((item) => (
                <div
                  key={item.id}
                  className="group relative bg-white/95 backdrop-blur-md p-4 sm:p-2 rounded-2xl border border-teal-100/90 shadow-xs hover:border-teal-400 hover:shadow-xl hover:shadow-teal-900/5 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center h-28 sm:h-32 w-full text-center"
                >
                  {/* Optional Provider Sub-Badge */}
                  {item.badge && (
                    <span className="absolute -top-2 px-2.5 py-0.5 rounded-full bg-teal-50 border border-teal-200 text-[9px] font-bold text-teal-800 z-10 shadow-xs">
                      {item.badge}
                    </span>
                  )}

                  {/* Logo Image - Scaled UP to fill card space */}
                  <img
                    src={item.logo}
                    alt={`${item.name} Insurance`}
                    className="w-full h-full object-contain p-1 filter group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLElement;
                      target.style.display = 'none';
                      if (target.nextElementSibling) {
                        (target.nextElementSibling as HTMLElement).style.display = 'block';
                      }
                    }}
                  />

                  {/* Fallback Text if Logo fails to load */}
                  <span className="hidden font-heading font-extrabold text-sm text-slate-800 group-hover:text-teal-700">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InsuranceSection;