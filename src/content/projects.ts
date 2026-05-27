export type ProjectDomain = "HealthTech" | "ML Research" | "Open Source";

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectSection = {
  title: string;
  body: string;
};

export type Project = {
  id: string;
  featured?: boolean;
  domains: ProjectDomain[];
  title: string;
  plainSummary: string;
  technicalSummary: string;
  stack: string[];
  links: ProjectLink[];
  metrics?: string;
  contextNote?: string;
  sections: ProjectSection[];
};

export const projects: Project[] = [
  {
    id: "diatrack",
    featured: true,
    domains: ["HealthTech"],
    title: "DiaTrack — Clinical Decision Support for Type 2 Diabetes",
    plainSummary:
      "An AI system that helps clinicians assess diabetes risk — and helps patients understand their own health — built for real clinical use.",
    technicalSummary:
      "Stacked ensemble (CatBoost + HistGradientBoosting + TabNet → XGBoost) with SHAP interpretability, served via FastAPI, with a Next.js clinician dashboard and Flutter patient app.",
    stack: [
      "PyTorch",
      "FastAPI",
      "Next.js",
      "Flutter",
      "PostgreSQL",
      "SHAP",
      "XGBoost",
      "Render",
    ],
    metrics: "AUC: 0.978 · Accuracy: 98%",
    links: [
      {
        label: "GitHub: Backend",
        href: "https://github.com/Yendoh-Derek/DiaTrack-Backend",
      },
      {
        label: "GitHub: Web App",
        href: "https://github.com/Yendoh-Derek/DiaTrack-Web-App",
      },
      {
        label: "GitHub: Mobile App",
        href: "https://github.com/Yendoh-Derek/DiaTrack-Mobile-App",
      },
    ],
    sections: [
      {
        title: "The Problem",
        body: "Type 2 Diabetes is a growing crisis, especially in sub-Saharan Africa, where early diagnosis infrastructure is limited. DiaTrack was built to give clinicians a fast, explainable risk assessment tool — and to give patients a direct window into their own health data.",
      },
      {
        title: "What I Built",
        body: "Three interconnected systems: a clinician-facing web dashboard (Next.js) for patient management and risk review; a patient-facing mobile app (Flutter) for viewing predictions and recommendations; and a FastAPI backend handling authentication, database operations, ML inference, and SHAP explanations. The ML pipeline uses a stacked ensemble approach — base models generate predictions which feed into an XGBoost meta-learner — with a LightGBM surrogate for SHAP interpretability.",
      },
      {
        title: "The Hard Part",
        body: "Getting explainability right was the most challenging piece. A risk score alone isn't useful to a clinician — they need to know why. Using a LightGBM surrogate model to generate SHAP values that were faithful enough to the stacked ensemble's logic, while still being fast enough for real-time API responses, required significant iteration.",
      },
      {
        title: "What's Next",
        body: "Automated lab data ingestion, offline prediction mode for the mobile app, and multi-language support (English + Twi) for broader accessibility in Ghana.",
      },
    ],
  },
  {
    id: "ml-model-cards",
    domains: ["ML Research", "Open Source"],
    title:
      "Reinforcement Learning Model Recommendation from Hugging face catalog",
    plainSummary:
      "A pipeline that automatically enriches AI model documentation from the HuggingFace Hub — making models easier to discover and evaluate.",
    technicalSummary:
      "Python pipeline using the HuggingFace API for metadata extraction, feature engineering (binning, ratios, risk flags), and parquet-based storage.",
    stack: [
      "Python",
      "HuggingFace",
      "Pandas",
      "Feature Engineering",
      "Jupyter",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Yendoh-Derek/LLM-Recommender-System.git",
      },
    ],
    contextNote: "A model recommendations system using Reinforcement Learning",
    sections: [
      {
        title: "The Problem",
        body: "Model cards on the HuggingFace Hub often lack structured metadata that makes comparison and discovery easy. This project enriches model documentation with engineered features derived from available metadata.",
      },
      {
        title: "What I Built",
        body: "A Python pipeline that pulls model metadata via the HuggingFace API, applies feature engineering (binning, ratios, risk flags), and stores results in parquet for downstream analysis and search.",
      },
      {
        title: "Context",
        body: "Buit using the Soft Actor Critic (SAC) algorithm, the system learns to recommend models based on user interactions and feedback, optimizing for relevance and diversity in recommendations over time.",
      },
    ],
  },
  {
    id: "prompt-engineering-framework",
    domains: ["Open Source"],
    title: "Prompt Engineering Framework",
    plainSummary:
      "A production-grade framework for teams — shared standards, reusable templates, and department-specific prompt libraries for consistent AI workflows.",
    technicalSummary:
      "CRISP prompt model, technique templates (CoT, few-shot, RAG), evaluation rubrics, and governed contribution workflow across customer service, HR, finance, marketing, and engineering.",
    stack: [
      "Markdown",
      "Prompt Design",
      "AI Governance",
      "RAG",
      "Chain-of-Thought",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Yendoh-Derek/Prompt-Engineering-Framework",
      },
    ],
    sections: [
      {
        title: "The Problem",
        body: "Most teams use AI inconsistently — different prompts for the same task, varying outputs, and no shared standards or way to improve over time.",
      },
      {
        title: "What I Built",
        body: "An open-source framework with the CRISP model for prompt anatomy, reusable templates by technique, department-organised prompt libraries, writing and governance guidelines, and an evaluation rubric with testing checklists.",
      },
      {
        title: "Who It Helps",
        body: "Teams adopting AI for the first time, AI leads setting org-wide standards, and anyone moving beyond one-off ChatGPT copy-paste into auditable, repeatable workflows.",
      },
    ],
  },
  {
    id: "cardiometabolic-risk-wearables",
    domains: ["HealthTech", "ML Research"],
    title: "Cardiometabolic Risk System for Wearables",
    plainSummary:
      "Self-supervised learning pipeline that estimates cardiometabolic risk from photoplethysmography (PPG) signals captured on wearables.",
    technicalSummary:
      "1D ResNet encoder–decoder (4M params) with multi-loss training (MSE + SSIM + FFT) on MIMIC-III matched PPG data; Colab training pipeline, YAML configs, and 39 automated tests.",
    stack: ["PyTorch", "Python", "Jupyter", "MIMIC-III", "SSL", "MLflow"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Yendoh-Derek/Cardiometabolic-Risk-System-for-Wearables",
      },
    ],
    sections: [
      {
        title: "The Problem",
        body: "Wearable PPG signals are abundant but labels for cardiometabolic risk are scarce. Self-supervised pretraining can learn useful representations before downstream clinical tasks.",
      },
      {
        title: "What I Built",
        body: "A Colab-ready training stack: ResNet encoder (75K→512 latent), transposed decoder for reconstruction, combined temporal and frequency losses, lazy-loading dataloaders, mixed-precision training with gradient accumulation, and phase-gated notebooks from exploration through SSL pretraining.",
      },
      {
        title: "The Hard Part",
        body: "Balancing pixel-level reconstruction (MSE), morphological fidelity (SSIM), and heart-rate preservation in the frequency domain (FFT) so representations remain clinically meaningful rather than over-smoothed.",
      },
    ],
  },
];
