import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/hero/Hero";
import { TickerBanner } from "@/components/home/TickerBanner";
import { AboutSection } from "@/components/home/AboutSection";
import { CapabilitiesSection } from "@/components/home/CapabilitiesSection";
import { JourneySection } from "@/components/home/JourneySection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { EngineeringHighlightsSection } from "@/components/home/EngineeringHighlightsSection";
import { AchievementsSection } from "@/components/home/AchievementsSection";
import { EventsActivitiesSection } from "@/components/home/EventsActivitiesSection";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import { ContactSection } from "@/components/home/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-transparent">
      <Navbar />
      <main className="flex-grow">
        {/* 1. Hero */}
        <Hero />
        
        {/* Supporting Ticker Banner */}
        <TickerBanner />

        {/* 2. About */}
        <AboutSection />

        {/* 3. Capabilities */}
        <CapabilitiesSection />

        {/* 4. Journey */}
        <JourneySection />

        {/* 5. Skills */}
        <SkillsSection />

        {/* 6. Projects */}
        <ProjectsSection />

        {/* 7. Engineering Highlights */}
        <EngineeringHighlightsSection />

        {/* 8. Achievements & Badges */}
        <AchievementsSection />

        {/* 9. Events & Activities */}
        <EventsActivitiesSection />

        {/* 10. Certifications */}
        <CertificationsSection />

        {/* 11. Contact */}
        <ContactSection />
      </main>
      
      {/* 12. Footer */}
      <Footer />
    </div>
  );
}
