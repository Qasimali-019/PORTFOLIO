// ─── Centralized Portfolio Data — Single Source of Truth ─────────────────────
// All UI components and AI retrieval consume this data.

export interface Profile {
  name: string;
  headline: string;
  summary: string;
  education: {
    degree: string;
    institution: string;
    affiliation: string;
    cgpa: string;
    graduation: string;
  };
  email: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  duration?: string;
  mode: string;
  points: string[];
  project?: string;
  projectStatus?: string;
  team?: string;
  logo: string;
  certificate?: string;
  stack?: string[];
}

export interface Project {
  id: string;
  name: string;
  status: string;
  category: string;
  purpose: string;
  github?: string;
  url?: string;
  stack: string[];
  facts: string[];
  limitations?: string;
  screenshots: { label: string; src: string }[];
}

export interface Skill {
  category: string;
  icon: string;
  items: string[];
}

export interface Achievement {
  title: string;
  organization?: string;
  track?: string;
  location?: string;
  team?: string;
  scale?: string;
  type?: string;
  image?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  issued: string;
  credentialId?: string;
  image?: string;
}

// ─── PROFILE ────────────────────────────────────────────────────────────────

export const profile: Profile = {
  name: "Qasim Ali",
  headline:
    "Full Stack Developer | QA & Software Testing Intern",
  summary:
    "Computer Science student and full-stack developer with hands-on, production-grade experience building live software for paying clients, combined with current QA and software testing internship experience.",
  education: {
    degree: "B.Sc. Computer Science",
    institution: "Air University",
    affiliation: "Islamabad, Pakistan",
    cgpa: "Currently Pursuing",
    graduation: "Sep 2023 – Jun 2027",
  },
  email: "qasim.aliii019@gmail.com",
  linkedin: "www.linkedin.com/in/qasimaliii019",
  github: "https://github.com/Qasimali-019",
  location: "Islamabad, Pakistan",
};

// ─── EXPERIENCE ─────────────────────────────────────────────────────────────

export const experience: Experience[] = [
  {
    role: "Full Stack Developer Intern (QA & Development)",
    organization: "Outscalers Pvt Ltd",
    period: "Jul 2026 – Present",
    mode: "Rawalpindi Saddar, Pakistan (On-site)",
    points: [
      "Perform QA and software testing of web applications, covering test modules, workflows, user roles, and permissions",
      "Identify, document, and verify bugs and fixes; analyze requirements to confirm fixes align with expected application behavior",
      "Contribute to full-stack development on live projects under team guidance, strengthening front-end and back-end skills through hands-on delivery",
    ],
    logo: "/assets/experience/logos/outscalers.jpg",
  },
  {
    role: "Full Stack Developer — Sole Developer",
    organization: "superchina.pk (Client)",
    period: "Jul 2024 – Sep 2024",
    mode: "Quetta, Pakistan",
    points: [
      "Sole developer on a live, production-grade POS and inventory management platform for a paying business — delivered on time with zero supervision",
      "Built real-time backend in Node.js, Express.js, and MSSQL handling livestock reconciliation, revenue calculations, COGS tracking, and RBAC for Admin and Cashier roles",
      "Developed a refund engine that automatically reverses inventory, revenue, and profit in real time, preventing duplicate refunds by locking processed bills",
    ],
    stack: ["TypeScript", "React.js", "Node.js", "Express.js", "MSSQL", "REST API"],
    logo: "/assets/experience/logos/logo.png",
  },
  {
    role: "Full Stack Developer — Sole Developer",
    organization: "dollarquetta.online (Client)",
    period: "march 2026 – april 2026",
    mode: "Quetta, Pakistan",
    points: [
      "Sole developer on a second live POS and inventory management platform, mirroring the scope of the superchina.pk system on an independent tech stack",
      "Designing and building backend and frontend architecture with Node.js, React.js, and PostgreSQL; currently extending the platform with an integrated e-commerce storefront (in development)",
    ],
    stack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "REST API"],
    logo: "/assets/experience/logos/DOLLAR.png",
  },
  {
    role: "Full Stack Developer — Sole Developer",
    organization: "Siratul Mustaqeem (Client)",
    period: "2026 – Present",
    mode: "Islamabad, Pakistan",
    points: [
      "Architecting a full Islamic guidance and community web app from scratch — designed system architecture, UX wireframes, React/TypeScript component hierarchy, and a fully normalized PostgreSQL schema",
      "Engineered secure authentication, session management, RBAC, and activity feeds; applied advanced React patterns including custom hooks, Context API, and lazy loading",
    ],
    stack: ["React.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "REST API"],
    logo: "/assets/experience/logos/SIRAT.png",
  },
];

