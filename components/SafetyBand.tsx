"use client";

import React from "react";

export function SafetyBand() {
  const safetyCards = [
    {
      icon: "🛡️",
      title: "Live, monitored trips",
      desc: "Real-time tracking and automated check-ins run in the background of every ride, with an always-visible SOS control.",
    },
    {
      icon: "✓",
      title: "Dual-vetted drivers",
      desc: "AI assessment and human ambassador approval, both required before a driver can accept a single trip.",
    },
    {
      icon: "💬",
      title: "Everything stays in-app",
      desc: "No phone numbers exchanged. Every conversation is logged against the trip, for your safety and ours.",
    },
  ];

  return (
    <section className="safety-band">
      <div className="wrap">
        <div className="section-head">
          <h2>Safety isn&apos;t a feature. It&apos;s the floor.</h2>
          <p>Every trip, every time — not an upgrade you have to ask for.</p>
        </div>
        <div className="safety-grid">
          {safetyCards.map((card, idx) => (
            <div key={idx} className="safety-card">
              <div className="safety-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
