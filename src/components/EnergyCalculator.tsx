import { useState, useEffect } from "react";
import { Bolt, Info, Leaf } from "lucide-react";

interface EnergyCalculatorProps {
  isDark: boolean;
}

const EER_MAP: Record<number, number> = { 1: 2.50, 2: 2.70, 3: 2.90, 4: 3.10, 5: 3.30 };
const COOLING_KW = 3.517;

interface TypeInfo {
  factor: number;
  label: string;
  opts: number[];
  title: string;
  subtitle: string;
}

const TYPE_CONFIG: Record<string, TypeInfo> = {
  inv_split: {
    factor: 0.65,
    label: "ISEER (inverter split)",
    opts: [0.75, 1.0, 1.5, 2.0],
    title: "Inverter split",
    subtitle: "Up to 2 TR · variable speed · most efficient"
  },
  fixed_split: {
    factor: 1.00,
    label: "EER (fixed speed split)",
    opts: [0.75, 1.0, 1.5, 2.0],
    title: "Fixed speed split",
    subtitle: "Up to 2 TR · on/off compressor · higher consumption"
  },
  inv_cassette: {
    factor: 0.72,
    label: "ISEER (inverter 4-way cassette)",
    opts: [1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0],
    title: "Inverter 4-way cassette",
    subtitle: "Up to 4 TR · ceiling mount · variable speed"
  },
  fixed_cassette: {
    factor: 1.12,
    label: "EER (fixed 4-way cassette)",
    opts: [1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0],
    title: "Fixed speed 4-way cassette",
    subtitle: "Up to 4 TR · ceiling mount · higher consumption"
  }
};

const TYPE_NAMES: Record<string, string> = {
  inv_split: "inverter split",
  fixed_split: "fixed speed split",
  inv_cassette: "inverter 4-way cassette",
  fixed_cassette: "fixed speed 4-way cassette"
};

