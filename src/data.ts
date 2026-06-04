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
  // --- Restaurants & Banquets ---
  {
    id: "pihu-baug",
    title: "Pihu Baug",
    client: "Pihu Baug Group",
    location: "Ahmedabad, Gujarat",
    category: "Restaurants & Banquets",
    metrics: "240 TR Capacity",
    image: "/projects/pihubaug.jpeg",
    description: "Sleek cooling system designed for a high-occupancy luxury banquet lawn and dining environment. Implemented heavy central ductable units to maintain steady temperatures during grand gatherings."
  },
  {
    id: "the-rock-gandhinagar",
    title: "The Rock, Gandhinagar",
    client: "The Rock Hospitality",
    location: "Gandhinagar, Gujarat",
    category: "Restaurants & Banquets",
    metrics: "148 TR Capacity",
    image: "/projects/the rock 1.jpg.jpeg",
    description: "Custom thermal engineering for a modern glass-front restaurant and banquet hall, utilizing split VRF technology to maintain a quiet, comfortable indoor climate."
  },
  {
    id: "tastee-meal",
    title: "Tastee Meal",
    client: "Tastee Meal",
    location: "Ahmedabad, Gujarat",
    category: "Restaurants & Banquets",
    metrics: "120 TR Capacity",
    image: "/projects/Tasty meals.jpg.jpeg",
    description: "High-volume packaged AC ducting and ventilation units installed for a fast-casual dining environment."
  },
  {
    id: "bliss-restaurant",
    title: "Bliss Restaurant & Banquet",
    client: "Bliss Restaurant",
    location: "Ahmedabad, Gujarat",
    category: "Restaurants & Banquets",
    metrics: "115 TR Capacity",
    image: "/projects/Bliss dine.jpg.jpeg",
    description: "Centralized mechanical airflow integration for large-scale banquet spaces and dining zones."
  },
  {
    id: "fountain-valley",
    title: "Fountain Valley",
    category: "Restaurants & Banquets",
    metrics: "112 TR"
  },
  {
    id: "qurrar-banquet",
    title: "Qurrar Banquet",
    category: "Restaurants & Banquets",
    metrics: "110 TR"
  },
  {
    id: "mayur-banquet",
    title: "Mayur Banquets & Restaurants",
    category: "Restaurants & Banquets",
    metrics: "106 TR"
  },
  {
    id: "divine-retreat",
    title: "Divine Retreat LA Festiva",
    category: "Restaurants & Banquets",
    metrics: "105 TR"
  },
  {
    id: "highway-eats",
    title: "The Highway Eats",
    category: "Restaurants & Banquets",
    metrics: "90 TR"
  },
  {
    id: "grand-dinnerbell",
    title: "The Grand Dinnerbell",
    category: "Restaurants & Banquets",
    metrics: "70 TR"
  },

  // --- Hotels, Resorts & Hospitality ---
  {
    id: "grand-eulogia",
    title: "Grand Eulogia",
    client: "Eulogia Hospitality Group",
    location: "Ahmedabad, Gujarat",
    category: "Hotels, Resorts & Hospitality",
    metrics: "1198 TR Capacity",
    image: "/projects/Grand Eulogia 1.jpg.jpeg",
    description: "A colossal centralized water chiller and ductable packaged air conditioning network spanning a luxury hotel complex, providing multi-zone temperature comfort."
  },
  {
    id: "hotel-eulogia-inn",
    title: "Hotel Eulogia Inn, Gota",
    client: "Eulogia Hospitality Group",
    location: "Gota, Ahmedabad",
    category: "Hotels, Resorts & Hospitality",
    metrics: "428 TR Capacity",
    image: "/projects/eulogia_gota.jpeg",
    description: "Centrally zoned cooling architecture and package HVAC system layout installed for spacious banquet halls and visitor rooms."
  },
  {
    id: "hotel-vintana-himmatnagar",
    title: "Hotel Vintana, Himmatnagar",
    client: "Vintana Hotels",
    location: "Himmatnagar, Gujarat",
    category: "Hotels, Resorts & Hospitality",
    metrics: "412 TR Capacity",
    image: "/projects/Hotel Vintana Himmatnagar.jpg.jpeg",
    description: "Integrated VRF zoning design for multi-room luxury suites and public lobbies, optimizing energy efficiency across seasonal outdoor temperature shifts."
  },
  {
    id: "hotel-vintana-dalpur",
    title: "Hotel Vintana, Dalpur",
    category: "Hotels, Resorts & Hospitality",
    metrics: "334 TR"
  },
  {
    id: "hotel-millennium",
    title: "Hotel Millennium",
    category: "Hotels, Resorts & Hospitality",
    metrics: "140 TR"
  },
  {
    id: "hotel-altura",
    title: "Hotel Altura, Chhatral",
    client: "Hotel Altura",
    location: "Chhatral, Gujarat",
    category: "Hotels, Resorts & Hospitality",
    metrics: "138 TR Capacity",
    image: "/projects/Hotel altura.jpg.jpeg",
    description: "Bespoke VRF system design and installations for multiple guest rooms and corridors, prioritizing high-efficiency and low noise."
  },
  {
    id: "hotel-grand-shivalik",
    title: "Hotel Grand Shivalik",
    client: "Shivalik Group",
    location: "Chhatral, Gujarat",
    category: "Hotels, Resorts & Hospitality",
    metrics: "130 TR Capacity",
    image: "/projects/hotel_shivalik.jpg.jpeg",
    description: "Reliable centralized climatization for hotel guest wings and corporate conference rooms, featuring low-decibel airflow systems for optimal guest comfort."
  },
  {
    id: "oriental-hospitality",
    title: "Oriental Hospitality",
    category: "Hotels, Resorts & Hospitality",
    metrics: "80 TR"
  },
  {
    id: "bhagyodaya-hotel",
    title: "Bhagyodaya Hotel",
    category: "Hotels, Resorts & Hospitality",
    metrics: "80 TR"
  },
  {
    id: "jalpaan-hotel",
    title: "Jalpaan Hotel",
    category: "Hotels, Resorts & Hospitality",
    metrics: "22 TR"
  },

  // --- Corporate Offices / Industries ---
  {
    id: "bharti-airtel",
    title: "Bharti Airtel Ltd.",
    client: "Bharti Airtel Ltd.",
    location: "Ahmedabad, Gujarat",
    category: "Corporate Offices / Industries",
    metrics: "427 TR Capacity",
    image: "/projects/Airtel.jpg.jpeg",
    description: "Large-scale centralized air conditioning design and ducting layout for regional corporate headquarters, optimizing air flow and heat dissipation."
  },
  {
    id: "transformers-rectifiers",
    title: "Transformers & Rectifiers India Ltd.",
    client: "Transformers & Rectifiers India Ltd.",
    location: "Chhatral, Gujarat",
    category: "Corporate Offices / Industries",
    metrics: "288 TR Capacity",
    image: "/projects/transformers and rectifiers.jpeg",
    description: "Heavy industrial ventilation and package AC system commissioned for production zones and high-load control offices."
  },
  {
    id: "maruti-techlabs",
    title: "Maruti Techlabs",
    client: "Maruti Technolabs Pvt. Ltd.",
    location: "Ahmedabad, Gujarat",
    category: "Corporate Offices / Industries",
    metrics: "212 TR Capacity",
    image: "/projects/Maruti techlabs.jpg.jpeg",
    description: "Multi-floor zoning VRF climate system design featuring localized smart thermostats and indoor air quality sensors."
  },
  {
    id: "zaveri-realty-31five",
    title: "Zaveri Realty 31Five",
    client: "Zaveri Realty",
    location: "Satellite, Ahmedabad",
    category: "Corporate Offices / Industries",
    metrics: "130 TR Capacity",
    image: "/projects/ZAVERI REALITY.jpg.jpeg",
    description: "Sleek concealed duct split arrays and minimal linear diffuser grilles commissioned for luxury corporate floors."
  },
  {
    id: "deep-industries",
    title: "Deep Industries Ltd.",
    category: "Corporate Offices / Industries",
    metrics: "112 TR"
  },
  {
    id: "hitech-projects",
    title: "Hi Tech Projects",
    client: "Hi Tech Projects Ltd.",
    location: "Ahmedabad, Gujarat",
    category: "Corporate Offices / Industries",
    metrics: "101 TR Capacity",
    image: "/projects/hitech.jpeg",
    description: "Centralized mechanical airflow integration for modern multi-story corporate headquarters with energy-saving recovery ventilators."
  },
  {
    id: "gk-chokshi",
    title: "G.K. Chokshi Office",
    category: "Corporate Offices / Industries",
    metrics: "96 TR"
  },
  {
    id: "incuspaze",
    title: "Incuspaze",
    category: "Corporate Offices / Industries",
    metrics: "90 TR"
  },
  {
    id: "ng-patel",
    title: "N.G. Patel Group",
    category: "Corporate Offices / Industries",
    metrics: "78 TR"
  },
  {
    id: "harsh-exim",
    title: "Harsh Exim",
    category: "Corporate Offices / Industries",
    metrics: "70 TR"
  },

  // --- Educational Institutions ---
  {
    id: "raksha-shakti-university",
    title: "Raksha Shakti University",
    category: "Educational Institutions",
    metrics: "180 TR"
  },
  {
    id: "svkm-nmims",
    title: "SVKM's NMIMS University",
    category: "Educational Institutions",
    metrics: "148 TR"
  },
  {
    id: "chimanbhai-patel-institute",
    title: "Chimanbhai Patel Institute",
    client: "Chimanbhai Patel Institute",
    location: "Ahmedabad, Gujarat",
    category: "Educational Institutions",
    metrics: "140 TR Capacity",
    image: "/projects/Chimanbhai patel institute.jpg.jpeg",
    description: "Custom mechanical ventilation networks and high-efficiency package HVAC systems layout designed for university campus classrooms and auditorium blocks."
  },
  {
    id: "kenalily-school",
    title: "Kenalily School",
    client: "Kenalily Academic Trust",
    location: "Ahmedabad, Gujarat",
    category: "Educational Institutions",
    metrics: "128 TR Capacity",
    image: "/projects/Kenalily school.jpg.jpeg",
    description: "Custom mechanical layout for school class blocks and administrative offices, balancing temperature control with minimum noise for study zones."
  },
  {
    id: "eklavya-school",
    title: "Eklavya School",
    client: "Eklavya School",
    location: "Ahmedabad, Gujarat",
    category: "Educational Institutions",
    metrics: "120 TR Capacity",
    image: "/projects/eklavya school .jpeg",
    description: "High-efficiency central air flow layout and ducted package AC installations for clean, optimized climate control in classrooms and educational facilities."
  },
  {
    id: "shree-mahavir-jain",
    title: "Shree Mahavir Jain Vidyalay",
    category: "Educational Institutions",
    metrics: "98 TR"
  },
  {
    id: "hl-commerce",
    title: "H.L. Commerce College",
    category: "Educational Institutions",
    metrics: "42 TR"
  },
  {
    id: "ekantar",
    title: "Ekantar",
    category: "Educational Institutions",
    metrics: "22 TR"
  },

  // --- Showrooms & Retail ---
  {
    id: "mg-concept",
    title: "MG Concept (Naroda / SG Highway / Gandhinagar)",
    category: "Showrooms & Retail",
    metrics: "114 TR"
  },
  {
    id: "panam-projects",
    title: "Panam Projects Furniture Showroom",
    category: "Showrooms & Retail",
    metrics: "79 TR"
  },
  {
    id: "riyasat-showroom",
    title: "Riyasat Showroom",
    category: "Showrooms & Retail",
    metrics: "78 TR"
  },
  {
    id: "nishi-nails",
    title: "Nishi Nails Spa & Boutique",
    client: "Nishi Nails",
    location: "Satellite, Ahmedabad",
    category: "Showrooms & Retail",
    metrics: "78 TR Capacity",
    image: "/projects/Nishi nails.jpg.jpeg",
    description: "Elegant custom cassette system integrated into boutique ceilings, prioritizing whisper-silent operations and clean air filtration."
  },
  {
    id: "concept-hyundai",
    title: "Concept Hyundai",
    category: "Showrooms & Retail",
    metrics: "60 TR"
  },
  {
    id: "tiera-kitchen",
    title: "Tiera Kitchen / August Home Appliances",
    category: "Showrooms & Retail",
    metrics: "52 TR"
  },
  {
    id: "concept-jeep",
    title: "Concept Jeep",
    category: "Showrooms & Retail",
    metrics: "50.5 TR"
  },
  {
    id: "mahesh-rakhi",
    title: "Mahesh Rakhi Showroom",
    category: "Showrooms & Retail",
    metrics: "48 TR"
  },
  {
    id: "darshan-hardware",
    title: "Darshan Hardware",
    category: "Showrooms & Retail",
    metrics: "40 TR"
  },
  {
    id: "wood-element",
    title: "The Wood Element",
    category: "Showrooms & Retail",
    metrics: "40 TR"
  },
  {
    id: "agora-mall",
    title: "Agora Mall",
    client: "Agora Group",
    location: "Ahmedabad, Gujarat",
    category: "Showrooms & Retail",
    metrics: "749 TR Capacity",
    image: "/projects/agora mall.jpeg",
    description: "Central chilled-water loop integration and high-capacity package ducting design for retail showroom pathways and central corridors."
  },

  // --- Residence / Luxury Villas ---
  {
    id: "avant-living",
    title: "AVANT - evolved living",
    client: "AVANT Projects",
    location: "Ahmedabad, Gujarat",
    category: "Residence / Luxury Villas",
    metrics: "738 TR Capacity",
    image: "/projects/AVANT  evolved living.jpeg",
    description: "High-end multi-VRF climate grid for premium residential apartments, featuring concealed ducting lines and slim linear diffusers."
  },
  {
    id: "swagat-agacia",
    title: "Swagat Agacia",
    client: "Swagat Group",
    location: "Ahmedabad, Gujarat",
    category: "Residence / Luxury Villas",
    metrics: "95 TR Capacity",
    image: "/projects/Swagat Agacia.jpg.jpeg",
    description: "Concealed linear duct air architecture for high-end luxury residences, preserving design aesthetics with quiet climate comfort."
  },
  {
    id: "sohambhai-mehta-residence",
    title: "Sohambhai Mehta Residence",
    client: "Mr. Sohambhai Mehta",
    location: "Ahmedabad, Gujarat",
    category: "Residence / Luxury Villas",
    metrics: "131 TR Capacity",
    image: "/projects/sohambhai_bungalow.jpg",
    description: "Centralized premium VRF system design and ducting layout for a luxurious villa, featuring clean aesthetics and near-silent operation."
  },
  {
    id: "kalpesh-desai-bungalow",
    title: "Kalpeshbhai Desai Residence",
    client: "Mr. Kalpesh Desai",
    location: "Ahmedabad, Gujarat",
    category: "Residence / Luxury Villas",
    metrics: "108 TR Capacity",
    image: "/projects/Kalpesh Desai bungalow.jpg.jpeg",
    description: "Bespoke residential VRF zoning maintaining clean architecture and quiet comfort across private bedrooms and public lounges."
  },
  {
    id: "mamtora-house-sindhubhavan",
    title: "Mamtora House Sindhubhavan",
    category: "Residence / Luxury Villas",
    metrics: "96 TR"
  },
  {
    id: "manoj-savla-residence",
    title: "Manoj Savla Residence",
    category: "Residence / Luxury Villas",
    metrics: "90 TR"
  },
  {
    id: "arvindbhai-patel-white-house",
    title: "Arvindbhai Patel White House",
    category: "Residence / Luxury Villas",
    metrics: "78 TR"
  },
  {
    id: "dilipbhai-patel",
    title: "Dilipbhai Patel (D Raja)",
    category: "Residence / Luxury Villas",
    metrics: "76 TR"
  },
  {
    id: "bagan-villa-sample",
    title: "Bagan Villa Sample House",
    client: "Bagan Villa Group",
    location: "Ahmedabad, Gujarat",
    category: "Residence / Luxury Villas",
    metrics: "70 TR Capacity",
    image: "/projects/Bagan villa.jpg.jpeg",
    description: "Ultra-slim linear grilles and centralized VRF zoning designed for a luxury model residence, prioritizing design aesthetics and whisper-silent operation."
  },
  {
    id: "kartikey-shah-aranya",
    title: "Katikey Shah Aranya Farm",
    category: "Residence / Luxury Villas",
    metrics: "70 TR"
  },
  {
    id: "umangbhai-patel",
    title: "Umangbhai Patel",
    category: "Residence / Luxury Villas",
    metrics: "68 TR"
  },
  {
    id: "mamtora-house-aneri",
    title: "Mamtora House Aneri Farm",
    category: "Residence / Luxury Villas",
    metrics: "63 TR"
  },

  // --- Hospitals / Health Care ---
  {
    id: "anand-surgical",
    title: "Anand Surgical Hospital, Naroda",
    client: "Anand Surgical",
    location: "Naroda, Ahmedabad",
    category: "Hospitals / Health Care",
    metrics: "310 TR Capacity",
    image: "/projects/anand surgical.jpeg",
    description: "Negative pressure isolation climate chambers and surgical suite air systems complying with medical safety guidelines."
  },
  {
    id: "alka-hospital",
    title: "Alka Hospital, Bopal",
    category: "Hospitals / Health Care",
    metrics: "280 TR"
  },
  {
    id: "sadvichar-parivar",
    title: "Sadvichar Parivar Trust",
    category: "Hospitals / Health Care",
    metrics: "144 TR"
  },
  {
    id: "sanya-gic",
    title: "Sanya GIC Imaging Center",
    category: "Hospitals / Health Care",
    metrics: "113 TR"
  },
  {
    id: "ratan-hospital",
    title: "Ratan Hospital",
    category: "Hospitals / Health Care",
    metrics: "75 TR"
  },
  {
    id: "karnavati-hospital",
    title: "Karnavati Hospital",
    client: "Karnavati Healthcare",
    location: "Ahmedabad, Gujarat",
    category: "Hospitals / Health Care",
    metrics: "75 TR Capacity",
    image: "/projects/Karnavati hospital.jpg.jpeg",
    description: "HEPA H14 micro-filtration air containment and cleanroom ventilation grids designed for sterile operations and patient wards."
  },
  {
    id: "lt-vihaan",
    title: "L&T Vihaan Medical Center",
    category: "Hospitals / Health Care",
    metrics: "56 TR"
  },
  {
    id: "tej-eye",
    title: "Tej Eye Hospital",
    category: "Hospitals / Health Care",
    metrics: "54 TR"
  },
  {
    id: "flex-hospital",
    title: "Flex Hospital",
    category: "Hospitals / Health Care",
    metrics: "22 TR"
  },
  {
    id: "dr-karna",
    title: "Dr. Karna Maheshwari Hospital",
    category: "Hospitals / Health Care",
    metrics: "16 TR"
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
