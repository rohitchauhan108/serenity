'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AppointmentModal } from './AppointmentModal';
import { SERVICES_DATA, CLINIC_INFO, DOCTOR_DATA } from '../data/clinicData';
import {
  Brain,
  Sparkles,
  CheckCircle2,
  ArrowLeft,
  Calendar,
  ShieldCheck,
  ChevronRight,
  Clock,
  Video,
  FileText,
  UserCheck,
  Activity
} from 'lucide-react';

interface ServiceDetailClientProps {
  serviceId: string;
}

export function ServiceDetailClient({ serviceId }: ServiceDetailClientProps) {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const service = SERVICES_DATA.find((s) => s.id === serviceId) || SERVICES_DATA[0];

  if (!service) {
    notFound();
  }

  const serviceImage = service.imageUrl || 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200';

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-teal-500/20 selection:text-teal-900">
      <Navbar openAppointmentModal={() => setIsAppointmentModalOpen(true)} />

      <main className="flex-grow">
        <section className="relative pt-12 pb-20 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-2 text-sm text-teal-300 font-medium mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 text-slate-500" />
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight className="w-4 h-4 text-slate-500" />
              <span className="text-white font-bold">{service.title}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-900/80 border border-teal-500/40 text-teal-200 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm">
                  <Brain className="w-4 h-4 text-teal-400" />
                  <span>Specialized Clinical Service</span>
                </div>

                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                  {service.title}
                </h1>

                <p className="text-slate-200 text-lg sm:text-xl leading-relaxed max-w-2xl font-normal">
                  {service.shortDesc}
                </p>

                <div className="pt-2 flex flex-wrap gap-4 items-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-base text-slate-900 bg-teal-300 hover:bg-teal-200 transition-all shadow-lg hover:scale-105 cursor-pointer"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Book Evaluation for {service.title}</span>
                  </Link>

                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-xl font-bold text-base text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
                  >
                    <ArrowLeft className="w-5 h-5 text-teal-300" />
                    <span>View All Services</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border border-teal-500/30 shadow-2xl aspect-[4/3] group">
                  <img
                    src={serviceImage}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-xs font-bold uppercase tracking-widest text-teal-300">Evidence-Based Treatment</span>
                    <p className="font-heading font-bold text-lg text-white">{service.title}</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              <div className="lg:col-span-8 space-y-10">
                
                <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xs space-y-5">
                  <div className="flex items-center gap-2 text-teal-800 font-extrabold text-sm uppercase tracking-wider">
                    <FileText className="w-5 h-5 text-teal-600" />
                    <span>Clinical Overview</span>
                  </div>
                  <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 leading-snug">
                    Understanding Our Care Approach
                  </h2>
                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed whitespace-pre-line font-normal">
                    {service.fullDesc}
                  </p>
                </div>

                <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
                  <div className="flex items-center gap-2 text-teal-800 font-extrabold text-sm uppercase tracking-wider">
                    <Activity className="w-5 h-5 text-teal-600" />
                    <span>Key Benefits & Outcomes</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
                    What You Can Expect From Your Care Plan
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.keyBenefits.map((benefit, idx) => (
                      <div key={idx} className="p-5 rounded-2xl bg-teal-50/70 border border-teal-100 flex items-start gap-3.5">
                        <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base font-semibold text-teal-950 leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xs space-y-7">
                  <div className="flex items-center gap-2 text-teal-800 font-extrabold text-sm uppercase tracking-wider">
                    <UserCheck className="w-5 h-5 text-teal-600" />
                    <span>Step-by-Step Care Journey</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
                    How We Deliver {service.title}
                  </h3>
                  <div className="space-y-5">
                    <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-5">
                      <div className="w-10 h-10 rounded-xl bg-teal-700 text-white font-extrabold text-base flex items-center justify-center flex-shrink-0 shadow-sm">1</div>
                      <div>
                        <h4 className="font-extrabold text-base sm:text-lg text-slate-900">Comprehensive Psychiatric Evaluation</h4>
                        <p className="text-sm sm:text-base text-slate-700 mt-1.5 leading-relaxed">
                          We review medical history, mental health symptoms, past treatments, and lifestyle factors during a thorough diagnostic assessment.
                        </p>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-5">
                      <div className="w-10 h-10 rounded-xl bg-teal-700 text-white font-extrabold text-base flex items-center justify-center flex-shrink-0 shadow-sm">2</div>
                      <div>
                        <h4 className="font-extrabold text-base sm:text-lg text-slate-900">Personalized Treatment Plan</h4>
                        <p className="text-sm sm:text-base text-slate-700 mt-1.5 leading-relaxed">
                          Together with Dr. Barbara Clement Njoku, you collaboratively design a treatment strategy including medication management, therapy referrals, and wellness habits.
                        </p>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-5">
                      <div className="w-10 h-10 rounded-xl bg-teal-700 text-white font-extrabold text-base flex items-center justify-center flex-shrink-0 shadow-sm">3</div>
                      <div>
                        <h4 className="font-extrabold text-base sm:text-lg text-slate-900">Ongoing Follow-Up & Monitoring</h4>
                        <p className="text-sm sm:text-base text-slate-700 mt-1.5 leading-relaxed">
                          Regular check-ins ensure medications are optimized, side effects are minimized, and your mental health continues to improve over time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="lg:col-span-4 space-y-6">
                
                <div className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-xs space-y-5">
                  <div className="flex items-center gap-4">
                    <img
                      src={DOCTOR_DATA.doctorPortraitUrl}
                      alt={DOCTOR_DATA.name}
                      className="w-16 h-16 rounded-2xl object-cover object-top border border-teal-200"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-heading font-extrabold text-lg text-slate-900">{DOCTOR_DATA.name}</h4>
                      <p className="text-xs sm:text-sm text-teal-700 font-bold">{DOCTOR_DATA.titles}</p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-4">
                    ANCC Board-Certified PMHNP-BC providing expert psychiatric care and medication management for Maryland residents.
                  </p>

                  <Link
                    href="/contact"
                    className="w-full py-3.5 rounded-2xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Schedule Appointment</span>
                  </Link>
                </div>

                <div className="bg-teal-900 text-white p-7 rounded-3xl space-y-5 shadow-xl">
                  <h4 className="font-heading font-extrabold text-lg text-white flex items-center gap-2.5">
                    <ShieldCheck className="w-6 h-6 text-teal-300" />
                    <span>Service Details</span>
                  </h4>

                  <div className="space-y-3.5 text-sm text-teal-100/95 divide-y divide-teal-800/80">
                    <div className="pt-2 flex items-center justify-between">
                      <span className="font-medium text-teal-200">Format:</span>
                      <span className="font-bold text-white">In-Person & Telehealth</span>
                    </div>
                    <div className="pt-2 flex items-center justify-between">
                      <span className="font-medium text-teal-200">State License:</span>
                      <span className="font-bold text-white">Maryland Statewide</span>
                    </div>
                    <div className="pt-2 flex items-center justify-between">
                      <span className="font-medium text-teal-200">Insurance:</span>
                      <span className="font-bold text-white">In-Network Accepted</span>
                    </div>
                    <div className="pt-2 flex items-center justify-between">
                      <span className="font-medium text-teal-200">Prescribing:</span>
                      <span className="font-bold text-white">Full E-Prescribing</span>
                    </div>
                  </div>

                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="block text-center py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-colors"
                  >
                    Call Clinic: {CLINIC_INFO.phone}
                  </a>
                </div>

              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer openAppointmentModal={() => setIsAppointmentModalOpen(true)} />

      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        initialServiceName={service.title}
      />

    </div>
  );
}
