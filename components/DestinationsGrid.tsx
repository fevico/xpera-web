"use client";

import React from "react";
import { Destination, DestinationCategory } from "../data/destinations";

interface DestinationsGridProps {
  destinations: Destination[];
  activeCategory: DestinationCategory;
  setActiveCategory: (category: DestinationCategory) => void;
  onSelectDestination: (destination: Destination) => void;
}

export function DestinationsGrid({
  destinations,
  activeCategory,
  setActiveCategory,
  onSelectDestination,
}: DestinationsGridProps) {
  const tabs = [
    { id: "all", label: "All Experiences" },
    { id: "heritage", label: "Heritage & History" },
    { id: "nature", label: "Nature & Waterfalls" },
    { id: "art", label: "Art & Culture" },
    { id: "highlands", label: "Highlands & Mountain" },
  ];

  return (
    <section id="destinations" className="py-20 bg-[#080e12] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              Starting In Nigeria
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-white">
              Hand-Crafted Nigerian Journeys
            </h2>
            <p className="text-slate-400 text-sm max-w-xl">
              Select your next adventure. Every package includes private round-trip chauffeur pickup, transit storytelling, entrance fees, and certified on-ground guide.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as DestinationCategory)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === tab.id
                    ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                    : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="group rounded-3xl bg-slate-900/60 border border-white/10 hover:border-amber-500/40 overflow-hidden shadow-xl transition-all flex flex-col"
            >
              <div className="relative h-56 w-full overflow-hidden bg-slate-800">
                <img
                  src={dest.image}
                  alt={dest.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-semibold text-amber-300 border border-amber-400/30">
                    {dest.tag}
                  </span>
                </div>
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-bold text-white flex items-center gap-1 border border-white/20">
                  <span className="text-amber-400">★</span> {dest.rating} ({dest.reviews})
                </div>

                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[11px] text-amber-300 font-medium flex items-center gap-1">
                    <svg width="14" height="14" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {dest.location}
                  </span>
                  <h3 className="text-lg font-bold text-white font-serif-luxury mt-0.5 leading-snug">
                    {dest.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-amber-500/[0.06] border border-amber-500/20">
                    <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wide">
                      🎙️ Transit Story:
                    </div>
                    <p className="text-xs text-slate-300 mt-1 italic line-clamp-3">
                      &quot;{dest.storySnippet}&quot;
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Included Experience:
                    </div>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {dest.highlights.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="text-emerald-400">✓</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase text-slate-400 font-semibold">Estimated Package</div>
                    <div className="text-xs font-bold text-amber-300">{dest.priceRange}</div>
                  </div>
                  <button
                    onClick={() => onSelectDestination(dest)}
                    className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-amber-500 hover:text-slate-950 text-white font-semibold text-xs transition-colors"
                  >
                    View Itinerary
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
