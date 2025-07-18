import type { FC } from "react";

const badges = [
  { gradient: "from-blue-500 to-purple-500", label: "Zero Config" },
  { gradient: "from-green-500 to-teal-500", label: "TypeScript Ready" },
  { gradient: "from-pink-500 to-red-500", label: "Team Friendly" },
];

export const TemplateHighlights: FC = () => (
  <div className="rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-lg">
    <h3 className="mb-4 text-center text-2xl font-bold">
      <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
        Ready-to-use Configuration Template
      </span>
    </h3>
    <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300">
      This repository provides a complete development workflow setup that
      ensures consistent code quality across your team. Automated formatting,
      linting, and git hooks help you maintain clean, readable code without the
      hassle.
    </p>
    <div className="mt-8 flex flex-wrap justify-center gap-4">
      {badges.map((b) => (
        <div
          className={`rounded-full bg-gradient-to-r ${b.gradient} px-4 py-2 text-sm font-semibold text-white shadow-lg`}
          key={b.label}
        >
          {b.label}
        </div>
      ))}
    </div>
  </div>
);
