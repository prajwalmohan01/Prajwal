import React, { useState, useEffect } from 'react';
import {
  FiExternalLink,
  FiBookOpen,
  FiUsers,
  FiUserCheck,
  FiMapPin,
  FiRefreshCw
} from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa6';
import { HiSparkles } from 'react-icons/hi';
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

export const GithubProfile: React.FC = () => {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const username = 'prajwalmohan01';

  const fetchGithubData = async () => {
    setLoading(true);
    try {
      const userRes = await fetch(`https://api.github.com/users/${username}`);
      if (userRes.ok) {
        const userData = await userRes.json();
        setUser(userData);
      }
    } catch {
      // Graceful fallback
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
          <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest flex items-center gap-1.5">
            <HiSparkles className="w-3 h-3 text-cyan-600" /> Open Source & Profile
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
            Live GitHub Profile
          </h2>
        </div>

        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-md bg-white/80 hover:bg-white text-slate-800 text-xs font-semibold border border-slate-200/90 shadow-sm transition-all w-fit cursor-pointer hover:border-slate-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          <FaGithub className="w-4 h-4 text-slate-900" />
          <span>@{username}</span>
          <FiExternalLink className="w-3 h-3 text-slate-500" />
        </a>
      </div>

      {/* Main GitHub Profile Banner Card */}
      <div className="px-6 py-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative shrink-0">
              <img
                src={user?.avatar_url || `https://github.com/${username}.png`}
                alt={user?.name || PERSONAL_INFO.name}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 border-blue-500/30 object-cover shadow-sm"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://github.com/${username}.png`;
                }}
              />
              <span className="absolute -bottom-1 -right-1 p-1.5 rounded-lg bg-blue-600 text-white text-[10px]">
                <FaGithub className="w-3.5 h-3.5" />
              </span>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  {user?.name || PERSONAL_INFO.name}
                </h3>
                <button
                  type="button"
                  onClick={fetchGithubData}
                  disabled={loading}
                  title="Refresh GitHub data"
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <FiRefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-blue-500' : ''}`} />
                </button>
              </div>
              <p className="text-xs text-blue-600 font-mono">@{user?.login || username}</p>
              <p className="text-xs text-slate-500 flex items-center gap-1.5 pt-0.5">
                <FiMapPin className="w-3.5 h-3.5 text-slate-400" />
                {user?.location || 'Bengaluru, India'}
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-3 w-full md:w-auto md:min-w-[340px]">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
              <div className="flex items-center justify-center gap-1 text-blue-600 mb-0.5">
                <FiBookOpen className="w-3.5 h-3.5" />
                <span className="text-base font-bold text-slate-900 font-mono">
                  {user?.public_repos ?? '--'}
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-medium">Repositories</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
              <div className="flex items-center justify-center gap-1 text-purple-600 mb-0.5">
                <FiUsers className="w-3.5 h-3.5" />
                <span className="text-base font-bold text-slate-900 font-mono">
                  {user?.followers ?? '--'}
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-medium">Followers</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
              <div className="flex items-center justify-center gap-1 text-cyan-600 mb-0.5">
                <FiUserCheck className="w-3.5 h-3.5" />
                <span className="text-base font-bold text-slate-900 font-mono">
                  {user?.following ?? '--'}
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-medium">Following</span>
            </div>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-3xl">
          {user?.bio || PERSONAL_INFO.about}
        </p>

        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <span className="text-xs text-slate-500 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            Live GitHub Profile Connected
          </span>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl backdrop-blur-md bg-blue-600/90 hover:bg-blue-600 text-white border border-blue-400/30 text-xs font-bold transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto hover:scale-[1.02] active:scale-[0.98]"
          >
            <FaGithub className="w-4 h-4" />
            <span>Visit @{username} on GitHub</span>
            <FiExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
