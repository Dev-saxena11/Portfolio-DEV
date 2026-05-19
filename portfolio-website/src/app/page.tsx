"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { EducationSection } from "@/components/education-section";
import { ProjectsSection } from "@/components/projects-section";
import { GithubSection } from "@/components/github-section";
import { CertificationsSection } from "@/components/certifications-section";
import { ContactSection } from "@/components/contact-section";
import { TypingAnimation } from "@/components/typing-animation";

export default function Home() {
  return (
    <>
      <main className="flex min-h-[90vh] flex-col items-center justify-center relative overflow-hidden px-6" id="home">
        <div className="z-10 flex flex-col items-center text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-md mb-10 neon-border"
          >
            <Terminal className="mr-2 h-4 w-4" />
            <span className="tracking-wide">SWE Intern @ 2026 | Full Stack Developer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl font-black tracking-tight sm:text-7xl md:text-8xl mb-8 leading-[1.1]"
          >
            Hi, I'm <span className="text-primary text-glow">Dev Saxena</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-muted-foreground h-12 mb-12"
          >
            <TypingAnimation
              texts={[
                "Building Scalable Intelligence.",
                "Engineering Modern Web Apps.",
                "Data Analytics Enthusiast.",
                "Open Source Contributor."
              ]}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-muted-foreground sm:text-xl max-w-2xl mb-12 leading-relaxed"
          >
            A Computer Science student bridging the gap between <span className="text-foreground font-semibold">elegant UI design</span> and <span className="text-foreground font-semibold">robust data engineering</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Button size="lg" className="rounded-full px-10 h-14 text-lg shadow-[0_0_20px_rgba(110,89,255,0.3)] hover:shadow-[0_0_30px_rgba(110,89,255,0.5)] transition-all" onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}>
              View Portfolio <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg bg-background/30 backdrop-blur-md border-border/50 hover:bg-background/50 transition-all" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Contact Me
            </Button>
          </motion.div>
        </div>
      </main>

      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <GithubSection />
      <CertificationsSection />
      <ContactSection />
    </>
  );
}
