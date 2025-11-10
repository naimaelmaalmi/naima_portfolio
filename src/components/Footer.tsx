import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { CONTACT } from '../data/portfolio';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/naimaelmaalmi',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/naima-el-maalmi-36a795288',
      icon: Linkedin,
    },
    {
      name: 'Email',
      url: `mailto:${CONTACT.email}`,
      icon: Mail,
    },
  ];

  return (
    <footer className="relative bg-[#0a0014] border-t border-[#C678DD]/20 mt-24">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e]/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="flex flex-col items-center space-y-10">
          
          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-lg bg-[#2C001E] border border-[#C678DD]/30 text-gray-400 hover:border-[#00D9A3] hover:text-[#00D9A3] hover:shadow-[0_0_20px_rgba(0,217,163,0.3)] transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  aria-label={link.name}
                >
                  <IconComponent size={22} />
                </motion.a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-[#8AE234]/50 to-transparent"></div>

          {/* Copyright & Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center space-y-4"
          >
            <div className="font-mono text-sm">
              <p className="text-white mb-2">
                <span className="text-[#00D9A3]">Naima El Maalmi</span>
                <span className="text-gray-500 mx-3">|</span>
                <span className="text-[#8AE234]">DevOps & Cloud Engineer</span>
              </p>
              <p className="text-gray-400 text-xs">
                © {currentYear} • Crafted with 💚 and ☕
              </p>
            </div>

            {/* Status */}
            <div className="flex items-center justify-center gap-2 text-xs font-mono">
              <span className="w-2 h-2 bg-[#8AE234] rounded-full animate-pulse"></span>
              <span className="text-[#8AE234]">Available for opportunities</span>
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {['React', 'TypeScript', 'Tailwind CSS', 'Three.js'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="px-3 py-1 text-xs font-mono text-[#00D9A3] bg-[#2C001E]/50 border border-[#C678DD]/20 rounded-full hover:border-[#8AE234]/50 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

        </div>
      </div>
    </footer>
  );
};