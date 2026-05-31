"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/src/data/portfolio";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold mb-8 text-center"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="text-lg text-gray-400 leading-relaxed space-y-4"
          >
            <p>
            I'm a Full-Stack & AI Developer passionate about turning complex workflows into simple products.
            </p>
            <p>
            I build end-to-end applications across frontend, backend, and data layers, with a focus on AI-powered workflows, LLM integrations, and real-time web applications.
            </p>
            <p>
            Former Team Lead in Unit 8200, bringing ownership, problem-solving, and fast learning into every project.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

