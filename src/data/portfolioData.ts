export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  technologies: string[];
  categories: string[];
  featured?: boolean;
  image: string;
  gallery: string[];
  liveUrl?: string;
  githubUrl?: string;
  overview: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  architecture: string[];
  challenges: string[];
  outcome: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; iconName?: string; highlight?: boolean }[];
}

export interface JourneyItem {
  period: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  type: 'education' | 'leadership' | 'achievement' | 'hackathon';
  badge?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  image?: string;
  certificateAlt?: string;
  badge: string;
  category: 'award' | 'hackathon' | 'leadership';
  highlight?: boolean;
}

export interface EventActivityItem {
  id: string;
  title: string;
  category?: string;
  role: string;
  type: string;
  organization: string;
  year: string;
  description: string;
  certificateImage: string;
  certificateAlt: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  category: string;
  pdfUrl?: string;
  description: string;
  badgeText: string;
}

export interface EngineeringHighlight {
  slug: string;
  title: string;
  projectName: string;
  projectSlug: string;
  badge: string;
  description: string;
  technologies: string[];
  href: string;
}

export interface TechnicalNote {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  tags: string[];
  summary: string;
  content: string[];
}

export const personalInfo = {
  name: "Nipun Kulshrestha",
  role: "Full Stack Developer",
  subRole: "Aspiring Software Engineer",
  email: "nipunkulshrestha25@gmail.com",
  phone: "+91 8799207242",
  location: "Vadodara, Gujarat, India",
  educationBadge: "Parul University · B.Tech CSE (2023–2027)",
  cgpa: "7.83 / 10",
  bio: "Computer Science and Engineering student with hands-on experience building full-stack web applications using Java, Python, JavaScript, TypeScript, React.js, Next.js, Node.js, Express.js, and modern database technologies.",
  extendedBio: "Passionate about solving complex problems, designing scalable RESTful APIs, and building resilient, user-centric software solutions. Hands-on experience across the entire development lifecycle—from relational database architecture and computer vision pipelines to responsive frontend interfaces and cloud deployments.",
  resumeUrl: "/resume/Nipun_Kulshrestha_Resume.pdf",
  stats: [
    { label: "Full-Stack Projects", value: "3+", detail: "Production & Simulation Web Apps" },
    { label: "Core Technologies", value: "10+", detail: "React, Next.js, Node, Supabase, SQL" },
    { label: "Competitive Programming", value: "3rd", detail: "Code Optics Competition" },
    { label: "National Challenge", value: "Top 1000", detail: "India Innovates 2026" },
  ]
};

export const socialLinks = {
  github: "https://github.com/nipun-25",
  linkedin: "https://www.linkedin.com/in/nipun-kulshrestha-816604288/",
  leetcode: "https://leetcode.com/u/nipunkul_19/",
  email: "mailto:nipunkulshrestha25@gmail.com",
};

export const capabilities = [
  {
    id: "full-stack",
    title: "Full-Stack Web Applications",
    tagline: "End-to-end architectures",
    description: "Architecting modular, production-ready web platforms with Next.js App Router, React, TypeScript, and Tailwind CSS on the frontend paired with resilient server runtimes.",
    technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Vercel"],
    metric: "3 Deployed Projects",
    linkText: "Explore Projects",
    linkHref: "#projects"
  },
  {
    id: "backend-apis",
    title: "Backend Systems & RESTful APIs",
    tagline: "High-performance services",
    description: "Designing structured RESTful APIs, secure session/JWT authentication, database schema modeling, and integration with cloud services like Supabase and PostgreSQL.",
    technologies: ["Node.js", "Express.js", "Supabase", "PostgreSQL", "MongoDB"],
    metric: "Scalable Data Layers",
    linkText: "View Skills",
    linkHref: "#skills"
  },
  {
    id: "cloud-systems",
    title: "Modern Cloud & Engineering Tools",
    tagline: "Containerization & DevOps",
    description: "Implementing version-controlled CI/CD workflows with Git and GitHub, containerizing services with Docker, and monitoring platforms across modern cloud infrastructure.",
    technologies: ["Docker", "Git / GitHub", "Vercel", "Postman", "Linux"],
    metric: "Modern Workflows",
    linkText: "View Experience",
    linkHref: "#experience"
  }
];

