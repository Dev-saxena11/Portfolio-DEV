"use client";

import { motion } from "framer-motion";
import { User, Sparkles } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4 bg-linear-to-r from-white to-white/60 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="h-1 w-20 bg-primary rounded-full mb-10"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Biography Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative p-10 rounded-[2.5rem] border border-border/50 glass-panel neon-border overflow-hidden bg-background/20 group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <Sparkles className="h-32 w-32" />
          </div>
          
          <div className="relative z-10 space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed">
              I'm a <span className="text-foreground font-bold">B.Tech Computer Science student</span> with a deep passion for building <span className="text-primary font-bold">scalable intelligence</span> and modern web applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey bridges the gap between <span className="text-foreground font-semibold">elegant UI design</span> and <span className="text-foreground font-semibold">robust data engineering</span>. I specialize in the MERN stack and have a strong foundation in Data Analytics.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Based in Bareilly, I'm constantly exploring new technologies and contributing to open-source projects. Whether it's crafting a high-fidelity interface or optimizing a database, I aim for excellence.
            </p>
          </div>
        </motion.div>

        {/* Stats Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative p-10 rounded-[2.5rem] border border-border/50 glass-panel neon-border overflow-hidden bg-background/20 group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <User className="h-40 w-40" />
          </div>
          <div className="grid grid-cols-2 gap-8 relative z-10 h-full items-center">
            <div className="space-y-1">
              <span className="text-primary font-black text-4xl">6+</span>
              <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest">Projects Done</p>
            </div>
            <div className="space-y-1">
              <span className="text-primary font-black text-4xl">91%</span>
              <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest">Acad. Score</p>
            </div>
            <div className="space-y-1">
              <span className="text-primary font-black text-4xl">5+</span>
              <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest">Certifications</p>
            </div>
            <div className="space-y-1">
              <span className="text-primary font-black text-4xl">24/7</span>
              <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest">Learning Mode</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
