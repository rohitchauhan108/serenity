'use client';

import React, { useState } from 'react';
import {
  X,
  Shield,
  FileText,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  RotateCcw,
  Calendar,
  Home
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

// Legal Modal Component
interface LegalModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[85vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
          <div className="p-2.5 bg-teal-100 text-teal-800 rounded-xl">
            {type === 'privacy' ? <Shield className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
          </div>
          <div>
            <h3 className="font-heading font-extrabold text-2xl text-slate-900">
              {type === 'privacy' ? 'Privacy Policy & HIPAA Notice' : 'Terms & Conditions of Service'}
            </h3>
            <span className="text-xs text-slate-500">Serenity Behavioral & Wellness Services LLC</span>
          </div>
        </div>

        {type === 'privacy' ? (
          <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
            <h4 className="font-bold text-slate-900 text-sm">1. Commitment to Patient Privacy (HIPAA Compliance)</h4>
            <p>
              Serenity Behavioral & Wellness Services LLC is fully committed to protecting your Protected Health Information (PHI) under the Health Insurance Portability and Accountability Act (HIPAA) and Maryland state health regulations.
            </p>

            <h4 className="font-bold text-slate-900 text-sm">2. Collection and Use of Information</h4>
            <p>
              We collect personal identification, health history, insurance details, and contact preferences exclusively to provide psychiatric diagnostic evaluations, medication management, and clinical follow-ups.
            </p>

            <h4 className="font-bold text-slate-900 text-sm">3. Secure Telehealth Data Protection</h4>
            <p>
              All video visits conducted via our Maryland telehealth portal utilize end-to-end encryption. No audio or video recordings are stored without explicit written consent.
            </p>

            <h4 className="font-bold text-slate-900 text-sm">4. Contacting Our Privacy Officer</h4>
            <p>
              If you have questions regarding your medical records or privacy rights, please contact info@serenitybws.com or call (410) 555-0198.
            </p>
          </div>
        ) : (
          <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
            <h4 className="font-bold text-slate-900 text-sm">1. Clinical Scope & Medical Disclaimer</h4>
            <p>
              Website content provided by Serenity Behavioral & Wellness Services LLC is for educational purposes and does not constitute formal medical or psychiatric advice prior to an official evaluation.
            </p>

            <h4 className="font-bold text-slate-900 text-sm">2. Emergency & Crisis Disclaimer</h4>
            <p>
              This website and online scheduling form are NOT for psychiatric emergencies. If you are in immediate danger, please dial 988 or 911 immediately.
            </p>

            <h4 className="font-bold text-slate-900 text-sm">3. Appointment Cancellation Policy</h4>
            <p>
              We request at least 24 hours advance notice for appointment cancellations or reschedules to allow other Maryland patients access to timely care.
            </p>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-teal-700 text-white font-bold text-xs"
          >
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
};

// Self Check Quiz Modal Component
interface SelfCheckModalProps {
  isOpen: boolean;
  onClose: () => void;
  openAppointmentModal: () => void;
}

export const SelfCheckModal: React.FC<SelfCheckModalProps> = ({
  isOpen,
  onClose,
  openAppointmentModal
}) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  if (!isOpen) return null;

  const questions = [
    {
      q: "Over the past 2 weeks, how often have you felt overwhelmed by racing thoughts, worry, or tension?",
      opts: ["Not at all", "Several days", "More than half the days", "Nearly every day"]
    },
    {
      q: "How frequently do you experience fatigue, low energy, or difficulty staying motivated?",
      opts: ["Rarely", "Occasionally", "Frequently", "Almost constantly"]
    },
    {
      q: "How would you rate your sleep quality and ability to rest fully?",
      opts: ["Restful & steady", "Slight trouble sleeping", "Frequent awakenings/insomnia", "Severe sleep disruption"]
    },
    {
      q: "Do mental health symptoms interfere with your work, relationships, or family life?",
      opts: ["No impact", "Minor friction", "Moderate strain", "Significant interference"]
    }
  ];

  const handleOption = (idx: number) => {
    const nextAnswers = [...answers, idx];
    setAnswers(nextAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(questions.length); // Result screen
    }
  };

  const handleReset = () => {
    setStep(0);
    setAnswers([]);
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 bg-purple-100 text-purple-800 rounded-xl">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading font-extrabold text-xl text-slate-900">
              Mental Wellness Self-Check
            </h3>
            <span className="text-[11px] text-slate-500">Self-reflection tool • Confidential</span>
          </div>
        </div>

        {step < questions.length ? (
          <div className="space-y-4">
            <div className="flex justify-between items-center text-xs text-slate-400 font-bold">
              <span>Question {step + 1} of {questions.length}</span>
              <div className="flex gap-1">
                {questions.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all ${
                      i === step ? 'w-6 bg-purple-600' : 'w-2 bg-slate-200'
                    }`}
                  />
                ))}
              </div>
            </div>

            <p className="font-heading font-bold text-base text-slate-800 leading-snug">
              {questions[step].q}
            </p>

            <div className="space-y-2 pt-2">
              {questions[step].opts.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleOption(i)}
                  className="w-full text-left p-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-purple-50 hover:border-purple-300 text-xs font-semibold text-slate-800 transition-colors flex items-center justify-between"
                >
                  <span>{opt}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-purple-600" />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-4 py-2">
            <div className="p-4 bg-purple-50 rounded-2xl border border-purple-200 text-purple-900 text-center space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700">Self-Check Results</span>
              <h4 className="font-heading font-extrabold text-xl text-slate-900">
                {totalScore >= 6 ? 'Mild-to-Moderate Symptoms Indicated' : 'Mild Emotional Stress Identified'}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Your responses suggest that a formal, unhurried psychiatric evaluation with Dr. Barbara Clement Njoku could provide clarity, diagnostic guidance, and custom relief.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <button
                onClick={handleReset}
                className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Quiz</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  openAppointmentModal();
                }}
                className="w-full py-2.5 rounded-xl bg-teal-700 text-white text-xs font-bold shadow-md hover:bg-teal-800 flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Evaluation</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

// 404 Page Component
export const NotFound404: React.FC<{ onGoHome: () => void }> = ({ onGoHome }) => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center p-6 bg-slate-50 text-center">
      <div className="max-w-md space-y-6">
        <div className="w-20 h-20 bg-teal-100 text-teal-800 rounded-3xl flex items-center justify-center mx-auto shadow-md">
          <AlertCircle className="w-10 h-10" />
        </div>
        <h1 className="font-heading font-extrabold text-4xl text-slate-900">404 - Page Not Found</h1>
        <p className="text-slate-600 text-sm leading-relaxed">
          The page you are looking for does not exist or has been moved. Return to Serenity Behavioral & Wellness Services home.
        </p>
        <button
          onClick={onGoHome}
          className="px-6 py-3 rounded-xl text-white font-bold text-xs gradient-teal-blue shadow-md inline-flex items-center gap-2"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </button>
      </div>
    </div>
  );
};