// ─── PROJECTS ───────────────────────────────────────────────────────────────

export const projects: Project[] = [
  // ─── Client / Private Work ──────────────────────────────────────────────

  {
    id: "siratulmustaqeem",
    name: "Siratul Mustaqeem",
    status: "Live",
    category: "Full-Stack / Community Platform",
    purpose:
      "Islamic guidance and community web app architected from scratch — system design, UX wireframes, and a fully normalized PostgreSQL schema.",
    github: "https://github.com/Qasimali-019/siratulmustaqeem",
    url: "https://siratal-mustaqeem.org/",
    stack: ["React.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL"],
    facts: [
      "Secure authentication, session management, and RBAC",
      "Activity feeds and advanced React patterns: custom hooks, Context API, lazy loading",
    ],
    screenshots: [],
  },

  {
    id: "super-china-pos",
    name: "superchina.pk — POS & Inventory System",
    status: "Live (Client, Private)",
    category: "Full-Stack / Client Project",
    purpose:
      "Production POS and inventory management platform built solo for a live paying business, handling real-time inventory, revenue, and role-based access.",
    github: "https://github.com/Qasimali-019/super-china-pos",
    stack: ["TypeScript", "React.js", "Node.js", "Express.js", "MSSQL", "REST API"],
    facts: [
      "Real-time backend handling livestock reconciliation, revenue calculations, and COGS tracking",
      "RBAC for Admin and Cashier roles",
      "Refund engine that auto-reverses inventory, revenue, and profit while locking processed bills",
    ],
    screenshots: [],
  },
  {
    id: "pos-fahad",
    name: "POS-FAHAD — Cash-Only POS System",
    status: "Live (Client, Private)",
    category: "Full-Stack / POS",
    purpose:
      "Cash-only POS system with a dedicated refund & exchange module, built with an immutable-bill architecture and after-the-fact review flagging.",
    github: "https://github.com/Qasimali-019/POS-FAHAD",
    stack: ["React.js", "TypeScript", "Vite", "Node.js", "Express.js", "PostgreSQL"],
    facts: [
      "Original bills stay read-only; every refund/exchange creates a new linked bill or voucher",
      "Transactions post to the report of the day they occur, not the original sale date",
      "High-value refunds are auto-flagged for review instead of requiring real-time manager approval",
    ],
    screenshots: [],
  },

  {
    id: "eventbookings",
    name: "Event Bookings",
    status: "Portfolio Project",
    category: "Full-Stack / Event Management",
    purpose:
      "Smart event management platform supporting in-person, virtual, and hybrid events with ticketing, attendee check-in, and post-event analytics.",
    github: "https://github.com/Qasimali-019/eventbookings",
    url: "https://eventbookings.vercel.app",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redis", "JWT", "REST API"],
    facts: [
      "Workflow automation engine triggering email/SMS via SendGrid and Twilio",
      "Redis caching and rate limiting",
      "Four-tier RBAC (User / Admin / Organizer / Host)",
    ],
    screenshots: [],
  },

  // ─── Public Projects ─────────────────────────────────────────────────────
  {
    id: "attendify-ai",
    name: "Attendify AI",
    status: "Portfolio Project",
    category: "AI / Computer Vision",
    purpose:
      "Smart attendance system using digital image processing and face recognition to identify students from a classroom photo.",
    github: "https://github.com/Qasimali-019/Attendify-AI",
    stack: ["Python"],
    facts: [
      "Face recognition matches registered student photos automatically",
      "Removes manual attendance marking from the classroom workflow",
    ],
    screenshots: [],
  },
  {
    id: "omnidispatch",
    name: "OmniDispatch",
    status: "Portfolio Project",
    category: "Backend / Messaging",
    purpose:
      "Backend-first messaging delivery service supporting batch SMS dispatch, contact processing, and structured event logging.",
    github: "https://github.com/Qasimali-019/OmniDispatch",
    stack: ["Python"],
    facts: [
      "Batch SMS dispatch pipeline",
      "Structured event logging for delivery tracking",
    ],
    screenshots: [],
  },
  {
    id: "product-listing-app",
    name: "Product Listing App",
    status: "Portfolio Project",
    category: "Full-Stack / E-Commerce",
    purpose:
      "Complete e-commerce workflow demo with product listings, dynamic categories, and role-protected admin features.",
    github: "https://github.com/Qasimali-019/Product-Listing-App",
    stack: ["JavaScript", "React.js", "Node.js"],
    facts: [
      "Product listing with image, price, description, and category",
      "Dynamic category management",
      "Admin and user roles with protected routes",
    ],
    screenshots: [],
  },
  {
    id: "ticket-management-system",
    name: "Ticket Management System",
    status: "Portfolio Project",
    category: "Full-Stack / .NET",
    purpose:
      "Web-based ticket management system built on the .NET stack with Blazor and Razor Pages.",
    github: "https://github.com/Qasimali-019/TicketManagementSystem",
    stack: [".NET 8", "Blazor", "Razor Pages", "SQL Server"],
    facts: [
      "Full CRUD ticket workflow on .NET 8",
      "Blazor + Razor Pages hybrid frontend",
    ],
    screenshots: [],
  },
  {
    id: "macromaster-ai",
    name: "MacroMaster AI",
    status: "Semester Project",
    category: "AI / Mobile",
    purpose:
      "Flutter-based mobile app that uses AI to automate workflows and simplify complex tasks through intelligent macros.",
    github: "https://github.com/Qasimali-019/MacroMasterAi-App",
    stack: ["Dart", "Flutter"],
    facts: [
      "AI-driven macro automation for repetitive tasks",
      "Cross-platform mobile app built with Flutter",
    ],
    screenshots: [],
  },
  {
    id: "shopping-management-system",
    name: "Shopping Management System",
    status: "Semester Project",
    category: "C++ / Systems",
    purpose:
      "Comprehensive C++ supermarket management application handling inventory, customer transactions, and admin tasks for a retail environment.",
    github: "https://github.com/Qasimali-019/Shopping-management-system",
    stack: ["C++"],
    facts: [
      "Inventory and transaction management in native C++",
      "Administrative tooling for retail operations",
    ],
    screenshots: [],
  },
];

