export const profile = {
  name: "Harjot Singh",
  role: "Software Engineer",
  email: "[redacted]",
  blurb:
    "I build things with code. Replace this paragraph with a couple of sentences about what you do and what you're interested in.",
  links: [
    { label: "GitHub", url: "https://github.com/" },
    { label: "LinkedIn", url: "https://linkedin.com/in/" },
  ],
};

export type Project = {
  title: string;
  period: string;
  description: string;
  tags: string[];
  link?: string;
};

export const projects: Project[] = [
  // Add real projects here, e.g.:
  // { title: "Project Name", period: "2025", description: "What it does and what you used.", tags: ["React", "TypeScript"], link: "https://..." },
];

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  // Add real experience here, e.g.:
  // { role: "Software Engineer Intern", org: "Company", period: "Summer 2025", description: "What you did." },
];
