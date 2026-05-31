export interface TechItem {
  name: string;
  icon: string;
}

export interface TechStackCategory {
  [category: string]: TechItem[];
}

export interface Project {
  title: string;
  description: string;
  bullets?: string[];
  tech: string[];
  github?: string;
  githubClient?: string;
  githubBackend?: string;
  githubFrontend?: string;
  demo?: string | null;
  embedUrl?: string;
  gameUrl?: string;
  youtubeUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

import { Variants } from "framer-motion";

export type AnimationVariants = Variants;

