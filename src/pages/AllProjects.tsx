import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FiArrowLeft, FiSearch, FiCode, FiLayers } from 'react-icons/fi';
import { PROJECTS_DATA, Project } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';

interface AllProjectsProps {
  onToast?: (title: string, description?: string, type?: 'success' | 'error' | 'info') => void;
}

export const AllProjects: React.FC<AllProjectsProps> = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Machine Learning', 'Testing'];

  const filteredProjects = PROJECTS_DATA.filter(project => {
    const matchesCategory =
      selectedCategory === 'All' || project.filterCategory === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8 pt-20 pb-16">
      {/* Top Navigation & Header */}
      <div className="space-y-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-md bg-white/80 hover:bg-white border border-slate-200/90 text-slate-700 hover:text-slate-900 text-xs font-semibold shadow-sm transition-all group hover:scale-[1.02] active:scale-[0.98]"
        >
          <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-blue-600" />
          <span>Back to Portfolio Home</span>
        </Link>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pt-2">
          <div>
            <span className="text-xs text-blue-600 uppercase font-bold tracking-widest flex items-center gap-1.5">
              <FiLayers className="w-3.5 h-3.5" /> Full Showcase
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              All Projects
            </h1>
            <p className="text-sm text-slate-600 mt-1.5 max-w-2xl">
              Explore the complete collection of web applications, full-stack tools, open-source projects, and technical builds.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative min-w-[280px]">
            <FiSearch className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by title, tech stack..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 shadow-sm"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-bold backdrop-blur-md transition-all whitespace-nowrap cursor-pointer ${
                selectedCategory === category
                  ? 'bg-blue-600/90 hover:bg-blue-600 text-white border border-blue-400/30 shadow-md shadow-blue-500/20'
                  : 'bg-white/80 hover:bg-white border border-slate-200/90 text-slate-600 hover:text-slate-900 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16 px-6 rounded-3xl bg-white border border-slate-200 text-slate-600 shadow-sm space-y-3">
          <FiCode className="w-8 h-8 text-slate-400 mx-auto" />
          <h3 className="text-lg font-bold text-slate-900">No Projects Found</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            No projects matched your query "{searchQuery}". Try searching for popular stacks like React, Node.js, Python, or TypeScript.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
            }}
            className="px-4 py-2 text-xs font-semibold text-blue-600 backdrop-blur-md bg-blue-50/80 hover:bg-blue-100/90 border border-blue-200/80 rounded-xl transition-all shadow-sm cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};
