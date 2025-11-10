import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/terminal', label: 'Explore in CLI' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1e1e1e]/95 backdrop-blur-md border-b-2 border-[#00D9A3]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 bg-gradient-to-br from-[#8AE234] to-[#00D9A3] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Terminal size={18} className="text-[#0a0014]" />
              </div>
              <div className="font-mono text-lg font-bold">
                <span className="text-[#8AE234]">naima</span>
                <span className="text-[#C678DD]">@</span>
                <span className="text-[#00D9A3]">portfolio</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative px-4 py-2 font-mono text-sm transition-all duration-300"
                >
                  <span
                    className={`${
                      isActive(item.path)
                        ? 'text-[#8AE234]'
                        : 'text-gray-400 hover:text-[#00D9A3]'
                    }`}
                  >
                    {item.label}
                  </span>
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8AE234] shadow-[0_0_10px_rgba(138,226,52,0.6)]"
                      initial={false}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Status Indicator - Desktop */}
            <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-[#0a0014] rounded-lg border border-[#8AE234]/30">
              <div className="w-2 h-2 bg-[#8AE234] rounded-full animate-pulse"></div>
              <span className="font-mono text-xs text-[#8AE234]">Online</span>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-400 hover:text-[#8AE234] hover:bg-[#0a0014] transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-[#0a0014] border-t border-[#C678DD]/20"
            >
              <div className="px-4 py-3 space-y-1">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg font-mono text-sm transition-all duration-200 ${
                      isActive(item.path)
                        ? 'text-[#8AE234] bg-[#8AE234]/10 border-l-4 border-[#8AE234]'
                        : 'text-gray-400 hover:text-[#00D9A3] hover:bg-[#1e1e1e]'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer */}
      <div className="h-16"></div>
    </>
  );
};