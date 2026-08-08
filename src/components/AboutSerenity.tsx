'use client';

import React from 'react';
import {
  Heart,
  Target,
  Sparkles,
  Shield,
  Users,
  Brain,
  CheckCircle2,
  Award,
  Sun,
  Feather
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const AboutSerenity: React.FC = () => {
  const coreValues = [
    {
      title: 'Empathic Compassion',
      desc: 'We listen deeply without judgment, honoring every patient’s lived experience with dignity.',
      icon: Heart,
      color: 'bg-rose-50 text-rose-600 border-rose-200'
    },
    {
      title: 'Clinical Excellence',
      desc: 'Grounding every evaluation and prescription in current, peer-reviewed psychiatric science.',
      icon: Target,
      color: 'bg-teal-50 text-teal-600 border-teal-200'
    },
    {
      title: 'Stigma Reduction',
      desc: 'Actively dismantling barriers and shame so seeking mental health support feels natural and empowered.',
      icon: Sun,
      color: 'bg-amber-50 text-amber-600 border-amber-200'
    },
    {
      title: 'Individualized Care',
      desc: 'Refusing one-size-fits-all blueprints; tailoring every strategy to your biology and personal values.',
      icon: Feather,
      color: 'bg-purple-50 text-purple-600 border-purple-200'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-50/80 via-teal-50/30 to-white relative overflow-hidden">
      {/* Background Subtle Accent & Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#0d9488_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Welcome to Serenity Behavioral & Wellness Services</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            A Safe Haven for Healing, Balance, and Emotional Resilience
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Serenity Behavioral & Wellness Services LLC was founded on a singular conviction: that psychiatric care should be an empowering, respectful collaboration between practitioner and patient.
          </p>
        </div>

        {/* Split Layout Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-100 aspect-[4/3]">
              <img
                src="/about.jpg"
                alt="Serenity Behavioral Clinic Environment"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-semibold text-teal-300 uppercase tracking-widest">Our Environment</span>
                
              </div>
            </div>

            {/* Overlapping Glass Card */}
            <div className="absolute -bottom-8 -right-4 sm:right-6  bg-white p-5 rounded-2xl shadow-xl max-w-xs border border-white/90 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-teal-600 text-white rounded-xl shadow-xs bg">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-slate-900">100%</div>
                  <div className="text-xs font-semibold text-slate-600">HIPAA Confidential & Safe</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Mission & Vision */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Mission Box */}
            <div className="glass-card p-6 rounded-2xl border border-teal-100/80 bg-gradient-to-r from-teal-50/40 to-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-teal-600 text-white rounded-xl shadow-xs">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-xl text-slate-900">Our Mission</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                To deliver accessible, evidence-based, and deeply compassionate psychiatric care that honors the whole person. We aim to relieve mental health symptoms, foster resilience, and help individuals and families across Maryland live meaningful, fulfilled lives.
              </p>
            </div>

            {/* Vision Box */}
            <div className="glass-card p-6 rounded-2xl border border-purple-100/80 bg-gradient-to-r from-purple-50/40 to-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-purple-600 text-white rounded-xl shadow-xs">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-xl text-slate-900">Our Vision</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                A Maryland community where mental health is prioritized without stigma, where psychiatric evaluations are warm and unhurried, and where every client receives custom care tailored to their biological and emotional needs.
              </p>
            </div>

            {/* Quick Points List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>ANCC Board-Certified Practitioner</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Doctor of Nursing Practice (DNP)</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Lifespan Psychiatric Specialty</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>12 Years Clinical Experience</span>
              </div>
            </div>

          </div>

        </div>

        {/* Core Values 4-Card Grid */}
        <div className="mt-16 pt-12 border-t border-slate-100">
          <div className="text-center mb-10">
            <h3 className="font-heading font-bold text-2xl text-slate-900">Our Core Pillars of Care</h3>
            <p className="text-slate-500 text-sm mt-1">The foundational principles guiding every consultation at Serenity Behavioral</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div 
                  key={idx}
                  className="glass-card p-6 rounded-2xl border border-slate-200/80 hover:border-teal-300 transition-all group"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border mb-4 shadow-xs ${val.color}`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                    {val.title}
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
