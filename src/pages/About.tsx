import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Code2 } from 'lucide-react';
import { Calendar, MapPin, Code, Zap, Terminal, Server, GitBranch, Database, Cloud, Shield, BookOpen, Users, Award } from 'lucide-react';

export const About = () => {
  const timeline = [
    {
      year: '2023 - Présent',
      title: 'Cycle d\'Ingénieur DevOps/Cloud',
      company: 'Institut National des Postes et Télécommunications (INPT)',
      location: 'Rabat, Maroc',
      description: 'Formation d\'ingénieur spécialisée en DevOps/Cloud. Recherche actuellement un stage PFE de 6 mois à partir de janvier 2026.',
      icon: Code,
      status: 'active',
    },
    {
      year: 'Juillet - Septembre 2025',
      title: 'Administratrice Kubernetes (PFA)',
      company: 'Orange Maroc',
      location: 'Casablanca, Maroc',
      description: 'Déploiement et administration d\'un cluster Kubernetes multi-nœuds. Maîtrise de l\'architecture Control Plane/Worker Nodes, gestion des objets API, procédures de sauvegarde etcd et politiques RBAC.',
      icon: Server,
      status: 'completed',
      technologies: 'GCP, Kubernetes, kubeadm, etcd, Helm, Kustomize, CNI, Ingress Controller, RBAC',
    },
    {
      year: 'Juillet - Septembre 2024',
      title: 'Développeuse Frontend',
      company: 'Kazineuf',
      location: 'Rabat, Maroc',
      description: 'Développement d\'une interface web 3D immersive pour le secteur de la construction avec Angular et TypeScript. Collaboration via GitLab pour la gestion du code et des processus CI/CD.',
      icon: GitBranch,
      status: 'completed',
      technologies: 'Angular, TypeScript, HTML, Tailwind CSS, GitLab',
    },
    {
      year: '2021 - 2023',
      title: 'Classes Préparatoires MP',
      company: 'CPGE - Charrif Al Idrissi',
      location: 'Taza, Maroc',
      description: 'Classes préparatoires en Mathématiques et Physique avec excellence académique.',
      icon: BookOpen,
      status: 'completed',
    },
  ];

  const projects = [
    {
      title: 'INEAlumni',
      type: 'Projet académique collaboratif',
      description: 'Plateforme Full Stack connectant étudiants et lauréats de l\'INPT. Développement backend, frontend et gestion collaborative via GitHub avec intégration de pratiques DevOps.',
      technologies: ['Spring Boot', 'ReactJS', 'Java', 'JavaScript', 'GitHub', 'Docker', 'PostgreSQL', 'Jira'],
      color: '#00D9A3',
    },
    {
      title: 'Chaîne DevSecOps pour Microservices',
      type: 'Projet DevOps personnel',
      description: 'Infrastructure as Code avec Terraform pour Kubernetes (Minikube), pipeline CI/CD/GitOps avec GitHub Actions, sécurité par Trivy et gestion des secrets par HashiCorp Vault.',
      technologies: ['Kubernetes', 'Docker', 'Terraform', 'GitHub Actions', 'Vault', 'Trivy', 'Prometheus', 'Grafana'],
      color: '#8AE234',
    },
    {
      title: 'Cloud Privé OpenStack',
      type: 'Projet académique DevSecOps',
      description: 'Mise en place complète d\'une plateforme IaaS en configurant les services critiques (Keystone, Nova, Neutron) et la persistance des données.',
      technologies: ['OpenStack', 'Keystone', 'Nova', 'Neutron', 'Linux/Bash', 'KVM', 'MariaDB', 'RabbitMQ'],
      color: '#C678DD',
    },
  ];

  const philosophyPoints = [
    {
      icon: Zap,
      title: 'Infrastructure as Code',
      description: 'Automatiser et versionner l\'infrastructure pour garantir reproductibilité et scalabilité.',
      color: '#8AE234',
    },
    {
      icon: Cloud,
      title: 'Cloud Native & Kubernetes',
      description: 'Concevoir des architectures cloud-first avec orchestration de conteneurs pour haute disponibilité.',
      color: '#00D9A3',
    },
    {
      icon: Shield,
      title: 'DevSecOps',
      description: 'Intégrer la sécurité dès la conception avec scans de vulnérabilités et gestion des secrets.',
      color: '#C678DD',
    },
  ];

  const skills = [
    { category: 'DevOps & Cloud', items: ['Linux', 'Kubernetes', 'Docker', 'Helm', 'Terraform', 'GitLab CI/CD', 'Prometheus', 'Grafana', 'AWS', 'GCP'] },
    { category: 'Développement', items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'Spring Boot', 'ReactJS', 'Angular', 'Node.js'] },
    { category: 'Fondamentaux', items: ['Algorithmes', 'Structures de données', 'Design Patterns', 'POO', 'Agile/SCRUM'] },
  ];

  const languages = [
    { name: 'Français', level: 'Professionnel', percentage: 90 },
    { name: 'Anglais', level: 'B2 (TOEIC)', percentage: 75 },
    { name: 'Arabe', level: 'Natif', percentage: 100 },
  ];

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
              <span className="ml-4 text-xs text-gray-400 font-mono">naima@devops:~/about</span>
            </div>
            
            {/* Terminal Content */}
            <div className="p-6 font-mono">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#8AE234]">naima@inpt</span>
                  <span className="text-[#C678DD]">MINGW64</span>
                  <span className="text-[#FFA500]">~/about</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00FF00]">$</span>
                  <span className="text-[#00D9A3]">cat professional_profile.md</span>
                </div>
                <div className="mt-4 text-gray-300 leading-relaxed space-y-3 pl-4 border-l-2 border-[#8AE234]/30">
                  <p className="text-[#C678DD]"># Professional Profile</p>
                  
                    Hello! I'm <span className="text-[#8AE234] font-bold">Naima El Maalmi</span>, 
                    a <span className="text-[#00D9A3]">DevOps-focused Engineering student</span>,  
