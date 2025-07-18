import type { FC } from "react";

import { FeatureCard } from "@/entities/feature-card";

export const WorkflowFeatures: FC = () => (
  <div className="mb-8 rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-lg transition-all duration-500 hover:scale-105 hover:shadow-purple-500/20">
    <div className="mb-6 flex items-center justify-center">
      <span className="mr-4 text-5xl">⚡</span>
      <h2 className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
        Development Workflow
      </h2>
    </div>
    <div className="mt-8 grid gap-6 md:grid-cols-3">
      <FeatureCard
        colorClass="text-blue-300"
        description="Code quality and error prevention"
        icon="🎯"
        title="ESLint"
      />
      <FeatureCard
        colorClass="text-purple-300"
        description="Consistent code formatting"
        icon="✨"
        title="Prettier"
      />
      <FeatureCard
        colorClass="text-pink-300"
        description="Git hooks automation"
        icon="🐺"
        title="Husky"
      />
    </div>
  </div>
);
