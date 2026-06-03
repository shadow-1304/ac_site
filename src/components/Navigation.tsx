import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { SectionType } from "../types";
import ThemeToggle from "./ThemeToggle";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    y: "80%",
    opacity: 0,
    transition: {
      duration: 0.35,
      ease: "easeIn",
    },
  },
};

interface NavigationProps {
  activeSection: SectionType;
  onChangeSection: (section: SectionType) => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Navigation({ activeSection, onChangeSection, isDark, onToggleTheme }: NavigationProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const menuItems: { id: SectionType; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "clients", label: "Partners" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ];

  // Coordinated close and section change
  const handleLinkClick = (id: SectionType) => {
    setIsExpanded(false);
    onChangeSection(id);
  };

  return (
    <>
      {/* ================= TOP COMPLEMENTARY ARCHITECTURAL BAR ================= */}
      <header
        id="top-architectural-header"
        className={`fixed top-0 left-0 right-0 z-40 border-b transition-colors duration-500 backdrop-blur-md ${
          isDark 
            ? "bg-[#0a0a0acc]/90 border-neutral-900 text-white" 
            : "bg-[#f3f0eccc]/90 border-black/5 text-[#0a0a0a]"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 h-16 md:h-20 grid grid-cols-3 items-center w-full">
          
          {/* Left: Theme Switcher */}
          <div className="flex items-center justify-start">
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          </div>

          {/* Center: Company Name */}
          <div 
            className="flex items-center justify-center cursor-pointer group text-center"
            onClick={() => handleLinkClick("home")}
          >
            <span className="font-sans text-[10px] sm:text-[13px] md:text-base font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase transition-colors hover:text-blue-600 leading-none truncate max-w-full">
              INTEL AIR GROUP
            </span>
          </div>

          {/* Right: Inquire action with line roll hover */}
          <div className="flex items-center justify-end">
            <button
              id="top-inquire-cta"
              onClick={() => handleLinkClick("contact")}
              className="line-roll-container flex items-center gap-1 text-[9px] sm:text-xs font-mono tracking-[0.12em] sm:tracking-[0.18em] uppercase font-bold hover:text-blue-600 transition-colors cursor-pointer text-current"
            >
              <span className="line-mask">
                <span className="line-roll" data-hover="↳ GET A QUOTE">
                  ↳ GET A QUOTE
                </span>
              </span>
            </button>
          </div>

        </div>
      </header>

      {/* ================= FULLSCREEN LUXURY OVERLAY DRAWER ================= */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-45 flex items-center justify-center p-4 sm:p-6 md:p-10 pointer-events-none"
          >
            {/* Cinematic background dim + blur overlay */}
            <div
              onClick={() => setIsExpanded(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-[24px] pointer-events-auto cursor-pointer"
            />

            {/* Float glassmorphism panel (scales up from bottom center where capsule is) */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`relative w-full max-w-[450px] border shadow-[0_30px_70px_rgba(0,0,0,0.5)] p-10 flex flex-col justify-between z-10 rounded-[32px] pointer-events-auto ${
                isDark 
                  ? "bg-[#121212f0]/95 border-white/[0.08] text-white" 
                  : "bg-[#fcfbfae6]/95 border-black/[0.08] text-[#0a0a0a]"
              }`}
              style={{ minHeight: "660px", transformOrigin: "bottom center" }}
            >
              {/* Soft top gradient line inside panel */}
              <div className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent to-transparent pointer-events-none ${
                isDark ? "via-white/15" : "via-black/10"
              }`} />

              {/* Panel Header */}
              <div className="flex flex-col gap-6">
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-400 font-bold block">
                  MENU
                </span>

                {/* Main Menu Links */}
                <div className="flex flex-col gap-3 select-none">
                  {menuItems.map((item) => {
                    const isActive = activeSection === item.id;

                    return (
                      <div key={item.id} className="overflow-hidden py-1">
                        <motion.div variants={itemVariants}>
                          <button
                            onClick={() => handleLinkClick(item.id)}
                            className="text-left group cursor-pointer w-fit flex items-center gap-3 line-roll-container"
                          >
                            <span className={`font-sans text-[40px] leading-[1.1] font-light tracking-tight transition-all duration-300 block relative line-mask ${
                              isActive 
                                ? isDark ? "text-white font-normal" : "text-[#0a0a0a] font-normal"
                                : "text-neutral-500 hover:text-current"
                            }`}>
                              <span className="line-roll block" data-hover={item.label.toUpperCase()}>
                                {item.label.toUpperCase()}
                              </span>
                            </span>
                            {isActive && (
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_8px_#2563eb] flex-shrink-0" />
                            )}
                          </button>
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Two Column Metadata & Action */}
              <div className="flex flex-col gap-6 mt-8">
                <div className="overflow-hidden">
                  <motion.div 
                    variants={itemVariants}
                    className={`grid grid-cols-2 gap-6 border-t pt-6 ${
                      isDark ? "border-white/[0.08]" : "border-black/[0.08]"
                    }`}
                  >
                    {/* Left Column */}
                    <div className="flex flex-col gap-1.5 font-sans text-[13px] text-neutral-400 leading-normal">
                      <span className="hover:text-current transition-colors cursor-pointer w-fit">News</span>
                      <span className="hover:text-current transition-colors cursor-pointer w-fit">Showroom</span>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-1.5 font-sans text-[13px] text-neutral-400 leading-normal text-right sm:text-left">
                      <a href="tel:+917405399550" className="hover:text-current transition-colors block w-fit ml-auto sm:ml-0">+91 74053 99550</a>
                      <a href="mailto:sales@intelairgroup.com" className="hover:text-current transition-colors block w-fit ml-auto sm:ml-0 font-medium">sales@intelairgroup.com</a>
                    </div>
                  </motion.div>
                </div>

                {/* Full-width action button inside panel with line roll */}
                <div className="overflow-hidden">
                  <motion.button
                    variants={itemVariants}
                    onClick={() => handleLinkClick("contact")}
                    className={`line-roll-container w-full py-4 font-mono text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border rounded-2xl ${
                      isDark
                        ? "bg-[#1c1c1c] border-white/[0.08] text-white hover:bg-[#282828]"
                        : "bg-[#f2f0eb] border-black/[0.08] text-black hover:bg-[#e8e6e0]"
                    }`}
                  >
                    <span className="line-mask">
                      <span className="line-roll" data-hover="↳ GET A QUOTE">
                        ↳ GET A QUOTE
                      </span>
                    </span>
                  </motion.button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= BOTTOM TRIGGER CAPSULE CONTROL DOCK ================= */}
      <div id="bottom-floating-navigation-layer" className="fixed bottom-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
        <div className="pointer-events-auto">
          <motion.button
            layout
            onClick={() => setIsExpanded(!isExpanded)}
            animate={{ 
              width: isExpanded ? 54 : 380,
              borderRadius: 27
            }}
            transition={{ type: "spring", stiffness: 220, damping: 25 }}
            className={`flex items-center justify-between h-[54px] border transition-colors cursor-pointer shadow-lg relative overflow-hidden group select-none max-w-[calc(100vw-32px)] ${
              isDark 
                ? "bg-[#141412]/95 border-white/[0.08] text-white hover:bg-[#1c1c1a]" 
                : "bg-[#fcfbfa]/95 border-black/[0.08] text-[#0a0a0a] hover:bg-[#f5f4f2]"
            }`}
            style={{ padding: isExpanded ? 0 : "0 22px" }}
          >
            {/* Closed State Content */}
            <motion.div
              animate={{ opacity: isExpanded ? 0 : 1 }}
              transition={{ duration: 0.15 }}
              className="flex items-center justify-between w-full h-full pointer-events-none"
              style={{ display: isExpanded ? "none" : "flex" }}
            >
              {/* Left: Real Company Logo (PNG) */}
              <div className="flex items-center justify-start w-24 flex-shrink-0">
                <img
                  src="/logo_Intel300.png"
                  alt="Intel Air Group"
                  className="h-9 w-auto object-contain transition-transform group-hover:scale-105"
                  style={{ filter: isDark ? "brightness(0) invert(1)" : "none" }}
                />
              </div>

              {/* Center: Active route name with dynamic sizing for ACHIEVEMENTS to prevent overflow */}
              <span className={`font-sans font-bold uppercase text-center flex-grow transition-all duration-300 ${
                activeSection === "achievements" 
                  ? "text-[9.5px] sm:text-xs tracking-[0.05em] sm:tracking-[0.15em]" 
                  : "text-xs tracking-[0.2em]"
              }`}>
                {activeSection === "clients" ? "PARTNERS" : activeSection === "achievements" ? "ACHIEVEMENTS" : activeSection.toUpperCase()}
              </span>

              {/* Right: Thin Hamburger icon */}
              <div className="flex items-center justify-end w-24 flex-shrink-0 pr-1">
                <div className="flex flex-col gap-[4px] w-5 items-end justify-center">
                  <span className="h-[1px] w-full bg-current transition-colors"></span>
                  <span className="h-[1px] w-3/4 bg-current transition-colors"></span>
                  <span className="h-[1px] w-full bg-current transition-colors"></span>
                </div>
              </div>
            </motion.div>

            {/* Open State Content: Close (X) icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ 
                opacity: isExpanded ? 1 : 0,
                scale: isExpanded ? 1 : 0.6
              }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{ display: isExpanded ? "flex" : "none" }}
            >
              <X className="w-5 h-5 text-blue-600" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </>
  );
}
