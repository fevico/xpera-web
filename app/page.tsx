"use client";

import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { NarrativeBand } from "../components/NarrativeBand";
import { HowItWorks } from "../components/HowItWorks";
import { DriverSection } from "../components/DriverSection";
import { WatchSection } from "../components/WatchSection";
import { SafetyBand } from "../components/SafetyBand";
import { AudienceSection } from "../components/AudienceSection";
import { FounderSection } from "../components/FounderSection";
import { RoadmapSection } from "../components/RoadmapSection";
import { Footer } from "../components/Footer";
import { EarlyAccessModal } from "../components/EarlyAccessModal";

export default function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalRole, setModalRole] = useState<"traveler" | "driver">("traveler");

  const handleOpenModal = (role: "traveler" | "driver") => {
    setModalRole(role);
    setModalOpen(true);
  };

  return (
    <div>
      {/* 1. Navigation Header */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* 2. Hero Section with Interactive Route Art */}
      <Hero onOpenModal={handleOpenModal} />

      {/* 3. Narrative Quote Band */}
      <NarrativeBand />

      {/* 4. 5-Step Process & Journey Strip */}
      <HowItWorks />

      {/* 5. For Drivers & Vetting Pipeline */}
      <DriverSection />

      {/* 6. Video Clips Showcase */}
      <WatchSection />

      {/* 7. Safety Pillars */}
      <SafetyBand />

      {/* 8. Dedicated Audience Cards (Travelers & Drivers) */}
      <AudienceSection onOpenModal={handleOpenModal} />

      {/* 9. Founder Note */}
      <FounderSection />

      {/* 10. Roadmap Timeline */}
      <RoadmapSection />

      {/* 11. Footer */}
      <Footer />

      {/* 12. Interactive Early Access / Application Modal */}
      <EarlyAccessModal
        isOpen={modalOpen}
        role={modalRole}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
