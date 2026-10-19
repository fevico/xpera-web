"use client";

import React from "react";

interface HeroProps {
  onOpenModal: (role: "traveler" | "driver") => void;
}

export function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <div className="hero-eyebrow-pill">
            <span className="hero-live-dot" />
            <span>Curated Mobility & Cultural Tourism · Lagos · Abuja · Calabar</span>
          </div>

          <h1>
            Every trip starts
            <br />
            with <span className="thin">somewhere worth</span>
            <br />
            going.
          </h1>
          <p className="lede">
            More than a ride—it&apos;s a guided cultural journey. Xpera Vianautix
            matches you with a vetted <strong>Storyteller Driver</strong> who
            narrates the route as you drive, takes you around to tell you about
            places that have no tour guide, and walks right along with you at
            landmarks where resident guides are already present.
          </p>

          <div className="cta-row">
            <button
              onClick={() => onOpenModal("traveler")}
              className="btn btn-primary"
            >
              Explore & Book a Ride
            </button>
            <a href="#routes" className="btn btn-outline">
              See Live Destinations
            </a>
            <a
              href="#drivers"
              className="btn btn-outline"
              style={{ borderStyle: "dashed" }}
            >
              Drive with us
            </a>
          </div>

          {/* Instant Trust & Proof Bar */}
          <div className="hero-trust-strip">
            <div className="hero-trust-item">
              <strong>4.96 ★</strong>
              <span>Pilot Traveler Rating</span>
            </div>
            <div className="hero-trust-divider" />
            <div className="hero-trust-item">
              <strong>Road + On-Site</strong>
              <span>Driver-Led Tour or Walk-Along</span>
            </div>
            <div className="hero-trust-divider" />
            <div className="hero-trust-item">
              <strong>100% Vetted</strong>
              <span>NIN, FRSC & Ambassador Approved</span>
            </div>
          </div>
        </div>

        {/* Visual Route Artwork + Real Destination Photo Cards */}
        <div className="route-art">
          <svg
            viewBox="0 0 420 440"
            style={{ width: "100%", height: "100%" }}
            className="overflow-visible"
          >
            <path
              d="M60,400 C110,360 90,290 150,260 C210,230 200,160 270,130 C320,108 330,70 370,45"
              fill="none"
              stroke="#B85042"
              strokeWidth="3.5"
              strokeDasharray="1 11"
              strokeLinecap="round"
            />
            <circle cx="60" cy="400" r="8" fill="#24140F" />
            <circle cx="150" cy="260" r="7" fill="#7C9885" />
            <circle cx="270" cy="130" r="7" fill="#7C9885" />
            <circle cx="370" cy="45" r="9" fill="#B85042" />
          </svg>

          {/* Floating Photo Card Top-Left: Nike Art Gallery & Culture */}
          <div className="hero-photo-float hero-photo-top">
            <img
              src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=600&q=80"
              alt="Nike Art Gallery Lagos"
              className="hero-photo-img"
            />
            <div className="hero-photo-badge">Lagos · Nike Art Gallery</div>
          </div>

          {/* Floating Photo Card Bottom-Right: Waterfalls & Nature */}
          <div className="hero-photo-float hero-photo-bottom">
            <img
              src="https://images.unsplash.com/photo-1546587348-d12660c30c50?auto=format&fit=crop&w=600&q=80"
              alt="Calabar & Gurara Waterfalls"
              className="hero-photo-img"
            />
            <div className="hero-photo-badge">Calabar · Agbokim Falls</div>
          </div>

          {/* Stop 1 */}
          <div className="route-stop" style={{ left: "0%", bottom: "3%" }}>
            <div className="route-dot" style={{ background: "#24140F" }}></div>
            <div className="route-label">
              Doorstep Pickup
              <span className="sub">Driver Kemi A. · ★ 4.98</span>
            </div>
          </div>

          {/* Stop 2 */}
          <div className="route-stop" style={{ left: "26%", bottom: "40%" }}>
            <div className="route-dot" style={{ background: "#7C9885" }}></div>
            <div className="route-label">
              Lekki Canopy Walk
              <span className="sub">🎙️ Story playing in-car</span>
            </div>
          </div>

          {/* Stop 3 */}
          <div className="route-stop" style={{ left: "50%", bottom: "64%" }}>
            <div className="route-dot" style={{ background: "#7C9885" }}></div>
            <div className="route-label">
              Nike Art Gallery
              <span className="sub">🎟️ VIP Curator Handoff</span>
            </div>
          </div>

          {/* Stop 4 */}
          <div className="route-stop" style={{ left: "68%", top: "4%" }}>
            <div className="route-dot" style={{ background: "#B85042" }}></div>
            <div className="route-label">
              Freedom Park
              <span className="sub">Final stop & safe return</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
