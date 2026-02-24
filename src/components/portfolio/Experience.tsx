"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experience, fadeInUp, staggerContainer } from "@/src/data/portfolio";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1f24]">
      <div className="max-w-4xl mx-auto">
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
            Experience
          </motion.h2>
          
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative pl-8 border-l-2 border-[#3a3f44]"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-white rounded-full border-2 border-[#1a1f24]"></div>
                <div className="flex items-start gap-4 mb-2">
                  <Briefcase className="w-5 h-5 text-gray-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-gray-400">{exp.company}</p>
                    <p className="text-sm text-gray-500">{exp.period}</p>
                  </div>
                </div>
                <ul className="text-gray-400 ml-9 mt-2 space-y-2 list-disc list-inside">
                  {exp.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>{bullet}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

