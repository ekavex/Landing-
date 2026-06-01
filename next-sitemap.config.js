/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: process.env.SITE_URL || 'https://www.ekavex.in',
  generateRobotsTxt: false,
  sitemapSize: 7000,
  exclude: ['/api/*'],

  // Per-route priority and changefreq
  transform: async (config, path) => {
    // Homepage
    if (path === '/') {
      return { loc: path, changefreq: 'weekly', priority: 1.0, lastmod: new Date().toISOString() };
    }

    // Individual service pages - high priority, slow to change
    if (path.startsWith('/services/') && path !== '/services') {
      return { loc: path, changefreq: 'monthly', priority: 0.9, lastmod: new Date().toISOString() };
    }

    // Services listing
    if (path === '/services') {
      return { loc: path, changefreq: 'monthly', priority: 0.85, lastmod: new Date().toISOString() };
    }

    // Blog posts
    if (path.startsWith('/blog/') && !path.startsWith('/blog/author/')) {
      return { loc: path, changefreq: 'monthly', priority: 0.75, lastmod: new Date().toISOString() };
    }

    // Author pages
    if (path.startsWith('/blog/author/')) {
      return { loc: path, changefreq: 'monthly', priority: 0.5, lastmod: new Date().toISOString() };
    }

    // Blog listing
    if (path === '/blog') {
      return { loc: path, changefreq: 'weekly', priority: 0.8, lastmod: new Date().toISOString() };
    }

    // Core pages
    if (['/about', '/contact', '/portfolio'].includes(path)) {
      return { loc: path, changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() };
    }

    // Privacy policy and misc
    return { loc: path, changefreq: 'yearly', priority: 0.4, lastmod: new Date().toISOString() };
  },
};
