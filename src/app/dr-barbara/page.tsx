'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { AppointmentModal } from '../../components/AppointmentModal';
import { DOCTOR_DATA, CLINIC_INFO } from '../../data/clinicData';
import {
  GraduationCap,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Calendar,
  Sparkles,
  Quote,
  ShieldCheck,
  Heart,
  Stethoscope,
  Building2,
  ChevronRight,
  UserCheck,
  Brain,
  MessageSquare,
  ArrowRight,
  Target,
  Clock,
  Sparkle
} from 'lucide-react';

export default function DrBarbaraPage() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'adolescents' | 'adults' | 'seniors'>('all');

  const clinicalPhilosophyPoints = [
    {
      title: 'Medication as a Bridge, Not a Label',
      desc: 'Psychotropic medications are powerful clinical tools that restore neurochemical balance. We view medication as a targeted support mechanism to empower your daily life and coping skills—never a lifelong auto-prescription.',
      icon: Heart
    },
    {
      title: 'Diagnostic Thoroughness & Accuracy',
      desc: 'Misdiagnosis leads to years of ineffective treatment. Dr. Barbara conducts 60-minute comprehensive diagnostic interviews evaluating symptom timelines, physical health, sleep patterns, and medical histories.',
      icon: Target
    },
    {
      title: 'Cultural Humility & Respect',
      desc: 'Every patient carries unique cultural, spiritual, and personal perspectives. Dr. Barbara provides a non-judgmental, deeply respectful environment where you can speak candidly without fear of stigma.',
      icon: UserCheck
    },
    {
      title: 'Integrative Mind-Body Alignment',
      desc: 'In addition to pharmacotherapy, Dr. Barbara counsels on sleep hygiene, stress reduction, nutritional psychiatry, and evidence-based psychotherapy techniques.',
      icon: Brain
    }
  ];

  const expertConditionAreas = [
    { title: 'Depression & Mood Disorders', category: 'adults', desc: 'Major depressive disorder, persistent depressive disorder, postpartum depression, bipolar disorder mood stabilization.' },
    { title: 'Anxiety & Panic Conditions', category: 'all', desc: 'Generalized anxiety disorder (GAD), panic attacks, social anxiety, performance anxiety, health anxiety.' },
    { title: 'ADHD Evaluation & Management', category: 'adolescents', desc: 'Comprehensive adult & adolescent ADHD testing, executive functioning support, non-stimulant & stimulant protocols.' },
    { title: 'PTSD & Complex Trauma', category: 'adults', desc: 'Trauma-informed care, hypervigilance, emotional regulation, trauma-related insomnia management.' },
    { title: 'Insomnia & Sleep Disturbance', category: 'seniors', desc: 'Assessment of psychiatric sleep disturbances, circadian rhythm disorders, non-habit forming sleep management.' },
    { title: 'OCD & Related Disorders', category: 'adults', desc: 'Obsessive-compulsive thoughts, repetitive behavior support, ERP collaboration and medical stabilization.' }
  ];

  const filteredConditions = activeTab === 'all' 
    ? expertConditionAreas 
    : expertConditionAreas.filter(c => c.category === 'all' || c.category === activeTab);

  const doctorFaqs = [
    {
      q: 'What should I expect during my initial psychiatric consultation with Dr. Barbara?',
      a: 'Your initial 60-minute consultation is a relaxed, comprehensive conversation. Dr. Barbara will review your mental health history, current symptoms, sleep, physical health, and personal goals. Together, you will formulate a clear, tailored treatment strategy.'
    },
    {
      q: 'Does Dr. Barbara prescribe medications on the first visit?',
      a: 'If clinically indicated and appropriate after thorough evaluation, Dr. Barbara can initiate necessary prescriptions during the first visit. She takes time to explain medication benefits, potential side effects, and exact monitoring steps.'
    },
    {
      q: 'How often will I need follow-up appointments?',
      a: 'When starting or adjusting medications, follow-ups usually occur every 2 to 4 weeks to ensure safety and comfort. Once you achieve stability, routine medication management visits occur every 1 to 3 months.'
    },
    {
      q: 'Is telehealth available with Dr. Barbara across Maryland?',
      a: 'Yes! Dr. Barbara is fully licensed to provide HIPAA-compliant video appointments for patients residing anywhere in the State of Maryland.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-teal-500/20 selection:text-teal-900">
      
      {/* Universal Navbar */}
      <Navbar openAppointmentModal={() => setIsAppointmentModalOpen(true)} />

      <main className="flex-grow">
        
        {/* Editorial Hero Header */}
        <section className="relative py-16 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white overflow-hidden">
          
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs text-teal-300 font-medium mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <Link href="/about-company" className="hover:text-white transition-colors">About Us</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-white font-bold">Dr. Barbara Clement Njoku</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Doctor Portrait Card */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative bg-white/10 backdrop-blur-xl p-3.5 rounded-3xl border border-white/20 shadow-2xl">
                  <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-slate-800">
                    <img 
                      src={DOCTOR_DATA.doctorPortraitUrl || CLINIC_INFO.heroBannerUrl} 
                      alt={DOCTOR_DATA.name} 
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-teal-950/90 border border-teal-400/40 text-teal-200 text-xs font-bold px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg backdrop-blur-md">
                      <Award className="w-4 h-4 text-teal-300" />
                      <span>ANCC Board Certified</span>
                    </div>
                  </div>

                  <div className="p-4 text-center">
                    <h3 className="font-heading font-extrabold text-2xl text-white">
                      Dr. Barbara Clement Njoku
                    </h3>
                    <p className="text-teal-300 font-bold text-xs mt-1">
                      DNP, APRN, PMHNP-BC
                    </p>
                    <div className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-slate-300 bg-white/10 px-3 py-1.5 rounded-xl">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>12+ Years Clinical Excellence in MD</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Doctor Intro Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-900/80 border border-teal-500/40 text-teal-200 text-xs font-bold uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4 text-teal-300" />
                  <span>Lead Psychiatric Provider</span>
                </div>

                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  Dr. Barbara Clement Njoku <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-100">
                    DNP, APRN, PMHNP-BC
                  </span>
                </h1>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  Doctor of Nursing Practice and Board-Certified Psychiatric-Mental Health Nurse Practitioner dedicated to providing dignified, personalized, and evidence-backed psychiatric care across the lifespan.
                </p>

                {/* Quote Box */}
                <div className="p-6 rounded-2xl bg-teal-950/60 border border-teal-500/30 relative">
                  <Quote className="w-8 h-8 text-teal-500/30 absolute top-4 right-4" />
                  <p className="text-sm font-medium text-teal-100 italic leading-relaxed">
                    "Mental health care is not about fitting a patient into a diagnosis; it is about uncovering the person behind the symptoms and crafting a clinical path that restores confidence, stability, and peace."
                  </p>
                  <p className="text-xs font-bold text-teal-300 mt-3">— Dr. Barbara Clement Njoku, DNP</p>
                </div>

                <div className="pt-2 flex flex-wrap gap-4 items-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-900 bg-teal-300 hover:bg-teal-200 transition-all shadow-lg"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Consultation with Dr. Barbara</span>
                  </Link>
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
                  >
                    <Stethoscope className="w-4 h-4 text-teal-300" />
                    <span>Call Clinic Direct</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Credentials & Education Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase">
                <Award className="w-3.5 h-3.5 text-teal-600" />
                <span>Qualifications & Training</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Academic Degrees & Board Certifications
              </h2>
              <p className="text-slate-600 text-base">
                Rigorous doctoral-level medical education combined with specialized psychiatric credentials.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-teal-300 transition-all space-y-4">
                <div className="p-3.5 rounded-2xl bg-teal-600 text-white w-fit shadow-md">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-xl text-slate-900">
                  Doctor of Nursing Practice (DNP)
                </h3>
                <p className="text-xs font-semibold text-teal-800">Doctoral Degree in Psychiatric Practice</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Earned the highest doctoral clinical degree in nursing practice, specializing in advanced psychiatric assessment, pharmacology, evidence-based systems, and mental health clinical leadership.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-teal-300 transition-all space-y-4">
                <div className="p-3.5 rounded-2xl bg-teal-600 text-white w-fit shadow-md">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-xl text-slate-900">
                  ANCC Board Certified (PMHNP-BC)
                </h3>
                <p className="text-xs font-semibold text-teal-800">American Nurses Credentialing Center</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  National board certification verifying advanced mastery in diagnostic evaluation, psychotropic prescription, and treatment of mental health conditions across the lifespan.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-teal-300 transition-all space-y-4">
                <div className="p-3.5 rounded-2xl bg-teal-600 text-white w-fit shadow-md">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-xl text-slate-900">
                  12+ Years Clinical Excellence
                </h3>
                <p className="text-xs font-semibold text-teal-800">Outpatient & Inpatient Clinical Practice</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Extensive clinical experience serving diverse patient populations in Maryland, specializing in mood stabilization, ADHD management, anxiety disorders, and complex psychiatric care.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* Clinical Care Philosophy */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/80 text-teal-900 text-xs font-bold uppercase">
                <Heart className="w-3.5 h-3.5 text-teal-700" />
                <span>Care Philosophy</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Dr. Barbara's Patient First Principles
              </h2>
              <p className="text-slate-600 text-base">
                A modern, compassionate model grounded in listening, scientific rigor, and patient dignity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {clinicalPhilosophyPoints.map((point, idx) => {
                const IconComponent = point.icon;
                return (
                  <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-lg transition-all space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-2xl bg-teal-100 text-teal-800">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="font-heading font-bold text-lg text-slate-900">
                        {point.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed pl-1">
                      {point.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Interactive Expertise Matrix Filter */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase">
                <Brain className="w-3.5 h-3.5 text-teal-600" />
                <span>Specialized Clinical Areas</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Conditions & Clinical Expertise
              </h2>
              <p className="text-slate-600 text-base">
                Dr. Barbara evaluates and treats a wide spectrum of behavioral and psychiatric conditions.
              </p>

              {/* Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-2 pt-4">
                {[
                  { id: 'all', label: 'All Conditions' },
                  { id: 'adolescents', label: 'Adolescents (12+)' },
                  { id: 'adults', label: 'Adult Psychiatry' },
                  { id: 'seniors', label: 'Seniors & Geriatric' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      activeTab === tab.id
                        ? 'bg-teal-700 text-white shadow-md'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredConditions.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-teal-300 transition-all space-y-2">
                  <div className="font-heading font-extrabold text-base text-slate-900 flex items-center justify-between">
                    <span>{item.title}</span>
                    <Sparkles className="w-4 h-4 text-teal-600" />
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Doctor FAQ Accordion */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-12 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-bold uppercase">
                <MessageSquare className="w-3.5 h-3.5 text-teal-700" />
                <span>Patient Questions</span>
              </div>
              <h2 className="font-heading text-3xl font-extrabold text-slate-900">
                Frequently Asked Questions About Seeing Dr. Barbara
              </h2>
            </div>

            <div className="space-y-4">
              {doctorFaqs.map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                  <h3 className="font-heading font-bold text-base text-slate-900 flex items-center gap-2">
                    <span className="text-teal-600 font-extrabold">Q:</span>
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct Booking CTA */}
            <div className="mt-12 text-center bg-gradient-to-r from-teal-800 to-slate-900 text-white p-8 sm:p-10 rounded-3xl shadow-xl space-y-4">
              <h3 className="font-heading font-extrabold text-2xl">
                Ready to Begin Your Care Journey with Dr. Barbara?
              </h3>
              <p className="text-slate-200 text-sm max-w-xl mx-auto">
                Schedule a confidential in-person or telehealth consultation today. Flexible appointments available in Columbia, MD.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-slate-900 bg-teal-300 hover:bg-teal-200 transition-all shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Appointment</span>
              </Link>
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
