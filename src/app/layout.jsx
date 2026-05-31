import './globals.css';
import RootClientShell from '../components/RootClientShell';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://landing-six-tau-72.vercel.app';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Ekavex Digital',
  url: siteUrl,
  logo: `${siteUrl}/logo1.png`,
  description: 'Ekavex builds custom websites, AI automation workflows, CRM systems, and mobile apps for startups and businesses in India. Based in Pune, Maharashtra.',
  email: 'hello@ekavex.com',
  telephone: '+91-91720-08630',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-91720-08630',
    contactType: 'customer service',
    availableLanguage: ['English', 'Hindi'],
  },
  sameAs: [],
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

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://landing-six-tau-72.vercel.app'),
  title: {
    default: 'Ekavex | Custom Web Development, AI Automation & Digital Systems',
    template: '%s | Ekavex Digital',
  },
  description: 'Ekavex builds custom websites, AI automation workflows, CRM systems, and mobile apps for startups and businesses in India. Book a free strategy call today.',
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({ children }) {
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
