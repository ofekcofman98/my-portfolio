"use client";

import { motion } from "framer-motion";
import { Project } from "@/src/types/portfolio";
import { Github, ExternalLink, Play, X, Youtube } from "lucide-react";
import { fadeInUp } from "@/src/data/portfolio";

interface ProjectCardProps {
  project: Project;
  isExpanded: boolean;
  onExpand: () => void;
  onCollapse: () => void;
}

export const ProjectCard = ({ project, isExpanded, onExpand, onCollapse }: ProjectCardProps) => {
  // Collect all GitHub links with their labels
  const githubLinks = [];
  if (project.github) {
    githubLinks.push({ url: project.github, label: "" });
  }
  if (project.githubClient) {
    githubLinks.push({ url: project.githubClient, label: "Client" });
  }
  if (project.githubBackend) {
    githubLinks.push({ url: project.githubBackend, label: "Backend" });
  }
  if (project.githubFrontend) {
    githubLinks.push({ url: project.githubFrontend, label: "Frontend" });
  }

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={!isExpanded ? { y: -10 } : {}}
      className={`bg-[#252a2f] rounded-lg border border-[#3a3f44] hover:border-[#4a4f54] p-6 transition-all duration-300 flex flex-col ${isExpanded ? 'md:col-span-2 lg:col-span-3' : ''}`}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold">{project.title}</h3>
        {isExpanded && (
          <button
            onClick={onCollapse}
            className="text-gray-400 hover:text-white transition-colors p-1"
            aria-label="Close game"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
      
      {!isExpanded ? (
        <>
          <p className="text-gray-300 mb-3 flex-grow text-base font-semibold leading-relaxed">
            {project.description}
          </p>
          {project.bullets && project.bullets.length > 0 && (
            <ul className="text-gray-400 mb-4 flex-grow text-sm leading-relaxed space-y-1.5 list-disc list-inside">
              {project.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          )}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-[#0f1419] rounded-full text-xs text-gray-400 border border-[#3a3f44]"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-3 mt-auto flex-wrap">
            {project.embedUrl && (
              <button
                onClick={onExpand}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-sm font-semibold"
              >
                <Play className="w-4 h-4" />
                Play Game
              </button>
            )}
            {project.youtubeUrl && (
              <a
                href={project.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#FF0000] text-white rounded-lg hover:bg-[#CC0000] transition-all duration-300 text-sm font-semibold"
              >
                <Youtube className="w-4 h-4" />
                Watch Gameplay
              </a>
            )}
            {githubLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#0f1419] rounded-lg hover:bg-[#252a2f] transition-colors text-sm border border-[#3a3f44]"
              >
                <Github className="w-4 h-4" />
                GitHub {link.label}
              </a>
            ))}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors text-sm font-semibold"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </>
      ) : (
        <div className="w-full">
          <div className="mb-4">
            <p className="text-gray-300 text-base font-semibold leading-relaxed mb-3">
              {project.description}
            </p>
            {project.bullets && project.bullets.length > 0 && (
              <ul className="text-gray-400 mb-4 text-sm leading-relaxed space-y-1.5 list-disc list-inside">
                {project.bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            )}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-[#0f1419] rounded-full text-xs text-gray-400 border border-[#3a3f44]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          {project.embedUrl && (
            <div className="relative w-full bg-[#0f1419] rounded-lg overflow-hidden border border-[#3a3f44]" style={{ paddingBottom: '64.58%' }}>
              <iframe
                src={project.embedUrl}
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
                title={`${project.title} Game`}
              />
            </div>
          )}
          <div className="flex gap-3 mt-4 flex-wrap">
            {project.gameUrl && (
              <a
                href={project.gameUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors text-sm font-semibold"
              >
                <ExternalLink className="w-4 h-4" />
                Play on itch.io
              </a>
            )}
            {project.youtubeUrl && (
              <a
                href={project.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#FF0000] text-white rounded-lg hover:bg-[#CC0000] transition-all duration-300 text-sm font-semibold"
              >
                <Youtube className="w-4 h-4" />
                Watch on YouTube
              </a>
            )}
            {githubLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#0f1419] rounded-lg hover:bg-[#252a2f] transition-colors text-sm border border-[#3a3f44]"
              >
                <Github className="w-4 h-4" />
                GitHub {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

