'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { Navbar } from '../../../components/Navbar';
import { Footer } from '../../../components/Footer';
import { AppointmentModal } from '../../../components/AppointmentModal';
import { CLINIC_INFO, DOCTOR_DATA } from '../../../data/clinicData';
import { TREATMENT_PAGE_MAP } from '../../../data/treatmentPagesData';
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  HeartHandshake,
  MessageCircle,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export default function TreatmentDetailPage() {
  const params = useParams();
  const slug = typeof params?.slug === 'string' ? params.slug : Array.isArray(params?.slug) ? params.slug[0] : '';
  const treatment = TREATMENT_PAGE_MAP[slug];
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  if (!treatment) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-teal-500/20 selection:text-teal-900">
      <Navbar openAppointmentModal={() => setIsAppointmentModalOpen(true)} />

      <main className="grow">
        <section className="relative pt-12 pb-20 bg-linear-to-br from-slate-950 via-teal-950 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-2 text-xs text-teal-300 font-medium mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <Link href="/our-treatment" className="hover:text-white transition-colors">Our Treatment</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-white font-bold">{treatment.title}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                  {treatment.title}
                </h1>

                <p className="text-slate-200 text-lg sm:text-xl leading-relaxed max-w-2xl font-normal">
                  {treatment.summary}
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <button
                    onClick={() => setIsAppointmentModalOpen(true)}
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-base text-slate-900 bg-teal-300 hover:bg-teal-200 transition-all shadow-lg hover:scale-105 cursor-pointer"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Book Appointment</span>
                  </button>
                  <Link
                    href="/our-treatment"
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-base text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
                  >
                    <ArrowLeft className="w-5 h-5 text-teal-300" />
                    <span>Back to Treatments</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border border-teal-500/30 shadow-2xl aspect-4/3">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="font-heading font-bold text-lg text-white">{treatment.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-10">
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xs space-y-5">
                <div className="flex items-center gap-2 text-teal-800 font-extrabold text-sm uppercase tracking-wider">
                  <MessageCircle className="w-5 h-5 text-teal-600" />
                  <span>Overview</span>
                </div>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                  {treatment.overview}
                </p>
              </div>

              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
                <div className="flex items-center gap-2 text-teal-800 font-extrabold text-sm uppercase tracking-wider">
                  <CheckCircle2 className="w-5 h-5 text-teal-600" />
                  <span>Highlights</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {treatment.highlights.map((item) => (
                    <div key={item} className="p-5 rounded-2xl bg-teal-50/70 border border-teal-100 flex items-start gap-3.5">
                      <CheckCircle2 className="w-6 h-6 text-teal-600 shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base font-semibold text-teal-950 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
                <div className="flex items-center gap-2 text-teal-800 font-extrabold text-sm uppercase tracking-wider">
                  <Clock className="w-5 h-5 text-teal-600" />
                  <span>What To Expect</span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Your visit will stay focused on the treatment named above, with the conversation shaped around your needs and the plan that fits you best.
                </p>
              </div>

              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
                <div className="flex items-center gap-2 text-teal-800 font-extrabold text-sm uppercase tracking-wider">
                  <HeartHandshake className="w-5 h-5 text-teal-600" />
                  <span>Benefits</span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  This treatment is designed to support symptom relief, clearer decision-making, and a treatment plan that stays easy to follow.
                </p>
              </div>

              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-teal-800 font-extrabold text-sm uppercase tracking-wider">
                  <Sparkles className="w-5 h-5 text-teal-600" />
                  <span>Book This Page</span>
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Call the clinic or start an appointment request to discuss {treatment.title.toLowerCase()}.
                </p>
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
                  ANCC board-certified psychiatric care, therapy support, and medication planning for Maryland patients.
                </p>

                <button
                  onClick={() => setIsAppointmentModalOpen(true)}
                  className="w-full py-3.5 rounded-2xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Appointment</span>
                </button>
              </div>

              <div className="bg-teal-900 text-white p-7 rounded-3xl space-y-5 shadow-xl">
                <h4 className="font-heading font-extrabold text-lg text-white flex items-center gap-2.5">
                  <ShieldCheck className="w-6 h-6 text-teal-300" />
                  <span>Service Details</span>
                </h4>

                <div className="space-y-3.5 text-sm text-teal-100/95 divide-y divide-teal-800/80">
                  <div className="pt-2 flex items-center justify-between gap-4">
                    <span className="font-medium text-teal-200">Format:</span>
                    <span className="font-bold text-white text-right">In-Person & Telehealth</span>
                  </div>
                  <div className="pt-2 flex items-center justify-between gap-4">
                    <span className="font-medium text-teal-200">Location:</span>
                    <span className="font-bold text-white text-right">Maryland</span>
                  </div>
                  <div className="pt-2 flex items-center justify-between gap-4">
                    <span className="font-medium text-teal-200">Phone:</span>
                    <span className="font-bold text-white text-right">{CLINIC_INFO.phone}</span>
                  </div>
                </div>

                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="block text-center py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm transition-colors"
                >
                  Call Clinic: {CLINIC_INFO.phone}
                </a>
              </div>

              <div className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-xs space-y-4">
                <h4 className="font-heading font-extrabold text-lg text-slate-900">More Treatments</h4>
                <div className="space-y-3">
                  {TREATMENT_PAGE_MAP['psychiatric-evaluation'] && (
                    <Link href="/our-treatment" className="block p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-teal-300 hover:bg-teal-50/70 transition-colors">
                      <div className="text-sm font-bold text-slate-900">Back to all treatments</div>
                    </Link>
                  )}
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
        presetServiceTitle={treatment.title}
      />
    </div>
  );
}