export default function EnergyCalculator({ isDark }: EnergyCalculatorProps) {
  const [acType, setAcType] = useState<string>("inv_split");
  const [capacity, setCapacity] = useState<number>(1.5);
  const [tariff, setTariff] = useState<number>(9);
  const [hours, setHours] = useState<number>(8);
  const [starRating, setStarRating] = useState<number>(3);

  // If the active AC Type changes, ensure the selected capacity is valid for that type
  useEffect(() => {
    const validOptions = TYPE_CONFIG[acType].opts;
    if (!validOptions.includes(capacity)) {
      setCapacity(validOptions[Math.floor(validOptions.length / 2)]);
    }
  }, [acType]);

  // Helper to calculate annual cost for any star rating (used for savings calculation)
  const getAnnualCostForRating = (tons: number, hrs: number, trf: number, stars: number, type: string) => {
    const eff = EER_MAP[stars] / TYPE_CONFIG[type].factor;
    return (tons * COOLING_KW / eff) * hrs * trf * 365;
  };

  // Calculations
  const effectiveEer = EER_MAP[starRating] / TYPE_CONFIG[acType].factor;
  const inputKw = (capacity * COOLING_KW) / effectiveEer;
  const dailyUnits = inputKw * hours;
  const dailyCost = dailyUnits * tariff;
  const monthlyCost = dailyCost * 30;
  const annualCost = dailyCost * 365;

  const invSplitSaving = Math.round(annualCost - getAnnualCostForRating(capacity, hours, tariff, starRating, "inv_split"));
  const invCassSaving = Math.round(annualCost - getAnnualCostForRating(capacity, hours, tariff, starRating, "inv_cassette"));

  // Dynamic tips based on configuration
  const tips: Record<string, string> = {
    inv_split: `Your ${capacity} TR inverter split AC draws ${inputKw.toFixed(2)} kW at full load. Variable speed compressor technology makes this the most energy-efficient option, adjusting output to match the room's cooling demand.`,
    fixed_split: `Your ${capacity} TR fixed speed split AC draws ${inputKw.toFixed(2)} kW. The compressor runs at full power and cycles on/off to maintain temperature, consuming more electricity than an inverter model. Switching to inverter could save ₹${invSplitSaving.toLocaleString("en-IN")}/year.`,
    inv_cassette: `Your ${capacity} TR inverter 4-way cassette AC draws ${inputKw.toFixed(2)} kW. The inverter compressor keeps efficiency high, while the 4-way airflow fan adds a small overhead compared to a wall-mounted split unit.`,
    fixed_cassette: `Your ${capacity} TR fixed speed 4-way cassette AC draws ${inputKw.toFixed(2)} kW. Fixed speed compressor cycling combined with the 4-way fan motor overhead makes this the highest consuming type. Upgrading to an inverter cassette could save ₹${invCassSaving.toLocaleString("en-IN")}/year.`
  };

  const potentialSaving = starRating < 5 ? Math.round(annualCost - getAnnualCostForRating(capacity, hours, tariff, 5, acType)) : 0;

  return (
    <div className={`border p-6 md:p-8 rounded-none flex flex-col gap-6 relative overflow-hidden ${
      isDark ? "bg-[#111] border-neutral-800" : "bg-transparent border-black/10"
    }`}>
      {/* Title Header */}
      <div className="flex items-center gap-2 pb-4 border-b border-gray-100 dark:border-neutral-800/80">
        <Bolt className="w-4 h-4 text-blue-600 animate-pulse" />
        <span className={`text-xs font-mono tracking-widest uppercase font-bold ${isDark ? "text-neutral-400" : "text-neutral-600"}`}>
          ◇ AC POWER ESTIMATOR
        </span>
      </div>

      {/* Inputs */}
      <div className="flex flex-col gap-5">
        {/* AC Type Selector */}
        <div className="flex flex-col gap-2">
          <label className={`text-[10px] font-mono tracking-widest uppercase font-bold ${isDark ? "text-neutral-500" : "text-gray-400"}`}>
            AC TYPE
          </label>
          <div className="grid grid-cols-2 gap-2">
            {Object.keys(TYPE_CONFIG).map((type) => {
              const isActive = acType === type;
              const config = TYPE_CONFIG[type];
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => setAcType(type)}
                  className={`py-2.5 px-3 rounded-none border text-left transition-all cursor-pointer ${
                    isActive
                      ? "bg-blue-600/10 border-blue-600 text-blue-600 font-bold"
                      : isDark
                        ? "bg-neutral-900 border-neutral-805 dark:border-neutral-800 text-neutral-400 hover:border-neutral-700"
                        : "bg-transparent border-black/10 text-neutral-650 hover:border-gray-400"
                  }`}
                >
                  <div className="text-xs font-bold leading-tight">
                    {config.title}
                  </div>
                  <div className="text-[9px] text-neutral-450 dark:text-neutral-500 leading-tight mt-0.5 font-mono">
                    {config.subtitle}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Capacity Selector */}
        <div className="flex flex-col gap-1.5">
          <label className={`text-[10px] font-mono tracking-widest uppercase font-bold ${isDark ? "text-neutral-500" : "text-gray-400"}`}>
            AC CAPACITY (TR)
          </label>
          <select
            value={capacity}
            onChange={(e) => setCapacity(parseFloat(e.target.value))}
            className={`py-2.5 px-3 rounded-none border text-xs font-mono font-bold focus:outline-none focus:border-blue-600 transition-colors ${
              isDark 
                ? "bg-neutral-900 border-neutral-800 text-white" 
                : "bg-transparent border-black/25 text-neutral-900"
            }`}
          >
            {TYPE_CONFIG[acType]?.opts.map((val) => (
              <option key={val} value={val} className={isDark ? "bg-[#111] text-white" : "bg-white text-black"}>
                {val.toFixed(2)} TR
              </option>
            ))}
          </select>
        </div>

        {/* Tariff Input & Hours Slider Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className={`text-[10px] font-mono tracking-widest uppercase font-bold ${isDark ? "text-neutral-500" : "text-gray-400"}`}>
              TARIFF (₹/UNIT)
            </label>
            <input
              type="number"
              value={tariff}
              onChange={(e) => setTariff(parseFloat(e.target.value) || 0)}
              min="1"
              max="30"
              step="0.5"
              className={`py-2.5 px-3 rounded-none border text-xs font-mono font-bold focus:outline-none focus:border-blue-600 transition-colors ${
                isDark 
                  ? "bg-neutral-900 border-neutral-800 text-white" 
                  : "bg-transparent border-black/25 text-neutral-900"
              }`}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center text-[10px] font-mono tracking-widest uppercase font-bold">
              <span className={isDark ? "text-neutral-500" : "text-gray-400"}>DAILY USAGE</span>
              <span className="text-blue-600 font-bold">{hours} HRS/DAY</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[9px] font-mono text-neutral-450">1h</span>
              <input
                type="range"
                min="1"
                max="24"
                value={hours}
                onChange={(e) => setHours(parseInt(e.target.value))}
                className="flex-grow h-[4px] bg-gray-200 dark:bg-neutral-850 appearance-none cursor-pointer accent-blue-600"
              />
              <span className="text-[9px] font-mono text-neutral-450">24h</span>
            </div>
          </div>
        </div>

        {/* Star Rating Selector */}
        <div className="flex flex-col gap-2">
          <label className={`text-[10px] font-mono tracking-widest uppercase font-bold ${isDark ? "text-neutral-500" : "text-gray-400"}`}>
            BEE STAR RATING
          </label>
          <div className="grid grid-cols-5 gap-1.5">
            {[1, 2, 3, 4, 5].map((stars) => {
              const isActive = starRating === stars;
              return (
                <button
                  key={stars}
                  type="button"
                  onClick={() => setStarRating(stars)}
                  className={`py-2 rounded-none border text-center transition-all cursor-pointer font-mono font-bold text-xs ${
                    isActive
                      ? "bg-blue-600/10 border-blue-600 text-blue-600"
                      : isDark
                        ? "bg-neutral-900 border-neutral-805 dark:border-neutral-800 text-neutral-450 hover:border-neutral-700"
                        : "bg-transparent border-black/10 text-neutral-600 hover:border-gray-400"
                  }`}
                >
                  {stars} ★
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className={`border-t ${isDark ? "border-neutral-800" : "border-gray-150"}`}></div>

      {/* Results grid */}
      <div className="flex flex-col gap-4">
        <span className={`text-[10px] font-mono tracking-widest uppercase font-bold ${isDark ? "text-neutral-500" : "text-gray-400"}`}>
          ESTIMATED CONSUMPTION METRICS
        </span>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div className={`p-3 border rounded-none flex flex-col justify-between ${
            isDark ? "bg-[#161616] border-neutral-850 dark:border-neutral-800" : "bg-black/[0.01] border-black/10"
          }`}>
            <span className="text-[9px] font-mono text-neutral-450 uppercase leading-none font-bold">POWER DRAW</span>
            <span className={`text-sm font-mono font-bold mt-2 ${isDark ? "text-blue-400" : "text-blue-600"}`}>
              {inputKw.toFixed(2)} kW
            </span>
            <span className="text-[8px] font-mono text-neutral-450 leading-none mt-1">at full load</span>
          </div>

          <div className={`p-3 border rounded-none flex flex-col justify-between ${
            isDark ? "bg-[#161616] border-neutral-850 dark:border-neutral-800" : "bg-black/[0.01] border-black/10"
          }`}>
            <span className="text-[9px] font-mono text-neutral-450 uppercase leading-none font-bold">UNITS / DAY</span>
            <span className={`text-sm font-mono font-bold mt-2 ${isDark ? "text-white" : "text-neutral-900"}`}>
              {dailyUnits.toFixed(1)} kWh
            </span>
            <span className="text-[8px] font-mono text-neutral-450 leading-none mt-1">energy consumed</span>
          </div>

          <div className={`p-3 border rounded-none flex flex-col justify-between ${
            isDark ? "bg-[#161616] border-neutral-850 dark:border-neutral-800" : "bg-black/[0.01] border-black/10"
          }`}>
            <span className="text-[9px] font-mono text-neutral-450 uppercase leading-none font-bold">DAILY COST</span>
            <span className={`text-sm font-mono font-bold mt-2 ${isDark ? "text-white" : "text-neutral-900"}`}>
              ₹{Math.round(dailyCost).toLocaleString("en-IN")}
            </span>
            <span className="text-[8px] font-mono text-neutral-450 leading-none mt-1">at ₹{tariff}/unit</span>
          </div>

          <div className={`p-3 border rounded-none flex flex-col justify-between ${
            isDark ? "bg-[#161616] border-neutral-850 dark:border-neutral-800" : "bg-black/[0.01] border-black/10"
          }`}>
            <span className="text-[9px] font-mono text-neutral-450 uppercase leading-none font-bold">MONTHLY COST</span>
            <span className={`text-sm font-mono font-bold mt-2 ${isDark ? "text-white" : "text-neutral-900"}`}>
              ₹{Math.round(monthlyCost).toLocaleString("en-IN")}
            </span>
            <span className="text-[8px] font-mono text-neutral-450 leading-none mt-1">30 days period</span>
          </div>

          <div className={`p-3 border rounded-none flex flex-col justify-between ${
            isDark ? "bg-[#161616] border-neutral-850 dark:border-neutral-800" : "bg-black/[0.01] border-black/10"
          }`}>
            <span className="text-[9px] font-mono text-neutral-450 uppercase leading-none font-bold">ANNUAL COST</span>
            <span className={`text-sm font-mono font-bold mt-2 ${isDark ? "text-white" : "text-neutral-900"}`}>
              ₹{Math.round(annualCost).toLocaleString("en-IN")}
            </span>
            <span className="text-[8px] font-mono text-neutral-450 leading-none mt-1">365 days period</span>
          </div>

          <div className={`p-3 border rounded-none flex flex-col justify-between ${
            isDark ? "bg-[#161616] border-neutral-850 dark:border-neutral-800" : "bg-black/[0.01] border-black/10"
          }`}>
            <span className="text-[9px] font-mono text-neutral-450 uppercase leading-none font-bold">EFFECTIVE EER</span>
            <span className="text-sm font-mono font-bold mt-2 text-green-600 dark:text-green-400">
              {effectiveEer.toFixed(2)}
            </span>
            <span className="text-[8px] font-mono text-neutral-450 leading-none mt-1 truncate">
              {TYPE_CONFIG[acType].label}
            </span>
          </div>
        </div>
      </div>

      {/* Tip Box */}
      <div className={`p-4 border border-l-4 border-l-blue-600 text-xs font-mono flex gap-3 ${
        isDark ? "bg-neutral-900/60 border-neutral-800" : "bg-blue-600/[0.02] border-blue-600/10"
      }`}>
        <Info className="w-4.5 h-4.5 text-blue-600 shrink-0 mt-0.5" />
        <p className={isDark ? "text-neutral-350" : "text-gray-600"}>
          {tips[acType]}
        </p>
      </div>

      {/* Savings Banner */}
      {potentialSaving > 0 && (
        <div className={`p-4 border border-l-4 border-l-green-600 text-xs font-mono flex gap-3 ${
          isDark ? "bg-neutral-900/60 border-neutral-800" : "bg-green-600/[0.02] border-green-600/10"
        }`}>
          <Leaf className="w-4.5 h-4.5 text-green-600 shrink-0 mt-0.5" />
          <p className={isDark ? "text-neutral-350" : "text-gray-600"}>
            Upgrading to a 5-star {capacity} TR {TYPE_NAMES[acType]} AC could save you approximately{" "}
            <strong className={isDark ? "text-green-450 text-white" : "text-green-650"}>
              ₹{potentialSaving.toLocaleString("en-IN")}
            </strong>{" "}
            per year on electricity.
          </p>
        </div>
      )}


      {/* Disclaimer Note */}
      <div className={`text-[8px] font-mono tracking-wider uppercase text-center mt-2 ${
        isDark ? "text-neutral-500" : "text-neutral-400"
      }`}>
        * NOTE: Generated values are approximate. Actual energy consumption and costs may vary.
      </div>

    </div>
  );
}
