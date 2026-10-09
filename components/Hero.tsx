"use client";

import React from "react";
import { PhoneMockup } from "./PhoneMockup";

interface HeroProps {
  waitlistEmail: string;
  setWaitlistEmail: (email: string) => void;
}

export function Hero({ waitlistEmail, setWaitlistEmail }: HeroProps) {
  const scrollToWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    const el = document.getElementById("waitlist");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-amber-500/15 via-emerald-600/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium">
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury font-extrabold tracking-tight text-white leading-[1.15]">
              Travel Isn&apos;t Just Where You Go.{" "}
              <span className="gold-gradient-text block mt-2">
                It&apos;s the Stories Along the Way.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Discover Nigeria&apos;s most breathtaking heritage with <strong className="text-amber-300 font-semibold">doorstep ride pickup</strong> just like Uber. On your way there, our certified chauffeur brings the land alive with <strong className="text-emerald-300 font-semibold">captivating oral folklore & history</strong>—seamlessly handing you over to an accredited local guide on site.
            </p>

            {/* Waitlist Quick CTA */}
            <div className="max-w-xl mx-auto lg:mx-0 pt-2">
              <form
                onSubmit={scrollToWaitlist}
                className="flex flex-col sm:flex-row gap-3 p-2 rounded-2xl bg-slate-900/90 border border-amber-500/30 shadow-2xl backdrop-blur-xl"
              >
                <div className="flex-1 flex items-center px-4 py-2 text-slate-300">
                  <svg width="20" height="20" className="w-5 h-5 text-amber-400 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206" />
                  </svg>
                  <input
                    type="email"
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    placeholder="Enter your email for VIP access..."
                    className="bg-transparent w-full text-white placeholder-slate-400 focus:outline-none text-sm"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-emerald-600 text-white font-bold text-sm shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all shrink-0 flex items-center justify-center gap-2"
                >
                  <span>Reserve VIP Pass</span>
                  <svg width="16" height="16" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
              <div className="flex items-center justify-center lg:justify-start gap-4 mt-3 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-amber-300">
                  <svg width="14" height="14" className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Early Bird: 30% Off First 2 Tours
                </span>
                <span>•</span>
                <span className="text-emerald-400 font-medium">3,420+ On Waitlist</span>
              </div>
            </div>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-500/40 transition-colors">
                <div className="text-amber-400 font-bold text-base flex items-center gap-2">
                  <span>🚗</span> Doorstep Pickup
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Chauffeured directly from your home or hotel.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/40 transition-colors">
                <div className="text-emerald-400 font-bold text-base flex items-center gap-2">
                  <span>🎙️</span> In-Ride Stories
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Trained drivers share rich oral heritage & lore.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-500/40 transition-colors">
                <div className="text-amber-300 font-bold text-base flex items-center gap-2">
                  <span>🏛️</span> Certified Guides
                </div>
                <p className="text-xs text-slate-400 mt-1">
                  Accredited historians guide your walk on site.
                </p>
              </div>
            </div>
          </div>

          {/* Right Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
