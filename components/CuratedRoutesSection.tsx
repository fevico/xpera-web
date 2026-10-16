"use client";

import React, { useState } from "react";

interface LandmarkSlide {
  name: string;
  tag: string;
  image: string;
  caption: string;
  spotStory: string;
}

interface CityShowcase {
  id: "lagos" | "abuja" | "calabar";
  number: string;
  city: string;
  tagline: string;
  headline: string;
  duration: string;
  driverName: string;
  driverRole: string;
  driverOverview: string;
  guideHandoff: string;
  slides: LandmarkSlide[];
}

const CITY_SHOWCASES: CityShowcase[] = [
  {
    id: "lagos",
    number: "01",
    city: "Lagos",
    tagline: "Lekki Corridor · Lagos Island · Badagry Coast",
    headline: "Indigo galleries, rainforest canopies & coastal history.",
    duration: "Half-Day or Full-Day Curated Ride",
    driverName: "Kemi Adebayo",
    driverRole: "Lagos Storyteller Driver · 6 yrs Cultural Host",
    driverOverview:
      "As we glide across the Lekki link bridge toward the Atlantic coast, your driver brings old Eko to life—from the royal Bini and Awori settlements to Afro-Brazilian returnee master builders and contemporary Nigerian art.",
    guideHandoff:
      "Private curator walk inside Nike Art Gallery, ranger-led canopy walk at Lekki Conservation Centre, and accredited heritage historians in Badagry.",
    slides: [
      {
        name: "Nike Art Gallery, Lekki",
        tag: "5-Storey Art Sanctuary",
        image:
          "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=1200&q=85",
        caption:
          "Over 8,000 Nigerian paintings, indigo Adire textiles, and sculptures across five gallery floors.",
        spotStory:
          "On the drive to Elegushi, Kemi shares how Chief (Mrs.) Nike Davies-Okundaye revived centuries-old Yoruba cassava-paste Adire Eleko dyeing and built West Africa's most iconic living gallery.",
      },
      {
        name: "Lekki Conservation Canopy Walk",
        tag: "401m Rainforest Walkway",
        image:
          "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=85",
        caption:
          "Suspended above 78 hectares of coastal swamp forest teeming with Mona monkeys and peacocks.",
        spotStory:
          "Before you step onto Africa's longest canopy walkway, your driver explains how this protected wetland buffer preserves the original lagoon flora that once covered all of Victoria Island and Lekki.",
      },
      {
        name: "Badagry Heritage Lagoon & 1845 Storey House",
        tag: "Coastal Living History",
        image:
          "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=85",
        caption:
          "Calm palm-lined lagoon waters leading to the historic Gberefu peninsula and early missionary landmarks.",
        spotStory:
          "Cruising west along the coastal corridor, hear how Bishop Samuel Ajayi Crowther translated the Yoruba Bible inside the 1845 timber building and how Badagry's coconut-lined waterways shaped Atlantic history.",
      },
      {
        name: "Freedom Park & Brazilian Quarter",
        tag: "Old Lagos Island",
        image:
          "https://images.unsplash.com/photo-1577948000111-9c970dfe3743?auto=format&fit=crop&w=1200&q=85",
        caption:
          "From an 1882 colonial brick prison to Lagos Island's most vibrant open-air arts and music amphitheater.",
        spotStory:
          "Driving past Campos Square and Broad Street, your driver points out the ornate stucco arches built by 19th-century Aguda artisans before handing you over for an evening cultural tour inside Freedom Park.",
      },
    ],
  },
  {
    id: "abuja",
    number: "02",
    city: "Abuja",
    tagline: "Zuma Corridor · Gurara Falls · Ushafa & Jabi",
    headline: "Ancient monoliths, roaring cascades & Gbagyi pottery.",
    duration: "Half-Day City or Full-Day Waterfall Trail",
    driverName: "Ibrahim Danjuma",
    driverRole: "Abuja Storyteller Driver · Historian & Geographer",
    driverOverview:
      "Abuja is far more than boulevards and ministries. As the city opens up to towering granite inselbergs, Ibrahim narrates the ancient Gbagyi kingdoms, traditional clay craft, and the rivers carving through central Nigeria.",
    guideHandoff:
      "Hands-on pottery session with Ushafa women artisans, guided riverside hike at Gurara Waterfalls, and sunset summit walk at Katampe Hill.",
    slides: [
      {
        name: "Zuma Rock Monolith",
        tag: "725m Natural Monolith",
        image:
          "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
        caption:
          "Rising nearly twice the height of Aso Rock at the northern gateway to the Federal Capital Territory.",
        spotStory:
          "As the massive rock face fills your windshield, Ibrahim recounts Gbagyi folklore of the 'watchman monolith' whose natural crevices form a human face watching over travelers entering Abuja.",
      },
      {
        name: "Gurara Waterfalls Cascade",
        tag: "30m Wide River Drop",
        image:
          "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=85",
        caption:
          "White-water curtains plunging over a dramatic 200-meter rock shelf surrounded by evergreen valley mist.",
        spotStory:
          "Along the Suleja-Minna scenic road, learn the indigenous legend of Gurara and Gura before your on-site eco-guide leads you down the rock trail to feel the cool spray of the falls.",
      },
      {
        name: "Ushafa Traditional Pottery Village",
        tag: "Ladi Kwali Heritage",
        image:
          "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1200&q=85",
        caption:
          "Centuries-old Gbagyi coil-pottery techniques passed down without a mechanical wheel.",
        spotStory:
          "Passing through Bwari's rolling hills, your driver shares the story of Dr. Ladi Kwali—whose portrait graces the 20 Naira note—before you sit with master potters in Ushafa.",
      },
      {
        name: "Katampe Hill & Jabi Lake Sunset",
        tag: "Center of Nigeria",
        image:
          "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
        caption:
          "Golden evening light over the geographical center-point of Nigeria and Jabi's calm waterfront.",
        spotStory:
          "Wind down your Abuja journey as Ibrahim explains the 1976 master plan that placed the capital at the exact heart of the country, ending with a guided sunset walk by the water.",
      },
    ],
  },
  {
    id: "calabar",
    number: "03",
    city: "Calabar",
    tagline: "Kwa Gorge · Agbokim Falls · Old Residency & Obudu",
    headline: "Seven-stream waterfalls, rainforest gorges & Efik heritage.",
    duration: "Full-Day Rainforest or Highland Excursion",
    driverName: "Etim Bassey",
    driverRole: "Calabar Storyteller Driver · Cross River Custodian",
    driverOverview:
      "From the historic port of Old Calabar to the emerald canopy of Cross River National Park, Etim weaves together Efik royal court stories, Nsibidi symbols, and the untamed waterfalls of the eastern borderlands.",
    guideHandoff:
      "Rainforest descent of 234 stone steps at Kwa Falls, eco-ranger tour at Agbokim's seven cascades, and curator access at the 1884 Old Residency.",
    slides: [
      {
        name: "Agbokim & Kwa Waterfalls",
        tag: "7-Stream Rainforest Cascade",
        image:
          "https://images.unsplash.com/photo-1546587348-d12660c30c50?auto=format&fit=crop&w=1200&q=85",
        caption:
          "Seven distinct streams tumbling over a horse-shoe cliff into a lush tropical rainforest amphitheater.",
        spotStory:
          "Driving past cocoa estates and giant mahogany trees, Etim shares the folklore of the sacred Kwa river canyon before your local guide walks you down the 234 shaded stone steps to the waterfall basin.",
      },
      {
        name: "Obudu Mountain Resort Clouds",
        tag: "1,600m Highland Plateau",
        image:
          "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85",
        caption:
          "Cool mountain air, winding horseshoe bends, and rolling clouds above the Sankwala Mountains.",
        spotStory:
          "Ascending the famous 22 hairpin bends of the plateau, your driver narrates the ecology of the montane cloud forest and the highland communities living above the mist.",
      },
      {
        name: "Afi Mountain Canopy & Drill Sanctuary",
        tag: "Biodiversity Hotspot",
        image:
          "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=85",
        caption:
          "One of Africa's oldest surviving tropical rainforests and home to rare Cross River primates.",
        spotStory:
          "Listen to stories of conservation pioneers and indigenous forest stewardship as we drive through Boki toward the suspended treetop bridges of Afi Mountain.",
      },
      {
        name: "Old Calabar Marina & 1884 Residency",
        tag: "First Southern Capital",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
        caption:
          "Overlooking the Calabar River estuary where pre-colonial Efik trade met Victorian timber architecture.",
        spotStory:
          "Cruising along the Calabar River breeze, Etim decodes the ancient Nsibidi ideographic script of the Ekpe society before handing you to a museum historian at the 1884 Glasgow-built Residency.",
      },
    ],
  },
];

