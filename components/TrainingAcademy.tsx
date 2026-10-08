"use client";

import React from "react";

interface TrainingAcademyProps {
  onApplyRole: (role: "driver" | "guide") => void;
}

export function TrainingAcademy({ onApplyRole }: TrainingAcademyProps) {
  return (
    <section id="academy" className="py-20 bg-[#060c0e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            The Xepera Academy Standard
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-white">
            Two Trained Specialists. One Flawless Journey.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Unlike regular ride-hailing apps, every Xepera chauffeur and local guide undergoes specialized masterclasses to guarantee unparalleled hospitality, storytelling excellence, and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chauffeur Column */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-amber-950/30 border border-amber-500/30 shadow-xl space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-2xl text-amber-400">
                🚗
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">Phase 1: Transit Specialist</span>
                <h3 className="text-2xl font-bold text-white font-serif-luxury">
                  The Chauffeur-Storyteller
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Our drivers are not just navigators; they are custodians of Nigerian oral tradition. They turn transit time into an enchanting prelude before you step foot at the landmark.
            </p>

            <div className="space-y-3 pt-2">
              {[
                {
                  title: "Historical & Folklore Masterclasses",
                  desc: "Trained on verified Nigerian regional histories, kingdom dynasties, and local anecdotes.",
                },
                {
                  title: "Defensive Driving & Route Safety",
                  desc: "Comprehensive vetting, VIP defensive driving protocols, and vehicle comfort audits.",
                },
                {
                  title: "Hospitality & Guest Etiquette",
                  desc: "Discrete, respectful communication with options for quiet drives or active storytelling.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 p-3 rounded-xl bg-black/30 border border-white/5">
                  <span className="text-amber-400 font-bold text-sm">✦</span>
                  <div>
                    <h4 className="text-xs font-bold text-white">{item.title}</h4>
                    <p className="text-[11px] text-slate-300 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-amber-300 font-semibold">Are you a driver with passion?</span>
              <a
                href="#waitlist"
                onClick={() => onApplyRole("driver")}
                className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
              >
                Apply as Storyteller Driver
              </a>
            </div>
          </div>

          {/* Guide Column */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-emerald-950/30 border border-emerald-500/30 shadow-xl space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-2xl text-emerald-400">
                🏛️
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold">Phase 2: On-Site Master</span>
                <h3 className="text-2xl font-bold text-white font-serif-luxury">
                  The Certified Tour Guide
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              When you step out of the vehicle, your on-site guide takes over. Living on or around the heritage site, they unlock doors, sacred paths, and hidden viewpoints visitors rarely see.
            </p>

            <div className="space-y-3 pt-2">
              {[
                {
                  title: "Accredited Heritage Curators",
                  desc: "Licensed by tourism boards and certified in deep site archaeology and sacred folklore.",
                },
                {
                  title: "First-Aid & Trail Safety Certified",
                  desc: "Trained in terrain navigation, mountain safety, and medical emergency response.",
                },
                {
                  title: "Photography & Cultural Respect",
                  desc: "Skilled in capturing memories while honoring sacred traditions.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 p-3 rounded-xl bg-black/30 border border-white/5">
                  <span className="text-emerald-400 font-bold text-sm">✦</span>
                  <div>
                    <h4 className="text-xs font-bold text-white">{item.title}</h4>
                    <p className="text-[11px] text-slate-300 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-emerald-300 font-semibold">Are you a local guide or historian?</span>
              <a
                href="#waitlist"
                onClick={() => onApplyRole("guide")}
                className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors"
              >
                Apply as Tour Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
