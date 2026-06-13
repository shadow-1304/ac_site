import { ServiceItem, ProjectItem, TestimonialItem, AchievementTimelineItem, BrandPartner, CertificationItem } from './types';

export const STATISTICS = [
  { value: "13+", label: "Years of Trust" },
  { value: "10,000+", label: "Clients Served" },
  { value: "5,000+", label: "Units Delivered Annually" },
  { value: "84+", label: "HVAC Professionals & Technicians" }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "vrf-systems",
    title: "VRF Air Conditioning Systems",
    shortDesc: "Zoned variable refrigerant flow designs for complex multi-story architectures.",
    longDesc: "As being sales and service dealer for Mitsubishi Electric, Toshiba, and Carrier, we provide top-tier Variable Refrigerant Flow (VRF) technology. VRF systems deliver optimum cooling to different zones by modular capacity allocation.",
    features: [
      "Energy-efficient operation",
      "Individual zone temperature control",
      "Flexible design for large buildings",
      "Lower operating and maintenance costs"
    ],
    specs: [],
    idealApplications: "Hotels • Offices • Hospitals • Educational Institutions • Commercial Buildings • Luxury Villas",
    image: "/services/vrf_ac_new2.png"
  },
  {
    id: "hvac-design-planning",
    title: "HVAC Design & Planning",
    shortDesc: "Computational design and mechanical load modeling for premium estates.",
    longDesc: "Our engineering team provides HVAC design and planning, heat load calculations, ducting and piping layouts, equipment selection, and CAD drawings to ensure efficient, cost-effective, and high-performance system design before project execution.",
    features: [
      "Heat Load Calculations",
      "HVAC Layout",
      "Equipment Selection & Sizing",
      "Detail Project Planning"
    ],
    featuresTitle: "SERVICE INCLUDED",
    specsTitle: "KEY DELIVERABLES",
    specs: [
      { label: "Heat Load Reports", value: "Accurate cooling load assessments for proper system sizing." },
      { label: "HVAC Layout & Piping Drawings", value: "Detailed ducting, piping, and equipment placement plans." },
      { label: "Equipment Recommendations", value: "Selection of the most suitable HVAC systems based on project requirements." }
    ],
    image: "/services/hvac-design-consultancy.png"
  },
  {
    id: "ventilation-systems",
    title: "Ventilation & Filtration",
    shortDesc: "Fresh air systems, exhaust solutions, ventilation networks, and indoor air quality management.",
    longDesc: "We design and install fresh air, exhaust, pressurization, and filtration systems that improve indoor air quality, remove contaminants, control odours, and maintain healthy environments across commercial, industrial, healthcare, and hospitality facilities.",
    features: [
      "Fresh Air Ventilation Systems",
      "Kitchen & Industrial Exhaust Systems",
      "HEPA & High-Efficiency Filtration",
      "Positive & Negative Pressure Rooms"
    ],
    specsTitle: "KEY APPLICATIONS",
    specs: [
      { label: "Healthcare Facilities", value: "Isolation rooms, operation theatres, and clean spaces." },
      { label: "Commercial Kitchens", value: "Odor control, smoke extraction, and fresh air supply." },
      { label: "Industrial Facilities", value: "Dust extraction, process ventilation, and worker safety." }
    ],
    image: "/services/ventilation-systems.png"
  },
  {
    id: "maintenance-amc",
    title: "Annual Maintenance Contracts",
    shortDesc: "Customized Annual Maintenance Contracts for commercial, institutional, hospitality, and residential HVAC systems",
    longDesc: "Our preventive maintenance programs keep HVAC systems operating efficiently throughout the year. Scheduled inspections, system optimization, and rapid-response support help reduce breakdowns, extend equipment life, and maintain peak performance.",
    features: [
      "Scheduled Preventive Maintenance Visits",
      "System Health Checks & Leak Detection",
      "Electrical & Mechanical Performance Inspections",
      "Priority Breakdown Support & Response"
    ],
    specsTitle: "SERVICE BENEFITS",
    specs: [
      { label: "Fast Response", value: "Dedicated support for urgent service requirements." },
      { label: "Extended Equipment Life", value: "Regular maintenance reduces wear and unexpected failures." },
      { label: "Optimized Performance", value: "Maintains cooling efficiency and energy savings." }
    ],
    image: "/services/maintenance-amc_new.png"
  },
  {
    id: "commercial-ac",
    title: "Commercial Air Conditioning Systems",
    shortDesc: "Heavy central chiller plants, packaged ductable systems, and long layouts.",
    longDesc: "We design and install centralized HVAC systems for hotels, hospitals, office buildings, educational campuses, banquet facilities, factories, and commercial complexes. Our solutions ensure reliable cooling, energy efficiency, and long-term operational performance.",
    features: [
      "Air Handling Units (AHU) & FCU Networks",
      "Energy-Efficient VFD Controls",
      "Packaged, Ductable & High-Capacity Cooling Systems"
    ],
    specsTitle: "KEY APPLICATIONS",
    specs: [
      { label: "Hotels & Resorts", value: "Guest rooms, banquet halls, restaurants, and lobbies." },
      { label: "Commercial Buildings", value: "Offices, shopping centers, and mixed-use developments." },
      { label: "Industrial Facilities", value: "Factories, production floors, and warehousing spaces" }
    ],
    image: "/services/commercial_ac_new.jpg"
  },
  {
    id: "residential-ac",
    title: "Luxury Residential HVAC Systems",
    shortDesc: "Centralized concealed ducted lines, floor consoles, and premium multi-splits.",
    longDesc: "Bringing modern aesthetics to fine architectural residences, we specialize in flush-wall linear diffuse systems that integrate into ceiling panels, preserving minimalist interiors while maintaining whisper-quiet airflow.",
    features: [
      "Hidden Ducted & VRF Cooling Systems",
      "Ultra-Quiet Room Operation",
      "Architectural Linear Slot Diffusers",
      "Smart Home & Mobile App Control"
    ],
    specsTitle: "IDEAL FOR",
    specs: [
      { label: "Luxury Villas", value: "Large residences with multiple comfort zones." },
      { label: "Premium Apartments", value: "Hidden cooling systems with modern aesthetics." },
      { label: "Penthouses & Bungalows", value: "Customized climate control and smart automation." }
    ],
    image: "/services/residential-ac.png"
  },
  {
    id: "installation-commissioning",
    title: "Professional HVAC Installation & Commissioning",
    shortDesc: "Rigorous physical setups, nitrogen pressure testing, and validation.",
    longDesc: "Our certified installation teams ensure every HVAC system is installed, tested, and commissioned to manufacturer standards. From copper piping and ductwork to system balancing and performance verification, we deliver reliable operation from day one.",
    features: [
      "Leak Testing & Pressure Verification",
      "Vacuuming & Refrigerant Charging",
      "Equipment Alignment & System Balancing",
      "Performance Testing & Final Commissioning"
    ],
    specsTitle: "QUALITY ASSURANCE",
    specs: [
      { label: "Pressure Tested", value: "Leak-free refrigerant piping verification." },
      { label: "Performance Verified", value: "Cooling capacity and airflow balancing checks." },
      { label: "Commissioning Reports", value: "Complete documentation and handover support" }
    ],
    image: "/services/installation-commissioning.png"
  },
  {
    id: "after-sales-support",
    title: "After-Sales & Service Portal",
    shortDesc: "Direct diagnostic lines, genuine component stocks, and service CRM.",
    longDesc: "Our commitment continues long after project completion. Dedicated support teams, genuine spare parts availability, warranty assistance, and responsive service ensure uninterrupted system performance throughout the equipment lifecycle",
    features: [
      "Genuine Spare Parts Support",
      "Extended Warranty Assistance",
      "Dedicated Service Request Management",
      "System Upgrade & Modernization Guidance"
    ],
    specsTitle: "CUSTOMER ASSURANCES",
    specs: [
      { label: "Support Access", value: "Dedicated assistance whenever service is required." },
      { label: "Spare Parts Availability", value: "Access to genuine replacement components." },
      { label: "Warranty Protection", value: "Comprehensive manufacturer-backed support." }
    ],
    image: "/services/after-sales-support.png"
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
    category: "Restaurants & Banquets",
    metrics: "120 TR"
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
    client: "La Festiva",
    location: "Ahmedabad, Gujarat",
    category: "Restaurants & Banquets",
    metrics: "105 TR Capacity",
    image: "/projects/La fiesta.jpg.jpeg",
    description: "Premium central cooling solution and fresh air ventilation networks implemented for a luxury banquet and dining hall."
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
    client: "Praveg Ltd.",
    location: "Ahmedabad, Gujarat",
    category: "Hotels, Resorts & Hospitality",
    metrics: "1198 TR Capacity",
    image: "/projects/Grand Eulogia 1.jpg.jpeg",
    description: "Integrated HVAC ecosystem comprising VRF air conditioning, treated fresh air delivery, ventilation management, and smoke extraction systems, ensuring superior comfort, indoor air quality, and operational safety"
  },
  {
    id: "hotel-eulogia-inn",
    title: "Hotel Eulogia Inn, Gota",
    client: "Praveg Ltd.",
    location: "Gota, Ahmedabad",
    category: "Hotels, Resorts & Hospitality",
    metrics: "428 TR Capacity",
    image: "/projects/eulogia_gota.jpeg",
    description: "End-to-end HVAC installation incorporating VRF air conditioning, treated fresh air units, mechanical ventilation systems, and smoke evacuation solutions for guest rooms, banquet spaces, and common areas."
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
    location: "Mehsana, Gujarat",
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
    category: "Commercial & Industrial Facilities",
    metrics: "427 TR Capacity",
    image: "/projects/Airtel.jpg.jpeg",
    description: "Large-scale centralized air conditioning design and ducting layout for regional corporate headquarters, optimizing air flow and heat dissipation."
  },
  {
    id: "transformers-rectifiers",
    title: "Transformers & Rectifiers India Ltd.",
    client: "Transformers & Rectifiers India Ltd.",
    location: "Moraiya, Gujarat",
    category: "Commercial & Industrial Facilities",
    metrics: "288 TR Capacity",
    image: "/projects/transformers and rectifiers.jpeg",
    description: "Heavy industrial ventilation and package AC system commissioned for production zones and high-load control offices."
  },
  {
    id: "maruti-techlabs",
    title: "Maruti Techlabs",
    client: "Maruti Technolabs Pvt. Ltd.",
    location: "Ahmedabad, Gujarat",
    category: "Commercial & Industrial Facilities",
    metrics: "212 TR Capacity",
    image: "/projects/Maruti techlabs.jpg.jpeg",
    description: "Multi-floor zoning VRF climate system design featuring localized smart thermostats and indoor air quality sensors."
  },
  {
    id: "zaveri-realty-31five",
    title: "Zaveri Realty 31Five",
    category: "Commercial & Industrial Facilities",
    metrics: "130 TR"
  },
  {
    id: "deep-industries",
    title: "Deep Industries Ltd.",
    category: "Commercial & Industrial Facilities",
    metrics: "112 TR"
  },
  {
    id: "hitech-projects",
    title: "Hi Tech Projects",
    client: "Hi Tech Projects Ltd.",
    location: "Ahmedabad, Gujarat",
    category: "Commercial & Industrial Facilities",
    metrics: "101 TR Capacity",
    image: "/projects/hitech.jpeg",
    description: "Centralized mechanical airflow integration for modern multi-story corporate headquarters with energy-saving recovery ventilators."
  },
  {
    id: "gk-chokshi",
    title: "G.K. Chokshi Office",
    category: "Commercial & Industrial Facilities",
    metrics: "96 TR"
  },
  {
    id: "incuspaze",
    title: "Incuspaze",
    category: "Commercial & Industrial Facilities",
    metrics: "90 TR"
  },
  {
    id: "ng-patel",
    title: "N.G. Patel Group",
    category: "Commercial & Industrial Facilities",
    metrics: "78 TR"
  },
  {
    id: "harsh-exim",
    title: "Harsh Exim",
    category: "Commercial & Industrial Facilities",
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
    client: "SVKM's NMIMS University",
    location: "Ahmedabad, Gujarat",
    category: "Educational Institutions",
    metrics: "148 TR Capacity",
    image: "/projects/Svkm university.jpg.jpeg",
    description: "Modern climate control design and package HVAC system installations for clean, optimized climate control in university classrooms and administrative blocks."
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
    id: "neptune-lights-sbr",
    title: "Neptune Lights SBR",
    client: "Neptune Lights",
    location: "Ahmedabad, Gujarat",
    category: "Showrooms & Retail",
    metrics: "36 TR Capacity",
    image: "/projects/Neptune lights.jpg.jpeg",
    description: "Architectural ceiling-concealed cassette systems and customized air flow distribution designed for a premium lighting showroom."
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
    client: "Manav Infrastructure",
    location: "Ahmedabad, Gujarat",
    category: "Showrooms & Retail",
    metrics: "749 TR Capacity",
    image: "/projects/agora mall.jpeg",
    description: "Large-scale retail HVAC infrastructure featuring VRF-connected AHUs and centralized ventilation systems, ensuring balanced airflow, energy efficiency, and superior indoor environmental quality."
  },

  // --- Residence / Luxury Villas ---
  {
    id: "avant-living",
    title: "AVANT - evolved living",
    client: "Dwarkesh Anaya Homes LLP",
    location: "Ahmedabad, Gujarat",
    category: "Residence / Luxury Villas",
    metrics: "745 TR Capacity",
    image: "/projects/AVANT  evolved living.jpeg",
    description: "Premium residential climate infrastructure featuring advanced VRF air conditioning systems, delivering energy-efficient cooling, independent zone control, and seamless comfort throughout the development"
  },
  {
    id: "swagat-agacia",
    title: "Swagat Agacia",
    client: "Swagat Developers",
    location: "Gandhinagar, Gujarat",
    category: "Residence / Luxury Villas",
    metrics: "1100 Units",
    image: "/projects/Swagat Agacia.jpg.jpeg",
    description: "High-volume HVAC execution involving the installation of more than 1,100 split air conditioning units, engineered to provide efficient and uniform cooling throughout the development"
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
    category: "Hospitals / Healthcare",
    metrics: "310 TR Capacity",
    image: "/projects/anand surgical.jpeg",
    description: "Negative pressure isolation climate chambers and surgical suite air systems complying with medical safety guidelines."
  },
  {
    id: "alka-hospital",
    title: "Alka Hospital, Bopal",
    category: "Hospitals / Healthcare",
    metrics: "280 TR"
  },
  {
    id: "sadvichar-parivar",
    title: "Sadvichar Parivar Trust",
    category: "Hospitals / Healthcare",
    metrics: "144 TR"
  },
  {
    id: "sanya-gic",
    title: "Sanya GIC Imaging Center",
    category: "Hospitals / Healthcare",
    metrics: "113 TR"
  },
  {
    id: "ratan-hospital",
    title: "Ratan Hospital",
    category: "Hospitals / Healthcare",
    metrics: "75 TR"
  },
  {
    id: "karnavati-hospital",
    title: "Karnavati Hospital",
    category: "Hospitals / Healthcare",
    metrics: "75 TR"
  },
  {
    id: "lt-vihaan",
    title: "L&T Vihaan Medical Center",
    category: "Hospitals / Healthcare",
    metrics: "56 TR"
  },
  {
    id: "tej-eye",
    title: "Tej Eye Hospital",
    client: "Tej Eye Hospital",
    location: "Gandhinagar, Gujarat",
    category: "Hospitals / Healthcare",
    metrics: "54 TR Capacity",
    image: "/projects/Tej Eye.jpg.jpeg",
    description: "Advanced cleanroom air flow layouts and multi-zone VRF climate networks engineered for critical ophthalmology surgical rooms and patient care wards."
  },
  {
    id: "flex-hospital",
    title: "Flex Hospital",
    category: "Hospitals / Healthcare",
    metrics: "22 TR"
  },
  {
    id: "dr-karna",
    title: "Dr. Karna Maheshwari Hospital",
    category: "Hospitals / Healthcare",
    metrics: "16 TR"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-4",
    quote: "to express our sincere gratification for your exemplary services and contribution towards the construction and related development of our bungalow at B6 Divine Highland, Science City Road.\n\nWe value your dedication and commitment and wish all the best for your future endeavors.",
    author: "Paras Patel",
    role: "Bungalow Owner",
    company: "B6 Divine Highland"
  },
  {
    id: "test-1",
    quote: "Intel Air Group executed our software campus cooling layout with absolute precision. Their VRF design delivers quiet, reliable cooling to 300+ developers while optimizing our energy consumption.",
    author: "",
    role: "",
    company: ""
  },
  {
    id: "test-2",
    quote: "Concealed ducting for our high-end commercial offices demands seamless aesthetic integrations. Dhaval Dave and Mihir Shah delivered layouts that fit perfectly with our building's styling.",
    author: "",
    role: "",
    company: ""
  }
];

