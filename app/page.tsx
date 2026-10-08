"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { HowItWorks } from "../components/HowItWorks";
import { StoryDrivePlayer } from "../components/StoryDrivePlayer";
import { DestinationsGrid } from "../components/DestinationsGrid";
import { DestinationModal } from "../components/DestinationModal";
import { TrainingAcademy } from "../components/TrainingAcademy";
import { SafetyFeatures } from "../components/SafetyFeatures";
import { WaitlistSection } from "../components/WaitlistSection";
import { FAQSection } from "../components/FAQSection";
import { Footer } from "../components/Footer";

import { DESTINATIONS, Destination, DestinationCategory } from "../data/destinations";
import { AUDIO_STORIES, AudioStory } from "../data/stories";
import { FAQS } from "../data/faqs";

export default function LandingPage() {
  // Navigation & UI States
  const [activeCategory, setActiveCategory] = useState<DestinationCategory>("all");
  const [selectedStory, setSelectedStory] = useState<AudioStory>(AUDIO_STORIES[0]);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioProgress, setAudioProgress] = useState(25);
  const [selectedDestinationModal, setSelectedDestinationModal] = useState<Destination | null>(null);

  // Waitlist Form State
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistName, setWaitlistName] = useState("");
  const [waitlistRole, setWaitlistRole] = useState("traveler");
  const [waitlistCity, setWaitlistCity] = useState("Lagos");
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const [vipTicketNumber, setVipTicketNumber] = useState("");

  // Filtered destinations
  const filteredDestinations =
    activeCategory === "all"
      ? DESTINATIONS
      : DESTINATIONS.filter((d) => d.category === activeCategory);

  // Audio simulation timer
  useEffect(() => {
    let interval: any;
    if (isPlayingAudio) {
      interval = setInterval(() => {
        setAudioProgress((prev) => {
          if (prev >= 100) {
            setIsPlayingAudio(false);
            return 0;
          }
          return prev + 1;
        });
      }, 350);
    }
    return () => clearInterval(interval);
  }, [isPlayingAudio]);

  const handleApplyRole = (role: "driver" | "guide") => {
    setWaitlistRole(role);
    const el = document.getElementById("waitlist");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#070c0e] text-slate-100 flex flex-col selection:bg-amber-500/30 selection:text-amber-200">
      {/* 1. Header & Navigation */}
      <Navbar />

      {/* 2. Hero Section with Interactive App Mockup */}
      <Hero waitlistEmail={waitlistEmail} setWaitlistEmail={setWaitlistEmail} />

      {/* 3. 4-Step Process: How Xepera Works */}
      <HowItWorks />

      {/* 4. Interactive In-Ride Story Player Widget */}
      <StoryDrivePlayer
        stories={AUDIO_STORIES}
        selectedStory={selectedStory}
        setSelectedStory={setSelectedStory}
        isPlayingAudio={isPlayingAudio}
        setIsPlayingAudio={setIsPlayingAudio}
        audioProgress={audioProgress}
        setAudioProgress={setAudioProgress}
      />

      {/* 5. Signature Nigerian Destinations */}
      <DestinationsGrid
        destinations={filteredDestinations}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        onSelectDestination={(dest) => setSelectedDestinationModal(dest)}
      />

      {/* 6. Dual Training Academy: Chauffeur-Storytellers & Tour Guides */}
      <TrainingAcademy onApplyRole={handleApplyRole} />

      {/* 7. Safety, Peace of Mind & Diaspora Trust */}
      <SafetyFeatures />

      {/* 8. Early Access Waitlist & VIP Digital Pass Generator */}
      <WaitlistSection
        waitlistEmail={waitlistEmail}
        setWaitlistEmail={setWaitlistEmail}
        waitlistName={waitlistName}
        setWaitlistName={setWaitlistName}
        waitlistRole={waitlistRole}
        setWaitlistRole={setWaitlistRole}
        waitlistCity={waitlistCity}
        setWaitlistCity={setWaitlistCity}
        waitlistSubmitted={waitlistSubmitted}
        setWaitlistSubmitted={setWaitlistSubmitted}
        vipTicketNumber={vipTicketNumber}
        setVipTicketNumber={setVipTicketNumber}
      />

      {/* 9. FAQ Section */}
      <FAQSection faqs={FAQS} />

      {/* 10. Destination Itinerary Modal */}
      <DestinationModal
        destination={selectedDestinationModal}
        onClose={() => setSelectedDestinationModal(null)}
      />

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}
