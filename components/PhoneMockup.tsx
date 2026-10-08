"use client";

import React from "react";

export function PhoneMockup() {
  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[360px]">
      {/* Ambient background glow */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/30 via-emerald-500/20 to-amber-300/20 rounded-[48px] blur-xl opacity-75 animate-pulse" />

      {/* Smartphone frame */}
      <div className="relative rounded-[40px] bg-[#0c1418] border-[6px] border-slate-700/80 shadow-2xl p-4 overflow-hidden">
        {/* Notch */}
        <div className="w-28 h-4 bg-slate-800 rounded-full mx-auto mb-3 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-slate-900 mr-2" />
          <div className="w-8 h-1 bg-slate-700 rounded-full" />
        </div>

        {/* Inner App Screen */}
        <div className="space-y-3.5 text-left">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-400 to-emerald-600 flex items-center justify-center text-xs font-bold text-slate-950">
                X
              </div>
              <div>
                <div className="text-xs font-bold text-white leading-tight">Xepera Experience</div>
                <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Live Tour In Progress
                </div>
              </div>
            </div>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30">
              GPS Active
            </span>
          </div>

          {/* Active Card */}
          <div className="relative rounded-2xl overflow-hidden border border-white/15 h-36 bg-slate-800">
            <img
              src="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=600&q=80"
              alt="Olumo Rock"
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-3 flex flex-col justify-end">
              <span className="text-[9px] uppercase tracking-wider text-amber-300 font-bold">
                En Route (18 mins away)
              </span>
              <h4 className="text-xs font-bold text-white">Olumo Rock Ancient Citadel</h4>
              <p className="text-[10px] text-slate-300">Pickup: Victoria Island, Lagos</p>
            </div>
          </div>

          {/* Driver Narration Card */}
          <div className="p-3 rounded-2xl bg-gradient-to-br from-slate-900 to-emerald-950/70 border border-emerald-500/30 space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 font-bold text-xs">
                  FO
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white flex items-center gap-1">
                    Capt. Femi O.
                    <span className="text-[9px] text-amber-400">★ 4.99</span>
                  </div>
                  <div className="text-[9px] text-emerald-300">Certified Chauffeur-Storyteller</div>
                </div>
              </div>
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[9px] font-medium animate-pulse">
                Speaking Now 🎙️
              </span>
            </div>

            {/* Waveform */}
            <div className="bg-black/40 rounded-xl p-2.5 border border-white/5 space-y-1.5">
              <div className="flex items-center justify-between text-[10px] text-slate-300">
                <span className="font-medium text-amber-300 flex items-center gap-1">
                  <svg width="12" height="12" className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                  </svg>
                  The 1830 Wartime Caves
                </span>
                <span className="text-slate-400 font-mono text-[9px]">02:14 / 04:15</span>
              </div>

              <div className="h-6 flex items-center justify-center gap-1 px-1">
                {[...Array(16)].map((_, i) => (
                  <span
                    key={i}
                    className="soundwave-bar w-1 bg-gradient-to-t from-emerald-500 to-amber-400 rounded-full"
                    style={{
                      animationDelay: `${(i % 5) * 0.15}s`,
                      height: `${Math.max(6, (i * 7) % 24)}px`,
                    }}
                  />
                ))}
              </div>
            </div>

            <p className="text-[10px] italic text-slate-300 line-clamp-2">
              &quot;As we pass the Ogun river, notice the granite rocks on the horizon. In 1830, the Egba warriors used these secret caves...&quot;
            </p>
          </div>

          {/* Guide Handoff Preview */}
          <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-emerald-600/30 flex items-center justify-center text-[10px] text-emerald-300 font-bold">
                🏛️
              </div>
              <div>
                <div className="text-[10px] font-semibold text-white">On-Site Guide Ready</div>
                <div className="text-[8px] text-slate-400">Baba Alao (Certified Custodian)</div>
              </div>
            </div>
            <span className="text-[9px] text-amber-400 font-medium">Stage 2 Ready</span>
          </div>
        </div>

        {/* Bottom Tab Bar */}
        <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-around text-slate-400 text-[9px]">
          <span className="text-amber-400 font-bold flex flex-col items-center">
            <span>🧭</span> Explore
          </span>
          <span className="flex flex-col items-center">
            <span>🚗</span> Rides
          </span>
          <span className="flex flex-col items-center">
            <span>🎙️</span> Stories
          </span>
          <span className="flex flex-col items-center">
            <span>👤</span> Profile
          </span>
        </div>
      </div>
    </div>
  );
}
