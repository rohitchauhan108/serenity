'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { AboutSerenity } from '../components/AboutSerenity';
import { MeetDoctor } from '../components/MeetDoctor';
import { ConditionsSection } from '../components/ConditionsSection';
import { TreatmentProcess } from '../components/TreatmentProcess';
import { BreathingWidget } from '../components/BreathingWidget';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FaqSection } from '../components/FaqSection';
import { InformativeCta } from '../components/InformativeCta';
import { Footer } from '../components/Footer';
import { AppointmentModal } from '../components/AppointmentModal';
import { LegalModal, SelfCheckModal } from '../components/AdditionalPages';
import { useLenis, scrollToElement } from '../components/SmoothScroll';
import InsuranceSection from '@/components/InsuranceSection';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [appointmentPresetService, setAppointmentPresetService] = useState('');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [isSelfCheckOpen, setIsSelfCheckOpen] = useState(false);

  const lenis = useLenis();

  const openAppointmentModal = (serviceName?: string) => {
    if (serviceName) {
      setAppointmentPresetService(serviceName);
    } else {
      setAppointmentPresetService('');
    }
    setIsAppointmentModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    scrollToElement(lenis, id, 120);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-teal-500/20 selection:text-teal-900">
      
      {/* Navbar Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openAppointmentModal={openAppointmentModal}
        setSelectedServiceId={setSelectedServiceId}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          openAppointmentModal={() => openAppointmentModal()}
          scrollToSection={scrollToSection}
          openSelfCheckModal={() => setIsSelfCheckOpen(true)}
        />

        {/* About Serenity */}
        <AboutSerenity />

        <InsuranceSection/>
        

        {/* Meet Doctor: Dr. Barbara Clement Njoku */}
        <MeetDoctor openAppointmentModal={() => openAppointmentModal()} />

        {/* Our Services
        <ServicesSection
          openAppointmentModal={openAppointmentModal}
          selectedServiceId={selectedServiceId}
          setSelectedServiceId={setSelectedServiceId}
        /> */}

        {/* Conditions We Treat */}
        <ConditionsSection openAppointmentModal={openAppointmentModal} />

        {/* Interactive Breathing & Wellness Widget */}
        <BreathingWidget />


         <InformativeCta
          openAppointmentModal={() => openAppointmentModal()}
          openSelfCheckModal={() => setIsSelfCheckOpen(true)}
        />

        {/* Frequently Asked Questions */}
        <FaqSection />

        <TestimonialsSection />

        {/* Contact & Appointment Section */}
        {/* <ContactSection initialServiceName={appointmentPresetService} /> */}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        openAppointmentModal={() => openAppointmentModal()}
        openLegalModal={(type) => setLegalModalType(type)}
      />

      {/* Universal Appointment Modal */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        presetServiceTitle={appointmentPresetService}
      />

      {/* Legal Privacy & Terms Modal */}
      <LegalModal
        isOpen={!!legalModalType}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Mental Health Self Check Modal */}
      <SelfCheckModal
        isOpen={isSelfCheckOpen}
        onClose={() => setIsSelfCheckOpen(false)}
        openAppointmentModal={() => openAppointmentModal()}
      />

    </div>
  );
}
