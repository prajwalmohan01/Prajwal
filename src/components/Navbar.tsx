import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { FiMenu, FiX, FiFileText, FiSend } from 'react-icons/fi';
import { useScrollProgress } from '../hooks/useScrollProgress';

interface NavbarProps {
  theme?: string;
  onToggleTheme?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollProgress = useScrollProgress();
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'What I Do', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'GitHub', href: '#github' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }

    const scrollToTarget = () => {
      if (href === '#' || href === '') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
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
    <>
      {/* Scroll Progress Bar at very top */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-200/50 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Bento Navbar */}
      <header className="fixed top-4 left-0 right-0 z-40 px-4 max-w-7xl mx-auto pointer-events-none">
        <nav className="pointer-events-auto flex items-center justify-between px-5 py-3 rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-md text-slate-900 transition-all">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, '#')}
            className="flex items-center gap-3 group hover:opacity-90 transition-opacity cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center font-bold text-sm text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              P
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-tight text-sm text-slate-900 group-hover:text-blue-600 transition-colors">
                Prajwal G N
              </span>
              <span className="text-[10px] font-mono text-slate-500 tracking-wider">
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200/80">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 rounded-lg transition-all cursor-pointer shadow-none hover:shadow-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons & Availability Status */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
              <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
              <span className="text-[10px] uppercase font-bold text-emerald-600 tracking-wider">Available for Projects</span>
            </div>

            <a
              href="#resume"
              onClick={(e) => handleNavClick(e, '#resume')}
              className="backdrop-blur-md bg-white/80 hover:bg-white border border-slate-200/90 text-xs font-semibold px-4 py-1.5 rounded-xl text-slate-800 shadow-sm transition-all cursor-pointer flex items-center gap-1.5 hover:scale-[1.02] active:scale-[0.98]"
            >
              <FiFileText className="w-3.5 h-3.5 text-blue-600" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="backdrop-blur-md bg-blue-600/90 hover:bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-xl border border-blue-400/30 shadow-md shadow-blue-600/20 transition-all cursor-pointer flex items-center gap-1.5 hover:scale-[1.02] active:scale-[0.98]"
            >
              <FiSend className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-800 rounded-xl backdrop-blur-md bg-white/80 hover:bg-white border border-slate-200/90 shadow-sm transition-all cursor-pointer"
            >
              {mobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Slide-down Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              className="pointer-events-auto mt-2 p-5 rounded-2xl bg-white/98 backdrop-blur-2xl border border-slate-200 shadow-xl space-y-4 md:hidden"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map(link => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-transparent hover:border-slate-200 transition-all"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
                <a
                  href="#resume"
                  onClick={(e) => handleNavClick(e, '#resume')}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-slate-800 backdrop-blur-md bg-white/80 hover:bg-white rounded-xl border border-slate-200/90 shadow-sm transition-all"
                >
                  <FiFileText className="w-4 h-4 text-blue-600" /> View Resume
                </a>

                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white backdrop-blur-md bg-blue-600/90 hover:bg-blue-600 rounded-xl border border-blue-400/30 shadow-md shadow-blue-500/20 transition-all"
                >
                  <FiSend className="w-4 h-4" /> Contact Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
