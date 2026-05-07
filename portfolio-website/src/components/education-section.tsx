"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, Building2 } from "lucide-react";

const education = [
  {
    title: "Bachelor of Technology in CSE",
    institution: "Shri Ram Murti Smarak College of Engg. & Tech (SRMS CET)",
    location: "Bareilly, UP",
    duration: "2024 — 2028",
    score: "91% (1st Year)",
    description: "Focusing on core computer science fundamentals, data structures, and algorithms."
  },
  {
    title: "Higher Secondary School (Class XII)",
    institution: "Jingle Bells Public School",
    location: "Bareilly, UP (CBSE Board)",
    duration: "2022 — 2023",
    score: "96%",
    description: "Specialized in Physics, Chemistry, and Mathematics (PCM)."
  },
  {
    title: "Secondary School (Class X)",
    institution: "Jingle Bells Public School",
    location: "Bareilly, UP (CBSE Board)",
    duration: "2020 — 2021",
    score: "92%",
    description: "Foundational education with a focus on science and mathematics."
  }
];

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto border-t border-border/50 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -z-10" />
      
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-bold text-primary backdrop-blur-md mb-6"
        >
          <GraduationCap className="mr-2 h-4 w-4" />
          <span>ACADEMIC JOURNEY</span>
        </motion.div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4 bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="h-1 w-20 bg-primary rounded-full mb-6"></div>
      </div>

      <div className="space-y-8 relative">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border/50 hidden md:block" />

        {education.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Content Card */}
            <div className="w-full md:w-1/2 group">
              <div className="p-8 rounded-[2.5rem] border border-border/50 glass-panel neon-border hover:border-primary/50 transition-all duration-500 relative overflow-hidden bg-background/20">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Building2 className="h-20 w-20" />
                </div>
                
                <div className="flex items-center gap-3 mb-4 text-primary font-bold text-sm tracking-widest uppercase">
                  <Calendar className="h-4 w-4" />
                  {item.duration}
                </div>

                <h3 className="text-2xl font-black mb-2 group-hover:text-primary transition-colors italic">
                  {item.title}
                </h3>
                
                <div className="flex items-center gap-2 text-muted-foreground font-semibold mb-4">
                  <span className="text-foreground">{item.institution}</span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary font-black">
                  <Award className="h-4 w-4" />
                  {item.score}
                </div>
              </div>
            </div>

            {/* Timeline Dot */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-4 border-background bg-primary items-center justify-center z-10 shadow-[0_0_20px_rgba(110,89,255,0.5)]">
               <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            </div>

            {/* Spacer for MD screens */}
            <div className="hidden md:block w-1/2" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
