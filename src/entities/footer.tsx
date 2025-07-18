import type { FC } from "react";

export const Footer: FC = () => (
  <footer className="border-t border-white/10 bg-white/5 py-6 text-center backdrop-blur-lg">
    <div className="flex items-center justify-center space-x-2 text-purple-200">
      <span>Created with</span>
      <span className="animate-pulse text-xl text-red-400">❤️</span>
      <span>for developers</span>
      <span className="mx-2 text-purple-400">|</span>
      <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold text-transparent">
        Fork it and start coding
      </span>
    </div>
  </footer>
);
