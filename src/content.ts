export const profile = {
  name: "Harjot Singh",
  role: "CS @ Purdue University",
  email: "[redacted]",
  blurb:
    "Computer Science student at Purdue interested in full-stack systems, distributed infrastructure, and applied machine learning.",
  links: [{ label: "GitHub", url: "https://github.com/harjot3" }],
};

export const education = {
  school: "Purdue University",
  location: "West Lafayette, IN",
  degree: "B.S. in Computer Science — GPA 3.97",
  period: "May 2028",
  coursework:
    "Discrete Mathematics, Programming in C, Data Structures, Object-Oriented Programming",
};

export type ExperienceItem = {
  role: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "IT Applications Intern",
    org: "Group 1001",
    location: "Zionsville, IN",
    period: "May 2026 – August 2026",
    bullets: [
      "Engineered low-code automation workflows in Microsoft Power Automate to replace manual, recurring IT Applications processes, reducing time spent on routine operational tasks",
      "Translated technical requirements gathered from HR, IT, and Compliance stakeholders into automation logic and application-level fixes",
      "Debugged and resolved system-level issues across integrated applications, collaborating cross-functionally to validate fixes before deployment",
    ],
  },
  {
    role: "AI/Deep Learning Research Assistant",
    org: "Umilis Lab, Purdue University",
    location: "West Lafayette, IN",
    period: "January 2026 – May 2026",
    bullets: [
      "Built a CNN-based image segmentation pipeline in Python for Drosophila wing datasets, processing 500+ images and cutting manual processing time by 60%",
      "Automated feature-extraction logic in the pipeline, reducing per-dataset processing time by 56% (3.2 to 1.4 min)",
      "Built validation checks surfacing three classes of annotation errors, improving model reliability",
    ],
  },
  {
    role: "Machine Learning Engineer",
    org: "Purdue University",
    location: "West Lafayette, IN",
    period: "August 2025 – May 2026",
    bullets: [
      "Designed and implemented a Python-based object detection pipeline integrating YOLOv8, automating localization across 12,000+ images at 91% accuracy",
      "Built a Pandas-based ETL system to extract, validate, and structure bounding-box output data into a queryable format for downstream analysis",
      "Partnered with V2X systems engineers to integrate the pipeline into a production computer vision workflow, aligning interfaces across teams",
    ],
  },
  {
    role: "Software Engineer Intern",
    org: "SALUS Wellness",
    location: "Atlanta, GA",
    period: "May 2025 – August 2025",
    bullets: [
      "Developed full-stack web features using JavaScript, React, HTML, and CSS to deliver client-facing interfaces and responsive UI components",
      "Engineered RESTful APIs in Node.js/Express to aggregate wellness data from 25+ external partners into a unified pipeline",
      "Architected API endpoints powering core application features, optimizing data flow for 200+ active users",
    ],
  },
];

export type Project = {
  title: string;
  stack: string;
  link: string;
  bullets: string[];
};

export const projects: Project[] = [
  {
    title: "Manga Release Tracker / Aggregator",
    stack: "TypeScript, Node.js, PostgreSQL, Supabase, HTML/CSS",
    link: "https://github.com/harjot3/manga-release-tracker",
    bullets: [
      "Architected a serverless manga-release aggregator in TypeScript, polling multiple APIs via Vercel Functions",
      "Built a responsive HTML/CSS frontend for browsing subscriptions and release history",
      "Deduped chapters across sources and notified subscribers through a pluggable adapter interface",
      "Designed a normalized 5-table Postgres schema with RLS and partial indexes",
      "Used composite idempotency keys to prevent duplicate rows and notifications on re-polling",
      "Added a rate-limit-aware fetch layer with exponential backoff, full jitter, and retry caps",
    ],
  },
  {
    title: "Distributed Rate Limiter",
    stack: "Java, Spring Boot, Redis, Lua, Docker, k6, Git/GitHub",
    link: "https://github.com/harjot3/distributed-rate-limiter",
    bullets: [
      "Implemented a distributed rate limiter in Java using Spring Boot and Redis to enforce per-client request limits",
      "Used atomic Lua scripting to eliminate race conditions in concurrent check-and-decrement operations",
      "Built a token bucket algorithm supporting continuous refill and burst handling",
      "Replaced naive fixed-window counting to avoid boundary-burst overshoot",
    ],
  },
  {
    title: "Spacecraft Flight Software Simulator",
    stack: "C, GCC, Make, Git/GitHub",
    link: "https://github.com/harjot3/spacecraft-flight-software-simulator",
    bullets: [
      "Designed a finite-state machine in C modeling spacecraft operating modes (BOOT/SAFE/NOMINAL/SCIENCE)",
      "Built an explicit transition table rejecting illegal mode changes",
      "Followed NASA JPL's Power of 10 rules for safety-critical C",
      "Avoided dynamic memory allocation and unbounded loops for predictable runtime behavior",
    ],
  },
  {
    title: "Wizard Platformer",
    stack: "Java, Swing/AWT, Object-Oriented Design",
    link: "https://github.com/harjot3/Wizard-Platformer",
    bullets: [
      "Built a 2D platformer in Java using Swing/AWT with no external game engine",
      "Structured ~700 lines of code across 4 classes with a reusable Sprite entity model",
      "Implemented a CardLayout state machine driving menu, play, win, and loss screens",
      "Designed a custom gravity and jump system using velocity integration",
    ],
  },
];

export const skills: { label: string; items: string }[] = [
  { label: "Languages", items: "Java, Python, C/C++, TypeScript, JavaScript, SQL (Postgres), HTML/CSS" },
  { label: "Frameworks", items: "React, Node.js, Express, Spring Boot, Flask, JUnit" },
  { label: "Developer Tools", items: "Git, Docker, GCC, Make, Vercel, Supabase, Redis, k6, Visual Studio" },
  { label: "Libraries", items: "pandas, NumPy, Matplotlib, YOLOv8" },
];