enthusiastic about <span className="text-[#8AE234]">Full Stack Development</span>, 
turning infrastructure chaos into orchestrated harmony.
                  <p>
                    My journey blends a solid foundation in <span className="text-[#FFA500]">Full Stack Engineering </span> 
with a strong focus on <span className="text-[#8AE234]">DevOps practices</span>, 
including <span className="text-[#00D9A3]">Cloud Infrastructure</span>, 
<span className="text-[#C678DD]">CI/CD Automation</span>, and modern deployment strategies.
                  </p>
                  
                  
                  <p className="text-[#8AE234] font-bold">
                    → Currently seeking a 6-month PFE internship starting January 2026 🚀
                  </p>
                </div>
              </div>
            </div>

            {/* Terminal Footer */}
            <div className="bg-[#007acc] text-white px-4 py-2 text-xs font-mono flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span>⚡ Status: Available for PFE Internship (Jan 2026)</span>
                <span className="text-[#8AE234]">● Active</span>
              </div>
              <span className="flex items-center gap-2">
                <MapPin size={12} />
                Rabat, Morocco
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section - Academic Background & Professional Experience */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Academic Background */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="text-[#8AE234]" size={28} />
              <h2 className="font-mono text-2xl md:text-3xl font-bold text-white">
                <span className="text-[#FFA500]">ls</span> -la /education
              </h2>
            </div>

            <div className="space-y-6">
              {/* Engineering Cycle */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-[#1e1e1e] border-2 border-[#8AE234] rounded-lg overflow-hidden"
              >
                <div className="bg-[#2d2d2d] px-6 py-3 border-b border-[#8AE234]/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Code className="text-[#8AE234]" size={20} />
                    <span className="font-mono text-sm text-white">engineering_degree.sh</span>
                  </div>
                  <span className="px-3 py-1 bg-[#8AE234]/20 text-[#8AE234] rounded-full text-xs font-mono">
                    IN PROGRESS
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-xl text-[#8AE234] mb-2">Engineering Cycle, DevOps/Cloud</h3>
                      <p className="text-[#00D9A3] font-mono font-medium">
                        National Institute of Posts and Telecommunications (INPT)
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-sm font-mono text-gray-400 mb-1">
                        <Calendar size={14} />
                        <span>Sept. 2023 - Present</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-mono text-gray-400">
                        <MapPin size={14} />
                        <span>Rabat, Morocco</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    Currently pursuing an engineering degree specializing in DevOps and Cloud Infrastructure. 
                    Actively seeking a 6-month final year internship (PFE) starting January 2026.
                  </p>
                </div>
              </motion.div>

              {/* Preparatory Classes */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-[#1e1e1e] border border-[#00D9A3]/30 rounded-lg overflow-hidden"
              >
                <div className="bg-[#2d2d2d] px-6 py-3 border-b border-[#00D9A3]/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <BookOpen className="text-[#00D9A3]" size={20} />
                    <span className="font-mono text-sm text-white">prep_classes.sh</span>
                  </div>
                  <span className="px-3 py-1 bg-[#00D9A3]/20 text-[#00D9A3] rounded-full text-xs font-mono">
                    COMPLETED
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-xl text-white mb-2">Preparatory Classes, Mathematics & Physics (MP)</h3>
                      <p className="text-[#00D9A3] font-mono font-medium">
                        CPGE - Charrif Al Idrissi
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-sm font-mono text-gray-400 mb-1">
                        <Calendar size={14} />
                        <span>Sept. 2021 - July 2023</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-mono text-gray-400">
                        <MapPin size={14} />
                        <span>Taza, Morocco</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    Intensive two-year program in Mathematics and Physics, preparing for competitive entrance exams 
                    to top engineering schools in Morocco.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Professional Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <GitBranch className="text-[#00D9A3]" size={28} />
              <h2 className="font-mono text-2xl md:text-3xl font-bold text-white">
                <span className="text-[#FFA500]">git log</span> --work-experience
              </h2>
            </div>

            <div className="relative">
              {/* Git branch line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00D9A3] via-[#8AE234] to-[#C678DD]" />

              <div className="space-y-8">
                {/* Orange Internship */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative pl-20"
                >
                  <div className="absolute left-4 top-6 w-8 h-8 rounded-full flex items-center justify-center border-4 border-[#0a0014] z-10 bg-[#00D9A3]">
                    <Server size={16} className="text-[#0a0014]" />
                  </div>

                  <div className="bg-[#1e1e1e] border border-[#00D9A3]/30 rounded-lg p-6 hover:border-[#8AE234] transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-3">
                      <div className="font-mono text-[#FFA500] text-sm">
                        commit a7f3b2e
                      </div>
                      <span className="px-2 py-1 bg-[#00D9A3]/20 text-[#00D9A3] rounded text-xs font-mono">
                        LATEST
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm font-mono text-gray-400">
                        <Calendar size={14} />
                        <span>July - September 2025</span>
                      </div>
                      <h3 className="font-semibold text-xl text-white group-hover:text-[#8AE234] transition-colors">
                        Kubernetes Administrator (End-of-Year Project - PFA)
                      </h3>
                      <div className="flex items-start justify-between">
                        <div className="text-[#00D9A3] font-medium font-mono">Orange Morocco</div>
                        <div className="flex items-center gap-2 text-sm font-mono text-gray-400">
                          <MapPin size={14} />
                          <span>Casablanca, Morocco</span>
                        </div>
                      </div>
                      <p className="text-gray-400 leading-relaxed">
                        Deployed and administered a multi-node Kubernetes cluster. Mastered the architecture 
                        (Control Plane / Worker Nodes) and API objects to ensure high availability, scalability, 
                        and stability of containerized applications. Implemented etcd backup/restore procedures 
                        and configured RBAC security policies.
                      </p>
                      
                      <div className="mt-4 pt-4 border-t border-[#C678DD]/20">
                        <p className="text-xs text-gray-500 font-mono mb-2">Technologies:</p>
                        <div className="flex flex-wrap gap-2">
                          {['GCP', 'Kubernetes (K8s)', 'kubeadm', 'etcd', 'Helm', 'Kustomize', 'CNI', 'Ingress Controller', 'PV/PVC', 'RBAC'].map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-[#2C001E] border border-[#00D9A3]/20 rounded text-xs font-mono text-[#00D9A3]">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Kazineuf Internship */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative pl-20"
                >
                  <div className="absolute left-4 top-6 w-8 h-8 rounded-full flex items-center justify-center border-4 border-[#0a0014] z-10 bg-[#8AE234]">
                    <Code size={16} className="text-[#0a0014]" />
                  </div>

                  <div className="bg-[#1e1e1e] border border-[#00D9A3]/30 rounded-lg p-6 hover:border-[#8AE234] transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-3">
                      <div className="font-mono text-[#FFA500] text-sm">
                        commit 9d2c4f1
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm font-mono text-gray-400">
                        <Calendar size={14} />
                        <span>July - September 2024</span>
                      </div>
                      <h3 className="font-semibold text-xl text-white group-hover:text-[#8AE234] transition-colors">
                        Frontend Developer (Internship)
                      </h3>
                      <div className="flex items-start justify-between">
                        <div className="text-[#00D9A3] font-medium font-mono">Kazineuf</div>
                        <div className="flex items-center gap-2 text-sm font-mono text-gray-400">
                          <MapPin size={14} />
                          <span>Rabat, Morocco</span>
                        </div>
                      </div>
                      <p className="text-gray-400 leading-relaxed">
                        Developed an immersive 3D web interface for the construction sector. Implemented 
                        front-end logic with Angular and TypeScript to ensure application robustness and 
                        scalability. Collaborated with the team via GitLab for code management and basic CI/CD processes.
                      </p>
                      
                      <div className="mt-4 pt-4 border-t border-[#C678DD]/20">
                        <p className="text-xs text-gray-500 font-mono mb-2">Technologies:</p>
                        <div className="flex flex-wrap gap-2">
                          {['Angular', 'TypeScript', 'HTML', 'Tailwind CSS', 'GitLab'].map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-[#2C001E] border border-[#8AE234]/20 rounded text-xs font-mono text-[#8AE234]">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

     


      {/* CTA Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#1e1e1e] border-2 border-[#8AE234] rounded-lg overflow-hidden shadow-[0_0_50px_rgba(138,226,52,0.3)]"
          >
            <div className="bg-[#2d2d2d] px-6 py-4 border-b border-[#8AE234]/30">
              <div className="flex items-center gap-3">
                <Terminal className="text-[#8AE234]" size={20} />
                <span className="font-mono text-sm text-white">Ready to collaborate on your project?</span>
              </div>
            </div>
            
            <div className="p-8 text-center">
              <p className="text-lg text-gray-300 mb-6 font-mono">
                <span className="text-[#FFA500]">&gt;&gt;</span> Let's build robust and scalable solutions together
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                      to="/contact"
                      className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#00D9A3] text-[#0a0014] font-bold rounded-lg hover:bg-[#8AE234] transition-all duration-300 shadow-[0_0_30px_rgba(0,217,163,0.5)] hover:shadow-[0_0_40px_rgba(138,226,52,0.6)] font-mono overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                       
                        <span>→ ./contact.sh</span>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#00D9A3] via-[#8AE234] to-[#00D9A3] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                    </Link>
                
                <a
                  href="/assets/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#C678DD] text-[#C678DD] hover:border-[#8AE234] hover:text-[#8AE234] font-bold rounded-lg transition-all duration-300 font-mono"
                >
                  <span>cat resume.pdf</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};