"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/src/data/portfolio";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-bold mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 mb-12 text-lg"
          >
            I'm always open to discussing new opportunities and interesting projects.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-6"
          >
            <a
              href="mailto:Ofekcofman98@gmail.com"
              className="flex items-center gap-3 px-6 py-3 bg-[#252a2f] rounded-lg hover:bg-[#3a3f44] transition-all duration-300 border border-[#3a3f44] hover:border-[#4a4f54] group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Email</span>
            </a>
            <a
              href="https://linkedin.com/in/ofek-cofman"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-[#252a2f] rounded-lg hover:bg-[#3a3f44] transition-all duration-300 border border-[#3a3f44] hover:border-[#4a4f54] group"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/ofekcofman98"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-[#252a2f] rounded-lg hover:bg-[#3a3f44] transition-all duration-300 border border-[#3a3f44] hover:border-[#4a4f54] group"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

