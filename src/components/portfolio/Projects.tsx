"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, fadeInUp, staggerContainer } from "@/src/data/portfolio";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [expandedGame, setExpandedGame] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold mb-12 text-center"
          >
            Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                isExpanded={expandedGame === project.title}
                onExpand={() => setExpandedGame(project.title)}
                onCollapse={() => setExpandedGame(null)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

