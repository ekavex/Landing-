import './globals.css';
import RootClientShell from '../components/RootClientShell';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ekavex Digital',
  url: 'https://ekavex-demo.vercel.app',
  logo: 'https://ekavex-demo.vercel.app/logo.png',
  description: 'Ekavex Digital is an AI-first web development agency in India offering custom websites, AI automation workflows, CRM systems, and mobile app development.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-91720-08630',
    contactType: 'customer service',
    availableLanguage: ['English', 'Hindi'],
  },
  sameAs: [],
};

export const metadata = {
  metadataBase: new URL('https://ekavex-demo.vercel.app'),
  title: {
    default: 'Ekavex | Custom Web Development, AI Automation & Digital Systems',
    template: '%s | Ekavex Digital',
  },
  description: 'Ekavex builds custom websites, AI automation workflows, CRM systems, and mobile apps for startups and businesses in India. Book a free strategy call today.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="relative min-h-screen font-sans antialiased text-navy selection:bg-coral/20 selection:text-navy bg-alabaster overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <RootClientShell>{children}</RootClientShell>
      </body>
    </html>
  );
}
