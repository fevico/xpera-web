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
          <h1>
            Every trip starts
            <br />
            with <span className="thin">somewhere worth</span>
            <br />
            going.
          </h1>
          <p className="lede">
            Discover a place, then let a certified local guide you through it.
            Xpera Vianautix matches travelers with vetted Storyteller Drivers
            who narrate the route as they drive it.
          </p>
          <div className="cta-row">
            <button
              onClick={() => onOpenModal("traveler")}
              className="btn btn-primary"
            >
              Get early access
            </button>
            <a href="#drivers" className="btn btn-outline">
              Drive with us
            </a>
          </div>
        </div>

        {/* Route Artwork */}
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
              strokeWidth="3"
              strokeDasharray="1 11"
              strokeLinecap="round"
            />
            <circle cx="60" cy="400" r="8" fill="#24140F" />
            <circle cx="150" cy="260" r="7" fill="#7C9885" />
            <circle cx="270" cy="130" r="7" fill="#7C9885" />
            <circle cx="370" cy="45" r="9" fill="#B85042" />
          </svg>

          {/* Stop 1 */}
          <div className="route-stop" style={{ left: "2%", bottom: "3%" }}>
            <div className="route-dot" style={{ background: "#24140F" }}></div>
            <div className="route-label">
              You are here
              <span className="sub">Lagos, Nigeria</span>
            </div>
          </div>

          {/* Stop 2 */}
          <div className="route-stop" style={{ left: "30%", bottom: "40%" }}>
            <div className="route-dot" style={{ background: "#7C9885" }}></div>
            <div className="route-label">
              Lekki Conservation
              <span className="sub">25 min away</span>
            </div>
          </div>

          {/* Stop 3 */}
          <div className="route-stop" style={{ left: "56%", bottom: "63%" }}>
            <div className="route-dot" style={{ background: "#7C9885" }}></div>
            <div className="route-label">
              Nike Art Gallery
              <span className="sub">15 min away</span>
            </div>
          </div>

          {/* Stop 4 */}
          <div className="route-stop" style={{ left: "76%", top: "6%" }}>
            <div className="route-dot" style={{ background: "#B85042" }}></div>
            <div className="route-label">
              Freedom Park
              <span className="sub">Final stop</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
