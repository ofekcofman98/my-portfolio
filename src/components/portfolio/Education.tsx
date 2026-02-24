"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/src/data/portfolio";

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
          
          <motion.div
            variants={fadeInUp}
            className="relative pl-8 border-l-2 border-[#3a3f44]"
          >
            <div className="absolute -left-2 top-0 w-4 h-4 bg-white rounded-full border-2 border-[#0f1419]"></div>
            <div className="flex items-start gap-4">
              <GraduationCap className="w-5 h-5 text-gray-500 mt-1" />
              <div>
                <h3 className="text-xl font-bold">Bachelor's Degree in Computer Science</h3>
                <p className="text-gray-400">The Academic College of Tel-Aviv, Yaffo</p>
                <p className="text-sm text-gray-500">2022 - 2025</p>
                <p className="text-sm text-gray-500 mt-2">
                  Relevant Coursework: Data Structures, Algorithms, C#, Design Patterns, Machine Learning, Event-Driven Architecture
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

