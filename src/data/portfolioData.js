export const portfolioHeader = {
  subtitle: 'Case Studies',
  title: 'Delivered Digital Systems'
};

export const portfolioFilters = ['All', 'AI Systems', 'SaaS Platforms', 'Fintech'];

export const portfolioData = [
  {
    id: 'sql-bot',
    title: 'AI SQL Chatbot Assistant',
    category: 'AI Systems',
    timeline: '8 Weeks',
    metric: '70% Query Time Reduction',
    desc: 'Smart natural language interface that converts conversational queries into secure, optimal SQL in real-time.',
    challenge: 'Users without database knowledge struggled to fetch analytics, overloading internal engineering cells with simple querying tasks.',
    strategy: 'Engineered an intelligent semantic router utilizing custom prompt schemas, vector stores, and rigorous SQL injection shields.',
    results: ['Over 70% faster data query extraction rates', 'Zero security leaks since execution start', 'Reduced data analytics team support tickets by 85%'],
    tech: ['React', 'Next.js', 'OpenAI API', 'PgVector', 'NodeJS'],
  },
  {
    id: 'agentic-saas',
    title: 'Agentic AI SaaS Platform',
    category: 'SaaS Platforms',
    timeline: '12 Weeks',
    metric: '95% Task Automation Rate',
    desc: 'Next-generation SaaS platform hosting autonomous multi-agent pipelines that coordinate business data tasks.',
    challenge: 'Manual pipeline management across fragmented APIs led to inconsistent datasets and slow process execution times.',
    strategy: 'Built an asynchronous task runner, custom visual node canvas, and localized state syncing using Framer Motion and Node hooks.',
    results: ['Automated 95% of manual operational data pipelines', 'Processed over 1M records within the first month', 'Accelerated execution throughput by 3.5x'],
    tech: ['React', 'Framer Motion', 'WebSockets', 'n8n Core', 'Redis'],
  },
  {
    id: 'fintech-fund',
    title: 'Fintech Mutual Fund Suite',
    category: 'Fintech',
    timeline: '10 Weeks',
    metric: '₹2.4Cr+ Transactions Secured',
    desc: 'High-security financial investment management suite equipped with banking integrations and portfolio trackers.',
    challenge: 'Legacy mutual fund portals suffered from slow dashboard rendering speeds and outdated API integration vulnerabilities.',
    strategy: 'Constructed an ultra-fast dashboard dashboard using lightweight Tailwind grids, bank-grade OAuth, and real-time graphs.',
    results: ['Bypassed banking latency to load dashboard in under 400ms', 'Successfully processed over ₹2.4Cr worth of portfolio assets', 'Grade-A security compliance rating'],
    tech: ['React', 'Tailwind CSS', 'OAuth 2.1', 'Recharts', 'Fastify'],
  },
  {
    id: 'warehouse-ai',
    title: 'AI Warehouse Monitoring',
    category: 'AI Systems',
    timeline: '14 Weeks',
    metric: '99.4% Inventory Precision',
    desc: 'Real-time WebGL inventory logistics and video monitoring platform integrated with machine learning filters.',
    challenge: 'Manual inventory counts in massive logistics centers led to regular shortages, stockouts, and shipping lags.',
    strategy: 'Integrated live web stream decoders, customized custom YOLO object detectors, and responsive grid layouts.',
    results: ['Boosted inventory verification speed by 900%', 'Maintained inventory count precision rate of 99.4%', 'Completely prevented stockout lags'],
    tech: ['React', 'YOLO Core', 'WebRTC', 'Three.js', 'Tailwind CSS'],
  },
];
