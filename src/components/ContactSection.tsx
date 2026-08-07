'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldAlert,
  Send,
  Calendar,
  CheckCircle2,
  Video,
  Building2,
  Sparkles
} from 'lucide-react';
import { CLINIC_INFO, SERVICES_DATA, INSURANCE_DATA } from '../data/clinicData';
import { AppointmentFormData } from '../types';

interface ContactSectionProps {
  initialServiceName?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialServiceName = '' }) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: 'Morning (8:00 AM - 12:00 PM)',
    visitType: 'Telehealth',
    serviceType: initialServiceName || 'Comprehensive Psychiatric Evaluation',
    insuranceProvider: 'CareFirst Blue Cross Blue Shield',
    subject: 'Appointment Consultation Request',
    message: '',
    isEmergencyAcknowledged: true
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/80 border border-teal-200 text-teal-900 text-xs font-bold uppercase">
            <Calendar className="w-3.5 h-3.5 text-teal-700" />
            <span>Connect & Schedule</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Begin Your Serenity Mental Health Journey
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Book a secure telehealth video session from anywhere in Maryland.
          </p>
        </div>

        {/* Emergency Banner */}
        <div className="mb-12 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3 shadow-xs">
          <ShieldAlert className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold text-amber-950">Emergency Notice: </strong>
            {CLINIC_INFO.crisisNotice}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Details, Hours, Map Placeholder */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel p-6 rounded-3xl border border-slate-200/80 space-y-6">
              <h3 className="font-heading font-extrabold text-2xl text-slate-900 border-b border-slate-100 pb-4">
                Clinic Location & Hours
              </h3>

              <div className="space-y-4 text-xs">
                
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-teal-100 text-teal-800 rounded-xl flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Maryland Practice Address</span>
                    <span className="text-slate-600 leading-relaxed block mt-0.5">{CLINIC_INFO.address}</span>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-teal-100 text-teal-800 rounded-xl flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Phone & Appointments</span>
                    <a href={`tel:${CLINIC_INFO.phone}`} className="text-teal-700 font-bold hover:underline block mt-0.5">
                      {CLINIC_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-teal-100 text-teal-800 rounded-xl flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Email Inquiries</span>
                    <a href={`mailto:${CLINIC_INFO.email}`} className="text-teal-700 font-semibold hover:underline block mt-0.5">
                      {CLINIC_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3 pt-2 border-t border-slate-100">
                  <div className="p-2.5 bg-purple-100 text-purple-800 rounded-xl flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="space-y-1 w-full">
                    <span className="font-bold text-slate-900 block">Operating Hours</span>
                    {CLINIC_INFO.workingHours.map((wh, i) => (
                      <div key={i} className="flex justify-between text-slate-600">
                        <span>{wh.days}:</span>
                        <span className="font-medium">{wh.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

            {/* Map Frame Visual */}
            <div className="rounded-3xl overflow-hidden border border-slate-200/80 shadow-md h-56 bg-slate-200 relative">
              <iframe
                title="Serenity Behavioral Maryland Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3092.839818783424!2d-76.8378!3d39.1824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7d8d21a221b65%3A0x44c11b8b8b8b8b8b!2sStanford%20Blvd%2C%20Columbia%2C%20MD%2021045!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
            </div>

          </div>

          {/* Right Column: Interactive Appointment Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-teal-100 shadow-xl bg-white relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl text-slate-900">
                    Consultation Request Received!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-800">{formData.fullName}</strong>. Our intake coordinator will reach out to you within 24 hours at <strong className="text-teal-800">{formData.phone}</strong> to confirm your visit time.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ ...formData, fullName: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-teal-700 text-white font-bold text-xs"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div>
                      <h3 className="font-heading font-extrabold text-2xl text-slate-900">
                        Schedule a Consultation
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">Direct intake request to Dr. Barbara Clement Njoku’s clinic</p>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full">
                      Accepting New Patients
                    </span>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-teal-500 bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="(410) 555-0199"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-teal-500 bg-slate-50/50"
                      />
                    </div>
                  </div>

                  {/* Email & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-teal-500 bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Date</label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-teal-500 bg-slate-50/50"
                      />
                    </div>
                  </div>

                  {/* Service Needed & Insurance */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Service Required</label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-teal-500 bg-slate-50/50"
                      >
                        {SERVICES_DATA.map((srv) => (
                          <option key={srv.id} value={srv.title}>{srv.title}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Insurance Provider</label>
                      <select
                        value={formData.insuranceProvider}
                        onChange={(e) => setFormData({ ...formData, insuranceProvider: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-teal-500 bg-slate-50/50"
                      >
                        {INSURANCE_DATA.map((ins) => (
                          <option key={ins.id} value={ins.name}>{ins.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Brief Description of Concerns (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Please share any specific symptoms, goals, or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-teal-500 bg-slate-50/50"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl text-white font-bold text-sm gradient-teal-blue shadow-lg hover:shadow-xl hover:opacity-95 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Appointment Request</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