// ─── SKILLS ─────────────────────────────────────────────────────────────────

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    icon: "code",
    items: ["JavaScript (ES6+)", "TypeScript", "C++", "Java",],
  },
  {
    category: "Frontend",
    icon: "layout",
    items: ["HTML5", "CSS3", "React.js", "Next.js", "Vite", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: "server",
    items: ["Node.js", "Express.js", "REST API"],
  },
  {
    category: "Databases",
    icon: "database",
    items: ["PostgreSQL", "MSSQL", "SQL Server", "SQLite", "Redis"],
  },
  {
    category: "QA & Software Testing",
    icon: "check-circle",
    items: ["Test Case Design", "Bug Tracking & Verification", "Requirements Analysis", "RBAC/Permissions Testing"],
  },
  {
    category: "DevOps & Tools",
    icon: "wrench",
    items: ["Git", "GitHub", "Docker", "JWT", "Vercel", "Netlify"],
  },
];
// ─── ACHIEVEMENTS ───────────────────────────────────────────────────────────

export const achievements: Achievement[] = [];

// ─── CERTIFICATIONS ─────────────────────────────────────────────────────────

export const certifications: Certification[] = [];

// ─── ALL GALLERY IMAGES ─────────────────────────────────────────────────────

export const galleryImages: { src: string; label: string }[] = [];

