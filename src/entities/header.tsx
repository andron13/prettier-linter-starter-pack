import type { FC } from "react";

export const Header: FC = () => (
  <header className="border-b border-white/20 bg-white/10 py-8 text-center shadow-2xl backdrop-blur-lg">
    <div className="mb-4 animate-bounce">
      <span className="text-6xl">🧰</span>
    </div>
    <h1 className="mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
      ESLint + Prettier + Husky
    </h1>
    <p className="text-lg font-light text-purple-200">
      A modern starter setup for clean and consistent code
    </p>
  </header>
);
