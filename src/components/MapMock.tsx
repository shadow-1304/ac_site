import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Info, HardDrive, Wind, Thermometer, ShieldCheck } from "lucide-react";

interface MapNode {
  id: string;
  name: string;
  x: number; // percentage from left
  y: number; // percentage from top
  type: string;
  capacity: string;
  system: string;
  coordinates: string;
}

export default function MapMock({ isDark }: { isDark: boolean }) {
  const [activeNode, setActiveNode] = useState<string | null>("node-2"); // Default to Mumbai Surgical Center

  const mapNodes: MapNode[] = [
    {
      id: "node-1",
      name: "The Skyline Penthouses",
      x: 35,
      y: 20,
      type: "Residential Core",
      capacity: "16x Mini-VRV Layouts",
      system: "Concealed 19dB(A) Whisper Ducts",
      coordinates: "28.6139° N, 77.2090° E"
    },
    {
      id: "node-2",
      name: "Apex Surgical Center",
      x: 25,
      y: 48,
      type: "Hospital Grade",
      capacity: "ISO 5 Cleanroom Ventilation",
      system: "Laminar Flow Filter & Pressure Lock",
      coordinates: "19.0760° N, 72.8777° E"
    },
    {
      id: "node-3",
      name: "Meridian Grand Resort",
      x: 23,
      y: 65,
      type: "Hotel & Leisure",
      capacity: "240 TR Oceanic-Coat VRF",
      system: "Hot Gas Recovery Desuperheater",
      coordinates: "15.2993° N, 74.1240° E"
    },
    {
      id: "node-4",
      name: "Nebula Corporate Park",
      x: 48,
      y: 72,
      type: "Commercial Enterprise",
      capacity: "1,200 TR Centrifugal Chiller Plant",
      system: "VFD Condenser & Modbus Smart BMS",
      coordinates: "12.9716° N, 77.5946° E"
    },
    {
      id: "node-5",
      name: "Aura Premium Concept Showroom",
      x: 31,
      y: 53,
      type: "Auto Showroom",
      capacity: "Round-Cassette Air Arrays",
      system: "High-Volume Thermal Curtain Jets",
      coordinates: "18.5204° N, 73.8567° E"
    }
  ];

  return (
    <div id="maps-integration-container" className="flex flex-col gap-8 w-full">
      {/* Selector tab: Interactive Blueprint vs Standard Embed */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* LEFT COLUMN: Clean Interactive Blueprint Locator */}
        <div className={`lg:col-span-8 border p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between min-h-[400px] md:min-h-[500px] ${
          isDark ? "bg-[#111] border-neutral-800" : "bg-transparent border-black/10"
        }`}>
          {/* Blueprint background grid */}
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{
            backgroundImage: `linear-gradient(${isDark ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#fff' : '#000'} 1px, transparent 1px)`,
            backgroundSize: "20px 20px"
          }} />

          {/* Map Header details */}
          <div className="relative z-10 flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-blue-500 uppercase">
                <span className="animate-pulse">●</span> ACTIVE COORDINATE TELEMETRY
              </div>
              <h3 className={`text-lg font-light tracking-wide uppercase mt-1 ${isDark ? "text-white" : "text-neutral-900"}`}>
                Interactive HVAC Blueprint Grid
              </h3>
            </div>
            
            <span className="hidden sm:inline text-[9px] font-mono tracking-widest text-neutral-400">
              MAPPING 7000+ COMPLETED NODES
            </span>
          </div>

          {/* Visual Vector Map representation */}
          <div className="relative flex-grow flex items-center justify-center py-6">
            <div className="relative w-full max-w-[500px] h-[280px] bg-neutral-500/5 rounded-2xl border border-dashed border-neutral-500/10 overflow-hidden flex items-center justify-center">
              {/* Graphic representation of India outline (luxury minimalist abstract dots and nodes) */}
              <svg viewBox="0 0 100 100" className={`w-3/4 h-3/4 opacity-25 ${isDark ? "text-white" : "text-black"}`} fill="currentColor">
                {/* Abstract geometric constellation map of India */}
                <path d="M 35 15 L 42 12 L 48 18 L 47 25 L 39 30 L 32 35 L 29 45 L 23 55 L 21 68 L 24 74 L 28 85 L 33 88 L 38 88 L 42 81 L 49 71 L 44 60 L 38 52 Z" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                <circle cx="35" cy="15" r="1" />
                <circle cx="42" cy="12" r="1" />
                <circle cx="48" cy="18" r="1" />
                <circle cx="32" cy="35" r="1" />
                <circle cx="23" cy="55" r="1" />
                <circle cx="28" cy="85" r="1" />
                <circle cx="49" cy="71" r="1" />
              </svg>

              {/* Laser flow lines representing cooling channels mapping */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <motion.path 
                  d="M 35 20 Q 30 35, 25 48 T 23 65 T 48 72 Z" 
                  fill="none" 
                  stroke="#3b82f6" 
                  strokeWidth="0.3" 
                  initial={{ strokeDasharray: "10 100" }}
                  animate={{ strokeDashoffset: -200 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
              </svg>

              {/* Node Hotspots */}
              {mapNodes.map((node) => {
                const isActive = activeNode === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setActiveNode(node.id)}
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group pointer-events-auto"
                  >
                    <span className="relative flex h-5 w-5 items-center justify-center">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 transition-colors ${
                        isActive ? "bg-blue-400" : "bg-neutral-400/50 group-hover:bg-blue-400/30"
                      }`}></span>
                      <span className={`relative inline-flex rounded-full h-2.5 w-2.5 shadow-sm transition-all duration-300 ${
                        isActive ? "scale-125 bg-blue-500" : "bg-neutral-500 group-hover:bg-blue-400"
                      }`}></span>
                    </span>
                    <span className={`absolute top-6 left-1/2 -translate-x-1/2 font-mono text-[8px] bg-[#090909] text-white px-1 py-0.5 rounded border border-neutral-800 transition-opacity whitespace-nowrap ${
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}>
                      {node.name.split(" ")[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active node coordinates stamp */}
          <div className="relative z-10 flex items-center justify-between border-t border-neutral-500/10 pt-4 mt-4 text-[10px] font-mono text-neutral-500">
            <span>GRID LINK: SYNC_OK</span>
            <div className="flex items-center gap-1.5">
              <span>ACTIVE LOCATOR:</span>
              <span className={isDark ? "text-neutral-300 animate-pulse" : "text-neutral-800 animate-pulse"}>
                {mapNodes.find(n => n.id === activeNode)?.coordinates || "NULL"}
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Details display of the Selected Grid Node */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {activeNode ? (
              <motion.div
                key={activeNode}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`border p-6 rounded-3xl flex-grow flex flex-col justify-between ${
                  isDark ? "bg-[#111] border-neutral-800" : "bg-transparent border-black/10"
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 p-1.5 rounded-full bg-blue-500/15 border border-blue-500/20 text-blue-500 w-fit mb-6 text-[10px] font-mono tracking-widest uppercase">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>VERIFIED PROJECT SITE</span>
                  </div>

                  {/* Title and details */}
                  <span className="text-[10px] font-mono text-neutral-500 uppercase block tracking-wider mb-1">
                    {mapNodes.find(n => n.id === activeNode)?.type}
                  </span>
                  <h4 className={`text-xl font-light tracking-wide mb-6 ${isDark ? "text-white" : "text-neutral-900"}`}>
                    {mapNodes.find(n => n.id === activeNode)?.name}
                  </h4>

                  {/* Micro HVAC telemetry cards */}
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-xl ${isDark ? "bg-neutral-900" : "bg-neutral-200/50"}`}>
                        <HardDrive className="w-4 h-4 text-blue-500" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9px] font-mono text-neutral-400 uppercase leading-none mb-1">
                          Calculated Capacity
                        </span>
                        <span className={`text-sm font-medium ${isDark ? "text-neutral-200" : "text-neutral-800"}`}>
                          {mapNodes.find(n => n.id === activeNode)?.capacity}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-xl ${isDark ? "bg-neutral-900" : "bg-neutral-200/50"}`}>
                        <Wind className="w-4 h-4 text-blue-500" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9px] font-mono text-neutral-400 uppercase leading-none mb-1">
                          System Layout
                        </span>
                        <span className={`text-sm font-medium ${isDark ? "text-neutral-200" : "text-neutral-800"}`}>
                          {mapNodes.find(n => n.id === activeNode)?.system}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-xl ${isDark ? "bg-neutral-900" : "bg-neutral-200/50"}`}>
                        <Thermometer className="w-4 h-4 text-blue-500" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9px] font-mono text-neutral-400 uppercase leading-none mb-1">
                          Zoned Coordinates
                        </span>
                        <span className={`text-xs font-mono ${isDark ? "text-neutral-300" : "text-neutral-700"}`}>
                          {mapNodes.find(n => n.id === activeNode)?.coordinates}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`mt-8 pt-4 border-t text-[10px] font-mono text-neutral-500 flex items-center gap-2 ${
                  isDark ? "border-neutral-900" : "border-neutral-200"
                }`}>
                  <Info className="w-3.5 h-3.5" />
                  <span>Click coordinates on map grid to inspect standard setups.</span>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>

      {/* RETAINED MAP EMBED: Stylishly blending into monochrome Fluid Glass parameters */}
      <div className={`border p-4 rounded-3xl overflow-hidden shadow-sm relative ${
        isDark ? "bg-[#111] border-neutral-800" : "bg-transparent border-black/10"
      }`}>
        <div className="flex items-center justify-between mb-3 px-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-blue-500 animate-bounce" />
            <span className={`text-xs font-mono tracking-widest uppercase ${isDark ? "text-neutral-400" : "text-neutral-600"}`}>
              CORPORATE HQ • GOOGLE MAPS EMBED
            </span>
          </div>
          <span className="text-[9px] font-mono text-neutral-400">
            A-217 TO 220, POPULAR PLAZA, SATELLITE, AHMEDABAD
          </span>
        </div>

        {/* High-quality embedded interactive Google map, styled with custom monochrome filters */}
        <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-neutral-500/10 grayscale contrast-[1.1] invert-[0] dark:invert-[0.9] dark:contrast-[1.2]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9348259648216!2d72.52981577520023!3d23.018788479177114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84d41e755259%3A0xe103ee22709ad5fa!2sPopular%20Plaza!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Intel Air Group Headquarters Location Map"
          />
        </div>
      </div>
    </div>
  );
}
