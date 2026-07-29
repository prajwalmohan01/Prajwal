import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Github,
  ExternalLink,
  BookOpen,
  Users,
  UserCheck,
  Code2,
  MapPin,
  RefreshCw,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/info';

interface GithubUser {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
}

interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

export const GithubProfile: React.FC = () => {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const username = 'prajwalmohan01';

  const fetchGithubData = async () => {
    setLoading(true);
    setError(false);
    try {
      const [userRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`),
        fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
      ]);

      if (userRes.ok) {
        const userData = await userRes.json();
        setUser(userData);
      } else {
        setError(true);
      }

      if (reposRes.ok) {
        const reposData = await reposRes.json();
        setRepos(reposData);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGithubData();
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold tracking-widest flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-cyan-600 dark:text-cyan-400" /> Open Source & Code
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
            Live GitHub Profile
          </h2>
        </div>

        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700 transition-all w-fit cursor-pointer hover:border-slate-300 dark:hover:border-slate-600"
        >
          <Github className="w-4 h-4 text-slate-900 dark:text-white" />
          <span>@{username}</span>
          <ExternalLink className="w-3 h-3 text-slate-500 dark:text-slate-400" />
        </a>
      </div>

      {/* Main GitHub Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Profile Card */}
        <div className="lg:col-span-5 px-5 py-6 sm:px-6 sm:py-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-xl flex flex-col justify-between space-y-6">
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src={user?.avatar_url || `https://github.com/${username}.png`}
                  alt={user?.name || PERSONAL_INFO.name}
                  className="w-16 h-16 rounded-2xl border-2 border-blue-500/30 object-cover shadow-lg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://github.com/${username}.png`;
                  }}
                />
                <span className="absolute -bottom-1 -right-1 p-1 rounded-lg bg-blue-600 text-white text-[10px]">
                  <Github className="w-3 h-3" />
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {user?.name || PERSONAL_INFO.name}
                </h3>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-mono">@{user?.login || username}</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                  {user?.location || 'Bengaluru, India'}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {user?.bio || PERSONAL_INFO.about}
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-2.5 pt-2">
              <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-center">
                <div className="flex items-center justify-center gap-1 text-blue-600 dark:text-blue-400 mb-0.5">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span className="text-sm font-bold text-slate-900 dark:text-white font-mono">
                    {user?.public_repos ?? '--'}
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">Repositories</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-center">
                <div className="flex items-center justify-center gap-1 text-purple-600 dark:text-purple-400 mb-0.5">
                  <Users className="w-3.5 h-3.5" />
                  <span className="text-sm font-bold text-slate-900 dark:text-white font-mono">
                    {user?.followers ?? '--'}
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">Followers</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-center">
                <div className="flex items-center justify-center gap-1 text-cyan-600 dark:text-cyan-400 mb-0.5">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span className="text-sm font-bold text-slate-900 dark:text-white font-mono">
                    {user?.following ?? '--'}
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">Following</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <span className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Live GitHub Data
            </span>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
            >
              <span>View Profile</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Right Repositories & Activity */}
        <div className="lg:col-span-7 px-5 py-6 sm:px-6 sm:py-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md dark:shadow-xl space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Recent GitHub Repositories
                </h3>
              </div>

              <button
                type="button"
                onClick={fetchGithubData}
                disabled={loading}
                title="Refresh GitHub data"
                className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-blue-600 dark:text-blue-400' : ''}`} />
              </button>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/40 animate-pulse space-y-2">
                    <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-2/3" />
                    <div className="h-3 bg-slate-200/80 dark:bg-slate-700/60 rounded w-full" />
                    <div className="h-3 bg-slate-200/60 dark:bg-slate-700/40 rounded w-1/3 pt-2" />
                  </div>
                ))}
              </div>
            ) : repos.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {repos.slice(0, 4).map((repo) => (
                  <motion.a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/60 hover:border-blue-500/40 transition-all group flex flex-col justify-between space-y-2"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-bold text-xs text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                          {repo.name}
                        </span>
                        <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 shrink-0" />
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-2 mt-1">
                        {repo.description || 'No description provided.'}
                      </p>
                    </div>

                    {repo.language && (
                      <div className="flex items-center gap-3 text-[10px] text-slate-500 dark:text-slate-400 pt-1 font-mono">
                        <span className="flex items-center gap-1 text-slate-700 dark:text-slate-300">
                          <span className="w-2 h-2 rounded-full bg-blue-500" />
                          {repo.language}
                        </span>
                      </div>
                    )}
                  </motion.a>
                ))}
              </div>
            ) : (
              <div className="p-6 rounded-xl bg-slate-100/60 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/40 text-center text-xs text-slate-500 dark:text-slate-400">
                Visit GitHub profile directly to see all repositories and activity.
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>Explore full source code, commits & projects</span>
            <a
              href={`${PERSONAL_INFO.github}?tab=repositories`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-semibold text-xs"
            >
              All Repositories ({user?.public_repos ?? 'View'}) &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
