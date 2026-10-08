"use client";

import * as React from "react";
import Link from "next/link";
import { FileText, Menu, Search, X } from "lucide-react";
import { Button } from "./ui/button";
import { CommandMenu } from "./command-menu";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

// Shows Cmd on Mac and Ctrl elsewhere. useSyncExternalStore avoids a hydration mismatch
// and the "setState in effect" pattern.
const subscribe = () => () => {};
function useModKey() {
  return React.useSyncExternalStore(
    subscribe,
    () => (/Mac|iPhone|iPad/.test(navigator.platform) ? "⌘" : "Ctrl"),
    () => "Ctrl"
  );
}

export function Navbar() {
  const [paletteOpen, setPaletteOpen] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const mod = useModKey();

  return (
    <>
      <header className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <Link href="/" className="font-bold tracking-tight text-xl">
            Dev<span className="text-primary">.</span>
          </Link>

          <nav aria-label="Primary" className="hidden md:flex items-center gap-7 text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              aria-label="Open quick search"
              className="hidden md:flex text-muted-foreground justify-center lg:justify-start w-9 lg:w-56 px-0 lg:px-2.5 rounded-full bg-background/50 hover:bg-background/80 transition-colors"
              onClick={() => setPaletteOpen(true)}
            >
              <Search className="h-4 w-4 lg:mr-2" />
              <span className="hidden lg:inline">Quick jump...</span>
              <kbd className="pointer-events-none ml-auto hidden lg:inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                {mod} K
              </kbd>
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="hidden md:inline-flex rounded-full px-3"
              nativeButton={false}
              render={<a href="/resume.pdf" target="_blank" rel="noopener noreferrer" />}
            >
              <FileText className="h-3.5 w-3.5" /> Resume
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {menuOpen && (
          <div id="mobile-menu" className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-md">
            <nav aria-label="Mobile" className="container mx-auto flex flex-col px-6 py-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-base text-muted-foreground hover:text-foreground border-b border-border/30"
                >
                  {l.name}
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="py-3 text-base font-medium text-primary"
              >
                Resume (PDF)
              </a>
            </nav>
          </div>
        )}
      </header>
      <CommandMenu open={paletteOpen} setOpen={setPaletteOpen} />
    </>
  );
}
