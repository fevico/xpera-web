"use client";

import React from "react";

export function SafetyFeatures() {
  return (
    <section id="safety" className="py-20 bg-[#070d10] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              Peace of Mind Guaranteed
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-white leading-tight">
              Designed for Locals, Expats & the Global Diaspora.
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Traveling across Nigeria should feel inspiring, safe, and utterly effortless. We eliminate the friction of unvetted interstate travel so you can immerse yourself in pure cultural beauty.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-amber-400 font-bold text-sm mb-1">🛡️ Live SOS & GPS Tracking</div>
                <p className="text-xs text-slate-300">
                  Share your real-time journey link with loved ones abroad or at home with 24/7 support.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-emerald-400 font-bold text-sm mb-1">❄️ Premium AC Fleet</div>
                <p className="text-xs text-slate-300">
                  Clean, comfortable SUVs and executive sedans inspected for air conditioning and road safety.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-amber-400 font-bold text-sm mb-1">💳 100% Cashless & Upfront</div>
                <p className="text-xs text-slate-300">
                  No sudden fuel surcharges, park tout negotiations, or awkward tipping pressure.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="text-emerald-400 font-bold text-sm mb-1">🌍 Multilingual Storytellers</div>
                <p className="text-xs text-slate-300">
                  Narrations available in English, Yoruba, Igbo, Hausa, Pidgin, and French.
                </p>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-amber-950/20 border border-amber-500/20 shadow-xl space-y-3">
              <div className="text-amber-400 text-sm">★★★★★</div>
              <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                &ldquo;Visiting Nigeria from the UK, I always wanted to see Badagry and Olumo Rock, but navigating Lagos traffic and unvetted drivers felt intimidating. Xepera’s concept of having a trained driver pick you up at your hotel and narrate the history along the way is sheer genius.&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="w-9 h-9 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center text-xs font-bold text-amber-300">
                  TA
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Tunde Adeyemi</div>
                  <div className="text-[10px] text-slate-400">Diaspora Explorer (London, UK)</div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-emerald-950/20 border border-emerald-500/20 shadow-xl space-y-3">
              <div className="text-emerald-400 text-sm">★★★★★</div>
              <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                &ldquo;As someone living in Abuja who loves weekend road trips, having an app that bundles ride pickup + storyteller + tour guide is exactly what Nigerian tourism has been missing for decades.&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-xs font-bold text-emerald-300">
                  ZN
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Zainab Nwachukwu</div>
                  <div className="text-[10px] text-slate-400">Travel Blogger & Tech Professional (Abuja)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