export const COMPLAINCE_TIMELINE: AchievementTimelineItem[] = [
  {
    year: "2013",
    title: "Firm Establishment",
    description: "Intel Air Group is formed by partners Dhaval Dave and Mihir Shah, establishing three specialized entities: Intel Air Technologies, Intel Enterprises, and Innovative Airconditioners."
  },
  {
    year: "2015",
    title: "Major Commercial Expansion",
    description: "Successfully executed large-scale HVAC installations while strengthening strategic partnerships with leading HVAC manufacturers.",
    images: ["/awards/2.jpeg"]
  },
  {
    year: "2018",
    title: "TOSHIBA National Sales Award",
    description: "Awarded by TOSHIBA for the highest sales dealer of Hi-Wall products (All India)."
  },
  {
    year: "2019",
    title: "TOSHIBA National Cassette & Hi-Wall Awards",
    description: "Awarded by TOSHIBA for the best performance and highest sales dealer of Cassette and Hi-Wall products (All India) at the Zonal Dealers Meet.",
    images: ["/awards/6.jpeg", "/awards/8.jpeg"]
  },
  {
    year: "2021 - 2022",
    title: "TOSHIBA & Carrier Multi-Category National Awards",
    description: "Awarded by TOSHIBA and Carrier for the highest sales revenue across Cassette, Hi-Wall, and Light Commercial (LC) products (All India) at the National Channel Partners Meet.",
    images: ["/awards/3.jpeg", "/awards/4.jpeg", "/awards/5.jpeg"]
  },
  {
    year: "2024 - 2025",
    title: "Mitsubishi Electric VRF Leadership Award",
    description: "Recognized as Gujarat's leading Mitsubishi Electric VRF partner, earning distinction for market leadership and project execution excellence.",
    images: ["/awards/1.jpeg"]
  }
];