export const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages for systems, algorithms, and full-stack development",
    skills: [
      { name: "JavaScript", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "Python", highlight: true },
      { name: "Java", highlight: true },
    ]
  },
  {
    title: "Frontend Development",
    description: "Modern component libraries, styling frameworks, and responsive UX",
    skills: [
      { name: "Next.js (App Router)", highlight: true },
      { name: "React.js", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "HTML5 & CSS3" },
      { name: "Framer Motion" },
      { name: "Radix UI" },
    ]
  },
  {
    title: "Backend & APIs",
    description: "Server architectures, authentication, and endpoint design",
    skills: [
      { name: "Node.js", highlight: true },
      { name: "Express.js", highlight: true },
      { name: "RESTful APIs", highlight: true },
      { name: "JWT & Supabase Auth", highlight: true },
      { name: "Middleware Design" },
    ]
  },
  {
    title: "Databases & Storage",
    description: "Relational modeling, document stores, and cloud storage",
    skills: [
      { name: "PostgreSQL", highlight: true },
      { name: "Supabase", highlight: true },
      { name: "MongoDB", highlight: true },
      { name: "MySQL" },
    ]
  },
  {
    title: "Developer Tools & DevOps",
    description: "Version control, containerization, and cloud deployment pipelines",
    skills: [
      { name: "Git & GitHub", highlight: true },
      { name: "Docker", highlight: true },
      { name: "Vercel", highlight: true },
      { name: "Postman" },
      { name: "VS Code" },
    ]
  },
  {
    title: "Core Computer Science",
    description: "Fundamental engineering principles and analytical problem-solving",
    skills: [
      { name: "Data Structures & Algorithms (DSA)", highlight: true },
      { name: "Object-Oriented Programming (OOP)", highlight: true },
      { name: "Database Management Systems (DBMS)", highlight: true },
      { name: "Operating Systems" },
      { name: "Computer Networks" },
    ]
  }
];

export const journeyData: JourneyItem[] = [
  {
    period: "2023 – 2027",
    title: "Bachelor of Technology in Computer Science and Engineering",
    organization: "Parul University",
    location: "Vadodara, Gujarat",
    description: "Pursuing B.Tech with focus on Data Structures, Algorithms, Full-Stack Software Engineering, and Database Systems. Current CGPA: 7.83 / 10.",
    type: "education",
    badge: "CGPA 7.83"
  },
  {
    period: "2026",
    title: "Top 1000 Teams — National Innovation Challenge",
    organization: "India Innovates 2026",
    location: "National Level",
    description: "Selected among the top 1000 national teams for proposing and architecting an innovative software solution addressing real-world operational challenges.",
    type: "achievement",
    badge: "Top 1000 National"
  },
  {
    period: "2025–2026",
    title: "Team Lead — Startup & Innovation",
    organization: "Vadodara Startup Festival (VSF 6.0)",
    location: "Parul Innovation and Entrepreneurship Research Center Cell, Parul University",
    description: "Led the team by managing project deliverables, assigning tasks, and presenting software prototypes to startup mentors and evaluators.",
    type: "leadership",
    badge: "Team Lead"
  },
  {
    period: "2026",
    title: "Organizing Team Member & Volunteer",
    organization: "Tech Expo 2026 & PU Code Hackathon",
    location: "Parul University",
    description: "Contributed to technical event planning, participant guidance, and operational coordination across university-wide coding challenges and project demonstrations.",
    type: "leadership",
    badge: "Event Operations"
  },
  {
    period: "2024",
    title: "3rd Place — Competitive Programming",
    organization: "Code Optics, Parul University",
    location: "Vadodara, Gujarat",
    description: "Achieved 3rd place in an intensive university-level competitive programming competition testing algorithmic problem-solving speed and algorithmic precision.",
    type: "achievement",
    badge: "3rd Place Podium"
  },
  {
    period: "2024",
    title: "Technical Events & Hackathons",
    organization: "Parul University & Technical Event Cell",
    location: "State / University",
    description: "Collaborated in high-paced multidisciplinary technical environments, prototyping civic technology and web platforms under tight deadline constraints.",
    type: "hackathon",
    badge: "Hackathon Participant"
  }
];

