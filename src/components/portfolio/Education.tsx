"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education, fadeInUp, staggerContainer } from "@/src/data/portfolio";

export const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
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
            Education
          </motion.h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative pl-8 border-l-2 border-[#3a3f44]"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-white rounded-full border-2 border-[#0f1419]"></div>
                <div className="flex items-start gap-4 mb-2">
                  <GraduationCap className="w-5 h-5 text-gray-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <p className="text-gray-400">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.period}</p>
                  </div>
                </div>
                <p className="text-gray-400 ml-9 mt-2">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

