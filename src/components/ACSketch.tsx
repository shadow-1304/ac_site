import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface ACSketchProps {
  isDark: boolean;
}

export default function ACSketch({ isDark }: ACSketchProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Hook scroll progress relative to this container entering/exiting the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Scroll animations:
  // 1. The lines draw in as you scroll down
  const pathLength = useTransform(scrollYProgress, [0.05, 0.45], [0, 1]);
  
  // 2. Airflow currents glide/drift gracefully left-to-right as you scroll
  const airflowTranslateX = useTransform(scrollYProgress, [0, 1], [-20, 30]);
  const airflowTranslateY = useTransform(scrollYProgress, [0, 1], [-5, 12]);
  
  // 3. Subtle background trees parallax
  const bgTreesY = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  // Color profiles to match hand-drawn sketch aesthetic (black ink vs white ink)
  const inkColor = isDark ? "rgba(255, 255, 255, 0.85)" : "rgba(10, 10, 10, 0.85)";
  const thinInk = isDark ? "rgba(255, 255, 255, 0.35)" : "rgba(10, 10, 10, 0.35)" ;

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-full min-h-[450px] md:min-h-[500px] lg:min-h-[550px] flex items-center justify-center overflow-hidden bg-transparent"
    >
      {/* Main vector sketch canvas */}
      <svg 
        viewBox="0 0 500 400" 
        className="w-full h-full max-w-[550px] max-h-[460px] select-none bg-transparent"
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        {/* ================= BACKGROUND TREES SKETCH (Parallax) ================= */}
        {/* Hand-drawn organic tree outline behind the villa roof */}
        <motion.g style={{ y: bgTreesY }}>
          {/* Left background trees */}
          <path 
            d="M 20,120 C 30,100 45,95 55,100 C 65,95 80,102 85,115 C 95,110 110,118 115,130 C 120,135 110,145 110,150" 
            stroke={thinInk} strokeWidth="1" 
          />
          {/* Far background hills/forest line */}
          <path 
            d="M 120,150 C 150,130 180,125 210,135 C 240,125 280,130 320,145 C 360,130 400,135 440,160" 
            stroke={thinInk} strokeWidth="0.8" strokeDasharray="2 3"
          />
          {/* Right background trees */}
          <path 
            d="M 390,160 C 400,140 415,135 430,140 C 440,135 460,142 465,155 C 470,160 480,165 485,180" 
            stroke={thinInk} strokeWidth="1" 
          />
        </motion.g>

        {/* ================= ARCHITECTURAL VILLA SKETCH (Scroll-drawn) ================= */}
        <g>
          {/* Main roof slab - thick double lines */}
          <motion.path 
            d="M 60,140 L 440,140 L 440,152 L 60,152 Z" 
            stroke={inkColor} strokeWidth="1.5" 
            style={{ pathLength }}
          />
          
          {/* Roof overhang architectural detail */}
          <motion.line 
            x1="50" y1="146" x2="450" y2="146" 
            stroke={inkColor} strokeWidth="0.8" 
            style={{ pathLength }}
          />

          {/* Clean vertical columns */}
          <motion.line x1="90" y1="152" x2="90" y2="310" stroke={inkColor} strokeWidth="1.2" style={{ pathLength }} />
          <motion.line x1="210" y1="152" x2="210" y2="310" stroke={inkColor} strokeWidth="1.2" style={{ pathLength }} />
          <motion.line x1="330" y1="152" x2="330" y2="310" stroke={inkColor} strokeWidth="0.8" style={{ pathLength }} />
          <motion.line x1="410" y1="152" x2="410" y2="310" stroke={inkColor} strokeWidth="1.2" style={{ pathLength }} />

          {/* Floor slab / ground line */}
          <motion.line 
            x1="30" y1="310" x2="470" y2="310" 
            stroke={inkColor} strokeWidth="1.8" 
            style={{ pathLength }}
          />
          <motion.line 
            x1="30" y1="315" x2="470" y2="315" 
            stroke={thinInk} strokeWidth="0.8" 
            style={{ pathLength }}
          />

          {/* Glass window pane outlines (Thin architectural grid details) */}
          <motion.path 
            d="M 90,180 L 210,180 M 90,280 L 210,280" 
            stroke={thinInk} strokeWidth="0.8" 
            style={{ pathLength }}
          />
          <motion.path 
            d="M 210,190 L 330,190 M 210,270 L 330,270" 
            stroke={thinInk} strokeWidth="0.8" 
            style={{ pathLength }}
          />

          {/* Hand-drawn indoor plant outline */}
          <motion.path 
            d="M 110,310 C 110,290 105,280 115,275 C 120,280 125,270 130,285 C 135,280 140,295 135,310" 
            stroke={thinInk} strokeWidth="1" 
            style={{ pathLength }}
          />
        </g>

        {/* ================= INTEGRATED LINEAR SLOT VENTS ================= */}
        <g>
          {/* Left vent slot indicator */}
          <motion.rect x="130" y="152" width="50" height="4" fill={isDark ? "rgba(255,255,255,0.08)" : "rgba(10,10,10,0.05)"} stroke={thinInk} strokeWidth="0.8" style={{ pathLength }} />
          {/* Right vent slot indicator */}
          <motion.rect x="250" y="152" width="50" height="4" fill={isDark ? "rgba(255,255,255,0.08)" : "rgba(10,10,10,0.05)"} stroke={thinInk} strokeWidth="0.8" style={{ pathLength }} />
        </g>

        {/* ================= NATURAL AIRFLOW SCHEMATICS (Scroll-Translated) ================= */}
        {/* Simple black ink curves representing air flow paths, animating on scroll */}
        <motion.g 
          style={{ 
            x: airflowTranslateX,
            y: airflowTranslateY
          }}
        >
          {/* Primary cooling airflow curve from left vent */}
          <path 
            d="M 155,156 C 155,220 90,240 120,295 C 135,310 190,300 240,280" 
            stroke={inkColor} strokeWidth="1.2" strokeDasharray="5 5" 
          />
          {/* Secondary cooling airflow curve from right vent */}
          <path 
            d="M 275,156 C 275,230 320,250 360,230 C 400,210 410,240 430,290" 
            stroke={inkColor} strokeWidth="1.2" strokeDasharray="5 5" 
          />
          {/* Gentle convection wind vector */}
          <path 
            d="M 80,290 C 70,220 140,180 155,156" 
            stroke={thinInk} strokeWidth="0.8" strokeDasharray="3 3" 
          />
        </motion.g>

        {/* ================= BLUEPRINT LEADER LINES & ANNOTATIONS ================= */}
        <g>
          {/* Linear slot vent callout leader line */}
          <motion.path d="M 155,152 L 155,100 L 195,100" stroke={thinInk} strokeWidth="0.8" style={{ pathLength }} />
          <motion.circle cx="155" cy="152" r="2" fill={inkColor} style={{ pathLength }} />
          <text x="202" y="103" fill={isDark ? "rgba(255,255,255,0.6)" : "rgba(10,10,10,0.6)"} className="font-mono text-[8px] uppercase tracking-widest font-bold" stroke="none">INTEGRATED LINEAR SLOT DIFFUSER</text>

          {/* Airflow direction leader line */}
          <motion.path d="M 270,260 L 300,260" stroke={thinInk} strokeWidth="0.8" style={{ pathLength }} />
          <motion.polygon points="270,260 275,257 275,263" fill={inkColor} style={{ pathLength }} />
          <text x="306" y="263" fill={isDark ? "rgba(255,255,255,0.6)" : "rgba(10,10,10,0.6)"} className="font-mono text-[8px] uppercase tracking-widest font-bold" stroke="none">LAMINAR FLOW PATH</text>
        </g>
      </svg>
    </div>
  );
}