// ─── AI GROUNDING ───────────────────────────────────────────────────────────

export const aiGrounding = {
  allowedScope: "Questions about Qasim and his verified portfolio.",
  unknownResponse: "I don't have verified information about that.",
  unrelatedResponse:
    "I'm Ask Qasim, so I only answer questions about Qasim and his work.",
  futureRule:
    "Never state an unverified future event as a fact. Distinguish goals/plans from guaranteed outcomes.",
  privateRule:
    "Do not expose private repository URLs or private project details as public resources.",
};

// ─── SEARCH INDEX ───────────────────────────────────────────────────────────

export interface SearchItem {
  title: string;
  category: string;
  appId: string;
  subRoute?: string;
  keywords: string[];
}

export const searchIndex: SearchItem[] = [
  ...projects.map((p) => ({
    title: p.name,
    category: "Project",
    appId: "projects",
    subRoute: p.id,
    keywords: [p.name, p.category, ...p.stack, ...p.facts].map((k) =>
      k.toLowerCase()
    ),
  })),
  ...experience.map((e) => ({
    title: `${e.role} — ${e.organization}`,
    category: "Experience",
    appId: "experience",
    keywords: [e.role, e.organization, ...e.points].map((k) =>
      k.toLowerCase()
    ),
  })),
  ...skills.flatMap((s) =>
    s.items.map((item) => ({
      title: item,
      category: `Skill — ${s.category}`,
      appId: "skills",
      keywords: [item.toLowerCase(), s.category.toLowerCase()],
    }))
  ),
  ...achievements.map((a) => ({
    title: a.title,
    category: "Achievement",
    appId: "achievements",
    keywords: [
      a.title,
      a.organization || "",
      a.track || "",
      a.team || "",
    ].map((k) => k.toLowerCase()),
  })),
  ...certifications.map((c) => ({
    title: c.title,
    category: "Certification",
    appId: "certifications",
    keywords: [c.title, c.issuer, c.issued].map((k) => k.toLowerCase()),
  })),
  {
    title: "Qasim Ali",
    category: "Profile",
    appId: "about",
    keywords: ["qasim", "ali", "about", "profile", "education", "ai", "ml"],
  },
  {
    title: "Resume",
    category: "Document",
    appId: "resume",
    keywords: ["resume", "cv", "pdf", "download"],
  },
  {
    title: "Contact",
    category: "Contact",
    appId: "contact",
    keywords: ["contact", "email", "linkedin", "github"],
  },
];

// ─── COMPATIBILITY EXPORT ───────────────────────────────────────────────────

export const portfolioData = {
  profile: {
    name: profile.name,
    headline: profile.headline,
    summary: profile.summary,
    bio: profile.summary,
    email: profile.email,
    linkedin: profile.linkedin,
    github: profile.github,
    location: profile.location,
  },
  education: [
    {
      institution: profile.education.institution,
      degree: profile.education.degree,
      affiliation: profile.education.affiliation,
      cgpa: profile.education.cgpa,
      duration: profile.education.graduation,
    },
  ],
  links: {
    linkedin: profile.linkedin,
    github: profile.github,
    email: profile.email,
  },
  experience: experience.map((e) => ({
    ...e,
    company: e.organization,
    title: e.role,
  })),
  projects: projects.map((p) => ({
    ...p,
    title: p.name,
  })),
  skills,
  achievements,
  certifications,
  galleryImages,
};
