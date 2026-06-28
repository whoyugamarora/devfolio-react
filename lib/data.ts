export const personalInfo = {
  name: 'Yugam Arora',
  firstName: 'Yugam',
  lastName: 'Arora',
  title: 'IT Administrator',
  email: 'yugamarora1@gmail.com',
  github: 'https://github.com/whoyugamarora',
  linkedin: 'https://www.linkedin.com/in/yugam-arora',
  location: 'Fraser Valley, BC',
  available: true,
  bio: 'IT professional from the University of the Fraser Valley, specializing in cybersecurity, cloud infrastructure, and software development. Six-time Dean\'s List honoree driven by a relentless passion to secure and optimize digital systems.',
  taglines: [
    'IT Administrator',
    'Security Enthusiast',
    'Cloud Practitioner',
    'Problem Solver',
    "Dean's List Scholar",
  ],
}

export const stats = [
  { value: "6×", label: "Dean's List", sub: "UFV Honors" },
  { value: "3+", label: "Years Exp.", sub: "Industry" },
  { value: "12+", label: "Certifications", sub: "Earned" },
  { value: "3+", label: "Projects", sub: "Built" },
]

export interface Skill {
  name: string
  icon: string
}

export interface SkillCategory {
  category: string
  color: 'indigo' | 'cyan' | 'violet' | 'emerald'
  items: Skill[]
}

export const skills: SkillCategory[] = [
  {
    category: 'Security & Cloud',
    color: 'indigo',
    items: [
      { name: 'Azure', icon: 'azure' },
      { name: 'AWS', icon: 'aws' },
      { name: 'Linux', icon: 'linux' },
      { name: 'Active Directory', icon: 'windows' },
      { name: 'IAM / AAD', icon: 'shield' },
    ],
  },
  {
    category: 'Development',
    color: 'cyan',
    items: [
      { name: 'JavaScript', icon: 'js' },
      { name: 'React', icon: 'react' },
      { name: 'Node.js', icon: 'node' },
      { name: 'Python', icon: 'python' },
      { name: 'Java', icon: 'java' },
      { name: 'HTML / CSS', icon: 'html' },
    ],
  },
  {
    category: 'Infrastructure',
    color: 'violet',
    items: [
      { name: 'Virtualization', icon: 'server' },
      { name: 'TCP / IP', icon: 'network' },
      { name: 'SQL Server', icon: 'database' },
      { name: 'MongoDB', icon: 'mongo' },
      { name: 'MySQL', icon: 'mysql' },
    ],
  },
  {
    category: 'Tools',
    color: 'emerald',
    items: [
      { name: 'Git', icon: 'git' },
      { name: 'PowerBI', icon: 'powerbi' },
      { name: 'SharePoint', icon: 'sharepoint' },
      { name: 'ServiceNow', icon: 'servicenow' },
    ],
  },
]

export interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  tech: string[]
  image: string
  github: string
  featured: boolean
  color: 'indigo' | 'cyan' | 'violet'
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'ProjectBuddy',
    description: 'Real-time collaborative project management platform built with Firebase and MongoDB.',
    longDescription:
      'A full-stack collaborative platform that combines Firebase Realtime Database for live syncing and MongoDB for persistent storage. Teams can manage tasks, share files, and communicate in real time.',
    tech: ['React', 'Firebase', 'MongoDB', 'Node.js'],
    image: '/images/projectbuddy.png',
    github: 'https://github.com/whoyugamarora/Projectbuddy',
    featured: true,
    color: 'indigo',
  },
  {
    id: 2,
    title: 'HealthCare System',
    description: 'Security-focused medical data management with encrypted patient records and role-based access.',
    longDescription:
      'A medical data management system with robust security controls, including encrypted patient records, role-based access control, and audit logging for HIPAA compliance.',
    tech: ['Java', 'MySQL', 'RBAC', 'Encryption'],
    image: '/images/healthcaresystem.png',
    github: 'https://github.com/whoyugamarora/HealthcareSystem',
    featured: false,
    color: 'cyan',
  },
  {
    id: 3,
    title: 'Log Rotation System',
    description: 'Automated server log management with rotation, compression, and configurable retention policies.',
    longDescription:
      'An automated server log management system that handles rotation, compression, and retention policies. Reduces disk usage and simplifies log archival for sysadmins.',
    tech: ['Python', 'Linux', 'Bash', 'Cron'],
    image: '/images/logrotation.png',
    github: 'https://github.com/whoyugamarora/logrotationsystem',
    featured: false,
    color: 'violet',
  },
]

