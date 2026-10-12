"use client";

import React from "react";

export function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Discover",
      desc: "Open the app and see curated, AI-vetted attractions near you — automatically.",
    },
    {
      num: "2",
      title: "Build the trip",
      desc: "Pick up to three stops. Cost is calculated for you, before you book.",
    },
    {
      num: "3",
      title: "Match a driver",
      desc: "Choose from certified, nearby Storyteller Drivers — rated, with languages and experience shown.",
    },
    {
      num: "4",
      title: "Ride & discover",
      desc: "Live tracking and safety check-ins run quietly, while your driver narrates each stop.",
    },
    {
      num: "5",
      title: "Close & review",
      desc: "Rate your driver and every place you visited — it helps the next traveler decide.",
    },
  ];

  return (
    <>
      <section className="section" id="how">
        <div className="wrap">
          <div className="section-head">
            <h2>How it works</h2>
            <p>
              Five steps from opening the app to being dropped back home, safely
              and with a story to tell.
            </p>
          </div>
          <div className="steps">
            {steps.map((step) => (
              <div key={step.num} className="step">
                <div className="num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey strip divider */}
      <div className="journey-strip"></div>
    </>
  );
}