export function CuratedRoutesSection() {
  const [cityIndex, setCityIndex] = useState<number>(0);
  const [photoIndex, setPhotoIndex] = useState<number>(0);

  const activeCity = CITY_SHOWCASES[cityIndex];
  const activeSlide = activeCity.slides[photoIndex] || activeCity.slides[0];

  const handleSelectCity = (idx: number) => {
    setCityIndex(idx);
    setPhotoIndex(0);
  };

  const handlePrevPhoto = () => {
    setPhotoIndex((prev) =>
      prev === 0 ? activeCity.slides.length - 1 : prev - 1
    );
  };

  const handleNextPhoto = () => {
    setPhotoIndex((prev) =>
      prev === activeCity.slides.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevCity = () => {
    const nextIdx =
      cityIndex === 0 ? CITY_SHOWCASES.length - 1 : cityIndex - 1;
    handleSelectCity(nextIdx);
  };

  const handleNextCity = () => {
    const nextIdx =
      cityIndex === CITY_SHOWCASES.length - 1 ? 0 : cityIndex + 1;
    handleSelectCity(nextIdx);
  };

  return (
    <section className="routes-section" id="routes">
      <div className="wrap">
        {/* Section Header + 3 City Slider Tabs */}
        <div className="routes-header">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <span className="eyebrow">
              Pilot Launch Hubs · Lagos · Abuja · Calabar
            </span>
            <h2>Stories waiting on every road.</h2>
            <p>
              Select a city below and slide through real landmarks—from Nike Art
              Gallery in Lagos to Zuma Rock in Abuja and the rainforest
              waterfalls of Calabar.
            </p>
          </div>

          <div className="city-slider-controls">
            <div className="city-tabs" role="tablist" aria-label="Select city">
              {CITY_SHOWCASES.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelectCity(idx)}
                  className={`city-tab-btn ${
                    cityIndex === idx ? "active" : ""
                  }`}
                >
                  <span className="city-tab-num">{item.number}</span>
                  <span>{item.city}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Open Showcase Slider (No cramped small cards) */}
        <div className="showcase-slider-wrap">
          {/* LEFT: Large Visual Multi-Image Slider */}
          <div className="showcase-gallery">
            <div className="showcase-main-stage">
              <img
                key={activeSlide.image}
                src={activeSlide.image}
                alt={activeSlide.name}
                className="showcase-main-img"
              />
              <div className="showcase-img-gradient" />

              {/* Top Overlay Badges */}
              <div className="showcase-top-bar">
                <span className="showcase-city-pill">
                  📍 {activeCity.city} · Photo {photoIndex + 1} of{" "}
                  {activeCity.slides.length}
                </span>
                <span className="showcase-tag-pill">{activeSlide.tag}</span>
              </div>

              {/* Left / Right Slider Arrows */}
              <button
                type="button"
                className="slider-arrow slider-arrow-left"
                onClick={handlePrevPhoto}
                aria-label="Previous landmark photo"
              >
                ‹
              </button>
              <button
                type="button"
                className="slider-arrow slider-arrow-right"
                onClick={handleNextPhoto}
                aria-label="Next landmark photo"
              >
                ›
              </button>

              {/* Bottom Caption Overlay on Big Photo */}
              <div className="showcase-bottom-caption">
                <div className="showcase-landmark-title">
                  {activeSlide.name}
                </div>
                <p className="showcase-landmark-sub">{activeSlide.caption}</p>
              </div>
            </div>

            {/* 4-Photo Thumbnail Strip Below Main Image */}
            <div className="showcase-thumbs-row">
              {activeCity.slides.map((slide, sIdx) => (
                <button
                  key={slide.name}
                  type="button"
                  onClick={() => setPhotoIndex(sIdx)}
                  className={`showcase-thumb-btn ${
                    photoIndex === sIdx ? "active" : ""
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.name}
                    className="showcase-thumb-img"
                    loading="lazy"
                  />
                  <div className="showcase-thumb-overlay" />
                  <span className="showcase-thumb-label">
                    {sIdx + 1}. {slide.name.split(",")[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Editorial Story & Route Details */}
          <div className="showcase-details">
            <div>
              <div className="showcase-meta-row">
                <span className="showcase-tagline">{activeCity.tagline}</span>
                <span className="showcase-duration">⏱ {activeCity.duration}</span>
              </div>

              <h3 className="showcase-headline">{activeCity.headline}</h3>

              <p className="showcase-overview">{activeCity.driverOverview}</p>

              {/* Interactive Landmark Stop Selector */}
              <div className="showcase-stops-section">
                <div className="showcase-stops-title">
                  Click any stop along the {activeCity.city} route to view its
                  photo & story:
                </div>
                <div className="showcase-stops-pills">
                  {activeCity.slides.map((slide, sIdx) => (
                    <button
                      key={slide.name}
                      type="button"
                      onClick={() => setPhotoIndex(sIdx)}
                      className={`showcase-stop-pill ${
                        photoIndex === sIdx ? "active" : ""
                      }`}
                    >
                      <span className="stop-pill-index">0{sIdx + 1}</span>
                      <span>{slide.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Landmark Story Box */}
              <div className="showcase-story-quote">
                <div className="showcase-story-header">
                  <span>🎙️ In-Car Story approaching {activeSlide.name}</span>
                  <span className="showcase-driver-tag">
                    Host: {activeCity.driverName}
                  </span>
                </div>
                <p>&ldquo;{activeSlide.spotStory}&rdquo;</p>
              </div>
            </div>

            {/* Bottom Guide Handoff + Area Switcher */}
            <div className="showcase-footer">
              <div className="showcase-handoff">
                <span className="handoff-dot" />
                <div>
                  <strong>Accredited On-Site Guides:</strong>{" "}
                  {activeCity.guideHandoff}
                </div>
              </div>

              <div className="showcase-area-nav">
                <button
                  type="button"
                  onClick={handlePrevCity}
                  className="area-nav-btn"
                >
                  ← Prev Location
                </button>
                <div className="area-dots">
                  {CITY_SHOWCASES.map((c, idx) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => handleSelectCity(idx)}
                      className={`area-dot ${cityIndex === idx ? "active" : ""}`}
                      aria-label={`Switch to ${c.city}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={handleNextCity}
                  className="area-nav-btn primary"
                >
                  Next:{" "}
                  {
                    CITY_SHOWCASES[(cityIndex + 1) % CITY_SHOWCASES.length]
                      .city
                  }{" "}
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
