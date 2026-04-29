// src/config/site.ts
// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE FOR EACH NEW CLIENT SITE
//  Everything else in the project auto-adapts from this config.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  // ── Business Info ──────────────────────────────────────────
  name: "Sunwave Roofing & Exteriors",
  tagline: "Bright, Durable Roofing for Florida Homes",
  phone: "(813) 555-0274",
  email: "hello@sunwaveroofingfl.com",
  address: "1851 Gulf to Bay Blvd, Clearwater, FL 33765",
  city: "Clearwater",
  state: "FL",
  licenseNumber: "CCC1337642",

  // ── Branding ───────────────────────────────────────────────
  palette: {
    deep: "#090f1f",
    surface: "#111b33",
    panel: "#172847",
    panel2: "#203663",
    border: "rgba(149, 176, 255, 0.22)",
    accent: "#ff6b35",
    accent2: "#39e5c5",
    gold: "#ffd166",
    text: "#f2f7ff",
    muted: "rgba(242,247,255,0.66)",
  },

  // ── Cloudflare R2 ──────────────────────────────────────────
  // Set R2_BASE_URL in your .env file.
  // Images are referenced as paths relative to your site folder.
  // e.g. "/hero.jpg" → https://media.stokeleads.com/epsak/hero.jpg
  r2Folder: "roofing",   // folder inside your bucket

  // ── SEO ────────────────────────────────────────────────────
  seoTitle:       "Sunwave Roofing & Exteriors | Roof Repair & Installation Across Florida",
  seoDescription: "Florida roofing specialists for emergency roof repair, full roof replacement, storm restoration, inspections, and new roof installation.",
  seoKeywords:    "roof repair Florida, roof installation Florida, storm damage roofing, metal roof Florida, shingle roof replacement",

  // ── Navigation ─────────────────────────────────────────────
  navLinks: [
    { label: "Services",  href: "/#services"  },
    { label: "Service Areas", href: "/service-areas" },
    { label: "About",     href: "/#about"     },
    { label: "Reviews",   href: "/#reviews"   },
    { label: "Contact",   href: "/contact"    },
  ],

  // ── Hero Section ───────────────────────────────────────────
  hero: {
    heading:    "Florida Roof Repair & Installation",
    subheading: "Sunwave Roofing & Exteriors helps homeowners statewide with leak repair, storm restoration, and complete roof replacements using premium materials built for Florida weather.",
    ctaText:    "Call for a Free Roof Inspection",
    image:      "https://media.stokeleads.com/roofing/pexels-chris-the-island-3570397-32270941.avif",
    badges: [
      "Licensed Florida Contractor",
      "20+ Years Experience",
      "Storm Response Team",
    ],
  },

  // ── Services ───────────────────────────────────────────────
  // Each service becomes its own page at /services/[slug]
  services: [
    {
      slug:        "emergency-roof-leak-repair",
      title:       "Emergency Roof Leak Repair",
      shortDesc:   "Fast leak detection, interior protection, and permanent roof repair solutions.",
      fullDesc:    "When water is entering your home, our rapid-response crew secures the area, locates the source, and performs long-lasting repairs. We handle shingle, tile, metal, and low-slope systems with Florida code-compliant methods and clean documentation for insurance support.",
      image:       "https://media.stokeleads.com/roofing/pexels-cmoon-12558933.avif",
      icon:        "LR",
      highlights:  ["Same-day emergency dispatch", "Moisture and decking checks", "Permanent repairs, not quick patches"],
    },
    {
      slug:        "full-roof-replacement",
      title:       "Full Roof Replacement",
      shortDesc:   "Complete tear-off and installation for aging or heavily damaged roofing systems.",
      fullDesc:    "If your roof is at end-of-life, we provide full replacement with transparent scope, ventilation upgrades, and premium underlayment. Our team keeps the project organized from permit to final walkthrough so you get a roof that looks great and performs for years.",
      image:       "https://media.stokeleads.com/roofing/pexels-rstephens-33404248.avif",
      icon:        "RR",
      highlights:  ["Shingle, tile, and metal options", "Code-compliant installation", "Manufacturer-backed warranties"],
    },
    {
      slug:        "new-roof-installation",
      title:       "New Roof Installation",
      shortDesc:   "Roof installation for new builds, additions, and major renovation projects.",
      fullDesc:    "Building a new home or expanding your property? We install high-performance roofing systems that balance curb appeal, storm durability, and long-term value. We coordinate with builders and project managers to keep your timeline moving.",
      image:       "https://media.stokeleads.com/roofing/pexels-chris-the-island-3570397-32270941.avif",
      icon:        "NR",
      highlights:  ["New construction specialists", "Energy-efficient system design", "Builder coordination and scheduling"],
    },
    {
      slug:        "storm-damage-roof-restoration",
      title:       "Storm Damage Roof Restoration",
      shortDesc:   "Hail, wind, and hurricane roof restoration with photo documentation support.",
      fullDesc:    "Florida storms can compromise shingles, flashing, and underlayment quickly. Our restoration team performs detailed inspections, emergency tarping, and full repair plans to restore structural integrity while helping simplify the insurance claim process.",
      image:       "https://media.stokeleads.com/roofing/pexels-guvo59-31762405.avif",
      icon:        "SR",
      highlights:  ["Storm and hurricane response", "Insurance-ready photos and reports", "Temporary protection and full restoration"],
    },
    {
      slug:        "roof-inspections-maintenance",
      title:       "Roof Inspections & Preventive Maintenance",
      shortDesc:   "Scheduled roof checkups to catch issues early and extend roof lifespan.",
      fullDesc:    "Routine inspections are one of the smartest ways to avoid expensive damage. We inspect flashing, sealants, valleys, vents, and drainage paths, then provide clear recommendations and prioritized repair options based on urgency.",
      image:       "https://media.stokeleads.com/roofing/pexels-rstephens-33404981.avif",
      icon:        "IN",
      highlights:  ["Detailed condition reports", "Preventive maintenance plans", "Ideal for homeowners and property managers"],
    },
    {
      slug:        "skylight-flashing-upgrades",
      title:       "Skylight & Flashing Upgrades",
      shortDesc:   "Leak-resistant skylight replacement and precision flashing improvements.",
      fullDesc:    "Skylights and flashing points are common failure areas in coastal weather. We install and upgrade these details for better waterproofing, improved natural light, and long-term roof performance.",
      image:       "https://media.stokeleads.com/roofing/pexels-ninobur-15964928.avif",
      icon:        "SF",
      highlights:  ["Skylight replacement options", "Chimney and valley flashing", "Leak prevention at critical roof joints"],
    },
  ],

  // ── About Section ──────────────────────────────────────────
  about: {
    heading:   "Local Roofing Team. Not a Call Center.",
    body:      "When you call Sunwave Roofing & Exteriors, you speak with a local team that understands Florida homes. Sunwave Roofing & Exteriors is owner-led and community-focused, with clear communication, honest recommendations, and clean workmanship from inspection through final walkthrough.",
    image:     "https://media.stokeleads.com/roofing/miguel.avif",
    facts: [
      { label: "Years in Business", value: "20+" },
      { label: "Roof Projects Completed", value: "7,200+" },
      { label: "5-Star Reviews",    value: "1,100+" },
      { label: "Average Response Time", value: "< 2 hrs" },
    ],
  },

  owner: {
    name: "Miguel Alvarez",
    role: "Founder, Sunwave Roofing & Exteriors",
    quote: "Quality roofing is not about cutting corners. It is about doing every detail right, every time.",
    story:
      "Miguel Alvarez built Sunwave Roofing & Exteriors to bring honest, high-quality roofing service to Florida homeowners. After years on crews that prioritized speed over craftsmanship, he started a company focused on proper installation, clear communication, and fair pricing. Miguel and his team serve families across Clearwater and surrounding regions with the same standard they would expect on their own homes: no pressure, no upsells, and no shortcuts.",
  },

  // ── Reviews ────────────────────────────────────────────────
  reviews: [
    {
      name:  "Linda M.",
      city:  "Tampa, FL",
      stars: 5,
      text:  "After a heavy storm we had active leaks in two rooms. Sunwave showed up fast, tarped everything, and completed the repair within days. Super organized and easy to work with.",
    },
    {
      name:  "Nina R.",
      city:  "Orlando, FL",
      stars: 5,
      text:  "We replaced our entire roof and the process felt effortless. Daily updates, clean job site, and the finished roof looks incredible.",
    },
    {
      name:  "Carlos & Jamie T.",
      city:  "Naples, FL",
      stars: 5,
      text:  "Their inspection report was the clearest quote we received. No pressure, no vague line items, just honest recommendations and solid workmanship.",
    },
    {
      name:  "Avery P.",
      city:  "Jacksonville, FL",
      stars: 5,
      text:  "From first call to final walkthrough, every person on the crew was professional. They finished on time and handled all permit details for us.",
    },
    {
      name:  "Devon L.",
      city:  "Sarasota, FL",
      stars: 5,
      text:  "They gave us a thorough roof inspection with photos and clear explanations. We fixed issues early and avoided a much bigger repair later.",
    },
    {
      name:  "Priya H.",
      city:  "Fort Lauderdale, FL",
      stars: 5,
      text:  "Our skylight had leaked for months. Sunwave replaced the flashing and sealed everything properly. Zero leaks since the repair.",
    },
    {
      name:  "Marcus J.",
      city:  "Tallahassee, FL",
      stars: 5,
      text:  "Best roofing experience we have had. Their quote was detailed, pricing was fair, and the crew kept our yard clean every day.",
    },
    {
      name:  "Hannah B.",
      city:  "West Palm Beach, FL",
      stars: 5,
      text:  "After wind damage, they documented every section of the roof and helped us understand what the insurance adjuster needed. Great communication.",
    },
    {
      name:  "Derrick S.",
      city:  "Fort Myers, FL",
      stars: 5,
      text:  "They installed our new metal roof and the finish looks incredible. The team was punctual, respectful, and very organized.",
    },
    {
      name:  "Maya C.",
      city:  "Orlando, FL",
      stars: 5,
      text:  "We called for an emergency leak and they had temporary protection up the same day. Permanent repair was done quickly and done right.",
    },
    {
      name:  "Owen K.",
      city:  "Pensacola, FL",
      stars: 5,
      text:  "From inspection to final cleanup, everything felt professional. They explained options clearly and never pressured us into upgrades.",
    },
    {
      name:  "Elena V.",
      city:  "Tampa, FL",
      stars: 5,
      text:  "Excellent workmanship and strong attention to detail around vents and valleys. We finally have peace of mind during heavy rain.",
    },
  ],

  // ── Service Areas ──────────────────────────────────────────
  serviceAreas: [
    "Tampa Bay", "Orlando", "Jacksonville", "Miami",
    "Fort Lauderdale", "Fort Myers", "Sarasota", "Naples",
    "West Palm Beach", "Pensacola",
  ],

  serviceAreaRegions: [
    {
      slug: "tampa-bay-clearwater",
      title: "Tampa Bay & Clearwater",
      blurb: "Coastal roofing systems designed for heat, humidity, and storm-season rain events.",
      locations: ["Clearwater", "St. Petersburg", "Tampa", "Largo", "Palm Harbor", "Dunedin"],
    },
    {
      slug: "central-florida",
      title: "Central Florida",
      blurb: "Leak repair, replacement, and inspections for high-sun exposure and seasonal storm damage.",
      locations: ["Orlando", "Kissimmee", "Winter Garden", "Sanford", "Lake Mary", "Clermont"],
    },
    {
      slug: "south-florida",
      title: "South Florida",
      blurb: "Roofing solutions for wind-driven rain, intense UV exposure, and coastal weather conditions.",
      locations: ["Miami", "Fort Lauderdale", "West Palm Beach", "Hollywood", "Boca Raton", "Pembroke Pines"],
    },
    {
      slug: "southwest-florida",
      title: "Southwest Florida",
      blurb: "Reliable roof installation and storm restoration for growing residential neighborhoods.",
      locations: ["Fort Myers", "Naples", "Bonita Springs", "Cape Coral", "Estero", "Lehigh Acres"],
    },
    {
      slug: "north-florida-panhandle",
      title: "North Florida & Panhandle",
      blurb: "Emergency roof services and long-lifespan replacements for inland and coastal communities.",
      locations: ["Jacksonville", "Pensacola", "Tallahassee", "Panama City", "Gainesville", "Orange Park"],
    },
  ],

  map: {
    title: "Find Us on Google Maps",
    subtitle: "Serving Clearwater and surrounding Florida service areas.",
    image: "https://media.stokeleads.com/roofing/SCR-20260428-gplb-3.avif",
    link: "https://www.google.com/maps/search/?api=1&query=1851+Gulf+to+Bay+Blvd+Clearwater+FL+33765",
  },

  // ── Footer ─────────────────────────────────────────────────
  footerText: "© 2026 Sunwave Roofing & Exteriors. Licensed & Insured. Florida Lic #CCC1337642.",

  // ── Social (optional — set to empty string to hide) ────────
  social: {
    facebook:  "https://facebook.com/sunwaveroofingfl",
    instagram: "https://instagram.com/sunwaveroofingfl",
    nextdoor:  "",
  },
};

export type SiteConfig = typeof SITE;
