'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import {
  Phone,
  Mail,
  MapPin,
  ShieldAlert,
  Heart,
  ArrowUpRight,
  Send,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Building2,
  GraduationCap
} from 'lucide-react';
import { CLINIC_INFO, SERVICES_DATA } from '../data/clinicData';
import { useLenis, scrollToElement } from './SmoothScroll';

interface FooterProps {
  setActiveTab?: (tab: string) => void;
  openAppointmentModal: () => void;
  openLegalModal?: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  openAppointmentModal,
  openLegalModal
}) => {
  const [newsletterEmail, setNewsletterEmail] = React.useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = React.useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const lenis = useLenis();

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
    }
  };

  const handleLinkClick = (id: string) => {
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
    <footer className="bg-slate-950 text-slate-300 font-sans relative overflow-hidden pt-16 pb-12 border-t border-slate-900">
      
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Emergency Notice Banner */}
        <div className="mb-12 p-5 rounded-2xl bg-teal-950/80 border border-teal-800/80 text-teal-200 text-xs sm:text-sm flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-300 flex-shrink-0 animate-pulse" />
            <span>
              <strong>Suicide & Crisis Lifeline:</strong> Call or text <strong>988</strong> anytime for 24/7 free, confidential support across Maryland.
            </span>
          </div>
          <a
            href="tel:988"
            className="px-4 py-2 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 flex-shrink-0 hover:bg-amber-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call 988 Now</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="flex items-center gap-3 group inline-block">
              <div className="h-40 sm:h-48 md:h-52 lg:h-56 rounded-2xl bg-white overflow-hidden shadow-2xl border-2 border-teal-400/40 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={CLINIC_INFO.logoUrl}
                  alt="Serenity Behavioral & Wellness Services Logo"
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed">
              Compassionate, evidence-based psychiatric evaluations, medication management, and individualized mental healthcare across Maryland led by Dr. Barbara Clement Njoku, DNP, APRN, PMHNP-BC.
            </p>

            <div className="space-y-2 text-xs text-slate-300 pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>Baltimore</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <a href={`tel:${CLINIC_INFO.phone}`} className="hover:text-teal-300 font-bold">
                  {CLINIC_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-teal-300">
                  {CLINIC_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              About & Pages
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-100">
              <li>
                <Link href="/" className="hover:text-teal-300 transition-colors text-white">
                  • Home
                </Link>
              </li>
              <li>
                <Link href="/about-company" className="hover:text-teal-300 transition-colors text-white">
                  • About the Company
                </Link>
              </li>
              <li>
                <Link href="/dr-barbara" className="hover:text-teal-300 transition-colors text-white">
                  • Dr. Barbara Clement Njoku
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-teal-300 transition-colors text-white text-left">
                  • Psychiatric Services
                </Link>
              </li>
              <li>
                <Link href="/conditions" className="hover:text-teal-300 transition-colors text-white text-left">
                  • Conditions We Treat
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-300 transition-colors text-white text-left">
                  • Contact Clinic
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Key Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Specialized Care
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-100">
              {SERVICES_DATA.slice(0, 6).map((srv) => (
                <li key={srv.id}>
                  <Link
                    href={`/services/${srv.id}`}
                    className="hover:text-teal-300 transition-colors text-white text-left line-clamp-1 block"
                  >
                    • {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Mental Wellness Insights
            </h4>
            <p className="text-xs text-slate-400">
              Subscribe to receive evidence-based mental health guidance and seasonal wellness tips from Dr. Njoku.
            </p>

            {newsletterSubscribed ? (
              <div className="p-3 bg-teal-900/60 border border-teal-700 text-teal-200 text-xs rounded-xl flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-teal-500"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Subscribe to Newsletter</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <button
              onClick={openAppointmentModal}
              className="w-full py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-teal-500 text-teal-300 font-bold text-xs transition-colors"
            >
              Book Appointment Online
            </button>
          </div>

        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Serenity Behavioral & Wellness Services LLC. All rights reserved. Maryland, USA.
          </div>

          <div className="flex items-center gap-4">
            {openLegalModal && (
              <>
                <button
                  onClick={() => openLegalModal('privacy')}
                  className="hover:text-slate-300 transition-colors"
                >
                  Privacy Policy
                </button>
                <span>•</span>
                <button
                  onClick={() => openLegalModal('terms')}
                  className="hover:text-slate-300 transition-colors"
                >
                  Terms & Conditions
                </button>
              </>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
};

