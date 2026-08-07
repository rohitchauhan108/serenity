'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ClipboardCheck,
  Pill,
  HeartPulse,
  Sun,
  Activity,
  Zap,
  Shield,
  Sparkles,
  Brain,
  Smile,
  UserCheck,
  HeartHandshake,
  Video,
  Clock,
  FileText,
  Feather,
  Search,
  Filter,
  CheckCircle2,
  ArrowRight,
  X,
  Calendar
} from 'lucide-react';
import { SERVICES_DATA } from '../data/clinicData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  openAppointmentModal: (serviceTitle?: string) => void;
  selectedServiceId: string | null;
  setSelectedServiceId: (id: string | null) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  ClipboardCheck,
  Pill,
  HeartPulse,
  Sun,
  Activity,
  Zap,
  Shield,
  Sparkles,
  Brain,
  Smile,
  UserCheck,
  HeartHandshake,
  Video,
  Clock,
  FileText,
  Feather
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  openAppointmentModal,
  selectedServiceId,
  setSelectedServiceId
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  // Sync external selectedServiceId
  React.useEffect(() => {
    if (selectedServiceId) {
      const match = SERVICES_DATA.find((s) => s.id === selectedServiceId);
      if (match) {
        setActiveModalService(match);
      }
    }
  }, [selectedServiceId]);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'evaluation', label: 'Evaluations' },
    { id: 'medication', label: 'Medication' },
    { id: 'therapy', label: 'Therapy & Care' },
    { id: 'lifestage', label: 'Life Stages' },
    { id: 'telehealth', label: 'Telehealth' }
  ];

  // Helper to compute category counts
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

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-teal-600 animate-pulse" />
            <span>Comprehensive Clinical Care</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Specialized Psychiatric Services Tailored to You
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            From initial psychiatric diagnostic evaluations to long-term medication management and supportive therapy across all age groups.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs">
          
          {/* Search Input */}
          <div className="relative w-full lg:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services (e.g. ADHD, Anxiety)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-800 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Toggle Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const count = getCategoryCount(cat.id);
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 flex-shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-teal-700 text-white shadow-md shadow-teal-700/20 scale-102'
                      : 'bg-white text-slate-600 border border-slate-200/90 hover:bg-teal-50 hover:text-teal-800 hover:border-teal-200 hover:scale-102'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] font-extrabold ${
                      isSelected
                        ? 'bg-teal-900/60 text-teal-100'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Active Filter Indicator Bar */}
        {(selectedCategory !== 'all' || searchTerm) && (
          <div className="mb-6 flex items-center justify-between bg-teal-50/70 border border-teal-100 px-4 py-2 rounded-xl text-xs text-teal-900 font-medium">
            <div className="flex items-center gap-2">
              <Filter className="w-3.5 h-3.5 text-teal-700" />
              <span>
                Showing <strong>{filteredServices.length}</strong> service{filteredServices.length === 1 ? '' : 's'}
                {selectedCategory !== 'all' && ` for "${categories.find(c => c.id === selectedCategory)?.label}"`}
                {searchTerm && ` matching "${searchTerm}"`}
              </span>
            </div>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchTerm('');
              }}
              className="font-bold text-teal-700 hover:underline flex items-center gap-1"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Services Grid with Card Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const IconComponent = ICON_MAP[service.iconName] || Brain;
            const isFirst = index === 0;
            return (
              <div
                key={service.id}
                className={`bg-white p-7 sm:p-8 rounded-3xl ${
                  isFirst
                    ? 'border-0 shadow-lg ring-1 ring-teal-200/60'
                    : 'border border-slate-200/80 hover:border-teal-400'
                } hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
              >
                {/* Top Accent Gradient Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {service.isPopular && (
                  <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-teal-100/90 text-teal-900 text-xs font-bold uppercase tracking-wider border border-teal-200/50">
                    High Demand
                  </div>
                )}

                <div>
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-700 border border-teal-200/80 flex items-center justify-center mb-5 group-hover:bg-teal-700 group-hover:text-white group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-3 group-hover:text-teal-700 transition-colors leading-snug">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Key Benefits Pills */}
                  <div className="space-y-2 mb-6">
                    {service.keyBenefits.slice(0, 3).map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span className="line-clamp-1">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="text-sm font-bold text-teal-700 hover:text-teal-900 flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Learn Details</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <Link
                    href="/contact"
                    className="px-4 py-2.5 rounded-xl bg-teal-50 text-teal-800 hover:bg-teal-700 hover:text-white text-xs sm:text-sm font-bold transition-all shadow-2xs hover:shadow-md inline-block"
                  >
                    Book Service
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <p className="text-slate-500 font-medium text-sm">
              No services matched "{searchTerm}". Try clearing your filter or searching for another condition.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="mt-3 px-4 py-2 rounded-xl bg-teal-700 text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
            
            <button
              onClick={() => {
                setActiveModalService(null);
                setSelectedServiceId(null);
              }}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-teal-100 text-teal-800 rounded-2xl">
                {React.createElement(ICON_MAP[activeModalService.iconName] || Brain, { className: 'w-7 h-7' })}
              </div>
              <div>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-700">
                  {activeModalService.category} Care
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
                  {activeModalService.title}
                </h3>
              </div>
            </div>

            <p className="text-slate-700 text-base leading-relaxed mb-6">
              {activeModalService.fullDesc}
            </p>

            <div className="mb-6 bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
              <h4 className="font-extrabold text-base text-slate-900 mb-3">Key Clinical Benefits & Features:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeModalService.keyBenefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 flex-shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => {
                  setActiveModalService(null);
                  setSelectedServiceId(null);
                }}
                className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-100 transition-colors"
              >
                Close
              </button>
              <Link
                href="/contact"
                onClick={() => {
                  setActiveModalService(null);
                  setSelectedServiceId(null);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-white font-bold text-sm gradient-teal-blue shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4.5 h-4.5" />
                <span>Book This Service</span>
              </Link>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
