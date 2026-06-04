import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface PreloaderProps {
  onComplete?: () => void;
}

const telemetry = [
  { label: "ALT", value: "FL 350" },
  { label: "SPD", value: "0.85M" },
  { label: "HDG", value: "270°" },
  { label: "TEMP", value: "+22 °C" },
];

export default function Preloader({ onComplete }: PreloaderProps) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Slower progress ramp-up to match the premium 2-second preloader duration
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); return 100; }
        return p + Math.max(1.8, (100 - p) * 0.07);
      });
    }, 20);

    const t = setTimeout(() => {
      setLoading(false);
      onComplete?.();
    }, 2000);

    return () => { clearTimeout(t); clearInterval(interval); };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          id="preloader-container"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden select-none"
          style={{ background: "#f3f0ec" }}
          exit={{ y: "-100%", transition: { duration: 2.2, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* ── Subtle dot-grid blueprint background ── */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, #2563eb 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* ── Thin horizon scan line (sweeps top → bottom once, very soft) ── */}
          <motion.div
            initial={{ top: "-2px" }}
            animate={{ top: "100%" }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-600/20 to-transparent pointer-events-none opacity-40"
            style={{ zIndex: 1 }}
          />

          {/* ── Main centred content ── */}
          <div className="relative z-10 flex flex-col items-center gap-9 px-8 text-center w-full max-w-xl">

            {/* Logo image — increased size and glides in visibly from the right */}
            <motion.img
              src="/logo_Intel300.png"
              alt="Intel Air Group"
              initial={{ opacity: 0, x: 480 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1] }}
              className="h-44 md:h-48 w-auto object-contain"
            />

            {/* ── Tagline text & Progress - Fades in AFTER the logo entry completes ── */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center gap-6 w-full"
            >
              {/* Clean, minimalist text below the logo */}
              <div className="flex flex-col gap-1 text-center">
                <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#0a0a0a] font-bold">
                  Intel Air Group
                </span>
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-neutral-450 font-medium">
                  Excellence with Integrity
                </span>
              </div>

              {/* Progress track */}
              <div className="w-44 flex flex-col gap-1">
                <div className="w-full h-[1px] bg-black/8 rounded-full overflow-hidden">
                  <motion.div
                    animate={{ width: `${Math.min(progress, 100)}%` }}
                    transition={{ ease: "linear", duration: 0.05 }}
                    className="h-full bg-gradient-to-r from-blue-600/50 via-blue-500 to-blue-600/50 rounded-full"
                  />
                </div>
                <div className="flex justify-between">
                  <span className="font-mono text-[7px] text-neutral-400 tracking-widest uppercase">Loading</span>
                  <span className="font-mono text-[7px] text-neutral-400 tracking-widest">{Math.round(Math.min(progress, 100))}%</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* ── Bottom telemetry strip — subtle fade-in ── */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-8 px-10">
            {telemetry.map(({ label, value }, idx) => (
              <motion.div 
                key={label} 
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.05 }}
                className="flex flex-col items-center gap-0.5"
              >
                <span className="font-mono text-[7.5px] text-neutral-400 tracking-[0.2em] uppercase">{label}</span>
                <span className="font-mono text-[9px] font-bold text-neutral-600 tracking-wider">{value}</span>
              </motion.div>
            ))}
          </div>

          {/* ── Corner marks ── */}
          {[
            "top-6 left-6",
            "top-6 right-6 rotate-90",
            "bottom-6 left-6 -rotate-90",
            "bottom-6 right-6 rotate-180",
          ].map((pos, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              transition={{ delay: 0.2 + i * 0.05, duration: 0.3 }}
              className={`absolute ${pos} w-4 h-4 pointer-events-none`}
            >
              <svg viewBox="0 0 20 20" fill="none" stroke="#0a0a0a" strokeWidth="1">
                <path d="M 0 10 L 0 0 L 10 0" />
              </svg>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
