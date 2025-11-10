import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Code2 } from 'lucide-react';
import { Grid3DBackground } from '../components/Grid3D';
import { Typewriter } from '../components/Typewriter';
import { SKILLS } from '../data/portfolio';

export const Home = () => {
  const HERO_CONTENT =
    "Engineering student at INPT specializing in DevOps Engineering, with a strong enthusiasm for Full Stack Development. Passionate about automation, software industrialization, and scalable cloud infrastructures. Currently seeking a Final Year Internship (PFE) starting January 2026 in DevOps to design, automate, and deploy reliable software systems.";

    const stats = [
  { label: 'Education', value: 'INPT – Engineering Cycle in DevOps & Cloud (2023 - Present)' },
  { label: 'Professional Experience', value: '2 Internships (Orange, Kazineuf)' },
  { label: 'Major Projects', value: '6 Academic & Personal Projects' },
  { label: 'DevOps Tools', value: 'Kubernetes, Docker, Terraform, GitHub Actions, Jenkins' },
  { label: 'Full Stack Technologies', value: 'React, Angular, Spring Boot, PostgreSQL, MySQL' },
];


  const featuredSkills = SKILLS.slice(0, 6);

  return (
    <div className="min-h-screen bg-[#0a0014] relative overflow-hidden">
      {/* 3D Grid Background */}
      <Grid3DBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-[#8AE234]/40 shadow-[0_0_30px_rgba(138,226,52,0.3)]">
                  <img
                    src="/assets/portfolio-removebg-preview.png"
                    alt="Naima El Maalmi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-2xl bg-[#8AE234]/10 blur-2xl -z-10"></div>
              </div>
            </motion.div>

            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-center lg:text-left"
            >
              {/* Terminal Header */}
              <div className="font-mono text-xl md:text-2xl font-bold tracking-wide">
                <span className="text-[#8AE234] mr-2">naima@devops</span>
                <span className="text-[#C678DD] mr-2">MINGW64</span>
                <span className="text-[#FFA500]">~/portfolio</span>
              </div>

              <div className="font-mono text-xl md:text-2xl font-bold tracking-wide mt-2">
                <span className="text-[#00FF00] mr-3">$</span>
                <span className="text-[#00D9A3]">cat about.txt</span>
              </div>

              {/* Name */}
              <motion.div
                className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-white">Naima</span>
                <span className="text-[#00D9A3] mx-2">|</span>
                <span className="text-[#8AE234]">El Maalmi</span>
              </motion.div>

              {/* Role */}
              <div className="font-mono text-xl md:text-2xl font-bold tracking-wide mt-2">
                <span className="text-[#FFA500]">~/role:</span>
                <span className="text-[#8AE234] ml-2">
                  <Typewriter text="Future DevOps & Cloud Engineer ☁️| Full Stack Enthusiast " delay={80} />
                </span>
                <span className="terminal-cursor ml-1 inline-block w-2 h-5 bg-[#8AE234] animate-pulse" />
              </div>

              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="font-mono text-sm md:text-base text-[#C678DD] italic"
              >
                <span className="text-[#FFA500]">// </span>
                "Bridging development and operations through automation and scalability ☁️"
              </motion.div>

              {/* About */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="text-lg md:text-xl text-gray-300 leading-relaxed"
              >
                {HERO_CONTENT}
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-8"
              >
                <Link
                  to="/projects"
                  className="group inline-flex items-center px-8 py-4 border-2 border-[#00D9A3] text-[#00D9A3] hover:bg-[#00D9A3] hover:text-[#0a0014] transition-all duration-200 font-semibold tracking-wide rounded-lg shadow-[0_0_20px_rgba(0,217,163,0.3)] hover:shadow-[0_0_30px_rgba(0,217,163,0.5)]"
                >
                  <Code2 className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  View Projects
                </Link>
                <Link
                  to="/contact"
                  className="group inline-flex items-center px-8 py-4 border-2 border-[#C678DD] bg-[#2C001E] text-gray-200 hover:border-[#8AE234] hover:text-[#8AE234] transition-all duration-200 font-semibold tracking-wide rounded-lg"
                >
                  <ExternalLink className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Contact Me
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative z-10 bg-gradient-to-b from-[#0a0014] to-[#1a0a2e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#1e1e1e] rounded-t-lg border border-[#C678DD]/20 overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-3 bg-[#2d2d2d] border-b border-[#C678DD]/20">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <span className="ml-4 text-xs text-gray-400 font-mono">career_stats.json</span>
            </div>

            <div className="p-6 font-mono text-sm">
              <div className="text-[#C678DD]">{"{"}</div>
              <div className="pl-4 space-y-2">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15 }}
                    viewport={{ once: true }}
                    className="group hover:bg-[#2d2d2d] p-2 rounded transition-all cursor-pointer"
                  >
                    <span className="text-[#00D9A3]">"{stat.label.toLowerCase().replace(/\s+/g, '_')}"</span>
                    <span className="text-white">: </span>
                    <span className="text-[#FFA500]">"{stat.value}"</span>
                    <span className="text-white">,</span>
                    <span className="ml-4 text-[#6A9955] opacity-0 group-hover:opacity-100 transition-opacity">
                      // ✓ Verified
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="text-[#C678DD]">{"}"}</div>
            </div>
          </motion.div>

          <div className="bg-[#007acc] text-white px-4 py-2 rounded-b-lg text-xs font-mono flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span>⚡ Production Ready</span>
              <span className="text-[#8AE234]">● DevOps Pipeline Active</span>
            </div>
            <span>Ln 1, Col 1</span>
          </div>
        </div>
      </section>

      {/* Featured Skills Section - Kubernetes Dashboard Style */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Dashboard Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-mono text-3xl md:text-4xl font-bold text-white mb-2">
                  <span className="text-[#00D9A3]">kubectl</span> get technologies
                </h2>
                <p className="text-gray-400 font-mono text-sm">
                  <span className="text-[#8AE234]">STATUS:</span> All systems operational
                </p>
              </div>
              <div className="hidden md:flex items-center gap-2 text-xs font-mono">
                <span className="px-3 py-1 bg-[#8AE234]/20 text-[#8AE234] rounded-full">● READY</span>
                <span className="px-3 py-1 bg-[#00D9A3]/20 text-[#00D9A3] rounded-full">6/19 PODS</span>
              </div>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-6 gap-4 px-4 py-3 bg-[#1a0a2e] rounded-lg border border-[#C678DD]/20 font-mono text-xs text-gray-400 uppercase tracking-wider mb-4">
              <div className="col-span-2">Name</div>
              <div>Status</div>
              <div>Uptime</div>
              <div>Version</div>
              <div className="text-right">Ready</div>
            </div>
          </motion.div>

          {/* Skills Grid - Table Style */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {featuredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="grid grid-cols-6 gap-4 px-4 py-4 bg-[#2C001E] border border-[#C678DD]/20 rounded-lg hover:border-[#00D9A3] hover:shadow-[0_0_20px_rgba(0,217,163,0.2)] transition-all duration-300 group cursor-pointer"
              >
                <div className="col-span-2 flex items-center gap-3">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-6 h-6 filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                  <span className="font-mono text-white font-semibold">{skill.name}</span>
                </div>
                <div className="flex items-center">
                  <span className="flex items-center gap-2 text-[#8AE234] text-sm font-mono">
                    <span className="w-2 h-2 bg-[#8AE234] rounded-full animate-pulse"></span>
                    Running
                  </span>
                </div>
                <div className="flex items-center text-gray-400 text-sm font-mono">
                  {Math.floor(Math.random() * 500) + 100}d
                </div>
                <div className="flex items-center text-[#00D9A3] text-sm font-mono">
                  v{(Math.random() * 10 + 1).toFixed(1)}
                </div>
                <div className="flex items-center justify-end">
                  <span className="px-2 py-1 bg-[#8AE234]/20 text-[#8AE234] rounded text-xs font-mono">
                    {index + 1}/1
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/skills"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-[#00D9A3] text-[#00D9A3] hover:bg-[#00D9A3] hover:text-[#0a0014] rounded-lg font-mono font-semibold transition-all duration-300 group"
            >
              <span>kubectl get --all-technologies</span>
              <ExternalLink className="h-4 w-4 group-hover:rotate-45 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Docker Container Style (Adapted for PFE Internship) */}
      <section className="py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Docker Container */}
            <div className="bg-[#1e1e1e] rounded-lg border-2 border-[#00D9A3] overflow-hidden shadow-[0_0_50px_rgba(0,217,163,0.3)]">
              {/* Container Header */}
              <div className="bg-[#2d2d2d] px-6 py-4 border-b border-[#00D9A3]/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-[#8AE234] rounded-full animate-pulse"></div>
                    <span className="font-mono text-sm text-[#8AE234]">PFE_INTERNSHIP: actively_searching</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                    <span className="px-2 py-1 bg-[#00D9A3]/20 text-[#00D9A3] rounded">Ready to Deploy</span>
                    <span>TYPE: PFE</span>
                  </div>
                </div>
              </div>

              {/* Container Body */}
              <div className="p-8 md:p-12">
                {/* Terminal Output Style */}
                <div className="font-mono space-y-4 mb-8">
                  <div className="text-gray-400 text-sm">
                    <span className="text-[#C678DD]">$</span> student.launch PFE_search_engine
                  </div>
                  <div className="text-[#8AE234] text-sm">
                    Scanning for high-impact PFE opportunities...
                  </div>
                  <div className="pl-4 space-y-2 text-sm">
                    <div className="text-[#00D9A3]">✓ Verified DevOps expertise.</div>
                    <div className="text-[#00D9A3]">✓ Strong motivation to learn.</div>
                    <div className="text-[#00D9A3]">✓ Capable of delivering a turnkey PFE project.</div>
                    <div className="text-[#FFA500]">⚡ Waiting for the production PFE environment.</div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="text-center space-y-6">
                  <h2 className="font-mono text-3xl md:text-4xl font-bold text-white">
                    <span className="text-[#00D9A3]">git clone</span> PFE-Opportunity
                  </h2>
                  
                  <div className="max-w-2xl mx-auto">
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                      I am currently an engineering student looking for a **Final Studies Internship (PFE)**.
                      I am ready to apply my DevOps/Full Stack skills to an ambitious project.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-[#8AE234] font-mono">
                      <span className="animate-pulse">●</span>
                      <span>PFE Internship • 6 Months • Full Stack • Automation</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                    <Link
                      to="/contact"
                      className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#00D9A3] text-[#0a0014] font-bold rounded-lg hover:bg-[#8AE234] transition-all duration-300 shadow-[0_0_30px_rgba(0,217,163,0.5)] hover:shadow-[0_0_40px_rgba(138,226,52,0.6)] font-mono overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <span>→</span>
                        <span>kubectl apply -f PFE-application.yaml</span>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#00D9A3] via-[#8AE234] to-[#00D9A3] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                    </Link>
                    
                    <a
                      href="/assets/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center px-8 py-4 border-2 border-[#C678DD] text-[#C678DD] hover:border-[#8AE234] hover:text-[#8AE234] hover:bg-[#8AE234]/10 font-bold rounded-lg transition-all duration-300 font-mono"
                    >
                      <ExternalLink className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                      <span>cat my_resume.pdf</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Container Footer - Logs */}
              <div className="bg-[#0a0014] px-6 py-3 border-t border-[#00D9A3]/30 font-mono text-xs">
                <div className="flex items-center justify-between text-gray-500">
                  <div className="flex items-center gap-4">
                    <span className="text-[#8AE234]">LOGS:</span>
                    <span>Last check: {new Date().toLocaleTimeString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#8AE234] rounded-full animate-pulse"></span>
                    <span className="text-[#8AE234]">Ready</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-4 -right-4 bg-[#8AE234] text-[#0a0014] px-4 py-2 rounded-full font-mono font-bold text-sm shadow-[0_0_20px_rgba(138,226,52,0.6)] animate-bounce">
              🎓 Looking for PFE Internship
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
