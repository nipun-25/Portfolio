"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-9 h-9 rounded-full bg-black/10 dark:bg-white/10 ${className}`} />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative p-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fb6514] ${
        isDark
          ? "bg-neutral-800 text-amber-400 hover:bg-neutral-700"
          : "bg-neutral-100 text-neutral-800 hover:bg-neutral-200"
      } ${className}`}
      aria-label="Toggle theme"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDark ? (
        <Sun className="w-4 h-4 transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 transition-transform duration-300 -rotate-12 hover:rotate-0 text-neutral-700" />
      )}
    </button>
  );
}
