export type SkillCluster = {
  label: string;
  subtitle: string;
  tools: string[];
};

export const skillClusters: SkillCluster[] = [
  {
    label: "Machine Learning",
    subtitle: "The AI and prediction layer",
    tools: [
      "PyTorch",
      "Scikit-learn",
      "XGBoost",
      "CatBoost",
      "TabNet",
      "SHAP",
      "HuggingFace Transformers",
    ],
  },
  {
    label: "MLOps & Backend",
    subtitle: "The infrastructure that makes it run",
    tools: [
      "FastAPI",
      "MLflow",
      "Docker",
      "PostgreSQL",
      "Alembic",
      "Pydantic",
      "Render",
      "Uvicorn",
    ],
  },
  {
    label: "Frontend & Mobile",
    subtitle: "The interfaces people interact with",
    tools: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Flutter",
      "Dart",
      "HTML/SCSS",
    ],
  },
];
