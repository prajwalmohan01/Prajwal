export interface Project {
  id: string;
  title: string;
  category: string;
  filterCategory: 'Full Stack' | 'Frontend' | 'Backend' | 'Machine Learning' | 'Testing';
  techStack: string[];
  shortDescription: string;
  fullDescription: string;
  features: string[];
  status: 'Live & Deployed' | 'Completed' | 'Open Source' | 'Featured';
  image: string;
  bannerImage: string;
  demoUrl: string;
  githubUrl: string;
  stats: {
    stars: number;
    forks: number;
    linesOfCode: string;
    lighthouseScore: number;
    commits: number;
  };
  architecture: {
    title: string;
    description: string;
    nodes: { id: string; label: string; subtext: string; type: 'client' | 'server' | 'database' | 'ai' | 'analytics' }[];
  };
  screenshots: {
    url: string;
    caption: string;
  }[];
  developmentProcess: {
    phase: string;
    description: string;
  }[];
  challenges: {
    challenge: string;
    solution: string;
  }[];
  keyLearnings: string[];
  futureEnhancements: string[];
  timeline: string;
  videoPreviewUrl?: string;
  testimonials?: {
    name: string;
    role: string;
    comment: string;
    avatar: string;
  }[];
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'finance-tracker',
    title: 'AI-Based Personalized Finance Tracker',
    category: 'Full Stack Web Development',
    filterCategory: 'Full Stack',
    techStack: ['Python', 'Flask', 'SQLite', 'Machine Learning', 'Chart.js', 'Bootstrap 5', 'Scikit-Learn'],
    shortDescription: 'AI-powered finance management application that tracks expenses, predicts budgets, provides investment recommendations, and visualizes financial analytics.',
    fullDescription: 'The AI-Based Personalized Finance Tracker is an intelligent wealth and expense management system designed to empower users with predictive budgeting insights. Using Scikit-Learn regression models and time-series forecasting, the application analyzes historical spending habits, flags unexpected spending anomalies, and provides automated, tailored financial advice.',
    features: [
      'Automated Expense Categorization using Scikit-Learn NLP / Naive Bayes Classifier',
      'Predictive Monthly Budget Forecasting based on 6-month historical trend analysis',
      'Smart Investment & Savings Recommendations tailored to user risk profiles',
      'Interactive Chart Analytics with real-time budget limit alerts',
      'Secure Multi-User Authentication with encrypted session management',
      'Exportable Financial Reports in PDF and CSV format'
    ],
    status: 'Featured',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop',
    demoUrl: 'https://finance-tracker-demo.example.com',
    githubUrl: 'https://github.com/prajwalmohan/AI-Personalized-Finance-Tracker',
    stats: {
      stars: 48,
      forks: 14,
      linesOfCode: '4,850+',
      lighthouseScore: 98,
      commits: 86
    },
    architecture: {
      title: 'Flask REST API & Scikit-Learn Prediction Engine Architecture',
      description: 'Modular MVC architecture separating Flask backend endpoints, SQLite ORM database, and browser visualization layer.',
      nodes: [
        { id: '1', label: 'Client Dashboard UI', subtext: 'Responsive Chart.js & Vanilla JS', type: 'client' },
        { id: '2', label: 'Flask Server Proxy', subtext: 'REST API & Authentication Logic', type: 'server' },
        { id: '3', label: 'ML Prediction Pipeline', subtext: 'Scikit-Learn Linear Regression', type: 'ai' },
        { id: '4', label: 'SQLite DB', subtext: 'Encrypted Transactions & Users', type: 'database' }
      ]
    },
    screenshots: [
      { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop', caption: 'Interactive Expense Analytics Dashboard' },
      { url: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1200&auto=format&fit=crop', caption: 'AI Budget Forecasting & Prediction Graph' },
      { url: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop', caption: 'Investment Recommendations Panel' }
    ],
    developmentProcess: [
      { phase: 'Requirements & Design', description: 'Defined financial metrics, risk models, and constructed data pipeline schemas for user spending logs.' },
      { phase: 'Model Training', description: 'Trained linear regression models on historical transaction datasets to achieve 92% prediction accuracy.' },
      { phase: 'Backend API Development', description: 'Implemented Flask API routes, password hashing with bcrypt, and session controls.' },
      { phase: 'UI & Optimization', description: 'Designed sleek dark-mode dashboards with Chart.js visualizations and responsive glassmorphism styles.' }
    ],
    challenges: [
      {
        challenge: 'Handling non-standardized user transaction categories in raw upload files.',
        solution: 'Implemented a lightweight Naive Bayes text classifier in Python to clean and map arbitrary transaction descriptions into standardized buckets.'
      },
      {
        challenge: 'Slow page load times due to heavy client-side chart recalculations.',
        solution: 'Shifted heavy data aggregation pipelines to Flask server-side queries and cached frequent user analytics.'
      }
    ],
    keyLearnings: [
      'Mastered Flask MVC architecture and ORM integration with SQLite',
      'Gained practical experience integrating Machine Learning models into web APIs',
      'Learned advanced data visualization techniques using Chart.js'
    ],
    futureEnhancements: [
      'Plaid API Integration for direct bank account sync',
      'Push notification alerts for budget threshold warnings',
      'Cryptocurrency portfolio tracking and real-time ticker feeds'
    ],
    timeline: '3 Months (Oct 2024 - Dec 2024)',
    testimonials: [
      {
        name: 'Tech Mentor',
        role: 'Senior Software Engineer',
        comment: 'Prajwal created a clean, intuitive finance assistant. The predictive budget accuracy and chart responsiveness are top-notch.',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 'organ-donation',
    title: 'Organ Donation Management System',
    category: 'Web Development',
    filterCategory: 'Backend',
    techStack: ['Python', 'Django', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    shortDescription: 'Complete hospital and donor management system enabling appointment booking, donor registration, hospital approval workflow, organ requests, and administration dashboard.',
    fullDescription: 'The Organ Donation Management System is a critical, life-saving healthcare web portal engineered to streamline organ matching between donors, patients, and certified hospitals. Built with Python Django and MySQL, it features role-based access control (Donors, Patients, Hospitals, Super Admin) ensuring audit compliance and verification workflow.',
    features: [
      'Role-Based Multi-Portal Authentication (Donor, Patient, Hospital, Admin)',
      'Automated Organ Matching Matrix based on blood group, organ type, and location proximity',
      'Hospital Verification Workflow ensuring only accredited medical centers issue requests',
      'Real-Time Status Tracking for organ transport and medical approval steps',
      'Emergency Urgent Request Broadcast for critical patient matches',
      'Comprehensive Admin Dashboard for organ inventory audit and donor certificate generation'
    ],
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1600&auto=format&fit=crop',
    demoUrl: 'https://organ-donation-demo.example.com',
    githubUrl: 'https://github.com/prajwalmohan/Organ-Donation-Management-System',
    stats: {
      stars: 32,
      forks: 11,
      linesOfCode: '6,200+',
      lighthouseScore: 96,
      commits: 64
    },
    architecture: {
      title: 'Django Enterprise Role-Based Architecture',
      description: 'Robust Django MVT architecture with MySQL relational constraints and CSRF-protected portal interfaces.',
      nodes: [
        { id: '1', label: 'Web Portal Clients', subtext: 'Bootstrap 5 Responsive Layouts', type: 'client' },
        { id: '2', label: 'Django Core App', subtext: 'ORM, Form Validation & Middleware', type: 'server' },
        { id: '3', label: 'Organ Matching Matrix', subtext: 'Blood type & Proximity Engine', type: 'analytics' },
        { id: '4', label: 'MySQL Database', subtext: 'Relational Integrity & Audit Logs', type: 'database' }
      ]
    },
    screenshots: [
      { url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop', caption: 'Donor & Patient Matching Dashboard' },
      { url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop', caption: 'Hospital Approval Queue & Request Portal' },
      { url: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200&auto=format&fit=crop', caption: 'Emergency Blood Group Search Matrix' }
    ],
    developmentProcess: [
      { phase: 'System Modeling', description: 'Constructed ER diagrams and relational schemas connecting Donors, Patients, Hospitals, and Requests.' },
      { phase: 'Django Backend Core', description: 'Configured custom Django User model with multi-role permissions and verification flags.' },
      { phase: 'Hospital Workflow Engine', description: 'Built strict approval pipelines preventing fake or unverified organ listings.' },
      { phase: 'Frontend & Security Auditing', description: 'Protected forms against SQL injection, XSS, and enabled HTTPS session management.' }
    ],
    challenges: [
      {
        challenge: 'Ensuring strict confidentiality of sensitive patient health records.',
        solution: 'Implemented Django model-level permissions and custom permission mixins restricting raw patient record access to verified medical staff.'
      },
      {
        challenge: 'Complex relational querying for blood group compatibility matching.',
        solution: 'Optimized Django ORM Q objects and raw MySQL queries to return cross-compatible donor lists instantly.'
      }
    ],
    keyLearnings: [
      'Deepened mastery over Django ORM, authentication mixins, and admin customization',
      'Database normalization and transaction safety in MySQL',
      'Implementing strict healthcare security compliance standards'
    ],
    futureEnhancements: [
      'GPS Real-Time Transport Tracking using Google Maps API',
      'SMS Automated Alerts via Twilio for emergency matches',
      'Blockchain Ledger for tamper-proof organ donation audit trails'
    ],
    timeline: '4 Months (Jun 2024 - Sep 2024)'
  },
  {
    id: 'w-cart',
    title: 'W-Cart E-Commerce Website',
    category: 'Frontend',
    filterCategory: 'Frontend',
    techStack: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'LocalStorage API', 'Responsive Flexbox/Grid'],
    shortDescription: 'Modern shopping website with responsive UI, product catalog, shopping cart, product search, categories, and beautiful animations.',
    fullDescription: 'W-Cart is a fast, highly responsive frontend e-commerce web application engineered with pure modern vanilla JavaScript (ES6+), custom CSS grid layouts, and LocalStorage state synchronization. It offers smooth product filtering, search debouncing, persistent cart management, and interactive order checkout preview.',
    features: [
      'Dynamic Product Catalog with multi-category filtering (Electronics, Fashion, Home)',
      'Debounced Instant Search Bar filtering items dynamically without reload',
      'Persistent Shopping Cart using LocalStorage for multi-session items',
      'Interactive Quantity Counter & Real-Time Price Calculation',
      'Sleek Toast Notification Feedback on cart updates',
      'Responsive Touch-Optimized Mobile Navigation Drawer'
    ],
    status: 'Live & Deployed',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop',
    demoUrl: 'https://w-cart-demo.example.com',
    githubUrl: 'https://github.com/prajwalmohan/W-Cart-ECommerce-Website',
    stats: {
      stars: 29,
      forks: 8,
      linesOfCode: '2,400+',
      lighthouseScore: 99,
      commits: 42
    },
    architecture: {
      title: 'Vanilla JS Modular Component Architecture',
      description: 'Zero-dependency lightweight frontend architecture emphasizing 60 FPS DOM updates and instant interaction response.',
      nodes: [
        { id: '1', label: 'DOM View Layer', subtext: 'Flexbox / CSS Grid Templates', type: 'client' },
        { id: '2', label: 'Cart Store Engine', subtext: 'JavaScript Event Bus & Observer', type: 'analytics' },
        { id: '3', label: 'Browser LocalStorage', subtext: 'Client Data Persistence', type: 'database' }
      ]
    },
    screenshots: [
      { url: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop', caption: 'Product Grid & Category Filter Layout' },
      { url: 'https://images.unsplash.com/photo-1526178613552-2b45c6c302f0?q=80&w=1200&auto=format&fit=crop', caption: 'Slide-Out Interactive Shopping Cart' },
      { url: 'https://images.unsplash.com/photo-1556742049-0a67d130e695?q=80&w=1200&auto=format&fit=crop', caption: 'Order Summary & Checkout Modal' }
    ],
    developmentProcess: [
      { phase: 'UI Framework-Free Setup', description: 'Designed custom CSS design tokens for typography, spacing, and glass visual cards.' },
      { phase: 'State Architecture', description: 'Built an event-driven JavaScript state manager that handles item insertion, quantity modifications, and subtotal recalculation.' },
      { phase: 'Responsive Mobile Tuning', description: 'Optimized touch event handling and slide navigation for seamless mobile UX.' }
    ],
    challenges: [
      {
        challenge: 'Maintaining cart state consistency across multiple open browser tabs without backend DB.',
        solution: 'Utilized browser window storage event listener to synchronize shopping cart counts across active windows in real-time.'
      }
    ],
    keyLearnings: [
      'Mastery of pure DOM manipulation without relying on framework overhead',
      'Advanced CSS Grid and Flexbox responsive design patterns',
      'Optimizing Web Vitals to achieve a 99+ Lighthouse performance rating'
    ],
    futureEnhancements: [
      'Stripe Payment Gateway Integration in Sandbox mode',
      'User Wishlist & Product Comparison Tool',
      'Dark/Light theme toggle customization'
    ],
    timeline: '1.5 Months (Mar 2024 - Apr 2024)'
  },
  {
    id: 'electricity-theft',
    title: 'Electricity Theft Detection System',
    category: 'Machine Learning',
    filterCategory: 'Machine Learning',
    techStack: ['Python', 'ANN (Artificial Neural Networks)', 'Agglomerative Clustering', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-Learn'],
    shortDescription: 'Machine learning system that detects abnormal electricity consumption patterns and identifies potential theft using clustering and neural network algorithms.',
    fullDescription: 'The Electricity Theft Detection System is an advanced machine learning project tailored for smart power grid security. By combining unsupervised Agglomerative Hierarchical Clustering with Artificial Neural Networks (ANN), the system analyzes high-frequency meter consumption data to uncover non-technical losses (NTL) caused by meter tampering, illegal line tapping, or bypass circuits.',
    features: [
      'Hybrid Machine Learning Pipeline combining Agglomerative Hierarchical Clustering and Artificial Neural Networks',
      'Automated Outlier & Anomaly Detection identifying sudden drops or unmetered energy bursts',
      'Data Preprocessing Engine handling missing sensor values, normalization, and noisy smart meter metrics',
      'Visual Consumption Pattern Analysis depicting regular vs suspicious consumer trendlines',
      'Risk Classification Matrix labeling consumers as High Risk (Theft Likely), Medium Risk, or Normal',
      'Accuracy & Confusion Matrix Reporting for grid audit compliance'
    ],
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=1600&auto=format&fit=crop',
    demoUrl: 'https://electricity-theft-demo.example.com',
    githubUrl: 'https://github.com/prajwalmohan/Electricity-Theft-Detection-ML',
    stats: {
      stars: 41,
      forks: 15,
      linesOfCode: '3,800+',
      lighthouseScore: 95,
      commits: 52
    },
    architecture: {
      title: 'ANN & Agglomerative Clustering ML Pipeline',
      description: 'End-to-end Machine Learning model starting from raw smart meter CSV logs through clustering preprocessing to neural network classification.',
      nodes: [
        { id: '1', label: 'Smart Meter Dataset', subtext: 'CSV Consumption Logs', type: 'client' },
        { id: '2', label: 'Agglomerative Clustering', subtext: 'Unsupervised Pattern Grouping', type: 'analytics' },
        { id: '3', label: 'ANN Classifier Model', subtext: 'Deep Feedforward Neural Net', type: 'ai' },
        { id: '4', label: 'Risk Report Generator', subtext: 'High/Medium/Low Theft Alert UI', type: 'server' }
      ]
    },
    screenshots: [
      { url: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop', caption: 'Consumption Pattern Anomaly Visualization' },
      { url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop', caption: 'Clustering & Dendrogram Distribution Analysis' },
      { url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop', caption: 'ANN Accuracy & Loss Curve Metrics' }
    ],
    developmentProcess: [
      { phase: 'Dataset Curation', description: 'Cleaned and normalized smart meter time-series datasets containing 10,000+ consumer records.' },
      { phase: 'Unsupervised Clustering', description: 'Applied Agglomerative Clustering to automatically group typical daily load profiles.' },
      { phase: 'ANN Deep Training', description: 'Trained a multi-layer feedforward ANN with ReLU and Sigmoid activations achieving 94.2% detection precision.' },
      { phase: 'GUI Visualization', description: 'Developed a Web GUI to upload meter CSV files and plot consumer anomaly charts.' }
    ],
    challenges: [
      {
        challenge: 'Severe class imbalance where legitimate users vastly outnumbered actual electricity theft cases.',
        solution: 'Applied SMOTE (Synthetic Minority Over-sampling Technique) to balance training classes and prevent neural net bias.'
      }
    ],
    keyLearnings: [
      'In-depth knowledge of Agglomerative Hierarchical Clustering and Artificial Neural Networks',
      'Handling imbalanced time-series datasets using SMOTE',
      'Building predictive data visualizers with Matplotlib and Seaborn'
    ],
    futureEnhancements: [
      'Real-time IoT Smart Meter streaming analysis via Kafka',
      'Integration with GIS maps to pinpoint physical transformer line locations',
      'Edge deployment on Raspberry Pi for substation monitoring'
    ],
    timeline: '3.5 Months (Jan 2024 - Apr 2024)'
  },
  {
    id: 'hospital-management',
    title: 'Hospital Management System',
    category: 'Full Stack',
    filterCategory: 'Full Stack',
    techStack: ['Python', 'Django', 'Bootstrap 5', 'SQLite / MySQL', 'HTML5', 'CSS3', 'JavaScript'],
    shortDescription: 'Hospital application for managing patients, doctors, appointments, prescriptions, and medical records.',
    fullDescription: 'The Hospital Management System is a comprehensive web software suite engineered for modern medical clinics and healthcare centers. It standardizes clinic workflow, from patient registration and doctor schedule management to digital prescription generation and billing invoices.',
    features: [
      'Multi-Role Dashboards for Patients, Doctors, and Receptionists',
      'Online Appointment Scheduling with automated slot conflict prevention',
      'Digital E-Prescription Builder allowing doctors to generate PDF prescriptions',
      'Patient Medical History Timeline tracking diagnoses, allergies, and lab results',
      'Billing & Invoice Generator calculating consultation fees and pharmacy items',
      'Doctor Specialization Search with live availability indicators'
    ],
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1200&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1600&auto=format&fit=crop',
    demoUrl: 'https://hospital-mgmt-demo.example.com',
    githubUrl: 'https://github.com/prajwalmohan/Hospital-Management-System-Django',
    stats: {
      stars: 37,
      forks: 12,
      linesOfCode: '5,100+',
      lighthouseScore: 97,
      commits: 58
    },
    architecture: {
      title: 'Django Medical Practice Architecture',
      description: 'Model-View-Template architecture separating appointment slot calculations, doctor authentication, and patient medical record safety.',
      nodes: [
        { id: '1', label: 'Patient & Doctor Web App', subtext: 'Bootstrap 5 Interface', type: 'client' },
        { id: '2', label: 'Django Application Server', subtext: 'Session & Auth Middleware', type: 'server' },
        { id: '3', label: 'PDF Invoice Engine', subtext: 'ReportLab PDF Generator', type: 'analytics' },
        { id: '4', label: 'Relational Database', subtext: 'Appointments & Prescriptions', type: 'database' }
      ]
    },
    screenshots: [
      { url: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1200&auto=format&fit=crop', caption: 'Doctor Dashboard & Appointment Manager' },
      { url: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1200&auto=format&fit=crop', caption: 'Digital Prescription Generator' },
      { url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop', caption: 'Patient Billing & Medical Records Summary' }
    ],
    developmentProcess: [
      { phase: 'Requirements Gathering', description: 'Consulted clinic operational workflows to outline appointment booking rules.' },
      { phase: 'Django Data Modeling', description: 'Designed relational entities with strict Foreign Key references for Doctor, Patient, and Prescription models.' },
      { phase: 'Appointment Scheduling Engine', description: 'Programmed validation logic to stop overlapping appointment bookings for doctors.' },
      { phase: 'Testing & QA', description: 'Performed functional manual testing and automated unit testing for Django forms.' }
    ],
    challenges: [
      {
        challenge: 'Preventing double-booking when two patients attempt to select the same time slot concurrently.',
        solution: 'Implemented Django database transaction locks (`select_for_update`) during appointment booking checkout.'
      }
    ],
    keyLearnings: [
      'Advanced Django model relationships and database transaction locking',
      'Dynamic PDF document generation in Python',
      'Applying software testing methodologies to healthcare workflows'
    ],
    futureEnhancements: [
      'Telemedicine Video Calls using WebRTC',
      'Automated WhatsApp appointment reminder notifications',
      'Pharmacy Inventory auto-deduction upon prescription issuance'
    ],
    timeline: '3 Months (Jul 2023 - Sep 2023)'
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio Website',
    category: 'Frontend',
    filterCategory: 'Frontend',
    techStack: ['React 19', 'Tailwind CSS', 'Framer Motion', 'Three.js', 'TypeScript', 'Vite'],
    shortDescription: 'Premium responsive portfolio website showcasing projects, skills, education, contact information, animations, and modern UI.',
    fullDescription: 'The 2026 Bento Grid Personal Portfolio Website for Prajwal G N is an award-inspired web application featuring 3D interactive floating graphics, glassmorphism aesthetics, responsive bento grids, theme toggling, and dedicated deep-dive project pages. Built with React 19, Tailwind CSS, Framer Motion, and Three.js.',
    features: [
      'Awwwards-Inspired Bento Grid Structural Layout with responsive grid spans',
      '3D Canvas Background with ambient geometry floating objects & particle systems',
      'Interactive Custom Cursor Glow & Magnetic Button Interactions',
      'Dedicated Deep-Dive Project Detail Pages (`/project/:id`) with architecture maps and frame previews',
      'Interactive GitHub Activity Calendar & Live Metrics Simulator',
      'Fully Responsive Dark/Light Theme Support with glass contrast tuning',
      'Validated Contact Form with Toast feedback & EmailJS support'
    ],
    status: 'Live & Deployed',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1600&auto=format&fit=crop',
    demoUrl: 'https://prajwal.vercel.app',
    githubUrl: 'https://github.com/prajwalmohan/Prajwal-Portfolio-2026',
    stats: {
      stars: 65,
      forks: 22,
      linesOfCode: '3,200+',
      lighthouseScore: 99,
      commits: 74
    },
    architecture: {
      title: 'React 19 & Three.js Single Page Routing Architecture',
      description: 'Modern component-driven application structure with client-side routing, framer motion page transitions, and WebGL rendering canvas.',
      nodes: [
        { id: '1', label: 'React Router Engine', subtext: 'SPA Transitions & Detail Routes', type: 'client' },
        { id: '2', label: 'Three.js WebGL Layer', subtext: 'Floating 3D Scene & Shader Lighting', type: 'ai' },
        { id: '3', label: 'Framer Motion Pipeline', subtext: 'Bento Scale & Tilt Micro-interactions', type: 'analytics' },
        { id: '4', label: 'Tailwind Glass System', subtext: 'Utility Glass & Color Tokens', type: 'server' }
      ]
    },
    screenshots: [
      { url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop', caption: 'Bento Grid Hero & Bio Overview' },
      { url: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200&auto=format&fit=crop', caption: 'Bento Project Gallery with Filter Tabs' },
      { url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop', caption: 'Interactive Project Detail Page Route' }
    ],
    developmentProcess: [
      { phase: 'Design & Conceptualization', description: 'Sketched bento grid wireframes influenced by Apple, Linear, and Vercel minimalist aesthetics.' },
      { phase: 'WebGL Integration', description: 'Constructed an ambient Three.js scene featuring floating torus knots, octahedrons, and starfields.' },
      { phase: 'Routing & Component Architecture', description: 'Configured React Router for smooth project transitions without full reload.' },
      { phase: 'SEO & Performance Polish', description: 'Optimized bundle size, lazy-loaded heavy images, and achieved 99+ Lighthouse performance score.' }
    ],
    challenges: [
      {
        challenge: 'Maintaining high 60 FPS animation rates while rendering Three.js 3D canvas and Framer Motion glass cards simultaneously.',
        solution: 'Optimized Three.js geometry poly-counts, enabled pixel-ratio caps, and used hardware-accelerated CSS transforms.'
      }
    ],
    keyLearnings: [
      'Mastery of Bento Grid layout engineering with Tailwind CSS',
      'Three.js scene management and reactive state integration',
      'Advanced UX motion design with Framer Motion'
    ],
    futureEnhancements: [
      'Interactive 3D Avatar viewer using Three.js GLTF model',
      'AI-powered portfolio chat assistant answering visitor questions',
      'Custom theme generator with accent color picker'
    ],
    timeline: '1 Month (Jan 2026 - Feb 2026)'
  }
];