export interface ExperienceEntry {
  company: string
  role: string
  duration: string
  location: string
  type: string
  bullets: string[]
  color: 'indigo' | 'cyan' | 'violet'
  initials: string
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Carbon Engineering',
    role: 'IT Administrator',
    duration: 'Jan 2023 – Dec 2023',
    location: 'Squamish, BC',
    type: 'Full-time',
    initials: 'CE',
    bullets: [
      'Administered Azure Active Directory and Entra ID — managing user lifecycle, MFA, and Conditional Access policies.',
      'Configured and monitored network security policies, firewall rules, and VPN access for 100+ employees.',
      'Resolved Tier 1 & 2 incidents via ServiceNow, maintaining SLA compliance.',
      'Deployed and managed Windows Server VMs using VMware virtualization platform.',
      'Maintained Microsoft 365 tenant — SharePoint, Teams, Exchange, and PowerBI.',
    ],
    color: 'indigo',
  },
  {
    company: 'University of the Fraser Valley',
    role: 'IT Lab Monitor',
    duration: 'Jan 2022 – Apr 2022',
    location: 'Abbotsford, BC',
    type: 'Part-time',
    initials: 'UFV',
    bullets: [
      'Maintained and troubleshot lab equipment including workstations, printers, and AV systems.',
      'Assisted over 200 students per week with software, hardware, and account issues.',
      'Enforced lab security protocols and managed access control procedures.',
    ],
    color: 'cyan',
  },
  {
    company: '7-Eleven',
    role: 'Senior Sales Associate',
    duration: 'Mar 2020 – Dec 2022',
    location: 'Abbotsford, BC',
    type: 'Part-time',
    initials: '7E',
    bullets: [
      'Led and mentored junior staff, creating a collaborative team environment.',
      'Managed inventory control and accurate POS transaction processing.',
      'Delivered outstanding customer service consistently in a fast-paced environment.',
    ],
    color: 'violet',
  },
]

// NOTE: cert names/dates are inferred from your skills profile — please verify and correct them
export interface Certification {
  name: string
  issuer: string
  date: string
  badgeId: string
  color: 'indigo' | 'cyan' | 'violet' | 'emerald' | 'amber'
}

export const certifications: Certification[] = [
  { name: 'Azure Fundamentals',                          issuer: 'Microsoft',            date: 'Mar 2023', badgeId: '1af8e362-1898-4522-83be-cb7516f99d09', color: 'indigo'  },
  { name: 'Azure Administrator Associate',               issuer: 'Microsoft',            date: 'Jul 2023', badgeId: '46754ba4-a2d9-4c22-98c8-c0411ce82071', color: 'indigo'  },
  { name: 'Security, Compliance & Identity Fundamentals',issuer: 'Microsoft',            date: 'Oct 2023', badgeId: '4de2de15-f1ec-478c-b9fc-0d328865c6c3', color: 'indigo'  },
  { name: 'Microsoft 365 Fundamentals',                  issuer: 'Microsoft',            date: 'Dec 2023', badgeId: '14e17d5f-d66f-407a-b394-36e6f5d9ecfe', color: 'indigo'  },
  { name: 'AWS Cloud Practitioner',                      issuer: 'Amazon Web Services',  date: 'Feb 2024', badgeId: '9f0e9bb6-1a18-404b-9bb6-5cdb82f462cd', color: 'amber'   },
  { name: 'CompTIA Security+',                           issuer: 'CompTIA',              date: 'May 2023', badgeId: 'ba163306-6936-4df4-959c-529950248eab', color: 'cyan'    },
  { name: 'CompTIA Network+',                            issuer: 'CompTIA',              date: 'Feb 2023', badgeId: '9f0063e2-4e3a-447c-96d6-53199e3c6919', color: 'cyan'    },
  { name: 'CompTIA A+',                                  issuer: 'CompTIA',              date: 'Sep 2022', badgeId: '1606c1e0-83c7-4a97-8a4e-8ab45788173e', color: 'cyan'    },
  { name: 'ITIL 4 Foundation',                           issuer: 'PeopleCert',           date: 'Aug 2023', badgeId: 'd369258f-ac42-4997-b4f4-639b800b78e7', color: 'violet'  },
  { name: 'Google IT Support Certificate',               issuer: 'Google',               date: 'Jan 2022', badgeId: 'd80643c4-c56d-47b5-9241-7f8b094e7a88', color: 'emerald' },
  { name: 'Certified in Cybersecurity (CC)',             issuer: '(ISC)²',               date: 'Nov 2023', badgeId: '769e0aaf-5a6d-48c1-8e43-1c44c508d563', color: 'violet'  },
  { name: 'Azure AI Fundamentals',                       issuer: 'Microsoft',            date: 'Jan 2024', badgeId: 'caa43853-3c12-426c-9a7c-a6aa3d326343', color: 'indigo'  },
]

// kept for any remaining references
export const credlyBadges = certifications.map(c => c.badgeId)

export const deansList = [
  { year: '2020', semesters: ['Winter', 'Fall'] },
  { year: '2021', semesters: ['Winter'] },
  { year: '2024', semesters: ['Winter', 'Fall'] },
  { year: '2025', semesters: ['Winter'] },
]

export const education = {
  degree: 'Bachelor of Computer Information Systems',
  institution: 'University of the Fraser Valley',
  duration: 'Jan 2020 – Apr 2025',
  location: 'Abbotsford, BC',
  courses: [
    'Network Theory & Administration',
    'Information Security',
    'Virtualization Technologies',
    'Computer Forensic Analysis',
    'Database Management Systems',
    'Software Engineering',
  ],
  skills: [
    'Windows & Linux Administration',
    'Azure Entra ID & IAM',
    'TCP/IP Networking',
    'VMware Virtualization',
    'Relational Databases',
    'PowerBI & SharePoint',
  ],
}
