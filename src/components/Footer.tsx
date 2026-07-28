import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowUp, Github, Linkedin, Instagram, Twitter, Mail, Heart, ShieldCheck, Zap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/info';

export const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFooterNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const scrollToTarget = () => {
      const target = document.querySelector(href);
      if (target) {
        const navOffset = 90;
        const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scrollToTarget, 100);
    } else {
      scrollToTarget();
    }
  };

  return (
    <footer className="relative bg-[#080c14] border-t border-slate-800 text-slate-400 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center font-bold text-sm text-white shadow-lg shadow-blue-500/20">
                P
              </div>
              <div>
                <h3 className="font-extrabold text-white text-lg tracking-tight">Prajwal G N</h3>
                <p className="text-xs text-blue-400 font-mono">{PERSONAL_INFO.title}</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Full Stack Web Developer & Software Tester committed to building innovative, responsive, and high-quality web applications with a strong focus on performance, usability, and clean development practices.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleFooterNavClick(e, '#about')}
                  className="hover:text-blue-400 transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleFooterNavClick(e, '#services')}
                  className="hover:text-blue-400 transition-colors"
                >
                  What I Do
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={(e) => handleFooterNavClick(e, '#skills')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Skills & Tech Stack
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleFooterNavClick(e, '#projects')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Featured Projects
                </a>
              </li>
              <li>
                <a
                  href="#resume"
                  onClick={(e) => handleFooterNavClick(e, '#resume')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Education & Experience
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleFooterNavClick(e, '#contact')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Get In Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Connect & Socials */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Connect</h4>
            <div className="flex flex-col gap-2.5 text-xs">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400" /> LinkedIn Profile
              </a>
              <a
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <Twitter className="w-4 h-4 text-cyan-400" /> X (Twitter)
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Github className="w-4 h-4 text-purple-400" /> GitHub Repositories
              </a>
              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-400" /> Instagram
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400" /> {PERSONAL_INFO.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium tracking-wider">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name} — Designing the Future of Web</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer shadow-sm"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-blue-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
