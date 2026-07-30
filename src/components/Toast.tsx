import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiCheckCircle, FiAlertCircle, FiInfo, FiX } from 'react-icons/fi';

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  type?: 'success' | 'error' | 'info';
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-md w-full px-4 pointer-events-none">
      <AnimatePresence>
        {toasts.map(toast => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto flex items-start gap-3 p-4 rounded-xl backdrop-blur-xl bg-white/95 border border-slate-200/90 shadow-xl text-slate-900"
          >
            <div className="mt-0.5 shrink-0">
              {toast.type === 'error' ? (
                <FiAlertCircle className="w-5 h-5 text-rose-600" />
              ) : toast.type === 'info' ? (
                <FiInfo className="w-5 h-5 text-cyan-600" />
              ) : (
                <FiCheckCircle className="w-5 h-5 text-emerald-600" />
              )}
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-slate-900">{toast.title}</h4>
              {toast.description && (
                <p className="text-xs text-slate-600 mt-0.5 line-clamp-2">{toast.description}</p>
              )}
            </div>

            <button
              onClick={() => onDismiss(toast.id)}
              className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors shrink-0"
              aria-label="Dismiss message"
            >
              <FiX className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
