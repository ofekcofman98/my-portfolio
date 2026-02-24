"use client";

import { Navbar } from "@/src/components/portfolio/Navbar";
import { Hero } from "@/src/components/portfolio/Hero";
import { About } from "@/src/components/portfolio/About";
import { TechStack } from "@/src/components/portfolio/TechStack";
import { Projects } from "@/src/components/portfolio/Projects";
import { Experience } from "@/src/components/portfolio/Experience";
import { Education } from "@/src/components/portfolio/Education";
import { Contact } from "@/src/components/portfolio/Contact";

export default function Home() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/Ofek-Cofman-CV.pdf";
    link.download = "Ofek-Cofman-CV.pdf";
    link.click();
  }; 

  return (
    <main className="min-h-screen bg-[#0f1419] text-[#e8e8e8]">
      <Navbar onDownloadCV={handleDownloadCV} />
      <Hero onDownloadCV={handleDownloadCV} />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-[#3a3f44]">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Ofek Cofman. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
