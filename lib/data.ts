export type NavLink = {
  id: string;
  label: string;
};

export type HeroData = {
  name: string;
  roles: string[];
  tagline: string;
  ctaWork: string;
  ctaCV: string;
};

export type AboutData = {
  description: string;
  location: string;
  email: string;
  phone: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
};

export type ExperienceEntry = {
  date: string;
  title: string;
  organization: string;
  description: string;
};

export type ContactData = {
  email: string;
  phone: string;
  location: string;
};

export const navLinks: NavLink[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export const heroData: HeroData = {
  name: 'M. Febrian',
  roles: ['Network Engineer', 'Informatics Student', 'Problem Solver'],
  tagline:
    'Designing secure and efficient network infrastructure with a modern, analytical approach to wireless systems and topology planning.',
  ctaWork: 'View My Work',
  ctaCV: 'Download CV',
};

export const aboutData: AboutData = {
  description:
    'An Informatics Engineering student at Universitas Maritim Raja Ali Haji with a strong interest in computer networks and wireless infrastructure. Skilled in routing & switching, wireless networking, troubleshooting, and network simulation using Cisco Packet Tracer and MikroTik. Experienced in developing network topology designs, web-based systems, and data mining projects. Fast learner with leadership experience and strong problem-solving abilities.',
  location: 'Karimun, Meral Barat, Guntung Punak',
  email: 'muhammadfebrian689@gmail.com',
  phone: '+62 857-6625-7299',
};

export const skillGroups: SkillGroup[] = [
  {
    title: 'Technical Skills',
    skills: ['Routing & Switching', 'Network Troubleshooting', 'Wireless Networking', 'Network Simulation'],
  },
  {
    title: 'Frameworks',
    skills: ['Laravel', 'CodeIgniter3', 'Flutter'],
  },
  {
    title: 'Programming Languages',
    skills: ['PHP', 'HTML', 'CSS'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'SQLite'],
  },
  {
    title: 'Tools & Technologies',
    skills: ['MikroTik', 'Cisco Packet Tracer', 'Microsoft Excel'],
  },
];

export const projects: ProjectItem[] = [
  {
    title: 'District Network Infrastructure Simulation',
    description:
      'Designed and simulated a resilient ring topology across 10 districts with DHCP, routing, and wireless network systems using Cisco Packet Tracer.',
    tags: ['Cisco Packet Tracer', 'Routing', 'Wireless', 'Topology Design'],
  },
  {
    title: 'Web-Based System Development',
    description:
      'Built a web system prototype to support workflow and data management for academic and technical projects using PHP frameworks.',
    tags: ['Laravel', 'CodeIgniter3', 'PHP', 'MySQL'],
  },
  {
    title: 'Data Mining Academic Project',
    description:
      'Analyzed datasets to support decision-making and insights in engineering projects, focusing on structure and accuracy.',
    tags: ['Data Analytics', 'SQL', 'Report Design'],
  },
];

export const experience: ExperienceEntry[] = [
  {
    date: '2024 — Internship',
    title: 'Assistant Project Controller Intern',
    organization: 'PT Karimun Marine Shipyard (PT KMS)',
    description:
      'Assisted the Project Control division in managing and documenting Request for Inspection (RFI) data for barge ship construction projects. Recorded inspection data from QC and PIC teams using Microsoft Excel.',
  },
  {
    date: '2023 — Present',
    title: 'Informatics Engineering Student',
    organization: 'Universitas Maritim Raja Ali Haji',
    description:
      'Pursuing Informatics Engineering with focus on computer networking and wireless infrastructure while developing technical skills in networking design and systems planning.',
  },
  {
    date: '2020 — 2023',
    title: 'Science Student & Student Council Chairman',
    organization: 'MAN Karimun',
    description:
      'Completed senior high school with Science specialization and served as Chairman of Student Council (OSIS), honing leadership and coordination skills.',
  },
];

export const contactData: ContactData = {
  email: 'muhammadfebrian689@gmail.com',
  phone: '+62 857-6625-7299',
  location: 'Karimun, Meral Barat, Guntung Punak',
};
