"use client";

import * as React from "react";
import {
  User,
  Mail,
  Code,
  FileText,
  Moon,
  Sun
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useRouter } from "next/navigation";

export function CommandMenu({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  const router = useRouter();

  // Listen for the ⌘K or Ctrl+K shortcut
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(!open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, setOpen]);

  // Helper to execute a command and close the menu
  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, [setOpen]);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        
        <CommandGroup heading="Navigation">
          <CommandItem onSelect={() => runCommand(() => router.push("/"))}>
            <User className="mr-2 h-4 w-4" />
            <span>About Me</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }))}>
            <Code className="mr-2 h-4 w-4" />
            <span>Projects</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => window.open('/resume.pdf', '_blank'))}>
            <FileText className="mr-2 h-4 w-4" />
            <span>View Resume</span>
          </CommandItem>
        </CommandGroup>
        
        <CommandSeparator />
        
        <CommandGroup heading="Contact">
          <CommandItem onSelect={() => runCommand(() => window.location.href = 'mailto:saxenadev2021@gmail.com')}>
            <Mail className="mr-2 h-4 w-4" />
            <span>Send an Email</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
