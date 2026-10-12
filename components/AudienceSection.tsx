"use client";

import React from "react";

interface AudienceSectionProps {
  onOpenModal: (role: "traveler" | "driver") => void;
}

export function AudienceSection({ onOpenModal }: AudienceSectionProps) {
  return (
    <section className="section">
      <div className="wrap">
        <div className="audience-grid">
          {/* Traveler Card */}
          <div className="audience-card traveler">
            <h3>For travelers</h3>
            <p>
              Land somewhere new and already know where to go — and who to trust
              to take you there.
            </p>
            <button
              onClick={() => onOpenModal("traveler")}
              className="btn btn-primary cursor-pointer"
            >
              Get early access
            </button>
          </div>

          {/* Driver Card */}
          <div className="audience-card driver">
            <h3>For drivers &amp; creators</h3>
            <p>
              Turn local knowledge into income — as a certified Storyteller
              Driver, or as an ambassador who vets and earns alongside them.
            </p>
            <button
              onClick={() => onOpenModal("driver")}
              className="btn btn-primary cursor-pointer"
            >
              Apply to join
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
