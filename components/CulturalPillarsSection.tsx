"use client";

import React from "react";

export function CulturalPillarsSection() {
  const pillars = [
    {
      tag: "Mode 1 · Places Without a Resident Guide",
      title: "Your Driver Leads the Tour on Foot",
      subtitle: "Trained on Landmark History, Folklore & Local Context",
      desc: "Many of Nigeria's most breathtaking spots—from Zuma Rock viewpoints and Gurara Falls trails to historic Old Lagos streets—don't always have a dedicated tour guide waiting. That's why every Xpera Storyteller Driver is trained with verified information about the destinations themselves: stepping out of the car to take you around and tell you the story of the place.",
      points: [
        "Drivers are trained to know the history & stories of every stop",
        "Takes you around on foot and explains landmarks firsthand",
        "Speaks English plus indigenous languages (Yoruba, Hausa, Efik, Pidgin)",
      ],
      theme: "light",
    },
    {
      tag: "Mode 2 · Places With Resident Guides",
      title: "Your Driver Walks Along Beside You",
      subtitle: "Respectful Handover to Official Site Guides",
      desc: "When you arrive at a destination that already has its own official tour guides—such as Nike Art Gallery, Lekki Conservation Centre, or the Old Residency Museum—your driver steps back from telling the story so the resident specialist can lead. Instead of leaving you alone, your driver simply walks along with you for company, comfort, and safety.",
      points: [
        "Resident gallery curators or park rangers lead the on-site story",
        "Your driver walks quietly alongside you throughout the visit",
        "Seamless escort back to your cool vehicle for the next stop or ride home",
      ],
      theme: "dark",
    },
  ];

  return (
    <section className="section" id="custodians">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">How On-Site Guiding Works</span>
          <h2>One trained host from your doorstep into every landmark.</h2>
          <p>
            Whether a destination has its own resident tour guides or not, you
            never explore alone. Your Xpera driver adapts seamlessly to every
            stop on your route.
          </p>
        </div>

        <div className="pillars-grid">
          {pillars.map((p, idx) => (
            <div
              key={idx}
              className={`pillar-card ${
                p.theme === "dark" ? "pillar-dark" : "pillar-light"
              }`}
            >
              <span className="pillar-tag">{p.tag}</span>
              <h3>{p.title}</h3>
              <div className="pillar-sub">{p.subtitle}</div>
              <p>{p.desc}</p>
              <ul className="pillar-list">
                {p.points.map((pt, i) => (
                  <li key={i}>
                    <span className="pillar-chk">✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
