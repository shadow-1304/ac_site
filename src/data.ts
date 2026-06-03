import { ServiceItem, ProjectItem, TestimonialItem, AchievementTimelineItem, BrandPartner, CertificationItem } from './types';

export const STATISTICS = [
  { value: "26+", label: "Years of Engineering" },
  { value: "7,000+", label: "Clients Served" },
  { value: "4,000+", label: "Installed Annually" },
  { value: "100%", label: "Thermal Precision" }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "vrf-systems",
    title: "VRF Air Conditioning Systems",
    shortDesc: "Zoned variable refrigerant flow designs for complex multi-story architectures.",
    longDesc: "Variable Refrigerant Flow (VRF) technology delivers simultaneous heating and cooling to different zones by modular capacity allocation. Our custom VRF networks adjust dynamically to ambient solar heat loading in glass-facade towers, resulting in unmatched energy ratings and localized climate calibration.",
    features: [
      "Simultaneous heating & cooling recovery",
      "Dynamic localized zoning & electronic expansion valves",
      "Minimal system footprint and piping lengths",
      "Integrated smart building BMS modbus interfaces"
    ],
    specs: [
      { label: "Energy Savings", value: "Up to 45% vs traditional split units" },
      { label: "Modulation", value: "0.1Hz inverter compressor fine-tuning" },
      { label: "Max Heights", value: "Up to 90m vertical elevation layout" }
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "hvac-design-consultancy",
    title: "HVAC Design & Blueprints",
    shortDesc: "Computational design and mechanical load modeling for premium estates.",
    longDesc: "We provide high-level CAD drafting, structural airflow simulations (CFD), and thermodynamic heat load calculation reports based on local meteorological profiles. Our computational models eliminate static hot-spots and drafts before construction begins.",
    features: [
      "ASHRAE-compliant thermodynamic load calculations",
      "CFD airflow velocity vector plotting & simulations",
      "Acoustic and vibrational isolation framing blueprints",
      "Regulatory green compliance checking"
    ],
    specs: [
      { label: "Standards", value: "ASHRAE 15 & 55 Certified" },
      { label: "Accuracy", value: "99.8% flow model resolution" },
      { label: "Software", value: "Revit MEP, Carrier HAP, Custom CFD" }
    ],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "ventilation-systems",
    title: "Ventilation & Filtration",
    shortDesc: "Cleanroom architectures, negative pressure zones, and heat recovery.",
    longDesc: "Providing clean air is our expertise. We engineer commercial air handling ducts, high-efficiency mechanical ventilation setups, custom exhaust grids, and HEPA filter frameworks that sustain positive/negative pressure barriers in critical healthcare environments.",
    features: [
      "Negative-pressure surgical suite air-containment",
      "Carbon filtration gas scrubbing & volatile trap grids",
      "Energy Recovery Ventilators (ERV) with 85% heat recycling",
      "Sound-attenuated heavy duty extraction systems"
    ],
    specs: [
      { label: "Particulate Trap", value: "HEPA H14 (99.995% efficiency)" },
      { label: "Air Changes", value: "Up to 24 ACH in critical zones" },
      { label: "Heat Recovery", value: "Sensible and latent heat balance" }
    ],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "commercial-ac",
    title: "Commercial Climatization",
    shortDesc: "Heavy central chiller plants, packaged systems, and long duct layouts.",
    longDesc: "Tailored for heavy enterprise operations, our multi-ton air-cooled and water-cooled screw chillers serve large hotel complexes,, sprawling manufacturing plants, public transit platforms, and commercial offices.",
    features: [
      "Heavy duty double-skin air handling units (AHUs)",
      "Variable frequency drives (VFD) on water chiller loops",
      "Spiral and soundproof pre-insulated duct patterns",
      "Emergency backup redundancy configurations"
    ],
    specs: [
      { label: "Capacities", value: "50 TR to 1200+ TR single modules" },
      { label: "Water Loops", value: "Closed-loop micro-channel condensers" },
      { label: "Lifecycle", value: "20+ Year structural engineering durability" }
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "residential-ac",
    title: "Residential Air Architectures",
    shortDesc: "Centralized concealed ducted lines, floor consoles, and luxury single units.",
    longDesc: "Bringing modern glass aesthetics to fine architectural residences and estates, we specialize in flush-wall linear diffuse systems that integrate into ceiling panels, preserving minimalist interiors while maintaining whisper-quiet airflow.",
    features: [
      "Slim centralized multi-splits and mini-VRV designs",
      "Seamless flush-mounted linear diffuse grill outlets",
      "UVC germicidal sanitizers nested in high-velocity inducts",
      "Intuitive architectural smart-home wall controls"
    ],
    specs: [
      { label: "Acoustics", value: "Low setting whisper-decibel of 19dB(A)" },
      { label: "Grille Style", value: "15mm ultra-slim linear borders" },
      { label: "Integration", value: "Apple Home, Crestron, Lutron compatible" }
    ],
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "installation-commissioning",
    title: "Installation & Commissioning",
    shortDesc: "Rigorous physical setups, nitrogen pressure testing, and validation.",
    longDesc: "Our dedicated field engineering teams ensure precise installation layouts. We verify pressure limits via pressurized nitrogen leak sweeps, perform vacuum hold tests down to 500 microns, and document thermodynamic commissioning charts.",
    features: [
      "Nitrogen dry sweeps & high-pressure structural leak testing",
      "Micro-gauge vacuum decay tracking (500-micron holds)",
      "Vibration alignment metrics for rooftop chillers",
      "Full digital sensor calibration & balancing reports"
    ],
    specs: [
      { label: "Testing Pressures", value: "40 bar high-pressure nitrogen lock" },
      { label: "Vacuum Holds", value: "Verified below 500 microns for 24h" },
      { label: "Reports", value: "ASHRAE standard commissioning ledger" }
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "maintenance-amc",
    title: "Maintenance & AMC Services",
    shortDesc: "Scheduled wellness assessments, coil deep cleansing, and energy reviews.",
    longDesc: "Annual Maintenance Contracts (AMC) designed to preserve performance levels, prevent compressor locks, and lower overall facility power bills. We leverage thermal imaging to find micro-leaks and friction points before failure occurs.",
    features: [
      "Bi-annual deep chemical coil cleaning and anti-mold sweeps",
      "Thermal sensor mapping for predictive diagnostic sweeps",
      "Refrigerant fill validation and electrical draw balance",
      "Priority 24/7 technical hotline dispatching"
    ],
    specs: [
      { label: "Response", value: "Under 4 hours guaranteed dispatch" },
      { label: "AMC Savings", value: "Reduces unexpected breakdown bills by 80%" },
      { label: "Efficiency Gain", value: "Maintains COP rating within 97% of factory spec" }
    ],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "after-sales-support",
    title: "After-Sales Support",
    shortDesc: "Direct diagnostic lines, genuine component stocks, and warranties.",
    longDesc: "We back our mechanical systems with long-term after-sales support, stocking a comprehensive catalog of genuine spare components like inverter boards, silent fans, and filter modules to minimize downtime.",
    features: [
      "100% official manufacturer-certified replacement items",
      "Direct technical engineering dispatch desk",
      "Compressor extended protection programs",
      "System retrofitting and modern low-GWP gas upgrades"
    ],
    specs: [
      { label: "Availability", value: "98% key spare parts kept in active inventory" },
      { label: "Helpdesk", value: "Direct engineer line (no automated bots)" },
      { label: "Warranty", value: "Up to 10 years extended hardware warranty" }
    ],
    image: "https://images.unsplash.com/photo-1521791136368-1a46827d0515?q=80&w=1200&auto=format&fit=crop"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "apex-surgical-center",
    title: "Apex Surgical Center & Hospital Complexes",
    client: "Apex Health Diagnostics Co.",
    location: "Mumbai Coastal Road Bypass",
    scope: "Modular sterile hygiene VRF and laminar negative pressure airflow.",
    category: "Hospitals",
    year: 2024,
    featured: true,
    metrics: "Cleanliness Grade ISO 5 (Class 100), Zero contaminants detected.",
    description: "Engineering design of a localized fresh air extraction and negative pressure containment HVAC zone for four highly sensitive cardiovascular intensive surgery theaters. Implemented active ventilation arrays backed by custom HEPA filters to prevent any biological cross-flow.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "meridian-grand",
    title: "The Meridian Grand Beachfront Resort",
    client: "Meridian Hospitality Group",
    location: "South Goa Shoreline",
    scope: "Energy recovering VRF system with anti-corrosion ocean coat.",
    category: "Hotels",
    year: 2023,
    featured: true,
    metrics: "34% reduction in peak load electricity costs vs standard design limit.",
    description: "Designed and installed a high-capacity hot gas recovery VRF air conditioning mesh spanning 240 luxury suites and massive beach-facing ceiling structures. Applied double-layer epoxy anti-saline protection coating on rooftop condensers to combat extreme humidity and salt sprays.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "nebula-corporate-park",
    title: "Nebula Corporate & Tech Hub",
    client: "Nebula Infrastructure Partners",
    location: "Bengaluru East Tech Corridor",
    scope: "Heavy water-cooled centrifugal chiller towers and smart BMS.",
    category: "Offices",
    year: 2024,
    featured: true,
    metrics: "Calculated annual carbon footprint offset equivalent to 1,200 metric tonnes.",
    description: "Deployed a centralized water-cooled screw chiller system of 1,200 Ton capacity, including premium variable-speed water loops and sound-insulated dynamic linear grilles throughout 12 open floor corporate architectures.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "luxe-penthouses",
    title: "The Skyline Penthouses & Heights",
    client: "Elite Urban Habitats LLC",
    location: "New Delhi Ridge Line",
    scope: "Architectural concealed cassette ducted networks, whisper silent.",
    category: "Residential",
    year: 2025,
    featured: false,
    metrics: "Operation acoustics sustained below 21 decibels at full night load.",
    description: "Bespoke spatial climatization design for 16 custom multi-tier geometric penthouses. Using ultra-flat hidden roof units and long narrow linear diffuse grills that run parallel to modern accent lights, achieving total invisible luxury climate control.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "aura-automotive",
    title: "Aura Premium Concept Showroom",
    client: "Aura Supercars Inc.",
    location: "Pune Industrial Heights",
    scope: "Continuous high-volume round cassette ventilation systems.",
    category: "Showrooms",
    year: 2023,
    featured: false,
    metrics: "Thermal boundary sustained at exactly 21°C despite 6m transparent glass panels.",
    description: "Redefined structural climate zoning for a massive dual-story conceptual car showroom with double-height transparent structural glass walls. Focused cooling arrays along lower-level footpaths, isolating hot air inside top visual zones.",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "national-science-pavilion",
    title: "National Science & Aerospace Pavilion",
    client: "Federal Educational Trust",
    location: "Gujarat Knowledge Precinct",
    scope: "Large volume displacement cooling ducts and relative humidity lock.",
    category: "Institutions",
    year: 2022,
    featured: false,
    metrics: "Relative humidity locked precisely at 45% (±1.5%) for sensitive paper archives.",
    description: "Engineered heavy displacement duct lattices to cool a high-dome archival auditorium. Implemented dynamic reheat coils and specialized electronic humidifiers to maintain air conditions, preventing humidity damage to ancient cosmic charts and historical books.",
    image: "https://images.unsplash.com/photo-1582882752274-133cd96c6b8c?q=80&w=1200&auto=format&fit=crop"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    quote: "Intel Air Group redesigned our intensive surgical ventilation pathways with absolute mathematical rigor. Their calculations for laminar wind velocities matched physics perfectly, earning us critical JCI compliance on the first audit.",
    author: "Dr. Alok Sen",
    role: "Director of Mechanical Infrastructure",
    company: "Apex Health Diagnostics Co."
  },
  {
    id: "test-2",
    quote: "A beachfront luxury five-star hotel demands massive cooling capacities along with zero aesthetic disruption. Intel Air Group delivered dynamic concealed units that cool our high-ceiling halls efficiently while dealing with Goa's extreme beach salinity.",
    author: "Elena Vasconcelos",
    role: "Chief Projects Officer",
    company: "Meridian Hospitality Group"
  },
  {
    id: "test-3",
    quote: "As structural engineers, we look for partners who understand design load boundaries. Intel's HVAC blueprints are incredibly high-resolution, matching the clean visual style of our modern column-free workspaces.",
    author: "Rajiv Sethi",
    role: "Partner Architect",
    company: "Sethi & Associates structural labs"
  }
];

export const COMPLAINCE_TIMELINE: AchievementTimelineItem[] = [
  {
    year: "2000",
    title: "Inception & Core Engineering Base",
    description: "Founded Intel Air Group with a clear mandate: bypass standard quick-fix AC installations and establish a premium mechanical HVAC firm prioritizing thermal calculation sheets and dynamic ventilation."
  },
  {
    year: "2006",
    title: "First Large Centrifugal Loop (1000 TR)",
    description: "Commissioned our first heavy scale centralized chilled-water plant loop, serving a major pharmaceutical manufacturing park in Pune, demonstrating custom thermal-holding curves."
  },
  {
    year: "2013",
    title: "Pioneering Solid VRF Integration",
    description: "Integrated simultaneous heating and cooling VRF heat-recovery setups to the commercial building market, creating localized zone climate splits."
  },
  {
    year: "2018",
    title: "Cleanroom Ventilation Apex",
    description: "Constructed four positive-pressure pharmaceutical cleanrooms compliant with grade ISO 5 sterilization limits, introducing real-time air particle filters."
  },
  {
    year: "2024",
    title: "7000+ Projects & Sustainable Initiative",
    description: "Reassigned all system designs to low-GWP (Global Warming Potential) environment-friendly cooling gases. Recognized with an Outstanding HVAC Engineering Merit award."
  }
];

export const BRAND_PARTNERS: BrandPartner[] = [
  { name: "Daikin VRV Air Conditioning", tier: "Elite Mechanical Installer", acronym: "DK", description: "Pioneers in high-end variable volume technologies with high energy efficient outputs." },
  { name: "Mitsubishi Electric City Multi", tier: "Platinum HVAC Integrator", acronym: "ME", description: "Inverter compressor systems that provide whisper quiet acoustics." },
  { name: "Carrier Commercial Systems", tier: "Industrial Chiller Advisor", acronym: "CR", description: "Heavy centrifugal and mechanical screw chillers designed for huge commercial centers." },
  { name: "O General Premium Division", tier: "Elite Ducting Partner", acronym: "OG", description: "High-airflow multi-split systems with legendary cooling curves in severe high temperatures." },
  { name: "Trane High Performance HVAC", tier: "Dynamic Chiller Partner", acronym: "TR", description: "Advanced mechanical air handlers and commercial extraction loops." },
  { name: "Blue Star Air Systems", tier: "Enterprise Solutions Partner", acronym: "BS", description: "Precision ducting structures, panel AC units for industrial control spaces." }
];

export const CERTIFICATIONS: CertificationItem[] = [
  { code: "ASHRAE 15", title: "Safety Standard for Refrigeration Mechanical Networks", authority: "American Society of Heating & Air-Conditioning" },
  { code: "ISO 9001:2015", title: "Quality Management in HVAC Engineering & AMC Procedures", authority: "International Standards Authority" },
  { code: "LEED AP Compliant", title: "Structural High Efficiency Energy Design Certification", authority: "US Green Building Council Standards" },
  { code: "ISHRAE Life Member", title: "National Climate Engineering & Extraction Merit Center", authority: "Indian Society of Heating & Refrigeration" }
];
