import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  ChevronDown,
  Award,
  ShieldCheck,
  Activity,
  Sparkles,
  Wind,
  Clock,
  CheckCircle2,
  FileText,
  HelpCircle,
  TrendingUp,
  Flame,
  Snowflake,
  Instagram,
  Facebook,
  Calculator,
  X
} from "lucide-react";

import { SectionType, ServiceItem, ProjectItem } from "./types";
import { STATISTICS, SERVICES, PROJECTS, TESTIMONIALS, COMPLAINCE_TIMELINE, BRAND_PARTNERS, CERTIFICATIONS } from "./data";

// Components
import Preloader from "./components/Preloader";
import Navigation from "./components/Navigation";
import SectionHeader from "./components/SectionHeader";
import MapMock from "./components/MapMock";
import InquiryForm from "./components/InquiryForm";
import EnergyCalculator from "./components/EnergyCalculator";
import ACSketch from "./components/ACSketch";
import { ScrollRevealText, ScrollRevealLines, ParallaxImage, useSmoothScroll } from "./components/ScrollReveal";

const PARTNER_LOGOS = [
  { name: "Mitsubishi Electric", src: "/logos/mitshubishi.png", mitsubishiFilterInDark: true },
  { name: "Blue Star", src: "/logos/bluestar.png", className: "h-22" },
  { name: "Carrier", src: "/logos/carrier.png", className: "h-24" },
  { name: "Hitachi", src: "/logos/Hitachi_logo_PNG1.png", invertInDark: true },
  { name: "Midea", src: "/logos/.png" },
  { name: "Toshiba", src: "/logos/482120c0fa2a71cb0408a4e0275fec3d.png", invertInDark: true, className: "h-24" }
];

