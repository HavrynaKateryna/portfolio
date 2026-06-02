"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="
        relative
        flex items-center
        justify-center

        w-10 h-10

        rounded-full

        border border-white/10
        bg-white/5

        backdrop-blur-xl

        transition-all duration-300

        hover:bg-white/10
        hover:scale-105
      "
      aria-label="Toggle theme"
    >
      {/* ICON WRAPPER */}
      <div className="relative flex items-center justify-center">
        <Sun
          size={16}
          className={`
            absolute
            transition-all duration-300
            ${isDark ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"}
          `}
        />

        <Moon
          size={16}
          className={`
            absolute
            transition-all duration-300
            ${isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"}
          `}
        />
      </div>
    </button>
  );
}