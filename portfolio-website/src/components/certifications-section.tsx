"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award } from "lucide-react";

const certifications = [
  {
    title: "Python for Data Science (Elite + Top 2% Topper)",
    issuer: "NPTEL | IIT Madras"
  },
  {
    title: "AI Skills Passport",
    issuer: "EY & Microsoft"
  },
  {
    title: "5-Day AI Agents Intensive Course with Google",
    issuer: "Kaggle"
  },
  {
    title: "AI Tools Workshop",
    issuer: "Be10x"
  },
  {
    title: "Ultimate Web Development Course 2026",
    issuer: "Udemy"
  },
  {
    title: "HTML & CSS Bootcamp",
    issuer: "LetsUpgrade"
  }
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-6 max-w-6xl mx-auto border-t border-border/50">
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-sm font-bold text-cyan-400 backdrop-blur-md mb-6"
        >
          <Award className="mr-2 h-4 w-4" />
          <span>CREDENTIALS</span>
        </motion.div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4 bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Global Certifications
        </h2>
        <div className="h-1 w-20 bg-cyan-500 rounded-full mb-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-2xl border border-border/50 glass-panel neon-border hover:border-cyan-500/50 transition-all duration-300 flex items-center gap-4 group hover:bg-cyan-500/5"
          >
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-cyan-950 transition-colors">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-sm sm:text-base leading-tight">
              {cert.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
