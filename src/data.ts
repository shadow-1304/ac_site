import { ServiceItem, ProjectItem, TestimonialItem, AchievementTimelineItem, BrandPartner, CertificationItem } from './types';

export const STATISTICS = [
  { value: "26+", label: "Years of Trust" },
  { value: "7,000+", label: "Clients Served" },
  { value: "32+", label: "Permanent Engineers" },
  { value: "80+", label: "Total Workforce" }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "vrf-systems",
    title: "VRF Air Conditioning Systems",
    shortDesc: "Zoned variable refrigerant flow designs for complex multi-story architectures.",
    longDesc: "As authorized dealers for Mitsubishi Electric, Toshiba, and Carrier, we provide top-tier Variable Refrigerant Flow (VRF) technology. VRF systems deliver simultaneous heating and cooling to different zones by modular capacity allocation. Our custom VRF networks adjust dynamically to ambient solar heat loading, resulting in unmatched energy ratings.",
    features: [
      "Simultaneous heating & cooling recovery",
      "Dynamic localized zoning & electronic expansion valves",
      "Exclusive Mitsubishi Electric VRF integrations",
      "Integrated smart building BMS modbus interfaces"
    ],
    specs: [
      { label: "Energy Savings", value: "Up to 45% vs traditional split units" },
      { label: "Inverter Tech", value: "Advanced scroll compressor fine-tuning" },
      { label: "Design Support", value: "Carrier HAP & AutoCAD Load sheets" }
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "hvac-design-consultancy",
    title: "HVAC Design & CAD Consultancy",
    shortDesc: "Computational design and mechanical load modeling for premium estates.",
    longDesc: "We provide high-level CAD drafting, duct layouts, and thermodynamic heat load calculation reports based on local meteorological profiles. Our computational models eliminate static hot-spots and draft issues before construction begins.",
    features: [
      "ASHRAE-compliant thermodynamic load calculations",
      "AutoCAD layout design and structural duct sizing",
      "Acoustic and vibrational isolation framing blueprints",
      "Regulatory green compliance checking"
    ],
    specs: [
      { label: "Standards", value: "ASHRAE 15 & 55 Compliant" },
      { label: "Layouts", value: "3D CAD modeling & duct routing sheets" },
      { label: "Software", value: "Carrier HAP, AutoCAD MEP" }
    ],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "ventilation-systems",
    title: "Ventilation & Filtration",
    shortDesc: "Cleanroom architectures, negative pressure zones, and heat recovery.",
    longDesc: "Providing clean air is our expertise. We engineer commercial air handling ducts, high-efficiency mechanical ventilation setups, custom exhaust grids, and HEPA filter frameworks that sustain positive/negative pressure barriers in critical industrial environments.",
    features: [
      "Negative-pressure sterile air-containment",
      "Carbon filtration gas scrubbing & volatile trap grids",
      "Energy Recovery Ventilators (ERV) with 85% heat recycling",
      "Sound-attenuated heavy duty extraction systems"
    ],
    specs: [
      { label: "Particulate Trap", value: "HEPA filter setups" },
      { label: "Applications", value: "Pharma cleanrooms, commercial kitchens" },
      { label: "Heat Recovery", value: "Sensible and latent heat balance" }
    ],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "commercial-ac",
    title: "Commercial Climatization",
    shortDesc: "Heavy central chiller plants, packaged ductable systems, and long layouts.",
    longDesc: "Tailored for heavy enterprise operations, we offer multi-ton packaged AC units and central chilled-water systems, serving large corporate offices, bank branches, public transit platforms, and educational institutions in Gujarat.",
    features: [
      "Heavy duty double-skin air handling units (AHUs)",
      "Variable frequency drives (VFD) on water chiller loops",
      "Spiral and soundproof pre-insulated duct patterns",
      "Packaged and ductable units up to 100+ TR"
    ],
    specs: [
      { label: "Capacities", value: "10 TR to 500+ TR layouts" },
      { label: "Airflow Design", value: "Constant air volume (CAV) grids" },
      { label: "Durability", value: "20+ Year structural mechanical lifecycle" }
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "residential-ac",
    title: "Residential Air Architectures",
    shortDesc: "Centralized concealed ducted lines, floor consoles, and premium multi-splits.",
    longDesc: "Bringing modern aesthetics to fine architectural residences, we specialize in flush-wall linear diffuse systems that integrate into ceiling panels, preserving minimalist interiors while maintaining whisper-quiet airflow.",
    features: [
      "Slim centralized multi-splits and mini-VRV designs",
      "Seamless flush-mounted linear diffuse grill outlets",
      "UVC germicidal sanitizers nested in high-velocity inducts",
      "Smart-home compatible climate wall controls"
    ],
    specs: [
      { label: "Acoustics", value: "Low setting whisper-decibel of 19dB(A)" },
      { label: "Grille Style", value: "15mm ultra-slim linear borders" },
      { label: "Brands", value: "Mitsubishi Electric Brand Shop Elite models" }
    ],
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "installation-commissioning",
    title: "AC Installation & Setup",
    shortDesc: "Rigorous physical setups, nitrogen pressure testing, and validation.",
    longDesc: "Our dedicated field engineering teams ensure precise installation layouts. We verify pressure limits via pressurized nitrogen leak sweeps, perform vacuum hold tests, and document thermodynamic commissioning charts.",
    features: [
      "Nitrogen dry sweeps & high-pressure structural leak testing",
      "Micro-gauge vacuum decay tracking",
      "Vibration alignment metrics for outdoor condensers",
      "Full digital sensor calibration & balancing reports"
    ],
    specs: [
      { label: "Testing Pressures", value: "40 bar high-pressure nitrogen lock" },
      { label: "Vacuum Holds", value: "Verified below 500 microns" },
      { label: "Reports", value: "Factory standard commissioning ledger" }
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "maintenance-amc",
    title: "Maintenance & AMC Services",
    shortDesc: "Scheduled wellness assessments, coil deep cleansing, and energy reviews.",
    longDesc: "Annual Maintenance Contracts (AMC) designed to preserve performance levels, prevent compressor locks, and lower overall facility power bills. We leverage expert diagnostics to find micro-leaks and friction points before failure occurs.",
    features: [
      "Bi-annual deep chemical coil cleaning and anti-mold sweeps",
      "Electrical draw balance and pressure reviews",
      "Refrigerant fill validation and leak testing",
      "Priority 24/7 technical hotline dispatching"
    ],
    specs: [
      { label: "Response", value: "Under 4 hours guaranteed dispatch" },
      { label: "AMC Coverage", value: "Covers key parts, compressors, and labor" },
      { label: "Efficiency Gain", value: "Maintains optimal cooling performance" }
    ],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "after-sales-support",
    title: "After-Sales & Service Portal",
    shortDesc: "Direct diagnostic lines, genuine component stocks, and service CRM.",
    longDesc: "We back our mechanical systems with long-term after-sales support, stocking a comprehensive catalog of genuine spare components and providing clients with an online Service CRM portal for real-time ticket logs.",
    features: [
      "100% official manufacturer-certified replacement items",
      "Online CRM ticketing portal support integration",
      "Compressor extended protection programs",
      "System retrofitting and modern low-GWP gas upgrades"
    ],
    specs: [
      { label: "CRM Access", value: "https://service1.intelairgroup.com/" },
      { label: "Spare Inventory", value: "95% key spares kept in stock" },
      { label: "Warranty", value: "Up to 5 years extended hardware warranty" }
    ],
    image: "https://images.unsplash.com/photo-1521791136368-1a46827d0515?q=80&w=1200&auto=format&fit=crop"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "bharti-airtel",
    title: "Bharti Airtel Regional HQ & Corporate Offices",
    client: "Bharti Airtel Ltd.",
    location: "Ahmedabad, Gujarat",
    scope: "Heavy packaged and ductable central cooling systems.",
    category: "Offices",
    year: 2023,
    featured: true,
    metrics: "427 TR central packaged AC layout successfully commissioned.",
    description: "Design, ducting layout, and installation of a massive centralized packaged air conditioning network for Airtel's regional corporate offices. Engineered soundproof air handlers and optimized return air layouts.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "maruti-technolabs",
    title: "Maruti Technolabs Software Center",
    client: "Maruti Technolabs Pvt. Ltd.",
    location: "Ahmedabad, Gujarat",
    scope: "VRF air conditioning and zoned fresh air ventilation.",
    category: "Offices",
    year: 2024,
    featured: true,
    metrics: "178 TR VRF layout maintaining steady whisper-quiet acoustics.",
    description: "Bespoke VRF climate design spanning multiple floors of high-performance coding zones. Implemented localized smart thermostats and fresh air inputs to maximize indoor air quality and comfort.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "zaveri-realty",
    title: "Zaveri Realty - 31Five Commercial Complex",
    client: "Zaveri Realty",
    location: "Satellite, Ahmedabad",
    scope: "Zoned ductable splits and multi-VRF climatization.",
    category: "Offices",
    year: 2023,
    featured: true,
    metrics: "130 TR load distribution with minimalist aesthetic linear grills.",
    description: "Collaborated directly with structural architects to draft and install flush-ceiling ducted units and slim-profile linear diffusers, maintaining the building's aesthetic integrity while providing stable cooling.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "mg-concept-showroom",
    title: "MG Concept Showroom",
    client: "MG Concept Cars",
    location: "Naroda, Ahmedabad",
    scope: "High-volume ductable air conditioning and thermal air curtains.",
    category: "Showrooms",
    year: 2023,
    featured: false,
    metrics: "114 TR packaged and ductable units with entry-point jet locks.",
    description: "Designed a high-capacity HVAC system for a massive automobile showroom. Integrated perimeter air jet curtains near large glass panels to block hot external air, maintaining interior comfort.",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "chimanbhai-patel-institute",
    title: "Chimanbhai Patel Institute Campus",
    client: "Chimanbhai Patel Academic Trust",
    location: "Ahmedabad, Gujarat",
    scope: "Centralized ductable and packaged educational cooling.",
    category: "Institutions",
    year: 2022,
    featured: false,
    metrics: "140 TR classroom and archival library climate zoning.",
    description: "Custom mechanical layout for multiple campus blocks and library halls. Engineered systems to optimize air changes per hour (ACH) in study zones while keeping operational noise to a minimum.",
    image: "https://images.unsplash.com/photo-1582882752274-133cd96c6b8c?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "tiera-kitchen",
    title: "Tiera Kitchen / August Showroom",
    client: "Tiera Kitchen Products",
    location: "Satellite, Ahmedabad",
    scope: "Concealed ducted split units and cassette arrays.",
    category: "Showrooms",
    year: 2024,
    featured: false,
    metrics: "52 TR concealed air flow layout preserving high-end visual designs.",
    description: "Engineered discrete cassette layouts for a luxury kitchen and appliance showroom, ensuring no cooling components blocked visual product presentation routes.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    quote: "Intel Air Group executed our software campus cooling layout with absolute precision. Their VRF design delivers quiet, reliable cooling to 300+ developers while optimizing our energy consumption.",
    author: "Manoj Patel",
    role: "VP Operations",
    company: "Maruti Technolabs Pvt. Ltd."
  },
  {
    id: "test-2",
    quote: "Concealed ducting for our high-end commercial offices demands seamless aesthetic integrations. Dhaval Dave and Mihir Shah delivered layouts that fit perfectly with our building's styling.",
    author: "Zaveri Realty Design Team",
    role: "Lead Architects",
    company: "31Five Complex"
  },
  {
    id: "test-3",
    quote: "A centralized packaged AC of 427 TR is a massive undertaking. Intel Air Group handled everything from load calculations to final validation smoothly and within timeline parameters.",
    author: "Airtel Projects Desk",
    role: "Infrastructure Lead",
    company: "Bharti Airtel Ltd."
  }
];

export const COMPLAINCE_TIMELINE: AchievementTimelineItem[] = [
  {
    year: "2000",
    title: "Firm Establishment",
    description: "Intel Air Group is formed by partners Dhaval Dave and Mihir Shah, establishing dedicated entities: Intel Air Technologies, Intel Enterprises, and Innovative Airconditioners."
  },
  {
    year: "2008",
    title: "Exclusive Mitsubishi Electric Brand Shop",
    description: "Inaugurated an exclusive brand showroom for Mitsubishi Electric, standardizing premium inverter split and VRF units for the Gujarat region."
  },
  {
    year: "2015",
    title: "Large Corporate Integrations",
    description: "Expanded our commercial portfolio to handle single-site installations exceeding 300+ TR, partnering with tech hubs and banks."
  },
  {
    year: "2020",
    title: "Pharma & Cleanroom Expansion",
    description: "Bespoke cleanroom ducting systems implemented for pharmaceutical units (like Troikaa Pharma), complying with ISO standards."
  },
  {
    year: "2024",
    title: "7,000+ Successful Sites",
    description: "Milestone achievement of serving 7,000+ residential and commercial clients across Gujarat, backed by a permanent engineering team of 32."
  }
];

export const BRAND_PARTNERS: BrandPartner[] = [
  { name: "Mitsubishi Electric Brand Shop", tier: "Exclusive Authorized Dealer", acronym: "ME", description: "Elite inverter systems and City Multi VRF units with quiet decibels." },
  { name: "Toshiba Climate", tier: "Authorized Service Dealer", acronym: "TS", description: "Legendary Japanese rotary compressor VRF and split architectures." },
  { name: "Carrier Commercial Systems", tier: "Packaged & Chiller Integrator", acronym: "CR", description: "Heavy-duty packaged systems and chilled-water loops for enterprises." },
  { name: "Hitachi Aircon", tier: "Authorized Sales Partner", acronym: "HT", description: "Efficient central ductables and tropical-climate split units." },
  { name: "Blue Star India", tier: "Authorized Enterprise Dealer", acronym: "BS", description: "Ductable splits, VRF networks, and custom AHUs." }
];

export const CERTIFICATIONS: CertificationItem[] = [
  { code: "ISHRAE Life", title: "Indian Society of Heating & Refrigeration Members", authority: "National Climate Engineering & HVAC Council" },
  { code: "Mitsubishi Certified", title: "Authorized Exclusive Brand Showroom Certificate", authority: "Mitsubishi Electric India" },
  { code: "LEED AP Compliant", title: "High Efficiency Energy System Design Standards", authority: "Green Building Engineering Protocols" }
];
