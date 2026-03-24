import Hero from "@/components/home/Hero";
import WhyChooseMe from "@/components/home/WhyChooseMe";
import TreatmentPreview from "@/components/home/TreatmentPreview";
import Results from "@/components/home/Results";
import ReviewsSection from "@/components/home/ReviewsSection";
import AboutSection from "@/components/home/AboutSection";
import FAQSection from "@/components/home/FAQSection";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        
        <ScrollReveal delay={0.1}>
          <WhyChooseMe />
        </ScrollReveal>

        <ScrollReveal>
          <TreatmentPreview />
        </ScrollReveal>

        <Results />
        
        <ReviewsSection />
        
        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>

        <ScrollReveal>
          <FAQSection />
        </ScrollReveal>
      </main>
    </div>
  );
}
