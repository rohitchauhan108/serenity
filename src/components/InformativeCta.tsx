'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Calendar,
  Phone,
  ShieldCheck,
  Clock,
  Sparkles,
  Video,
  Award,
  ArrowRight,
  Activity,
  Brain,
  Pill,
  Zap,
  Check
} from 'lucide-react';
import { CLINIC_INFO, DOCTOR_DATA } from '../data/clinicData';

interface InformativeCtaProps {
  openAppointmentModal: () => void;
  openSelfCheckModal: () => void;
}

export const InformativeCta: React.FC<InformativeCtaProps> = ({
  openAppointmentModal,
  openSelfCheckModal
}) => {
  const [selectedGoal, setSelectedGoal] = useState<string>('Psychiatric Evaluation');
  const [activeInfoTab, setActiveInfoTab] = useState<'intake' | 'insurance' | 'telehealth'>('intake');

  const goals = [
    { id: 'eval', label: 'Psychiatric Evaluation', icon: Brain },
    { id: 'meds', label: 'Medication Care', icon: Pill },
    { id: 'adhd', label: 'ADHD Assessment', icon: Zap },
    { id: 'telehealth', label: 'Telehealth Care', icon: Video },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Radial Glows & Grid Pattern */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-teal-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.07] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Dark Teal CTA Box (Inspired by Reference Design) */}
        <div className="bg-gradient-to-br from-[#062c29] via-[#093a36] to-[#041d1b] rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-12 border border-teal-500/30 shadow-2xl relative overflow-hidden mb-12">
          
          {/* Subtle Background Glow inside Box */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Goal Selector & Doctor Badge */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
              
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-teal-950/90 border border-teal-400/30 text-teal-300 text-xs sm:text-sm font-extrabold tracking-wide uppercase shadow-inner">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4.5" />
                <span>4 Evaluation Slots Remaining This Week</span>
              </div>

              {/* Main Headline */}
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Ready to break free from mental overwhelm and claim your clarity?
              </h2>

              {/* Subtitle */}
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
                Begin with a dedicated, confidential psychiatric consultation with <strong className="text-teal-300 font-semibold">Dr. Barbara Clement Njoku, DNP</strong>. Together, we will pinpoint your root symptoms and map out your personal mental wellness blueprint.
              </p>

              {/* Doctor Avatar Badge with Image */}
              <div className="flex items-center gap-4 p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 max-w-md">
                <div className="relative w-14 h-14 rounded-xl overflow-hidden border-2 border-teal-400/60 flex-shrink-0 shadow-md">
                  <Image
                    src={CLINIC_INFO.doctorPortraitUrl}
                    alt={DOCTOR_DATA.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-sm sm:text-base text-white">{DOCTOR_DATA.name}</h4>
                    <Award className="w-4 h-4 text-teal-400" />
                  </div>
                  <p className="text-xs text-teal-200 font-medium">{DOCTOR_DATA.titles}</p>
                  <p className="text-[11px] text-slate-300 mt-0.5">12+ Years Experience • ANCC Board Certified</p>
                </div>
              </div>

              {/* Goal Selection Pills */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-widest text-teal-300 block">
                  Select Your Primary Care Goal:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {goals.map((goal) => {
                    const Icon = goal.icon;
                    const isSelected = selectedGoal === goal.label;
                    return (
                      <button
                        key={goal.id}
                        onClick={() => setSelectedGoal(goal.label)}
                        className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                          isSelected
                            ? 'bg-white text-teal-950 shadow-lg scale-102'
                            : 'bg-white/10 text-slate-200 border border-white/10 hover:bg-white/20'
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-teal-700' : 'text-teal-300'}`} />
                        <span>{goal.label}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-teal-700 ml-0.5" />}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Column: High-Converting Discovery Session Card */}
            <div className="lg:col-span-5">
              
              <div className="bg-slate-900/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-teal-500/40 shadow-2xl space-y-6 relative group">
                
                {/* Header Tag */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-teal-400 block mb-0.5">
                      Confidential Consultation
                    </span>
                    <h3 className="font-heading font-extrabold text-xl text-white">
                      1:1 Diagnostic & Evaluation
                    </h3>
                  </div>
                  <div className="p-3 bg-teal-500/20 text-teal-300 rounded-2xl border border-teal-400/30">
                    <Clock className="w-6 h-6" />
                  </div>
                </div>

                {/* Key Spec Rows */}
                <div className="space-y-3 text-xs sm:text-sm">
                  
                  <div className="flex items-center justify-between py-2 border-b border-white/5">
                    <span className="text-slate-400 font-medium">Duration:</span>
                    <span className="text-white font-bold">60 Minutes Initial Assessment</span>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-white/5">
                    <span className="text-slate-400 font-medium">Focus Area:</span>
                    <span className="text-teal-300 font-bold">{selectedGoal}</span>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-white/5">
                    <span className="text-slate-400 font-medium">Location:</span>
                    <span className="text-white font-bold">Maryland Telehealth</span>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-white/5">
                    <span className="text-slate-400 font-medium">Insurances:</span>
                    <span className="text-emerald-400 font-bold">In-Network (BCBS, Aetna, etc.)</span>
                  </div>

                </div>

                {/* Trust Pill */}
                <div className="p-3 rounded-xl bg-teal-950/80 border border-teal-500/30 text-teal-200 text-xs font-semibold flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-400 flex-shrink-0" />
                  <span>100% Confidential & Tailored to Your Needs</span>
                </div>

                {/* CTA Action Button */}
                <button
                  onClick={openAppointmentModal}
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-300 text-slate-950 font-extrabold text-base shadow-xl hover:shadow-teal-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 group/btn"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Confirm & Schedule Call</span>
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                {/* Reassurance text */}
                <p className="text-[11px] text-center text-slate-400 leading-normal">
                  In-network insurance accepted. No payment required up front.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Visual Showcase Bar with Clinical Environment Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          
          <div className="lg:col-span-7 relative h-64 sm:h-80 rounded-3xl overflow-hidden border border-white/10 shadow-xl group">
            <Image
              src="https://images.pexels.com/photos/7176043/pexels-photo-7176043.jpeg"
              alt="Telehealth Care at Serenity Behavioral"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <span className="text-xs font-extrabold text-teal-300 uppercase tracking-wider bg-teal-950/80 px-3 py-1 rounded-full border border-teal-500/40 inline-block">
                Modern Mental Healthcare
              </span>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                HIPAA-Compliant Telehealth & Peaceful Columbia Office
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Attend secure virtual visits from home or visit our quiet, welcoming suite in Howard County, MD.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between space-y-6">
            
            <div className="space-y-3">
              <span className="text-xs font-bold text-teal-300 uppercase tracking-widest block">
                Direct Contact Hotline
              </span>
              <h3 className="font-heading font-extrabold text-2xl text-white">
                Have Immediate Questions?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Speak directly with our intake coordinator to verify your insurance benefits or ask about appointment availability.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="w-full py-3.5 px-5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-extrabold text-sm transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-teal-300" />
                <span>Call Intake: {CLINIC_INFO.phone}</span>
              </a>

              <button
                onClick={openSelfCheckModal}
                className="w-full py-3.5 px-5 rounded-2xl bg-teal-900/60 hover:bg-teal-900 border border-teal-500/40 text-teal-200 font-extrabold text-sm transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Activity className="w-4 h-4 text-teal-300" />
                <span>Take 2-Min Mental Health Self-Check</span>
              </button>
            </div>

          </div>

        </div>

        {/* Informative Guidance Tabs Area */}
        <div className="bg-slate-900/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs font-bold text-teal-300 uppercase tracking-widest block mb-1">
                Patient Empowerment Center
              </span>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                What to Expect When You Reach Out
              </h3>
            </div>

            {/* Information Tabs */}
            <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-2xl border border-white/10">
              <button
                onClick={() => setActiveInfoTab('intake')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeInfoTab === 'intake'
                    ? 'bg-teal-500 text-slate-950 shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Intake Process
              </button>
              <button
                onClick={() => setActiveInfoTab('insurance')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeInfoTab === 'insurance'
                    ? 'bg-teal-500 text-slate-950 shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Insurance Check
              </button>
              <button
                onClick={() => setActiveInfoTab('telehealth')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeInfoTab === 'telehealth'
                    ? 'bg-teal-500 text-slate-950 shadow-md'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                Virtual Visits
              </button>
            </div>
          </div>

          {/* Tab Content Display */}
          {activeInfoTab === 'intake' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 animate-in fade-in duration-300">
              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-[11px] font-extrabold text-teal-300 uppercase tracking-wider">Step 1</div>
                <h4 className="font-bold text-sm sm:text-base text-white">Diagnostic Interview</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  A 60-minute in-depth psychiatric evaluation exploring medical background, symptoms, past treatments, and lifestyle factors.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-[11px] font-extrabold text-teal-300 uppercase tracking-wider">Step 2</div>
                <h4 className="font-bold text-sm sm:text-base text-white">Collaborative Care Plan</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Together with Dr. Njoku, craft an individualized strategy including medication management, therapy referrals, and wellness habits.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-[11px] font-extrabold text-teal-300 uppercase tracking-wider">Step 3</div>
                <h4 className="font-bold text-sm sm:text-base text-white">Follow-Up & Refills</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Regular 30-minute follow-ups to monitor medication effectiveness, minimize side effects, and optimize your mental wellness.
                </p>
              </div>
            </div>
          )}

          {activeInfoTab === 'insurance' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 animate-in fade-in duration-300">
              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-[11px] font-extrabold text-teal-300 uppercase tracking-wider">No Surprise Fees</div>
                <h4 className="font-bold text-sm sm:text-base text-white">Benefit Verification</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Our clinical intake coordinator verifies your exact copay, coinsurance, and deductible details prior to your first appointment.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-[11px] font-extrabold text-teal-300 uppercase tracking-wider">Wide Coverage</div>
                <h4 className="font-bold text-sm sm:text-base text-white">Major MD Networks</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  In-network with CareFirst BlueCross, Aetna, Cigna, Medicare, Maryland Medicaid, UnitedHealthcare, and Hopkins US Family Health.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-[11px] font-extrabold text-teal-300 uppercase tracking-wider">Self-Pay Support</div>
                <h4 className="font-bold text-xs sm:text-sm text-white font-bold">Out-of-Network Superbills</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  If out-of-network, we provide detailed superbills for simple insurance reimbursement submission.
                </p>
              </div>
            </div>
          )}

          {activeInfoTab === 'telehealth' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 animate-in fade-in duration-300">
              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-[11px] font-extrabold text-teal-300 uppercase tracking-wider">100% Secure</div>
                <h4 className="font-bold text-sm sm:text-base text-white">HIPAA-Compliant Platform</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Private, encrypted high-definition video connections accessible from any smartphone, tablet, or desktop.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-[11px] font-extrabold text-teal-300 uppercase tracking-wider">Convenient</div>
                <h4 className="font-bold text-sm sm:text-base text-white">Care Across Maryland</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Save travel time and commute stress while receiving top-tier psychiatric evaluations from home or office.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-[11px] font-extrabold text-teal-300 uppercase tracking-wider">E-Prescriptions</div>
                <h4 className="font-bold text-sm sm:text-base text-white">Direct Pharmacy Routing</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Prescriptions sent electronically directly to your preferred local pharmacy immediately following your consultation.
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

