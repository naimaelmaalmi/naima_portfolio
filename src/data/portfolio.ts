export const HERO_CONTENT = "Turning ideas into working applications. DevOps & Full-Stack Developer. Focused on automating processes, enhancing reliability, and developing maintainable web solutions.";

export const ABOUT_TEXT = "I design, automate, and deploy systems that turn code into production-grade reality. My journey began with full-stack development—building web apps with Java, React, and Node.js. Over time, that foundation evolved into a passion for DevOps and Cloud Engineering, where I now focus on crafting scalable infrastructure, clean CI/CD pipelines, and resilient deployments. I work across AWS and OCI, orchestrate containers with Docker and Kubernetes, and define infrastructure with Terraform, Ansible, and CloudFormation. Behind the command line, I'm equally comfortable in version control and workflow automation, using Git, GitHub, GitLab CI/CD, CodePipeline, and Bash scripting to bridge collaboration and delivery. For me, DevOps isn't just about speed—it's about precision, repeatability, and creating systems that empower developers to ship confidently and innovate faster.";

export const SKILLS = [
  // Cloud
 
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'containers', level: 90 },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', category: 'containers', level: 90 },

  // Infrastructure
  { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', category: 'infrastructure', level: 90 },
  

  // DevOps / Automation
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg', category: 'devops', level: 90 },
  { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-plain.svg', category: 'devops', level: 90 },
  { name: 'GitHub Actions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'devops', level: 90 },
  { name: 'GitLab CI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg', category: 'devops', level: 90 },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'devops', level: 90 },
  { name: 'AWS CodePipeline', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/awscodepipeline.svg', category: 'devops', level: 90 },
  { name: 'AWS CodeBuild', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/awscodebuild.svg', category: 'devops', level: 90 },
  { name: 'Bash Scripting', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg', category: 'devops', level: 90 },

  // Development
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'development', level: 90 },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg', category: 'development', level: 90 },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg', category: 'development', level: 90 },
  { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'development', level: 90 },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg', category: 'development', level: 90 },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg', category: 'development', level: 90 },

  // Databases
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'database', level: 90 },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'database', level: 90 },
  { name: 'Oracle SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg', category: 'database', level: 90 },
];

export const PROJECTS = [
 
];

export const CONTACT = {
  address: 'Hyderabad, Telangana, India',
  phoneNo: '+91 9000600559',
  email: 'neerajnakka.n@gmail.com',
  social: {
    github: 'https://github.com/neerajnakka',
    linkedin: 'https://linkedin.com/in/neerajchandran',
    twitter: 'https://twitter.com/neerajnakka',
  }
};

export const SKILLS_BY_CATEGORY = {
  cloud: SKILLS.filter(skill => skill.category === 'cloud'),
  containers: SKILLS.filter(skill => skill.category === 'containers'),
  infrastructure: SKILLS.filter(skill => skill.category === 'infrastructure'),
  devops: SKILLS.filter(skill => skill.category === 'devops'),
  development: SKILLS.filter(skill => skill.category === 'development'),
  database: SKILLS.filter(skill => skill.category === 'database'),
};

export const PROJECTS_BY_CATEGORY = {
  all: PROJECTS,
  devops: PROJECTS.filter(project => project.category === 'devops'),
  fullstack: PROJECTS.filter(project => project.category === 'fullstack'),
};
