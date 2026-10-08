export const profile = {
  name: "Harjot Singh",
  role: "CS @ Purdue University",
  // Set via the VITE_CONTACT_EMAIL env var (Vercel project settings / local .env.local)
  // so the address isn't committed to source control.
  email: import.meta.env.VITE_CONTACT_EMAIL ?? "",
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
    role: "Software Engineer Intern",
    org: "SALUS Wellness",
    location: "Atlanta, GA",
    period: "May 2026 – August 2026",
    bullets: [
      "Developed full-stack web features using JavaScript, React, HTML, and CSS to deliver client-facing interfaces and responsive UI components",
      "Engineered RESTful APIs in Node.js/Express to aggregate wellness data from 25+ external partners into a unified pipeline",
      "Architected API endpoints powering core application features, optimizing data flow for 200+ active users",
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
    title: "Multithreaded Task Scheduler",
    stack: "C++17, C++ Standard Library, CMake, CTest",
    link: "https://github.com/harjot3/multithreaded-task-scheduler",
    bullets: [
      "Built a C++17 thread pool that runs tasks across a fixed set of worker threads with no external dependencies",
      "Implemented a mutex-protected priority queue with high, normal, and low priorities and FIFO ordering within each priority",
      "Used condition variables to coordinate workers and std::future to return task results and propagate exceptions",
      "Added graceful shutdown that drains accepted work and joins all workers, with tests for results, exceptions, ordering, concurrency, and shutdown",
    ],
  },
  {
    title: "Telemetry & Command System",
    stack: "C, POSIX Sockets, pthreads, Make, Python, GitHub Actions",
    link: "https://github.com/harjot3/telemetry-command-system",
    bullets: [
      "Built a local vehicle and ground-station simulation exchanging binary UDP commands and telemetry through POSIX sockets",
      "Coordinated worker threads with bounded ring-buffer queues, mutexes, and condition variables for command processing and telemetry delivery",
      "Designed a 24-byte protocol with explicit network-byte-order encoding, CRC-32 checksums, and sequence validation to reject malformed or replayed commands",
      "Implemented SAFE, IDLE, and ACTIVE states with a two-second command watchdog that resets throttle to zero on timeout",
      "Added C unit tests, Python integration tests over local UDP sockets, sanitizer targets, and a Linux CI workflow for GCC and Clang",
    ],
  },
];

export const skills: { label: string; items: string }[] = [
  { label: "Languages", items: "Java, Python, C/C++, TypeScript, JavaScript, SQL (Postgres), HTML/CSS" },
  { label: "Frameworks", items: "React, Node.js, Express, Spring Boot, Flask, JUnit" },
  { label: "Developer Tools", items: "Git, Docker, GCC, Make, Vercel, Supabase, Redis, k6, Visual Studio" },
  { label: "Libraries", items: "pandas, NumPy, Matplotlib, YOLOv8" },
];
