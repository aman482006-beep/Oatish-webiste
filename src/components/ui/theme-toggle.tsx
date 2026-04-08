"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={cn(
        "relative flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-muted hover:text-foreground hover:border-gold/30 hover:bg-gold-dim transition-all duration-300 active:scale-90",
        className
      )}
      aria-label="Toggle theme"
    >
      <Sun className="h-3.5 w-3.5 dark:hidden" />
      <Moon className="hidden h-3.5 w-3.5 dark:block" />
    </button>
  );
}
