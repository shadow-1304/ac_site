import { ScrollRevealText } from "./ScrollReveal";

interface SectionHeaderProps {
  number: string;
  tag: string;
  title: string;
  description?: string;
  isDark: boolean;
  className?: string;
}

export default function SectionHeader({ number, tag, title, description, isDark, className = "" }: SectionHeaderProps) {
  return (
    <div className={`relative w-full pt-12 pb-16 md:pt-16 md:pb-24 border-t ${
      isDark ? "border-neutral-900" : "border-gray-100"
    } ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left indicators (Standard fluid alignment) */}
        <div className="lg:col-span-4 flex items-center justify-between lg:flex-col lg:items-start gap-4">
          <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.4em] uppercase font-bold">
            <span className="text-blue-600">◆</span>
            <span className={isDark ? "text-neutral-400" : "text-blue-600"}>
              {number} // {tag}
            </span>
          </div>
          
          <span className={`text-[10px] font-mono tracking-widest ${
            isDark ? "text-neutral-600" : "text-gray-400 font-medium"
          }`}>
            INTEL AIR GROUP • TECH SPECS
          </span>
        </div>

        {/* Right statement headers with fluid text reveals */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-sans font-bold tracking-tight leading-[0.95] uppercase ${
            isDark ? "text-white" : "text-[#0a0a0a]"
          }`}>
            <ScrollRevealText text={title} />
          </h2>

          {description && (
            <p className={`max-w-xl text-sm sm:text-base leading-relaxed tracking-wide ${
              isDark ? "text-neutral-400" : "text-gray-500"
            }`}>
              <ScrollRevealText text={description} delay={0.15} />
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

