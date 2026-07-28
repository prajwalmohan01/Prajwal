export interface PersonalInfo {
  name: string;
  title: string;
  subtitles: string[];
  email: string;
  phone: string;
  birthday: string;
  location: string;
  linkedin: string;
  twitter: string;
  github: string;
  instagram: string;
  portfolio: string;
  resumeUrl?: string;
  about: string;
}

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Prajwal G N',
  title: 'Full Stack Web Developer',
  subtitles: ['Web Designer', 'Software Tester', 'Web Developer','Photography'],
  email: 'prajwalmohan01@gmail.com',
  phone: '+91 7676759149',
  birthday: 'January 04, 2002',
  location: 'Bengaluru, Karnataka, India',
  linkedin: 'https://www.linkedin.com/in/prajwalmohan',
  twitter: 'https://x.com/prajwalmohan_',
  github: 'https://github.com/prajwalmohan01',
  instagram: 'https://www.instagram.com/prajwalmohan_',
  portfolio: 'https://prajwal.vercel.app',
  about: "I'm a passionate Full Stack Web Developer from Bengaluru, India, with a strong interest in building responsive, user-friendly, and scalable web applications. I enjoy transforming ideas into real-world software solutions using modern web technologies. I have hands-on experience with HTML, CSS, Python, Django, Flask, MySQL, Git, and GitHub. As an MCA graduate, I am looking for opportunities where I can contribute my technical knowledge, enhance my problem-solving abilities, and grow as a software developer."
};

export const WHAT_I_DO = [
  {
    id: 'fullstack',
    title: 'Full Stack Web Development',
    description: 'Developing scalable, modern, and responsive end-to-end web applications using React, Python frameworks, and relational databases.',
    iconName: 'Layers',
    tags: ['React', 'Python', 'Django', 'REST APIs', 'Full Stack']
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Crafting visually stunning, accessible, and fast user interfaces using HTML5, CSS3, modern JavaScript, React, and Bootstrap.',
    iconName: 'Layout',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Bootstrap']
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Designing secure backend systems, database schemas, and micro-services with Python, Django, Flask, and MySQL.',
    iconName: 'Server',
    tags: ['Python', 'Django', 'Flask', 'REST API', 'MySQL']
  },
  {
    id: 'testing',
    title: 'Software Testing & QA',
    description: 'Ensuring top quality through comprehensive manual testing, functional verification, bug reporting, and defect tracking.',
    iconName: 'CheckSquare',
    tags: ['Manual Testing', 'Functional Testing', 'Bug Reporting', 'QA']
  }
];

export const PROFILE_HIGHLIGHTS = [
  {
    title: 'Dedicated Developer',
    subtitle: '100% Commitment to clean code & best practices',
    metric: '98%',
    value: 98,
    iconName: 'Code2',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    title: 'Problem Solver',
    subtitle: 'Analytical thinker tackling complex logic',
    metric: '95%',
    value: 95,
    iconName: 'BrainCircuit',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'Quick Learner',
    subtitle: 'Rapid adoption of new tech & frameworks',
    metric: '92%',
    value: 92,
    iconName: 'Zap',
    color: 'from-amber-400 to-emerald-400'
  }
];
