import React from 'react';
import { motion } from 'motion/react';
import { Skill } from '../data/skills';
import {
  Code,
  Palette,
  FileCode,
  Atom,
  Terminal,
  Server,
  Cpu,
  Layout,
  Database,
  GitBranch,
  Github,
  CheckCircle2,
  Coffee
} from 'lucide-react';

interface SkillCardProps {
  skill: Skill;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-5 h-5 text-orange-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-blue-400" />;
      case 'FileCode': return <FileCode className="w-5 h-5 text-amber-400" />;
      case 'Atom': return <Atom className="w-5 h-5 text-cyan-400 animate-spin-slow" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-blue-500" />;
      case 'Server': return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-slate-300" />;
      case 'Layout': return <Layout className="w-5 h-5 text-purple-400" />;
      case 'Database': return <Database className="w-5 h-5 text-indigo-400" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-red-400" />;
      case 'Github': return <Github className="w-5 h-5 text-pink-400" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-teal-400" />;
      case 'Coffee': return <Coffee className="w-5 h-5 text-amber-600" />;
      default: return <Code className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm transition-all space-y-3"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            {renderIcon(skill.iconName)}
          </div>
          <div>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white">{skill.name}</h4>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono uppercase tracking-wider">{skill.category}</span>
          </div>
        </div>

        <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-lg border border-blue-500/20">
          {skill.percentage}%
        </span>
      </div>

      <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-tight">{skill.description}</p>

      {/* Progress Bar */}
      <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
        />
      </div>
    </motion.div>
  );
};
