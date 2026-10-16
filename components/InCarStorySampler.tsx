"use client";

import React, { useState } from "react";

interface StorySnippet {
  id: string;
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
    id: "freedom-park",
    routeTitle: "Victoria Island → Broad Street, Lagos Island",
    landmark: "Approaching Freedom Park (Former Broad Street Prison)",
    driverName: "Amaka T.",
    driverCity: "Lagos Island Specialist",
    languages: "English · Yoruba · Pidgin",
    duration: "2:15 min narration",
    quote:
      "Notice the old brick walls coming up on our left. In 1882, the British colonial government built Her Majesty’s Broad Street Prison right here for £16,000. Nationalist heroes like Herbert Macaulay, Chief Obafemi Awolowo, and Michael Imoudu were once held behind those walls. In 2010, architect Theo Lawson transformed those prison cells into amphitheaters and art ponds so that a place of chains became Lagos’s home of creative freedom...",
    culturalNote:
      "Your on-site guide Kunle will show you the preserved cell blocks and Wole Soyinka gallery.",
  },
  {
    id: "itoku-adire",
    routeTitle: "Lagos–Abeokuta Expressway → Kemta, Abeokuta",
    landmark: "Passing the Ogun River Bridge toward Olumo Rock",
    driverName: "Ibrahim K.",
    driverCity: "Ogun & Oyo Heritage Driver",
    languages: "English · Yoruba · Hausa",
    duration: "3:05 min narration",
    quote:
      "When you look at a piece of genuine Abeokuta Adire Eleko cloth, you aren't just looking at fashion—you are reading a book. For generations, Egba mothers used cassava paste and chicken feathers to paint secret proverbs onto cotton before dipping it into fermented Elu indigo vats. A pattern called 'Ibadandun' has 28 pillars representing the sweetness of Ibadan, while 'Olokun' celebrates the goddess of the sea...",
    culturalNote:
      "At Itoku market, Mama Yetunde will let you stamp your own indigo handkerchief.",
  },
  {
    id: "calabar-nsibidi",
    routeTitle: "Calabar Airport → Marina & Duke Town",
    landmark: "Descending toward the Calabar River Overlook",
    driverName: "Effiong B.",
    driverCity: "Cross River & Obudu Chauffeur",
    languages: "English · Efik · Pidgin",
    duration: "2:40 min narration",
    quote:
      "Long before European ships anchored in this river, the Cross River peoples used Nsibidi—an indigenous system of sacred ideographic symbols woven into Ekpe society textiles, carved on calabashes, and gestured in court. Unlike alphabets that spell sounds, a single Nsibidi symbol can tell an entire story of love, judgment, or peace between two families...",
    culturalNote:
      "Our Old Residency Museum guide will show you 19th-century Nsibidi artifacts.",
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
              gives them the context of the streets they&apos;re passing. Tap a
              route below to read an excerpt of how Xpera Storyteller Drivers
              bring the road alive.
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
                <span className="pulse-dot"></span> In-Transit Narration
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
