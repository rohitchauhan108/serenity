'use client';

import React, { useState, useEffect } from 'react';
import {
  Star,
  Quote,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  MapPin,
  Play,
  Pause,
  Filter,
  Grid,
  Layers,
  Heart
} from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/clinicData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'spotlight' | 'grid'>('spotlight');

  const filterCategories = ['All', 'Anxiety', 'Depression', 'Adolescent', 'Telehealth'];

  const filteredTestimonials = TESTIMONIALS_DATA.filter((item) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Anxiety') return item.serviceReceived.toLowerCase().includes('anxiety') || item.quote.toLowerCase().includes('panic');
    if (activeFilter === 'Depression') return item.serviceReceived.toLowerCase().includes('depression');
    if (activeFilter === 'Adolescent') return item.ageGroup.toLowerCase().includes('14') || item.ageGroup.toLowerCase().includes('parent') || item.ageGroup.toLowerCase().includes('child');
    if (activeFilter === 'Telehealth') return item.serviceReceived.toLowerCase().includes('telehealth') || item.quote.toLowerCase().includes('telehealth');
    return true;
  });

  // Reset current index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeFilter]);

  // Autoplay slider timer
  useEffect(() => {
    if (!isPlaying || filteredTestimonials.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, filteredTestimonials.length]);

  const handleNext = () => {
    if (filteredTestimonials.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const handlePrev = () => {
    if (filteredTestimonials.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const currentItem = filteredTestimonials[currentIndex] || TESTIMONIALS_DATA[0];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-5 w-72 h-72 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-5 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-teal-600 animate-pulse" />
            <span>Verified Patient Experiences</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Stories of Healing, Hope, and Transformation
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Hear directly from Maryland individuals and parents who found compassionate care with Dr. Barbara Clement Njoku.
          </p>
        </div>

        {/* Filter & View Mode Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs">
          
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1 mr-1 pl-2">
              <Filter className="w-3.5 h-3.5 text-teal-600" />
              <span>Filter:</span>
            </span>
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  activeFilter === cat
                    ? 'bg-teal-700 text-white shadow-md shadow-teal-700/20'
                    : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-teal-50 hover:text-teal-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Toggle View Mode (Spotlight vs Grid) */}
          <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl self-end sm:self-auto">
            <button
              onClick={() => setViewMode('spotlight')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'spotlight'
                  ? 'bg-white text-teal-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Slider</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-white text-teal-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>All Grid</span>
            </button>
          </div>

        </div>

        {/* View Mode 1: Interactive Spotlight Slider */}
        {viewMode === 'spotlight' && (
          <div className="max-w-4xl mx-auto relative">
            
            {/* Main Featured Testimonial Card */}
            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-teal-200/90 shadow-2xl relative overflow-hidden group hover:border-teal-400 transition-all duration-300">
              
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-500" />
              <Quote className="absolute top-6 right-6 w-24 h-24 text-teal-50 pointer-events-none group-hover:text-teal-100/60 transition-colors" />

              <div className="relative z-10 space-y-6">
                
                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(currentItem.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                    <span className="text-xs font-extrabold text-slate-800 ml-1.5">5.0 / 5.0 Rating</span>
                  </div>

                  {currentItem.verified && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Verified Patient
                    </span>
                  )}
                </div>

                {/* Quote Text */}
                <p className="font-heading font-medium text-lg sm:text-xl md:text-2xl text-slate-900 leading-relaxed italic">
                  "{currentItem.quote}"
                </p>

                {/* Patient Meta Info */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-slate-100">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-heading font-extrabold text-slate-900 text-base">
                        Patient {currentItem.patientInitials}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        ({currentItem.ageGroup})
                      </span>
                    </div>
                    <div className="text-xs text-teal-700 font-bold mt-1 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Service: {currentItem.serviceReceived}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200/60">
                    <MapPin className="w-3.5 h-3.5 text-teal-600" />
                    <span>{currentItem.location} • {currentItem.date}</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Controls Bar: Dots, Next/Prev, Auto-play toggle */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
              
              {/* Dots Indicator */}
              <div className="flex items-center gap-2">
                {filteredTestimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      currentIndex === idx ? 'bg-teal-700 w-8' : 'bg-slate-200 hover:bg-slate-300 w-2.5'
                    }`}
                    title={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                
                {/* Autoplay toggle */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="px-3.5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold text-slate-700 flex items-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 text-amber-600" />
                      <span>Pause Autoplay</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 text-teal-600" />
                      <span>Autoplay</span>
                    </>
                  )}
                </button>

                {/* Left Arrow */}
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-teal-50 hover:border-teal-300 text-slate-700 hover:text-teal-800 shadow-xs transition-all cursor-pointer hover:scale-105"
                  title="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-teal-50 hover:border-teal-300 text-slate-700 hover:text-teal-800 shadow-xs transition-all cursor-pointer hover:scale-105"
                  title="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

              </div>

            </div>

          </div>
        )}

        {/* View Mode 2: Grid of Cards with Hover Effects */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredTestimonials.map((item, idx) => (
              <div
                key={item.id || idx}
                className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 hover:border-teal-400 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    {item.verified && (
                      <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        Verified
                      </span>
                    )}
                  </div>

                  <p className="text-slate-800 text-sm sm:text-base leading-relaxed italic font-medium">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-extrabold text-slate-900 block">
                      Patient {item.patientInitials} ({item.ageGroup})
                    </span>
                    <span className="text-teal-700 font-semibold text-[11px]">
                      {item.serviceReceived}
                    </span>
                  </div>

                  <div className="text-slate-500 text-[11px] font-medium flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-teal-600" />
                    <span>{item.location}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
