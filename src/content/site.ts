export const site = {
  name: "Derek Yendoh",
  title: "AI/ML Software Engineer",
  tagline: "HealthTech · EdTech · MLOps",
  pitch:
    "I build AI systems that work in the real world — from model training to clinical deployment.",
  location: "Accra, Ghana",
  email: "yendohderek@gmail.com",
  degree: "BSc Computer Science — [Your Institution]",
  github: "https://github.com/Yendoh-Derek",
  linkedin: "https://www.linkedin.com/in/derek-yendoh-4a6174275",
  metaDescription:
    "Derek Yendoh — AI/ML Software Engineer from Accra, Ghana. Building intelligent systems for HealthTech and EdTech.",
  url: "https://yendoh-derek.github.io",
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export type SectionId = "hero" | "about" | "projects" | "skills" | "experience" | "contact";

export const sectionIds: SectionId[] = [
  "hero",
  "about",
  "projects",
  "skills",
  "experience",
  "contact",
];
