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
              I'm a Software Developer and former Team Leader in Unit 8200, with hands-on experience designing, building, and owning complex software systems from design to production. I specialize in .NET, C#, and RESTful APIs, with a strong foundation in software engineering principles, distributed systems, and async processing.
            </p>
            <p>
              My expertise spans backend services, data-intensive pipelines, and cloud-integrated applications. I've led technical teams in deploying mission-critical systems and have a proven track record of delivering scalable solutions that drive real impact.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

