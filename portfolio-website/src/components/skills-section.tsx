"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Terminal, 
  Database, 
  Layers, 
  Cpu, 
  Settings
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: <Terminal className="h-6 w-6" />,
    skills: ["Python", "Java", "C", "JavaScript", "SQL", "HTML", "CSS"],
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-cyan-500/30"
  },
  {
    title: "Frameworks & Libs",
    icon: <Code2 className="h-6 w-6" />,
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS"],
    color: "from-purple-500/20 to-blue-500/20",
    borderColor: "border-blue-500/30"
  },
  {
    title: "Data Science & AI",
    icon: <Cpu className="h-6 w-6" />,
    skills: ["Pandas", "NumPy", "Machine Learning Basics", "Data Analysis"],
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-emerald-500/30"
  },
  {
    title: "Tools & Others",
    icon: <Settings className="h-6 w-6" />,
    skills: ["Git", "GitHub", "VS Code", "Vercel", "MySQL", "Postman"],
    color: "from-orange-500/20 to-red-500/20",
    borderColor: "border-orange-500/30"
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-bold text-primary backdrop-blur-md mb-6"
        >
          <Layers className="mr-2 h-4 w-4" />
          <span>TECHNICAL STACK</span>
        </motion.div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4 bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto font-medium">
          A comprehensive toolkit developed through academic rigor and hands-on project experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`p-8 rounded-[2.5rem] border ${category.borderColor} bg-linear-to-br ${category.color} backdrop-blur-sm relative overflow-hidden group`}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-2xl bg-background/50 border border-white/10 text-primary shadow-xl">
                {category.icon}
              </div>
              <h3 className="text-2xl font-black italic">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  className="px-4 py-2 rounded-xl bg-background/40 border border-white/5 text-sm font-bold hover:bg-primary/20 hover:border-primary/30 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Decorative background icon */}
            <div className="absolute -bottom-8 -right-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              {React.cloneElement(category.icon as React.ReactElement<any>, { className: "h-32 w-32" })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