export const BRAND_PARTNERS: BrandPartner[] = [
  { name: "Mitsubishi Electric Brand Shop", tier: "Exclusive Authorized Dealer", acronym: "ME", description: "Elite inverter systems and City Multi VRF units with quiet decibels." },
  { name: "Toshiba Climate", tier: "Authorized Service Dealer", acronym: "TS", description: "Legendary Japanese rotary compressor VRF and split architectures." },
  { name: "Carrier Commercial Systems", tier: "Packaged & Chiller Integrator", acronym: "CR", description: "Heavy-duty packaged systems and chilled-water loops for enterprises." },
  { name: "Hitachi Aircon", tier: "Authorized Sales Partner", acronym: "HT", description: "Efficient central ductables and tropical-climate split units." },
  { name: "Blue Star India", tier: "Authorized Enterprise Dealer", acronym: "BS", description: "Ductable splits, VRF networks, and custom AHUs." },
  { name: "Coldwave", tier: "Authorized Partner", acronym: "CW", description: "Advanced commercial cooling and refrigeration solutions." }
];

export const CERTIFICATIONS: CertificationItem[] = [
  { code: "ISHRAE Life", title: "Indian Society of Heating & Refrigeration Members", authority: "National Climate Engineering & HVAC Council" },
  { code: "Mitsubishi Certified", title: "Authorized Exclusive Brand Showroom Certificate", authority: "Mitsubishi Electric India" },
  { code: "LEED AP Compliant", title: "High Efficiency Energy System Design Standards", authority: "Green Building Engineering Protocols" }
];
