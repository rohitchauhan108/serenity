'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Sparkles,
  Heart,
  CheckCircle2,
  X,
  Calendar,
  Brain,
  Search,
  Filter,
  ArrowRight,
  Shield,
  Activity
} from 'lucide-react';
import { CONDITIONS_DATA } from '../data/clinicData';
import { ConditionItem } from '../types';

interface ConditionsSectionProps {
  openAppointmentModal: (conditionName?: string) => void;
}

export const ConditionsSection: React.FC<ConditionsSectionProps> = ({ openAppointmentModal }) => {
  const router = useRouter();
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

  const getCategoryCount = (cat: string) => {
    if (cat === 'All') return CONDITIONS_DATA.length;
    return CONDITIONS_DATA.filter((c) => c.category === cat).length;
  };

  return (
    <section id="conditions" className="py-20 bg-slate-50 relative overflow-hidden">
      
      {/* Decorative Orbs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-100/80 border border-teal-200 text-teal-900 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-teal-700 animate-pulse" />
            <span>Conditions We Treat</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Specialized Care for a Spectrum of Mental Health Challenges
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Explore common symptoms and our evidence-based psychiatric care pathways. Select any condition to review treatment options.
          </p>
        </div>

        {/* Search & Category Tabs Control Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xs">
          
          {/* Search Bar */}
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

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const count = getCategoryCount(cat);
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

        {/* Conditions Grid with Hover Effects */}
        {filteredConditions.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
            <Brain className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="font-heading font-bold text-base text-slate-800">No conditions found matching your filter</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Try searching with different terms or select "All" from the categories above.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredConditions.map((cond) => (
              <div
                key={cond.id}
                onClick={() => setSelectedCondition(cond)}
                className={`rounded-3xl bg-white border border-slate-200/90 hover:border-teal-400 shadow-xs hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden cursor-pointer`}
              >
                {/* Top Hover Gradient Line */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

                {/* Condition Card Image Banner */}
                <div className={`relative overflow-hidden rounded-t-3xl bg-gradient-to-br ${cond.color} border-b border-slate-100/80`}>
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={cond.imageUrl}
                      alt={cond.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 mix-blend-overlay opacity-80"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
                  </div>
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-900 bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-teal-200/60 shadow-sm">
                      {cond.category}
                    </span>
                  </div>
                  <div className="absolute -bottom-5 right-4 z-10">
                    <div className="w-10 h-10 rounded-xl bg-white text-teal-700 flex items-center justify-center group-hover:bg-teal-700 group-hover:text-white transition-colors duration-300 shadow-lg border border-slate-100">
                      <Brain className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-8">
                  <div>
                    {/* Title */}
                    <h3 className="font-heading font-bold text-base text-slate-900 group-hover:text-teal-900 mb-2 transition-colors">
                      {cond.name}
                    </h3>

                    {/* Description snippet */}
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                      {cond.description}
                    </p>
                  </div>

                  {/* Card Footer CTA */}
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
            ))}
          </div>
        )}

      </div>

      {/* Condition Details Modal */}
      {selectedCondition && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto">
            {/* Modal Image Banner */}
            <div className={`relative h-40 overflow-hidden rounded-t-3xl bg-gradient-to-br ${selectedCondition.color}`}>
              <img
                src={selectedCondition.imageUrl}
                alt={selectedCondition.name}
                className="w-full h-full object-cover mix-blend-overlay opacity-85"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
              <button
                onClick={() => setSelectedCondition(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-sm text-slate-600 hover:bg-white hover:text-slate-900 cursor-pointer shadow-lg border border-white/50 z-10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-4 -mt-16 relative z-10">
                <div className="p-3 bg-teal-100 text-teal-800 rounded-2xl shadow-lg border border-white">
                  <Brain className="w-6 h-6 text-teal-700" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
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
                    <span>Common Symptoms Recognized:</span>
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
                    <span>Our Treatment & Care Approach:</span>
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
                <button
                  onClick={() => {
                    setSelectedCondition(null);
                    router.push('/contact');
                  }}
                  className="px-6 py-2.5 rounded-xl text-white font-bold text-xs gradient-teal-blue shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Evaluation for {selectedCondition.name}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
