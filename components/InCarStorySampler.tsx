"use client";

import React, { useState } from "react";

interface StorySnippet {
  id: string;
  cityTag: string;
  routeTitle: string;
  landmark: string;
  driverName: string;
  driverCity: string;
  languages: string;
  duration: string;
  quote: string;
  culturalNote: string;
}

const STORY_SNIPPETS: StorySnippet[] = [
  {
    id: "lagos-story",
    cityTag: "Lagos",
    routeTitle: "Lagos · Victoria Island → Nike Art Gallery & Freedom Park",
    landmark: "Passing Lekki Phase 1 toward Chief Nike Davies-Okundaye's Gallery",
    driverName: "Amaka T.",
    driverCity: "Lagos Island & Lekki Specialist",
    languages: "English · Yoruba · Pidgin",
    duration: "2:15 min narration",
    quote:
      "Up ahead on our right is the dazzling white five-storey building of Nike Art Gallery. Every single Adire indigo pattern you’ll see inside has a secret meaning—our mothers used cassava paste and chicken feathers to paint proverbs onto cloth so royalty could speak without saying a word. And when we head back toward Broad Street on Lagos Island, I’ll show you how the 1882 colonial prison where Obafemi Awolowo and Herbert Macaulay were held was reborn into Freedom Park...",
    culturalNote:
      "At Nike Gallery, our resident curator will walk you through all 5 floors and introduce you to the weavers.",
  },
  {
    id: "abuja-story",
    cityTag: "Abuja",
    routeTitle: "Abuja · Central District → Zuma Rock & Gurara Waterfalls",
    landmark: "Approaching the 725-meter Zuma Monolith & Ushafa Pottery Village",
    driverName: "Ibrahim K.",
    driverCity: "Abuja & Middle-Belt Chauffeur",
    languages: "English · Hausa · Gbagyi",
    duration: "3:05 min narration",
    quote:
      "Look straight ahead at that massive granite monolith rising twice the height of Aso Rock—that is Zuma Rock. For centuries, the Gbagyi people revered it as a protective watchman; if you look closely at the center crease, you can see a natural human face carved by nature into the stone. Before we reach the roaring cascades of Gurara Waterfalls, we’ll stop in Ushafa where women still hand-coil clay pots using the exact technique Dr. Ladi Kwali made famous on the 20-Naira note...",
    culturalNote:
      "At Gurara Falls, your certified trail ranger will guide you down to the calm lower pools for photos and a picnic.",
  },
  {
    id: "calabar-story",
    cityTag: "Calabar",
    routeTitle: "Calabar · Marina Waterfront → Kwa Waterfalls & Agbokim",
    landmark: "Driving beneath the Cross River Rainforest Canopy toward Kwa Gorge",
    driverName: "Effiong B.",
    driverCity: "Calabar & Highland Specialist",
    languages: "English · Efik · Pidgin",
    duration: "2:40 min narration",
    quote:
      "Feel how cool the breeze gets as we enter the Cross River rainforest. Long before colonial ships docked at Old Calabar Marina in the 1800s, our ancestors used Nsibidi—a sacred script of symbols woven into Ekpe cloth and carved on calabashes. Just ahead at Kwa Falls, 234 hand-carved stone steps lead down through mahogany trees to a crystal-clear gorge where freshwater streams tumble straight from the Oban Hills...",
    culturalNote:
      "Eco-guide Ntufam is waiting at the top of the gorge with cold palm wine and trekking sticks for your descent.",
  },
];

export function InCarStorySampler() {
  const [activeStory, setActiveStory] = useState<StorySnippet>(
    STORY_SNIPPETS[0]
  );

  return (
    <section className="sampler-section" id="stories">
      <div className="wrap">
        <div className="sampler-grid">
          {/* Left column: Intro & route selector */}
          <div>
            <span className="eyebrow">The In-Car Audio Experience</span>
            <h2>Hear what happens between pickup and arrival.</h2>
            <p className="sampler-lede">
              Most tourists stare at their phones in traffic because nobody
              gives them the context of the streets they&apos;re passing. Tap
              any of our three launch cities below to read an excerpt of how
              Xpera Storyteller Drivers bring the road alive.
            </p>

            <div className="sampler-tabs">
              {STORY_SNIPPETS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveStory(item)}
                  className={`sampler-tab ${
                    activeStory.id === item.id ? "active" : ""
                  }`}
                >
                  <div className="tab-route">{item.routeTitle}</div>
                  <div className="tab-driver">
                    Narrated by {item.driverName} · {item.duration}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right column: Active transcript card */}
          <div className="sampler-card">
            <div className="sampler-card-header">
              <div className="sampler-driver-info">
                <div className="sampler-avatar">
                  {activeStory.driverName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <div className="sampler-name">{activeStory.driverName}</div>
                  <div className="sampler-sub">
                    {activeStory.driverCity} · {activeStory.languages}
                  </div>
                </div>
              </div>
              <span className="live-pill">
                <span className="pulse-dot"></span> {activeStory.cityTag} Story Ride
              </span>
            </div>

            <div className="sampler-landmark">
              📍 {activeStory.landmark}
            </div>

            <blockquote className="sampler-quote">
              &ldquo;{activeStory.quote}&rdquo;
            </blockquote>

            {/* Subtle audio wave visual */}
            <div className="wave-row">
              <div className="wave-bars">
                {[14, 24, 18, 28, 12, 22, 30, 16, 25, 20, 14, 26, 18, 22, 12, 19].map(
                  (h, i) => (
                    <span
                      key={i}
                      style={{ height: `${h}px` }}
                      className="wave-bar"
                    ></span>
                  )
                )}
              </div>
              <span className="wave-time">{activeStory.duration}</span>
            </div>

            <div className="sampler-footer">
              <strong>Next Stop Handoff:</strong> {activeStory.culturalNote}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
