import { servicesData } from '../../../data/servicesData';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const svc = servicesData.find((s) => s.slug === slug);

  if (!svc) {
    return { title: 'Service Not Found' };
  }

  return {
    title: `${svc.title} for Businesses in India | Ekavex Digital`,
    description: svc.benefit,
    alternates: {
      canonical: `https://ekavex-demo.vercel.app/services/${svc.slug}`,
    },
    openGraph: {
      title: `${svc.title} for Businesses in India | Ekavex Digital`,
      description: svc.heroSubtext,
    },
  };
}

export default function ServiceSlugLayout({ children }) {
  return children;
}
