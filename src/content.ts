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
    "Data Structures & Algorithms, Programming in C, Object-Oriented Programming",
};

export type ExperienceItem = {
  role: string;
  org: string;
  location: string;
  period: string;
  story: string[];
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Software Engineer Intern",
    org: "SALUS Wellness",
    location: "Atlanta, GA",
    period: "May 2026 – August 2026",
    story: [
      "SALUS is an Atlanta-based healthtech startup helping trainers and health professionals spend less time on admin and more time coaching, with a focus on underserved communities. I built the entire public landing page to introduce the platform, and developed backend services connecting client messaging, booking, and other coaching tools.",
    ],
    bullets: [
      "Built the public landing page with React, HTML, and CSS to introduce the platform’s coaching and client management tools",
      "Developed REST APIs in JavaScript with Node.js and Express, unifying data from 25+ partners into one pipeline",
      "Built backend services for client messaging and booking, supporting core platform features for 200+ active users",
    ],
  },
  {
    role: "AI Research Assistant",
    org: "Umilis Lab, Purdue University",
    location: "West Lafayette, IN",
    period: "January 2026 – May 2026",
    story: [
      "At Umilis Lab, I helped automate the analysis of Drosophila wing images. I built a Python pipeline for segmentation and feature extraction to reduce manual processing, alongside validation checks that helped researchers catch annotation errors early.",
    ],
    bullets: [
      "Built a CNN-based image segmentation pipeline in Python for 500+ Drosophila wing images, reducing manual processing time by 60%",
      "Automated feature extraction, reducing per-dataset processing time by 56%, from 3.2 to 1.4 minutes",
      "Added validation checks that surfaced three classes of annotation errors",
    ],
  },
  {
    role: "Machine Learning Researcher",
    org: "The Data Mine, Purdue University",
    location: "West Lafayette, IN",
    period: "August 2025 – May 2026",
    story: [
      "At The Data Mine, our team partnered with V2X, a defense contractor previously connected with Raytheon Technologies, to read license plates automatically for tolling, working with a dataset of roughly 400,000 vehicle images. I led much of the pipeline development, from model training and plate detection to cropping and OCR integration. We evaluated challenging cases including poor lighting, stacked letters, and multiple vehicles in a frame.",
    ],
    bullets: [
      "Built plate detection and cropping logic in Python with an off-the-shelf YOLO11 model and OpenCV, isolating plates for character recognition",
      "Integrated FastPlateOCR and generated CSV output with predicted plate reads and confidence scores for evaluation",
      "The team’s complete pipeline processed 25,000 vehicle images in 70.5 minutes and achieved 91% overall accuracy",
      "The detection and cropping stage prepared 25,000 images for OCR in about 33 minutes, processing 12.63 images per second",
      "Evaluated difficult plate formats and lighting conditions to guide further work toward the project’s 95% accuracy target",
    ],
  },
];

export type Project = {
  title: string;
  stack: string;
  link: string;
  story: string[];
  bullets: string[];
};

export const projects: Project[] = [
  {
    title: "Manga Release Tracker / Aggregator",
    stack: "TypeScript, Node.js, PostgreSQL, Supabase, Vercel, HTML/CSS",
    link: "https://github.com/harjot3/manga-release-tracker",
    story: [
      "One of my favorite projects, this tracker brings manga releases from multiple sources into one place so readers can find new chapters and follow their favorite titles. I built the aggregator to handle the feed: duplicate chapters, repeated polls, and source API limits, without creating repeated releases or notifications.",
    ],
    bullets: [
      "Architected a serverless manga-release aggregator in TypeScript, polling multiple APIs via Vercel Functions",
      "Built a responsive HTML/CSS and JavaScript prototype with a latest-release feed, searchable catalog, demo data, and locally stored follow preferences",
      "Implemented cross-source chapter deduplication and a pluggable notification adapter for subscriptions",
      "Designed a normalized 5-table Postgres schema with RLS and partial indexes",
      "Used composite idempotency keys to prevent duplicate rows and notifications on re-polling",
      "Added a rate-limit-aware fetch layer with exponential backoff, full jitter, and retry caps",
    ],
  },
  {
    title: "Distributed Rate Limiter",
    stack: "Java, Spring Boot, Redis, Lua, Docker, k6, Git/GitHub",
    link: "https://github.com/harjot3/distributed-rate-limiter",
    story: [
      "When an API runs across multiple instances, they need to agree on how many requests each client can make. I built a rate limiter with shared Redis state and atomic updates to keep concurrent requests within that allowance, while using a token bucket to support short bursts.",
    ],
    bullets: [
      "Implemented a distributed rate limiter in Java using Spring Boot and Redis to enforce per-client request limits",
      "Used atomic Lua scripting to eliminate race conditions in concurrent check-and-decrement operations",
      "Built a token bucket algorithm supporting continuous refill and burst handling",
      "Replaced naive fixed-window counting to avoid boundary-burst overshoot",
    ],
  },
  {
    title: "Telemetry & Command System",
    stack: "C, POSIX Sockets, pthreads, UDP, Make, Python, GitHub Actions",
    link: "https://github.com/harjot3/telemetry-command-system",
    story: [
      "I built a local C simulation of a vehicle and ground station exchanging commands and telemetry. The focus was how the vehicle responds when communication goes wrong: validating incoming messages, coordinating worker threads, and returning the throttle to zero when commands stop arriving.",
    ],
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
  { label: "Libraries", items: "pandas, NumPy, Matplotlib, YOLO11, OpenCV, FastPlateOCR" },
];
