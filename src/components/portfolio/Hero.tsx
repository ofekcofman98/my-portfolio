"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/src/data/portfolio";

interface HeroProps {
  onDownloadCV: () => void;
}

export const Hero = ({ onDownloadCV }: HeroProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1f24] via-[#0f1419] to-[#1a1f24]"></div>
      <motion.div
        initial="initial"
        animate="animate"
        variants={staggerContainer}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <motion.div
          variants={fadeInUp}
          className="mb-8 flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-300 to-white rounded-full blur-xl opacity-30 animate-pulse"></div>
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl">
              <Image
                src="/assets/Profile.jpg"
                alt="Ofek Cofman"
                width={192}
                height={192}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
        <motion.h1
          variants={fadeInUp}
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
        >
          Ofek Cofman
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-8"
        >
          Software Developer
        </motion.p>
        <motion.p
          variants={fadeInUp}
          className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
        >
          Building complex software systems from design to production with .NET, C#, Python, TypeScript, and distributed architectures
        </motion.p>
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={onDownloadCV}
            className="px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center gap-2 group"
          >
            <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            Download CV
          </button>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-gray-600 rounded-lg font-semibold hover:border-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

