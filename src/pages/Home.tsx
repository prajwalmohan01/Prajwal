import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  FiSend,
  FiMail,
  FiPhone,
  FiCalendar,
  FiMapPin,
  FiGlobe,
  FiLayers,
  FiLayout,
  FiServer,
  FiCheckSquare,
  FiSearch,
  FiFilter,
  FiBriefcase,
  FiCode,
  FiZap,
  FiArrowRight
} from 'react-icons/fi';
import { FaLinkedin, FaInstagram, FaGraduationCap, FaBrain } from 'react-icons/fa6';
import { HiSparkles } from 'react-icons/hi';
import { ProjectCard } from '../components/ProjectCard';
import { SkillCard } from '../components/SkillCard';
import { ContactForm } from '../components/ContactForm';
import { GithubProfile } from '../components/GithubProfile';
import { PERSONAL_INFO, WHAT_I_DO, PROFILE_HIGHLIGHTS } from '../data/info';
import { PROJECTS_DATA } from '../data/projects';
import { SKILLS_DATA } from '../data/skills';
import { EDUCATION_DATA, EXPERIENCE_DATA } from '../data/resume';

interface HomeProps {
  onToast?: (title: string, desc?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onToast }) => {
  // Typing Effect state for Subtitle
  const [typedSubtitleIndex, setTypedSubtitleIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Project Filtering & Searching State
  const [projectCategory, setProjectCategory] = useState<string>('All');
  const [projectSearch, setProjectSearch] = useState<string>('');

  // Skills Filtering State
  const [skillCategory, setSkillCategory] = useState<string>('All');

  // Page Initial Loader state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Typing effect loop
  useEffect(() => {
    const currentFullText = PERSONAL_INFO.subtitles[typedSubtitleIndex] || '';

    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (typedText !== currentFullText) {
        timer = setTimeout(() => {
          setTypedText(currentFullText.slice(0, typedText.length + 1));
        }, 100);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1800);
      }
    } else {
      if (typedText !== '') {
        timer = setTimeout(() => {
          setTypedText(currentFullText.slice(0, typedText.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setTypedSubtitleIndex((prev) => (prev + 1) % PERSONAL_INFO.subtitles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, typedSubtitleIndex]);

  // Filtered Projects
  const filteredProjects = PROJECTS_DATA.filter(project => {
    const matchesCategory =
      projectCategory === 'All' || project.filterCategory === projectCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(projectSearch.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(projectSearch.toLowerCase()) ||
      project.techStack.some(t => t.toLowerCase().includes(projectSearch.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Filtered Skills
  const filteredSkills = SKILLS_DATA.filter(skill => {
    if (skillCategory === 'All') return true;
    return skill.category === skillCategory;
  });

  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Initial Animated Page Loader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950 text-white"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-1 animate-pulse">
                <div className="w-full h-full bg-slate-950 rounded-[12px] flex items-center justify-center font-black text-cyan-400 text-xl">
                  P
                </div>
              </div>
              <p className="text-xs font-mono tracking-widest text-cyan-400 uppercase">
                Loading Prajwal Portfolio...
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= HERO BENTO SECTION ================= */}
      <section id="hero" className="pt-20 sm:pt-24">
        <div>
          {/* Hero Bento Card (Bio & Buttons) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full px-5 py-6 sm:px-6 sm:py-8 rounded-2xl bg-white border border-slate-200/90 flex flex-col justify-between space-y-8 relative overflow-hidden group shadow-sm"
          >
            <div className="space-y-4 relative z-10">
              <h2 className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                Prajwal G N
              </h2>

              <div>
                <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
                  Full Stack <br />
                  <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 bg-clip-text text-transparent">Web Developer</span>
                </h1>

                <div className="h-8 mt-3 flex items-center text-lg sm:text-2xl font-bold text-slate-800 font-mono">
                  <span className="text-blue-600">{typedText}</span>
                  <span className="w-0.5 h-6 bg-blue-600 ml-1 animate-pulse" />
                </div>
              </div>

              <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">
                I transform complex ideas into high-performance, beautiful, and scalable web solutions with modern tech stacks.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 relative z-10 pt-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector('#contact');
                  if (target) {
                    const navOffset = 90;
                    const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - navOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="backdrop-blur-md bg-blue-600/90 hover:bg-blue-600 text-white px-6 py-3.5 rounded-2xl font-bold text-sm shadow-md shadow-blue-500/20 border border-blue-400/30 transition-all cursor-pointer flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <FiSend className="w-4 h-4 text-white" />
                <span>Get In Touch</span>
              </a>

              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector('#projects');
                  if (target) {
                    const navOffset = 90;
                    const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - navOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="backdrop-blur-md bg-white/80 hover:bg-white text-slate-900 border border-slate-200/90 px-6 py-3.5 rounded-2xl font-bold text-sm shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <FiCode className="w-4 h-4 text-blue-600" />
                <span>View Projects</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= PERSONAL INFORMATION & ABOUT BENTO ================= */}
      <section id="about">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* About Me Bento Card */}
          <div className="lg:col-span-7 px-5 py-6 sm:px-6 sm:py-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">
              About Me
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
              Transforming Ideas into Real-World Software Solutions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {PERSONAL_INFO.about}
            </p>
          </div>

          {/* Location & Quick Contact Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="bg-white border border-slate-200/90 rounded-2xl px-5 py-5 flex flex-col justify-between shadow-sm">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-slate-100 border border-slate-200 rounded-2xl">
                  <FiMapPin className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Based In</span>
              </div>
              <div className="mt-4">
                <h3 className="text-2xl font-bold text-slate-900 leading-tight">Bengaluru, India</h3>
                <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-medium">Karnataka State</p>
              </div>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-2xl px-5 py-5 flex flex-col justify-between relative overflow-hidden shadow-sm">
              <div>
                <h4 className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-3">Quick Contact</h4>
                <p className="text-slate-900 text-xs font-medium truncate">{PERSONAL_INFO.email}</p>
                <p className="text-slate-900 text-xs font-medium mt-1">{PERSONAL_INFO.phone}</p>
              </div>
              <div className="flex space-x-2 mt-4">
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-xl backdrop-blur-md bg-white/80 hover:bg-white border border-slate-200/90 shadow-sm flex items-center justify-center text-slate-700 hover:text-blue-600 transition-all hover:scale-105 active:scale-95">
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a href={PERSONAL_INFO.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-xl backdrop-blur-md bg-white/80 hover:bg-white border border-slate-200/90 shadow-sm flex items-center justify-center text-slate-700 hover:text-pink-600 transition-all hover:scale-105 active:scale-95">
                  <FaInstagram className="w-4 h-4" />
                </a>
                <a href={PERSONAL_INFO.portfolio} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-xl backdrop-blur-md bg-white/80 hover:bg-white border border-slate-200/90 shadow-sm flex items-center justify-center text-slate-700 hover:text-cyan-600 transition-all hover:scale-105 active:scale-95">
                  <FiGlobe className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT I'M DOING (4 CARDS) ================= */}
      <section id="services" className="space-y-6">
        <div>
          <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">
            What I'm Doing
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
            Core Expertise & Technical Specializations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHAT_I_DO.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="px-4 py-5 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 shadow-sm transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="p-3 rounded-2xl bg-slate-100 border border-slate-200 text-blue-600 w-fit">
                  {item.iconName === 'Layers' && <FiLayers className="w-6 h-6" />}
                  {item.iconName === 'Layout' && <FiLayout className="w-6 h-6 text-cyan-600" />}
                  {item.iconName === 'Server' && <FiServer className="w-6 h-6 text-purple-600" />}
                  {item.iconName === 'CheckSquare' && <FiCheckSquare className="w-6 h-6 text-emerald-600" />}
                </div>

                <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {item.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-0.5 rounded-lg bg-slate-100 text-[10px] text-slate-600 border border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PROFILE HIGHLIGHTS (3 CARDS WITH PROGRESS) ================= */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROFILE_HIGHLIGHTS.map((high, idx) => (
          <div key={high.title} className="px-4 py-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-base text-slate-900">{high.title}</h3>
              <p className="text-xs text-slate-600">{high.subtitle}</p>
            </div>

            {/* Circular Progress Meter */}
            <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="32" cy="32" r="26" stroke="#e2e8f0" strokeWidth="6" fill="transparent" />
                <circle
                  cx="32"
                  cy="32"
                  r="26"
                  stroke="#2563eb"
                  strokeWidth="6"
                  strokeDasharray="163"
                  strokeDashoffset={163 - (163 * high.value) / 100}
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>
              <span className="absolute text-xs font-extrabold text-slate-900 font-mono">{high.metric}</span>
            </div>
          </div>
        ))}
      </section>

      {/* ================= SKILLS SECTION ================= */}
      <section id="skills" className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pt-2">
          <div>
            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">
              Technical Expertise
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
              Skills & Proficiencies
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {['All', 'Languages', 'Frontend', 'Backend', 'Database', 'Testing & Tools'].map(cat => (
              <button
                key={cat}
                type="button"
                onClick={() => setSkillCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold backdrop-blur-md transition-all cursor-pointer ${
                  skillCategory === cat
                    ? 'bg-blue-600/90 hover:bg-blue-600 text-white shadow-md shadow-blue-500/20 border border-blue-400/30'
                    : 'bg-white/80 hover:bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
          {filteredSkills.map(skill => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </section>

      {/* ================= RESUME & TIMELINE SECTION ================= */}
      <section id="resume" className="space-y-4">
        <div>
          <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">
            Career Journey
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
            Education & Professional Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Column */}
          <div className="px-5 py-6 sm:px-6 sm:py-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <FaGraduationCap className="w-5 h-5 text-blue-600" /> Education Timeline
            </h3>

            <div className="space-y-6 pl-4 border-l-2 border-slate-200">
              {EDUCATION_DATA.map(edu => (
                <div key={edu.id} className="relative space-y-1">
                  <div className="absolute -left-[23px] top-1.5 w-3.5 h-3.5 rounded-full bg-blue-600 border-2 border-white" />
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-slate-900 text-sm">{edu.degree}</h4>
                    <span className="text-[10px] font-mono text-blue-700 px-2 py-0.5 rounded bg-blue-50 border border-blue-200">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">{edu.institution}</p>
                  <p className="text-xs text-slate-600 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div className="px-5 py-6 sm:px-6 sm:py-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <FiBriefcase className="w-5 h-5 text-purple-600" /> Experience Timeline
            </h3>

            <div className="space-y-6 pl-4 border-l-2 border-slate-200">
              {EXPERIENCE_DATA.map(exp => (
                <div key={exp.id} className="relative space-y-1">
                  <div className="absolute -left-[23px] top-1.5 w-3.5 h-3.5 rounded-full bg-purple-600 border-2 border-white" />
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-slate-900 text-sm">{exp.role}</h4>
                    <span className="text-[10px] font-mono text-purple-700 px-2 py-0.5 rounded bg-purple-50 border border-purple-200">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">{exp.company} • {exp.location}</p>
                  <ul className="text-xs text-slate-600 space-y-1 pt-1">
                    {exp.highlights.slice(0, 3).map((h, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-blue-500">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS SECTION ================= */}
      <section id="projects" className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">
              Project Portfolio
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
              Featured Web Engineering Projects
            </h2>
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[240px]">
            <FiSearch className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={projectSearch}
              onChange={e => setProjectSearch(e.target.value)}
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2 rounded-2xl bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-sm"
            />
          </div>
        </div>

        {/* Project Grid - Limited to 6 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredProjects.slice(0, 6).map(project => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-8 p-6 rounded-3xl bg-white border border-slate-200 text-slate-600 shadow-sm">
            <p>No projects matched your search criteria.</p>
          </div>
        )}

        {/* Show More Projects Button */}
        {filteredProjects.length > 0 && (
          <div className="flex justify-center pt-4">
            <Link
              to="/projects"
              className="px-6 py-3 rounded-2xl backdrop-blur-md bg-slate-900/90 hover:bg-slate-900 text-white font-bold text-xs sm:text-sm border border-slate-700/40 shadow-md hover:shadow-lg transition-all flex items-center gap-2 group cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Show More Projects</span>
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </section>

      {/* ================= GITHUB PROFILE SECTION ================= */}
      <section id="github" className="space-y-4">
        <GithubProfile />
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section id="contact" className="space-y-4">
        <ContactForm onToast={onToast} />
      </section>
    </div>
  );
};
