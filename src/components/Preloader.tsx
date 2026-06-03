import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [loading, setLoading] = useState(true);
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Stage 1 text change
    const t1 = setTimeout(() => setStep(1), 800);
    // Stage 2 logo fade in
    const t2 = setTimeout(() => setStep(2), 1600);
    // Complete
    const t3 = setTimeout(() => {
      setLoading(false);
      if (onComplete) onComplete();
    }, 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          id="preloader-container"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#f3f0ec] text-[#0a0a0a] select-none overflow-hidden"
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Ambient blueprint grid in background */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{
            backgroundImage: "radial-gradient(circle, #2563eb 1px, transparent 1px)",
            backgroundSize: "24px 24px"
          }} />

          {/* Core content wrapper */}
          <div className="relative flex flex-col items-center justify-center max-w-md px-6 text-center">
            
            {/* Spinning aerodynamic turbine logo */}
            <div className="relative w-36 h-36 mb-10 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
                animate={{ 
                  opacity: step >= 0 ? 1 : 0, 
                  scale: step >= 0 ? 1 : 0.8,
                  rotate: 720 
                }}
                transition={{ 
                  opacity: { duration: 1, ease: "easeOut" },
                  scale: { duration: 1.2, ease: "easeOut" },
                  rotate: { duration: 3, ease: [0.25, 1, 0.5, 1] } 
                }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Custom Elegant HVAC Blade / Turbine SVG */}
                <svg viewBox="0 0 100 100" className="w-full h-full text-blue-600 drop-shadow-[0_0_15px_rgba(37,99,235,0.15)]" fill="none" stroke="currentColor">
                  {/* Outer delicate architectural boundary ring */}
                  <circle cx="50" cy="50" r="46" strokeWidth="0.75" className="opacity-20 stroke-gray-400" strokeDasharray="3 3" />
                  <circle cx="50" cy="50" r="42" strokeWidth="1" className="opacity-40" />
                  <circle cx="50" cy="50" r="16" strokeWidth="1.5" />
                  
                  {/* Blade curves (vortex geometry representing dynamic pressure) */}
                  <path d="M 50 8 C 65 24, 65 38, 50 34 C 35 38, 35 24, 50 8" strokeWidth="1" className="stroke-[#0a0a0a]" />
                  <path d="M 50 92 C 35 76, 35 62, 50 66 C 65 62, 65 76, 50 92" strokeWidth="1" className="stroke-[#0a0a0a]" />
                  <path d="M 8 50 C 24 35, 38 35, 34 50 C 38 65, 24 65, 8 50" strokeWidth="1" className="stroke-[#0a0a0a]" />
                  <path d="M 92 50 C 76 65, 62 65, 66 50 C 62 35, 76 35, 92 50" strokeWidth="1" className="stroke-[#0a0a0a]" />
                  
                  {/* Diagonals */}
                  <path d="M 20.36 20.36 C 35 25, 42 35, 38.68 38.68 L 20.36 20.36" strokeWidth="1" className="stroke-blue-600" />
                  <path d="M 79.64 79.64 C 65 75, 58 65, 61.32 61.32 L 79.64 79.64" strokeWidth="1" className="stroke-blue-600" />
                  <path d="M 79.64 20.36 C 75 35, 65 42, 61.32 38.68 L 79.64 20.36" strokeWidth="1" className="stroke-blue-600" />
                  <path d="M 20.36 79.64 C 25 65, 35 58, 38.68 61.32 L 20.36 79.64" strokeWidth="1" className="stroke-blue-600" />
                  
                  {/* Core hub indicator */}
                  <circle cx="50" cy="50" r="4" fill="currentColor" className="text-[#0a0a0a]" />
                </svg>
              </motion.div>
              
              {/* Outer halo overlay rotating counter */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 6, ease: "linear", repeat: Infinity }}
                className="absolute inset-0 scale-[1.12]"
              >
                <svg viewBox="0 0 120 120" className="w-full h-full text-blue-600/20" stroke="currentColor" fill="none">
                  <circle cx="60" cy="60" r="54" strokeWidth="0.5" strokeDasharray="10 40 80 10" />
                </svg>
              </motion.div>
            </div>

            {/* Typography brand name */}
            <div className="overflow-hidden mb-3">
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="text-2xl md:text-3xl font-bold tracking-[0.35em] uppercase text-[#0a0a0a] font-sans"
              >
                INTEL AIR GROUP
              </motion.h1>
            </div>

            {/* Editorial tagline */}
            <div className="h-6 overflow-hidden">
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.p
                    key="tag0"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 0.7 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-xs uppercase tracking-[0.25em] text-neutral-500 font-mono font-bold"
                  >
                    Thermodynamic Architectures
                  </motion.p>
                )}
                {step === 1 && (
                  <motion.p
                    key="tag1"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 0.9 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-xs uppercase tracking-[0.25em] text-blue-600 font-mono font-bold"
                  >
                    CALIBRATING THERMAL COILS
                  </motion.p>
                )}
                {step >= 2 && (
                  <motion.p
                    key="tag2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-xs uppercase tracking-[0.25em] font-bold text-[#0a0a0a] font-mono"
                  >
                    INTEGRITY • PRECISION • FLOW
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Subtle loading horizontal scale bar */}
            <div className="w-48 h-[1px] bg-gray-200 mt-8 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ duration: 2.4, ease: "easeInOut", repeat: 0 }}
                className="absolute top-0 bottom-0 w-2/3 bg-gradient-to-r from-transparent via-blue-600 to-transparent"
              />
            </div>
          </div>

          <div className="absolute bottom-10 left-10 text-[10px] text-neutral-500 font-mono tracking-widest uppercase font-bold">
            EST. 2000
          </div>
          <div className="absolute bottom-10 right-10 text-[10px] text-neutral-500 font-mono tracking-widest uppercase font-bold">
            AISTUDIO REDESIGN SYSTEM
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
