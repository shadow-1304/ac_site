import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Slower progress ramp-up to match the premium 2.5-second preloader duration
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Smooth logarithmic progress
        return p + Math.max(1.2, (100 - p) * 0.06);
      });
    }, 25);

    const t = setTimeout(() => {
      setLoading(false);
      onComplete?.();
    }, 2800); // 2.8 seconds total duration for a luxury feel

    return () => {
      clearTimeout(t);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          id="preloader-container"
          className="fixed inset-0 z-[100] flex flex-col bg-paper-texture text-[#0a0a0a] p-5 md:p-6 select-none overflow-hidden"
          exit={{ 
            y: "-100%", 
            transition: { duration: 1.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* ── Outer Editorial Inset Border (Self-Drawing Clockwise) ── */}
          <div className="relative w-full h-full flex flex-col justify-between p-4 md:p-6 overflow-hidden">
            {/* Top Border Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 left-0 right-0 h-[1.5px] bg-[#0a0a0a]/15 origin-left"
            />
            {/* Right Border Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="absolute top-0 right-0 bottom-0 w-[1.5px] bg-[#0a0a0a]/15 origin-top"
            />
            {/* Bottom Border Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#0a0a0a]/15 origin-right"
            />
            {/* Left Border Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
              className="absolute top-0 left-0 bottom-0 w-[1.5px] bg-[#0a0a0a]/15 origin-bottom"
            />

            {/* ── Top Header Row (Volume, Date, Identity) ── */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex justify-between items-center w-full font-editorial-sans text-[8px] md:text-[9.5px] uppercase tracking-[0.25em] text-[#0a0a0a]/75 pb-4 border-b border-[#0a0a0a]/10"
            >
              <div className="flex items-center gap-1.5 font-bold">
                <span>AHMEDABAD, GJ</span>
                <span className="text-[#0a0a0a]/30">•</span>
                <span className="font-medium">GUJARAT EDITION</span>
              </div>
              <div className="font-editorial-serif italic font-semibold capitalize text-xs md:text-sm tracking-normal text-[#0a0a0a]">
                Engineered Elegance
              </div>
              <div className="flex items-center gap-1.5 font-bold">
                <span>EST. 2013</span>
                <span className="text-[#0a0a0a]/30">•</span>
                <span>VOL. 13</span>
              </div>
            </motion.div>

            {/* ── Central Grid (Magazine Frontpage Layout) ── */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between flex-grow w-full py-4 md:py-6 overflow-hidden">
              
              {/* Left Column (Desktop Only - Editorial Intro) */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.0, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="hidden md:flex md:col-span-3 h-full flex-col justify-between py-6 relative pr-6"
              >
                {/* Vertical Divider */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
                  className="absolute right-0 top-6 bottom-6 w-[1px] bg-[#0a0a0a]/10 origin-top"
                />

                <div className="flex flex-col gap-3">
                  <span className="font-editorial-sans text-[8px] uppercase tracking-[0.3em] text-[#0a0a0a]/50 font-bold">
                    01 / FEATURED ARCHIVE
                  </span>
                  <h3 className="font-editorial-serif text-2xl lg:text-3xl font-bold uppercase leading-none text-[#0a0a0a]">
                    ALL<br />COMFORT.
                  </h3>
                  <p className="font-editorial-body text-[11px] lg:text-xs leading-relaxed text-[#0a0a0a]/70">
                    A curated selection of bespoke climate and mechanical HVAC systems engineered to perfection since 2013.
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-editorial-sans text-[7.5px] uppercase tracking-[0.2em] text-[#0a0a0a]/40 font-bold">
                    PORTFOLIO STATUS
                  </span>
                  <span className="font-editorial-italic text-[11px] text-[#0a0a0a]/80">
                    Initializing digital blueprint...
                  </span>
                </div>
              </motion.div>

              {/* Center Column (Logo & Main Showcase Frame) */}
              <div className="col-span-12 md:col-span-6 flex flex-col items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
                  className="w-full max-w-sm bg-transparent flex flex-col items-center justify-center relative overflow-hidden group"
                >
                  {/* Logo Image */}
                  <motion.img
                    src="/logo_Intel300.png"
                    alt="Intel Air Group"
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 1.1 }}
                    className="h-28 md:h-36 w-auto object-contain brightness-95 contrast-[1.05]"
                  />
                </motion.div>
              </div>

              {/* Right Column (Desktop Only - Design Details) */}
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.0, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="hidden md:flex md:col-span-3 h-full flex-col justify-between py-6 text-right relative pl-6"
              >
                {/* Vertical Divider */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
                  className="absolute left-0 top-6 bottom-6 w-[1px] bg-[#0a0a0a]/10 origin-bottom"
                />

                <div className="flex flex-col gap-3">
                  <span className="font-editorial-sans text-[8px] uppercase tracking-[0.3em] text-[#0a0a0a]/50 font-bold">
                    02 / ENGINEERING PRINCIPLE
                  </span>
                  <h3 className="font-editorial-serif text-2xl lg:text-3xl font-bold uppercase leading-none text-[#0a0a0a]">
                    SYSTEMS OF<br />TOMORROW.
                  </h3>
                  <p className="font-editorial-body text-[11px] lg:text-xs leading-relaxed text-[#0a0a0a]/70">
                    Blending architectural vision with mechanical precision, reshaping luxury spaces across India.
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-editorial-sans text-[7.5px] uppercase tracking-[0.2em] text-[#0a0a0a]/40 font-bold">
                    DESIGN SPECIFICATION
                  </span>
                  <span className="font-editorial-italic text-[11px] text-[#0a0a0a]/80">
                    High efficiency, zero compromise.
                  </span>
                </div>
              </motion.div>

            </div>

            {/* ── Bottom Section (Minimalist Progress & Giant Editorial Footer) ── */}
            <div className="flex flex-col w-full gap-4 pt-4 border-t border-[#0a0a0a]/10">
              
              {/* Minimal Progress Bar */}
              <div className="w-full flex flex-col gap-1.5">
                <div className="w-full h-[1px] bg-[#0a0a0a]/8 relative overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-[#0a0a0a]"
                    animate={{ width: `${Math.min(progress, 100)}%` }}
                    transition={{ ease: "linear", duration: 0.05 }}
                  />
                </div>
                <div className="flex justify-between font-editorial-sans text-[7.5px] uppercase tracking-[0.2em] text-[#0a0a0a]/60 font-bold">
                  <span>Indexing System Resources</span>
                  <span>Page {Math.round(Math.min(progress, 100))} // 100</span>
                </div>
              </div>

              {/* Giant Serif Typography (Vogue-Style) */}
              <div className="overflow-hidden w-full select-none pointer-events-none -mt-1 md:-mt-3">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                  className="font-editorial-serif text-[12.5vw] md:text-[10.5vw] font-bold text-center leading-[0.8] tracking-tight uppercase text-[#0a0a0a]"
                >
                  Intel Air
                </motion.h1>
              </div>

            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
