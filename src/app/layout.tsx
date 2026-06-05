import './globals.css';
import React from 'react';
import { Metadata } from 'next';
import RootClientShell from '../components/RootClientShell';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ekavex.in/';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ekavex',
  alternateName: 'Ekavex Digital',
  url: 'https://www.ekavex.in',
  logo: 'https://www.ekavex.in/logo.png',
  description: 'Ekavex builds custom websites, AI automation workflows, CRM systems, and mobile apps for startups and businesses in India. Based in Pune, Maharashtra.',
  email: 'hello@ekavex.com',
  telephone: '+91-93071-09883',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-93071-09883',
    contactType: 'customer service',
    availableLanguage: ['English', 'Hindi'],
  },
  sameAs: [
    'https://www.linkedin.com/company/ekavex/',
    'https://github.com/ekavex',
    'https://www.instagram.com/ekavex_',
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where is Ekavex based?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ekavex Digital is based in Pune, Maharashtra, India. We work with clients across India and internationally.' },
    },
    {
      '@type': 'Question',
      name: 'Can AI integrate into existing systems?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We build AI automation workflows that connect to your existing tools, databases, CRMs, and APIs.' },
    },
    {
      '@type': 'Question',
      name: 'How much does a custom website cost?',
      acceptedAnswer: { '@type': 'Answer', text: 'Websites typically start from ₹35,000 depending on complexity. We provide a detailed quote after a free discovery call.' },
    },
    {
      '@type': 'Question',
      name: 'How long does a project take?',
      acceptedAnswer: { '@type': 'Answer', text: 'Websites are typically delivered in 4–8 weeks. Automation and CRM systems take 6–12 weeks depending on scope.' },
    },
    {
      '@type': 'Question',
      name: 'What happens after the project launches?',
      acceptedAnswer: { '@type': 'Answer', text: 'Every project includes 30 days of free post-launch support covering bug fixes, server tuning, and performance optimization.' },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Ekavex | Custom Web Development, AI Automation & Digital Systems',
    template: '%s | Ekavex Digital',
  },
  description: 'Ekavex builds custom websites, AI automation workflows, CRM systems, and mobile apps for startups and businesses in India. Book a free strategy call today.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
    types: {
      'application/xml': [{ url: 'sitemap.xml' }],
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="relative min-h-screen font-sans antialiased text-navy selection:bg-coral/20 selection:text-navy bg-alabaster overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <RootClientShell>{children}</RootClientShell>
      </body>
    </html>
  );
}
