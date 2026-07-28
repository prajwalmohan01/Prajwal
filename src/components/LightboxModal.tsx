import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';

interface LightboxModalProps {
  imageUrl: string | null;
  caption?: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ imageUrl, caption, onClose }) => {
  if (!imageUrl) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer z-50"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center cursor-default"
        >
          <img
            src={imageUrl}
            alt={caption || 'Project Snapshot'}
            className="max-w-full max-h-[75vh] object-contain rounded-2xl border border-white/15 shadow-2xl"
            referrerPolicy="no-referrer"
          />

          {caption && (
            <div className="mt-4 px-6 py-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-white text-xs sm:text-sm font-medium text-center max-w-2xl">
              <span className="flex items-center justify-center gap-2">
                <ZoomIn className="w-4 h-4 text-blue-400" />
                {caption}
              </span>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
