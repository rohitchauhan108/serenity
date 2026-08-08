'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Award,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Calendar,
  Sparkles,
  Quote,
  Heart,
  ShieldCheck,
  Building2,
  BookOpen,
  Stethoscope,
  ChevronRight,
  ArrowRight,
  Check,
  Clock,
  Zap,
  Activity
} from 'lucide-react';
import { DOCTOR_DATA, CLINIC_INFO } from '../data/clinicData';

interface MeetDoctorProps {
  openAppointmentModal: () => void;
}

export const MeetDoctor: React.FC<MeetDoctorProps> = ({ openAppointmentModal }) => {
  const [activeMilestone, setActiveMilestone] = useState<number>(4);

  const milestoneMetadata = [
    {
      icon: Stethoscope,
      category: 'Clinical Foundations',
      highlights: ['BSN Nursing Graduate', 'Acute Med-Surg Care', 'Psychiatric Observation'],
      badgeColor: 'bg-teal-500/20 text-teal-300 border-teal-400/30',
      nodeGradient: 'from-teal-500 to-teal-700',
    },
    {
      icon: ShieldCheck,
      category: 'National Board Certification',
      highlights: ['Johns Hopkins Specialty', 'ANCC PMHNP-BC Certified', 'Prescriptive Authority'],
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/30',
      nodeGradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: GraduationCap,
      category: 'Doctoral Excellence',
      highlights: ['Doctor of Nursing Practice (DNP)', 'Univ of Maryland Graduate', 'Integrated Care Research'],
      badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-400/30',
      nodeGradient: 'from-purple-500 to-indigo-600',
    },
    {
      icon: Building2,
      category: 'Practice Establishment',
      highlights: ['Serenity Behavioral Founded', 'Columbia MD Headquarters', 'Patient-First Care Model'],
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/30',
      nodeGradient: 'from-emerald-500 to-teal-700',
    },
    {
      icon: Sparkles,
      category: 'Active Leadership & Expansion',
      highlights: ['Statewide HIPAA Telehealth', 'In-Network Insurance Growth', '12 Years Clinical Excellence'],
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-400/30',
      nodeGradient: 'from-amber-400 to-emerald-500',
    },
  ];

  return (
    <section id="doctor" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Soft Decorative Gradient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/80 border border-teal-200 text-teal-900 text-xs font-bold uppercase">
            <Award className="w-3.5 h-3.5 text-teal-700" />
            <span>Meet Your Provider</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Dedicated Psychiatric Excellence & Compassionate Care
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Board-Certified Psychiatric-Mental Health Nurse Practitioner leading Serenity Behavioral & Wellness Services.
          </p>
        </div>

        {/* Doctor Bio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Doctor Portrait + Credentials Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative bg-white p-3 rounded-3xl shadow-xl border border-slate-200/80">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-slate-100">
                <img
                  src={DOCTOR_DATA.doctorPortraitUrl || CLINIC_INFO.heroBannerUrl}
                  alt={DOCTOR_DATA.name}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-teal-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-teal-400/30 flex items-center gap-1.5 shadow-md">
                  <Award className="w-3.5 h-3.5 text-teal-300" />
                  <span>ANCC Board Certified</span>
                </div>
              </div>

              {/* Title Badge Below Image */}
              <div className="p-4 text-center">
                <h3 className="font-heading font-extrabold text-2xl text-slate-900">
                  {DOCTOR_DATA.name}
                </h3>
                <p className="text-teal-700 font-bold text-sm mt-1">
                  {DOCTOR_DATA.titles}
                </p>
                <div className="mt-3 flex items-center justify-center gap-2 text-xs font-medium text-slate-500 bg-slate-50 py-2 rounded-xl border border-slate-100">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Practicing in Maryland since 2012</span>
                </div>
              </div>
            </div>

        
          </div>

          {/* Right Column: Bio Narrative & Specialties */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
              {DOCTOR_DATA.bio.map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? "text-base sm:text-lg text-slate-800 font-medium leading-relaxed" : ""}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Specialties Grid */}
            <div className="pt-4">
              <h4 className="font-heading font-bold text-lg text-slate-900 mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-teal-600" />
                Key Clinical Specialties
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {DOCTOR_DATA.specialties.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-white border border-slate-200/80 text-xs font-semibold text-slate-800 shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Treatment Philosophy Quote Callout */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-teal-900 to-slate-900 text-white relative overflow-hidden shadow-xl mt-6">
              <Quote className="absolute -bottom-4 -right-4 w-32 h-32 text-teal-800/20 pointer-events-none" />
              <div className="relative z-10 space-y-3">
                <span className="text-xs font-bold text-teal-300 uppercase tracking-widest">Treatment Philosophy</span>
                <p className="font-heading font-medium text-base sm:text-lg italic text-teal-50 leading-relaxed">
                  "{DOCTOR_DATA.philosophy}"
                </p>
                <div className="text-xs text-teal-200 font-bold pt-2">
                  — {DOCTOR_DATA.name}, DNP
                </div>
              </div>
            </div>

           

          </div>

        </div>

        {/* Upgraded Modern Experience & Career Timeline Section */}
        <div className="mt-20">
          
          <div className="bg-gradient-to-br from-slate-950 via-[#072d29] to-slate-950 text-white rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 border border-teal-500/30 shadow-2xl relative overflow-hidden">
            
            {/* Background Ambient Glows & Grid */}
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

            {/* Section Header inside Timeline */}
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-900/80 border border-teal-400/40 text-teal-300 text-xs sm:text-sm font-extrabold uppercase tracking-wider shadow-inner">
                <Clock className="w-4 h-4 text-teal-300" />
                <span>12 Years of Clinical Evolution</span>
              </div>
              <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Clinical Milestones & Evolution
              </h3>
              <p className="text-teal-100/90 text-sm sm:text-base leading-relaxed">
                A decade-plus journey of medical dedication, advanced doctoral research, and compassionate patient advocacy across Maryland.
              </p>

              {/* Milestone Summary Ribbon */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-2">
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-semibold text-teal-200">
                  🏥 2012 Acute Clinical Care
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-semibold text-teal-200">
                  🎓 2016 Johns Hopkins PMHNP
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-semibold text-teal-200">
                  📜 2019 DNP Doctorate Degree
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-semibold text-teal-200">
                  🌱 2021 Serenity Clinic Launch
                </span>
              </div>
            </div>

            {/* Timeline Vertical Spine & Cards Container */}
            <div className="relative max-w-5xl mx-auto z-10">
              
              {/* Glowing Timeline Line */}
              {/* Desktop center line */}
              <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-teal-400 via-emerald-400 to-teal-500 rounded-full shadow-[0_0_12px_rgba(20,184,166,0.5)] transform -translate-x-1/2" />
              {/* Mobile left-aligned line */}
              <div className="md:hidden absolute left-5 top-4 bottom-4 w-1 bg-gradient-to-b from-teal-400 via-emerald-400 to-teal-500 rounded-full shadow-[0_0_12px_rgba(20,184,166,0.5)]" />

              <div className="space-y-8 sm:space-y-12">
                {DOCTOR_DATA.timeline.map((item, idx) => {
                  const meta = milestoneMetadata[idx] || milestoneMetadata[0];
                  const IconComp = meta.icon;
                  const isSelected = activeMilestone === idx;

                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveMilestone(idx)}
                      className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 cursor-pointer group ${
                        idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      
                      {/* Milestone Card Container */}
                      <div className="w-full md:w-1/2 pl-14 md:pl-0">
                        <div
                          className={`p-6 sm:p-7 rounded-2xl sm:rounded-3xl border transition-all duration-300 relative ${
                            isSelected
                              ? 'bg-slate-900/95 border-teal-400 shadow-[0_0_25px_rgba(20,184,166,0.25)] scale-[1.02]'
                              : 'bg-white/5 backdrop-blur-md border-white/10 hover:border-teal-400/50 hover:bg-white/10'
                          }`}
                        >
                          {/* Top Row inside Card: Year Badge & Category Tag */}
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-black tracking-wider border shadow-sm ${meta.badgeColor}`}>
                              {item.year}
                            </span>
                            <span className="text-[11px] font-bold text-teal-300 uppercase tracking-widest flex items-center gap-1">
                              <IconComp className="w-3.5 h-3.5" />
                              <span>{meta.category}</span>
                            </span>
                          </div>

                          {/* Title */}
                          <h4 className="font-heading font-extrabold text-lg sm:text-xl text-white mb-2 leading-snug group-hover:text-teal-200 transition-colors">
                            {item.title}
                          </h4>

                          {/* Description */}
                          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                            {item.description}
                          </p>

                          {/* Key Highlights Pills */}
                          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                            {meta.highlights.map((tag, tIdx) => (
                              <span
                                key={tIdx}
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-medium text-teal-200"
                              >
                                <Check className="w-3 h-3 text-emerald-400" />
                                <span>{tag}</span>
                              </span>
                            ))}
                          </div>

                          {/* Selected Active Indicator */}
                          {isSelected && (
                            <div className="mt-4 pt-3 border-t border-teal-500/30 flex items-center justify-between text-xs text-teal-300 font-bold">
                              <span>Selected Milestone Overview</span>
                              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
                            </div>
                          )}

                        </div>
                      </div>

                      {/* Center Node Icon on Timeline Axis */}
                      <div
                        className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-11 h-11 rounded-2xl bg-gradient-to-br ${meta.nodeGradient} text-white flex items-center justify-center font-bold text-xs shadow-xl border-2 border-slate-900 z-20 transition-transform duration-300 ${
                          isSelected ? 'scale-125 ring-4 ring-teal-400/50' : 'group-hover:scale-110'
                        }`}
                      >
                        <IconComp className="w-5 h-5 text-white" />
                      </div>

                      {/* Empty spacer column for alternating layout on desktop */}
                      <div className="hidden md:block w-1/2" />

                    </div>
                  );
                })}
              </div>

            </div>

            {/* Bottom Callout Banner inside Timeline Container */}
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="font-heading font-extrabold text-lg text-white">
                  Ready to Experience Patient-Centered Psychiatric Care?
                </h4>
                <p className="text-xs sm:text-sm text-teal-200">
                  Schedule your comprehensive 60-minute evaluation with Dr. Njoku today.
                </p>
              </div>

              <button
                onClick={openAppointmentModal}
                className="py-3.5 px-6 rounded-xl bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-300 text-slate-950 font-extrabold text-sm shadow-xl hover:scale-105 transition-all cursor-pointer flex items-center gap-2 flex-shrink-0"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Evaluation with Dr. Njoku</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

