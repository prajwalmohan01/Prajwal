export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
  score?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  type: 'Internship' | 'Freelance' | 'Full-time';
}

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'mca',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'St Philomena\'s college Mysore',
    period: '2024 - 2025',
    description: 'Advanced studies in Computer Applications, Machine Learning algorithms, Database Systems, Software Architecture, and Web Engineering.',
    score: 'CGPA - 6.14'
  },
  {
    id: 'bca',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'JSS College of Arts, Commerce and Science Mysore',
    period: '2020 - 2023',
    description: 'Foundational degree in Computer Science, Data Structures, Web Technologies, Database Management Systems, and Software Testing.',
    score: 'CGPA - 7.02'
  },
  {
    id: 'pu',
    degree: 'PUC - EBAC',
    institution: 'BGS PU College, Balagangadharanathanagar, Nagmangala',
    period: '2018 - 2020',
    description: 'Pre-University Course in Economics, Business Studies, Accountancy, and Computer Science.',
    score: '73.1%'
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'ml-intern',
    role: 'Machine Learning Intern - Electricity Theft Detection (3 Month)',
    company: 'TT Global IT',
    period: 'July 2025 - September 2025',
    location: 'Mysore, India',
    type: 'Internship',
    highlights: [
      'Developed a machine learning-based system to detect electricity theft using consumption data.',
      'Performed data preprocessing and feature extraction for model training.',
      'Applied Agglomerative Clustering and Artificial Neural Networks (ANN) for classification and anomaly detection.',
      'Utilized Python and Flask for backend implementation and system deployment.'
    ]
  },
  {
    id: 'freelance-dev',
    role: 'Full Stack & Web App Developer',
    company: 'Independent Projects',
    period: '2023 - Present',
    location: 'Bengaluru, India',
    type: 'Freelance',
    highlights: [
      'Designed and built AI-Powered Financial Management Application with AI budgeting and expense tracking in Python.',
      'Developed Organ Donation Management System for donor registration, hospital management, and donation tracking.',
      'Engineered W-Cart, a responsive e-commerce web application with product search, cart, coupon system, and WhatsApp checkout.',
      'Built Gym Website for membership registration, trainer profiles, and class scheduling.'
    ]
  }
];
