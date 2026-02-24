"use client";

import { motion } from "framer-motion";
import { techStackByCategory, fadeInUp, staggerContainer } from "@/src/data/portfolio";
import { TechLogo } from "./TechLogo";

export const TechStack = () => {
  return (
    <section id="tech" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1f24]">
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
            Tech Stack
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {Object.entries(techStackByCategory).map(([category, techs]) => (
              <motion.div
                key={category}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-[#252a2f] p-6 rounded-lg border border-[#3a3f44] hover:border-[#4a4f54] transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-300 border-b border-[#3a3f44] pb-3">
                  {category}
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {techs.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center justify-center p-3 rounded-lg bg-[#1a1f24] hover:bg-[#2a2f34] transition-colors group"
                    >
                      <div className="mb-2 flex items-center justify-center h-8">
                        <TechLogo name={tech.icon} />
                      </div>
                      <span className="text-xs font-medium text-center text-gray-400 group-hover:text-white transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

