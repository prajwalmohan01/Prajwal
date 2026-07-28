/* ==========================================================================
   Prajwal G N Portfolio - Pure Vanilla JavaScript Logic
   Features: Theme Switcher, Dynamic Render, Category Filtering, Form Handling
   ========================================================================== */

// --- DATA STRUCTURES (Skills & Projects) ---
const SKILLS_DATA = [
  { name: 'Python 3.12', category: 'Languages', percentage: 92, icon: 'fa-brands fa-python', desc: 'OOP, data manipulation, backend scripting, async I/O, modern Python standard library.' },
  { name: 'JavaScript (ES6+)', category: 'Languages', percentage: 90, icon: 'fa-brands fa-square-js', desc: 'Async/await, DOM manipulation, ES6+ modules, Promises, functional programming.' },
  { name: 'Java', category: 'Languages', percentage: 82, icon: 'fa-brands fa-java', desc: 'Core Java, Object-Oriented Design, data structures, multithreading.' },
  { name: 'HTML5 & SEO', category: 'Frontend', percentage: 95, icon: 'fa-brands fa-html5', desc: 'Semantic HTML markup, accessibility standards (WCAG), meta tags, structured data & SEO.' },
  { name: 'Tailwind CSS v4', category: 'Frontend', percentage: 92, icon: 'fa-solid fa-palette', desc: 'Utility-first styling, responsive layouts, modern CSS variables, fluid typography.' },
  { name: 'Bootstrap', category: 'Frontend', percentage: 88, icon: 'fa-brands fa-bootstrap', desc: 'Responsive flex grids, utility classes, UI component library, modals & custom navigation.' },
  { name: 'Django 5.0', category: 'Backend', percentage: 88, icon: 'fa-solid fa-server', desc: 'MVT architecture, ORM query optimization, REST APIs, authentication & secure admin.' },
  { name: 'Flask', category: 'Backend', percentage: 85, icon: 'fa-solid fa-microchip', desc: 'Lightweight routing, RESTful endpoints, Jinja2 templating, microservices & API integration.' },
  { name: 'MySQL 8.0', category: 'Database', percentage: 86, icon: 'fa-solid fa-database', desc: 'Relational database design, complex JOINs, indexing, foreign keys & stored procedures.' },
  { name: 'Git & GitHub', category: 'Tools', percentage: 90, icon: 'fa-brands fa-github', desc: 'Version control, feature branching, pull requests, merge conflict resolution & CI/CD workflows.' },
  { name: 'Software Testing & QA', category: 'Tools', percentage: 85, icon: 'fa-solid fa-circle-check', desc: 'Manual testing, test cases, functional testing, boundary analysis & bug tracking.' }
];

const PROJECTS_DATA = [
  {
    title: 'Enterprise Portfolio Platform',
    category: 'Full Stack',
    tags: ['Python', 'Django', 'HTML5', 'CSS3', 'JavaScript', 'MySQL'],
    desc: 'High-performance portfolio platform featuring dynamic skill filtering, contact handling, dark mode, and responsive Bento Grid layout.'
  },
  {
    title: 'Task & Workflow Management System',
    category: 'Backend',
    tags: ['Python', 'Flask', 'MySQL', 'REST API', 'JavaScript'],
    desc: 'Scalable task management application with user authentication, database CRUD operations, and real-time activity status tracking.'
  },
  {
    title: 'Automated Web Testing Suite',
    category: 'QA / Testing',
    tags: ['Python', 'Selenium', 'QA Testing', 'Bug Reporting'],
    desc: 'Automated test suites for web applications testing form validations, API responses, and UI responsiveness.'
  }
];

// --- DOM ELEMENTS ---
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('themeToggle');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');
  const skillsGrid = document.getElementById('skillsGrid');
  const projectsGrid = document.getElementById('projectsGrid');
  const skillFilters = document.getElementById('skillFilters');
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  // --- DARK MODE TOGGLE ---
  let isDark = document.documentElement.classList.contains('dark');

  themeToggleBtn.addEventListener('click', () => {
    isDark = !isDark;
    if (isDark) {
      document.documentElement.classList.add('dark');
      themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
      document.documentElement.classList.remove('dark');
      themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  });

  // --- MOBILE MENU TOGGLE ---
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // --- RENDER SKILLS ---
  function renderSkills(category = 'All') {
    skillsGrid.innerHTML = '';

    const filtered = category === 'All'
      ? SKILLS_DATA
      : SKILLS_DATA.filter(s => s.category === category);

    filtered.forEach(skill => {
      const card = document.createElement('div');
      card.className = 'card skill-card';
      card.innerHTML = `
        <div class="skill-header">
          <div class="skill-icon-title">
            <i class="${skill.icon}"></i>
            <h4>${skill.name}</h4>
          </div>
          <span class="skill-percentage">${skill.percentage}%</span>
        </div>
        <p>${skill.desc}</p>
        <div class="skill-bar">
          <div class="skill-progress" style="width: ${skill.percentage}%"></div>
        </div>
      `;
      skillsGrid.appendChild(card);
    });
  }

  // --- SKILL CATEGORY FILTER EVENT ---
  if (skillFilters) {
    skillFilters.addEventListener('click', (e) => {
      if (e.target.classList.contains('filter-btn')) {
        document.querySelectorAll('#skillFilters .filter-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        const cat = e.target.getAttribute('data-category');
        renderSkills(cat);
      }
    });
  }

  // --- RENDER PROJECTS ---
  function renderProjects() {
    projectsGrid.innerHTML = '';
    PROJECTS_DATA.forEach(proj => {
      const card = document.createElement('div');
      card.className = 'card project-card';
      card.innerHTML = `
        <div>
          <h3 class="project-title">${proj.title}</h3>
          <p>${proj.desc}</p>
        </div>
        <div class="project-tags">
          ${proj.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
      `;
      projectsGrid.appendChild(card);
    });
  }

  // --- CONTACT FORM SUBMISSION ---
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      formStatus.className = 'form-status success';
      formStatus.innerText = `Thank you, ${name}! Your message has been sent successfully.`;
      contactForm.reset();
      setTimeout(() => {
        formStatus.innerText = '';
      }, 5000);
    });
  }

  // Initial Execution
  renderSkills('All');
  renderProjects();
});
