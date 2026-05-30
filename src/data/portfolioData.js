export const portfolioHeader = {
  subtitle: 'Case Studies',
  title: 'Real Projects. Real Results. — Case Studies by Ekavex'
};

export const portfolioFilters = ['All', 'Web Service', 'Automation Service', 'App Services'];

export const portfolioData = [
  {
    id: 'real-estate',
    title: 'Real Estate Property Listing Platform',
    category: 'Web Service',
    timeline: '8 Weeks',
    metric: '3x Faster Property Discovery',
    desc: 'A structured property listing platform where users can list, browse, buy, and sell properties with location-based information and a user-friendly marketplace experience.',
    challenge: 'Property data was scattered, difficult to browse, and hard for buyers and sellers to manage digitally. The business needed a clean platform to handle large volumes of property listings.',
    strategy: 'Built a full property marketplace with listing management, location-based browsing, buy/sell workflows, and an admin panel to manage large property data efficiently.',
    results: [
      'Simplified property discovery for buyers and sellers',
      'Handles large property data with fast search and filtering',
      'User-friendly marketplace experience for all skill levels'
    ],
    features: ['Property Listing System', 'Buy & Sell Flows', 'Location-Based Browsing', 'Admin Dashboard', 'Large Data Handling'],
    tech: ['Next.js', 'React', 'PostgreSQL', 'Node.js', 'Tailwind CSS'],
    imageUrl: '/portfolio/real-estate.jpg',
    projectUrl: 'https://realestate.ekavex.com'
  },
  {
    id: 'academic-mcq',
    title: 'Academic MCQ & Test Management Platform',
    category: 'App Services',
    timeline: '10 Weeks',
    metric: '500+ Students, Zero Paper',
    desc: 'An end-to-end academic platform for MCQ creation, class-wise test management, student access, timed assessments, and image-to-MCQ support.',
    challenge: 'Institutions needed a faster, digital way to create, manage, and conduct MCQ-based tests online without manual paper-based processes.',
    strategy: 'Developed a complete test management system with MCQ creation tools, class-wise controls, timed test engine, student portal, and a full admin dashboard.',
    results: [
      'Reduced manual exam preparation time significantly',
      'Institutions can manage all assessments from one dashboard',
      'Students access tests digitally with automated grading'
    ],
    features: ['MCQ Creation & Management', 'Image-to-MCQ Support', 'Class-Wise Controls', 'Timed Test System', 'Student Access Portal'],
    tech: ['Node.js', 'PostgreSQL', 'Next.js', 'Cloudinary'],
    imageUrl: '/portfolio/academic-mcq.jpg',
    projectUrl: 'https://mcq.ekavex.com'
  },
  {
    id: 'nl-to-sql',
    title: 'Natural Language to SQL Automation',
    category: 'Automation Service',
    timeline: '6 Weeks',
    metric: '70% Faster Data Access',
    desc: 'A system where non-technical users ask questions in plain English and automatically get SQL queries generated to fetch the right data from the database.',
    challenge: 'Non-technical users could not access database information without writing SQL or depending on developers, creating bottlenecks and delays.',
    strategy: 'Built a natural language interface powered by OpenAI that converts plain English questions into optimized SQL queries and fetches results directly from the database.',
    results: [
      'Non-technical users now access data independently',
      'Reduced developer dependency for data queries by 70%',
      'Business teams get faster insights without SQL knowledge'
    ],
    features: ['Natural Language Input', 'SQL Query Generation', 'Database Integration', 'Simple UI', 'No SQL Knowledge Needed'],
    tech: ['Python', 'OpenAI API', 'PostgreSQL', 'React', 'FastAPI'],
    imageUrl: '/portfolio/nl-to-sql.jpg',
    projectUrl: 'https://sql.ekavex.com'
  },
  {
    id: 'cafeteria-ordering',
    title: 'Cafeteria QR & WhatsApp Ordering System',
    category: 'Automation Service',
    timeline: '5 Weeks',
    metric: 'Orders Processed 3x Faster',
    desc: 'A QR-based and WhatsApp-supported ordering system that allows customers to browse a digital menu and place orders faster without manual order taking.',
    challenge: 'Manual order taking was slow, error-prone, and inefficient during busy hours, leading to customer frustration and staff overload.',
    strategy: 'Created a QR-triggered digital menu with WhatsApp ordering integration, allowing customers to order from their phone while the kitchen receives orders automatically.',
    results: [
      'Improved order accuracy and reduced errors',
      'Faster customer experience during peak hours',
      'Reduced staff workload on order taking'
    ],
    features: ['QR-Based Ordering', 'WhatsApp Automation', 'Digital Menu', 'Order Management', 'Kitchen Notifications'],
    tech: ['React', 'Node.js', 'WhatsApp Business API', 'PostgreSQL'],
    imageUrl: '/portfolio/cafeteria-ordering.jpg',
    projectUrl: 'https://ordering.ekavex.com'
  },
  {
    id: 'clinic-management',
    title: 'Clinic Appointment & Management System',
    category: 'Web Service',
    timeline: '9 Weeks',
    metric: '80% Reduction in Manual Admin',
    desc: 'A complete clinic management system with appointment booking, patient records, CMS, CRM, and admin dashboard, all in one place.',
    challenge: 'The clinic needed a centralized system to manage appointments, patient records, website content, and customer relationships without relying on manual processes.',
    strategy: 'Built a clinic website with online appointment booking, patient management, content management, CRM, and a full admin dashboard for clinic staff.',
    results: [
      'Reduced manual appointment handling significantly',
      'Professional digital workflow for clinic staff',
      'Centralized patient records and CRM in one system'
    ],
    features: ['Appointment Booking', 'Patient Management', 'CMS System', 'CRM Dashboard', 'Admin Panel'],
    tech: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    imageUrl: '/portfolio/clinic-management.jpg',
    projectUrl: 'https://clinic.ekavex.com'
  }
];
