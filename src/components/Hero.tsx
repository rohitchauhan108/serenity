'use client';

import React from 'react';
import Link from 'next/link';
import {
  Calendar,
  Sparkles,
  Award,
  CheckCircle2,
  Video,
  ArrowUpRight,
  ShieldCheck,
  HeartHandshake,
  Heart,
  Brain,
  Star,
  Users
} from 'lucide-react';
import { CLINIC_INFO, DOCTOR_DATA } from '../data/clinicData';

interface HeroProps {
  openAppointmentModal: () => void;
  scrollToSection: (id: string) => void;
  openSelfCheckModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  openAppointmentModal,
  scrollToSection,
  openSelfCheckModal
}) => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-teal-50/60 via-slate-50 to-white pt-8 pb-16 lg:pt-12 lg:pb-24">
      {/* Organic Animated Floating Gradient Blobs & Soft Shapes */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-teal-200/40 rounded-full blur-3xl pointer-events-none animate-pulse-soft" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl pointer-events-none animate-float-slow" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Floating Leaves & Butterflies Icons */}
      <div className="absolute top-24 left-10 text-teal-300/60 animate-leaf-sway pointer-events-none hidden md:block">
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17,8C8,10 5,16 3,21C8,21 14,18 17,14C19,11 20,7 20,3C17,3 15,5 17,8Z" />
        </svg>
      </div>
      <div className="absolute bottom-20 right-1/2 text-purple-300/60 animate-float pointer-events-none hidden md:block">
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,2C13,4 14,7 13,10C15,8 18,7 20,9C22,11 21,14 18,15C21,17 22,20 19,21C16,22 14,19 13,17C12,19 10,22 7,21C4,20 5,17 8,15C5,14 4,11 6,9C8,7 11,8 13,10C12,7 13,4 12,2Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Trust Ribbon Badge */}
        <div className="flex justify-center md:justify-start mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-teal-200/80 shadow-xs backdrop-blur-md text-xs font-semibold text-teal-800">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            <Award className="w-3.5 h-3.5 text-teal-600" />
            <span>ANCC Board-Certified Psychiatric Care in Maryland</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Content */}
          <div className="lg:col-span-7 text-center md:text-left space-y-6">
            
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-[1.12] tracking-tight">
              Compassionate, <br className="hidden sm:block" />
              <span className="text-gradient-teal">Evidence-Based</span> Psychiatric Care & Lasting Wellness
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Empowering individuals and families across Maryland with personalized psychiatric evaluations, medication management, and holistically tailored mental health support led by <strong className="text-slate-800 font-semibold">{DOCTOR_DATA.name}, DNP, APRN, PMHNP-BC</strong>.
            </p>

            {/* Quick Feature Highlights Pill Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 max-w-xl">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/70 border border-slate-200/80 shadow-xs text-xs font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>In-Person & Telehealth</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/70 border border-slate-200/80 shadow-xs text-xs font-medium text-slate-700">
                <ShieldCheck className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>In-Network Insurance</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/70 border border-slate-200/80 shadow-xs text-xs font-medium text-slate-700">
                <Brain className="w-4 h-4 text-purple-600 flex-shrink-0" />
                <span>No Stigma, Full Respect</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3 justify-center md:justify-start">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl text-base font-bold text-white gradient-teal-blue shadow-lg shadow-teal-700/20 hover:shadow-xl hover:shadow-teal-700/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 group"
              >
                <Calendar className="w-5 h-5 text-teal-100 group-hover:rotate-12 transition-transform" />
                <span>Schedule Consultation</span>
                <ArrowUpRight className="w-4 h-4 text-teal-200" />
              </Link>

              <button
                onClick={() => scrollToSection('services')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl text-base font-semibold text-slate-700 bg-white/90 border border-slate-200/90 shadow-xs hover:bg-teal-50/80 hover:text-teal-800 hover:border-teal-200 transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Services</span>
              </button>

              <button
                onClick={openSelfCheckModal}
                className="w-full sm:w-auto px-5 py-3.5 rounded-2xl text-xs font-bold text-purple-700 bg-purple-50/80 border border-purple-200 shadow-xs hover:bg-purple-100 transition-all flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span>Wellness Self-Check</span>
              </button>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-slate-200/60 flex flex-wrap items-center justify-center md:justify-start gap-6 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-slate-800">5.0 Star Rated Care</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-teal-600" />
                <span>5,000+ Consultations</span>
              </div>
              <div className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-emerald-600" />
                <span>Columbia, MD Clinic</span>
              </div>
            </div>

          </div>

          {/* Right Column: Doctor Portrait + Floating Glass Badges */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Background Glow Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-300/30 to-purple-300/20 rounded-3xl blur-2xl transform rotate-3 scale-95" />

            <div className="relative w-full max-w-md bg-white p-3 rounded-3xl shadow-2xl border border-slate-100 backdrop-blur-xl">
              
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-slate-100">
                <img
                  src="https://images.pexels.com/photos/6011576/pexels-photo-6011576.jpeg"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient Overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent p-4 flex flex-col justify-end text-white">
                  
                
                </div>
              </div>

              {/* Floating Glass Badge Top Left */}
              <div className="absolute -top-4 -left-4 glass-card p-3 rounded-2xl shadow-xl flex items-center gap-3 max-w-[200px] border border-white/90">
                <div className="p-2 bg-teal-500 text-white rounded-xl shadow-xs">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-800 leading-tight">ANCC Certified</div>
                  <div className="text-[10px] text-teal-800 font-semibold">Doctor of Nursing Practice</div>
                </div>
              </div>

              {/* Floating Glass Badge Bottom Right */}
              <div className="absolute -bottom-4 -right-4 glass-card p-3.5 rounded-2xl shadow-xl flex items-center gap-3 border border-white/90">
                <div className="p-2 bg-emerald-500 text-white rounded-xl shadow-xs">
                  <Heart className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Patient-Centered</div>
                  <div className="text-[10px] text-slate-500">Evidence-Based Care</div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
