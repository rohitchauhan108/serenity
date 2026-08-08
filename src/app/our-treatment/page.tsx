'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import {
  ArrowRight,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { TREATMENT_PAGES } from '@/data/treatmentPagesData';

export default function OurTreatmentPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-teal-500/20 selection:text-teal-900">
      <Navbar openAppointmentModal={() => {}} />

      <main className="grow">
        <section className="relative pt-12 pb-20 bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center gap-2 text-xs text-teal-300 font-medium mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-white font-bold">Our Treatment</span>
            </div>

            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-900/80 border border-teal-500/40 text-teal-200 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm">
                <Sparkles className="w-4 h-4 text-teal-300" />
                <span>Our Treatment</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                Our Treatments
              </h1>

              <p className="text-slate-200 text-lg sm:text-xl leading-relaxed max-w-2xl">
                Use the menu below to open each treatment page.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="#treatments"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-base text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
                >
                  <span>Browse Treatments</span>
                  <ArrowRight className="w-5 h-5 text-teal-300" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="treatments" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {TREATMENT_PAGES.map((item) => (
                <article key={item.slug} className="group rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col">
                  <div className="relative h-52 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="font-heading font-extrabold text-xl leading-snug">{item.title}</h3>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-sm text-slate-600 leading-relaxed flex-grow">{item.summary}</p>
                    <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                      <Link href={`/our-treatment/${item.slug}`} className="text-sm font-bold text-teal-700 hover:text-teal-900 flex items-center gap-1.5 transition-transform group-hover:translate-x-1">
                        <span>Open Page</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer openAppointmentModal={() => {}} />
    </div>
  );
}