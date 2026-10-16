"use client";

import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { NarrativeBand } from "../components/NarrativeBand";
import { HowItWorks } from "../components/HowItWorks";
import { CuratedRoutesSection } from "../components/CuratedRoutesSection";
import { InCarStorySampler } from "../components/InCarStorySampler";
import { CulturalPillarsSection } from "../components/CulturalPillarsSection";
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

      {/* 5. Signature Nigerian Trails (Filterable Cultural Routes) */}
      <CuratedRoutesSection />

      {/* 6. Interactive In-Car Audio Story Sampler */}
      <InCarStorySampler />

      {/* 7. The Dual-Host Standard (Storyteller Driver + Accredited Site Custodian) */}
      <CulturalPillarsSection />

      {/* 8. For Drivers & Vetting Pipeline */}
      <DriverSection />

      {/* 9. Video Clips Showcase */}
      {/* <WatchSection /> */}

      {/* 10. Safety Pillars */}
      <SafetyBand />

      {/* 11. Dedicated Audience Cards (Travelers & Drivers) */}
      <AudienceSection onOpenModal={handleOpenModal} />

      {/* 12. Founder Note */}
      {/* <FounderSection /> */}

      {/* 13. Roadmap Timeline */}
      <RoadmapSection />

      {/* 14. Footer */}
      <Footer />

      {/* 15. Interactive Early Access / Application Modal */}
      <EarlyAccessModal
        isOpen={modalOpen}
        role={modalRole}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}