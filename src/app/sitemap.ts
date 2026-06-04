import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ekavex.in';
  const currentDate = new Date();

  // Core Pages
  const corePages = [
    { url: `${baseUrl}`, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/portfolio`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services`, changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${baseUrl}/privacy-policy`, changeFrequency: 'yearly' as const, priority: 0.4 },
  ];

  // Service Sub-pages (Priority: 0.9, Frequency: monthly)
  const servicePages = [
    '/services/ai-ml-solutions',
    '/services/business-automation',
    '/services/cms-crm-solutions',
    '/services/custom-website-development',
    '/services/digital-marketing-ads',
    '/services/mobile-app-development',
    '/services/natural-language-to-sql',
    '/services/web-app-saas-development',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Blog Main Page (Priority: 0.8, Frequency: weekly)
  const blogMainPage = [
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly' as const, priority: 0.8 }
  ];

  // Blog Author Pages (Priority: 0.5, Frequency: monthly)
  const authorPages = [
    '/blog/author/kalash-baldota',
    '/blog/author/rohit-huge',
    '/blog/author/shreya-patil',
    '/blog/author/yadnyesh-borole',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  // Blog Post Pages (Priority: 0.75, Frequency: monthly)
  const blogPosts = [
    '/blog/build-mvp-india-cost-timeline',
    '/blog/clean-ui-design-principles-business',
    '/blog/clinic-appointment-system-india',
    '/blog/custom-crm-vs-salesforce-india',
    '/blog/custom-website-cost-india-2026',
    '/blog/how-ai-automation-transforms-business',
    '/blog/n8n-vs-zapier-vs-make-india',
    '/blog/qr-whatsapp-ordering-system-cafeteria',
    '/blog/whatsapp-automation-business-india',
    '/blog/why-nextjs-best-choice-business-2026',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  const allRoutes = [
    ...corePages,
    ...servicePages,
    ...blogMainPage,
    ...authorPages,
    ...blogPosts,
  ];

  return allRoutes.map(route => ({
    ...route,
    lastModified: currentDate,
  }));
}
