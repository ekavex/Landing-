import { notFound } from 'next/navigation';
import { servicesData } from '../../../data/servicesData';
import ServiceHero from '../../../components/services/ServiceHero';
import PainPoints from '../../../components/services/PainPoints';
import HowItWorks from '../../../components/services/HowItWorks';
import Deliverables from '../../../components/services/Deliverables';
import ServiceFAQ from '../../../components/services/ServiceFAQ';
import RelatedServices from '../../../components/services/RelatedServices';
import ServiceCTA from '../../../components/services/ServiceCTA';

export async function generateStaticParams() {
  return servicesData.map((svc) => ({ slug: svc.slug }));
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const svc = servicesData.find((s) => s.slug === slug);

  if (!svc) notFound();

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: svc.title,
    description: svc.benefit,
    provider: {
      '@type': 'Organization',
      name: 'Ekavex Digital',
      url: 'https://ekavex-demo.vercel.app',
    },
    serviceType: svc.title,
    url: `https://ekavex-demo.vercel.app/services/${svc.slug}`,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: `https://ekavex-demo.vercel.app/contact`,
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServiceHero svc={svc} />

      <div className="border-t border-navy/6 mx-6 md:mx-12" />
      <PainPoints painPoints={svc.painPoints} />

      <div className="border-t border-navy/6 mx-6 md:mx-12" />
      <HowItWorks processSteps={svc.processSteps} />

      <div className="border-t border-navy/6 mx-6 md:mx-12" />
      <Deliverables
        deliverables={svc.deliverables}
        stat={svc.stat}
        caseStudy={svc.caseStudy}
      />

      <div className="border-t border-navy/6 mx-6 md:mx-12" />
      <ServiceFAQ faqs={svc.faqs} />

      <div className="border-t border-navy/6 mx-6 md:mx-12" />
      <RelatedServices relatedSlugs={svc.relatedSlugs} currentSlug={svc.slug} />

      <ServiceCTA title={svc.title} />
    </div>
  );
}