export const projectsData: Project[] = [
  {
    slug: "civic-issue-tracker",
    title: "Civic Issue Tracker",
    subtitle: "Smart Urban Maintenance & Incident Management System",
    tagline: "Featured Project · Computer Vision · Full Stack",
    description: "Full-stack civic issue reporting and monitoring platform designed to streamline urban maintenance, infrastructure management, and municipal response workflows.",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "TypeScript", "Node.js", "Supabase", "Leaflet"],
    categories: ["Featured", "Full Stack", "Web Application", "AI & Computer Vision"],
    featured: true,
    image: "/projects/civic-issue-tracker/Screenshot 2026-09-13 140114.png",
    gallery: [
      "/projects/civic-issue-tracker/Screenshot 2026-09-13 140114.png",
      "/projects/civic-issue-tracker/Screenshot 2026-09-13 140128.png",
      "/projects/civic-issue-tracker/Screenshot 2026-09-13 140142.png",
      "/projects/civic-issue-tracker/Screenshot 2026-09-13 140209.png",
      "/projects/civic-issue-tracker/Screenshot 2026-09-13 140239.png",
      "/projects/civic-issue-tracker/Screenshot 2026-09-13 140356.png",
      "/projects/civic-issue-tracker/Screenshot 2026-09-13 140513.png",
      "/projects/civic-issue-tracker/Screenshot 2026-09-13 141032.png",
    ],
    liveUrl: "https://civicissuetracker.vercel.app/",
    githubUrl: "https://github.com/Modi-Krish/Civic-Issue-Tracker-",
    overview: "Civic Issue Tracker is an end-to-end digital municipal platform bridging the communication gap between citizens and municipal authorities. It provides an intuitive interface for citizens to report potholes, garbage dumps, broken streetlights, and water leakage with geotagged photographic evidence, while supplying administrative authorities with an automated classification and dispatch dashboard.",
    problem: "Urban infrastructure degradation often goes unresolved due to fragmented reporting channels, lack of precise geospatial context, manual report triage bottlenecks, and zero transparency for citizens regarding resolution status.",
    solution: "A unified full-stack solution featuring citizen authentication, instant photographic issue logging with interactive Leaflet map pinpoints, an automated Computer Vision triage pipeline for hazard detection and categorization, and a real-time administrative dashboard for automated department assignment, progress tracking, and public status transparency.",
    keyFeatures: [
      "Citizen Authentication & Secure Session Management via Supabase Auth",
      "Interactive Geotagged Issue Reporting with Leaflet Maps and GPS coordinates",
      "Automated Issue Classification & Hazard Detection via Computer Vision pipeline",
      "Administrative Management Dashboard for municipal authority task assignments",
      "Department-Level Routing (Roads, Sanitation, Electrical, Water Works)",
      "Real-Time Status Lifecycle Updates (Reported → In Progress → Resolved)",
      "Image Storage & CDN delivery with Supabase Storage buckets",
      "Responsive, accessible design optimized for field workers and desktop administrators"
    ],
    architecture: [
      "Frontend: Next.js 14 App Router, React.js, Tailwind CSS, Leaflet Maps, Lucide Icons",
      "Backend Services: Node.js, Next.js Server Actions & API Routes, Supabase Edge Functions",
      "Data Persistence: Supabase PostgreSQL with Row Level Security (RLS) policies",
      "AI / Computer Vision: Automated image classification service detecting urban hazards",
      "Deployment: Continuous Integration and Deployment hosted on Vercel"
    ],
    challenges: [
      "Handling precise geospatial coordinates across varying mobile browsers with Leaflet integration.",
      "Structuring granular access control between regular citizens, municipal field staff, and departmental administrators.",
      "Optimizing image upload compression to ensure fast reporting over constrained mobile cellular networks."
    ],
    outcome: "Successfully developed and deployed a fully operational civic maintenance platform with a live public production deployment on Vercel and complete GitHub repository access."
  },
  {
    slug: "travelloop",
    title: "TravelLoop",
    subtitle: "Collaborative Travel Planning & Itinerary Management Platform",
    tagline: "Full Stack · PostgreSQL · Supabase",
    description: "A premium full-stack travel planning platform with seamless itinerary management, dynamic budget tracking, secure itinerary sharing, and collaborative planning tools.",
    technologies: ["TypeScript", "Next.js", "React.js", "Supabase", "PostgreSQL", "Tailwind CSS", "Vercel"],
    categories: ["Full Stack", "Web Application", "React / Next.js"],
    featured: false,
    image: "/projects/traveloop/Screenshot 2026-09-13 135511.png",
    gallery: [
      "/projects/traveloop/Screenshot 2026-09-13 135511.png",
      "/projects/traveloop/Screenshot 2026-09-13 135519.png",
      "/projects/traveloop/Screenshot 2026-09-13 135528.png",
      "/projects/traveloop/Screenshot 2026-09-13 135536.png",
      "/projects/traveloop/Screenshot 2026-09-13 135608.png",
      "/projects/traveloop/Screenshot 2026-09-13 135619.png",
    ],
    liveUrl: "https://traveloop-black.vercel.app/",
    githubUrl: "https://github.com/nipun-25/Traveloop",
    overview: "TravelLoop is a full-stack web application engineered to streamline the end-to-end vacation and business trip planning process. It allows travelers to organize multi-day itineraries, track expenses dynamically, collaborate with travel companions, and securely share trips via public or private links.",
    problem: "Travelers frequently struggle with fragmented planning across notes, spreadsheets, and chat groups, leading to untracked spending, disorganized daily schedules, and lost reservations.",
    solution: "An integrated travel suite combining structured daily activity builders, real-time budget calculation with currency breakdown, role-based sharing links, and persistent relational data storage.",
    keyFeatures: [
      "Multi-Day Itinerary Builder with drag-and-drop chronological sequencing",
      "Dynamic Budget & Expense Tracker calculating category spend in real-time",
      "Secure User Authentication and personalized trip dashboards via Supabase",
      "Public & Private Itinerary Sharing with fine-grained viewer permissions",
      "Responsive, clean UI crafted with Tailwind CSS for seamless mobile exploration",
      "PostgreSQL relational schema modeling trips, activities, expenses, and travelers"
    ],
    architecture: [
      "Frontend: Next.js, React.js, TypeScript, Tailwind CSS",
      "Backend & Storage: Supabase, PostgreSQL, Supabase Auth",
      "Deployment: Production deployment on Vercel with automated preview pipelines"
    ],
    challenges: [
      "Designing a flexible relational database schema capable of handling nested daily schedules, custom activities, and polymorphic expense entries.",
      "Ensuring responsive layout fluidity across both desktop trip planning and on-the-go mobile itinerary lookups."
    ],
    outcome: "Built and deployed a responsive travel platform actively hosted on Vercel with 100% TypeScript type safety and an intuitive user interface."
  },
  {
    slug: "sentinel",
    title: "Sentinel",
    subtitle: "Gig Worker Safety & Operational Risk Monitoring Platform",
    tagline: "Full Stack · Real-Time Systems · Docker",
    description: "Full-stack safety and monitoring platform engineered for gig workers and delivery personnel, featuring real-time risk assessment and incident awareness.",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "Radix UI", "Supabase", "PostgreSQL", "Docker", "Vercel"],
    categories: ["Full Stack", "Web Application", "Systems & Safety"],
    featured: false,
    image: "/projects/sentinel/Sentinel_Thumbnail.png",
    gallery: [
      "/projects/sentinel/Sentinel_Thumbnail.png",
      "/projects/sentinel/Img1_Persona.png",
      "/projects/sentinel/Img2_Hexagonal.png",
      "/projects/sentinel/Img3_SpatialGrid.png",
      "/projects/sentinel/Img4_UI.png",
      "/projects/sentinel/Img5_Interfaces.PNG",
    ],
    githubUrl: "https://github.com/KRUMER2023/Guidewire_Devtrials_Team_Megatron_Insurance_Startup_Simulation",
    overview: "Sentinel is an operational safety platform designed to protect on-field gig workers, logistics riders, and delivery personnel. Developed as part of the Guidewire Devtrials Insurance Startup Simulation, Sentinel integrates spatial hazard grid mapping, risk scoring, and operational incident workflows.",
    problem: "Gig delivery personnel face heightened road safety hazards, harsh climate extremes, and hazardous spatial zones without real-time proactive warnings or institutional safety tracking.",
    solution: "A hexagonal spatial-grid monitoring platform that analyzes environmental risk parameters, triggers automated alerts to field workers, and equips platform operators with real-time incident dispatch capabilities.",
    keyFeatures: [
      "Hexagonal Spatial Grid Risk Scoring & Zone Classification",
      "Real-Time Field Worker Monitoring and Safety Telemetry",
      "Interactive Operational Dashboard with Radix UI component primitives",
      "Automated Incident Awareness & Dispatch Workflow Triggers",
      "Dockerized container architecture for consistent deployment and local emulation",
      "Relational safety logs and personnel state storage using PostgreSQL and Supabase"
    ],
    architecture: [
      "Frontend: Next.js, React.js, Radix UI primitives, Tailwind CSS",
      "Backend & Services: Node.js, Supabase, PostgreSQL relational store",
      "Infrastructure & DevOps: Docker containerized runtime, Vercel frontend"
    ],
    challenges: [
      "Designing hexagonal spatial grid visualizations that render smoothly without browser lag.",
      "Modeling asynchronous risk factors into deterministic danger scores for delivery personnel."
    ],
    outcome: "Successfully prototyped and demonstrated during the Guidewire Devtrials simulation, featuring complete architectural diagrams, persona models, and interface implementations."
  }
];

