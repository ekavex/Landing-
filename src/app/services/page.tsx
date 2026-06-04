import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Web Development, AI Automation & CRM Services | Ekavex',
  description: "Explore Ekavex's full range of services: custom websites, AI automation, CRM/CMS systems, mobile apps, SaaS development, and digital marketing for businesses in India.",
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
