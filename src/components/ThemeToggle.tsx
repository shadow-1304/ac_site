import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, X } from "lucide-react";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    // Show the tooltip shortly after mount
    const showTimer = setTimeout(() => {
      setShowTip(true);
      
      // Automatically hide it after 2 seconds (2000ms)
      const hideTimer = setTimeout(() => {
        setShowTip(false);
      }, 2000);
      
      return () => clearTimeout(hideTimer);
    }, 500); // 500ms delay to align with the fade-in of the header

    return () => clearTimeout(showTimer);
  }, []);

  const handleToggleClick = () => {
    setShowTip(false);
    onToggle();
  };

  const dismissTip = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent toggling the theme when clicking close
    setShowTip(false);
  };

  return (
    <div className="relative">
      <button
        id="theme-switcher-button"
        onClick={handleToggleClick}
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

      <AnimatePresence>
        {showTip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className={`absolute top-full mt-3 left-0 z-50 flex items-center gap-3 px-4 py-2.5 rounded-xl border shadow-xl w-64 md:w-72 pointer-events-auto ${
              isDark
                ? "bg-[#161616] border-neutral-800 text-neutral-200 shadow-black/40"
                : "bg-white border-neutral-200 text-neutral-850 shadow-black/5"
            }`}
          >
            {/* Arrow caret pointing to the toggle button */}
            <div
              className={`absolute bottom-full left-6 w-3 h-3 rotate-45 border-t border-l ${
                isDark
                  ? "bg-[#161616] border-neutral-800"
                  : "bg-white border-neutral-200"
              }`}
              style={{ marginBottom: "-6px" }}
            />

            {/* Content info */}
            <div className="flex-1">
              <span className={`text-[10px] font-mono tracking-wider font-bold block mb-0.5 ${isDark ? "text-blue-400" : "text-blue-600"}`}>
                INTERFACE VIEW
              </span>
              <p className="text-[11px] leading-relaxed font-sans font-medium">
                Click here to toggle between Matte Dark and Sand Light themes.
              </p>
            </div>

            {/* Close button */}
            <button
              onClick={dismissTip}
              className={`p-1 rounded-md transition-colors hover:bg-neutral-500/10 ${
                isDark ? "text-neutral-500 hover:text-neutral-300" : "text-neutral-450 hover:text-neutral-700"
              }`}
              aria-label="Close theme suggestion"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

