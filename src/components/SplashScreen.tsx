import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiCode } from 'react-icons/fi';

interface SplashScreenProps {
  onComplete?: () => void;
  duration?: number;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete, duration = 1800 }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(currentProgress);

      if (elapsed >= duration) {
        clearInterval(interval);
        setTimeout(() => {
          setIsVisible(false);
          if (onComplete) onComplete();
        }, 150);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [duration, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-50/95 backdrop-blur-2xl p-4 overflow-hidden select-none"
        >
          {/* Subtle Light Mode Background Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-blue-200/40 via-cyan-200/30 to-purple-200/30 rounded-full blur-3xl pointer-events-none" />

          {/* Clean Splash Screen Elements (No Card) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-xs flex flex-col items-center text-center space-y-6 px-4"
          >
            {/* Animated Logo Badge */}
            <div className="relative">
              <motion.div
                initial={{ scale: 0.5, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-blue-600 via-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl sm:text-3xl font-extrabold shadow-xl shadow-blue-500/25 border border-white/40"
              >
                P
              </motion.div>
              <div className="absolute -top-1 -right-1 p-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-blue-600">
                <FiCode className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Name & Title */}
            <div className="space-y-1">
              <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Prajwal G N
              </h1>
              <p className="text-[11px] font-mono uppercase tracking-widest text-blue-600 font-bold">
                Full Stack Web Developer
              </p>
            </div>

            {/* Progress Bar & Status */}
            <div className="w-full space-y-2 pt-2">
              <div className="w-full h-2 rounded-full bg-slate-100 border border-slate-200/80 overflow-hidden p-0.5 shadow-inner">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: 'linear' }}
                />
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono font-semibold text-slate-500 px-1">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
                  Loading Portfolio...
                </span>
                <span>{progress}%</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
