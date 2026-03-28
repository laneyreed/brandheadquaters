import Hero from "@/components/sections/Hero";
import IntroStrip from "@/components/sections/IntroStrip";
import FeaturedWork from "@/components/sections/FeaturedWork";
import LearnSection from "@/components/sections/LearnSection";
import WorkWithMe from "@/components/sections/WorkWithMe";
import Resources from "@/components/sections/Resources";
import AboutPreview from "@/components/sections/AboutPreview";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroStrip />
      <FeaturedWork />
      <LearnSection />
      <WorkWithMe />
      <Resources />
      <AboutPreview />
      <FinalCTA />
    </>
  );
}
