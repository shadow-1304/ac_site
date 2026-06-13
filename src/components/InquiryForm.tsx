import { useState, FormEvent, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, SlidersHorizontal, CheckSquare, Square } from "lucide-react";

interface InquiryFormProps {
  isDark: boolean;
  initialNotes?: string;
  initialAcTypes?: string[];
}

export default function InquiryForm({ isDark, initialNotes = "", initialAcTypes = [] }: InquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    org: "",
    selectedAcTypes: [] as string[],
    notes: ""
  });

  useEffect(() => {
    if (initialNotes) {
      setFormData((prev) => ({ ...prev, notes: initialNotes }));
    }
  }, [initialNotes]);

  useEffect(() => {
    if (initialAcTypes && initialAcTypes.length > 0) {
      setFormData((prev) => ({ ...prev, selectedAcTypes: initialAcTypes }));
    }
  }, [initialAcTypes]);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || formData.selectedAcTypes.length === 0) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const acOptions = [
    "Split AC",
    "4-Way Cassette AC",
    "One / Two-Way Cassette AC",
    "Concealed Ductable Unit"
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
            className="max-w-2xl mx-auto w-full"
          >
            {/* INPUT AREA: Custom Fields */}
            <div className={`flex flex-col gap-8 border p-6 md:p-8 rounded-none ${
              isDark ? "bg-[#111] border-neutral-800" : "bg-transparent border-black/10"
            }`}>
              <div className="flex items-center gap-2 pb-4 border-b border-gray-100 dark:border-neutral-800/80">
                <SlidersHorizontal className="w-4 h-4 text-blue-600" />
                <span className={`text-xs font-mono tracking-widest uppercase font-bold ${isDark ? "text-neutral-400" : "text-neutral-600"}`}>
                  SYSTEM SELECTION & INQUIRY
                </span>
              </div>

              {/* Multi Choice Grid */}
              <div className="flex flex-col gap-3">
                <label className={`text-[10px] font-mono tracking-widest uppercase font-bold ${isDark ? "text-neutral-500" : "text-gray-400"}`}>
                  01 // Select AC System Types
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {acOptions.map((type) => {
                    const isSelected = formData.selectedAcTypes.includes(type);
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => {
                          const updated = isSelected
                            ? formData.selectedAcTypes.filter((t) => t !== type)
                            : [...formData.selectedAcTypes, type];
                          setFormData({ ...formData, selectedAcTypes: updated });
                        }}
                        className={`text-xs py-3 px-4 rounded-none border text-left transition-all cursor-pointer font-sans flex items-center gap-3 ${
                          isSelected
                            ? "bg-blue-600/10 border-blue-600 text-blue-600 font-bold"
                            : isDark
                              ? "bg-neutral-900 border-neutral-800 text-neutral-400 hover:border-neutral-700"
                              : "bg-transparent border-black/10 text-neutral-600 hover:border-gray-400"
                        }`}
                      >
                        {isSelected ? (
                          <CheckSquare className="w-4 h-4 text-blue-600 shrink-0" />
                        ) : (
                          <Square className={`w-4 h-4 shrink-0 ${isDark ? "text-neutral-600" : "text-neutral-400"}`} />
                        )}
                        <span>{type}</span>
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

                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase font-bold">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter mobile number"
                    className={`py-3 px-4 rounded-none border text-sm focus:outline-none focus:border-blue-600 transition-colors ${
                      isDark 
                        ? "bg-neutral-900/40 border-neutral-800 text-white placeholder-neutral-600" 
                        : "bg-transparent border-black/25 text-neutral-900 placeholder-neutral-500"
                    }`}
                  />
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
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] font-mono tracking-widest text-neutral-500 uppercase font-bold">Scope description and structural notes</label>
                <textarea
                  rows={4}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="E.g., Special temperature control targets, cleanroom velocity targets, preferred installation timelines..."
                  className={`py-3 px-4 rounded-none border text-sm resize-none focus:outline-none focus:border-blue-600 transition-colors ${
                    isDark 
                      ? "bg-neutral-900/40 border-neutral-800 text-white placeholder-neutral-600" 
                      : "bg-transparent border-black/25 text-neutral-900 placeholder-neutral-500"
                  }`}
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading || formData.selectedAcTypes.length === 0}
                className={`w-full py-4.5 rounded-none text-xs font-mono tracking-[0.25em] uppercase font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  isDark
                    ? "bg-white text-black hover:bg-neutral-200 disabled:bg-neutral-800 disabled:text-neutral-500 disabled:cursor-not-allowed shadow-sm"
                    : "bg-black text-white hover:bg-neutral-900 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed shadow-sm"
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
                Thank you for selecting Intel Air Group, <strong>{formData.name}</strong>. Our mechanical estimations office has received your inquiry for: <strong>{formData.selectedAcTypes.join(", ")}</strong>. We will coordinate a direct project scope call shortly at <strong>{formData.email}</strong> or <strong>{formData.phone}</strong>.
              </p>
            </div>

            <button
              onClick={() => {
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  org: "",
                  selectedAcTypes: [],
                  notes: ""
                });
                setSubmitted(false);
              }}
              className="px-6 py-3 rounded-none border border-neutral-500/20 hover:border-black dark:hover:border-white text-xs font-mono tracking-widest uppercase hover:text-black dark:hover:text-white transition-colors cursor-pointer"
            >
              Submit Another Inquiry
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
