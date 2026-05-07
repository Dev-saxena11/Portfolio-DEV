"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { CommandMenu } from "./command-menu";

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <Link href="/" className="font-bold tracking-tight text-xl">
            Dev<span className="text-primary">.</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              className="hidden sm:flex text-muted-foreground justify-start w-64 rounded-full bg-background/50 hover:bg-background/80 transition-colors" 
              onClick={() => setOpen(true)}
            >
              <Search className="mr-2 h-4 w-4" />
              <span>Search portfolio...</span>
              <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>
          </div>
        </div>
      </header>
      <CommandMenu open={open} setOpen={setOpen} />
    </>
  );
}
