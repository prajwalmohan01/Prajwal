import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onOpenLightbox?: (url: string, caption?: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenLightbox }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col justify-between px-4 py-5 sm:px-5 sm:py-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="space-y-4 relative z-10">
        {/* Project Thumbnail Image with Lightbox trigger */}
        <div
          onClick={() => onOpenLightbox?.(project.image, `${project.title} - ${project.shortDescription}`)}
          className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-black/60 border border-slate-800 cursor-pointer group/img"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
            referrerPolicy="no-referrer"
          />

          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-xs font-semibold text-white px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 shadow-lg">
              Click to Zoom
            </span>
          </div>

          {/* Status Badge */}
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-black/70 backdrop-blur-md border border-slate-700 text-blue-400">
            {project.status}
          </div>
        </div>

        {/* Title & Category */}
        <div>
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="px-2.5 py-0.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase rounded-full tracking-wider">{project.category}</span>
          </div>

          <Link to={`/project/${project.id}`} className="block group/title">
            <h3 className="text-xl font-bold text-white group-hover/title:text-blue-400 transition-colors line-clamp-1">
              {project.title}
            </h3>
          </Link>

          <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.techStack.slice(0, 4).map(tech => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-medium text-slate-300 bg-slate-800/80 border border-slate-700/60"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-1 rounded-lg text-[10px] font-mono text-slate-400 bg-slate-800/80 border border-slate-700/60">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Action Buttons Footer */}
      <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between gap-2 relative z-10">
        <div className="flex items-center gap-2">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all cursor-pointer"
              title="Live Demo"
            >
              <ExternalLink className="w-4 h-4 text-blue-400" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all cursor-pointer"
              title="GitHub Source Code"
            >
              <Github className="w-4 h-4 text-purple-400" />
            </a>
          )}
        </div>

        <Link
          to={`/project/${project.id}`}
          className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-all group/btn cursor-pointer"
        >
          <span>See Project Details</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};
