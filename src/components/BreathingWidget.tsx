'use client';

import React, { useState, useEffect } from 'react';
import {
  Wind,
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  Heart,
  Smile,
  Shield,
  Award,
  Users,
  Sun,
  Moon,
  Clock
} from 'lucide-react';
import { DAILY_WELLNESS_TIPS } from '../data/clinicData';

export const BreathingWidget: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'Inhale' | 'Hold' | 'Exhale' | 'Ready'>('Ready');
  const [timer, setTimer] = useState(4);
  const [moodRating, setMoodRating] = useState<number | null>(null);
  const [completedCycles, setCompletedCycles] = useState<number>(0);

  const moodFeedback = [
    {
      label: 'Stress',
      title: 'High Stress Response',
      color: 'bg-amber-50 border-amber-200 text-amber-900',
      desc: 'Stress activates fight-or-flight pathways. 4-7-8 breathing slows down cortisol release and releases diaphragm tension.'
    },
    {
      label: 'Anxious',
      title: 'Calming Anxiety & Panic',
      color: 'bg-rose-50 border-rose-200 text-rose-900',
      desc: 'Anxiety triggers rapid breathing. Prolonged exhales stimulate the vagus nerve to rapidly reduce heart rate.'
    },
    {
      label: 'Neutral',
      title: 'Balanced Mindset',
      color: 'bg-teal-50 border-teal-200 text-teal-900',
      desc: 'A neutral mind is ideal for a quick mindfulness check-in. Taking 2 minutes now builds long-term emotional resilience.'
    },
    {
      label: 'Calm',
      title: 'Sustaining Calm',
      color: 'bg-emerald-50 border-emerald-200 text-emerald-900',
      desc: 'Wonderful! Practicing breathwork while calm trains your autonomic nervous system to recover faster during future stress.'
    },
    {
      label: 'Peaceful',
      title: 'Deep Serenity',
      color: 'bg-indigo-50 border-indigo-200 text-indigo-900',
      desc: 'You are in a peaceful state. Use this tool anytime before sleep or important decisions to maintain mental clarity.'
    }
  ];

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            if (phase === 'Ready' || phase === 'Exhale') {
              if (phase === 'Exhale') {
                setCompletedCycles((c) => c + 1);
              }
              setPhase('Inhale');
              return 4;
            } else if (phase === 'Inhale') {
              setPhase('Hold');
              return 7;
            } else if (phase === 'Hold') {
              setPhase('Exhale');
              return 8;
            }
            return 4;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, phase]);

  const handleReset = () => {
    setIsActive(false);
    setPhase('Ready');
    setTimer(4);
    setCompletedCycles(0);
  };

  const getPhaseInstruction = () => {
    switch (phase) {
      case 'Inhale':
        return 'Inhale quietly through your nose...';
      case 'Hold':
        return 'Hold breath gently and comfortably...';
      case 'Exhale':
        return 'Exhale completely with a soft whoosh...';
      default:
        return 'Press start to activate 4-7-8 parasympathetic relaxation.';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 via-teal-50/30 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Floating Statistics Header Bar */}
        <div className="mb-20 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-teal-100/90 text-center hover:scale-105 hover:shadow-xl hover:border-teal-300 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center mx-auto mb-3 font-bold">
              <Award className="w-6 h-6 text-teal-700" />
            </div>
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">
              12 Yrs
            </div>
            <div className="text-xs font-semibold text-slate-600 mt-1">
              Clinical  Experience
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-teal-100/90 text-center hover:scale-105 hover:shadow-xl hover:border-teal-300 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto mb-3 font-bold">
              <Smile className="w-6 h-6 text-emerald-700" />
            </div>
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">
              99%
            </div>
            <div className="text-xs font-semibold text-slate-600 mt-1">
              Patient Satisfaction Rate
            </div>
          </div>


          <div className="bg-white p-6 rounded-3xl border border-teal-100/90 text-center hover:scale-105 hover:shadow-xl hover:border-teal-300 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center mx-auto mb-3 font-bold">
              <Shield className="w-6 h-6 text-blue-700" />
            </div>
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">
              100%
            </div>
            <div className="text-xs font-semibold text-slate-600 mt-1">
              HIPAA Confidential & Safe
            </div>
          </div>
        </div>

        {/* 4-7-8 Breathing & Relaxation Interactive Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
              <Wind className="w-3.5 h-3.5 animate-spin-slow" />
              <span>Interactive Mental Wellness Tool</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900">
              Take a Moment to Calm Your Nervous System
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              The 4-7-8 breathing exercise naturally activates your parasympathetic nervous system, lowering heart rate and soothing acute stress or racing thoughts.
            </p>

            {/* Quick Mood Pulse Check */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <span className="text-xs font-bold text-slate-800 block">How is your mind feeling right now?</span>
              <div className="flex gap-2">
                {moodFeedback.map((m, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMoodRating(idx)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all duration-200 cursor-pointer ${
                      moodRating === idx
                        ? 'bg-teal-700 text-white border-teal-700 shadow-md scale-102'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-teal-50 hover:border-teal-200'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>

              {/* Dynamic Interactive Response Banner for Selected Mood */}
              {moodRating !== null && (
                <div className={`mt-3 p-3.5 rounded-xl border animate-in fade-in duration-300 text-xs ${moodFeedback[moodRating].color}`}>
                  <div className="font-bold flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{moodFeedback[moodRating].title}</span>
                  </div>
                  <p className="leading-relaxed text-[11px] opacity-90">
                    {moodFeedback[moodRating].desc}
                  </p>
                  <button
                    onClick={() => {
                      if (!isActive) setIsActive(true);
                    }}
                    className="mt-2.5 px-3 py-1 rounded-lg bg-teal-800 text-white text-[10px] font-bold hover:bg-teal-900 transition-colors flex items-center gap-1"
                  >
                    <Play className="w-3 h-3" />
                    <span>Start Guided Exercise</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div className="bg-white p-8 rounded-3xl border border-teal-200 shadow-xl w-full max-w-md text-center relative">
              
              {/* Cycle Badge */}
              {completedCycles > 0 && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold flex items-center gap-1 animate-pulse">
                  <Sparkles className="w-3 h-3" />
                  <span>{completedCycles} Cycle{completedCycles > 1 ? 's' : ''} Completed</span>
                </div>
              )}

              {/* Animated Glowing Breathing Sphere */}
              <div className="relative w-48 h-48 mx-auto my-4 flex items-center justify-center">
                <div
                  className={`absolute inset-0 rounded-full transition-all duration-1000 ${
                    phase === 'Inhale'
                      ? 'bg-teal-400/50 scale-125 blur-md'
                      : phase === 'Hold'
                      ? 'bg-purple-400/50 scale-125 blur-md'
                      : phase === 'Exhale'
                      ? 'bg-blue-300/40 scale-90 blur-sm'
                      : 'bg-teal-200/30 scale-100'
                  }`}
                />
                <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-teal-700 via-teal-800 to-slate-900 text-white shadow-xl flex flex-col items-center justify-center relative z-10 transition-transform duration-1000">
                  <span className="text-xs font-bold uppercase tracking-widest text-teal-200">
                    {phase}
                  </span>
                  <span className="font-heading font-extrabold text-4xl my-0.5">
                    {timer}s
                  </span>
                  <span className="text-[10px] text-teal-300 font-medium px-2 text-center line-clamp-1">
                    {phase === 'Inhale' ? '4s Nose Inhale' : phase === 'Hold' ? '7s Breath Hold' : phase === 'Exhale' ? '8s Mouth Exhale' : '4-7-8 Technique'}
                  </span>
                </div>
              </div>

              {/* Dynamic Phase Instruction Text */}
              <p className="text-xs font-medium text-slate-600 mb-5 min-h-[1.5rem]">
                {getPhaseInstruction()}
              </p>

              {/* Controls */}
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={() => setIsActive(!isActive)}
                  className={`px-6 py-2.5 rounded-xl text-white font-bold text-xs shadow-md transition-all flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-amber-600 hover:bg-amber-700 shadow-amber-600/20'
                      : 'bg-teal-700 hover:bg-teal-800 shadow-teal-700/20 hover:scale-102'
                  }`}
                >
                  {isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isActive ? 'Pause Exercise' : 'Start 4-7-8 Breathing'}</span>
                </button>
                <button
                  onClick={handleReset}
                  className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
                  title="Reset Exercise"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Daily Wellness Tips Cards */}
        <div className="mt-12 pt-12 border-t border-slate-200/80">
          <div className="text-center mb-10">
            <h3 className="font-heading font-bold text-2xl text-slate-900">Daily Mental Wellness Tips</h3>
            <p className="text-slate-500 text-sm mt-1">Simple micro-habits recommended by Dr. Barbara Clement Njoku</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DAILY_WELLNESS_TIPS.map((tip) => (
              <div key={tip.id} className="glass-card p-5 rounded-2xl border border-slate-200/80">
                <span className="text-[10px] font-bold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  {tip.category}
                </span>
                <h4 className="font-heading font-bold text-base text-slate-900 mt-2 mb-1">
                  {tip.title}
                </h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
