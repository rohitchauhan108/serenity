'use client';

import React, { useState, useEffect } from 'react';
import {
  X,
  Calendar,
  Send,
  CheckCircle2,
  Video,
  Building2,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { CLINIC_INFO, SERVICES_DATA, INSURANCE_DATA } from '../data/clinicData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetServiceTitle?: string;
  initialServiceName?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  presetServiceTitle = '',
  initialServiceName = ''
}) => {
  const initialTitle = initialServiceName || presetServiceTitle || '';
  const [visitType, setVisitType] = useState<'Telehealth' | 'In-Person'>('Telehealth');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedService, setSelectedService] = useState(initialTitle || SERVICES_DATA[0].title);
  const [insurance, setInsurance] = useState(INSURANCE_DATA[0].name);
  const [preferredDate, setPreferredDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialTitle) {
      setSelectedService(initialTitle);
    }
  }, [initialTitle]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-slate-900">
              Appointment Request Submitted!
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto">
              Thank you, <strong className="text-slate-900">{fullName}</strong>. Our clinic coordinator will contact you at <strong className="text-teal-800">{phone}</strong> within 24 business hours to finalize your appointment time.
            </p>
            <button
              onClick={handleResetAndClose}
              className="mt-4 px-6 py-2.5 rounded-xl bg-teal-700 text-white font-bold text-xs"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="p-2.5 bg-teal-100 text-teal-800 rounded-xl">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-xl text-slate-900">
                  Book Psychiatric Evaluation
                </h3>
                <span className="text-xs text-slate-500">Dr. Barbara Clement Njoku, DNP • Maryland Clinic</span>
              </div>
            </div>

            {/* Visit Setting Pills */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Care Delivery Setting
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setVisitType('Telehealth')}
                  className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-colors ${
                    visitType === 'Telehealth'
                      ? 'bg-teal-700 text-white border-teal-700'
                      : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>MD Telehealth (Video)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setVisitType('In-Person')}
                  className={`p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-colors ${
                    visitType === 'In-Person'
                      ? 'bg-teal-700 text-white border-teal-700'
                      : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Columbia, MD Clinic</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-teal-500 bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="(410) 555-0199"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-teal-500 bg-slate-50/50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="email@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-teal-500 bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Date</label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-teal-500 bg-slate-50/50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Requested Service</label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-teal-500 bg-slate-50/50"
                >
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Insurance Plan</label>
                <select
                  value={insurance}
                  onChange={(e) => setInsurance(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-teal-500 bg-slate-50/50"
                >
                  {INSURANCE_DATA.map((ins) => (
                    <option key={ins.id} value={ins.name}>{ins.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500">
              <div className="flex items-center gap-1 text-emerald-700 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>100% HIPAA Private & Encrypted</span>
              </div>
              <span>No payment required now</span>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl text-white font-bold text-xs gradient-teal-blue shadow-md hover:opacity-95 transition-opacity flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Confirm Appointment Request</span>
            </button>

          </form>
        )}

      </div>
    </div>
  );
};
