"use client";

import React from "react";

export function WatchSection() {
  const watchCards = [
    { bgClass: "bg1", caption: "Canopy walk at sunrise 🌿" },
    { bgClass: "bg2", caption: "Live jazz, Sunday evenings 🎷" },
    { bgClass: "bg3", caption: "The carvers of Nike Gallery" },
    { bgClass: "bg4", caption: "Calabar's quiet waterfront" },
  ];

  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <h2>Watch, before you go</h2>
          <p>
            Real clips from creators and past travelers — every one
            AI-verified against the attraction it claims to show, before it
            ever reaches your feed.
          </p>
        </div>
        <div className="watch-grid">
          {watchCards.map((card, idx) => (
            <div key={idx} className="watch-card">
              <div className={card.bgClass}></div>
              <div className="grad"></div>
              <span className="badge">✓ AI-verified</span>
              <div className="play">
                <span>
                  <div className="tri"></div>
                </span>
              </div>
              <div className="cap">{card.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
