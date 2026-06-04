import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Ekavex | Custom Web Development, AI Automation & Digital Systems',
  description: 'Ekavex builds custom websites, AI automation workflows, CRM systems, and mobile apps for startups and businesses in India. Book a free strategy call today.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return <HomeClient />;
}
