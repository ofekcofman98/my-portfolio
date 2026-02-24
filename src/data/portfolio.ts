import { TechStackCategory, Project, Experience, AnimationVariants } from "@/src/types/portfolio";

export const techStackByCategory: TechStackCategory = {
  Languages: [
    { name: "C#", icon: "C#" },
    { name: "Python", icon: "Python" },
    { name: "SQL", icon: "SQL" },
  ],
  Backend: [
    { name: "ASP.NET Core", icon: "ASP.NET Core" },
    { name: "FastAPI", icon: "FastAPI" },
  ],
  Database: [
    { name: "PostgreSQL", icon: "PostgreSQL" },
    { name: "MongoDB", icon: "MongoDB" },
  ],
  Messaging: [
    { name: "RabbitMQ", icon: "RabbitMQ" },
    { name: "Kafka", icon: "Kafka" },
  ],

  Frontend: [
    { name: "React", icon: "React" },
    { name: "TypeScript", icon: "TypeScript" },
    { name: "HTML", icon: "HTML" },
  ],
  Cloud: [
    { name: "GCP", icon: "GCP" },
    { name: "Supabase", icon: "Supabase" },
  ],
  DevOps: [
    { name: "Docker", icon: "Docker" },
    { name: "Git", icon: "Git" },
  ],
  Others: [
    { name: "Unity", icon: "Unity" },
  ],
};

export const projects: Project[] = [
  {
    title: "SQL Detective",
    description: "Cross-Platform Client-Server Software System with ASP.NET Core and Unity",
    bullets: [
      "Designed and implemented a complex client-server software system in C#, utilizing REST API for seamless communication between the frontend and backend.",
      "Built production-grade, cloud-integrated backend services for data access, session handling, and state synchronization, focusing on clean architecture, scalability, and clear separation of concerns.",
      "Note: The game is available for PC only."
    ],
    tech: ["C#", ".NET", "REST API", "Unity", "PostgreSQL"],
    githubClient: "https://github.com/ofekcofman98/SQL-Detective-Game",
    githubBackend: "https://github.com/ofekcofman98/SQL-Detective-Backend",
    demo: null,
    embedUrl: "https://itch.io/embed-upload/16346123?color=45281f",
    gameUrl: "https://ofekcofman98.itch.io/sql-detective-real",
    youtubeUrl: "https://www.youtube.com/watch?v=9zejBFtsaI8",
  },
  {
    title: "Event-Driven Data Platform",
    description: "Distributed, event-driven microservices architecture for order processing.",
    bullets: [
      "Designed and implemented a distributed, event-driven Microservices architecture for order processing.", 
      "Leveraged Asynchronous messaging via RabbitMQ and Kafka to ensure system resilience and decoupling",
      "Built a containerized environment using Docker and Docker Compose, ensuring high availability and clear separation of service boundaries.",
    ],
    tech: ["C#", ".NET", "RabbitMQ", "Kafka", "Docker", "Microservices"],
    github: "https://github.com/ofekcofman98/EDA-commerce-platform",
    demo: null,
  },
  {
    title: "Leads Management",
    description: "Full-stack application with backend routing system for assigning leads based on business rules.",
    bullets: [
      "Built backend routing system for assigning leads based on business rules, availability, and constraints",
      "Built and maintained a client-side application using React and TypeScript, implementing forms, data views, and API integrations to support backend workflows",
    ],
    tech: ["Python", "React", "TypeScript", "PostgreSQL", "FastAPI"],
    githubBackend: "https://github.com/kobt45/tb2-backend-ofek",
    githubFrontend: "https://github.com/ofekcofman98/tb2-leads-frontend",
    demo: null,
  },
];

export const experience: Experience[] = [
  {
    role: "Data Team Lead (Analytics & Automation)",
    company: "Unit 8200",
    period: "2017 - 2020",
    bullets: [
      "Led a team in the end-to-end design and deployment of mission-critical backend tools and high-scale analytical systems.",
      "Developed Python-based data services, supporting real-time operations under high-pressure constraints.",
      "Delivered a significant increase in intelligence output for national-scale missions by optimizing data processing pipelines and search algorithms.",
    ],
  },
  {
    role: "Data Analyst",
    company: "Maccabi Health Care Services",
    period: "2021 - 2022",
    bullets: [
      "Built automated Python-based data pipelines using SQL, improving data quality and availability, and enabling KPI tracking for operational and managerial decision-making.",
      "Designed dashboards and data workflows and integrations adopted by senior leadership and the Ministry of Health.",
    ],
  },
];

export const fadeInUp: AnimationVariants = {
  initial: { opacity: 0, y: 60 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const staggerContainer: AnimationVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

