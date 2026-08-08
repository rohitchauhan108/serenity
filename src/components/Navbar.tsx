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
import { TREATMENT_PAGES } from '../data/treatmentPagesData';
import { useLenis, scrollToElement } from './SmoothScroll';

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
  const [treatmentDropdownOpen, setTreatmentDropdownOpen] = useState(false);
  const [mobileAboutSubmenuOpen, setMobileAboutSubmenuOpen] = useState(false);
  const [mobileServicesSubmenuOpen, setMobileServicesSubmenuOpen] = useState(false);
  const [mobileTreatmentSubmenuOpen, setMobileTreatmentSubmenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const lenis = useLenis();

  // Core services helper used by the Services menu
  const CORE_SERVICES_DATA = SERVICES_DATA;

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileAboutSubmenuOpen(false);
    setMobileServicesSubmenuOpen(false);
    setMobileTreatmentSubmenuOpen(false);
    setAboutDropdownOpen(false);
    setServicesDropdownOpen(false);
    setTreatmentDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else if (mounted) {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen, mounted]);

  const handleNavClick = (id: string, path?: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setAboutDropdownOpen(false);
    setTreatmentDropdownOpen(false);

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
    scrollToElement(lenis, id, 120);
  };

  return (
    // Header is relative so the crisis bar scrolls away with the page
    <header className="relative font-sans">
      
      {/* Top Crisis & Quick Contact Bar (Scrolls away with page) */}
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
              <span>Baltimore</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-300 bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-500/30">
              <Video className="w-3 h-3" />
              <span>Maryland Telehealth</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar (Sticks to top-0 on scroll) */}
      <nav
        className={`sticky top-0 z-[100] transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/97 backdrop-blur-xl shadow-xl border-b border-slate-200/80 py-3 sm:py-3.5' 
            : 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link 
            href="/"
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="relative h-20 sm:h-28 md:h-32 lg:h-36 overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <img 
                src={CLINIC_INFO.logoUrl} 
                alt="Serenity Behavioral & Wellness Services Logo" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
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

              {/* Submenu Dropdown Container */}
              <div className={`absolute top-full left-0 pt-2 z-50 transition-all duration-200 ${
                aboutDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0'
              }`}>
                <div className="w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3">
                  <div className="pb-2 mb-2 border-b border-slate-100 px-2 pt-1 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                      Discover Serenity
                    </span>
                    <span className="text-[10px] text-slate-500 font-medium">Baltimore</span>
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
                    <span className="text-[11px] font-bold text-teal-700">12 Yrs Exp</span>
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

              {/* Mega Dropdown Container */}
              <div className={`absolute top-full left-0 pt-2 z-50 transition-all duration-200 ${
                servicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0'
              }`}>
                <div className="w-[580px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 grid grid-cols-2 gap-3">
                  <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-800 flex items-center gap-1.5">
                      <Brain className="w-4 h-4 text-teal-600" />
                      Core Services & Programs
                    </span>
                    <span className="text-[11px] text-slate-500">Visit Our Treatment for therapy modalities</span>
                  </div>
                  {CORE_SERVICES_DATA.slice(0, 10).map((srv) => (
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

            {/* Our Treatment Mega Dropdown (Matching Services Design) */}
            <div
              className="relative group"
              onMouseEnter={() => setTreatmentDropdownOpen(true)}
              onMouseLeave={() => setTreatmentDropdownOpen(false)}
            >
              <button
                onClick={() => router.push('/our-treatment')}
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold flex items-center gap-1.5 transition-all duration-200 ${
                  pathname.includes('/our-treatment')
                    ? 'text-teal-800 bg-teal-50 shadow-xs'
                    : 'text-slate-700 hover:text-teal-700 hover:bg-slate-100/80'
                }`}
              >
                <span>Our Treatment</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 group-hover:rotate-180 ${treatmentDropdownOpen ? 'rotate-180 text-teal-700' : ''}`} />
              </button>

              <div className={`absolute top-full left-0 pt-2 z-50 transition-all duration-200 ${
                treatmentDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0'
              }`}>
                <div className="w-[580px] bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 grid grid-cols-2 gap-3">
                  <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-800 flex items-center gap-1.5">
                      <Heart className="w-4 h-4 text-teal-600" />
                      Evidence-Based Treatment Plans
                    </span>
                    <span className="text-[11px] text-slate-500">Comprehensive therapy & care options</span>
                  </div>

                  {TREATMENT_PAGES.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/our-treatment/${item.slug}`}
                      onClick={() => setTreatmentDropdownOpen(false)}
                      className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-teal-50/70 transition-colors text-left group/item"
                    >
                      <div className="p-2 rounded-lg bg-teal-100/60 text-teal-700 group-hover/item:bg-teal-600 group-hover/item:text-white transition-colors flex-shrink-0">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-800 group-hover/item:text-teal-900 leading-snug">
                          {item.title}
                        </div>
                        {(item as any).shortDesc && (
                          <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                            {(item as any).shortDesc}
                          </div>
                        )}
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

        {/* Mobile Navigation Drawer Backdrop */}
        {mobileMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 z-[9998] bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-0 z-[9999] bg-white shadow-2xl border-b border-slate-200 animate-in slide-in-from-top duration-300">
            <div className="px-4 pt-[max(env(safe-area-inset-top),12px)] pb-6 max-h-[100dvh] overflow-y-auto overscroll-contain">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="h-10 overflow-hidden">
                    <img 
                      src={CLINIC_INFO.logoUrl} 
                      alt="Serenity Logo" 
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="font-heading font-extrabold text-sm text-slate-800">Menu</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl border-2 border-slate-200 text-slate-700 hover:bg-slate-50 active:bg-slate-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col gap-1">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3.5 rounded-xl text-left font-bold text-base text-slate-900 hover:bg-slate-50 active:bg-slate-100"
                >
                  Home
                </Link>

                {/* Mobile About Submenu */}
                <div className="w-full">
                  <button
                    onClick={() => setMobileAboutSubmenuOpen(!mobileAboutSubmenuOpen)}
                    className="w-full px-4 py-3 rounded-xl text-left font-semibold text-sm text-slate-800 hover:bg-slate-50 active:bg-slate-100 flex items-center justify-between"
                  >
                    <span>About Us</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${mobileAboutSubmenuOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ease-out ${mobileAboutSubmenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="ml-4 pl-3 border-l-2 border-teal-200 my-1 space-y-1">
                      <Link
                        href="/about-company"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2.5 rounded-lg text-sm font-bold text-slate-900 hover:bg-teal-50 hover:text-teal-900 active:bg-teal-100"
                      >
                        About the Company
                        <span className="block font-normal text-xs text-slate-500 mt-0.5">Clinic overview, mission & facility</span>
                      </Link>
                      <Link
                        href="/dr-barbara"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-2.5 rounded-lg text-sm font-bold text-slate-900 hover:bg-teal-50 hover:text-teal-900 active:bg-teal-100"
                      >
                        Dr. Barbara Clement Njoku
                        <span className="block font-normal text-xs text-slate-500 mt-0.5">DNP, PMHNP-BC credentials & philosophy</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Mobile Services Submenu */}
                <div className="w-full">
                  <button
                    onClick={() => setMobileServicesSubmenuOpen(!mobileServicesSubmenuOpen)}
                    className="w-full px-4 py-3 rounded-xl text-left font-semibold text-sm text-slate-800 hover:bg-slate-50 active:bg-slate-100 flex items-center justify-between"
                  >
                    <span>Services</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${mobileServicesSubmenuOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ease-out ${mobileServicesSubmenuOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="ml-4 pl-3 border-l-2 border-teal-300 my-2 space-y-1.5">
                      <Link
                        href="/services"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-3 rounded-xl text-sm font-extrabold text-teal-900 bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200 mb-2 hover:from-teal-100 hover:to-emerald-100"
                      >
                        ✨ View All Services
                      </Link>
                      {CORE_SERVICES_DATA.map((srv) => (
                        <Link
                          key={srv.id}
                          href={`/services/${srv.id}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-3 rounded-xl text-sm font-bold text-slate-900 hover:bg-teal-50 active:bg-teal-100 border border-transparent hover:border-teal-100"
                        >
                          <div className="font-bold text-slate-900 leading-tight">{srv.title}</div>
                          <div className="font-normal text-xs text-slate-500 mt-1 line-clamp-2 leading-snug">{srv.shortDesc}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile Our Treatment Submenu */}
                <div className="w-full">
                  <button
                    onClick={() => setMobileTreatmentSubmenuOpen(!mobileTreatmentSubmenuOpen)}
                    className="w-full px-4 py-3 rounded-xl text-left font-semibold text-sm text-slate-800 hover:bg-slate-50 active:bg-slate-100 flex items-center justify-between"
                  >
                    <span>Our Treatment</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${mobileTreatmentSubmenuOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ease-out ${mobileTreatmentSubmenuOpen ? 'max-h-[8000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="ml-4 pl-3 border-l-2 border-teal-300 my-2 space-y-1.5">
                      <Link
                        href="/our-treatment"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block px-3 py-3 rounded-xl text-sm font-extrabold text-teal-900 bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200 mb-2 hover:from-teal-100 hover:to-emerald-100"
                      >
                        ✨ View All Treatments
                      </Link>
                      {TREATMENT_PAGES.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/our-treatment/${item.slug}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-3 rounded-xl text-sm font-bold text-slate-900 hover:bg-teal-50 active:bg-teal-100 border border-transparent hover:border-teal-100"
                        >
                          <div className="font-bold text-slate-900 leading-tight">{item.title}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  href="/conditions"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-left font-semibold text-sm text-slate-800 hover:bg-slate-50 active:bg-slate-100"
                >
                  Conditions We Treat
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-left font-semibold text-sm text-slate-800 hover:bg-slate-50 active:bg-slate-100"
                >
                  Contact Us
                </Link>

                <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl border-2 border-teal-200 text-teal-800 font-bold text-sm bg-teal-50 hover:bg-teal-100 active:bg-teal-150"
                  >
                    <Phone className="w-4 h-4 text-teal-600" />
                    <span>Call {CLINIC_INFO.phone}</span>
                  </a>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setTimeout(() => openAppointmentModal(), 100);
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-bold text-sm gradient-teal-blue shadow-lg hover:shadow-xl active:scale-[0.98] transition-transform"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Consultation</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};