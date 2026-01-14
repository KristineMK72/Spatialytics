export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  year: string;
  role: string;
  stack: string[];
  highlights: string[];
  cover?: string; // /images/...
  links?: {
    live?: string;
    repo?: string;
  };
  narrative: {
    problem: string;
    approach: string[];
    outcome: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "native-nations-history-map",
    title: "Native Nations History Map",
    subtitle: "A guided, map-based overview of Indigenous histories with layered storytelling.",
    tags: ["Web GIS", "Story Map", "Leaflet"],
    year: "2026",
    role: "Design + Development",
    stack: ["Next.js", "Leaflet", "GeoJSON", "Vercel"],
    highlights: ["Layer toggles", "Narrative UX", "Mobile-first map UI"],
    links: { live: "https://native-nations-history-map.vercel.app/" },
    narrative: {
      problem:
        "Create an educational map experience that respects context and makes complex history navigable for broad audiences.",
      approach: [
        "Built a map-first UI with narrative panels and clear layer controls",
        "Structured routes and events as data so new content can be added safely",
        "Optimized for performance and usability on mobile devices",
      ],
      outcome: [
        "A clean guided experience that supports learning without overwhelming users",
        "Reusable structure for future story-map releases",
      ],
    },
  },
  {
    slug: "storm-chaser-hub",
    title: "Storm Chaser Hub",
    subtitle: "Interactive hazard mapping + radar overlays for storm awareness.",
    tags: ["Web GIS", "Dashboards"],
    year: "2025",
    role: "Full-stack prototype",
    stack: ["Flask", "Leaflet", "Weather APIs"],
    highlights: ["Live overlays", "Layered hazard zones", "Fast map interactions"],
    narrative: {
      problem:
        "Bring multiple storm data sources into one clear map experience for quick situational awareness.",
      approach: [
        "Designed a layered map UI with quick toggles and focused defaults",
        "Integrated external feeds with consistent styling and UX patterns",
      ],
      outcome: ["A prototype foundation ready to expand into a subscription dashboard."],
    },
  },
  {
    slug: "sd-rainfall-explorer",
    title: "South Dakota Rainfall Explorer",
    subtitle: "Data storytelling dashboard for rainfall patterns and comparisons.",
    tags: ["Dashboards", "Analytics"],
    year: "2025",
    role: "Data + visualization",
    stack: ["R", "ggplot2", "Leaflet", "APIs"],
    highlights: ["Comparisons by region", "Clear visuals", "Decision-friendly insights"],
    narrative: {
      problem: "Make rainfall patterns understandable and comparable for non-technical audiences.",
      approach: [
        "Built clean visual summaries with optional map exploration",
        "Designed the dashboard around questions people actually ask",
      ],
      outcome: ["A clear, shareable tool that turns raw data into decisions."],
    },
  },
];
