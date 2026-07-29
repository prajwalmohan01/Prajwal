import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ToastContainer, ToastMessage } from './components/Toast';
import { Home } from './pages/Home';
import { ProjectDetails } from './pages/ProjectDetails';
import { useTheme } from './hooks/useTheme';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

interface PageWrapperProps {
  children: React.ReactNode;
  key?: string;
}

function PageWrapper({ children }: PageWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes({ addToast }: { addToast: (title: string, description?: string, type?: 'success' | 'error' | 'info') => void }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route
          path="/"
          element={
            <PageWrapper key={location.pathname}>
              <Home onToast={addToast} />
            </PageWrapper>
          }
        />
        <Route
          path="/project/:id"
          element={
            <PageWrapper key={location.pathname}>
              <ProjectDetails onToast={addToast} />
            </PageWrapper>
          }
        />
        <Route
          path="*"
          element={
            <PageWrapper key={location.pathname}>
              <Home onToast={addToast} />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const { theme, toggleTheme } = useTheme();

  // Toast State
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToast = (title: string, description?: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { id, title, description, type }]);

    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  const dismissToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-slate-100 font-sans antialiased relative overflow-x-hidden transition-colors duration-300">
        {/* Background Grid */}
        <div className="fixed inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 dark:opacity-30 pointer-events-none z-0" />

        {/* Floating Navbar */}
        <Navbar
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        {/* Main Content Viewport */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 min-h-[calc(100vh-200px)] py-6">
          <AnimatedRoutes addToast={addToast} />
        </main>

        {/* Footer */}
        <Footer />

        <ToastContainer toasts={toasts} onDismiss={dismissToast} />
      </div>
    </Router>
  );
}
