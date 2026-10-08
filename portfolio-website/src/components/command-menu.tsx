"use client";

import * as React from "react";
import { User, Mail, Code, FileText, Cpu, GraduationCap, Award, Send, ExternalLink } from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

const sections = [
  { id: "about", label: "About Me", icon: User },
  { id: "skills", label: "Skills", icon: Cpu },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "projects", label: "Projects", icon: Code },
  { id: "certifications", label: "Certifications", icon: Award },
  { id: "contact", label: "Contact", icon: Send },
];

const external = [
  { label: "GitHub", href: "https://github.com/Dev-saxena11" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/devsaxena1109" },
  { label: "LeetCode", href: "https://leetcode.com/u/dev_saxena05/" },
];

export function CommandMenu({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  // Cmd+K (Mac) or Ctrl+K (Windows/Linux) toggles the palette
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, setOpen]);

  const runCommand = React.useCallback(
    (command: () => unknown) => {
      setOpen(false);
      command();
    },
    [setOpen]
  );

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Jump to a section or link..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Sections">
          {sections.map(({ id, label, icon: Icon }) => (
            <CommandItem
              key={id}
              onSelect={() => runCommand(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }))}
            >
              <Icon className="mr-2 h-4 w-4" />
              <span>{label}</span>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Resume & links">
          <CommandItem onSelect={() => runCommand(() => window.open("/resume.pdf", "_blank", "noopener"))}>
            <FileText className="mr-2 h-4 w-4" />
            <span>View Resume</span>
          </CommandItem>
          {external.map((l) => (
            <CommandItem key={l.label} onSelect={() => runCommand(() => window.open(l.href, "_blank", "noopener"))}>
              <ExternalLink className="mr-2 h-4 w-4" />
              <span>{l.label}</span>
            </CommandItem>
          ))}
          <CommandItem onSelect={() => runCommand(() => (window.location.href = "mailto:saxenadev2021@gmail.com"))}>
            <Mail className="mr-2 h-4 w-4" />
            <span>Send an Email</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
