"use client";

import React from "react";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      tag: "Browse & Pick",
      title: "Choose your city & landmarks",
      desc: "Open Xpera in Lagos, Abuja, or Calabar and explore curated cultural, nature, and heritage trails near you.",
    },
    {
      num: "02",
      tag: "Upfront Pricing",
      title: "See one transparent fare",
      desc: "Pick up to 3 stops. Your ride, waiting time, and tour experience are calculated upfront before you book.",
    },
    {
      num: "03",
      tag: "Vetted Match",
      title: "Match a Storyteller Driver",
      desc: "Get picked up at your doorstep by a certified local host—complete with languages spoken, ratings, and background checks.",
    },
    {
      num: "04",
      tag: "Road Narration",
      title: "Hear the story as you drive",
      desc: "Instead of a silent commute, your driver shares the living history, folklore, and architecture along your corridor.",
    },
    {
      num: "05",
      tag: "On-Site Tour",
      title: "Explore on foot together & return",
      desc: "Where there's no tour guide, your trained driver takes you around and tells you about the place. Where a site already has a guide, your driver stops narrating and simply walks along with you.",
    },
  ];

  const evidenceCards = [
    {
      badge: "Step 1–2 Proof · Upfront Booking",
      title: "Build your multi-stop route with zero guesswork.",
      desc: "When you book a trail across Lagos, Abuja, or Calabar, your fare and itinerary are locked in upfront—covering doorstep pickup, standby waiting time at every stop, and your return ride home.",
      meta: "Sample Bundle: Doorstep Pickup + Multi-Stop Standby + Return",
      image:
        "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=700&q=80",
      imageTag: "✓ Upfront Multi-Stop Trip",
    },
    {
      badge: "Step 3–4 Proof · The Story Ride",
      title: "Geofenced cultural stories triggered by the road.",
      desc: "As your vehicle crosses Lekki Bridge or approaches Zuma Rock, your Storyteller Driver shares the history of the neighborhoods and landmarks—blending verified local knowledge with personal warmth.",
      meta: "Live GPS family sharing + in-app audio check-ins active",
      image:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=700&q=80",
      imageTag: "🎙️ Live In-Car Narration",
    },
    {
      badge: "Step 5 Proof · On-Site Flexibility",
      title: "Trained to guide you on foot—or walk quietly beside you.",
      desc: "At places without a resident tour guide, your trained Xpera driver steps out to take you around and share the story of the site. At venues that already have official guides, your driver lets the resident guide lead while walking along with you.",
      meta: "Driver-led tour where needed · Companion walk where guides exist",
      image:
        "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=700&q=80",
      imageTag: "🚶‍♂️ Driver-Led or Walk-Along",
    },
  ];

  return (
    <>
      <section className="section" id="how">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Clear Service Flow · Door-to-Door</span>
            <h2>How Xpera works in practice</h2>
            <p>
              Five seamless steps from opening the app to returning home safely—combining
              private ride-hailing with a trained driver who knows every stop.
            </p>
          </div>

          <div className="steps">
            {steps.map((step) => (
              <div key={step.num} className="step">
                <div className="step-top-row">
                  <div className="num">{step.num}</div>
                  <span className="step-tag">{step.tag}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Visual Evidence of Service in Action */}
          <div className="evidence-strip">
            <div className="evidence-header">
              <div>
                <span className="eyebrow" style={{ marginBottom: "0.25rem" }}>
                  Behind the Scenes · Service Evidence
                </span>
                <h3>What makes an Xpera trip different from a regular ride?</h3>
              </div>
              <span className="evidence-pill">
                ✓ Verified Door-to-Door Experience
              </span>
            </div>

            <div className="evidence-grid">
              {evidenceCards.map((item, idx) => (
                <div key={idx} className="evidence-card">
                  <div className="evidence-img-wrap">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="evidence-img"
                      loading="lazy"
                    />
                    <div className="evidence-img-overlay" />
                    <span className="evidence-img-tag">{item.imageTag}</span>
                  </div>
                  <div className="evidence-body">
                    <span className="evidence-step-badge">{item.badge}</span>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                    <div className="evidence-meta">{item.meta}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Journey strip divider */}
      <div className="journey-strip"></div>
    </>
  );
}
