import { motion } from "motion/react";
import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      id="theme-switcher-button"
      onClick={onToggle}
      className={`relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono tracking-widest uppercase transition-all duration-300 ${
        isDark
          ? "bg-neutral-900 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700"
          : "bg-neutral-100 border-neutral-200 text-neutral-500 hover:text-black hover:border-neutral-300"
      }`}
      aria-label="Toggle visual theme"
    >
      <span className="relative flex h-2 w-2">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isDark ? "bg-blue-400" : "bg-neutral-400"}`}></span>
        <span className={`relative inline-flex rounded-full h-2 w-2 ${isDark ? "bg-blue-500" : "bg-neutral-600"}`}></span>
      </span>
      
      <span className="hidden sm:inline">
        {isDark ? "MATTE DARK" : "SAND LIGHT"}
      </span>

      <div className="relative w-4 h-4 overflow-hidden">
        <motion.div
          animate={{ y: isDark ? -20 : 0 }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
          className="absolute inset-0 flex flex-col items-center justify-between h-10"
        >
          <Sun className="w-4 h-4 text-amber-500" />
          <Moon className="w-4 h-4 text-blue-400" />
        </motion.div>
      </div>
    </button>
  );
}
