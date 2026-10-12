"use client";

import React from "react";

export function DriverSection() {
  const vettingItems = [
    "In-app storytelling training, specific to their routes and city",
    "AI-scored assessment before any human review begins",
    "Final approval from a vetted local ambassador",
    "70% of every fare goes directly to the driver who earned it",
  ];

  return (
    <section className="driver-section" id="drivers">
      <div className="wrap driver-grid">
        {/* Driver Card */}
        <div className="driver-card">
          <div className="driver-avatar">AT</div>
          <h3>Amaka T.</h3>
          <div className="role">Certified Storyteller Driver, Lagos</div>
          <div
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.5,
              color: "#D9C9C0",
            }}
          >
            &ldquo;I didn&apos;t just learn the roads — I learned the stories
            behind every stop on my route. That&apos;s what makes a trip with me
            different.&rdquo;
          </div>
          <div className="driver-stats">
            <div>
              <strong>4.9</strong>Rating
            </div>
            <div>
              <strong>English, Yoruba</strong>Languages
            </div>
            <div>
              <strong>120+</strong>Trips guided
            </div>
          </div>
        </div>

        {/* Driver Story / Vetting Info */}
        <div>
          <h2>Every driver earns that badge the hard way.</h2>
          <p className="lede">
            Before anyone appears in a traveler&apos;s app, they pass a dual
            vetting pipeline — an AI-scored storytelling assessment, and
            approval from a local ambassador who stakes their own reputation on
            the recommendation.
          </p>
          <div className="vet-list">
            {vettingItems.map((item, idx) => (
              <div key={idx} className="vet-item">
                <span className="chk">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
