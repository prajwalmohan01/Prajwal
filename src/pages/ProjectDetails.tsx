import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  ChevronLeft,
  ExternalLink,
  Github,
  Code2,
  Gauge,
  CheckCircle2,
  Layers,
  Cpu,
  Sparkles,
  Share2,
  Calendar,
  ShieldCheck,
  Maximize2,
  Activity,
  Terminal,
  Database
} from 'lucide-react';
import { PROJECTS_DATA, Project } from '../data/projects';
import { LightboxModal } from '../components/LightboxModal';

interface ProjectDetailsProps {
  onToast?: (title: string, desc?: string, type?: 'success' | 'error' | 'info') => void;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ onToast }) => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'snapshots' | 'architecture' | 'process'>('overview');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxCaption, setLightboxCaption] = useState<string | undefined>(undefined);

  useEffect(() => {
    window.scrollTo(0, 0);
    const found = PROJECTS_DATA.find(p => p.id === id);
    if (found) {
      setProject(found);
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 space-y-4">
        <div className="p-4 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400">
          <Code2 className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Project Not Found</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md">
          The requested project page could not be located or has been updated.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-blue-600 text-white font-bold text-xs shadow-md hover:bg-blue-700 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      onToast?.('Link Copied!', 'Project URL copied to clipboard.', 'success');
    }
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Back Navigation Bar */}
      <div className="flex items-center justify-between pt-2">
        <Link
          to="/"
          className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-blue-400 text-xs sm:text-sm font-bold shadow-md hover:border-slate-700 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <div className="p-1 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          </div>
          <span>Go Back to All Projects</span>
        </Link>

        <button
          type="button"
          onClick={handleShare}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 text-xs sm:text-sm font-bold shadow-md transition-all cursor-pointer hover:scale-[1.02]"
        >
          <Share2 className="w-4 h-4 text-blue-400" />
          <span>Share Project</span>
        </button>
      </div>

      {/* Hero Banner Header */}
      <div className="relative rounded-2xl bg-slate-900 border border-slate-800 px-5 py-6 sm:px-6 sm:py-6 overflow-hidden shadow-xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 relative z-10">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              {project.status}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
            <Calendar className="w-4 h-4 text-slate-400" />
            <span>{project.timeline}</span>
          </div>
        </div>

        <div className="space-y-3 relative z-10">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {project.title}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Action Buttons & Quick Links */}
        <div className="flex flex-wrap items-center gap-3 pt-2 relative z-10">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Application Demo</span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-slate-700 font-bold text-xs sm:text-sm text-white shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Github className="w-4 h-4 text-purple-400" />
              <span>View Source Code</span>
            </a>
          )}
        </div>

        {/* Banner Preview Background Image */}
        <div
          onClick={() => setLightboxImage(project.bannerImage || project.image)}
          className="relative w-full aspect-[21/9] sm:aspect-[24/9] rounded-2xl overflow-hidden bg-black/60 border border-slate-800 cursor-pointer group"
        >
          <img
            src={project.bannerImage || project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="inline-flex items-center gap-2 text-xs font-bold text-white px-4 py-2 rounded-xl bg-black/70 backdrop-blur-md border border-white/20">
              <Maximize2 className="w-4 h-4 text-blue-400" />
              Click to view full banner snapshot
            </span>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
          <Code2 className="w-5 h-5 text-blue-400" />
          <div>
            <div className="text-xs font-bold text-white">{project.stats.linesOfCode}</div>
            <div className="text-[10px] text-slate-400">Lines of Code</div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
          <Gauge className="w-5 h-5 text-emerald-400" />
          <div>
            <div className="text-xs font-bold text-white">{project.stats.lighthouseScore}/100</div>
            <div className="text-[10px] text-slate-400">Lighthouse Score</div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-3">
          <Activity className="w-5 h-5 text-purple-400" />
          <div>
            <div className="text-xs font-bold text-white">{project.stats.commits}+</div>
            <div className="text-[10px] text-slate-400">Total Commits</div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-slate-800 gap-2 overflow-x-auto pb-1">
        {[
          { id: 'overview', label: 'Overview & Features', icon: Sparkles },
          { id: 'snapshots', label: `Snapshots & Gallery (${project.screenshots.length})`, icon: Maximize2 },
          { id: 'architecture', label: 'System Architecture', icon: Layers },
          { id: 'process', label: 'Development Process & Challenges', icon: Cpu }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: OVERVIEW & FEATURES */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Key Features */}
          <div className="lg:col-span-2 space-y-6">
            <div className="px-5 py-6 sm:px-6 sm:py-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                Key Features & Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 leading-relaxed font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Learnings */}
            {project.keyLearnings && (
              <div className="px-5 py-6 sm:px-6 sm:py-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 shadow-xl">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  Key Takeaways & Technical Insights
                </h3>
                <ul className="space-y-2">
                  {project.keyLearnings.map((learning, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                      <span>{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar Tech Stack & Info */}
          <div className="space-y-6">
            {/* Tech Stack List */}
            <div className="px-5 py-6 sm:px-6 sm:py-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
              <h3 className="text-sm font-bold text-white flex items-center gap-2 uppercase tracking-wider text-[11px] text-slate-400">
                <Terminal className="w-4 h-4 text-blue-400" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Future Roadmap */}
            {project.futureEnhancements && (
              <div className="px-5 py-6 sm:px-6 sm:py-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 shadow-xl">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider text-[11px] text-slate-400">
                  Future Roadmap
                </h3>
                <ul className="space-y-2">
                  {project.futureEnhancements.map((enhancement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="text-blue-400 font-bold">•</span>
                      <span>{enhancement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: SNAPSHOTS GALLERY */}
      {activeTab === 'snapshots' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Maximize2 className="w-5 h-5 text-blue-400" />
              Application Snapshots & Interface Gallery
            </h3>
            <span className="text-xs text-slate-400">Click any snapshot to enlarge</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.screenshots.map((shot, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => {
                  setLightboxImage(shot.url);
                  setLightboxCaption(shot.caption);
                }}
                className="group p-4 rounded-[2rem] bg-slate-900 border border-slate-800 hover:border-slate-700 shadow-xl cursor-pointer space-y-3 transition-all"
              >
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black/60 border border-slate-800">
                  <img
                    src={shot.url}
                    alt={shot.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-xs font-bold text-white px-3 py-1.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/20">
                      Zoom Snapshot
                    </span>
                  </div>
                </div>

                <div className="px-1 space-y-1">
                  <p className="text-xs font-bold text-white line-clamp-1">
                    {shot.caption}
                  </p>
                  <span className="text-[10px] text-slate-500 font-mono">
                    Snapshot #{idx + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: SYSTEM ARCHITECTURE */}
      {activeTab === 'architecture' && project.architecture && (
        <div className="px-5 py-6 sm:px-6 sm:py-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6 shadow-xl">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">
              System Blueprint
            </span>
            <h3 className="text-xl font-bold text-white">
              {project.architecture.title}
            </h3>
            <p className="text-xs text-slate-400">
              {project.architecture.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            {project.architecture.nodes.map((node, idx) => (
              <div
                key={node.id}
                className="p-5 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-3 relative"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase font-bold text-slate-400">
                    Node 0{idx + 1}
                  </span>
                  {node.type === 'client' && <Terminal className="w-4 h-4 text-blue-400" />}
                  {node.type === 'server' && <Cpu className="w-4 h-4 text-purple-400" />}
                  {node.type === 'database' && <Database className="w-4 h-4 text-emerald-400" />}
                  {node.type === 'ai' && <Sparkles className="w-4 h-4 text-amber-400" />}
                  {node.type === 'analytics' && <Gauge className="w-4 h-4 text-cyan-400" />}
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white">
                    {node.label}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {node.subtext}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: DEVELOPMENT PROCESS & CHALLENGES */}
      {activeTab === 'process' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Development Phases */}
          <div className="px-5 py-6 sm:px-6 sm:py-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-400" />
              Development Phases
            </h3>

            <div className="space-y-4 relative before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-800">
              {project.developmentProcess.map((proc, idx) => (
                <div key={idx} className="relative pl-8 space-y-1">
                  <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-blue-500 border-2 border-slate-900 -translate-x-1/2" />
                  <span className="text-[10px] font-mono font-bold text-blue-400 uppercase tracking-wider">
                    Phase 0{idx + 1}: {proc.phase}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {proc.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Challenges & Solutions */}
          <div className="px-5 py-6 sm:px-6 sm:py-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-purple-400" />
              Engineering Challenges & Solutions
            </h3>

            <div className="space-y-4">
              {project.challenges.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-2"
                >
                  <div className="text-xs font-bold text-rose-400">
                    Challenge: {item.challenge}
                  </div>
                  <div className="text-xs text-slate-300">
                    <span className="font-bold text-emerald-400">Solution: </span>
                    {item.solution}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Bottom Go Back Bar */}
      <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
        <Link
          to="/"
          className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Go Back to All Projects</span>
        </Link>

        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-xs font-semibold text-slate-400 hover:text-blue-400"
        >
          Back to Top ↑
        </a>
      </div>

      {/* Lightbox Component */}
      <LightboxModal
        imageUrl={lightboxImage}
        caption={lightboxCaption}
        onClose={() => {
          setLightboxImage(null);
          setLightboxCaption(undefined);
        }}
      />
    </div>
  );
};
