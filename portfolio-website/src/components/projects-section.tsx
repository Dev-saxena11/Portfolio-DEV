"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch, Layers, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// I've pre-filled some projects based on our previous work!
const projects = [
  {
    title: "BPIS (Bharat Policy Intelligence System)",
    shortDescription: "A data-driven decision support platform to help governments identify development gaps and prioritize policy implementation.",
    tags: ["Next.js", "Python", "Data Analytics"],
    github: "https://github.com/Dev-saxena11/BPIS_2026",
    live: "#",
    caseStudy: {
      problem: "Government officials needed a centralized platform to track district-level KPIs and resolve data inconsistencies across various intelligence panels.",
      solution: "Developed a comprehensive dashboard integrating a Python-based data processing backend, featuring real-time anomaly tracking and district-level insights.",
      impact: "Streamlined policy tracking for officials, enabling quicker identification of lagging districts and ensuring seamless data synchronization."
    }
  },
  {
    title: "Aurelia Atelier",
    shortDescription: "A cloud-native luxury fashion boutique featuring an AI-driven concierge and high-performance deployment on Google Cloud Run.",
    tags: ["HTML", "Docker", "Google Cloud Run"],
    github: "https://github.com/Dev-saxena11/Aurelia",
    live: "#",
    caseStudy: {
      problem: "The boutique needed a modern, scalable e-commerce solution that could handle high performance while providing a premium shopping experience.",
      solution: "Built a containerized web application deployed on Google Cloud Run, integrating a custom AI-driven concierge for high-end customer engagement.",
      impact: "Provided a robust, production-grade infrastructure that ensures 99.9% uptime and intelligent product discovery."
    }
  },
  {
    title: "EXP-TRAC",
    shortDescription: "A specialized JavaScript-based expense tracking application designed for efficient personal finance management.",
    tags: ["JavaScript", "Local Storage", "CSS3"],
    github: "https://github.com/Dev-saxena11/EXP-TRAC",
    live: "#",
    caseStudy: {
      problem: "Traditional expense trackers were too complex for simple, quick daily logging.",
      solution: "Created a lightweight, interactive JS application focused on speed and simplicity, with persistent data storage.",
      impact: "Users can now track daily expenditures in seconds with clean visual feedback."
    }
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Featured Work</h2>
        <div className="h-1 w-20 bg-primary rounded-full mb-6"></div>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Here are a few projects I've worked on recently. Click to read the full case study.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1 }}
            className="group relative flex flex-col justify-between p-8 rounded-3xl border border-border/50 glass-panel neon-border hover:bg-muted/30 transition-all duration-300"
          >
            <div>
              <Layers className="h-10 w-10 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-6 line-clamp-2">
                {project.shortDescription}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between mt-auto pt-6 border-t border-border/50">
              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <GitBranch className="h-5 w-5" />
                </a>
                <a href={project.live} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>

              <Dialog>
                <DialogTrigger render={<Button variant="ghost" className="group/btn" />}>
                  Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden bg-background border-border/50">
                  <div className="p-8">
                    <DialogHeader className="mb-6">
                      <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                      <DialogDescription className="text-base mt-2">
                        {project.shortDescription}
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">The Problem</h4>
                        <p className="text-muted-foreground leading-relaxed">{project.caseStudy.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">The Solution</h4>
                        <p className="text-muted-foreground leading-relaxed">{project.caseStudy.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">The Impact</h4>
                        <p className="text-muted-foreground leading-relaxed">{project.caseStudy.impact}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted/50 p-4 border-t border-border/50 flex justify-end gap-4">
                     <Button variant="outline" nativeButton={false} render={<a href={project.github} target="_blank" rel="noreferrer" />}>
                        <GitBranch className="mr-2 h-4 w-4" /> Source
                     </Button>
                     <Button nativeButton={false} render={<a href={project.live} target="_blank" rel="noreferrer" />}>
                        <ExternalLink className="mr-2 h-4 w-4" /> Visit Site
                     </Button>
                  </div>
                </DialogContent>
              </Dialog>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
