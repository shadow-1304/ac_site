import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function ScrollRevealText({ text, className = "", delay = 0 }: ScrollRevealTextProps) {
  const words = text.split(" ");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.045, // slower stagger for premium experience
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { 
      y: "115%",
      transition: {
        duration: 0.25,
        ease: "easeIn"
      }
    },
    visible: {
      y: 0,
      transition: {
        duration: 1.65, // slower smooth duration
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-6%" }}
      className={`inline-block ${className}`}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.22em] pr-[0.15em] pb-[0.1em]">
          <motion.span variants={child} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

interface ScrollRevealLinesProps {
  lines: string[];
  className?: string;
  delay?: number;
}

export function ScrollRevealLines({ lines, className = "", delay = 0 }: ScrollRevealLinesProps) {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { 
      y: "115%",
      transition: {
        duration: 0.25,
        ease: "easeIn"
      }
    },
    visible: {
      y: 0,
      transition: {
        duration: 1.75, // slower smooth duration
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-10%" }}
      className={`block ${className}`}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pr-[0.15em] pb-[0.05em]">
          <motion.span variants={child} className="block">
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  ratio?: number;
}

export function ParallaxImage({ src, alt, className = "", ratio = 0.15 }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`-${ratio * 100}px`, `${ratio * 100}px`]);

  return (
    <div ref={ref} className={`overflow-hidden relative ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale: 1.2 }}
        className="w-full h-full object-cover grayscale contrast-[1.1] brightness-[0.8] transition-all duration-300"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

export function useSmoothScroll() {
  useEffect(() => {
    // Disable on mobile/touch devices to preserve native touch inertia
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let targetY = window.scrollY;
    let currentY = window.scrollY;
    let isMoving = false;
    
    // Lower ease (0.05) creates a slower, heavier, and richer scrolling momentum
    const ease = 0.05;

    const handleWheel = (e: WheelEvent) => {
      // Prevent browser native jumpy scroll
      e.preventDefault();
      
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      
      // Calculate target position based on delta
      targetY = Math.max(0, Math.min(targetY + e.deltaY * 0.75, maxScroll));
      
      if (!isMoving) {
        isMoving = true;
        requestAnimationFrame(updateScroll);
      }
    };

    const updateScroll = () => {
      const diff = targetY - currentY;
      
      // Snap and stop loop if very close
      if (Math.abs(diff) < 0.1) {
        currentY = targetY;
        window.scrollTo(0, currentY);
        isMoving = false;
        return;
      }
      
      currentY += diff * ease;
      window.scrollTo(0, currentY);
      
      requestAnimationFrame(updateScroll);
    };

    // wheel events require passive: false to allow preventDefault
    window.addEventListener("wheel", handleWheel, { passive: false });

    // Sync positions if window scrolls by other means
    const handleSync = () => {
      if (!isMoving) {
        targetY = window.scrollY;
        currentY = window.scrollY;
      }
    };
    window.addEventListener("scroll", handleSync, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleSync);
    };
  }, []);
}
