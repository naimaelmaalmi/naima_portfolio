import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Zap } from 'lucide-react';

export const TerminalExperience = () => {
  const [terminalHistory, setTerminalHistory] = useState<string[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Welcome message
    const welcomeMessages = [
      '╔═══════════════════════════════════════════════════════════╗',
      '║         Welcome to Naima\'s DevOps Universe 🚀            ║',
      '╚═══════════════════════════════════════════════════════════╝',
      '',
      'Type "help" to see available commands or "start" for a guided tour.',
      'Type "clear" to clear the terminal.',
      '',
    ];
    setTerminalHistory(welcomeMessages);
  }, []);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalHistory]);

  const portfolioData = {
    about: {
      name: 'Naima El Maalmi',
      role: 'DevOps & Full Stack Engineer',
      location: 'Morocco',
      status: 'Seeking PFE Internship',
      email: 'naimaelmaalmi12@gmail.com',
      tagline: 'Transforming infrastructure chaos into orchestrated harmony',
    },
    skills: {
      containers: ['Kubernetes', 'Docker', 'Helm', 'Kustomize'],
      iac: ['Terraform', 'Linux/Bash', 'VMware/VirtualBox'],
      cicd: ['GitHub Actions', 'GitLab CI/CD', 'Vault', 'Prometheus & Grafana', 'Trivy', 'Jenkins'],
      frontend: ['ReactJS', 'AngularJS', 'TypeScript', 'HTML/CSS/Tailwind'],
      backend: ['Spring Boot', 'Java', 'Node.js', 'Python'],
      databases: ['PostgreSQL', 'MySQL', 'etcd'],
    },
    experience: [
      {
        title: 'Frontend Developer',
        company: 'Kazineuf',
        period: '2024 (Summer)',
        description: 'Angular, Typescript, HTML, Tailwind CSS, GitLab',
      },
      {
        title: 'Kubernetes Administrator',
        company: 'Orange - PFA Project',
        period: '2025 (Summer)',
        description: 'Kubernetes (K8S), Helm, RBAC, GCP',
      },
    ],
    projects: [
      { name: 'CASPlatform', tech: 'Angular, Spring Boot, MySQL', type: 'Full-Stack' },
      { name: 'K8s Administration', tech: 'Kubernetes, , Helm, GCP', type: 'DevOps' },
      { name: 'INEAlumni', tech: 'Spring Boot, ReactJS, PostgreSQL', type: 'Full-Stack' },
      { name: 'DevSecOps Pipeline', tech: 'Terraform, K8S, Docker, GitHub Actions, Trivy', type: 'DevSecOps' },
      { name: 'OpenStack Private Cloud', tech: 'OpenStack, Linux/Bash, KVM', type: 'DevOps' },
      { name: 'Personal Portfolio', tech: 'ReactJS, TypeScript', type: 'Full Stack' },
    ],
    social: {
      github: 'https://github.com/naimaelmaalmi',
      linkedin: 'https://www.linkedin.com/in/naima-el-maalmi-36a795288',
    },
  };

  const commands: Record<string, (args?: string[]) => string[]> = {
    help: () => [
      '╔════════════════ AVAILABLE COMMANDS ════════════════╗',
      '║                                                    ║',
      '║  🎯 EXPLORATION                                    ║',
      '║  whoami          - Display my information         ║',
      '║  ls skills       - List all my technical skills   ║',
      '║  cat experience  - Show work experience           ║',
      '║  git log         - View my project history        ║',
      '║  contact         - Get my contact information     ║',
      '║                                                    ║',
      '║  🔍 DETAILED VIEW                                  ║',
      '║  ls skills/<category>  - View specific skills     ║',
      '║     categories: containers, iac, cicd, frontend   ║',
      '║                 backend, databases                ║',
      '║  cat project/<name>    - View project details     ║',
      '║                                                    ║',
      '║  🎮 INTERACTION                                    ║',
      '║  start           - Guided tour of my portfolio    ║',
      '║  stats           - View my career statistics      ║',
      '║  quote           - Get a random DevOps quote      ║',
      '║  clear           - Clear the terminal             ║',
      '║                                                    ║',
      '╚════════════════════════════════════════════════════╝',
      '',
    ],

    whoami: () => [
      `╔════════════════ PROFILE INFO ════════════════╗`,
      `║ Name:    ${portfolioData.about.name}`,
      `║ Role:    ${portfolioData.about.role}`,
      `║ Location: ${portfolioData.about.location}`,
      `║ Status:  ${portfolioData.about.status}`,
      `║ Email:   ${portfolioData.about.email}`,
      `╚══════════════════════════════════════════════╝`,
      '',
      `💭 "${portfolioData.about.tagline}"`,
      '',
    ],

    ls: (args) => {
      if (!args || args.length === 0) {
        return [
          'Available directories:',
          '  📁 skills/       - Technical expertise',
          '  📁 experience/   - Work history',
          '  📁 projects/     - Portfolio projects',
          '  📁 contact/      - Contact information',
          '',
          'Use: ls <directory> for more details',
          '',
        ];
      }

      const path = args[0].toLowerCase().replace(/\/$/, '');

      if (path === 'skills') {
        return [
          '╔═══════════════ SKILLS OVERVIEW ═══════════════╗',
          '║',
          `║ 🐳 Containers & Orchestration: ${portfolioData.skills.containers.length} tools`,
          `║ ⚙️  Infrastructure as Code: ${portfolioData.skills.iac.length} tools`,
          `║ 🔄 CI/CD & Monitoring: ${portfolioData.skills.cicd.length} tools`,
          `║ 🎨 Frontend Development: ${portfolioData.skills.frontend.length} technologies`,
          `║ ⚡ Backend Development: ${portfolioData.skills.backend.length} technologies`,
          `║ 💾 Databases & Messaging: ${portfolioData.skills.databases.length} technologies`,
          '║',
          '╚═══════════════════════════════════════════════╝',
          '',
          'Use: ls skills/<category> to view specific skills',
          'Categories: containers, iac, cicd, frontend, backend, databases',
          '',
        ];
      }

      if (path.startsWith('skills/')) {
        const category = path.split('/')[1];
        const categoryMap: Record<string, string[]> = {
          containers: portfolioData.skills.containers,
          iac: portfolioData.skills.iac,
          cicd: portfolioData.skills.cicd,
          frontend: portfolioData.skills.frontend,
          backend: portfolioData.skills.backend,
          databases: portfolioData.skills.databases,
        };

        if (categoryMap[category]) {
          return [
            `Skills in ${category}:`,
            ...categoryMap[category].map((skill, i) => `  ${i + 1}. ✓ ${skill}`),
            '',
          ];
        }
      }

      return [`Directory not found: ${path}`, 'Use "ls" to see available directories', ''];
    },

    cat: (args) => {
      if (!args || args.length === 0) {
        return ['Usage: cat <file>', 'Available: experience, contact', ''];
      }

      const file = args[0].toLowerCase();

      if (file === 'experience') {
        return [
          '╔════════════════ WORK EXPERIENCE ════════════════╗',
          '',
          ...portfolioData.experience.flatMap((exp, i) => [
            `${i + 1}. ${exp.title} @ ${exp.company}`,
            `   Period: ${exp.period}`,
            `   ${exp.description}`,
            '',
          ]),
          '╚═════════════════════════════════════════════════╝',
          '',
        ];
      }

      return [`File not found: ${file}`, ''];
    },

    git: (args) => {
      if (!args || args[0] !== 'log') {
        return ['Usage: git log', ''];
      }

      return [
        '╔════════════════ PROJECT HISTORY ════════════════╗',
        '',
        ...portfolioData.projects.map((project, i) => 
          `commit ${i + 1}  [${project.type}]\n` +
          `   ${project.name}\n` +
          `   Technologies: ${project.tech}\n`
        ),
        '╚═════════════════════════════════════════════════╝',
        '',
      ];
    },

    contact: () => [
      '╔════════════════ CONTACT INFO ════════════════╗',
      '║',
      `║ 📧 Email:    ${portfolioData.about.email}`,
      `║ 💼 LinkedIn: https://www.linkedin.com/in/naima-el-maalmi-36a795288`,
      `║ 🐙 GitHub:   github.com/naimaelmaalmi`,
      '║',
      '╚══════════════════════════════════════════════╝',
      '',
      '💡 Tip: You can click on these links in the actual portfolio!',
      '',
    ],

    stats: () => [
      '╔═══════════════ CAREER STATS ═══════════════╗',
      '║',
      '║ 💼 Experience:        2 Internships',
      '║ 🚀 Projects:          4+ Major Projects',
      '║ ☁️  Cloud Platforms:   3+ (GCP, AWS, OpenStack)',
      '║ 🛠️  DevOps Tools:      8+ Mastered',
      '║ 💻 Code Languages:    6+ (Java, Python, JS, TS...)',
      '║ 🎯 Current Goal:      PFE Internship',
      '║',
      '╚════════════════════════════════════════════╝',
      '',
    ],

    quote: () => {
      const quotes = [
        '"Infrastructure as Code: Because clicking is not scalable." 🎯',
        '"In DevOps we trust, in automation we must." ⚙️',
        '"The best time to automate was yesterday. The second best time is now." 🚀',
        '"Cloud native is not a destination, it\'s a journey." ☁️',
        '"Kubernetes: Making simple things complicated and complicated things possible." 🐳',
        '"CI/CD: Commit, Integrate, Deploy... and pray! 🙏 (Just kidding, we test!)" 🔄',
      ];
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      return ['', randomQuote, ''];
    },

    start: () => [
      '🎬 Starting guided tour...',
      '',
      '══════════════════════════════════════════════════════',
      '  Welcome to the Interactive Portfolio Experience!',
      '══════════════════════════════════════════════════════',
      '',
      'Let me guide you through my DevOps universe:',
      '',
      '1️⃣  First, let\'s see who I am:',
      '   → Try: whoami',
      '',
      '2️⃣  Check out my technical skills:',
      '   → Try: ls skills',
      '   → Then: ls skills/containers',
      '',
      '3️⃣  View my work experience:',
      '   → Try: cat experience',
      '',
      '4️⃣  Explore my projects:',
      '   → Try: git log',
      '',
      '5️⃣  See career statistics:',
      '   → Try: stats',
      '',
      '6️⃣  Get my contact information:',
      '   → Try: contact',
      '',
      '💡 Pro tip: Press ↑ ↓ to navigate command history',
      '',
    ],

    clear: () => {
      setTerminalHistory([]);
      return [];
    },
  };

  const executeCommand = (input: string) => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    // Add command to history
    setCommandHistory(prev => [...prev, trimmedInput]);
    setHistoryIndex(-1);

    // Add command to terminal
    const newHistory = [...terminalHistory, `naima@devops:~$ ${trimmedInput}`];

    // Parse command
    const parts = trimmedInput.split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    // Execute command
    let output: string[];
    if (commands[cmd]) {
      output = commands[cmd](args);
    } else {
      output = [
        `Command not found: ${cmd}`,
        'Type "help" to see available commands.',
        '',
      ];
    }

    if (cmd !== 'clear') {
      setTerminalHistory([...newHistory, ...output]);
    }
    setCurrentInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(currentInput);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 
          ? commandHistory.length - 1 
          : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput('');
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex]);
        }
      }
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

      {/* Main Terminal */}
      <section className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Terminal Window */}
            <div className="bg-[#1e1e1e] rounded-lg border-2 border-[#00D9A3] overflow-hidden shadow-[0_0_50px_rgba(0,217,163,0.4)]">
              {/* Terminal Header */}
              <div className="bg-[#2d2d2d] px-4 py-3 border-b border-[#00D9A3]/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <Terminal size={16} className="text-[#8AE234]" />
                  <span className="text-xs text-gray-400 font-mono">naima@devops:~/portfolio</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#8AE234] rounded-full animate-pulse"></div>
                  <span className="text-xs font-mono text-[#8AE234]">LIVE</span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm bg-[#0a0014] min-h-[600px] max-h-[600px] overflow-y-auto">
                {terminalHistory.map((line, index) => (
                  <div
                    key={index}
                    className={`${
                      line.startsWith('naima@devops:~$') 
                        ? 'text-[#00D9A3] font-bold mt-2' 
                        : line.startsWith('║') || line.startsWith('╔') || line.startsWith('╚')
                        ? 'text-[#8AE234]'
                        : line.includes('not found') || line.includes('Error')
                        ? 'text-[#ff5f56]'
                        : 'text-gray-300'
                    }`}
                    style={{ whiteSpace: 'pre-wrap' }}
                  >
                    {line}
                  </div>
                ))}

                {/* Input Line */}
                <div className="flex items-center mt-2">
                  <span className="text-[#00D9A3] mr-2 font-bold">naima@devops:~$</span>
                  <input
                    type="text"
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent text-white outline-none font-mono"
                    placeholder="Type a command..."
                    autoFocus
                  />
                  <div className="w-2 h-4 bg-[#8AE234] animate-pulse ml-1" />
                </div>

                <div ref={terminalEndRef} />
              </div>

              {/* Terminal Footer */}
              <div className="bg-[#007acc] px-4 py-2 text-xs font-mono flex items-center justify-between text-white">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-2">
                    <Zap size={12} className="text-[#8AE234]" />
                    <span>Interactive Mode</span>
                  </span>
                  <span className="text-gray-300">Press ↑ ↓ for history</span>
                </div>
                <span className="text-gray-300">Lines: {terminalHistory.length}</span>
              </div>
            </div>

            {/* Quick Start Guide */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                { cmd: 'start', label: '🎬 Guided Tour', color: '#8AE234' },
                { cmd: 'whoami', label: '👤 About Me', color: '#00D9A3' },
                { cmd: 'ls skills', label: '🛠️ Skills', color: '#C678DD' },
                { cmd: 'git log', label: '📂 Projects', color: '#FFA500' },
              ].map((item) => (
                <button
                  key={item.cmd}
                  onClick={() => {
                    setCurrentInput(item.cmd);
                    executeCommand(item.cmd);
                  }}
                  className="p-4 bg-[#1e1e1e] border-2 border-[#C678DD]/20 rounded-lg hover:border-[#8AE234] hover:shadow-[0_0_20px_rgba(138,226,52,0.2)] transition-all duration-300 group"
                  style={{ borderColor: `${item.color}40` }}
                >
                  <div className="text-center">
                    <div className="font-mono text-sm font-bold mb-2" style={{ color: item.color }}>
                      $ {item.cmd}
                    </div>
                    <div className="text-xs text-gray-400">{item.label}</div>
                  </div>
                </button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};