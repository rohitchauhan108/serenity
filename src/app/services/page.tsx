'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { AppointmentModal } from '../../components/AppointmentModal';
import { SERVICES_DATA, CLINIC_INFO } from '../../data/clinicData';
import {
  Brain,
  Sparkles,
  Search,
  CheckCircle2,
  ArrowRight,
  Shield,
  Clock,
  Video,
  ChevronRight,
  Filter,
  Stethoscope,
  Heart,
  Calendar,
  X,
  Phone
} from 'lucide-react';

export default function ServicesPage() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [selectedServiceName, setSelectedServiceName] = useState<string | undefined>(undefined);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'evaluation', label: 'Evaluations' },
    { id: 'medication', label: 'Medication Management' },
    { id: 'therapy', label: 'Therapy & Counseling' },
    { id: 'specialty', label: 'Specialty Care' },
    { id: 'telehealth', label: 'Telehealth' }
  ];

  const getCategoryCount = (catId: string) => {
    if (catId === 'all') return SERVICES_DATA.length;
    return SERVICES_DATA.filter((s) => s.category === catId).length;
  };

  const filteredServices = SERVICES_DATA.filter((service) => {
    const query = searchTerm.toLowerCase().trim();
    const matchesSearch =
      !query ||
      service.title.toLowerCase().includes(query) ||
      service.shortDesc.toLowerCase().includes(query) ||
      service.fullDesc.toLowerCase().includes(query) ||
      service.keyBenefits.some((b) => b.toLowerCase().includes(query));

    const matchesCategory =
      selectedCategory === 'all' || service.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleBook = (title?: string) => {
    setSelectedServiceName(title);
    setIsAppointmentModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-teal-500/20 selection:text-teal-900">
      
      {/* Universal Navbar */}
      <Navbar openAppointmentModal={() => handleBook()} />

      <main className="flex-grow">
        
        {/* Hero Header Banner */}
        <section className="relative pt-12 pb-20 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-teal-300 font-medium mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-white font-bold">Services</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-900/80 border border-teal-500/40 text-teal-200 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm">
                  <Brain className="w-4 h-4 text-teal-400" />
                  <span>Full Spectrum Outpatient Psychiatry</span>
                </div>

                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                  Comprehensive Psychiatric <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-100">
                    Services & Clinical Care
                  </span>
                </h1>

                <p className="text-slate-200 text-lg sm:text-xl leading-relaxed max-w-2xl">
                  Board-certified psychiatric evaluations, expert medication management, and individualized therapeutic support tailored for children, adolescents, adults, and seniors across Maryland.
                </p>

                <div className="pt-2 flex flex-wrap gap-4 items-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-base text-slate-900 bg-teal-300 hover:bg-teal-200 transition-all shadow-lg hover:scale-105 cursor-pointer"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Schedule Clinical Evaluation</span>
                  </Link>

                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-base text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all cursor-pointer"
                  >
                    <Phone className="w-5 h-5 text-teal-300" />
                    <span>Call {CLINIC_INFO.phone}</span>
                  </a>
                </div>
              </div>

              {/* Showcase Image Card */}
              <div className="lg:col-span-4 hidden lg:block">
                <div className="relative rounded-3xl overflow-hidden border border-teal-500/30 shadow-2xl aspect-[4/3]">
                  <img
                    src="/service/services.webp"
                    alt="Psychiatric Consultation Session"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-teal-300">Maryland Practice</span>
                    <p className="font-heading font-bold text-sm">Empathetic & Evidence-Based Care</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Services Catalog & Search Section */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Filter Bar */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              
              <div className="relative w-full lg:w-96">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search services or symptoms..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-10 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm sm:text-base text-slate-800 focus:outline-none focus:border-teal-500 focus:bg-white transition-all"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-200"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
                {categories.map((cat) => {
                  const count = getCategoryCount(cat.id);
                  const isSelected = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 flex-shrink-0 cursor-pointer ${
                        isSelected
                          ? 'bg-teal-700 text-white shadow-md shadow-teal-700/20 scale-102'
                          : 'bg-slate-50 text-slate-700 border border-slate-200 hover:bg-teal-50 hover:text-teal-900'
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-extrabold ${
                          isSelected
                            ? 'bg-teal-900/60 text-teal-100'
                            : 'bg-slate-200 text-slate-700'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Services Grid */}
            {filteredServices.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
                <Brain className="w-12 h-12 text-slate-300 mx-auto" />
                <h3 className="font-heading font-bold text-xl text-slate-800">No psychiatric services found</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Try adjusting your search criteria or choosing another category above.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchTerm('');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-teal-700 text-white font-bold text-sm shadow-xs hover:bg-teal-800 transition-colors cursor-pointer"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, idx) => {
                  const isFirst = idx === 0;
                  return (
                    <div
                      key={service.id}
                      className={`bg-white rounded-3xl ${
                        isFirst ? 'border-0 shadow-lg ring-1 ring-teal-200/60' : 'border border-slate-200/80 hover:border-teal-400 hover:shadow-xl'
                      } hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
                    >
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

                      {/* Service Card Image */}
                      <div className="relative h-48 overflow-hidden rounded-t-3xl">
                        <img
                          src={service.imageUrl}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                        {service.isPopular && (
                          <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-teal-900/90 backdrop-blur-sm text-teal-50 text-[10px] font-bold uppercase tracking-wider border border-teal-400/40">
                            High Demand
                          </div>
                        )}
                      </div>

                      <div className="p-7 sm:p-8">
                        <div>
                          {/* Service Icon */}
                          <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 border border-teal-200/80 flex items-center justify-center mb-4 group-hover:bg-teal-700 group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-2xs -mt-14 relative z-10 border-4 border-white">
                            <Brain className="w-6 h-6" />
                          </div>

                        {/* Title */}
                        <h3 className="font-heading font-extrabold text-2xl text-slate-900 group-hover:text-teal-900 mb-3 transition-colors leading-snug">
                          {service.title}
                        </h3>

                        {/* Short Description */}
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                          {service.shortDesc}
                        </p>

                        {/* Key Benefits */}
                        <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-100">
                          {service.keyBenefits.slice(0, 3).map((benefit, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                              <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                              <span className="line-clamp-2">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                        {/* Card Footer Actions */}
                        <div className="pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                          <Link
                            href={`/services/${service.id}`}
                            className="text-sm font-bold text-teal-700 hover:text-teal-900 flex items-center gap-1.5 group-hover:translate-x-1 transition-transform cursor-pointer"
                          >
                            <span>Full Details</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>

                          <Link
                            href="/contact"
                            className="px-4 py-2.5 rounded-xl bg-teal-50 text-teal-800 hover:bg-teal-700 hover:text-white text-xs sm:text-sm font-bold transition-all shadow-2xs hover:shadow-md cursor-pointer"
                          >
                            Book Service
                          </Link>
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

      <Footer openAppointmentModal={() => handleBook()} />

      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        initialServiceName={selectedServiceName}
      />

    </div>
  );
}
