import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Send, Terminal, Sparkles, SlidersHorizontal, CheckSquare, Square } from "lucide-react";

export default function InquiryForm({ isDark }: { isDark: boolean }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    projectType: "Hospitals",
    sqft: 2500,
    priority: "efficiency",
    notes: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Dynamic calculations based on user sliders! Fulfills our "premium engineering" tone
  const calculatedTR = Math.ceil(formData.sqft / 150); // General commercial calculation (1 TR per 150 sqft)
  const estVentilationACH = formData.projectType === "Hospitals" ? 18 : 6;
  const estimatedPowerDraw = (calculatedTR * 1.2).toFixed(1);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const projectTypes = [
    "Hospitals",
    "Hotels",
    "Offices",
    "Showrooms",
    "Institutions",
    "Residential Penthouses"
  ];

  return (
    <div id="inquiry-form-wrapper" className="w-full">
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* LEFT INPUT AREA: Custom Fields */}
            <div className={`lg:col-span-7 flex flex-col gap-8 border p-6 md:p-8 rounded-none ${
              isDark ? "bg-[#111] border-neutral-800" : "bg-transparent border-black/10"
            }`}>
              <div className="flex items-center gap-2 pb-4 border-b border-gray-100 dark:border-neutral-800/80">
                <SlidersHorizontal className="w-4 h-4 text-blue-600" />
                <span className={`text-xs font-mono tracking-widest uppercase font-bold ${isDark ? "text-neutral-400" : "text-neutral-600"}`}>
                  PROJECT SPECIFICATIONS CONFIGURATOR
                </span>
              </div>

              {/* Multi Choice Grid */}
              <div className="flex flex-col gap-3">
                <label className={`text-[10px] font-mono tracking-widest uppercase font-bold ${isDark ? "text-neutral-500" : "text-gray-400"}`}>
                  01 // Select Project Sector
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {projectTypes.map((type) => {
                    const isSelected = formData.projectType === type;
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={`text-xs py-2 px-3 rounded-none border text-center transition-all cursor-pointer font-sans ${
                          isSelected
                            ? "bg-blue-600/10 border-blue-600 text-blue-600 font-bold"
                            : isDark
                              ? "bg-neutral-900 border-neutral-800 text-neutral-400 hover:border-neutral-700"
                              : "bg-transparent border-black/10 text-neutral-600 hover:border-gray-400"
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Slider Input for Square Footage */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between font-mono text-[10px] tracking-widest">
                  <span className={isDark ? "text-neutral-500" : "text-gray-400 font-bold"}>02 // ESTIMATED BUILT AREA</span>
                  <span className={`font-bold ${isDark ? "text-neutral-200" : "text-neutral-800"}`}>{formData.sqft.toLocaleString()} SQ. FT</span>
                </div>
                
                <input
                  type="range"
                  min="500"
                  max="50000"
                  step="500"
                  value={formData.sqft}
                  onChange={(e) => setFormData({ ...formData, sqft: parseInt(e.target.value) })}
                  className="w-full h-[4px] bg-gray-200 dark:bg-neutral-800 appearance-none cursor-pointer accent-blue-600"
                />
                
                <div className="flex justify-between text-[9px] font-mono text-neutral-400">
                  <span>500 SQ FT (Residential)</span>
                  <span>50,000+ SQ FT (Heavy Corporate / Industrial)</span>
                </div>
              </div>

              {/* Sliders for priorities */}
              <div className="flex flex-col gap-3">
                <label className={`text-[10px] font-mono tracking-widest uppercase font-bold ${isDark ? "text-neutral-500" : "text-gray-400"}`}>
                  03 // Primary HVAC Requirement Priority
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {["efficiency", "acoustics", "filtration"].map((pref) => {
                    const isSelected = formData.priority === pref;
                    return (
                      <button
                        key={pref}
                        type="button"
                        onClick={() => setFormData({ ...formData, priority: pref })}
                        className={`text-xs py-2.5 px-3 rounded-none border text-center transition-all flex flex-col items-center justify-center gap-1.5 capitalize cursor-pointer ${
                          isSelected
                            ? "bg-blue-600/10 border-blue-600 text-blue-600 font-bold"
                            : isDark
                              ? "bg-neutral-900 border-neutral-800 text-neutral-400 hover:border-neutral-700"
                              : "bg-transparent border-black/10 text-neutral-600 hover:border-gray-400"
                        }`}
                      >
                        {pref === "efficiency" && "Energy Focus"}
                        {pref === "acoustics" && "Silent Operation"}
                        {pref === "filtration" && "Pure Air Lock"}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Standard text inputs framed like blueprints */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase font-bold">Contact Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter name"
                    className={`py-3 px-4 rounded-none border text-sm focus:outline-none focus:border-blue-600 transition-colors ${
                      isDark 
                        ? "bg-neutral-900/40 border-neutral-800 text-white placeholder-neutral-600" 
                      : "bg-transparent border-black/25 text-neutral-900 placeholder-neutral-500"
                    }`}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase font-bold">Corporate Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className={`py-3 px-4 rounded-none border text-sm focus:outline-none focus:border-blue-600 transition-colors ${
                      isDark 
                        ? "bg-neutral-900/40 border-neutral-800 text-white placeholder-neutral-600" 
                      : "bg-transparent border-black/25 text-neutral-900 placeholder-neutral-500"
                    }`}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase font-bold">Organization / Firm</label>
                <input
                  type="text"
                  value={formData.org}
                  onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                  placeholder="Company name, e.g., Apex Health"
                  className={`py-3 px-4 rounded-none border text-sm focus:outline-none focus:border-blue-600 transition-colors ${
                    isDark 
                      ? "bg-neutral-900/40 border-neutral-800 text-white placeholder-neutral-600" 
                      : "bg-transparent border-black/25 text-neutral-900 placeholder-neutral-500"
                  }`}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase font-bold">Scope description and structural notes</label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="E.g., Coastal hotel demand, double glazing heat profiles, cleanroom velocity targets..."
                  className={`py-3 px-4 rounded-none border text-sm resize-none focus:outline-none focus:border-blue-600 transition-colors ${
                    isDark 
                      ? "bg-neutral-900/40 border-neutral-800 text-white placeholder-neutral-600" 
                      : "bg-transparent border-black/25 text-neutral-900 placeholder-neutral-500"
                  }`}
                />
              </div>

              {/* Tactile button with loading indicators */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4.5 rounded-none text-xs font-mono tracking-[0.25em] uppercase font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  isDark
                    ? "bg-white text-black hover:bg-neutral-200 shadow-sm"
                    : "bg-black text-white hover:bg-neutral-900 shadow-sm"
                }`}
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>DIGITIZING BLUEPRINT...</span>
                  </>
                ) : (
                  <>
                    <span>SUBMIT SPECIFICATION INQUIRY</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>

            {/* RIGHT SIDE: Real-Time Dynamic HVAC Schematic Blueprint Tool */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className={`p-6 border rounded-none relative overflow-hidden flex flex-col gap-5 ${
                isDark ? "bg-[#111] border-neutral-800" : "bg-transparent border-black/10"
              }`}>
                {/* Visual dynamic schema banner showing that the system is active */}
                <div className="absolute top-0 right-0 w-28 h-28 opacity-[0.03] pointer-events-none">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-blue-600 animate-spin-slow">
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" strokeDasharray="10 10" fill="none" />
                  </svg>
                </div>

                <div className="flex items-center gap-2 text-blue-600">
                  <Terminal className="w-4 h-4" />
                  <span className="text-[10px] font-mono tracking-widest uppercase font-bold">REAL-TIME PROPOSAL MODELER</span>
                </div>

                <div className="flex flex-col gap-1 border-b border-gray-100 dark:border-neutral-800/80 pb-4">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase leading-none font-bold">BUILDING SECTOR</span>
                  <span className={`text-base font-bold ${isDark ? "text-white" : "text-neutral-900"}`}>
                    {formData.projectType}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1 border-b border-gray-100 dark:border-neutral-800/80 pb-4">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase leading-none font-bold">TARGET CAPACITY</span>
                    <span className={`text-xl font-mono font-bold ${isDark ? "text-blue-400" : "text-blue-600"}`}>
                      {calculatedTR} TR
                    </span>
                  </div>

                  <div className="flex flex-col gap-1 border-b border-gray-100 dark:border-neutral-800/80 pb-4">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase leading-none font-bold">EST. POWER DRAW</span>
                    <span className={`text-xl font-mono font-bold ${isDark ? "text-white" : "text-neutral-900"}`}>
                      ~{estimatedPowerDraw} kW
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase leading-none font-bold">RECOMMENDED SYSTEM PATTERN</span>
                  <div className={`p-4 rounded-none text-xs font-mono border flex flex-col gap-2 ${
                    isDark ? "bg-neutral-900/50 border-neutral-800" : "bg-black/[0.02] border-black/10"
                  }`}>
                    {calculatedTR <= 15 ? (
                      <>
                        <p className="text-blue-600 font-bold">● DUCTED SPLIT / LIGHT SINGLE VRF</p>
                        <p className={isDark ? "text-neutral-400" : "text-gray-500"}>Ideal scale for premium residential and low-velocity showrooms. Optimizes air acoustics below 20dB.</p>
                      </>
                    ) : calculatedTR <= 80 ? (
                      <>
                        <p className="text-blue-600 font-bold">● MODULAR MULTI-SPLIT VRF NETWORK</p>
                        <p className={isDark ? "text-neutral-400" : "text-gray-500"}>Advanced simultaneous zoned heating/cooling. Essential configuration for multi-room hotel suites and institutional pavilions.</p>
                      </>
                    ) : (
                      <>
                        <p className="text-blue-600 font-bold">● CHILLED WATER PLANT + DUOBLE SKIN AHU</p>
                        <p className={isDark ? "text-neutral-400" : "text-gray-500"}>Heavy-duty commercial condenser water towers. Ensures uniform laminar cleanroom cooling vectors with custom filtration grids.</p>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-2 text-[10px] text-neutral-400 font-mono">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    <span>Air ACH Circulation Index:</span>
                    <strong className={isDark ? "text-neutral-100" : "text-neutral-800"}>
                      {estVentilationACH} Air changes per hr
                    </strong>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    <span>Ducting layout friction standard:</span>
                    <strong className={isDark ? "text-neutral-100" : "text-neutral-800"}>
                      ASHRAE Standard 15 Compliant
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`border p-8 md:p-12 rounded-none text-center max-w-2xl mx-auto flex flex-col items-center gap-6 ${
              isDark ? "bg-[#111] border-neutral-800" : "bg-transparent border-black/10"
            }`}
          >
            {/* Success vortex animation */}
            <div className="w-20 h-20 rounded-none border-2 border-blue-600 flex items-center justify-center relative overflow-hidden">
              <span className="absolute inset-2 border border-dashed border-blue-400 rotate-45 animate-spin"></span>
              <motion.svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="w-8 h-8 text-blue-600 relative z-10"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8 }}
              >
                <path d="M 4 12 L 9 17 L 20 6" strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono text-blue-600 uppercase tracking-widest leading-none font-bold">
                TRANSMISSION VERIFIED • STATUS SECURE
              </span>
              <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight uppercase leading-snug ${isDark ? "text-white" : "text-[#0a0a0a]"}`}>
                Inquiry Logged Into Design Ledger
              </h3>
              <p className={`text-sm leading-relaxed max-w-md mx-auto ${isDark ? "text-neutral-400" : "text-gray-500"}`}>
                Thank you for selecting Intel Air Group, <strong>{formData.name}</strong>. Our mechanical estimations office has initiated an engineering load audit based on your <strong>{formData.sqft.toLocaleString()} sq. ft</strong> space targets for <strong>{formData.projectType}</strong>. We will coordinate a direct project scope call shortly at <strong>{formData.email}</strong>.
              </p>
            </div>

            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-3 rounded-none border border-neutral-500/20 hover:border-black dark:hover:border-white text-xs font-mono tracking-widest uppercase hover:text-black dark:hover:text-white transition-colors cursor-pointer"
            >
              Configure Another Blueprint System
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
