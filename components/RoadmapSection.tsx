"use client";

import React from "react";

export function RoadmapSection() {
  const milestones = [
    {
      dot: "1",
      title: "Pilot",
      desc: "Lagos, Abuja, and Calabar. Attraction discovery, Storyteller trips, and the full safety core.",
    },
    {
      dot: "2",
      title: "Marketplace",
      desc: "Local artisan goods, group and fleet travel, a loyalty passport for returning travelers.",
    },
    {
      dot: "3",
      title: "Pan-African",
      desc: "Multi-lingual support, expansion across West, East, and Southern Africa.",
    },
    {
      dot: "4",
      title: "Global network",
      desc: "AR cultural overlays, eco-tourism recognition, a creator-ambassador network at scale.",
    },
  ];

  return (
    <section className="roadmap-section">
      <div className="wrap">
        <div className="section-head">
          <h2>Where we&apos;re headed</h2>
          <p>
            Launching with the core experience first, then building outward.
          </p>
        </div>
        <div className="timeline">
          {milestones.map((m) => (
            <div key={m.dot} className="tl-item">
              <div className="tl-dot">{m.dot}</div>
              <h4>{m.title}</h4>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
