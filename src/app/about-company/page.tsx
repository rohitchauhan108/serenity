'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { AppointmentModal } from '../../components/AppointmentModal';
import { CLINIC_INFO } from '../../data/clinicData';
import {
  Building2,
  ShieldCheck,
  Award,
  HeartHandshake,
  Users,
  Target,
  Sparkles,
  CheckCircle2,
  MapPin,
  Clock,
  Phone,
  Mail,
  Shield,
  Stethoscope,
  Microscope,
  Calendar,
  ChevronRight,
  Sun,
  Feather,
  Compass,
  ArrowRight,
  BookOpen,
  Lock,
  Zap
} from 'lucide-react';

export default function AboutCompanyPage() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const companyStats = [
    { label: 'Established', value: 'Since 2012', desc: 'Serving Columbia & Maryland statewide' },
    { label: 'ANCC Board Certified', value: '100% Certified', desc: 'Highest national psychiatric credentialing' },
    { label: 'Patient Privacy', value: 'HIPAA Compliant', desc: 'Encrypted EHR & confidential telehealth' },
    { label: 'Care Delivery', value: 'Hybrid Model', desc: 'In-person clinic & statewide telehealth' }
  ];

  const clinicPillars = [
    {
      id: 'patient-centered',
      icon: HeartHandshake,
      title: 'Empathic Collaborative Care',
      subtitle: 'You are an active partner in your mental wellness roadmap.',
      description: 'We believe that true healing begins when patients feel genuinely seen, heard, and respected. We spend ample time during evaluations to understand your complete story—including life stressors, medical history, and personal values.',
      highlights: [
        '60-minute thorough initial diagnostic assessments',
        'Shared decision-making on medication options',
        'Direct, respectful communication with zero clinical jargon',
        'Culturally sensitive & trauma-informed care'
      ],
      badge: 'Core Philosophy'
    },
    {
      id: 'evidence-based',
      icon: Microscope,
      title: 'Evidence-Based Science',
      subtitle: 'Combining cutting-edge psychiatric research with clinical safety.',
      description: 'Every diagnostic protocol and pharmacotherapy plan at Serenity is grounded in current peer-reviewed psychiatric medicine. We strictly monitor outcomes and adjust treatment plans using evidence-rated clinical scales.',
      highlights: [
        'Precision psychopharmacology & medication management',
        'Rigorous lab monitoring & drug-interaction safeguards',
        'Integration of psychotherapy and lifestyle optimization',
        'Ongoing continuing education in breakthrough treatments'
      ],
      badge: 'Clinical Standards'
    },
    {
      id: 'accessibility',
      icon: Zap,
      title: 'Statewide Telehealth & Facility',
      subtitle: 'Eliminating geographic & scheduling barriers across Maryland.',
      description: 'Mental health support should fit seamlessly into your life. Whether you prefer in-person visits at our quiet Columbia office or flexible telehealth from the comfort of your home anywhere in Maryland, care is always accessible.',
      highlights: [
        'Secure HIPAA-encrypted HD video portal',
        'Easy electronic intake & portal communication',
        'Convenient appointment hours tailored to busy lives',
        'In-network insurance processing & transparent billing'
      ],
      badge: 'Modern Access'
    }
  ];

  const facilityFeatures = [
    { title: 'Private & Tranquil Setting', desc: 'Discreet entrance and soundproof consulting suites designed to alleviate sensory anxiety.' },
    { title: 'Strict HIPAA Security', desc: 'Bank-grade electronic medical record encryption and strict client confidentiality protocols.' },
    { title: 'Statewide Coverage', desc: 'Licensed to provide full psychiatric evaluation and prescribing anywhere in the State of Maryland.' },
    { title: 'Comprehensive Care', desc: 'From ADHD testing to depression, anxiety, mood stabilization, and trauma-focused care.' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-teal-500/20 selection:text-teal-900">
      
      {/* Universal Navbar */}
      <Navbar openAppointmentModal={() => setIsAppointmentModalOpen(true)} />

      <main className="flex-grow">
        
        {/* Distinctive Hero Header Section */}
        <section className="relative pt-12 pb-20 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white overflow-hidden">
          
          {/* Subtle Background Artistry */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-teal-300 font-medium mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <span>About Us</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-white font-bold">About the Company</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column Text */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-900/80 border border-teal-500/40 text-teal-200 text-xs font-bold uppercase tracking-wider shadow-sm">
                  <Building2 className="w-4 h-4 text-teal-400" />
                  <span>Clinic Profile & Practice Mission</span>
                </div>

                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                  Serenity Behavioral <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-100">
                    & Wellness Services
                  </span>
                </h1>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                  A premier outpatient psychiatric medical practice in Columbia, Maryland, dedicated to delivering integrative, compassionate, and board-certified mental health evaluations, medication management, and supportive care.
                </p>

                <div className="pt-2 flex flex-wrap gap-4 items-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-900 bg-teal-300 hover:bg-teal-200 transition-all shadow-lg shadow-teal-950/50 hover:scale-105"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Schedule Initial Consultation</span>
                  </Link>

                  <Link
                    href="/dr-barbara"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
                  >
                    <span>Meet Dr. Barbara</span>
                    <ArrowRight className="w-4 h-4 text-teal-300" />
                  </Link>
                </div>
              </div>

              {/* Right Column Custom Showcase Card */}
              <div className="lg:col-span-5">
                <div className="bg-slate-800/80 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-teal-500/30 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-teal-500 text-slate-950 font-black text-[10px] uppercase tracking-widest px-4 py-1 rounded-bl-xl">
                    Maryland Clinic
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-teal-900/80 border border-teal-500/40 p-2 flex items-center justify-center flex-shrink-0">
                        <img 
                          src={CLINIC_INFO.logoUrl} 
                          alt="Serenity Logo" 
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <h3 className="font-heading font-extrabold text-lg text-white">
                          Serenity Behavioral
                        </h3>
                        <p className="text-xs text-teal-300 font-medium">
                          Outpatient Psychiatric Specialty Practice
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 pt-3 border-t border-slate-700/80 text-xs text-slate-300">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0" />
                        <span>Columbia, Howard County, Maryland 21044</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                        <span>{CLINIC_INFO.phone}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>ANCC Certified PMHNP-BC Practitioner</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-teal-950/60 border border-teal-500/30 text-teal-100 text-xs leading-relaxed">
                      "Our practice stands as a trusted beacon for individuals seeking holistic, respectful, and science-backed mental health care."
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Company Key Metrics Banner */}
        <section className="bg-white border-b border-slate-200/80 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {companyStats.map((stat, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-teal-200 transition-colors">
                  <div className="text-xs font-bold uppercase tracking-wider text-teal-700">{stat.label}</div>
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Practice Mission & Story Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Image Banner */}
              <div className="lg:col-span-6 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white aspect-[4/3]">
                  <img 
                    src={CLINIC_INFO.heroBannerUrl} 
                    alt="Serenity Behavioral Clinic Interior" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-xs font-bold uppercase tracking-widest text-teal-300">Columbia Facility</span>
                    <h4 className="font-heading font-extrabold text-lg mt-1">Peaceful, Confidential Clinical Environment</h4>
                  </div>
                </div>
              </div>

              {/* Mission Narrative */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/80 text-teal-900 text-xs font-bold uppercase">
                  <Compass className="w-3.5 h-3.5 text-teal-700" />
                  <span>Our Practice Mission</span>
                </div>

                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Bridging Clinical Medicine & Whole-Person Compassion
                </h2>

                <p className="text-slate-600 leading-relaxed text-base">
                  Founded to address the critical need for accessible, respectful, and expert mental health care in Howard County and across Maryland, <strong className="text-slate-900">Serenity Behavioral & Wellness Services LLC</strong> provides comprehensive psychiatric evaluations and personalized therapy.
                </p>

                <p className="text-slate-600 leading-relaxed text-base">
                  We recognize that psychiatric conditions are multifaceted biology influenced by life experiences, stress, physical health, and environment. Our approach combines accurate diagnosis with targeted medication management, lifestyle counseling, and ongoing emotional support.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                    <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-teal-600" />
                      <span>ANCC Board-Certified</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">National credentialing in child, adolescent, and adult psychiatry.</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                    <div className="font-bold text-slate-900 text-sm flex items-center gap-2">
                      <Lock className="w-4 h-4 text-teal-600" />
                      <span>Uncompromising Privacy</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Full HIPAA compliance protecting your diagnostic record.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Practice Pillars Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase">
                <Target className="w-3.5 h-3.5 text-teal-600" />
                <span>Our Clinical Standards</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                The Pillars That Define Our Standard of Care
              </h2>
              <p className="text-slate-600 text-base">
                How we deliver consistent, respectful, and effective psychiatric treatments every single day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {clinicPillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={pillar.id} className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 hover:shadow-xl hover:border-teal-300 transition-all flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="p-3.5 rounded-2xl bg-teal-600 text-white shadow-md">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800 bg-teal-100 px-2.5 py-1 rounded-full">
                          {pillar.badge}
                        </span>
                      </div>

                      <h3 className="font-heading font-extrabold text-xl text-slate-900 pt-2">
                        {pillar.title}
                      </h3>

                      <p className="text-xs font-semibold text-teal-800">
                        {pillar.subtitle}
                      </p>

                      <p className="text-slate-600 text-sm leading-relaxed">
                        {pillar.description}
                      </p>

                      <div className="pt-4 space-y-2 border-t border-slate-200/80">
                        {pillar.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-slate-200/60">
                      <button
                        onClick={() => setIsAppointmentModalOpen(true)}
                        className="w-full py-2.5 rounded-xl bg-white border border-slate-300 hover:border-teal-600 text-slate-800 hover:text-teal-900 text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                      >
                        <span>Learn More & Schedule</span>
                        <ChevronRight className="w-3.5 h-3.5 text-teal-600" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Facility & Location Details */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900 border border-teal-500/40 text-teal-300 text-xs font-bold uppercase">
                  <Building2 className="w-3.5 h-3.5 text-teal-400" />
                  <span>Our Practice Facility</span>
                </div>

                <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Designed for Comfort, Discretion & Quiet Healing
                </h2>

                <p className="text-slate-300 text-base leading-relaxed">
                  Located in the heart of Columbia, Maryland, our facility offers easy highway access, ample private parking, and a peaceful environment structured to make your mental health appointments as calm and stress-free as possible.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {facilityFeatures.map((feat, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
                      <div className="font-bold text-teal-300 text-sm">{feat.title}</div>
                      <p className="text-xs text-slate-400 leading-normal">{feat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 bg-slate-800 p-8 rounded-3xl border border-slate-700 space-y-6">
                <h3 className="font-heading font-extrabold text-xl text-white flex items-center gap-2">
                  <Clock className="w-5 h-5 text-teal-400" />
                  <span>Clinic Hours & Contact</span>
                </h3>

                <div className="space-y-3 text-sm text-slate-300 divide-y divide-slate-700/80">
                  {CLINIC_INFO.workingHours.map((h, idx) => (
                    <div key={idx} className="pt-2 flex items-center justify-between">
                      <span className="font-medium text-slate-200">{h.days}</span>
                      <span className="font-bold text-teal-300">{h.hours}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-700 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-slate-300">
                    <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    <span>Columbia, Howard County, MD 21044</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-300">
                    <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    <span>{CLINIC_INFO.phone}</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsAppointmentModalOpen(true)}
                  className="w-full py-3 rounded-xl font-bold text-sm text-slate-900 bg-teal-400 hover:bg-teal-300 transition-colors shadow-lg"
                >
                  Request Consultation Appointment
                </button>
              </div>

            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer openAppointmentModal={() => setIsAppointmentModalOpen(true)} />

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />

    </div>
  );
}
