'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { AppointmentModal } from '../../components/AppointmentModal';
import { CLINIC_INFO } from '../../data/clinicData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  Building2,
  Calendar,
  Sparkles,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';

export default function ContactPage() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    contactPreference: 'Phone',
    serviceInterest: 'Psychiatric Evaluation',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-teal-500/20 selection:text-teal-900">
      
      {/* Universal Navbar */}
      <Navbar openAppointmentModal={() => setIsAppointmentModalOpen(true)} />

      <main className="flex-grow">
        
        {/* Hero Header */}
        <section className="relative pt-12 pb-20 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-teal-300 font-medium mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 text-slate-500" />
              <span className="text-white font-bold">Contact Clinic</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-900/80 border border-teal-500/40 text-teal-200 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm">
                  <Phone className="w-4 h-4 text-teal-400" />
                  <span>Direct Maryland Intake Line</span>
                </div>

                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                  Connect With Our <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-100">
                    Clinical Intake Team
                  </span>
                </h1>

                <p className="text-slate-200 text-lg sm:text-xl leading-relaxed max-w-2xl font-normal">
                  Have questions about scheduling a psychiatric evaluation, insurance coverage, or telehealth video visits? Reach out to Serenity Behavioral & Wellness Services today.
                </p>

                <div className="pt-2 flex flex-wrap gap-4 items-center">
                  <button
                    onClick={() => setIsAppointmentModalOpen(true)}
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-base text-slate-900 bg-teal-300 hover:bg-teal-200 transition-all shadow-lg hover:scale-105 cursor-pointer"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Book Clinical Consultation</span>
                  </button>

                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-base text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all cursor-pointer"
                  >
                    <Phone className="w-5 h-5 text-teal-300" />
                    <span>Call {CLINIC_INFO.phone}</span>
                  </a>
                </div>
              </div>

              {/* Showcase Card */}
              <div className="lg:col-span-4 hidden lg:block">
                <div className="relative rounded-3xl overflow-hidden border border-teal-500/30 shadow-2xl aspect-[4/3]">
                  <img
                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
                    alt="Medical Reception & Telehealth Desk"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-teal-300">Columbia, MD Clinic</span>
                    <p className="font-heading font-bold text-sm">Dedicated Patient Support</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Contact Form & Information Grid */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Left Column: Contact Form */}
              <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xs">
                
                <div className="space-y-2 mb-8">
                  <div className="flex items-center gap-2 text-teal-800 font-extrabold text-xs sm:text-sm uppercase tracking-wider">
                    <MessageSquare className="w-5 h-5 text-teal-600" />
                    <span>Send Us a Confidential Message</span>
                  </div>
                  <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900">
                    How Can We Assist You Today?
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base">
                    Fill out the form below and our intake team will respond promptly during regular clinic hours.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="p-8 rounded-2xl bg-teal-50 border border-teal-200 text-center space-y-4 animate-in fade-in duration-300">
                    <div className="w-14 h-14 bg-teal-700 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="font-heading font-extrabold text-2xl text-teal-950">
                      Message Successfully Sent!
                    </h3>
                    <p className="text-sm sm:text-base text-teal-900 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting Serenity Behavioral & Wellness Services. Our clinic coordinator will review your inquiry and connect with you at your preferred phone or email.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 rounded-xl bg-teal-700 text-white font-bold text-sm shadow-xs hover:bg-teal-800 transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm sm:text-base font-bold text-slate-800 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Jane Doe"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-4.5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm sm:text-base text-slate-800 focus:outline-none focus:border-teal-500 focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm sm:text-base font-bold text-slate-800 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="(410) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4.5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm sm:text-base text-slate-800 focus:outline-none focus:border-teal-500 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm sm:text-base font-bold text-slate-800 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="jane@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4.5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm sm:text-base text-slate-800 focus:outline-none focus:border-teal-500 focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm sm:text-base font-bold text-slate-800 mb-2">
                          Service Needed
                        </label>
                        <select
                          value={formData.serviceInterest}
                          onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                          className="w-full px-4.5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm sm:text-base text-slate-800 focus:outline-none focus:border-teal-500 focus:bg-white transition-all"
                        >
                          <option value="Psychiatric Evaluation">Psychiatric Evaluation</option>
                          <option value="ADHD Assessment">ADHD Assessment</option>
                          <option value="Medication Management">Medication Management</option>
                          <option value="Telehealth Video Visit">Telehealth Video Visit</option>
                          <option value="Insurance Inquiry">Insurance / Fee Inquiry</option>
                          <option value="General Question">General Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm sm:text-base font-bold text-slate-800 mb-2">
                        Your Message / Question *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Please brief us on how we can assist you..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4.5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm sm:text-base text-slate-800 focus:outline-none focus:border-teal-500 focus:bg-white transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-base shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2.5"
                    >
                      <Send className="w-5 h-5" />
                      <span>Submit Confidential Inquiry</span>
                    </button>

                  </form>
                )}

              </div>

              {/* Right Column: Contact Cards & Hours */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Physical Location Card */}
                <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-5">
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 flex items-center gap-2.5">
                    <Building2 className="w-6 h-6 text-teal-600" />
                    <span>Clinic Address & Phone</span>
                  </h3>

                  <div className="space-y-4 text-sm sm:text-base text-slate-700">
                    <div className="flex items-start gap-3.5">
                      <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-slate-900 font-extrabold">Serenity Behavioral & Wellness Services</strong>
                        <span className="text-slate-600">Columbia, Howard County, MD 21044</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3.5">
                      <Phone className="w-5 h-5 text-teal-600 flex-shrink-0" />
                      <span><strong className="font-bold text-slate-900">Phone:</strong> {CLINIC_INFO.phone}</span>
                    </div>

                    <div className="flex items-center gap-3.5">
                      <Mail className="w-5 h-5 text-teal-600 flex-shrink-0" />
                      <span><strong className="font-bold text-slate-900">Email:</strong> {CLINIC_INFO.email}</span>
                    </div>
                  </div>
                </div>

                {/* Working Hours Card */}
                <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-5">
                  <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 flex items-center gap-2.5">
                    <Clock className="w-6 h-6 text-teal-600" />
                    <span>Hours of Operation</span>
                  </h3>

                  <div className="space-y-3 text-sm sm:text-base text-slate-700 divide-y divide-slate-100">
                    {CLINIC_INFO.workingHours.map((h, idx) => (
                      <div key={idx} className="pt-2.5 flex items-center justify-between">
                        <span className="font-semibold text-slate-800">{h.days}</span>
                        <span className="font-extrabold text-teal-800">{h.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mental Health Crisis Notice */}
                <div className="p-7 rounded-3xl bg-amber-50 border border-amber-200 space-y-2.5">
                  <div className="flex items-center gap-2 text-amber-900 font-extrabold text-xs sm:text-sm uppercase tracking-wider">
                    <AlertTriangle className="w-5 h-5 text-amber-700" />
                    <span>Immediate Crisis Notice</span>
                  </div>
                  <p className="text-sm sm:text-base text-amber-950 leading-relaxed">
                    If you or a loved one is experiencing an immediate psychiatric emergency, active suicidal ideation, or life-threatening distress, please call <strong className="font-extrabold">988 Suicide & Crisis Lifeline</strong> or go to your nearest emergency room.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer openAppointmentModal={() => setIsAppointmentModalOpen(true)} />

      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        showVisitOptions={false}
      />

    </div>
  );
}
