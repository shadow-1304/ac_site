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

  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState<{ show: boolean; message: string; type: "success" | "error" }>({
    show: false,
    message: "",
    type: "success"
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || formData.selectedAcTypes.length === 0) return;

    setLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/xeewvedy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          org: formData.org,
          selectedAcTypes: formData.selectedAcTypes.join(", "),
          notes: formData.notes
        })
      });

      if (response.ok) {
        setPopup({
          show: true,
          message: "Thank you for the inquiry!",
          type: "success"
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          org: "",
          selectedAcTypes: [],
          notes: ""
        });

        // Auto-close popup after 2 seconds
        setTimeout(() => {
          setPopup((prev) => ({ ...prev, show: false }));
        }, 2000);
      } else {
        let errorMsg = "Submission failed.";
        try {
          const errData = await response.json();
          console.error("Formspree Error Response:", errData);
          if (errData && errData.errors && errData.errors.length > 0) {
            errorMsg = errData.errors.map((e: any) => {
              const fieldName = e.field ? `${e.field.toUpperCase()}: ` : "";
              return `${fieldName}${e.message}`;
            }).join(", ");
          } else if (errData && errData.error) {
            errorMsg = errData.error;
          }
        } catch (parseError) {
          console.error("Could not parse Formspree error response:", parseError);
        }

        setPopup({
          show: true,
          message: errorMsg,
          type: "error"
        });
        setTimeout(() => {
          setPopup((prev) => ({ ...prev, show: false }));
        }, 4000);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setPopup({
        show: true,
        message: "Network error occurred. Please try again.",
        type: "error"
      });
      setTimeout(() => {
        setPopup((prev) => ({ ...prev, show: false }));
      }, 4000);
    } finally {
      setLoading(false);
    }
  };

  const acOptions = [
    "Split AC",
    "4-Way Cassette AC",
    "One / Two-Way Cassette AC",
    "Concealed Ductable Unit"
  ];

  return (
    <div id="inquiry-form-wrapper" className="w-full">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
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

      {/* Success/Error Popup Overlay */}
      <AnimatePresence>
        {popup.show && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className={`relative z-10 border p-8 rounded-none text-center max-w-sm w-full flex flex-col items-center gap-4 shadow-2xl ${
                isDark 
                  ? "bg-[#0d0d0d] border-neutral-800 text-white" 
                  : "bg-white border-black/10 text-neutral-900"
              }`}
            >
              <div className={`w-12 h-12 rounded-none flex items-center justify-center border-2 ${
                popup.type === "success" ? "border-blue-600 text-blue-600" : "border-red-600 text-red-600"
              }`}>
                {popup.type === "success" ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-6 h-6">
                    <path d="M 4 12 L 9 17 L 20 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <span className="text-xl font-bold font-mono">!</span>
                )}
              </div>
              <div className="flex flex-col gap-1.5">
                <span className={`text-[10px] font-mono tracking-widest uppercase font-bold ${
                  popup.type === "success" ? "text-blue-600" : "text-red-500"
                }`}>
                  {popup.type === "success" ? "TRANSMISSION SUCCESSFUL" : "TRANSMISSION ERROR"}
                </span>
                <h4 className="text-lg font-bold uppercase tracking-tight">
                  {popup.message}
                </h4>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
