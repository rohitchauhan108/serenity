'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { AppointmentModal } from '../../components/AppointmentModal';
import { CONDITIONS_DATA, CLINIC_INFO } from '../../data/clinicData';
import { ConditionItem } from '../../types';
import {
  Brain,
  Search,
  CheckCircle2,
  X,
  Calendar,
  Filter,
  ArrowRight,
  Shield,
  Activity,
  Heart,
  ChevronRight,
  Phone,
  Sparkles,
  Stethoscope
} from 'lucide-react';

export default function ConditionsPage() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [selectedConditionName, setSelectedConditionName] = useState<string | undefined>(undefined);
  const [selectedCondition, setSelectedCondition] = useState<ConditionItem | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Mood & Emotional',
    'Anxiety & Obsessive',
    'Neurodevelopmental',
    'Trauma & Stressor',
    'Lifestyle & Wellness',
    'Somatic & Sleep'
  ];

  const filteredConditions = CONDITIONS_DATA.filter((cond) => {
    const matchesCat = selectedCategory === 'All' || cond.category === selectedCategory;
    const query = searchTerm.toLowerCase().trim();
    const matchesSearch =
      !query ||
      cond.name.toLowerCase().includes(query) ||
      cond.description.toLowerCase().includes(query) ||
      cond.symptoms.some((s) => s.toLowerCase().includes(query)) ||
      cond.treatments.some((t) => t.toLowerCase().includes(query));
    return matchesCat && matchesSearch;
  });

  const handleBookCondition = (condName?: string) => {
    setSelectedConditionName(condName ? `Care for ${condName}` : undefined);
    setIsAppointmentModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-teal-500/20 selection:text-teal-900">
      
      {/* Universal Navbar */}
      <Navbar openAppointmentModal={() => handleBookCondition()} />

      <main className="flex-grow">
        
        {/* Hero Header */}
        <section className="relative pt-12 pb-20 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-teal-300 font-medium mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-white font-bold">Conditions We Treat</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-900/80 border border-teal-500/40 text-teal-200 text-xs font-bold uppercase tracking-wider shadow-sm">
                  <Heart className="w-4 h-4 text-teal-400" />
                  <span>Comprehensive Psychiatric Care Spectrum</span>
                </div>

                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                  Conditions We Treat & <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-100">
                    Evidence-Based Recovery
                  </span>
                </h1>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                  Specialized diagnostic evaluations and personalized psychopharmacology for anxiety, depression, ADHD, bipolar disorder, PTSD, insomnia, and neurodivergent mental health needs in Maryland.
                </p>

                <div className="pt-2 flex flex-wrap gap-4 items-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-slate-900 bg-teal-300 hover:bg-teal-200 transition-all shadow-lg hover:scale-105 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Schedule Symptom Evaluation</span>
                  </Link>

                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all cursor-pointer"
                  >
                    <Phone className="w-4 h-4 text-teal-300" />
                    <span>Call {CLINIC_INFO.phone}</span>
                  </a>
                </div>
              </div>

              {/* Header Showcase Image */}
              <div className="lg:col-span-4 hidden lg:block">
                <div className="relative rounded-3xl overflow-hidden border border-teal-500/30 shadow-2xl aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800"
                    alt="Psychiatric Support"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-teal-300">Targeted Healing</span>
                    <p className="font-heading font-bold text-sm">Empathetic Care Pathways</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Filter & Conditions Grid Section */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Search and Filters */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs">
              
              <div className="relative w-full lg:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search condition or symptom..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-teal-500 focus:bg-white transition-all"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-200"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
                {categories.map((cat) => {
                  const count = cat === 'All' ? CONDITIONS_DATA.length : CONDITIONS_DATA.filter((c) => c.category === cat).length;
                  const isSelected = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 flex-shrink-0 cursor-pointer ${
                        isSelected
                          ? 'bg-teal-700 text-white shadow-md shadow-teal-700/20 scale-102'
                          : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-teal-50 hover:text-teal-800'
                      }`}
                    >
                      <span>{cat}</span>
                      <span
                        className={`px-1.5 py-0.2 rounded-full text-[10px] font-extrabold ${
                          isSelected
                            ? 'bg-teal-900/60 text-teal-100'
                            : 'bg-slate-200 text-slate-600'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Grid */}
            {filteredConditions.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
                <Brain className="w-12 h-12 text-slate-300 mx-auto" />
                <h3 className="font-heading font-bold text-lg text-slate-800">No conditions found</h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Try adjusting your search query or choosing another category above.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchTerm('');
                  }}
                  className="px-4 py-2 rounded-xl bg-teal-700 text-white font-bold text-xs shadow-xs hover:bg-teal-800 transition-colors cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredConditions.map((cond, idx) => {
                  const isFirst = idx === 0;
                  return (
                    <div
                      key={cond.id}
                      onClick={() => setSelectedCondition(cond)}
                      className={`rounded-3xl bg-white ${
                        isFirst ? 'border-0 shadow-lg ring-1 ring-teal-200/60' : 'border border-slate-200/80 hover:border-teal-400 hover:shadow-xl'
                      } hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden cursor-pointer`}
                    >
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

                      {/* Condition Card Image */}
                      <div className="relative overflow-hidden rounded-t-3xl bg-slate-100 border-b border-slate-100/80">
                        <div className="relative h-36 overflow-hidden">
                          <img
                            src={cond.imageUrl}
                            alt={cond.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            referrerPolicy="no-referrer"
                          />
                          {/* Subtle bottom fade for visual polish */}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
                        </div>
                        <div className="absolute top-3 left-3 z-10">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-teal-900 bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-teal-200/60 shadow-sm">
                            {cond.category}
                          </span>
                        </div>
                        <div className="absolute -bottom-6 right-4 z-10">
                          <div className="w-12 h-12 rounded-xl bg-white text-teal-700 flex items-center justify-center group-hover:bg-teal-700 group-hover:text-white transition-colors duration-300 shadow-lg border border-slate-100">
                            <Brain className="w-5 h-5" />
                          </div>
                        </div>
                      </div>

                      <div className="p-6 sm:p-7 pt-8">
                        <div>
                          <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-teal-900 mb-2 transition-colors">
                            {cond.name}
                          </h3>

                          <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                            {cond.description}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-700 group-hover:text-teal-900">
                          <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            <span>View Care Plan</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                          <span className="text-[10px] text-slate-400 font-normal">
                            {cond.symptoms.length} Symptoms
                          </span>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            )}

          </div>
        </section>

      </main>

      {/* Modal Details */}
      {selectedCondition && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto">
            {/* Modal Image Banner */}
            <div className="relative h-44 overflow-hidden rounded-t-3xl bg-slate-100">
              <img
                src={selectedCondition.imageUrl}
                alt={selectedCondition.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              <button
                onClick={() => setSelectedCondition(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-sm text-slate-600 hover:bg-white hover:text-slate-900 cursor-pointer shadow-lg border border-white/50 z-10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4 -mt-16 relative z-10">
              <div className="p-3 bg-teal-100 text-teal-800 rounded-2xl shadow-md">
                <Brain className="w-6 h-6 text-teal-700" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-white px-2 py-0.5 rounded-md shadow-xs">
                  {selectedCondition.category}
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-slate-900">
                  {selectedCondition.name}
                </h3>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              {selectedCondition.description}
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-slate-500" />
                  <span>Symptoms Recognized:</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCondition.symptoms.map((s, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-2xs">
                      • {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-teal-50/70 p-4 rounded-2xl border border-teal-200/80">
                <h4 className="font-bold text-xs uppercase tracking-wider text-teal-800 mb-2 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-teal-600" />
                  <span>Treatment Pathways:</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedCondition.treatments.map((t, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-teal-900 font-medium bg-white/80 p-2 rounded-xl border border-teal-100">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setSelectedCondition(null)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <Link
                  href="/contact"
                  onClick={() => setSelectedCondition(null)}
                  className="px-6 py-2.5 rounded-xl text-white font-bold text-xs gradient-teal-blue shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Evaluation for {selectedCondition.name}</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}

      <Footer openAppointmentModal={() => handleBookCondition()} />

      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        initialServiceName={selectedConditionName}
      />

    </div>
  );
}