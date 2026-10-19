"use client";

import React, { useState } from "react";

interface WatchMoment {
  id: string;
  city: string;
  title: string;
  caption: string;
  creator: string;
  duration: string;
  image: string;
  storyNote: string;
}

const WATCH_MOMENTS: WatchMoment[] = [
  {
    id: "lekki-canopy",
    city: "Lagos",
    title: "Walking 401m above the Lekki swamp canopy at sunrise 🌿",
    caption: "Lekki Conservation Centre · Guided by Ranger Tunde",
    creator: "@adaora.explores · Verified Traveler",
    duration: "0:48",
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=85",
    storyNote:
      "Captured on the 8:00 AM Lagos Eco & Art ride. Driver Kemi picked us up in Victoria Island, narrated the history of the Lekki peninsula on the drive, and walked right along with us as the park guide led the canopy walk.",
  },
  {
    id: "nike-gallery",
    city: "Lagos",
    title: "Inside 5 floors of indigo Adire & bronze masterworks 🎨",
    caption: "Nike Art Gallery, Lekki · Walk-Along with Driver Kemi",
    creator: "@tayo_lens · Lagos Pilot Guest",
    duration: "1:12",
    image:
      "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=900&q=85",
    storyNote:
      "After sharing the story of Adire indigo textiles in the car, our Storyteller Driver walked alongside us through all five gallery floors while the resident curator explained the artworks, then drove us safely home.",
  },
  {
    id: "abuja-pottery",
    city: "Abuja",
    title: "Molding Gbagyi clay in Ushafa before hitting Gurara Falls 🏺",
    caption: "Ushafa Pottery & Gurara Corridor · Abuja",
    creator: "@claire_in_abuja · Expat Explorer",
    duration: "0:56",
    image:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=900&q=85",
    storyNote:
      "Driver Ibrahim picked us up at our doorstep, shared the biography of Dr. Ladi Kwali on the drive, walked with us in Ushafa, and personally guided our walking tour at Gurara Waterfalls where there was no resident guide.",
  },
  {
    id: "calabar-falls",
    city: "Calabar",
    title: "Standing where seven streams thunder into the rainforest 🌊",
    caption: "Agbokim & Kwa Waterfalls · Cross River",
    creator: "@chinedu_travels · Weekend Escape",
    duration: "1:04",
    image:
      "https://images.unsplash.com/photo-1546587348-d12660c30c50?auto=format&fit=crop&w=900&q=85",
    storyNote:
      "Driver Etim picked us up in Calabar Municipal, narrated Efik stories along the rainforest corridor, took us around the seven-stream waterfall himself, and dropped us right back at our doorstep.",
  },
];

export function WatchSection() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const activeMoment = WATCH_MOMENTS[activeIdx];

  return (
    <section className="section" id="experiences">
      <div className="wrap">
        <div className="routes-header" style={{ marginBottom: "2rem" }}>
          <div className="section-head" style={{ marginBottom: 0 }}>
            <span className="eyebrow">Real Travel Experiences · AI-Verified Clips</span>
            <h2>See what a Rident Drive journey feels like.</h2>
            <p>
              Real moments captured by pilot travelers and local creators across
              Lagos, Abuja, and Calabar—verified against each landmark before
              reaching your feed.
            </p>
          </div>
        </div>

        <div className="watch-grid">
          {WATCH_MOMENTS.map((card, idx) => {
            const isSelected = idx === activeIdx;
            return (
              <div
                key={card.id}
                onClick={() => setActiveIdx(idx)}
                className={`watch-card ${isSelected ? "active-watch" : ""}`}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="watch-card-img"
                  loading="lazy"
                />
                <div className="grad"></div>
                <span className="badge">✓ {card.city} · Verified</span>
                <span className="watch-duration">{card.duration}</span>
                <div className="play">
                  <span>
                    <div className="tri"></div>
                  </span>
                </div>
                <div className="cap">
                  <div className="cap-title">{card.title}</div>
                  <div className="cap-creator">{card.creator}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Moment Story Bar */}
        <div className="watch-story-bar">
          <div className="watch-story-left">
            <span className="watch-story-pill">
              ▶ Viewing Experience · {activeMoment.city}
            </span>
            <strong>{activeMoment.caption}</strong>
          </div>
          <p className="watch-story-text">&ldquo;{activeMoment.storyNote}&rdquo;</p>
        </div>
      </div>
    </section>
  );
}
