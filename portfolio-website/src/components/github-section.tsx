"use client";

import { motion } from "framer-motion";
import { GitBranch, Star, GitCommit } from "lucide-react";
import { Button } from "@/components/ui/button";

const repos = [
  {
    name: "BPIS_2026",
    description: "Bharat Policy Intelligence System: A data-driven decision support platform for government policy tracking.",
    stars: 1,
    forks: 0,
    language: "Python"
  },
  {
    name: "Aurelia",
    description: "Cloud-native luxury fashion boutique with AI-driven concierge, deployed on Google Cloud Run.",
    stars: 1,
    forks: 0,
    language: "HTML"
  },
  {
    name: "EXP-TRAC",
    description: "Lightweight JavaScript-based expense tracking application for daily personal finance management.",
    stars: 0,
    forks: 0,
    language: "JavaScript"
  }
];

export function GithubSection() {
  return (
    <section id="github" className="py-24 px-6 max-w-6xl mx-auto border-t border-border/50">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Open Source & Code</h2>
        <div className="h-1 w-20 bg-primary rounded-full mb-6"></div>
        <p className="text-lg text-muted-foreground max-w-2xl">
          I am actively pushing code, learning in public, and building tools. Check out some of my pinned repositories.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {repos.map((repo, idx) => (
          <motion.a
            key={idx}
            href={`https://github.com/Dev-saxena11/${repo.name}`}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-2xl border border-border/50 glass-panel neon-border hover:border-primary/50 transition-all duration-300 flex flex-col h-full cursor-pointer hover:bg-muted/30"
          >
            <div className="flex items-center gap-2 mb-3">
              <GitBranch className="h-5 w-5 text-primary" />
              <h3 className="font-bold text-lg">{repo.name}</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6 grow">
              {repo.description}
            </p>
            <div className="flex items-center justify-between text-sm text-muted-foreground mt-auto">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1"><Star className="h-4 w-4" /> {repo.stars}</span>
                <span className="flex items-center gap-1"><GitCommit className="h-4 w-4" /> {repo.forks}</span>
              </div>
              <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium">
                {repo.language}
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button variant="outline" className="rounded-full px-8" nativeButton={false} render={<a href="https://github.com/Dev-saxena11" target="_blank" rel="noreferrer" />}>
          View My GitHub Profile
        </Button>
      </div>
    </section>
  );
}
