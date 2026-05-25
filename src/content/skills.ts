export type SkillTool = {
  name: string;
  description: string;
};

export type SkillCluster = {
  label: string;
  subtitle: string;
  tools: SkillTool[];
};

export const skillClusters: SkillCluster[] = [
  {
    label: "Machine Learning",
    subtitle: "The AI and prediction layer",
    tools: [
      {
        name: "PyTorch",
        description:
          "Deep learning framework used for DiaTrack ensemble model training. Handles dynamic computation graphs, GPU acceleration, and complex multi-task learning architectures.",
      },
      {
        name: "Scikit-learn",
        description:
          "Classical ML library for data preprocessing, feature engineering, and baseline models. Used for exploratory analysis and validation metrics in DiaTrack.",
      },
      {
        name: "XGBoost",
        description:
          "Gradient boosting engine serving as the meta-learner in DiaTrack's stacked ensemble. Combines predictions from CatBoost, HistGradientBoosting, and TabNet base models.",
      },
      {
        name: "CatBoost",
        description:
          "Specialized boosting algorithm handling categorical features naturally. A key base model in DiaTrack for capturing non-linear patterns in clinical features.",
      },
      {
        name: "TabNet",
        description:
          "Attention-based neural network for tabular data. Used as a differentiable base model in DiaTrack to learn complex feature interactions.",
      },
      {
        name: "SHAP",
        description:
          "Model interpretability library for explaining predictions. Critical for DiaTrack to show clinicians the reasoning behind risk scores using Shapley values.",
      },
      {
        name: "HuggingFace Transformers",
        description:
          "Transformer library for NLP tasks. Experimented with BERT embeddings for clinical text processing and medical knowledge integration.",
      },
    ],
  },
  {
    label: "MLOps & Backend",
    subtitle: "The infrastructure that makes it run",
    tools: [
      {
        name: "FastAPI",
        description:
          "Async Python web framework for DiaTrack backend. Chosen for automatic OpenAPI docs, Pydantic validation, and clean SHAP interpretability endpoints.",
      },
      {
        name: "MLflow",
        description:
          "Experiment tracking and model registry for ML workflows. Used to log DiaTrack model metrics, parameters, and manage ensemble component versions.",
      },
      {
        name: "Docker",
        description:
          "Containerization for reproducible deployments. Both DiaTrack backend and ML pipeline run in Docker containers for consistency across environments.",
      },
      {
        name: "PostgreSQL",
        description:
          "Primary database for DiaTrack. Stores patient data, predictions, clinician sessions, and model versioning metadata with strict HIPAA compliance.",
      },
      {
        name: "Alembic",
        description:
          "Database migration tool for schema versioning. Manages DiaTrack database evolution as clinical feature requirements and data structures changed.",
      },
      {
        name: "Pydantic",
        description:
          "Data validation using Python type hints. Enforces strict data schemas for patient inputs and model outputs in DiaTrack API.",
      },
      {
        name: "Render",
        description:
          "Cloud deployment platform for DiaTrack backend and dashboard. Provides PostgreSQL hosting, CI/CD integration, and environment management.",
      },
      {
        name: "Uvicorn",
        description:
          "ASGI server for running FastAPI applications. Handles concurrent requests for DiaTrack's model inference and clinical dashboard interactions.",
      },
    ],
  },
  {
    label: "Frontend & Mobile",
    subtitle: "The interfaces people interact with",
    tools: [
      {
        name: "Next.js",
        description:
          "React framework for DiaTrack clinician dashboard. Uses App Router, server components, and API routes for seamless backend integration and SEO.",
      },
      {
        name: "TypeScript",
        description:
          "Strongly-typed JavaScript for type safety across all web projects. Reduces runtime errors in DiaTrack frontend and catching data schema mismatches early.",
      },
      {
        name: "Tailwind CSS",
        description:
          "Utility-first CSS framework for rapid UI development. Powers the styling of DiaTrack dashboard, patient portal, and portfolio website with consistent dark aesthetic.",
      },
      {
        name: "Flutter",
        description:
          "Cross-platform mobile framework for DiaTrack patient app. Allows single codebase deployment to iOS and Android with native performance.",
      },
      {
        name: "Dart",
        description:
          "Programming language for Flutter. Used to build DiaTrack mobile app features like risk score visualization, health tracking, and clinician communication.",
      },
      {
        name: "HTML/SCSS",
        description:
          "Foundation web technologies for semantic markup and advanced styling. Used alongside Tailwind for custom animations and responsive layouts.",
      },
    ],
  },
];
