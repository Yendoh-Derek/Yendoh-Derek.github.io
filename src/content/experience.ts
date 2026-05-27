export type ExperienceBlock = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export const experienceBlocks: ExperienceBlock[] = [
  {
    title: "AI/ML Engineering",
    paragraphs: [
      "Currently working as an AI/ML Engineer at 4th IR, where I build intelligent systems across healthcare and enterprise use cases. My work involves LLM applications, RAG systems, AI agents, FastAPI backends, voice AI workflows, and scalable AI infrastructure designed for real-world deployment.",
    ],
  },
  {
    title: "Open Source & Applied AI",
    paragraphs: [
      "As an open-source contributor with Ghana NLP, I contribute to initiatives advancing AI and natural language technologies within the African ecosystem. I'm particularly interested in practical AI systems that are accessible, efficient, and locally relevant.",
    ],
  },
  {
    title: "Startup & Product Building",
    paragraphs: [
      "Beyond engineering, I've spent years experimenting with startup ideas across healthcare and education. One project explored an AI tutoring system for Ghanaian students optimized for low-connectivity environments using edge AI and offline-first architectures. Another focuses on AI-powered remote health monitoring for chronic disease and maternal care using wearable devices and predictive models.",
      "These experiences taught me how to think beyond code — balancing technical architecture, product decisions, infrastructure constraints, user needs, and team dynamics while building under uncertainty.",
    ],
  },
  {
    title: "Healthcare Innovation",
    paragraphs: [
      "Through the Mastercard African Health Collaborative Program at Kwame Nkrumah University of Science and Technology, I received support for an early-stage health technology initiative focused on preventive healthcare and AI-driven monitoring systems.",
    ],
  },
  {
    title: "Technical Interests",
    paragraphs: ["My current interests include:"],
    bullets: [
      "AI Agents & Agentic Systems",
      "LLM Infrastructure",
      "RAG Architectures",
      "Voice AI",
      "Edge AI",
      "Healthcare AI",
      "Backend Systems Engineering",
      "Applied Machine Learning",
    ],
  },
];
