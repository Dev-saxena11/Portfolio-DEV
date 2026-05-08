"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const GithubIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "saxenadev2021@gmail.com",
    href: "mailto:saxenadev2021@gmail.com",
  },
  {
    icon: <LinkedinIcon className="h-5 w-5" />,
    label: "LinkedIn",
    value: "in/devsaxena1109",
    href: "https://www.linkedin.com/in/devsaxena1109",
  },
  {
    icon: <GithubIcon className="h-5 w-5" />,
    label: "GitHub",
    value: "github.com/Dev-saxena11",
    href: "https://github.com/Dev-saxena11",
  }
];

export function ContactSection() {
  const [result, setResult] = React.useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "16dd52a4-081e-4734-b3ce-9e532a47cc58"); // Updated with your real key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Sent Successfully! 👋");
        (event.target as HTMLFormElement).reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 max-w-6xl mx-auto relative">
      <div className="absolute inset-0 bg-grid-white opacity-20 pointer-events-none" />

      <div className="flex flex-col items-center text-center mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-bold text-primary backdrop-blur-md mb-6"
        >
          <Send className="mr-2 h-4 w-4" />
          <span>LET'S CONNECT</span>
        </motion.div>
        <h2 className="text-4xl font-black tracking-tight sm:text-6xl mb-6 bg-linear-to-r from-primary via-blue-400 to-purple-500 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="h-1.5 w-24 bg-linear-to-r from-primary to-purple-500 rounded-full mb-8"></div>
        <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Have a vision you want to bring to life? Let's collaborate and build the future of software together.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactInfo.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, type: "spring", stiffness: 300 }}
                className="p-8 rounded-3xl border border-border/50 glass-panel neon-border flex flex-col gap-4 group"
              >
                <div className="p-3 rounded-2xl bg-primary/10 text-primary w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-lg shadow-primary/10">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1 opacity-70">{item.label}</p>
                  <p className="text-base font-bold truncate group-hover:text-primary transition-colors">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[2.5rem] border border-border/50 glass-panel relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <Send className="h-32 w-32 -rotate-12" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-4">Availability</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm currently a B.Tech CSE Student based in Bareilly, Uttar Pradesh, India. I'm open to summer internships, freelance projects, and remote opportunities worldwide.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 p-10 rounded-[2.5rem] border border-border/50 glass-panel neon-border relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 blur-[100px] rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/20 blur-[100px] rounded-full" />

          <form className="space-y-6 relative z-10" onSubmit={onSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">Name</label>
                <Input name="name" required placeholder="Your Name" className="h-14 bg-background/30 border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 rounded-2xl transition-all" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">Email</label>
                <Input name="email" type="email" required placeholder="email@example.com" className="h-14 bg-background/30 border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 rounded-2xl transition-all" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">Subject</label>
              <Input name="subject" required placeholder="How can I help you?" className="h-14 bg-background/30 border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 rounded-2xl transition-all" />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-2">Message</label>
              <Textarea
                name="message"
                required
                placeholder="Tell me about your project..."
                className="min-h-[180px] bg-background/30 border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/20 rounded-3xl resize-none p-5 transition-all"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="w-full rounded-2xl h-16 text-xl font-bold bg-linear-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700 shadow-[0_10px_40px_rgba(110,89,255,0.4)] transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {isSubmitting ? "🚀 Sending..." : "🚀 Initialize Connection"}
            </Button>

            {result && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-center mt-4 font-bold ${result.includes("Successfully") ? "text-green-400" : "text-red-400"}`}
              >
                {result}
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