export const achievementsData: AchievementItem[] = [
  {
    id: "code-optics",
    title: "3rd Place — Code Optics",
    organization: "Code Optics · Parul University",
    year: "2024",
    description: "Secured 3rd place in Code Optics, a competitive programming competition evaluating algorithmic problem-solving speed, data structures proficiency, and optimal space/time complexity.",
    image: "/achievements/OpticCode_2024.jpeg",
    certificateAlt: "Code Optics 2024 3rd Place award certificate",
    badge: "3RD PLACE PODIUM",
    category: "award",
    highlight: true
  },
  {
    id: "india-innovates",
    title: "Top 1000 Teams Nationwide",
    organization: "India Innovates 2026 National Innovation Challenge",
    year: "2026",
    description: "Selected among the Top 1000 Teams in the national-level innovation challenge for engineering an innovative, scalable software solution to address practical societal challenges.",
    image: "/achievements/IndiaInnovates_2026.jpeg",
    certificateAlt: "India Innovates 2026 top 1000 national certificate",
    badge: "TOP 1000 NATIONAL",
    category: "award",
    highlight: true
  }
];

export const eventActivitiesData: EventActivityItem[] = [
  {
    id: "cdc-funfest-2024",
    title: "CDC Global Funfest 2023–2024",
    role: "Active Coordinator",
    type: "COORDINATOR",
    organization: "Parul University",
    year: "2023–2024",
    description: "Actively coordinated the CDC Global Funfest 2023–2024, a global-level event organized by Parul University.",
    certificateImage: "/achievements/GlobalFunFest_2024.jpeg",
    certificateAlt: "CDC Global Funfest 2023–2024 coordinator certificate"
  },
  {
    id: "ethical-hacking-2024",
    title: "Ethical Hacking Workshop",
    role: "Workshop Attended",
    type: "WORKSHOP ATTENDED",
    organization: "Anvira Edustation · MS University Baroda",
    year: "2024",
    description: "Attended an Ethical Hacking Workshop in 2024 by Anvira Edustation, organized by MS University Baroda.",
    certificateImage: "/achievements/EthicalHacking_2024.jpeg",
    certificateAlt: "Ethical Hacking Workshop 2024 certificate"
  },
  {
    id: "footprints-2024",
    title: "Footprints 2024",
    role: "Participated",
    type: "PARTICIPATION",
    organization: "MS University Baroda",
    year: "2024",
    description: "Participated in Footprints 2024 held by MS University Baroda.",
    certificateImage: "/achievements/FootPrints_2024.jpeg",
    certificateAlt: "Footprints 2024 participation certificate"
  },
  {
    id: "tech-expo-2025",
    title: "Tech Expo 2025",
    role: "Participated with ML Project",
    type: "PARTICIPATION",
    organization: "Parul University · Technical Event Cell",
    year: "2025",
    description: "Participated in Tech Expo 2025 organized by Parul University with the Technical Event Cell, presenting an ML project.",
    certificateImage: "/achievements/TechExpo_2025.jpeg",
    certificateAlt: "Tech Expo 2025 participation certificate"
  },
  {
    id: "vsf-6-0-2025-2026",
    title: "Startup & Innovation Collaboration",
    category: "VADODARA STARTUP FESTIVAL (VSF 6.0)",
    role: "Lead of the Team",
    type: "LEAD OF THE TEAM",
    organization: "Parul Innovation and Entrepreneurship Research Center Cell, Parul University",
    year: "2025–2026",
    description: "Led the team by managing project deliverables, assigning tasks, and presenting software prototypes to startup mentors and evaluators.",
    certificateImage: "/achievements/VSF_2025.jpeg",
    certificateAlt: "Vadodara Startup Festival (VSF 6.0) team lead event photo"
  },
  {
    id: "odoo-hackathon-2026",
    title: "Odoo Hackathon 2026",
    role: "Organizing Committee",
    type: "ORGANIZING COMMITTEE",
    organization: "Parul University · Odoo India",
    year: "2026",
    description: "Worked as a member of the organizing committee for the Odoo Hackathon 2026, organized by Parul University in collaboration with Odoo India.",
    certificateImage: "/achievements/Odoo_2026.jpeg",
    certificateAlt: "Odoo Hackathon 2026 organizing committee certificate"
  },
  {
    id: "tech-expo-2026",
    title: "Tech Expo 2026",
    role: "Organizing Committee",
    type: "ORGANIZING COMMITTEE",
    organization: "Technical Event Cell · Parul University",
    year: "2026",
    description: "Worked as a member of the organizing committee for Tech Expo 2026, organized by the Technical Event Cell with Parul University.",
    certificateImage: "/achievements/TechExpo_2026.jpeg",
    certificateAlt: "Tech Expo 2026 organizing committee certificate"
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: "aws-academy",
    title: "AWS Academy Graduate",
    issuer: "Amazon Web Services (AWS)",
    category: "Cloud Computing",
    description: "Comprehensive training in cloud foundations, AWS architecture, IAM security, compute (EC2), storage (S3), and scalable cloud infrastructure.",
    badgeText: "Cloud Architecture",
    pdfUrl: "/certificates/AWS_Academy_Graduate___Cloud_Foundations___Training_Badge_Badge20250930-33-2lkvyc.pdf"
  },
  {
    id: "aws-skill-builder",
    title: "AWS Skill Builder Certification",
    issuer: "Amazon Web Services (AWS)",
    category: "Cloud Engineering",
    description: "Hands-on competency certification covering cloud infrastructure fundamentals, serverless paradigms, and distributed systems best practices.",
    badgeText: "AWS Verified",
    pdfUrl: "/certificates/Aws skillbulider certificate.pdf"
  },
  {
    id: "ibm-design",
    title: "Enterprise Design Thinking Practitioner",
    issuer: "IBM SkillsBuild",
    category: "Product & Architecture",
    description: "Practitioner badge certified by IBM, focusing on user-centered problem framing, iterative prototyping, and multidisciplinary software design workflows.",
    badgeText: "IBM Badge",
    pdfUrl: "/certificates/IBMDesign20260913-20-hlhiph.pdf"
  },
  {
    id: "hashgraph",
    title: "Hashgraph Developer Certification",
    issuer: "The Hashgraph Association",
    category: "Distributed Ledgers & Web3",
    description: "Certified developer credential covering Hedera Hashgraph consensus algorithms, smart contract architectures, and decentralized application design.",
    badgeText: "Developer Certified",
    pdfUrl: "/certificates/HashGraph certificate.pdf"
  }
];