export default function App() {
  useSmoothScroll();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [showContent, setShowContent] = useState<boolean>(false);

  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 900); // Wait 900ms for preloader to mostly slide up and away
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  const [activeSection, setActiveSection] = useState<SectionType>("home");
  const [isDark, setIsDark] = useState<boolean>(false); // Default to a pristine sleek light high-contrast sheet
  const [activeServiceTab, setActiveServiceTab] = useState<string | null>("vrf-systems");
  const [projectFilter, setProjectFilter] = useState<string>("All");
  const [customSpeedMultiplier, setCustomSpeedMultiplier] = useState<number>(1);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [aspectRatio, setAspectRatio] = useState<"portrait" | "landscape">("landscape");

  useEffect(() => {
    if (selectedProject?.image) {
      const img = new window.Image();
      img.src = selectedProject.image;
      img.onload = () => {
        if (img.height > img.width) {
          setAspectRatio("portrait");
        } else {
          setAspectRatio("landscape");
        }
      };
    }
  }, [selectedProject]);

  // Background scrolling is kept active, scroll events are intercepted dynamically based on pointer position.

  // Sync scroll position to top when section changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  // Simple automated slider for testimonials
  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(textInterval);
  }, []);


  const handleToggleTheme = () => {
    setIsDark(!isDark);
  };

  // Helper filter projects
  const filteredProjects = (projectFilter === "All"
    ? PROJECTS.filter(p => ["swagat-agacia", "avant-living", "grand-eulogia", "hotel-eulogia-inn", "agora-mall"].includes(p.id))
    : PROJECTS.filter(p => p.category === projectFilter)
  ).sort((a, b) => {
    const getTr = (m: string) => {
      const match = m.match(/([\d.]+)\s*TR/i);
      return match ? parseFloat(match[1]) : 0;
    };
    return getTr(b.metrics) - getTr(a.metrics);
  });

  const projectsWithImages = filteredProjects.filter(p => p.image);
  const projectsWithoutImages = filteredProjects.filter(p => !p.image);

  return (
    <div
      className={`min-h-screen flex flex-col font-sans transition-all duration-500 overflow-x-hidden ${isDark
        ? "bg-[#0a0a0a] text-white"
        : "bg-[#f3f0ec] text-[#0a0a0a]"
        }`}
    >
      {/* 1. PREMIUM ARCHITECTURAL PRELOADER SEQUENCE */}
      <Preloader onComplete={() => setIsLoaded(true)} />

      {/* 2. DUAL NAVIGATION MODULE */}
      {showContent && (
        <Navigation
          activeSection={activeSection}
          onChangeSection={setActiveSection}
          isDark={isDark}
          onToggleTheme={handleToggleTheme}
        />
      )}

      {/* 3. MAIN COMPARTMENT ENTRY LAYER */}
      {showContent && (
        <>
          <main className="flex-grow pt-24 md:pt-[100px] pb-32 max-w-[1600px] w-full mx-auto px-6 relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full flex flex-col"
              >
                {/* ========================================================= */}
                {/* 1. HOME SECTION                                           */}
                {/* ========================================================= */}
                {activeSection === "home" && (
                  <div id="section-home" className="flex flex-col gap-16 md:gap-24">

                    {/* A. Massive Hero Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 pb-12 md:pb-20 w-full">
                      {/* Left Column: Hero Text & CTAs */}
                      <div className="lg:col-span-7 flex flex-col justify-center">
                        {/* Category tag */}
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                          className="flex items-center gap-3 font-mono text-[10px] tracking-[0.4em] uppercase mb-6 text-blue-600 font-bold"
                        >
                          <span>◆</span>
                          <span>INTEL AIR GROUP • CLIMATE ARCHITECTS</span>
                        </motion.div>

                        <h1 className={`text-4xl sm:text-6xl md:text-[76px] xl:text-[84px] leading-[0.85] font-bold tracking-tight uppercase mb-8 ${isDark ? "text-white" : "text-[#0a0a0a]"
                          }`}>
                          <ScrollRevealText text="We engineer" /> <span className="text-blue-600 font-normal italic"><ScrollRevealText text="natural air flow." /></span><br />
                          <span className={isDark ? "text-neutral-700" : "text-gray-300"}><ScrollRevealText text="We design" /></span> <ScrollRevealText text="climate." />
                        </h1>

                        <p className={`mt-10 max-w-xl text-base sm:text-lg leading-relaxed ${isDark ? "text-neutral-400" : "text-gray-500"
                          }`}>
                          <ScrollRevealText text="Transforming modern layouts into comfortable spaces through thermal engineering, computational ventilation models, and low-GWP energy architectures. Designed for structural designers, hotels, and hospitals." delay={0.2} />
                        </p>
                      </div>

                      {/* Right Column: Animated AC HVAC Sketch */}
                      <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="lg:col-span-5 flex items-center justify-center relative w-full h-[450px] md:h-[500px] lg:h-[550px]"
                      >
                        <ACSketch isDark={isDark} />
                      </motion.div>
                    </div>

                    {/* B. UNIQUE ACTIVE HVAC SIMULATOR */}
                    <div className={`p-6 sm:p-8 border rounded-none relative overflow-hidden ${isDark ? "bg-[#111] border-neutral-800" : "bg-transparent border-black/10"
                      }`}>
                      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                        backgroundImage: "radial-gradient(circle, #2563eb 1px, transparent 1px)",
                        backgroundSize: "20px 20px"
                      }} />

                      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-gray-100 dark:border-neutral-800/80">
                        <div>
                          <div className="flex items-center gap-2 text-blue-600 font-mono text-[10px] tracking-[0.2em] uppercase font-bold">
                            <Activity className="w-4 h-4 text-blue-600 animate-pulse" />
                            <span>INTERACTIVE HVAC AIRFLOW VISUALIZATION</span>
                          </div>
                          <h3 className={`text-2xl font-bold tracking-tight mt-1.5 uppercase ${isDark ? "text-neutral-100" : "text-[#0a0a0a]"
                            }`}>
                            Engineered Airflow. Measurable Performance.
                          </h3>
                          <p className={`text-xs mt-1 max-w-md ${isDark ? "text-neutral-500" : "text-gray-500"}`}>
                            Our HVAC systems are designed to optimize airflow, thermal comfort, energy efficiency, and long-term operational reliability.
                          </p>
                        </div>

                        {/* Wind control buttons */}
                        <div className={`flex items-center gap-2 p-1.5 rounded-none border font-mono text-xs ${isDark ? "bg-neutral-900/50 border-neutral-800" : "bg-transparent border-black/10"
                          }`}>
                          <span className="text-[9px] text-neutral-400 uppercase tracking-[0.25em] px-2 font-bold">
                            FLOW VELOCITY:
                          </span>
                          {[1, 2.5, 5].map((multiplier) => (
                            <button
                              key={multiplier}
                              onClick={() => setCustomSpeedMultiplier(multiplier)}
                              className={`px-3 py-1.5 rounded-none font-bold uppercase tracking-wider text-[10px] transition-colors cursor-pointer ${customSpeedMultiplier === multiplier
                                ? "bg-black text-white dark:bg-white dark:text-black"
                                : "hover:bg-neutral-500/10 text-neutral-500"
                                }`}
                            >
                              {multiplier === 1 && "LOW"}
                              {multiplier === 2.5 && "DESIGN"}
                              {multiplier === 5 && "PEAK"}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Simulated Air Vector currents (Bespoke dynamic SVG wave pattern) */}
                      <div className="h-44 flex items-center justify-center relative mt-6 bg-neutral-500/5 rounded-2xl border border-neutral-500/5 overflow-hidden">
                        <svg key={customSpeedMultiplier} viewBox="0 0 1000 150" className="w-full h-full text-blue-500" fill="none">
                          {/* Wave 1 - Ambient air carrier */}
                          <motion.path
                            d="M 0 75 Q 125 45, 250 75 T 500 75 T 750 75 T 1000 75"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="opacity-40"
                            animate={{
                              d: [
                                "M 0 75 Q 125 35, 250 75 T 500 75 T 750 75 T 1000 75",
                                "M 0 75 Q 125 115, 250 75 T 500 75 T 750 75 T 1000 75",
                                "M 0 75 Q 125 35, 250 75 T 500 75 T 750 75 T 1000 75"
                              ]
                            }}
                            transition={{ duration: 6 / customSpeedMultiplier, repeat: Infinity, ease: "easeInOut" }}
                          />

                          {/* Wave 2 - High-pressure airflow path */}
                          <motion.path
                            d="M 0 75 Q 250 110, 500 75 T 1000 75"
                            stroke="#60a5fa"
                            strokeWidth="2.5"
                            className="opacity-70"
                            animate={{
                              d: [
                                "M 0 75 Q 250 110, 500 75 T 1000 75",
                                "M 0 75 Q 250 40, 500 75 T 1000 75",
                                "M 0 75 Q 250 110, 500 75 T 1000 75"
                              ]
                            }}
                            transition={{ duration: 4.5 / customSpeedMultiplier, repeat: Infinity, ease: "easeInOut" }}
                          />

                          {/* Wave 3 - Cold expansion thermal wave */}
                          <motion.path
                            d="M 0 100 Q 150 130, 300 100 T 600 100 T 900 100 T 1000 100"
                            stroke="#3b82f6"
                            strokeWidth="1"
                            className="opacity-30"
                            animate={{
                              d: [
                                "M 0 100 Q 150 130, 300 100 T 600 100 T 900 100 T 1000 100",
                                "M 0 100 Q 150 70, 300 100 T 600 100 T 900 100 T 1000 100",
                                "M 0 100 Q 150 130, 300 100 T 600 100 T 900 100 T 1000 100"
                              ]
                            }}
                            transition={{ duration: 8 / customSpeedMultiplier, repeat: Infinity, ease: "easeInOut" }}
                          />

                          {/* Air molecules particles circulating */}
                          {[...Array(12)].map((_, i) => (
                            <motion.circle
                              key={i}
                              cx={100 + i * 80}
                              cy={65 + (i % 3) * 15}
                              r="3"
                              fill="#3b82f6"
                              className="opacity-80 shadow-[0_0_8px_#3b82f6]"
                              animate={{
                                x: [0, 80],
                                y: [0, (i % 2 === 0 ? 10 : -10), 0]
                              }}
                              transition={{
                                duration: 3 / customSpeedMultiplier,
                                repeat: Infinity,
                                ease: "linear",
                                delay: i * 0.15
                              }}
                            />
                          ))}
                        </svg>
                      </div>
                    </div>

                    {/* C. Company Introduction & Stats */}
                    <SectionHeader
                      number="01"
                      tag="WHO WE ARE"
                      title="Over 26 years of high-end mechanical climate engineering."
                      description="We don't simply supply air conditioning. We partner with leading real-estate teams and sanitational designers to architect custom centralized systems that breathe in total harmony with modern glass layout aesthetics, maximizing heat load dissipation."
                      isDark={isDark}
                    />

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                      {STATISTICS.map((stat, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-150px" }}
                          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                          className={`p-6 border rounded-none ${isDark ? "bg-neutral-900/40 border-neutral-900" : "bg-transparent border-black/10"
                            }`}
                        >
                          <span className="block font-mono text-xs text-blue-600 uppercase tracking-widest mb-2 font-bold">
                            METRIC {i + 1}
                          </span>
                          <strong className={`block text-3xl sm:text-5xl font-bold tracking-tight ${isDark ? "text-neutral-100" : "text-[#0a0a0a]"
                            }`}>
                            {stat.value}
                          </strong>
                          <span className="block text-xs mt-2 text-neutral-500 uppercase font-mono tracking-wider font-semibold">
                            {stat.label}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* D. Comprehensive Services Highlights */}
                    <SectionHeader
                      number="02"
                      tag="SERVICES OVERVIEW"
                      title="Tailored HVAC architectures. Precision commissioning."
                      description="From simultaneous oceanic recovery VRFs to clinical isolation air chambers compliant with medical standards, discover our engineering range."
                      isDark={isDark}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {SERVICES.slice(0, 4).map((service, i) => (
                        <motion.div
                          key={service.id}
                          onClick={() => {
                            setActiveServiceTab(service.id);
                            setActiveSection("services");
                          }}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-150px" }}
                          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                          className={`p-6 border rounded-none cursor-pointer group transition-all duration-300 ${isDark
                            ? "bg-[#111] border-neutral-900 hover:border-neutral-700"
                            : "bg-transparent border-black/10 hover:border-black/30"
                            }`}
                        >
                          <span className="text-[10px] font-mono text-neutral-500 leading-none mb-4 block font-semibold">
                            COGNIZANT FLUIDS // {service.id.toUpperCase().replace("-", " ")}
                          </span>
                          <h3 className={`text-xl font-bold tracking-tight uppercase leading-tight mb-4 ${isDark ? "text-white" : "text-[#0a0a0a]"
                            }`}>
                            {service.title.split(" Systems")[0].split(" Systems")[0]}
                          </h3>
                          <p className={`text-xs leading-relaxed mb-6 ${isDark ? "text-neutral-400" : "text-gray-500"
                            }`}>
                            {service.shortDesc}
                          </p>

                          <div className="flex items-center gap-2 text-xs font-mono text-blue-600 group-hover:translate-x-1.5 transition-transform font-bold">
                            <span>EXPLORE SPECS</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* E. Large Testimonial Highlight */}
                    <div className={`p-8 md:p-12 border rounded-none relative overflow-hidden mt-6 ${isDark ? "bg-[#111] border-neutral-900" : "bg-transparent border-black/10"
                      }`}>
                      <span className="absolute top-8 right-8 text-[9px] font-mono tracking-widest text-[#3b82f63d]">
                        COGNIZANT AUDITED INTEGRITY
                      </span>

                      <div className="flex items-center gap-2 mb-6 font-mono text-xs text-blue-500 uppercase tracking-widest">
                        <span>◆</span> CLIENT VERDICT & TRUSTED PARTNERS
                      </div>

                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentTestimonialIndex}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.5 }}
                          className="max-w-4xl"
                        >
                          <blockquote className={`text-lg sm:text-2xl font-light italic leading-relaxed ${isDark ? "text-neutral-200" : "text-neutral-800"
                            }`}>
                            "{TESTIMONIALS[currentTestimonialIndex].quote}"
                          </blockquote>

                          <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div>
                              <strong className={`block text-sm font-semibold tracking-wide ${isDark ? "text-neutral-100" : "text-neutral-900"
                                }`}>
                                {TESTIMONIALS[currentTestimonialIndex].author}
                              </strong>
                              <span className="block text-xs font-mono text-neutral-500 uppercase tracking-wider mt-1">
                                {TESTIMONIALS[currentTestimonialIndex].role} &bull; {TESTIMONIALS[currentTestimonialIndex].company}
                              </span>
                            </div>

                            {/* Testimonial slider indicators */}
                            <div className="flex gap-2">
                              {TESTIMONIALS.map((_, i) => (
                                <button
                                  key={i}
                                  onClick={() => setCurrentTestimonialIndex(i)}
                                  className={`h-1 transition-all cursor-pointer ${currentTestimonialIndex === i ? "bg-blue-600 w-8" : "bg-neutral-500/30 w-4"
                                    }`}
                                  aria-label={`Go to testimonial ${i + 1}`}
                                />
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* F. CTA banner block */}
                    <div className={`p-8 md:p-14 border rounded-none text-center relative overflow-hidden flex flex-col items-center gap-6 ${isDark ? "bg-[#111] border-neutral-900" : "bg-transparent border-black/10"
                      }`}>
                      {/* Subtle airflow vortex SVG background decoration */}
                      <div className="absolute inset-0 opacity-[0.02] pointer-events-none flex items-center justify-center">
                        <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 text-white animate-spin-slow">
                          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" fill="none" />
                        </svg>
                      </div>

                      <span className="text-[10px] font-mono tracking-widest text-blue-600 uppercase font-bold leading-none">
                        ◆ INTERDISCIPLINARY COOPERATION
                      </span>

                      <h3 className={`text-2xl sm:text-4xl font-bold tracking-tight uppercase max-w-xl leading-tight ${isDark ? "text-white" : "text-[#0a0a0a]"
                        }`}>
                        Have an ambitious architectural design pending HVAC layout?
                      </h3>

                      <p className={`text-xs sm:text-sm max-w-md ${isDark ? "text-neutral-400" : "text-gray-500"}`}>
                        Our computational fluid group collaborates directly with lead contractors. Obtain safe heat loss estimations, sound budgets, and clean ducting routes.
                      </p>

                      <button
                        id="home-cta-contact"
                        onClick={() => setActiveSection("contact")}
                        className={`px-8 py-3.5 rounded-none border hover:bg-blue-600 hover:text-white text-xs font-mono tracking-[0.2em] uppercase transition-all flex items-center gap-2 cursor-pointer font-bold ${isDark
                          ? "bg-blue-600/10 border-blue-500/30 text-blue-400"
                          : "bg-blue-50 border-blue-200 text-blue-600"
                          }`}
                      >
                        <span>CO-DESIGN WITH INTEL AIR</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                )}

                {/* ========================================================= */}
                {/* 2. ABOUT SECTION                                          */}
                {/* ========================================================= */}
                {activeSection === "about" && (
                  <div id="section-about" className="flex flex-col gap-16 md:gap-24">
                    <SectionHeader
                      number="02"
                      tag="COMPANY PROFILE"
                      title="We balance temperature, acoustics, and air filtration parameters."
                      description="Intel Air Group is an elite mechanical contractor specialized in full-cycle HVAC consultation, multi-room VRV zoning, and heavy chiller distribution systems."
                      isDark={isDark}
                    />

                    {/* Company Leadership & Founder Story */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-5 flex flex-col gap-6"
                      >
                        <div className="flex items-center gap-2 text-xs font-mono text-blue-500 uppercase tracking-widest">
                          <span>◇</span> THE MANAGING PERSPECTIVE
                        </div>
                        <h3 className={`text-2xl sm:text-3xl font-light tracking-wide uppercase ${isDark ? "text-white" : "text-neutral-900"}`}>
                          Founder Legacy
                        </h3>
                        <p className={`text-sm leading-relaxed ${isDark ? "text-neutral-400" : "text-neutral-600"}`}>
                          Under the active guidance of <strong>Mr. Dhaval Dave</strong> (28 years of experience) and <strong>Mr. Mihir Shah</strong> (26 years of experience), Intel Air Group expanded into a leading national HVAC engineering consultancy.
                        </p>
                        <p className={`text-sm leading-relaxed ${isDark ? "text-neutral-400" : "text-neutral-600"}`}>
                          Our core engineering philosophy treats air as an active architectural element. By designing systems that blend into structural elements, we preserve building aesthetics while maintaining thermal efficiency and low operation noise.
                        </p>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="lg:col-span-7"
                      >
                        {/* Visual corporate profile card */}
                        <div className={`p-8 border rounded-none flex flex-col gap-6 relative overflow-hidden ${isDark ? "bg-[#111] border-neutral-900" : "bg-transparent border-black/10"
                          }`}>
                          <span className="absolute bottom-6 right-6 text-[9px] font-mono text-neutral-500">
                            OFFICIAL LEDGER SYSTEM
                          </span>

                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-none bg-blue-600/10 border border-blue-500/30 flex items-center justify-center">
                              <Award className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <strong className={`block text-base font-bold uppercase ${isDark ? "text-white" : "text-[#0F0F0F]"}`}>
                                Mr. Dhaval Dave & Mr. Mihir Shah
                              </strong>
                              <span className="block text-xs font-mono text-neutral-400 font-semibold">
                                Managing Partners & Principal HVAC Consultants
                              </span>
                            </div>
                          </div>

                          <blockquote className="text-xs font-mono text-blue-600 uppercase tracking-wider italic font-bold">
                            "Engineering is about precision. Every linear meter of copper duct or duct line must reflect a real thermodynamics loading calculation, keeping energy use low and structures pristine."
                          </blockquote>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-gray-150 dark:border-neutral-800/80 pt-6 mt-2">
                            <div className="flex flex-col gap-1">
                              <span className="text-[10px] font-mono text-neutral-500 uppercase leading-none font-bold">REGISTRATION</span>
                              <span className={`text-sm font-bold ${isDark ? "text-neutral-200" : "text-neutral-800"}`}>
                                Established Since 2000
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <span className="text-[10px] font-mono text-neutral-500 uppercase leading-none font-bold">CORE AUDIT STANDARD</span>
                              <span className={`text-sm font-bold ${isDark ? "text-neutral-200" : "text-neutral-800"}`}>
                                ASHRAE, ISHRAE, LEED, ISO
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Pillars of strength: Editorial Grid layout */}
                    <div className={`border-t pt-12 ${isDark ? "border-neutral-900" : "border-gray-100"}`}>
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
                        <div className="lg:col-span-4">
                          <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-[0.2em] block mb-2 font-bold">
                            ◇ THE CORE PILLARS
                          </span>
                          <h4 className={`text-2xl font-bold uppercase tracking-tight ${isDark ? "text-white" : "text-[#0F0F0F]"}`}>
                            Our Engineering Strengths
                          </h4>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                          className={`p-6 border rounded-none ${isDark ? "bg-neutral-950/40 border-neutral-900" : "bg-transparent border-black/10"}`}
                        >
                          <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest block mb-4 font-bold">
                            STRENGTH 01 // WHISPER ACOUSTICS
                          </span>
                          <h5 className={`text-base font-bold uppercase mb-3 ${isDark ? "text-white" : "text-[#0f0f0f]"}`}>
                            Sustained Whispering Decibels
                          </h5>
                          <p className={`text-xs leading-relaxed ${isDark ? "text-neutral-400" : "text-gray-500"}`}>
                            By placing custom acoustic dynamic isolators and selecting multi-stage inverter motors, we guarantee night cooling levels remain under 21 dB(A)—practically inaudible for bedroom penthouses or private offices.
                          </p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                          className={`p-6 border rounded-none ${isDark ? "bg-neutral-950/40 border-neutral-900" : "bg-transparent border-black/10"}`}
                        >
                          <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest block mb-4 font-bold">
                            STRENGTH 02 // ZERO ENERGY SPOILAGE
                          </span>
                          <h5 className={`text-base font-bold uppercase mb-3 ${isDark ? "text-white" : "text-[#0f0f0f]"}`}>
                            Optimal Energy Balance
                          </h5>
                          <p className={`text-xs leading-relaxed ${isDark ? "text-neutral-400" : "text-gray-500"}`}>
                            Using Energy Recovery Ventilators (ERV) allows our systems to capture up to 85% of cold thermal energy from outgoing exhaust lines, pre-cooling incoming fresh air loops and lowering energy draw.
                          </p>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                          className={`p-6 border rounded-none ${isDark ? "bg-neutral-950/40 border-neutral-900" : "bg-transparent border-black/10"}`}
                        >
                          <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest block mb-4 font-bold">
                            STRENGTH 03 // PARTICLE SANITIZATION
                          </span>
                          <h5 className={`text-base font-bold uppercase mb-3 ${isDark ? "text-white" : "text-[#0f0f0f]"}`}>
                            Hospital-Grade Clean Air
                          </h5>
                          <p className={`text-xs leading-relaxed ${isDark ? "text-neutral-400" : "text-gray-500"}`}>
                            Integrated HEPA H14 micro-filtration meshes and carbon-reacting cartridges extract volatile compounds and micro-particulates down to 0.1 microns, creating safe environments for surgical complexes.
                          </p>
                        </motion.div>
                      </div>
                    </div>

                    {/* Interactive Почему выбирают нас (Why Choose Us) */}
                    <div className={`lg:border-t pt-10 ${isDark ? "border-neutral-900" : "border-gray-100"}`}>
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                          className="lg:col-span-5"
                        >
                          <span className="text-[10px] font-mono text-neutral-500 uppercase block tracking-wider mb-2 font-bold">
                            ◇ CONVERSION METRICS
                          </span>
                          <h3 className={`text-2xl font-bold uppercase tracking-tight mb-6 ${isDark ? "text-white" : "text-[#0a0a0a]"}`}>
                            Why Lead Builders Standardize on Intel Air Group
                          </h3>
                          <p className={`text-sm leading-relaxed mb-8 ${isDark ? "text-neutral-400" : "text-gray-500"}`}>
                            We sustain continuous service SLAs that prevent unexpected shutdowns, provide extended machinery coverage for up to a decade, and document structural heat load audits on paper.
                          </p>

                          <button
                            onClick={() => setActiveSection("contact")}
                            className={`px-6 py-3 rounded-none text-xs font-mono tracking-[0.2em] uppercase font-bold transition-all border flex items-center gap-2 cursor-pointer ${isDark
                              ? "bg-white border-white text-black hover:bg-transparent hover:text-white"
                              : "bg-black border-black text-white hover:bg-transparent hover:text-black"
                              }`}
                          >
                            <span>BOOK BLUEPRINT REVIEW</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </motion.div>

                        <div className="lg:col-span-7 flex flex-col gap-4">
                          {[
                            { title: "24-Month Project Defect Guarantee", desc: "Every physical copper layout joint, extraction valve and chiller alignment carries an extensive 2-year worry-free warranty audit lock." },
                            { title: "Direct Single-Point Support Desk", desc: "No complex robot bots or waiting lines. You coordinate directly with our senior field technician or estimating mechanical engineer within 4 hours." },
                            { title: "Eco-Friendly Refrigerant Policy", desc: "All system parameters are pre-engineered to run on the latest eco-friendly cooling gases (R-32, R-410A) with very low Global Warming Potential." },
                            { title: "Transparent Cost Structures", desc: "No hidden charges. We outline clean linear budgets with itemized bills, structural copper sizing matrices, and AMC metrics transparently." }
                          ].map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true, margin: "-50px" }}
                              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                              className={`p-5 rounded-none border flex gap-4 ${isDark ? "bg-[#111] border-neutral-900 hover:border-neutral-800" : "bg-transparent border-black/10"
                                }`}
                            >
                              <div className="p-2 w-8 h-8 rounded-none bg-blue-600/10 border border-blue-500/30 flex items-center justify-center shrink-0">
                                <Check className="w-4 h-4 text-blue-600" />
                              </div>
                              <div>
                                <h4 className={`text-sm font-bold uppercase tracking-wide ${isDark ? "text-neutral-200" : "text-[#0a0a0a]"}`}>
                                  {item.title}
                                </h4>
                                <p className={`text-xs mt-1.5 leading-relaxed ${isDark ? "text-neutral-500" : "text-gray-500"}`}>
                                  {item.desc}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                )}

                {/* ========================================================= */}
                {/* 3. SERVICES SECTION                                       */}
                {/* ========================================================= */}
                {activeSection === "services" && (
                  <div id="section-services" className="flex flex-col gap-16 md:gap-24">
                    <SectionHeader
                      number="03"
                      tag="OUR HVAC SERVICES"
                      title="Advanced thermal zoning. Precise mechanical installations."
                      description="We analyze building layouts, thermodynamic targets, and physical structural parameters to select the ideal VRF setup or heavy chiller configuration for the project scope."
                      isDark={isDark}
                    />

                    {/* Interactive Custom Tab System for detailed Services */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                      {/* LEFT: Clickable Service Tabs */}
                      <div className="lg:col-span-5 flex flex-col gap-3">
                        <span className="text-[10px] font-mono text-neutral-500 tracking-widest p-2 block font-bold">
                          ◇ CLIMATE CAPABILITIES MENU
                        </span>

                        {SERVICES.map((s) => {
                          const isActive = activeServiceTab === s.id;
                          return (
                            <button
                              key={s.id}
                              onClick={() => setActiveServiceTab(s.id)}
                              className={`w-full p-4 rounded-none border text-left flex items-center justify-between transition-all group cursor-pointer ${isActive
                                ? "bg-blue-600/10 border-blue-600 text-blue-600 font-bold"
                                : isDark
                                  ? "bg-neutral-900/40 border-neutral-900 text-neutral-400 hover:border-neutral-800 hover:text-white"
                                  : "bg-transparent border-black/10 text-neutral-600 hover:border-gray-400 hover:text-black"
                                }`}
                            >
                              <div className="flex flex-col">
                                <span className="text-[8px] font-mono text-neutral-500 block uppercase tracking-wide mb-1 font-bold">
                                  SYSTEM CODE: {s.id.toUpperCase()}
                                </span>
                                <span className="text-sm font-bold tracking-wide uppercase">
                                  {s.title}
                                </span>
                              </div>
                              <ChevronRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isActive ? "text-blue-600 rotate-90" : "text-neutral-500"
                                }`} />
                            </button>
                          );
                        })}
                      </div>

                      {/* RIGHT: Active Tab details with specifications dynamic listing */}
                      <div className="lg:col-span-7">
                        <AnimatePresence mode="wait">
                          {activeServiceTab ? (
                            <motion.div
                              key={activeServiceTab}
                              initial={{ opacity: 0, x: 15 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -15 }}
                              transition={{ duration: 0.4 }}
                              className={`p-6 sm:p-8 border rounded-none relative overflow-hidden flex flex-col gap-6 ${isDark ? "bg-[#111] border-neutral-900" : "bg-transparent border-black/10"
                                }`}
                            >
                              {/* Aesthetic backdrop placeholder with parallax */}
                              <div className="h-56 w-full rounded-none overflow-hidden relative border border-neutral-500/10">
                                <ParallaxImage
                                  src={SERVICES.find(s => s.id === activeServiceTab)?.image || ""}
                                  alt={SERVICES.find(s => s.id === activeServiceTab)?.title || ""}
                                  className="w-full h-full"
                                  ratio={0.15}
                                />
                                <div className="absolute inset-0 bg-neutral-950/20 mix-blend-multiply pointer-events-none" />

                                {/* Blue Accent gradient box */}
                                <div className="absolute bottom-4 left-4 bg-blue-600 text-white font-mono text-[9px] tracking-widest uppercase px-3 py-1.5 rounded-none border border-blue-400/30 font-bold z-10">
                                  ACTIVE BLUEPRINT SELECTOR
                                </div>
                              </div>

                              <div>
                                <span className="text-[10px] font-mono text-neutral-500 uppercase block tracking-widest mb-1.5">
                                  03 // FLUID COMPORTMENT DETAILS
                                </span>

                                <h3 className={`text-2xl font-light uppercase tracking-wide ${isDark ? "text-white" : "text-neutral-900"}`}>
                                  {SERVICES.find(s => s.id === activeServiceTab)?.title}
                                </h3>
                              </div>

                              <p className={`text-sm leading-relaxed ${isDark ? "text-neutral-400" : "text-neutral-600"}`}>
                                {SERVICES.find(s => s.id === activeServiceTab)?.longDesc}
                              </p>

                              {/* Features list */}
                              <div className="flex flex-col gap-3">
                                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                                  SYSTEM INCLUSIONS & ATTRIBUTES:
                                </span>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                  {SERVICES.find(s => s.id === activeServiceTab)?.features.map((feat, index) => (
                                    <div key={index} className="flex items-start gap-2.5">
                                      <div className="p-1 rounded-none bg-blue-600/10 border border-blue-500/20 text-blue-600 shrink-0 mt-0.5">
                                        <Check className="w-3 h-3" />
                                      </div>
                                      <span className={`text-xs ${isDark ? "text-neutral-300" : "text-gray-500"}`}>
                                        {feat}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Technical ratings spec matrix */}
                              <div className={`mt-4 border-t pt-6 flex flex-col gap-3 ${isDark ? "border-neutral-900" : "border-gray-150"}`}>
                                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest font-bold">
                                  ENGINEERING SPECS SHEET:
                                </span>
                                <div className="grid grid-cols-3 gap-4">
                                  {SERVICES.find(s => s.id === activeServiceTab)?.specs.map((spec, index) => (
                                    <div key={index} className="flex flex-col gap-1">
                                      <span className="text-[9px] font-mono text-neutral-450 uppercase leading-none font-bold">{spec.label}</span>
                                      <span className={`text-xs font-bold ${isDark ? "text-blue-400" : "text-blue-600"}`}>{spec.value}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                            </motion.div>
                          ) : null}
                        </AnimatePresence>
                      </div>

                    </div>

                    {/* Engineering Process Timeline (Editorial layout) */}
                    <div className={`border-t pt-12 ${isDark ? "border-neutral-900" : "border-gray-100"}`}>
                      <span className="text-[10px] font-mono text-neutral-500 uppercase block tracking-[0.2em] mb-4 font-bold">
                        ◇ THE BLUEPRINT FLOW
                      </span>
                      <h3 className={`text-3xl font-bold uppercase tracking-tight mb-12 ${isDark ? "text-white" : "text-[#0a0a0a]"}`}>
                        Our Complete HVAC Design-to-AMC Process
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {[
                          { step: "01", name: "Audit & Load", desc: "Calculate building solar profiles, physical walls, glass layers, and estimated human occupants." },
                          { step: "02", name: "CFD Vectoring", desc: "Simulate duct boundaries and model air velocities to verify total absence of static pockets." },
                          { step: "03", name: "Piping & Install", desc: "Rigorous copper joint sealing, vibration isolator layouts, and manifold routing setups." },
                          { step: "04", name: "Commissioning", desc: "Formal dry nitrogen holding runs, vacuum holds down to 500 microns, and structural balance." },
                          { step: "05", name: "AMC Handover", desc: "Define quarterly thermal audits, diagnostic routines, coil deep-wash plans, and proactive care." }
                        ].map((proc, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                            className={`p-5 rounded-none border relative flex flex-col gap-4 ${isDark ? "bg-[#111] border-neutral-900" : "bg-transparent border-black/10"
                              }`}
                          >
                            <span className="text-3xl font-mono font-bold text-blue-600">
                              {proc.step}
                            </span>
                            <div>
                              <h4 className={`text-xs font-mono tracking-widest text-[#0a0a0a] dark:text-neutral-300 uppercase font-bold`}>
                                {proc.name}
                              </h4>
                              <p className={`text-[11px] leading-relaxed mt-2 ${isDark ? "text-neutral-500" : "text-gray-500"}`}>
                                {proc.desc}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                  </div>
                )}

                {/* ========================================================= */}
                {/* 4. PROJECTS SECTION                                       */}
                {/* ========================================================= */}
                {activeSection === "projects" && (
                  <div id="section-projects" className="flex flex-col gap-6 md:gap-8">
                    <SectionHeader
                      number="04"
                      tag="PORTFOLIO HIGHLIGHTS"
                      title="Thermodynamically balanced spaces for critical sectors."
                      description="Explore our filterable commercial catalog spanning hospital intensive wings, oceanwide resorts, and minimalist corporate offices."
                      isDark={isDark}
                      className="!pb-2 md:!pb-4"
                    />

                    {/* Categories Filter Hub (Thin styled list aligned like Fluid Glass Contact menu) */}
                    <div className={`border-b pb-2 flex flex-wrap items-center gap-2 mb-2 font-mono text-xs ${isDark ? "border-neutral-900" : "border-gray-200"
                      }`}>
                      <span className={`text-[11px] sm:text-xs uppercase tracking-widest mr-4 font-extrabold ${isDark ? "text-neutral-250" : "text-neutral-850"}`}>
                        FILTER BY BUILDING SECTOR:
                      </span>

                      {[
                        "All",
                        "Restaurants & Banquets",
                        "Hotels, Resorts & Hospitality",
                        "Corporate Offices / Industries",
                        "Educational Institutions",
                        "Showrooms & Retail",
                        "Residence / Luxury Villas",
                        "Hospitals / Health Care"
                      ].map((cat) => {
                        const isSelected = projectFilter === cat;
                        return (
                          <button
                            key={cat}
                            onClick={() => setProjectFilter(cat)}
                            className={`px-4 py-2 rounded-none border transition-all cursor-pointer font-bold duration-200 text-[11px] sm:text-xs tracking-wider ${isSelected
                              ? "bg-black text-white dark:bg-white dark:text-black border-black dark:border-white"
                              : isDark
                                ? "bg-neutral-900 border-neutral-800 text-neutral-450 hover:text-white"
                                : "bg-transparent border-black/10 text-neutral-500 hover:text-black hover:border-gray-400"
                              }`}
                          >
                            {cat.toUpperCase()}
                          </button>
                        );
                      })}
                    </div>

                    {/* Grid & List Portfolio wrapper with smooth transition on filter change */}
                    <motion.div layout transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }} className="w-full">
                      <AnimatePresence mode="wait">
                      <motion.div
                        key={projectFilter}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full flex flex-col"
                      >
                        {/* Grid Portfolio representation */}
                        {projectsWithImages.length > 0 && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {projectsWithImages.map((project) => (
                              <motion.div
                                key={project.id}
                                onClick={() => setSelectedProject(project)}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                                className={`border rounded-none overflow-hidden flex flex-col justify-between group h-full cursor-pointer hover:border-blue-500/40 transition-all duration-305 ${isDark ? "bg-[#111] border-neutral-900" : "bg-transparent border-black/10"
                                  }`}
                              >
                                <div className="h-64 sm:h-72 w-full overflow-hidden relative border-b border-gray-100 dark:border-neutral-900/80">
                                  {project.image && (
                                    <ParallaxImage
                                      src={project.image}
                                      alt={project.title}
                                      className="w-full h-full"
                                      ratio={0.12}
                                    />
                                  )}

                                  {/* Tag sector */}
                                  <div className="absolute top-4 left-4 bg-black border border-neutral-800 text-white font-mono text-[9px] tracking-widest uppercase px-3 py-1 rounded-none font-bold z-10">
                                    {project.category} {project.year ? `// CAL ${project.year}` : ""}
                                  </div>
                                </div>

                                {/* Content portfolio */}
                                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                                  <div className="flex flex-col gap-4">
                                    <span className="text-[10px] font-mono text-neutral-500 uppercase block tracking-wider leading-none font-bold">
                                      {project.location ? `LOC: ${project.location.split(",")[0].toUpperCase()}` : ""}
                                      {project.location && project.client ? " • " : ""}
                                      {project.client ? `CLIENT: ${project.client.toUpperCase()}` : ""}
                                    </span>

                                    <h3 className={`text-xl font-bold uppercase tracking-tight leading-snug ${isDark ? "text-white" : "text-[#0a0a0a]"
                                      }`}>
                                      {project.title}
                                    </h3>

                                    {project.description && (
                                      <p className={`text-xs leading-relaxed ${isDark ? "text-neutral-400" : "text-gray-500"}`}>
                                        {project.description}
                                      </p>
                                    )}
                                  </div>

                                  {/* Technical metrics label inside portfolio */}
                                  <div className="mt-8 pt-6 border-t border-gray-150 dark:border-neutral-900/80 flex flex-col gap-2 font-mono text-[10px]/[1.5]">
                                    <span className="text-neutral-400 uppercase leading-none font-bold">VERIFIED ENERGY METRICS:</span>
                                    <span className={`font-bold ${isDark ? "text-blue-400" : "text-blue-600"}`}>
                                      {project.metrics}
                                    </span>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        )}

                        {/* List-only projects */}
                        {projectsWithoutImages.length > 0 && (
                          <div className={`mt-6 border-t pt-6 ${isDark ? "border-neutral-900" : "border-gray-200"}`}>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                              <div>
                                <span className="text-blue-600 font-mono text-[10px] tracking-[0.2em] uppercase font-bold">
                                  ◆ COMPREHENSIVE COMMISSIONED LOGS
                                </span>
                                <h3 className={`text-2xl font-bold uppercase tracking-tight mt-1.5 ${isDark ? "text-white" : "text-[#0a0a0a]"}`}>
                                  Other Notable Project Deployments
                                </h3>
                              </div>
                              <span className="text-xs font-mono text-neutral-500 tracking-wider">
                                {projectsWithoutImages.length} SYSTEMS LISTED
                              </span>
                            </div>

                            {/* List Grid Layout */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4">
                              {projectsWithoutImages.map((project, index) => (
                                <div
                                  key={project.id}
                                  className={`flex items-center justify-between py-4 border-b group transition-colors ${isDark ? "border-neutral-900 hover:bg-white/[0.02]" : "border-black/5 hover:bg-black/[0.01]"
                                    } px-2`}
                                >
                                  <div className="flex items-center gap-4">
                                    <span className="font-mono text-xs text-blue-500 font-bold">
                                      {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <div>
                                      <h4 className={`text-sm font-semibold uppercase tracking-wide transition-colors ${isDark ? "text-neutral-200 group-hover:text-white" : "text-neutral-800 group-hover:text-black"
                                        }`}>
                                        {project.title}
                                      </h4>
                                      <span className="block text-[8px] font-mono text-neutral-500 uppercase tracking-widest mt-0.5">
                                        {project.category}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2 font-mono">
                                    <span className="text-[10px] text-neutral-400 font-bold uppercase hidden sm:inline">CAPACITY:</span>
                                    <span className={`text-xs font-bold ${isDark ? "text-blue-400" : "text-blue-600"}`}>
                                      {project.metrics}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>

                </div>
              )}

                {/* ========================================================= */}
                {/* 5. CLIENTS SECTION                                        */}
                {/* ========================================================= */}
                {activeSection === "clients" && (
                  <div id="section-clients" className="flex flex-col gap-16 md:gap-24">
                    <SectionHeader
                      number="05"
                      tag="OUR CLIENT BASE"
                      title="Over 7,000 satisfied facilities. Engineered trust."
                      description="We service high-demand medical systems, heavy real-estate complexes, premium beachfront resorts, and education institutes across coastal and urban areas."
                      isDark={isDark}
                    />

                    {/* Aesthetic Client Logo Wall / Custom Grid using brand partnerships text tags */}
                    <div className={`border p-8 rounded-none flex flex-col gap-6 ${isDark ? "bg-[#111] border-neutral-900" : "bg-transparent border-black/10"
                      }`}>
                      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block leading-none font-bold">
                        ◇ Authorized Brand Partners:
                      </span>

                      {/* Infinite Logo Marquee */}
                      <div className="relative w-full overflow-hidden py-8 mask-image-fade">
                        <div className="flex items-center animate-marquee gap-12 w-max">
                          {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-center h-32 w-80 shrink-0 transition-all duration-300 group"
                            >
                              <img
                                src={logo.src}
                                alt={logo.name}
                                className={`w-auto max-w-[85%] object-contain transition-opacity duration-300 opacity-80 group-hover:opacity-100 ${logo.className || "h-16"
                                  } ${isDark && logo.invertInDark ? "brightness-0 invert" : ""} ${
                                    isDark && logo.mitsubishiFilterInDark ? "mitsubishi-dark-filter" : ""
                                  }`}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Dynamic Client Distribution Sector map layout */}
                    <div className={`border-t pt-12 ${isDark ? "border-neutral-900" : "border-gray-100"}`}>
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
                        <div className="lg:col-span-5">
                          <span className="text-[10px] font-mono text-neutral-500 uppercase block tracking-wider mb-2 font-bold">
                            ◇ STRUCTURED SECTORS
                          </span>
                          <h3 className={`text-2xl font-bold uppercase tracking-tight ${isDark ? "text-white" : "text-[#0a0a0a]"}`}>
                            Operational Footprint by Industry
                          </h3>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                          { sector: "Restaurants & Banquets", demand: "High-volume air changes, advanced odor extraction, quiet cooling during peak capacity events", share_of_installations: "Luxury banquet lawns, fine-dining restaurants, celebration halls" },
                          { sector: "Hotels, Resorts & Hospitality", demand: "Simultaneous Cooling VRF, Anti-Corrosion Salt Coating, Low Acoustical Decibels", share_of_installations: "Ocean shore grand resorts, 500+ guestroom suites, lobbies" },
                          { sector: "Corporate Offices / Industries", demand: "High-ton water chiller towers, computerized VAV ducts, Smart BMS console links", share_of_installations: "Multi-floor tech corridors, open floor layouts, manufacturing plants" },
                          { sector: "Educational Institutions", demand: "Precision decibel environments, optimal fresh air changes (ACH), classroom zoning controls", share_of_installations: "University campus blocks, archival libraries, primary school rooms" },
                          { sector: "Showrooms & Retail", demand: "Continuous high airflow cassettes, thermal jet air curtains, floor barriers", share_of_installations: "Automotive showrooms, premium boutiques, shopping mall layouts" },
                          { sector: "Residence / Luxury Villas", demand: "Whisper-silent cassette integration, slim line grilles layout, Home automation", share_of_installations: "Duplex townhomes, high-tier penthouse villas, private estates" },
                          { sector: "Hospitals / Health Care", demand: "ISO 5 Positive or Negative Pressure Airflow, HEPA Cleanliness", share_of_installations: "Hospital surgery zones, diagnostic path wings, isolation chambers" }
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                            className={`p-5 rounded-none border flex flex-col gap-3 ${isDark ? "bg-[#111] border-neutral-900" : "bg-transparent border-black/10"
                              }`}
                          >
                            <h4 className={`text-sm font-mono font-bold uppercase tracking-wider text-blue-600`}>
                              {item.sector}
                            </h4>
                            <div>
                              <span className="block text-[8px] font-mono text-neutral-400 uppercase leading-none mb-1 font-bold">DESIGN PARAMETERS:</span>
                              <span className={`text-xs block ${isDark ? "text-neutral-200" : "text-gray-500"}`}>
                                {item.demand}
                              </span>
                            </div>
                            <div className="border-t border-gray-150 dark:border-neutral-900/80 pt-2 mt-1">
                              <span className="block text-[8px] font-mono text-neutral-500 uppercase leading-none mb-1 font-bold">KEY APPLICATION:</span>
                              <span className={`text-[11px] leading-relaxed block ${isDark ? "text-neutral-400" : "text-gray-500"}`}>
                                {item.share_of_installations}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                  </div>
                )}

                {/* ========================================================= */}
                {/* 6. ACHIEVEMENTS SECTION                                   */}
                {/* ========================================================= */}
                {activeSection === "achievements" && (
                  <div id="section-achievements" className="flex flex-col gap-16 md:gap-24">
                    <SectionHeader
                      number="06"
                      tag="ACHIEVEMENTS TIMELINE"
                      title="Twenty-six years of national climate expertise."
                      description="Review the milestones and green energy certifications that position Intel Air Group as a respected engineering authority."
                      isDark={isDark}
                    />

                    {/* Chronological Compliance Timeline */}
                    <div className="relative border-l border-blue-600 pl-6 ml-4 flex flex-col gap-12">
                      {COMPLAINCE_TIMELINE.map((time, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                          className="relative group"
                        >

                          {/* Interactive dot */}
                          <span className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-none h-2 w-2 bg-blue-600"></span>
                          </span>

                          <div className="flex flex-col gap-2">
                            <span className="font-mono text-lg font-bold text-blue-600 leading-none">
                              {time.year}
                            </span>

                            <h4 className={`text-lg font-bold uppercase tracking-tight ${isDark ? "text-white" : "text-[#0a0a0a]"}`}>
                              {time.title}
                            </h4>

                            <p className={`text-xs sm:text-sm leading-relaxed max-w-2xl ${isDark ? "text-neutral-400" : "text-gray-500"}`}>
                              {time.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Grid for Certifications & Audits stamps */}
                    <div className={`border-t pt-12 ${isDark ? "border-neutral-900" : "border-gray-100"}`}>
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
                        <div className="lg:col-span-5">
                          <span className="text-[10px] font-mono text-neutral-500 uppercase block tracking-wider mb-2 font-bold">
                            ◇ GREEN STANDARDS
                          </span>
                          <h3 className={`text-2xl font-bold uppercase tracking-tight ${isDark ? "text-white" : "text-neutral-900"}`}>
                            Operational Compliance & Certifications
                          </h3>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {CERTIFICATIONS.map((cert, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.96 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                            className={`p-5 rounded-none border flex gap-4 ${isDark ? "bg-[#111] border-neutral-900 hover:border-neutral-800" : "bg-transparent border-black/10"
                              }`}
                          >
                            <div className="w-12 h-12 rounded-none bg-blue-600/10 border border-blue-500/30 flex items-center justify-center shrink-0">
                              <CheckCircle2 className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <span className="font-mono text-[10px] font-bold text-blue-600 block">
                                {cert.code}
                              </span>
                              <h4 className={`text-sm font-bold uppercase tracking-wide mt-1 ${isDark ? "text-neutral-200" : "text-[#0a0a0a]"}`}>
                                {cert.title}
                              </h4>
                              <span className="block text-[10px] font-mono text-neutral-500 uppercase mt-1 leading-none font-bold">
                                Authority: {cert.authority}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Manufacturer standard logos block */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.8 }}
                      className={`p-8 border rounded-none text-center relative overflow-hidden flex flex-col items-center gap-6 ${isDark ? "bg-[#111] border-neutral-900" : "bg-transparent border-black/10"
                        }`}
                    >
                      <span className="text-[10px] font-mono tracking-widest text-[#2563eb6a] uppercase font-bold">
                        ◆ CERTIFICATION PARTNER ASSURANCE
                      </span>

                      <h3 className={`text-xl sm:text-2xl font-bold tracking-tight uppercase max-w-xl leading-tight ${isDark ? "text-white" : "text-[#0a0a0a]"
                        }`}>
                        We carry official certifications for original item stocks and system installations.
                      </h3>
                    </motion.div>

                  </div>
                )}

                {/* ========================================================= */}
                {/* 7. CONTACT SECTION                                        */}
                {/* ========================================================= */}
                {activeSection === "contact" && (
                  <div id="section-contact" className="flex flex-col gap-16 md:gap-24">
                    {/* Visual Header matching the screenshot of fluid.glass/contact */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="flex flex-col gap-6 pt-6 pb-4"
                    >
                      <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.4em] uppercase mb-4 text-blue-600 font-bold">
                        <span>◆</span>
                        <span>CONTACT INDEX</span>
                      </div>

                      <h2 className={`text-4xl sm:text-6xl md:text-[5.5rem] font-bold tracking-tight uppercase leading-[0.85] ${isDark ? "text-white" : "text-[#0a0a0a]"
                        }`}>
                        Bringing architectural ideas to <span className="font-normal italic text-blue-600">micro-temperatures</span>.
                      </h2>
                    </motion.div>

                    {/* Sub Contact block layout with details */}
                    <div className={`border-t pt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 font-mono text-[11px] leading-relaxed ${isDark ? "border-neutral-900 text-neutral-400" : "border-gray-200 text-neutral-650"
                      }`}>
                      {/* Talk to us */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-4 flex flex-col gap-3"
                      >
                        <span className="text-neutral-500 uppercase tracking-widest block text-[9px] font-bold">◇ TALK TO US</span>
                        <a href="tel:+917405399550" className={`text-base font-bold block hover:text-blue-600 transition-colors uppercase ${isDark ? "text-neutral-100" : "text-[#0a0a0a]"
                          }`}>
                          +91 74053 99550
                        </a>
                        <span className="text-xs text-neutral-400 font-semibold block leading-none">
                          Landlines: 079 40359594 / 40059594
                        </span>
                      </motion.div>

                      {/* Write to us */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-4 flex flex-col gap-3"
                      >
                        <span className="text-neutral-500 uppercase tracking-widest block text-[9px] font-bold">◇ WRITE TO US</span>
                        <a href="mailto:sales@intelairgroup.com" className={`text-base font-bold block hover:text-blue-600 transition-colors underline uppercase ${isDark ? "text-neutral-100" : "text-[#0a0a0a]"
                          }`}>
                          sales@intelairgroup.com
                        </a>
                        <span className="text-xs text-neutral-400 font-semibold block leading-none">
                          projects@intelairgroup.com
                        </span>
                      </motion.div>

                      {/* Visit us */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-4 flex flex-col gap-3"
                      >
                        <span className="text-neutral-500 uppercase tracking-widest block text-[9px] font-bold">◇ VISIT HEADQUARTERS</span>
                        <address className={`text-xs font-sans not-italic font-bold block leading-relaxed ${isDark ? "text-neutral-200" : "text-neutral-800"
                          }`}>
                          A-217 to 220, Popular Plaza, near Someshwara Jain Derasar, <br />
                          Shyamal Cross Road, Satellite, Ahmedabad 380 015, Gujarat, India
                        </address>
                        <span className="font-semibold">Main mechanical drafting and estimates office layout.</span>
                      </motion.div>
                    </div>

                    {/* TAILORED BLUEPRINT INQUIRY CONFIGURATOR */}
                    <div className={`border-t pt-12 ${isDark ? "border-neutral-900" : "border-gray-150"}`}>
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
                        <div className="lg:col-span-6">
                          <span className="text-[10px] font-mono text-neutral-500 uppercase block tracking-wider mb-2 font-bold">
                            ◇ TACTILE INQUIRY SYSTEM
                          </span>
                          <h3 className={`text-2xl font-bold uppercase tracking-tight ${isDark ? "text-white" : "text-neutral-900"}`}>
                            Submit Specification Inquiry
                          </h3>
                          <p className={`text-xs leading-relaxed max-w-md mt-2 ${isDark ? "text-neutral-400" : "text-gray-500"}`}>
                            Select your preferred AC system types and submit your requirements. We will coordinate a direct project scope call shortly.
                          </p>
                        </div>
                      </div>

                      <InquiryForm isDark={isDark} />
                    </div>

                    {/* DOUBLE COMPARTMENT GOOGLE MAPS &Blueprints LOCATOR */}
                    <div className={`border-t pt-12 ${isDark ? "border-neutral-900" : "border-gray-150"}`}>
                      <div className="flex flex-col gap-6 mb-10">
                        <span className="text-[10px] font-mono text-neutral-500 uppercase block tracking-wider leading-none font-bold">
                          ◇ SATELLITE & GRID TARGETING
                        </span>
                        <h3 className={`text-2xl font-bold uppercase tracking-tight ${isDark ? "text-white" : "text-neutral-900"}`}>
                          Operational Coordinates & Physical Office Embed
                        </h3>
                      </div>

                      <MapMock isDark={isDark} />
                    </div>

                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </main>

          {/* ========================================================= */}
          {/* 4. FOOTER COMPARTMENT                                      */}
          {/* ========================================================= */}
          <footer
            className={`border-t pt-16 pb-24 text-[11px] font-mono text-neutral-500 transition-colors duration-500 ${isDark ? "bg-[#080808] border-neutral-900" : "bg-[#f3f0ec] border-black/10"
              }`}
          >
            <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8">

              {/* Logo signature and legal disclaimer */}
              <div className="md:col-span-4 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  {/* Sleek IAG Stamp */}
                  <div className="font-mono text-xs font-bold bg-blue-600 text-white px-2 py-1 tracking-wider leading-none select-none">
                    IAG
                  </div>
                  <span className={`font-sans tracking-[0.25em] font-bold text-xs uppercase ${isDark ? "text-white" : "text-[#0a0a0a]"}`}>
                    INTEL AIR GROUP
                  </span>
                </div>

                <p className="leading-relaxed max-w-xs text-[10px] text-neutral-400">
                  &copy; {new Date().getFullYear()} Intel Air Group Operations LLC. All rights engineered. Designed with luxury material grid parameters matching standard specifications.
                </p>

                <div className="flex flex-col gap-2.5 mt-3">
                  <a
                    href="https://www.instagram.com/intelairgroup?igsh=MWRlanYzcTI0MDZwdw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 w-fit text-xs uppercase tracking-wider font-bold transition-colors duration-300 ${isDark ? "text-neutral-400 hover:text-pink-400" : "text-neutral-600 hover:text-pink-600"
                      }`}
                  >
                    <Instagram className="w-[18px] h-[18px]" />
                    <span>Instagram</span>
                  </a>

                  <a
                    href="https://www.facebook.com/intelairgroup/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 w-fit text-xs uppercase tracking-wider font-bold transition-colors duration-300 ${isDark ? "text-neutral-400 hover:text-blue-500" : "text-neutral-600 hover:text-blue-600"
                      }`}
                  >
                    <Facebook className="w-[18px] h-[18px]" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>

              {/* Contact Inquiries */}
              <div className="md:col-span-4 flex flex-col gap-4">
                <span className={`text-[10px] uppercase font-bold tracking-[0.15em] ${isDark ? "text-neutral-400" : "text-neutral-700"}`}>
                  ◇ CONTACT INQUIRIES
                </span>
                <div className="flex flex-col gap-3.5">
                  <div className="flex flex-col">
                    <span className="text-[9px] text-neutral-500 uppercase leading-none mb-1 font-bold">Phone</span>
                    <a href="tel:+917405399550" className={`text-xs font-bold hover:text-blue-600 transition-colors uppercase ${isDark ? "text-neutral-200" : "text-neutral-800"}`}>
                      +91 74053 99550
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] text-neutral-500 uppercase leading-none mb-1 font-bold">Landlines</span>
                    <span className={`text-xs font-bold ${isDark ? "text-neutral-350" : "text-neutral-750"}`}>
                      079 40359594 / 40059594
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] text-neutral-500 uppercase leading-none mb-1 font-bold">Email</span>
                    <a href="mailto:sales@intelairgroup.com" className={`text-xs font-bold hover:text-blue-600 transition-colors underline uppercase ${isDark ? "text-neutral-200" : "text-neutral-800"}`}>
                      sales@intelairgroup.com
                    </a>
                    <a href="mailto:projects@intelairgroup.com" className={`text-xs font-bold hover:text-blue-600 transition-colors underline uppercase mt-1 ${isDark ? "text-neutral-200" : "text-neutral-800"}`}>
                      projects@intelairgroup.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Headquarters */}
              <div className="md:col-span-4 flex flex-col gap-4">
                <span className={`text-[10px] uppercase font-bold tracking-[0.15em] ${isDark ? "text-neutral-400" : "text-neutral-700"}`}>
                  ◇ HEADQUARTERS
                </span>
                <div className="flex flex-col gap-3.5">
                  <div className="flex flex-col">
                    <span className="text-[9px] text-neutral-500 uppercase leading-none mb-1.5 font-bold">Address</span>
                    <address className={`text-xs font-sans not-italic font-bold leading-relaxed ${isDark ? "text-neutral-200" : "text-neutral-800"}`}>
                      A-217 to 220, Popular Plaza, near Someshwara Jain Derasar,<br />
                      Shyamal Cross Road, Satellite, Ahmedabad 380 015,<br />
                      Gujarat, India
                    </address>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] text-neutral-500 uppercase leading-none mb-1 font-bold">Layout</span>
                    <span className={`text-[10px] font-bold ${isDark ? "text-neutral-400" : "text-neutral-600"}`}>
                      Estimates & Drafting Office Layout
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </footer>

          {/* Floating Energy Calculator Toggle Button */}
          <button
            onClick={() => setIsCalculatorOpen(true)}
            className={`fixed right-0 top-1/2 -translate-y-1/2 z-40 py-4 px-2.5 rounded-l-xl shadow-2xl flex flex-col items-center gap-2 transition-all duration-300 font-mono text-[9px] tracking-widest font-bold cursor-pointer group hover:pl-3.5 ${isDark
                ? "bg-white hover:bg-neutral-100 text-black border border-r-0 border-white/20"
                : "bg-black hover:bg-neutral-900 text-white border border-r-0 border-neutral-800/80"
              }`}
            title="Open AC Energy Cost Calculator"
          >
            <Calculator className={`w-4 h-4 group-hover:scale-110 transition-transform ${isDark ? "text-black" : "text-white"}`} />
            <span className={`writing-mode-vertical uppercase [writing-mode:vertical-lr] rotate-180 font-mono ${isDark ? "text-black" : "text-white"}`}>
              ENERGY CALCULATOR
            </span>
          </button>

          {/* Centered Modal Overlay & Calculator Modal */}
          <AnimatePresence>
            {isCalculatorOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
                {/* Backdrop Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsCalculatorOpen(false)}
                  className="fixed inset-0 bg-black/60 backdrop-blur-xs cursor-pointer"
                />

                {/* Centered Modal Content Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative w-full max-w-lg max-h-[90vh] flex flex-col border shadow-2xl overflow-hidden rounded-none z-10 ${isDark ? "bg-[#0d0d0d] text-white border-neutral-800" : "bg-white text-neutral-900 border-black/10"
                    }`}
                >
                  {/* Modal Header */}
                  <div className="flex items-center justify-between p-6 border-b border-neutral-500/10 shrink-0">
                    <div className="flex items-center gap-2">
                      <Calculator className="w-4 h-4 text-blue-600 animate-pulse" />
                      <span className={`text-[11px] font-mono tracking-widest uppercase font-bold ${isDark ? "text-neutral-300" : "text-neutral-700"}`}>
                        ◇ AC POWER ESTIMATOR
                      </span>
                    </div>
                    <button
                      onClick={() => setIsCalculatorOpen(false)}
                      className={`p-1.5 rounded-none hover:bg-neutral-800/10 dark:hover:bg-neutral-100/10 transition-colors cursor-pointer ${isDark ? "text-neutral-400 hover:text-white" : "text-neutral-500 hover:text-black"
                        }`}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Scrollable Modal Content */}
                  <div className="calculator-modal-scroll-container flex-grow overflow-y-auto overscroll-contain p-6 md:p-8">
                    <EnergyCalculator isDark={isDark} />
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          {/* Project Details Modal */}
          <AnimatePresence>
            {selectedProject && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
                {/* Backdrop Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.55, ease: "easeInOut" }}
                  onClick={() => setSelectedProject(null)}
                  className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
                />

                {/* Modal Container */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative w-full border shadow-2xl overflow-hidden rounded-none z-10 flex flex-col md:flex-row ${
                    aspectRatio === "portrait" ? "max-w-3xl" : "max-w-5xl"
                  } ${
                    isDark ? "bg-[#0d0d0d] text-white border-neutral-800" : "bg-white text-neutral-900 border-black/10"
                  }`}
                  style={{ minHeight: "500px" }}
                >
                  {/* Left Column: Image */}
                  <div className={`${
                    aspectRatio === "portrait" ? "md:w-1/2" : "md:w-3/5"
                  } relative min-h-[300px] md:min-h-[500px] ${
                    isDark ? "bg-[#0d0d0d]" : "bg-white"
                  } border-r ${
                    isDark ? "border-neutral-800" : "border-black/5"
                  }`}>
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-black/70 border border-neutral-800 text-white font-mono text-[9px] tracking-widest uppercase px-3 py-1 rounded-none font-bold">
                      {selectedProject.category}
                    </div>
                  </div>

                  {/* Right Column: Details */}
                  <div className={`${
                    aspectRatio === "portrait" ? "md:w-1/2" : "md:w-2/5"
                  } p-8 md:p-10 flex flex-col justify-between relative`}>
                    {/* Close button at top right */}
                    <button
                      onClick={() => setSelectedProject(null)}
                      className={`absolute top-4 right-4 p-2 rounded-none hover:bg-neutral-800/10 dark:hover:bg-white/10 transition-colors cursor-pointer ${
                        isDark ? "text-neutral-400 hover:text-white" : "text-neutral-550 hover:text-black"
                      }`}
                    >
                      <X className="w-5 h-5" />
                    </button>

                    <div className="flex flex-col gap-6">
                      <div>
                        <span className="text-blue-600 font-mono text-[10px] tracking-[0.25em] uppercase font-bold block mb-2">
                          ◆ PROJECT ANALYSIS REPORT
                        </span>
                        <h2 className={`text-2xl sm:text-3xl font-bold uppercase tracking-tight leading-tight ${
                          isDark ? "text-white" : "text-neutral-900"
                        }`}>
                          {selectedProject.title}
                        </h2>
                      </div>

                      {/* Detail fields */}
                      <div className="flex flex-col gap-4 font-mono text-[11px] border-t border-b border-neutral-500/10 py-6">
                        {selectedProject.client && (
                          <div className="flex justify-between">
                            <span className="text-neutral-500 uppercase font-bold">Client:</span>
                            <span className={`font-bold text-right ${isDark ? "text-neutral-250" : "text-neutral-750"}`}>
                              {selectedProject.client.toUpperCase()}
                            </span>
                          </div>
                        )}
                        {selectedProject.location && (
                          <div className="flex justify-between">
                            <span className="text-neutral-500 uppercase font-bold">Location:</span>
                            <span className={`font-bold text-right ${isDark ? "text-neutral-250" : "text-neutral-750"}`}>
                              {selectedProject.location.toUpperCase()}
                            </span>
                          </div>
                        )}
                        {selectedProject.metrics && (
                          <div className="flex justify-between">
                            <span className="text-neutral-500 uppercase font-bold">System Capacity:</span>
                            <span className={`font-bold text-right ${isDark ? "text-blue-400" : "text-blue-600"}`}>
                              {selectedProject.metrics.toUpperCase()}
                            </span>
                          </div>
                        )}
                      </div>

                      {selectedProject.description && (
                        <div>
                          <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block mb-2 font-bold">
                            ENGINEERING SCOPE & DEPLOYMENT:
                          </span>
                          <p className={`text-xs leading-relaxed ${isDark ? "text-neutral-450" : "text-neutral-600"}`}>
                            {selectedProject.description}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="mt-8 pt-6 border-t border-neutral-500/10 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                      <span>STATUS: COMMISSIONED</span>
                      <span>IAG GLOBAL DESIGNS</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </>
      )}
      {/* SVG Filter for selective color inversion (keeping red red, turning black to white) */}
      <svg width="0" height="0" style={{ position: "absolute", width: 0, height: 0 }} aria-hidden="true">
        <filter id="mitsubishi-dark-filter-svg">
          <feColorMatrix type="matrix" values="
             0 -1  0  0  1
            -1  0  0  0  1
            -1  0  0  0  1
             0  0  0  1  0" />
        </filter>
      </svg>
    </div>
  );
}
