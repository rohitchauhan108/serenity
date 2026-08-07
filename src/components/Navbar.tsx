'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import {
  Phone,
  Calendar,
  Menu,
  X,
  ChevronDown,
  ShieldAlert,
  Clock,
  Sparkles,
  MapPin,
  Heart,
  Search,
  CheckCircle2,
  Brain,
  Video,
  Building2,
  UserCheck,
  Award,
  Shield,
  GraduationCap
} from 'lucide-react';
import { CLINIC_INFO, SERVICES_DATA } from '../data/clinicData';

interface NavbarProps {
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
  openAppointmentModal: (serviceName?: string) => void;
  setSelectedServiceId?: (id: string | null) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  openAppointmentModal,
  setSelectedServiceId
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileAboutSubmenuOpen, setMobileAboutSubmenuOpen] = useState(false);
  const [mobileServicesSubmenuOpen, setMobileServicesSubmenuOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileAboutSubmenuOpen(false);
    setMobileServicesSubmenuOpen(false);
  }, [pathname]);

  const handleNavClick = (id: string, path?: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setAboutDropdownOpen(false);

    if (path) {
      router.push(path);
      return;
    }

    if (pathname !== '/') {
      router.push(`/#${id}`);
      return;
    }

    if (setActiveTab) {
      setActiveTab(id);
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 font-sans">
      {/* Top Crisis & Quick Contact Bar */}
      <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-slate-900 text-white text-xs sm:text-sm py-2 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-teal-100 text-center md:text-left">
            <ShieldAlert className="w-4 h-4 text-amber-300 animate-pulse flex-shrink-0" />
            <span className="font-medium">
              Immediate Crisis? <strong className="text-amber-200">Call or Text 988</strong> for Suicide & Crisis Lifeline (24/7 Free & Confidential)
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-slate-200 text-xs">
            <a href={`tel:${CLINIC_INFO.phone}`} className="flex items-center gap-1.5 hover:text-teal-200 transition-colors">
              <Phone className="w-3.5 h-3.5 text-teal-300" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-teal-300" />
              <span>Columbia, Maryland</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-300 bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-500/30">
              <Video className="w-3 h-3" />
              <span>Telehealth & In-Person</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200/80 py-3' 
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link 
            href="/"
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="relative h-16 sm:h-24 overflow-hidden group-hover:scale-110 transition-transform duration-300">
              <img 
                src={CLINIC_INFO.logoUrl} 
                alt="Serenity Behavioral & Wellness Services Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 xl:gap-2">
            
            {/* Home Link */}
            <Link
              href="/"
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                pathname === '/' && activeTab === 'home'
                  ? 'text-teal-800 bg-teal-50'
                  : 'text-slate-700 hover:text-teal-700 hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            {/* About Us with Submenu Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                onClick={() => router.push('/about-company')}
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold flex items-center gap-1.5 transition-all duration-200 ${
                  pathname.includes('/about-company') || pathname.includes('/dr-barbara') || activeTab === 'about'
                    ? 'text-teal-800 bg-teal-50 shadow-xs'
                    : 'text-slate-700 hover:text-teal-700 hover:bg-slate-100/80'
                }`}
              >
                <span>About Us</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 group-hover:rotate-180 ${aboutDropdownOpen ? 'rotate-180 text-teal-700' : ''}`} />
              </button>

              {/* Submenu Dropdown Container with hover bridge */}
              <div className={`absolute top-full left-0 pt-2 z-50 transition-all duration-200 ${
                aboutDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0'
              }`}>
                <div className="w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3">
                  <div className="pb-2 mb-2 border-b border-slate-100 px-2 pt-1 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                      Discover Serenity
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">Columbia, MD</span>
                  </div>

                  <Link
                    href="/about-company"
                    onClick={() => setAboutDropdownOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-teal-50/80 transition-all group/item text-left"
                  >
                    <div className="p-2.5 rounded-xl bg-teal-100/70 text-teal-700 group-hover/item:bg-teal-600 group-hover/item:text-white transition-colors flex-shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover/item:text-teal-900 flex items-center gap-1">
                        <span>About the Company</span>
                        <span className="text-[10px] bg-teal-100 text-teal-800 px-1.5 py-0.5 rounded-full font-semibold">Clinic</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                        Our mission, clinical facility, patient privacy standards & holistic care values.
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/dr-barbara"
                    onClick={() => setAboutDropdownOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-teal-50/80 transition-all group/item text-left mt-1"
                  >
                    <div className="p-2.5 rounded-xl bg-teal-100/70 text-teal-700 group-hover/item:bg-teal-600 group-hover/item:text-white transition-colors flex-shrink-0">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover/item:text-teal-900 flex items-center gap-1">
                        <span>Dr. Barbara Clement Njoku</span>
                        <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded-full font-semibold">DNP</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                        Board-certified practitioner, academic background, credentials & treatment philosophy.
                      </p>
                    </div>
                  </Link>

                  <div className="mt-2 pt-2 border-t border-slate-100 bg-slate-50 p-2.5 rounded-xl flex items-center justify-between text-xs text-slate-600">
                    <span className="flex items-center gap-1 font-medium text-[11px]">
                      <Shield className="w-3.5 h-3.5 text-teal-600" />
                      ANCC Board Certified
                    </span>
                    <span className="text-[11px] font-bold text-teal-700">12+ Yrs Exp</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Link with Mega Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => router.push('/services')}
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold flex items-center gap-1.5 transition-all duration-200 ${
                  pathname.includes('/services') || activeTab === 'services'
                    ? 'text-teal-800 bg-teal-50 shadow-xs'
                    : 'text-slate-700 hover:text-teal-700 hover:bg-slate-100/80'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 group-hover:rotate-180 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Dropdown with Hover Bridge */}
              <div className={`absolute top-full left-0 pt-2 z-50 transition-all duration-200 ${
                servicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0'
              }`}>
                <div className="w-[580px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 grid grid-cols-2 gap-3">
                  <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-800 flex items-center gap-1.5">
                      <Brain className="w-4 h-4 text-teal-600" />
                      Comprehensive Psychiatric Services
                    </span>
                    <span className="text-[11px] text-slate-500">Board-Certified Care in MD</span>
                  </div>
                  {SERVICES_DATA.slice(0, 8).map((srv) => (
                    <Link
                      key={srv.id}
                      href={`/services/${srv.id}`}
                      onClick={() => setServicesDropdownOpen(false)}
                      className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-teal-50/70 transition-colors text-left group/item"
                    >
                      <div className="p-2 rounded-lg bg-teal-100/60 text-teal-700 group-hover/item:bg-teal-600 group-hover/item:text-white transition-colors flex-shrink-0">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800 group-hover/item:text-teal-900">
                          {srv.title}
                        </div>
                        <div className="text-[11px] text-slate-500 line-clamp-1">
                          {srv.shortDesc}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Conditions We Treat */}
            <Link
              href="/conditions"
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                pathname.includes('/conditions')
                  ? 'text-teal-800 bg-teal-50 shadow-xs'
                  : 'text-slate-700 hover:text-teal-700 hover:bg-slate-100/80'
              }`}
            >
              Conditions
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all ${
                pathname.includes('/contact')
                  ? 'text-teal-800 bg-teal-50 shadow-xs'
                  : 'text-slate-700 hover:text-teal-700 hover:bg-slate-100/80'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href={`tel:${CLINIC_INFO.phone}`}
              className="p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-teal-50 hover:border-teal-200 hover:text-teal-700 transition-colors"
              title="Call Clinic"
            >
              <Phone className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white gradient-teal-blue shadow-md hover:shadow-lg hover:opacity-95 transform hover:-translate-y-0.5 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/contact"
              className="px-3 py-1.5 text-xs font-bold text-white gradient-teal-blue rounded-lg shadow-sm"
            >
              Book
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200 max-h-[calc(100vh-6rem)] overflow-y-auto">
            <div className="flex flex-col gap-1">
              
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-left font-semibold text-sm text-slate-700 hover:bg-slate-50"
              >
                Home
              </Link>

              {/* Mobile About Submenu Expandable */}
              <div>
                <button
                  onClick={() => setMobileAboutSubmenuOpen(!mobileAboutSubmenuOpen)}
                  className="w-full px-4 py-3 rounded-xl text-left font-semibold text-sm text-slate-800 hover:bg-slate-50 flex items-center justify-between"
                >
                  <span>About Us</span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${mobileAboutSubmenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileAboutSubmenuOpen && (
                  <div className="ml-4 pl-3 border-l-2 border-teal-200 my-1 space-y-1">
                    <Link
                      href="/about-company"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2.5 rounded-lg text-xs font-bold text-slate-800 hover:bg-teal-50 hover:text-teal-900"
                    >
                      🏢 About the Company
                      <span className="block font-normal text-[11px] text-slate-500 mt-0.5">Clinic overview, mission & facility</span>
                    </Link>
                    <Link
                      href="/dr-barbara"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2.5 rounded-lg text-xs font-bold text-slate-800 hover:bg-teal-50 hover:text-teal-900"
                    >
                      👩‍⚕️ Dr. Barbara Clement Njoku
                      <span className="block font-normal text-[11px] text-slate-500 mt-0.5">DNP, PMHNP-BC credentials & philosophy</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Services Submenu Expandable */}
              <div>
                <button
                  onClick={() => setMobileServicesSubmenuOpen(!mobileServicesSubmenuOpen)}
                  className="w-full px-4 py-3 rounded-xl text-left font-semibold text-sm text-slate-800 hover:bg-slate-50 flex items-center justify-between"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${mobileServicesSubmenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileServicesSubmenuOpen && (
                  <div className="ml-4 pl-3 border-l-2 border-teal-200 my-1 space-y-1">
                    <Link
                      href="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 rounded-lg text-xs font-bold text-teal-800 hover:bg-teal-50 bg-teal-50/50 mb-1"
                    >
                      ✨ All Services Overview
                    </Link>
                    {SERVICES_DATA.map((srv) => (
                      <Link
                        key={srv.id}
                        href={`/services/${srv.id}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2.5 rounded-lg text-xs font-bold text-slate-800 hover:bg-teal-50 hover:text-teal-900"
                      >
                        {srv.title}
                        <span className="block font-normal text-[11px] text-slate-500 mt-0.5 line-clamp-1">{srv.shortDesc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/conditions"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-left font-semibold text-sm text-slate-700 hover:bg-slate-50"
              >
                Conditions We Treat
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-left font-semibold text-sm text-slate-700 hover:bg-slate-50"
              >
                Contact Us
              </Link>

              <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-teal-200 text-teal-800 font-bold text-sm bg-teal-50/50"
                >
                  <Phone className="w-4 h-4 text-teal-600" />
                  <span>Call {CLINIC_INFO.phone}</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openAppointmentModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-white font-bold text-sm gradient-teal-blue shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};