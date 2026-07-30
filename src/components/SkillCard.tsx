import React from 'react';
import { motion } from 'motion/react';
import { Skill } from '../data/skills';
import {
  FiCode,
  FiFileText,
  FiTerminal,
  FiServer,
  FiCpu,
  FiLayout,
  FiDatabase,
  FiGitBranch,
  FiCheckCircle,
  FiCoffee
} from 'react-icons/fi';
import { FaAtom, FaGithub, FaPalette } from 'react-icons/fa6';
import { HiSparkles } from 'react-icons/hi';

interface SkillCardProps {
  skill: Skill;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <FiCode className="w-5 h-5 text-orange-400" />;
      case 'Palette': return <FaPalette className="w-5 h-5 text-blue-400" />;
      case 'FileCode': return <FiFileText className="w-5 h-5 text-amber-400" />;
      case 'Atom': return <FaAtom className="w-5 h-5 text-cyan-400 animate-spin-slow" />;
      case 'Sparkles': return <HiSparkles className="w-5 h-5 text-amber-400" />;
      case 'Terminal': return <FiTerminal className="w-5 h-5 text-blue-500" />;
      case 'Server': return <FiServer className="w-5 h-5 text-emerald-400" />;
      case 'Cpu': return <FiCpu className="w-5 h-5 text-slate-300" />;
      case 'Layout': return <FiLayout className="w-5 h-5 text-purple-400" />;
      case 'Database': return <FiDatabase className="w-5 h-5 text-indigo-400" />;
      case 'GitBranch': return <FiGitBranch className="w-5 h-5 text-red-400" />;
      case 'Github': return <FaGithub className="w-5 h-5 text-pink-400" />;
      case 'CheckCircle2': return <FiCheckCircle className="w-5 h-5 text-teal-400" />;
      case 'Coffee': return <FiCoffee className="w-5 h-5 text-amber-600" />;
      default: return <FiCode className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="p-4 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 shadow-sm transition-all space-y-3"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-slate-100 border border-slate-200">
            {renderIcon(skill.iconName)}
          </div>
          <div>
            <h4 className="font-bold text-sm text-slate-900">{skill.name}</h4>
            <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">{skill.category}</span>
          </div>
        </div>

        <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">
          {skill.percentage}%
        </span>
      </div>

      <p className="text-[11px] text-slate-600 leading-tight">{skill.description}</p>

      {/* Progress Bar */}
      <div className="w-full h-1.5 rounded-full bg-slate-100 border border-slate-200/60 overflow-hidden">
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
