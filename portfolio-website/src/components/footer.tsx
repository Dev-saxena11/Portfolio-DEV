import Link from "next/link";
import { Mail, Briefcase, GitBranch, Code2, ChevronRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-[#0F111A]/80 backdrop-blur-xl overflow-hidden pt-20 pb-10 px-6">
      <div className="absolute inset-0 bg-grid-white opacity-5 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        {/* Profile Info */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-black tracking-wider bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent uppercase">
            DEV SAXENA
          </h2>
          <div className="space-y-1">
            <p className="text-sm font-bold text-foreground/80 tracking-wide">
              Software Engineer | Full Stack Developer | AI Enthusiast
            </p>
            <p className="text-xs text-muted-foreground font-medium opacity-60">
              Bareilly, Uttar Pradesh, India
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-black tracking-[0.2em] text-foreground uppercase border-b border-primary/20 pb-2 w-fit">
            Quick Links
          </h3>
          <ul className="grid grid-cols-2 gap-y-3 gap-x-8">
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "Skills", href: "#about" },
              { name: "Projects", href: "#projects" },
              { name: "GitHub", href: "#github" },
              { name: "Contact", href: "#contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <ChevronRight className="h-3 w-3 text-primary group-hover:translate-x-1 transition-transform" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect With Me */}
        <div className="flex flex-col gap-6">
          <h3 className="text-lg font-black tracking-[0.2em] text-foreground uppercase border-b border-primary/20 pb-2 w-fit">
            Connect With Me
          </h3>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/Dev-saxena11" 
              target="_blank" 
              rel="noreferrer" 
              className="flex flex-col items-center gap-2 group"
              title="GitHub"
            >
              <div className="p-3 rounded-xl bg-background/50 border border-border/50 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300 shadow-lg shadow-black/20">
                <GitBranch className="h-6 w-6 text-foreground group-hover:text-primary" />
              </div>
              <span className="text-[10px] font-bold opacity-60 group-hover:opacity-100 uppercase tracking-widest">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/devsaxena1109" 
              target="_blank" 
              rel="noreferrer" 
              className="flex flex-col items-center gap-2 group"
              title="LinkedIn"
            >
              <div className="p-3 rounded-xl bg-[#0077b5]/20 border border-[#0077b5]/30 group-hover:border-[#0077b5] group-hover:bg-[#0077b5]/30 transition-all duration-300 shadow-lg shadow-black/20">
                <Briefcase className="h-6 w-6 text-[#0077b5] group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-[10px] font-bold opacity-60 group-hover:opacity-100 uppercase tracking-widest">LinkedIn</span>
            </a>
            <a 
              href="https://leetcode.com/u/dev_saxena05/" 
              target="_blank" 
              rel="noreferrer" 
              className="flex flex-col items-center gap-2 group"
              title="LeetCode"
            >
              <div className="p-3 rounded-xl bg-[#ffa116]/20 border border-[#ffa116]/30 group-hover:border-[#ffa116] group-hover:bg-[#ffa116]/30 transition-all duration-300 shadow-lg shadow-black/20">
                <Code2 className="h-6 w-6 text-[#ffa116] group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-[10px] font-bold opacity-60 group-hover:opacity-100 uppercase tracking-widest">LeetCode</span>
            </a>
            <a 
              href="mailto:saxenadev2021@gmail.com" 
              className="flex flex-col items-center gap-2 group"
              title="Email"
            >
              <div className="p-3 rounded-xl bg-purple-500/20 border border-purple-500/30 group-hover:border-purple-500 group-hover:bg-purple-500/30 transition-all duration-300 shadow-lg shadow-black/20">
                <Mail className="h-6 w-6 text-purple-500 group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-[10px] font-bold opacity-60 group-hover:opacity-100 uppercase tracking-widest">Email</span>
            </a>
          </div>
          <p className="text-sm italic text-muted-foreground mt-2 opacity-80">
            Let's build something amazing together! 🚀
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-border/20 text-center">
        <p className="text-xs text-muted-foreground opacity-50 uppercase tracking-[0.3em]">
          &copy; {new Date().getFullYear()} DEV SAXENA • ARCHITECTING THE FUTURE
        </p>
      </div>
    </footer>
  );
}
