"use client";

import React, { useState } from "react";

interface RouteItem {
  id: string;
  region: string;
  title: string;
  duration: string;
  stops: string;
  driverStory: string;
  guideHighlight: string;
  badge: string;
}

const NIGERIA_ROUTES: RouteItem[] = [
  {
    id: "badagry-trail",
    region: "Lagos Coastal West",
    title: "The Badagry Heritage & Lagoon Trail",
    duration: "Full Day · 6–7 hrs",
    stops: "Vlekete Market → First Storey Building (1845) → Gberefu Island",
    driverStory:
      "As you cross the Ojo lagoon bridge, your Storyteller Driver recounts the 15th-century coastal trade routes, the return of the Saro (Sierra Leonean) and Aguda (Brazilian) returnees, and how Reverend Gollmer built Nigeria's first two-storey timber house.",
    guideHighlight:
      "Guided boat crossing to the Point of No Return & private walkthrough with a certified Badagry custodian.",
    badge: "Deep History",
  },
  {
    id: "abeokuta-citadel",
    region: "Ogun — 1 hr from Lagos",
    title: "Olumo Rock & Itoku Adire Royal Trail",
    duration: "Day Trip · 5–6 hrs",
    stops: "Olumo Monolith → Ancient Egba Caves → Itoku Adire Market",
    driverStory:
      "Driving up the scenic Abeokuta highway, your driver narrates the 1830 Egba fortress wars, the legend of hunter Adagba, and the secret symbols dyed into royal indigo Adire cloth.",
    guideHighlight:
      "Ascend the 137m granite citadel with a 4th-generation rock custodian and meet master Adire artisans in Itoku.",
    badge: "Fortress & Craft",
  },
  {
    id: "osun-sacred",
    region: "Osun & Ekiti Highlands",
    title: "Osun-Osogbo Sacred Grove & Erin-Ijesha",
    duration: "Full Day · 7–8 hrs",
    stops: "UNESCO Sacred Forest → Suspension Bridge → Olumirin 7 Cascades",
    driverStory:
      "Your driver shares the story of Susanne Wenger (Adunni Olorisha) and the New Sacred Art Movement that saved the ancient forest shrines from logging in the 1950s.",
    guideHighlight:
      "Walk the sacred grove sculptures with an accredited curator, followed by a cool dip at the base of Erin-Ijesha waterfalls.",
    badge: "UNESCO Heritage",
  },
  {
    id: "calabar-obudu",
    region: "Cross River & South-South",
    title: "Old Calabar Marina & Obudu Cloud Peaks",
    duration: "Weekend · 2 Days",
    stops: "Duke Town → Tortuga Island → Becheve Canopy Walkway",
    driverStory:
      "Climbing the famous 22-bend mountain road, listen to Efik folklore of the Nsibidi ancient script, Queen Duke's diplomacy, and the mist-covered Becheve plateau.",
    guideHighlight:
      "Guided highland trek 1,600m above sea level with warm local mountain tea and birdwatching.",
    badge: "Highlands & Coast",
  },
  {
    id: "abuja-zuma",
    region: "Abuja & Middle Belt",
    title: "Zuma Monolith, Ushafa Pottery & Gurara Falls",
    duration: "Day Trip · 5–6 hrs",
    stops: "Ushafa Traditional Pottery → Zuma Rock Pass → Gurara Cascades",
    driverStory:
      "Discover the Gbagyi people's centuries-old clay mastery, the legend of the 'watchman rock' with a human face, and how Dr. Ladi Kwali put Nigerian pottery on the global map.",
    guideHighlight:
      "Hands-on pottery session with traditional Gbagyi women potters and a guided picnic overlooking Gurara.",
    badge: "Culture & Nature",
  },
  {
    id: "benin-bronze",
    region: "Edo — Ancient Kingdom",
    title: "Igun Street Bronze Casters & Royal Moat",
    duration: "Day Trip · 5 hrs",
    stops: "Benin National Museum → Igun Street Guild → Inner City Moat",
    driverStory:
      "Your driver brings the great Benin Empire alive—explaining the lost-wax bronze casting secret passed down from Oba Oguola in 1280 AD and the world's largest earthworks.",
    guideHighlight:
      "Private audience with hereditary Ineh N'Igun bronze casters watching molten brass poured live.",
    badge: "Royal Guild",
  },
];

export function CuratedRoutesSection() {
  const [selectedRegion, setSelectedRegion] = useState<string>("all");

  const filtered =
    selectedRegion === "all"
      ? NIGERIA_ROUTES
      : NIGERIA_ROUTES.filter((r) =>
          r.region.toLowerCase().includes(selectedRegion)
        );

  return (
    <section className="routes-section" id="routes">
      <div className="wrap">
        <div className="routes-header">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <span className="eyebrow">Signature Nigerian Trails</span>
            <h2>Stories waiting on every road.</h2>
            <p>
              We don&apos;t just drop a pin on a map. Each route is curated with
              verified historical context for the drive, paired with a certified
              custodian waiting when you step out.
            </p>
          </div>

          <div className="filter-pills">
            {[
              { key: "all", label: "All Regions" },
              { key: "lagos", label: "Lagos & Ogun" },
              { key: "osun", label: "Osun & West" },
              { key: "abuja", label: "Abuja & North" },
              { key: "cross river", label: "Calabar & South" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSelectedRegion(tab.key)}
                className={`pill-btn ${
                  selectedRegion === tab.key ? "active" : ""
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="routes-grid">
          {filtered.map((route) => (
            <div key={route.id} className="route-card">
              <div className="route-card-top">
                <span className="route-region">{route.region}</span>
                <span className="route-badge">{route.badge}</span>
              </div>

              <h3 className="route-title">{route.title}</h3>
              <div className="route-meta">
                <span>⏱ {route.duration}</span>
              </div>

              <div className="route-stops-bar">
                <span className="stops-label">Route Stops:</span> {route.stops}
              </div>

              <div className="story-preview-box">
                <div className="story-preview-label">
                  🎙️ What your driver narrates on the way:
                </div>
                <p>&ldquo;{route.driverStory}&rdquo;</p>
              </div>

              <div className="guide-handoff-box">
                <span className="handoff-dot"></span>
                <div>
                  <strong>On-site Handoff:</strong> {route.guideHighlight}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
