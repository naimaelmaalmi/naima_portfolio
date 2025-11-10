import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter, Box, Layers, GitBranch, Cloud, Code } from 'lucide-react';

// Données de Projets basées sur le CV de Naima El Maalmi + CASPlatform
const PROJECTS_DATA = [
  {
    title: 'CASPlatform - Social Affairs Club Management',
    description: "Web application designed to streamline the activities of the Social Affairs Club, focusing on internal coordination, event planning, and donation tracking. (Full Stack Java/Angular architecture).",
    category: 'fullstack',
    technologies: ['Spring Boot', 'Angular', 'MySQL', 'Java', 'TypeScript'],
    image: '/assets/jobit.png',
    githubLink: 'https://github.com/naimaelmaalmi/Cas-MS-Platform',
    websiteLink: null,
    type: 'Academic Project',
  },
  {
    title: 'Kubernetes Administration (PFA - Orange Maroc)',
    description: "Deployment, administration, and security of a multi-node Kubernetes cluster, including high availability, scalability, and RBAC security policies. Full management of K8s architecture.",
    category: 'devops',
    technologies: ['Kubernetes (K8s)', 'GCP', 'etcd', 'Helm', 'Kustomize', 'RBAC'],
    image: '/assets/k8s.png',
    githubLink: null, // Removed GitHub icon
    websiteLink: null,
    type: 'Final Year Project',
  },
  {
    title: 'INEAlumni - Full Stack Platform for INPT',
    description: "Full-stack development of a networking application for the INPT community (students and alumni), integrating Spring Boot/ReactJS. DevOps practices applied for testing and deployment.",
    category: 'fullstack',
    technologies: ['Spring Boot', 'ReactJS', 'Java', 'PostgreSQL', 'Docker', 'GitHub', 'Jira'],
    image: '/assets/inepeoject.jpg',
    githubLink: null, // Removed GitHub icon
    websiteLink: null,
    type: 'Academic Project',
    status: 'In Progress',
  },
  {
    title: 'DevSecOps Pipeline (Minikube & Terraform)',
    description: "Implemented Infrastructure as Code (IaC) using **Terraform** for deploying **Kubernetes (Minikube)**, along with a CI/CD/GitOps pipeline (GitHub Actions) integrating security with **Trivy** and secrets management with **Vault**.",
    category: 'devops',
    technologies: ['Terraform', 'Kubernetes', 'GitHub Actions', 'Vault', 'Trivy', 'Prometheus', 'Grafana'],
    image: '/assets/image1.png',
    githubLink: 'https://github.com/naimaelmaalmi/pitstop-customer',
    websiteLink: null,
    type: 'Personal DevOps Project',
  },
  {
    title: 'Private Cloud OpenStack (Deployment & Administration)',
    description: "Complete IaaS platform setup by configuring critical services (Keystone, Nova, Neutron) and ensuring data persistence with MariaDB and RabbitMQ.",
    category: 'devops',
    technologies: ['OpenStack', 'Linux/Bash', 'KVM', 'MariaDB', 'RabbitMQ'],
    image: '/assets/image.png',
    githubLink: null, // Removed GitHub icon
    websiteLink: null,
    type: 'Academic Project',
  },
  {
    title: 'Personal Portfolio - React & TypeScript',
    description: "A modern personal portfolio website built with React and TypeScript, showcasing projects, skills, and professional experience. Designed with Framer Motion animations and a terminal-inspired interface for a unique developer touch.",
    category: 'fullstack',
    technologies: ['ReactJS', 'TypeScript', 'Framer Motion', 'TailwindCSS', 'Vite'],
    image: '/assets/projett.png',
    githubLink: 'https://github.com/naimaelmaalmi/naima_portfolio',
    websiteLink: 'https://my-portfolio-naima.netlify.app',
    type: 'Personal Project',
  },
];


const PROJECTS_BY_CATEGORY = {
  all: PROJECTS_DATA,
  devops: PROJECTS_DATA.filter(p => p.category === 'devops'),
  fullstack: PROJECTS_DATA.filter(p => p.category === 'fullstack'),
};


