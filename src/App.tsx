import { Hero } from "@/components/Hero";
import { Problem, Services, Portfolio, HowItWorks, CTA } from "@/components/Sections";

export default function App() {
  return (
    <main className="min-h-screen antialiased" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
      <Hero />
      <Problem />
      <Services />
      <Portfolio />
      <HowItWorks />
      <CTA />
    </main>
  );
}
