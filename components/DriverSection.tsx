"use client";

import React, { useState } from "react";

interface DriverProfile {
  id: string;
  city: string;
  name: string;
  role: string;
  image: string;
  vehicle: string;
  quote: string;
  rating: string;
  languages: string;
  trips: string;
  specialty: string;
}

const FEATURED_DRIVERS: DriverProfile[] = [
  {
    id: "kemi-lagos",
    city: "Lagos",
    name: "Kemi Adebayo",
    role: "Certified Storyteller Driver · Lagos Island & Lekki",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=500&q=80",
    vehicle: "2022 Toyota Camry · A/C & Wi-Fi Equipped",
    quote:
      "I didn't just learn the roads of Lagos—I learned the stories behind every lagoon bridge, gallery, and Afro-Brazilian street on my route. My guests arrive feeling like insiders.",
    rating: "4.98 ★",
    languages: "English, Yoruba, Pidgin",
    trips: "145+ Trips",
    specialty: "Art Galleries, Old Eko & Coastal History",
  },
  {
    id: "ibrahim-abuja",
    city: "Abuja",
    name: "Ibrahim Danjuma",
    role: "Certified Storyteller Driver · Abuja & Gurara Corridor",
    image:
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=500&q=80",
    vehicle: "2023 Toyota Prado SUV · Highway Certified",
    quote:
      "People see Abuja's hills from a distance, but rarely hear the Gbagyi folklore of Zuma Rock or sit with the potters of Ushafa. Sharing that heritage is my pride.",
    rating: "4.96 ★",
    languages: "English, Hausa, Gbagyi",
    trips: "110+ Trips",
    specialty: "Monoliths, Waterfalls & Indigenous Craft",
  },
  {
    id: "etim-calabar",
    city: "Calabar",
    name: "Etim Bassey",
    role: "Certified Storyteller Driver · Cross River & Rainforest",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
    vehicle: "2022 Lexus RX 350 · Eco-Trail Ready",
    quote:
      "From the 1884 Old Residency on the Calabar River to the seven streams of Agbokim Waterfalls, every mile in Cross River has a story waiting to be told.",
    rating: "4.97 ★",
    languages: "English, Efik",
    trips: "95+ Trips",
    specialty: "Rainforest Cascades & Efik Royal History",
  },
];

export function DriverSection() {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const activeDriver = FEATURED_DRIVERS[selectedIdx];

  const vettingItems = [
    "In-app cultural & historical storytelling training tailored to their city's landmarks",
    "Strict NIN identity, police background, and FRSC vehicle safety inspection",
    "AI-scored oral storytelling assessment + live ride evaluation by a local ambassador",
    "70% of every trip fare goes directly to the Storyteller Driver who earned it",
  ];

  return (
    <section className="driver-section" id="drivers">
      <div className="wrap driver-grid">
        {/* Interactive Driver Profile Card */}
        <div>
          <div className="driver-switcher-tabs">
            {FEATURED_DRIVERS.map((drv, idx) => (
              <button
                key={drv.id}
                type="button"
                onClick={() => setSelectedIdx(idx)}
                className={`driver-switch-btn ${
                  selectedIdx === idx ? "active" : ""
                }`}
              >
                {drv.city} Host
              </button>
            ))}
          </div>

          <div className="driver-card">
            <div className="driver-card-top">
              <img
                src={activeDriver.image}
                alt={activeDriver.name}
                className="driver-photo"
              />
              <div>
                <div className="driver-verified-pill">
                  ✓ NIN & Ambassador Verified
                </div>
                <h3>{activeDriver.name}</h3>
                <div className="role">{activeDriver.role}</div>
              </div>
            </div>

            <div className="driver-vehicle-bar">
              <span>🚘 {activeDriver.vehicle}</span>
              <span>🎯 {activeDriver.specialty}</span>
            </div>

            <div
              style={{
                fontSize: "0.92rem",
                lineHeight: 1.58,
                color: "#E8DAD3",
                fontStyle: "italic",
              }}
            >
              &ldquo;{activeDriver.quote}&rdquo;
            </div>

            <div className="driver-stats">
              <div>
                <strong>{activeDriver.rating}</strong>Guest Rating
              </div>
              <div>
                <strong>{activeDriver.languages}</strong>Languages
              </div>
              <div>
                <strong>{activeDriver.trips}</strong>Guided Safely
              </div>
            </div>
          </div>
        </div>

        {/* Driver Story / Vetting Info */}
        <div>
          <span
            className="eyebrow"
            style={{ color: "#E2A99E", marginBottom: "0.5rem" }}
          >
            Meet Your Hosts · Vetted for Trust & Warmth
          </span>
          <h2>Every driver earns that badge the hard way.</h2>
          <p className="lede">
            You&apos;re never getting into a stranger&apos;s car. Before any host
            appears in the Xpera app, they pass a dual vetting pipeline—combining
            rigorous safety verification, an AI-scored storytelling exam, and
            in-person sign-off from a city ambassador.
          </p>
          <div className="vet-list">
            {vettingItems.map((item, idx) => (
              <div key={idx} className="vet-item">
                <span className="chk">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
