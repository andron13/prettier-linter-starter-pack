import type { FC } from "react";

export const AnimatedBackground: FC = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -top-40 -right-40 h-96 w-96 animate-pulse rounded-full bg-purple-500 opacity-20 mix-blend-multiply blur-xl filter" />
    <div className="absolute -bottom-40 -left-40 h-96 w-96 animate-pulse rounded-full bg-blue-500 opacity-20 mix-blend-multiply blur-xl filter delay-1000" />
    <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform animate-pulse rounded-full bg-indigo-500 opacity-10 mix-blend-multiply blur-xl filter delay-500" />
  </div>
);
