export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Languages' | 'Testing & Tools' | 'Database';
  percentage: number;
  iconName: string;
  color: string;
  description: string;
}

export const SKILLS_DATA: Skill[] = [
  {
    name: 'Python',
    category: 'Languages',
    percentage: 92,
    iconName: 'Terminal',
    color: 'from-blue-500 to-yellow-500',
    description: 'OOP, data manipulation, backend scripting, async I/O, Python standard library.'
  },
  {
    name: 'Java',
    category: 'Languages',
    percentage: 82,
    iconName: 'Coffee',
    color: 'from-red-500 to-amber-600',
    description: 'Core Java, Object-Oriented Design, data structures, exception handling, multithreading.'
  },
  {
    name: 'HTML5',
    category: 'Frontend',
    percentage: 95,
    iconName: 'Code',
    color: 'from-orange-500 to-amber-500',
    description: 'Semantic HTML markup, accessibility standards (WCAG), meta tags, structured data & SEO.'
  },
  {
    name: 'CSS',
    category: 'Frontend',
    percentage: 92,
    iconName: 'Palette',
    color: 'from-cyan-400 to-blue-500',
    description: 'Utility-first styling, responsive layouts, modern CSS variables, fluid typography & dark mode.'
  },
  {
    name: 'AI Stitch',
    category: 'Frontend',
    percentage: 90,
    iconName: 'Sparkles',
    color: 'from-violet-500 to-fuchsia-600',
    description: 'AI-powered UI generation, responsive layouts, component creation, rapid prototyping, and modern interface design.'
  },
  {
    name: 'Django 5.0',
    category: 'Backend',
    percentage: 88,
    iconName: 'Server',
    color: 'from-emerald-500 to-teal-700',
    description: 'MVT architecture, ORM query optimization, REST APIs, authentication & secure admin.'
  },
  {
    name: 'Flask',
    category: 'Backend',
    percentage: 85,
    iconName: 'Cpu',
    color: 'from-slate-400 to-zinc-600',
    description: 'Lightweight routing, RESTful endpoints, Jinja2 templating, microservices & API integration.'
  },
  {
    name: 'MySQL',
    category: 'Database',
    percentage: 86,
    iconName: 'Database',
    color: 'from-blue-600 to-indigo-700',
    description: 'Relational database design, complex JOINs, indexing, foreign keys & stored procedures.'
  },
  {
    name: 'Git & GitHub',
    category: 'Testing & Tools',
    percentage: 90,
    iconName: 'Github',
    color: 'from-orange-600 to-purple-600',
    description: 'Version control, feature branching, pull requests, merge conflict resolution & CI/CD workflows.'
  },
  {
    name: 'Software Testing & QA',
    category: 'Testing & Tools',
    percentage: 85,
    iconName: 'CheckCircle2',
    color: 'from-cyan-500 to-teal-500',
    description: 'Manual testing, test cases, functional testing, boundary analysis & bug tracking.'
  }
];
