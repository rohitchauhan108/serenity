import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Serenity Behavioral & Wellness Services | Dr. Barbara Clement Njoku, DNP',
  description: 'Compassionate, evidence-based psychiatric evaluations, medication management, and mental health care across Maryland by Dr. Barbara Clement Njoku, DNP, APRN, PMHNP-BC.',
  keywords: ['psychiatrist Maryland', 'PMHNP Columbia MD', 'medication management Maryland', 'telehealth psychiatry MD', 'ADHD evaluation Maryland', 'depression treatment Columbia'],
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon.png', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-teal-500/20 selection:text-teal-900">
        {children}
      </body>
    </html>
  );
}