export const engineeringHighlightsData: EngineeringHighlight[] = [
  {
    slug: "nextjs-supabase-architecture",
    title: "Next.js & Supabase Architecture",
    projectName: "TravelLoop",
    projectSlug: "travelloop",
    badge: "TravelLoop · Full Stack",
    description: "Designing structured relational database schemas, real-time expense calculations, and secure user session management with Next.js App Router and Supabase PostgreSQL.",
    technologies: ["Next.js", "Supabase", "PostgreSQL", "TypeScript"],
    href: "/projects/travelloop"
  },
  {
    slug: "computer-vision-civic-triage",
    title: "Computer Vision for Civic Issue Detection",
    projectName: "Civic Issue Tracker",
    projectSlug: "civic-issue-tracker",
    badge: "Civic Issue Tracker · Computer Vision",
    description: "Automated photographic classification and geotagged incident triage pipeline integrating Leaflet maps, Supabase Auth, and municipal department routing.",
    technologies: ["Next.js", "Computer Vision", "Leaflet", "Supabase"],
    href: "/projects/civic-issue-tracker"
  },
  {
    slug: "real-time-risk-monitoring",
    title: "Real-Time Monitoring & Risk Assessment",
    projectName: "Sentinel",
    projectSlug: "sentinel",
    badge: "Sentinel · Systems & Safety",
    description: "Hexagonal spatial risk indexing, automated environmental hazard alerts, and incident dispatch workflows engineered for on-field gig worker and delivery personnel safety.",
    technologies: ["Next.js", "Docker", "Spatial Indexing", "Radix UI"],
    href: "/projects/sentinel"
  }
];

export const technicalNotesData = engineeringHighlightsData;

