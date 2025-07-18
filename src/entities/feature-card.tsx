import type { FC } from "react";

interface FeatureCardProps {
  colorClass: string;
  description: string;
  icon: string;
  title: string;
}

export const FeatureCard: FC<FeatureCardProps> = ({
  colorClass,
  description,
  icon,
  title,
}) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:bg-white/10">
    <div className="mb-3 text-3xl">{icon}</div>
    <h3 className={`mb-2 text-xl font-semibold ${colorClass}`}>{title}</h3>
    <p className="text-sm text-gray-300">{description}</p>
  </div>
);
