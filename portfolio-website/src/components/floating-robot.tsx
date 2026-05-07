"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Briefcase, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const RobotSVG = ({ className }: { className?: string }) => (
  <motion.svg
    width="60"
    height="60"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]", className)}
  >
    {/* Head Bobbing */}
    <motion.g
      animate={{ 
        y: [0, -4, 0],
        rotate: [-1, 1, -1]
      }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Main Body Sphere */}
      <circle cx="50" cy="50" r="40" fill="url(#body-grad)" stroke="#E5E5E5" strokeWidth="0.5" />
      
      {/* Side Gold Port */}
      <circle cx="85" cy="50" r="8" fill="url(#gold-grad)" />
      <circle cx="85" cy="50" r="6" stroke="rgba(255,255,255,0.2)" />
      
      {/* Visor Area */}
      <rect x="20" y="35" width="60" height="30" rx="15" fill="#0A0A0A" />
      <rect x="22" y="37" width="56" height="26" rx="13" fill="url(#visor-grad)" />
      
      {/* Eyes */}
      <motion.circle
        cx="38" cy="50" r="5" fill="#00D2FF"
        animate={{ scaleY: [1, 1, 0.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.9, 0.95, 1] }}
        className="drop-shadow-[0_0_8px_#00D2FF]"
      />
      <motion.circle
        cx="62" cy="50" r="5" fill="#00D2FF"
        animate={{ scaleY: [1, 1, 0.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.9, 0.95, 1] }}
        className="drop-shadow-[0_0_8px_#00D2FF]"
      />

      {/* Antennae */}
      <motion.path 
        d="M30 20 L25 10" stroke="url(#gold-grad)" strokeWidth="3" strokeLinecap="round" 
        animate={{ rotate: [-5, 5, -5] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ originX: "30px", originY: "20px" }}
      />
      <motion.path 
        d="M70 20 L75 10" stroke="url(#gold-grad)" strokeWidth="3" strokeLinecap="round" 
        animate={{ rotate: [5, -5, 5] }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{ originX: "70px", originY: "20px" }}
      />
      
      {/* Bottom Gold Ring */}
      <path d="M25 82 Q50 90 75 82" stroke="url(#gold-grad)" strokeWidth="4" strokeLinecap="round" fill="none" />
    </motion.g>

    <defs>
      <radialGradient id="body-grad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(35 35) rotate(45) scale(60)">
        <stop stopColor="white" />
        <stop offset="1" stopColor="#D4D4D4" />
      </radialGradient>
      <linearGradient id="visor-grad" x1="22" y1="37" x2="78" y2="63" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1A1A1A" />
        <stop offset="1" stopColor="#050505" />
      </linearGradient>
      <linearGradient id="gold-grad" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#EAB308" />
        <stop offset="1" stopColor="#854D0E" />
      </linearGradient>
    </defs>
  </motion.svg>
);

export function FloatingRobot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-10 right-10 z-100 flex flex-col items-end">
      <AnimatePresence>
        {(!isOpen && isHovered) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: 0 } }}
            className="mb-4 bg-white text-black px-6 py-3 rounded-full font-bold text-lg shadow-2xl relative mr-12 whitespace-nowrap pointer-events-none"
          >
            Open to Work! 👋
            <div className="absolute -bottom-2 right-10 w-4 h-4 bg-white rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-6 w-[350px] rounded-[2rem] border border-white/10 bg-[#0F111A]/95 backdrop-blur-xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-2xl font-bold bg-linear-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                Dev Saxena
              </h4>
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold border border-cyan-500/30">
                Open to Work
              </span>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-8 text-[15px]">
              Passionate Full Stack Developer & Data Analytics enthusiast. Specializing in MERN stack and modern web technologies. Ready to build something amazing!
            </p>

            <div className="flex gap-3">
              <Button 
                className="flex-1 rounded-2xl h-12 font-bold bg-linear-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 shadow-lg"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  setIsOpen(false);
                }}
              >
                Hire Me
              </Button>
              <Button 
                variant="outline"
                className="px-6 rounded-2xl h-12 border-white/10 bg-white/5 hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                Close
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative cursor-pointer transition-transform duration-300"
      >
        <RobotSVG />
      </motion.button>
    </div>
  );
}
