"use client";

import React from "react";

export function CulturalPillarsSection() {
  const pillars = [
    {
      tag: "Step 1 · On the Road",
      title: "The Storyteller Driver (Modern Griot)",
      subtitle: "Certified in Oral History & Defensive Hospitality",
      desc: "In West African tradition, the Griot (or Akéwì in Yoruba) is the keeper of memory. Our drivers are trained to turn the highway between pickup and destination into a living prologue—explaining neighborhood histories, architecture, music, and local proverbs while you ride in air-conditioned comfort.",
      points: [
        "Trained on NIHOTOUR-aligned regional modules",
        "Speaks English plus indigenous languages (Yoruba, Igbo, Hausa, Efik, Pidgin)",
        "Zero haggling, zero detours, 100% transparent route pricing",
      ],
      theme: "light",
    },
    {
      tag: "Step 2 · At the Landmark",
      title: "The Accredited On-Site Custodian",
      subtitle: "Warm Handover at the Gate, No Tout Friction",
      desc: "Ever arrived at a Nigerian waterfall, museum, or palace and felt overwhelmed by unverified touts at the gate? With Xpera, your driver hands you directly over to a pre-booked, accredited on-site guide who unlocks sacred courtyards, artisan studios, and the best photo angles.",
      points: [
        "Pre-cleared entry tickets & community levies included",
        "Vetted local historians, art curators, and trail rangers",
        "Your driver waits safely on standby for your return ride home",
      ],
      theme: "dark",
    },
  ];

  return (
    <section className="section" id="custodians">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">The Dual-Host Standard</span>
          <h2>Two trained specialists. One unbroken story.</h2>
          <p>
            You shouldn&apos;t have to piece together a ride from one app and
            gamble on finding a guide at the gate. Xpera pairs both into a
            single verified booking.
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
