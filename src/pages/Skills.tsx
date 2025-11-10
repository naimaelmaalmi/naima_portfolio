import { useState } from 'react';
import { motion } from 'framer-motion';
import { Cloud, Container, Code, Database, Server, GitBranch, Zap, Monitor } from 'lucide-react';

// Simulated SKILLS_BY_CATEGORY data
const SKILLS_BY_CATEGORY = {
  containers: [
    { name: 'Kubernetes (Administration)', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', category: 'Containers & Orchestration' },
    { name: 'Docker', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'Containers & Orchestration' },
    { name: 'Helm', level: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg', category: 'Containers & Orchestration' },
    { name: 'Kustomize', level: 65, icon: 'https://raw.githubusercontent.com/kubernetes-sigs/kustomize/master/logo/kustomize-dark-background.svg', category: 'Containers & Orchestration' },
  ],
  infrastructure_iac: [
    { name: 'Terraform', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', category: 'Infrastructure as Code' },
    { name: 'Linux/Bash', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', category: 'Infrastructure as Code' },
    { name: 'VMware/VirtualBox', level: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vagrant/vagrant-original.svg', category: 'Infrastructure as Code' }, // Utilisé pour KVM/Virtualization
  ],
  devops_ci_cd: [
    { name: 'GitHub Actions (CI/CD/GitOps)', level: 85, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'DevOps & CI/CD' },
    { name: 'GitLab CI/CD', level: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg', category: 'DevOps & CI/CD' },
    { name: 'Vault (HashiCorp)', level: 65, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vault/vault-original.svg', category: 'DevOps & CI/CD' },
    { name: 'Prometheus & Grafana', level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg', category: 'DevOps & CI/CD' },
    { name: 'Trivy (DevSecOps)', level: 60, icon: 'https://raw.githubusercontent.com/aquasecurity/trivy/main/logo/trivy.svg', category: 'DevOps & CI/CD' },
  ],
  frontend: [
    { name: 'ReactJS', level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'Development Front-end' },
    { name: 'AngularJS', level: 65, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', category: 'Development Front-end' },
    { name: 'TypeScript', level: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'Development Front-end' },
    { name: 'HTML/CSS/Tailwind', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', category: 'Development Front-end' },
  ],
  backend: [
    { name: 'Spring Boot', level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', category: 'Development Back-end' },
    { name: 'Java', level: 80, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'Development Back-end' },
    { name: 'Node.js', level: 65, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'Development Back-end' },
    { name: 'Python', level: 60, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'Development Back-end' },
  ],
  databases: [
    { name: 'PostgreSQL', level: 70, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: 'Databases & Messaging' },
    { name: 'MySQL', level: 60, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'Databases & Messaging' }, // Changement effectué
    { name: 'etcd', level: 75, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/etcd/etcd-original.svg', category: 'Databases & Messaging' },
    { name: 'RabbitMQ', level: 65, icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg', category: 'Databases & Messaging' },
  ],
};

export const Skills = () => {
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

 const categories = [
    {
      id: 'containers',
      title: 'Containers & Orchestration',
      icon: Container,
      skills: SKILLS_BY_CATEGORY.containers,
      color: '#8AE234',
      bgGlow: 'shadow-[0_0_20px_rgba(138,226,52,0.2)]',
    },
    {
      id: 'infrastructure_iac',
      title: 'Infrastructure as Code & OS',
      icon: Server,
      skills: SKILLS_BY_CATEGORY.infrastructure_iac,
      color: '#C678DD',
      bgGlow: 'shadow-[0_0_20px_rgba(198,120,221,0.2)]',
    },
    {
      id: 'devops_ci_cd',
      title: 'DevOps, CI/CD & Monitoring',
      icon: GitBranch,
      skills: SKILLS_BY_CATEGORY.devops_ci_cd,
      color: '#FFA500',
      bgGlow: 'shadow-[0_0_20px_rgba(255,165,0,0.2)]',
    },
    {
      id: 'frontend',
      title: 'Development Front-end',
      icon: Code,
      skills: SKILLS_BY_CATEGORY.frontend,
      color: '#00D9A3',
      bgGlow: 'shadow-[0_0_20px_rgba(0,217,163,0.2)]',
    },
    {
      id: 'backend',
      title: 'Development Back-end',
      icon: Zap, // Utilisation de Zap pour le Back-end (API, rapidité)
      skills: SKILLS_BY_CATEGORY.backend,
      color: '#C678DD',
      bgGlow: 'shadow-[0_0_20px_rgba(198,120,221,0.2)]',
    },
    {
      id: 'databases',
      title: 'Databases & Messaging',
      icon: Database,
      skills: SKILLS_BY_CATEGORY.databases,
      color: '#8AE234',
      bgGlow: 'shadow-[0_0_20px_rgba(138,226,52,0.2)]',
    },
  ];

  const commands = {
    help: [
      'Available commands:',
      '  ls <category>     - List skills in a category',
      '  cat <skill>       - Show skill details',
      '  levels            - Show proficiency levels',
      '  clear             - Clear terminal',
      '  help              - Show this help',
    ],
    levels: [
      'Proficiency Levels:',
      '  Beginner (30%)     - Basic understanding',
      '  Intermediate (60%) - Practical experience',
      '  Advanced (85%)     - Production usage',
      '  Expert (100%)      - Deep expertise',
    ],
    clear: () => setTerminalOutput([]),
    default: (input: string) => [
      `Command not found: ${input}`,
      'Type "help" for available commands.',
    ],
  };

  const executeCommand = (input: string) => {
    setIsProcessing(true);
    
    const cmd = input.toLowerCase().trim();
    const args = cmd.split(' ');
    const mainCmd = args[0];

    setTimeout(() => {
      let output: string[] = [];
      
      switch (mainCmd) {
        case 'help':
          output = commands.help;
          break;
        case 'levels':
          output = commands.levels;
          break;
        case 'clear':
          commands.clear();
          setIsProcessing(false);
          return;
        case 'ls':
          const category = args[1];
          if (category && categories.find(c => c.id === category)) {
            const cat = categories.find(c => c.id === category)!;
            output = [
              `${cat.title}:`,
              ...cat.skills.map(skill => `  ${skill.name} (${skill.level}%)`)
            ];
          } else {
            output = [
              'Available categories:',
              ...categories.map(cat => `  ${cat.id} - ${cat.title}`)
            ];
          }
          break;
        case 'cat':
          const skillName = args.slice(1).join(' ');
          let foundSkill = null;
          Object.values(SKILLS_BY_CATEGORY).forEach(categorySkills => {
            const skill = categorySkills.find(s => s.name.toLowerCase() === skillName.toLowerCase());
            if (skill) foundSkill = skill;
          });

          if (foundSkill) {
            output = [
              `Skill: ${foundSkill.name}`,
              `Category: ${foundSkill.category}`,
              `Proficiency: ${foundSkill.level}%`,
              '',
              `Status: Production Ready ✓`,
            ];
          } else {
            output = [`Skill "${skillName}" not found`];
          }
          break;
        default:
          output = commands.default(cmd);
      }

      setTerminalOutput(prev => [...prev, `$ ${input}`, ...output, '']);
      setCurrentInput('');
      setIsProcessing(false);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && currentInput.trim() && !isProcessing) {
      executeCommand(currentInput);
    }
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
              <span className="ml-4 text-xs text-gray-400 font-mono">naima@devops:~/skills</span>
            </div>
            
            {/* Terminal Content */}
            <div className="p-6 font-mono">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#8AE234]">naima@devops</span>
                  <span className="text-[#C678DD]">MINGW64</span>
                  <span className="text-[#FFA500]">~/skills</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00FF00]">$</span>
                  <span className="text-[#00D9A3]">ls -la --expertise</span>
                </div>
                <div className="mt-4 text-gray-300 pl-4 border-l-2 border-[#8AE234]/30">
                  <p className="text-[#C678DD] mb-2"># Exploring technical expertise</p>
                  <p>
                    Comprehensive skill set spanning 
                    <span className="text-[#8AE234]"> DevOps Automation</span>, and 
                    <span className="text-[#FFA500]"> Full Stack Development</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Terminal Footer */}
            <div className="bg-[#007acc] text-white px-4 py-2 text-xs font-mono flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span>⚡ All Systems Operational</span>
                <span className="text-[#8AE234]">● {Object.values(SKILLS_BY_CATEGORY).flat().length} Skills Loaded</span>
              </div>
              <span>Updated: {new Date().toLocaleDateString()}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Categories - Kubernetes Pod Style */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-mono text-2xl md:text-3xl font-bold text-white">
                <span className="text-[#00D9A3]">kubectl</span> get pods --namespace=skills
              </h2>
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="px-3 py-1 bg-[#8AE234]/20 text-[#8AE234] rounded-full">
                  ● 6 PODS RUNNING
                </span>
              </div>
            </div>
            <p className="text-gray-400 font-mono text-sm pl-2">
              <span className="text-[#FFA500]">STATUS:</span> All pods healthy and ready
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {categories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-[#1e1e1e] border-2 border-[#C678DD]/20 rounded-lg overflow-hidden hover:border-[#00D9A3] transition-all duration-300"
                >
                  {/* Pod Header */}
                  <div className="bg-[#2d2d2d] px-6 py-4 border-b border-[#C678DD]/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg" style={{ backgroundColor: `${category.color}20` }}>
                          <IconComponent size={24} style={{ color: category.color }} />
                        </div>
                        <div>
                          <h3 className="font-mono text-lg font-semibold text-white">
                            {category.title}
                          </h3>
                          <span className="text-xs text-gray-400 font-mono">
                            pod/{category.id}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: category.color }}></div>
                        <span className="text-xs font-mono text-gray-400">Running</span>
                      </div>
                    </div>
                  </div>

                  {/* Pod Body - Skills */}
                  <div className="p-6">
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05), duration: 0.4 }}
                          viewport={{ once: true }}
                          className="group"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-6 h-6 filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                              />
                              <span className="font-mono text-sm font-medium text-gray-300 group-hover:text-[#8AE234] transition-colors">
                                {skill.name}
                              </span>
                            </div>
                            <span className="font-mono text-xs" style={{ color: category.color }}>
                              {skill.level}%
                            </span>
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="w-full bg-[#1a0a2e] rounded-full h-1.5 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3, duration: 0.8 }}
                              viewport={{ once: true }}
                              className="h-full rounded-full"
                              style={{ backgroundColor: category.color }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Pod Footer */}
                  <div className="bg-[#0a0014] px-6 py-3 border-t border-[#C678DD]/20 font-mono text-xs flex items-center justify-between text-gray-500">
                    <span>
                      <span className="text-[#8AE234]">READY:</span> {category.skills.length}/{category.skills.length}
                    </span>
                    <span className="text-[#00D9A3]">STATUS: Healthy</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Terminal */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <Monitor className="text-[#8AE234]" size={28} />
              <h2 className="font-mono text-2xl md:text-3xl font-bold text-white">
                <span className="text-[#C678DD]">Interactive</span> Skill Explorer
              </h2>
            </div>
            <p className="text-gray-400 font-mono text-sm pl-10">
              Use terminal commands to explore my technical expertise in detail
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            {/* Terminal Window */}
            <div className="bg-[#1e1e1e] border-2 border-[#8AE234] rounded-lg overflow-hidden shadow-[0_0_50px_rgba(138,226,52,0.3)]">
              {/* Terminal Header */}
              <div className="bg-[#2d2d2d] border-b border-[#8AE234]/30 p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <span className="font-mono text-sm text-gray-400">skills-explorer.sh</span>
                <div className="w-16"></div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm bg-[#0a0014] h-96 overflow-y-auto">
                {terminalOutput.length === 0 && (
                  <div className="text-gray-300 space-y-2">
                    <div className="text-[#8AE234]">
                      Welcome to Skills Explorer v2.0
                    </div>
                    <div className="text-gray-400">
                      Type '<span className="text-[#00D9A3]">help</span>' to see available commands.
                    </div>
                    <div className="mt-4 text-[#C678DD]">
                      Quick start: Try '<span className="text-[#FFA500]">ls cloud</span>' or '<span className="text-[#FFA500]">levels</span>'
                    </div>
                  </div>
                )}

                {terminalOutput.map((line, index) => (
                  <div
                    key={index}
                    className={`${
                      line.startsWith('$') ? 'text-[#00D9A3] font-bold' : 
                      line.includes('Command not found') ? 'text-[#ff5f56]' :
                      line.includes(':') && !line.startsWith(' ') ? 'text-[#8AE234]' :
                      'text-gray-300'
                    }`}
                  >
                    {line}
                  </div>
                ))}

                {isProcessing && (
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[#00D9A3]">$</span>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-[#8AE234] rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-[#8AE234] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-[#8AE234] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                )}

                {/* Input Line */}
                {!isProcessing && (
                  <div className="flex items-center mt-2">
                    <span className="text-[#00D9A3] mr-2">$</span>
                    <input
                      type="text"
                      value={currentInput}
                      onChange={(e) => setCurrentInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="flex-1 bg-transparent text-white outline-none font-mono"
                      placeholder="enter command..."
                      autoFocus
                    />
                    <div className="w-2 h-4 bg-[#8AE234] animate-pulse ml-1" />
                  </div>
                )}
              </div>

              {/* Terminal Footer */}
              <div className="bg-[#007acc] px-6 py-2 text-xs font-mono flex items-center justify-between text-white">
                <span>Press ENTER to execute</span>
                <span className="text-[#8AE234]">● Ready</span>
              </div>
            </div>

            {/* Quick Commands */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { cmd: 'help', desc: 'Show all commands', icon: '📖' },
                { cmd: 'ls cloud', desc: 'Cloud skills', icon: '☁️' },
                { cmd: 'levels', desc: 'Proficiency guide', icon: '📊' },
                { cmd: 'cat Docker', desc: 'Skill details', icon: '🐳' },
              ].map((item) => (
                <button
                  key={item.cmd}
                  onClick={() => {
                    setCurrentInput(item.cmd);
                    setTimeout(() => executeCommand(item.cmd), 100);
                  }}
                  className="p-4 bg-[#2C001E] border-2 border-[#C678DD]/20 rounded-lg text-left hover:border-[#8AE234] hover:shadow-[0_0_20px_rgba(138,226,52,0.2)] transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-mono text-sm text-[#00D9A3] group-hover:text-[#8AE234] transition-colors">
                      $ {item.cmd}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">{item.desc}</div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};