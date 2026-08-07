'use client';

import React, { useState } from 'react';
import {
  HelpCircle,
  Search,
  Plus,
  Minus,
  Sparkles,
  Phone,
  Filter,
  X,
  MessageSquare,
  CheckCircle2
} from 'lucide-react';
import { FAQ_DATA, CLINIC_INFO } from '../data/clinicData';

export const FaqSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedFaqIds, setExpandedFaqIds] = useState<string[]>(['faq-1']);

  const categories = ['All', 'General', 'Services', 'Appointments', 'Insurance & Fees', 'Telehealth'];

  // Calculate category item count
  const getCategoryCount = (cat: string) => {
    if (cat === 'All') return FAQ_DATA.length;
    return FAQ_DATA.filter((faq) => faq.category === cat).length;
  };

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === catMatch(faq.category, activeCategory);
    const query = searchTerm.toLowerCase().trim();
    const matchesSearch =
      !query ||
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query) ||
      faq.category.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  function catMatch(faqCat: string, selectedCat: string) {
    if (selectedCat === 'All') return faqCat;
    return selectedCat;
  }

  const toggleFaq = (id: string) => {
    setExpandedFaqIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const expandAll = () => {
    setExpandedFaqIds(filteredFaqs.map((f) => f.id));
  };

  const collapseAll = () => {
    setExpandedFaqIds([]);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-slate-50 via-teal-50/20 to-slate-50 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#0d9488_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.035] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-100/80 border border-teal-200 text-teal-900 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-teal-700 animate-pulse" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Clear Answers to Your Mental Healthcare Questions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Everything you need to know about our psychiatric evaluations, insurance acceptance, telehealth video visits, and prescribing policies.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="space-y-4 mb-8 bg-white p-4 sm:p-5 rounded-3xl border border-slate-200/80 shadow-xs">
          
          {/* Search Bar */}
          <div className="relative max-w-lg mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions (e.g. insurance, evaluation, telehealth, ADHD)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-teal-500 focus:bg-white transition-all"
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
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => {
              const count = getCategoryCount(cat);
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-teal-700 text-white shadow-md shadow-teal-700/20 scale-102'
                      : 'bg-slate-100 text-slate-600 hover:bg-teal-50 hover:text-teal-800'
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

        {/* Expand / Collapse All Controls */}
        <div className="flex items-center justify-between mb-4 px-2 text-xs">
          <span className="font-semibold text-slate-500">
            Showing {filteredFaqs.length} Question{filteredFaqs.length === 1 ? '' : 's'}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={expandAll}
              className="font-bold text-teal-700 hover:text-teal-900 hover:underline cursor-pointer"
            >
              Expand All
            </button>
            <span className="text-slate-300">•</span>
            <button
              onClick={collapseAll}
              className="font-bold text-slate-500 hover:text-slate-800 hover:underline cursor-pointer"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Accordion List */}
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
            <HelpCircle className="w-10 h-10 text-slate-300 mx-auto" />
            <h3 className="font-heading font-bold text-base text-slate-800">No questions found matching your search</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Try searching with different keywords or select a different category above.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchTerm('');
              }}
              className="px-4 py-2 rounded-xl bg-teal-700 text-white font-bold text-xs shadow-xs hover:bg-teal-800 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-3.5">
            {filteredFaqs.map((faq) => {
              const isOpen = expandedFaqIds.includes(faq.id);
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-teal-400 bg-white shadow-md ring-1 ring-teal-400/20'
                      : 'border-slate-200/90 bg-white hover:border-teal-300 hover:shadow-xs'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="p-2 rounded-xl bg-teal-50 text-teal-700 group-hover:bg-teal-100 transition-colors flex-shrink-0">
                        <MessageSquare className="w-4 h-4" />
                      </span>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 block mb-0.5">
                          {faq.category}
                        </span>
                        <h3 className="font-heading font-bold text-base text-slate-900 group-hover:text-teal-900 transition-colors">
                          {faq.question}
                        </h3>
                      </div>
                    </div>

                    <div className={`p-2 rounded-xl transition-colors flex-shrink-0 ${
                      isOpen ? 'bg-teal-700 text-white' : 'bg-slate-100 text-slate-600 group-hover:bg-teal-50 group-hover:text-teal-800'
                    }`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-slate-700 leading-relaxed border-t border-slate-100 pt-4 bg-teal-50/20 animate-in fade-in duration-200">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                        <div>{faq.answer}</div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Direct Contact Callout */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-teal-900 via-teal-800 to-slate-900 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-teal-300" />
              <h4 className="font-heading font-bold text-base text-white">Have a specific question not answered here?</h4>
            </div>
            <p className="text-xs text-teal-100/90">Our intake coordinators are ready to help you directly in Maryland.</p>
          </div>
          <a
            href={`tel:${CLINIC_INFO.phone}`}
            className="px-6 py-3 rounded-2xl bg-white text-teal-900 hover:bg-teal-50 text-xs font-extrabold shadow-md hover:scale-102 transition-all flex items-center gap-2 flex-shrink-0"
          >
            <Phone className="w-4 h-4 text-teal-700" />
            <span>Call {CLINIC_INFO.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