export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects', count: PROJECTS_BY_CATEGORY.all.length, icon: Layers },
    { id: 'devops', label: 'DevOps & Cloud', count: PROJECTS_BY_CATEGORY.devops.length, icon: GitBranch },
    { id: 'fullstack', label: 'Full-Stack Dev', count: PROJECTS_BY_CATEGORY.fullstack.length, icon: Code },
  ];

  const getProjects = () => {
    return PROJECTS_BY_CATEGORY[activeFilter as keyof typeof PROJECTS_BY_CATEGORY] || PROJECTS_BY_CATEGORY.all;
  };

  return (
    <div className="min-h-screen bg-[#0a0014] relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(#8AE234 1px, transparent 1px),
            linear-gradient(90deg, #8AE234 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Terminal Header */}
      <section className="relative z-10 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#1e1e1e] rounded-t-lg border-2 border-[#00D9A3] overflow-hidden"
          >
            {/* Terminal Window Controls */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#2d2d2d] border-b border-[#00D9A3]/30">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
              </div>
              <span className="ml-4 text-xs text-gray-400 font-mono">naima@devops:~/projects</span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#8AE234]">naima@devops</span>
                  <span className="text-[#C678DD]">MINGW64</span>
                  <span className="text-[#FFA500]">~/projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00FF00]">$</span>
                  <span className="text-[#00D9A3]">docker ps -a --format "table"</span>
                </div>
                <div className="mt-4 text-gray-300 pl-4 border-l-2 border-[#8AE234]/30">
                  <p className="text-[#C678DD] mb-2"># Listing deployed projects and applications</p>
                  <p>
                    Showcasing <span className="text-[#00D9A3]">real-world implementations</span> of 
                    <span className="text-[#FFA500]"> DevOps automation</span>, and 
                    <span className="text-[#C678DD]"> full-stack development</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Terminal Footer */}
            <div className="bg-[#007acc] text-white px-4 py-2 text-xs font-mono flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span>⚡ All Containers Running</span>
                <span className="text-[#8AE234]">● {PROJECTS_DATA.length} Projects Active</span>
              </div>
              <span>Status: Production Ready</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs - Docker-compose style */}
      <section className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {filters.map((filter) => {
              const IconComponent = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-lg font-mono font-medium transition-all duration-300 border-2 ${
                    activeFilter === filter.id
                      ? 'bg-[#8AE234] text-[#0a0014] border-[#8AE234] shadow-[0_0_30px_rgba(138,226,52,0.5)]'
                      : 'bg-[#2C001E] text-gray-300 border-[#C678DD]/20 hover:border-[#00D9A3] hover:text-[#00D9A3]'
                  }`}
                >
                  <IconComponent size={18} />
                  <span>{filter.label}</span>
                  <span className={`text-xs px-2 py-1 rounded-full font-bold ${
                    activeFilter === filter.id 
                      ? 'bg-[#0a0014] text-[#8AE234]' 
                      : 'bg-[#1a0a2e] text-gray-400'
                  }`}>
                    {filter.count}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid - Container Style */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {getProjects().map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-[#1e1e1e] border-2 border-[#C678DD]/20 rounded-lg overflow-hidden hover:border-[#00D9A3] hover:shadow-[0_0_30px_rgba(0,217,163,0.3)] transition-all duration-300 group"
              >
                {/* Container Header */}
                <div className="bg-[#2d2d2d] px-4 py-3 border-b border-[#C678DD]/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full animate-pulse ${
                      project.category === 'devops' ? 'bg-[#8AE234]' : 'bg-[#00D9A3]'
                    }`}></div>
                    <span className="font-mono text-xs text-gray-400">
                      {project.category === 'devops' ? 'devops/' : 'app/'}container
                    </span>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-mono font-bold ${
                    project.category === 'devops' 
                      ? 'bg-[#8AE234]/20 text-[#8AE234]'
                      : 'bg-[#00D9A3]/20 text-[#00D9A3]'
                  }`}>
                    {project.type}
                  </span>
                </div>

                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0014] via-transparent to-transparent opacity-60" />
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  {/* Title */}
                  <h3 className="font-mono text-lg font-bold text-white group-hover:text-[#8AE234] transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-[#1a0a2e] text-gray-300 text-xs rounded border border-[#C678DD]/20 hover:border-[#8AE234]/50 transition-colors font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-[#1a0a2e] text-[#FFA500] text-xs rounded border border-[#FFA500]/30 font-mono">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Container Footer - Action Buttons */}
                <div className="bg-[#0a0014] px-6 py-4 border-t border-[#C678DD]/20 flex items-center gap-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-[#8AE234] transition-colors group/btn font-mono text-sm"
                  >
                    <Github size={16} className="group-hover/btn:scale-110 transition-transform" />
                    <span>Code</span>
                  </a>
                  
                  {project.websiteLink && (
                    <a
                      href={project.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-[#00D9A3] transition-colors group/btn font-mono text-sm"
                    >
                      <ExternalLink size={16} className="group-hover/btn:scale-110 transition-transform" />
                      <span>Live</span>
                    </a>
                  )}

                  <div className="ml-auto">
                    <span className="text-xs text-[#8AE234] font-mono">● Running</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {getProjects().length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24 bg-[#1e1e1e] border-2 border-[#C678DD]/20 rounded-lg"
            >
              <div className="font-mono text-6xl text-[#C678DD] mb-4">404</div>
              <div className="text-gray-400 font-mono">No containers found in this namespace.</div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Terminal-style project summary */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#1e1e1e] border-2 border-[#8AE234] rounded-lg overflow-hidden shadow-[0_0_50px_rgba(138,226,52,0.3)]"
          >
            {/* Terminal Header */}
            <div className="bg-[#2d2d2d] px-6 py-4 border-b border-[#8AE234]/30">
              <div className="flex items-center gap-3">
                <Box className="text-[#8AE234]" size={20} />
                <span className="font-mono text-sm text-white">Project Statistics</span>
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-8 font-mono">
              <div className="space-y-4">
                <div className="text-[#00D9A3] mb-4">
                  $ cat project_summary.json
                </div>
                
                <div className="bg-[#0a0014] p-6 rounded-lg border border-[#C678DD]/20 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Total Projects:</span>
                    <span className="text-[#8AE234] font-bold text-xl">{PROJECTS_DATA.length}</span>
                  </div>
                  <div className="h-px bg-[#C678DD]/20"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">DevOps Projects:</span>
                    <span className="text-[#8AE234] font-bold text-xl">{PROJECTS_BY_CATEGORY.devops.length}</span>
                  </div>
                  <div className="h-px bg-[#C678DD]/20"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Full-Stack Projects:</span>
                    <span className="text-[#00D9A3] font-bold text-xl">{PROJECTS_BY_CATEGORY.fullstack.length}</span>
                  </div>
                  <div className="h-px bg-[#C678DD]/20"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Technologies Used:</span>
                    <span className="text-[#FFA500] font-bold text-xl">
                      {new Set(PROJECTS_DATA.flatMap(p => p.technologies)).size}+
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#C678DD]/20 text-sm">
                  <div className="flex items-start gap-2 text-gray-400">
                    <span className="text-[#00D9A3]">$</span>
                    <span>echo "<span className="text-[#8AE234]">Each project demonstrates real-world implementation of cloud-native architecture and modern development practices</span>"</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Terminal Footer */}
            <div className="bg-[#007acc] px-6 py-2 text-xs font-mono flex items-center justify-between text-white">
              <span>Last compiled: {new Date().toLocaleTimeString()}</span>
              <span className="text-[#8AE234]">● Success</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
     {/* CTA Section - Recherche PFE */}
<section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-4xl mx-auto">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-[#1e1e1e] border-2 border-[#C678DD]/20 rounded-lg overflow-hidden hover:border-[#8AE234] transition-all duration-300"
    >
      {/* CTA Header */}
      <div className="bg-[#2d2d2d] px-6 py-4 border-b border-[#C678DD]/20">
        <div className="flex items-center gap-3">
          <GitBranch className="text-[#8AE234]" size={20} />
          <span className="font-mono text-sm text-white">Looking for PFE Internship</span>
        </div>
      </div>

      {/* CTA Content */}
      <div className="p-12 text-center">
        <h2 className="font-mono text-2xl md:text-3xl font-bold text-white mb-4">
          <span className="text-[#00D9A3]">git clone</span> PFE-Opportunity
        </h2>
        <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
          Currently seeking a <span className="text-[#8AE234] font-bold">6-month Final Year Internship (PFE)</span> to apply my 
          <span className="text-[#00D9A3]"> DevOps</span> and 
          <span className="text-[#C678DD]"> Full-Stack development</span> skills on impactful projects.
          Ready to contribute from <span className="text-[#FFA500] font-bold">January 2026</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* ✅ Fixed links below */}
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#8AE234] text-[#0a0014] font-bold rounded-lg hover:bg-[#00D9A3] transition-all duration-300 font-mono shadow-[0_0_30px_rgba(138,226,52,0.5)] hover:shadow-[0_0_40px_rgba(0,217,163,0.6)]"
          >
            <ExternalLink className="h-5 w-5" />
            <span>Contact Me</span>
          </a>

          <a
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#C678DD] text-[#C678DD] hover:border-[#8AE234] hover:text-[#8AE234] hover:bg-[#8AE234]/10 font-bold rounded-lg transition-all duration-300 font-mono"
          >
            <Github className="h-5 w-5" />
            <span>cat my_resume.pdf</span>
          </a>
        </div>
      </div>

      {/* CTA Footer */}
      <div className="bg-[#0a0014] px-6 py-3 border-t border-[#C678DD]/20 font-mono text-xs flex items-center justify-center text-gray-500">
        <span className="text-[#8AE234]">STATUS:</span>
        <span className="ml-2">🎓 Actively seeking PFE internship opportunities • Available from January 2026</span>
      </div>
    </motion.div>
  </div>
</section>

    </div>
  );
};