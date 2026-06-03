import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface PreloaderProps {
  onComplete?: () => void;
}

// Altitude / speed readouts — pure aviation flavour
const telemetry = [
  { label: "ALT", value: "FL 350" },
  { label: "SPD", value: "0.85M" },
  { label: "HDG", value: "270°" },
  { label: "TEMP", value: "+22 °C" },
];

export default function Preloader({ onComplete }: PreloaderProps) {
  const [loading, setLoading] = useState(true);
  const [step, setStep]       = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Ramp the progress bar from 0→100 over ~2.2 s
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); return 100; }
        // Ease-out: faster at start, slow near the end
        return p + Math.max(0.6, (100 - p) * 0.04);
      });
    }, 20);

    const t1 = setTimeout(() => setStep(1), 700);
    const t2 = setTimeout(() => setStep(2), 1500);
    const t3 = setTimeout(() => {
      setLoading(false);
      onComplete?.();
    }, 2800);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearInterval(interval); };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          id="preloader-container"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden select-none"
          style={{ background: "#f3f0ec" }}
          exit={{ y: "-100%", transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* ── Subtle dot-grid blueprint ── */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, #2563eb 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* ── Thin horizon scan line (sweeps top → bottom once) ── */}
          <motion.div
            initial={{ top: "-2px" }}
            animate={{ top: "100%" }}
            transition={{ duration: 2.6, ease: "easeInOut" }}
            className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-600/40 to-transparent pointer-events-none"
            style={{ zIndex: 1 }}
          />

          {/* ── Main centred content ── */}
          <div className="relative z-10 flex flex-col items-center gap-10 px-8 text-center w-full max-w-xl">

            {/* Logo image — fades in cleanly */}
            <motion.img
              src="/logo_Intel300.png"
              alt="Intel Air Group"
              initial={{ opacity: 0, y: 12, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="h-20 md:h-24 w-auto object-contain"
            />

            {/* ── Company name staggered letter reveal ── */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className="font-sans font-bold tracking-[0.3em] uppercase text-[#0a0a0a] text-xl md:text-2xl leading-none"
              >
                INTEL AIR GROUP
              </motion.h1>
            </div>

            {/* ── Cycling tagline ── */}
            <div className="h-5 overflow-hidden w-full flex justify-center">
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.p key="t0"
                    initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 0.6 }} exit={{ y: -16, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="font-mono text-[10px] uppercase tracking-[0.28em] text-neutral-500 font-bold absolute"
                  >Excellence with Integrity</motion.p>
                )}
                {step === 1 && (
                  <motion.p key="t1"
                    initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 0.85 }} exit={{ y: -16, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="font-mono text-[10px] uppercase tracking-[0.28em] text-blue-600 font-bold absolute"
                  >Air · Ground · Precision</motion.p>
                )}
                {step >= 2 && (
                  <motion.p key="t2"
                    initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -16, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#0a0a0a] font-bold absolute"
                  >Preparing your experience…</motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* ── Progress track ── */}
            <div className="w-56 flex flex-col gap-1.5">
              <div className="w-full h-[1.5px] bg-black/8 rounded-full overflow-hidden">
                <motion.div
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ ease: "linear", duration: 0.05 }}
                  className="h-full bg-gradient-to-r from-blue-600/60 via-blue-500 to-blue-600/60 rounded-full"
                />
              </div>
              <div className="flex justify-between">
                <span className="font-mono text-[9px] text-neutral-400 tracking-widest uppercase">Loading</span>
                <span className="font-mono text-[9px] text-neutral-400 tracking-widest">{Math.round(Math.min(progress, 100))}%</span>
              </div>
            </div>

          </div>

          {/* ── Bottom telemetry strip — aviation HUD feel ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute bottom-8 left-0 right-0 flex justify-center gap-8 px-10"
          >
            {telemetry.map(({ label, value }) => (
              <div key={label} className="flex flex-col items-center gap-0.5">
                <span className="font-mono text-[8px] text-neutral-400 tracking-[0.2em] uppercase">{label}</span>
                <span className="font-mono text-[11px] font-bold text-neutral-600 tracking-wider">{value}</span>
              </div>
            ))}
          </motion.div>

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
              animate={{ opacity: 0.18 }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
              className={`absolute ${pos} w-5 h-5 pointer-events-none`}
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
