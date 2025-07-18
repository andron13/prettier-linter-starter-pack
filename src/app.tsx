import type { FC } from "react";

import { AnimatedBackground } from "@/entities/animated-background";
import { Footer } from "@/entities/footer";
import { Header } from "@/entities/header";
import { TemplateHighlights } from "@/entities/template-highlights";
import { WorkflowFeatures } from "@/entities/workflow-features";

const App: FC = () => (
  <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
    <AnimatedBackground />

    <div className="relative z-10 flex min-h-screen flex-col">
      <Header />

      <main className="flex flex-1 flex-col items-center justify-center px-8 py-16 text-center">
        <div className="mx-auto max-w-4xl">
          <WorkflowFeatures />
          <TemplateHighlights />
        </div>
      </main>

      <Footer />
    </div>
  </div>
);

export default App;
