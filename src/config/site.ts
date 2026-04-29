// src/config/site.ts
// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE FOR EACH NEW CLIENT SITE
//  Everything else in the project auto-adapts from this config.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  // ── Business Info ──────────────────────────────────────────
  name: "R3 Services",
  tagline: "Commercial HVAC, Refrigeration & Kitchen Equipment Experts",
  phone: "813-214-9780",
  email: "info@r3-services.com",
  address: "Brandon, FL",
  city: "Brandon",
  state: "FL",
  licenseNumber: "LIC# Available Upon Request",

  // ── Branding ───────────────────────────────────────────────
  palette: {
    deep: "#0b0b0d",
    surface: "#141418",
    panel: "#1a1a1f",
    panel2: "#212127",
    border: "rgba(227, 30, 36, 0.3)",
    accent: "#E31E24",
    accent2: "#ff6a6f",
    gold: "#f5c451",
    text: "#f5f5f6",
    muted: "rgba(245,245,246,0.72)",
  },

  // ── Cloudflare R2 ──────────────────────────────────────────
  // Set R2_BASE_URL in your .env file.
  // Images are referenced as paths relative to your site folder.
  // e.g. "/hero.jpg" → https://media.stokeleads.com/epsak/hero.jpg
  r2Folder: "r3-services",   // folder inside your bucket

  // ── SEO ────────────────────────────────────────────────────
  seoTitle:       "R3 Services | Commercial HVAC, Refrigeration & Kitchen Equipment Service",
  seoDescription: "R3 Services provides commercial HVAC, refrigeration, kitchen equipment repair, and preventive maintenance for restaurants and light commercial facilities across Brandon and surrounding Florida areas.",
  seoKeywords:    "commercial HVAC service Brandon FL, restaurant refrigeration repair, kitchen equipment repair, RTU service Florida, preventive maintenance for restaurants",

  // ── Navigation ─────────────────────────────────────────────
  navLinks: [
    { label: "Services",  href: "/#services"  },
    { label: "Industries", href: "/#about" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Reviews",   href: "/#reviews"   },
    { label: "Contact",   href: "/contact"    },
  ],

  // ── Hero Section ───────────────────────────────────────────
  hero: {
    heading:    "Commercial HVAC & Equipment Experts",
    subheading: "R3 Services supports restaurants, foodservice operations, and light commercial facilities with fast HVAC, refrigeration, and kitchen equipment diagnostics, repair, and maintenance.",
    ctaText:    "Call for Priority Service",
    image:      "https://media.stokeleads.com/r3-services/R3-12.avif",
    badges: [
      "Owner-Led Service",
      "Restaurant-Focused Experts",
      "Rapid Commercial Response",
    ],
  },

  // ── Services ───────────────────────────────────────────────
  // Each service becomes its own page at /services/[slug]
  services: [
    {
      slug:        "commercial-hvac-service-repair",
      title:       "Commercial HVAC Service & Repair",
      shortDesc:   "RTU, split-system, and ventilation diagnostics with fast commercial repair support.",
      fullDesc:    "We service rooftop units, split systems, make-up air equipment, and critical ventilation systems for restaurants and light commercial facilities. Our team isolates airflow, electrical, control, and temperature issues quickly so operations stay stable during peak demand.",
      image:       "https://media.stokeleads.com/r3-services/R3-19.avif",
      icon:        "HV",
      highlights:  ["RTU and split-system troubleshooting", "Airflow and temperature stabilization", "Controls and electrical diagnostics"],
    },
    {
      slug:        "commercial-refrigeration-repair",
      title:       "Commercial Refrigeration Repair",
      shortDesc:   "Walk-ins, reach-ins, prep tables, and ice machine service for food safety compliance.",
      fullDesc:    "R3 Services repairs and maintains the refrigeration systems your inventory depends on. We troubleshoot compressor performance, coil restrictions, controller issues, and electrical faults to keep food-safe temperatures consistent in demanding environments.",
      image:       "https://media.stokeleads.com/r3-services/R3-28.avif",
      icon:        "RF",
      highlights:  ["Walk-in cooler and freezer diagnostics", "Prep rail and reach-in temperature control", "Performance restoration to reduce product loss"],
    },
    {
      slug:        "commercial-kitchen-equipment-repair",
      title:       "Commercial Kitchen Equipment Repair",
      shortDesc:   "Hot-side and cold-side equipment troubleshooting for high-volume food operations.",
      fullDesc:    "We support core kitchen equipment including ovens, fryers, ranges, warmers, and refrigeration-based prep systems. From ignition problems to motor failures and electrical controls, our diagnostics are built for uptime in service-critical kitchens.",
      image:       "https://media.stokeleads.com/r3-services/R3-21.avif",
      icon:        "KE",
      highlights:  ["Hot-side and cold-side equipment service", "Electrical and control diagnostics", "Repair-first approach focused on uptime"],
    },
    {
      slug:        "preventive-maintenance-programs",
      title:       "Preventive Maintenance Programs",
      shortDesc:   "Tailored maintenance plans for HVAC, refrigeration, and kitchen equipment systems.",
      fullDesc:    "Our preventive maintenance programs are designed to catch failures early, improve efficiency, and reduce costly downtime. We clean and inspect key components, track performance trends, and provide actionable reporting for smarter maintenance planning.",
      image:       "https://media.stokeleads.com/r3-services/R3-30.avif",
      icon:        "PM",
      highlights:  ["Scheduled inspections and cleaning", "Early-failure detection and reporting", "Custom PM intervals for operational needs"],
    },
  ],

  // ── About Section ──────────────────────────────────────────
  about: {
    heading:   "A Commercial Service Partner, Not a One-Time Vendor.",
    body:      "R3 Services is built around long-term relationships with restaurant operators and commercial facility teams. We focus on practical diagnostics, clear communication, and dependable follow-through that protects daily operations.",
    image:     "https://media.stokeleads.com/r3-services/truck.avif",
    facts: [
      { label: "Primary Focus", value: "Restaurants" },
      { label: "Service Scope", value: "HVAC + Refrigeration + Kitchen Equipment" },
      { label: "Response Mindset", value: "Uptime First" },
      { label: "Coverage", value: "Brandon + Surrounding Areas" },
    ],
  },

  owner: {
    name: "Nathaniel Roddy",
    role: "Owner, R3 Services",
    quote: "Our job is simple: keep critical systems running so your business can keep serving customers.",
    story:
      "Nathaniel Roddy leads R3 Services with a relationship-first service model built for commercial clients who cannot afford avoidable downtime. The team supports restaurants and light commercial operators with responsive diagnostics, practical repair plans, and maintenance programs that help prevent repeat failures.",
  },

  // ── Reviews ────────────────────────────────────────────────
  reviews: [
    {
      name:  "Samantha G.",
      city:  "Brandon, FL",
      stars: 5,
      text:  "Our walk-in cooler was drifting out of temp during lunch rush. R3 diagnosed it quickly and had us stable the same day.",
    },
    {
      name:  "Eddie P.",
      city:  "Tampa, FL",
      stars: 5,
      text:  "They've become our go-to team for HVAC and equipment issues. Great communication and reliable follow-through.",
    },
    {
      name:  "Monica R.",
      city:  "Riverview, FL",
      stars: 5,
      text:  "R3 helped us set up preventive maintenance for multiple systems. We have fewer emergency calls and better consistency.",
    },
    {
      name:  "Carlos T.",
      city:  "Plant City, FL",
      stars: 5,
      text:  "When our hot-side equipment failed before dinner service, Nathaniel's team moved fast and got us operational.",
    },
    {
      name:  "Ivy L.",
      city:  "Valrico, FL",
      stars: 5,
      text:  "Their diagnostics are thorough and honest. You get clear options, not upsells.",
    },
    {
      name:  "Ahmed J.",
      city:  "Lakeland, FL",
      stars: 5,
      text:  "We rely on R3 for refrigeration and prep-line issues. They understand restaurant pressure and respond accordingly.",
    },
  ],

  // ── Service Areas ──────────────────────────────────────────
  serviceAreas: [
    "Brandon", "Tampa", "Riverview", "Valrico",
    "Plant City", "Lakeland", "Apollo Beach", "Seffner",
    "Temple Terrace", "Wesley Chapel",
  ],

  serviceAreaRegions: [
    {
      slug: "central-hillsborough-core",
      title: "Central Hillsborough Core",
      blurb: "Fast-response support for restaurants and light commercial facilities with high daily equipment loads.",
      locations: ["Brandon", "Tampa", "Riverview", "Valrico", "Seffner", "Temple Terrace"],
    },
    {
      slug: "eastern-corridor",
      title: "Eastern Corridor",
      blurb: "Commercial HVAC and refrigeration support for growing foodservice and retail corridors.",
      locations: ["Plant City", "Lakeland", "Dover", "Lithia", "Mulberry", "Auburndale"],
    },
    {
      slug: "southshore-and-north-suburbs",
      title: "Southshore and North Suburbs",
      blurb: "Preventive maintenance and repair programs designed to reduce emergency failures in busy operations.",
      locations: ["Apollo Beach", "Sun City Center", "Wesley Chapel", "Lutz", "New Tampa", "Ruskin"],
    },
  ],

  map: {
    title: "Find Us on Google Maps",
    subtitle: "Serving Brandon and surrounding Florida service areas.",
    image: "https://media.stokeleads.com/r3-services/R3-20.avif",
    link: "https://www.google.com/maps/search/?api=1&query=Brandon+FL",
  },

  // ── Footer ─────────────────────────────────────────────────
  footerText: "© 2026 R3 Services. Commercial HVAC, Refrigeration, Kitchen Equipment & Preventive Maintenance.",

  // ── Social (optional — set to empty string to hide) ────────
  social: {
    facebook:  "",
    instagram: "",
    nextdoor:  "",
  },
};

export type SiteConfig = typeof SITE;
