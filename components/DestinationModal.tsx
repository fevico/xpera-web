"use client";

import React from "react";
import { Destination } from "../data/destinations";

interface DestinationModalProps {
  destination: Destination | null;
  onClose: () => void;
}

export function DestinationModal({ destination, onClose }: DestinationModalProps) {
  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-amber-500/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 flex items-center justify-center text-sm font-bold"
        >
          ✕
        </button>

        <div className="space-y-2">
          <span className="text-xs uppercase font-bold text-amber-400">
            {destination.location}
          </span>
          <h3 className="text-2xl font-bold font-serif-luxury text-white">
            {destination.title}
          </h3>
        </div>

        <div className="h-52 rounded-2xl overflow-hidden relative">
          <img
            src={destination.image}
            alt={destination.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-1">
          <div className="text-xs font-bold text-amber-300 uppercase">
            🎙️ En-Route Story Theme:
          </div>
          <p className="text-xs text-slate-200 italic">
            &quot;{destination.storySnippet}&quot;
          </p>
        </div>

        <div className="space-y-2">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">
            Full Experience Schedule:
          </h4>
          <ul className="space-y-1.5 text-xs text-slate-300">
            {destination.highlights.map((h, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span> {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div>
            <span className="text-[10px] text-slate-400 uppercase">Estimated All-Inclusive</span>
            <div className="text-sm font-bold text-amber-300">{destination.priceRange}</div>
          </div>
          <a
            href="#waitlist"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-emerald-600 text-white font-bold text-xs shadow-md"
          >
            Reserve on Waitlist
          </a>
        </div>
      </div>
    </div>
  );
}
