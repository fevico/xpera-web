"use client";

import React from "react";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Discover & Book on App",
      desc: "Browse hand-picked Nigerian historical, cultural, and eco-tourism sites. Choose your pickup location, group size, and custom preferences with transparent all-inclusive pricing.",
      color: "amber",
    },
    {
      num: "02",
      title: "Doorstep Chauffeur Pickup",
      desc: "No navigating chaotic interstate motor parks or stressful taxi haggling. A vetted, certified driver arrives right at your home, hotel, or airport in a pristine, air-conditioned vehicle.",
      color: "emerald",
    },
    {
      num: "03",
      title: "The In-Transit Storytelling",
      desc: "Your journey is the destination. Your trained driver brings the route alive with indigenous folklore, historical chronicles, architectural trivia, and regional music as you travel.",
      color: "amber",
    },
    {
      num: "04",
      title: "Certified On-Site Tour",
      desc: "Arrive smoothly at the destination where an accredited, licensed local tour guide welcomes you for a deep, private walking tour with exclusive access and photography assistance.",
      color: "emerald",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#091014] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            A Revolution in Tourism & Mobility
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-white">
            How Xepera Redefines Exploring Nigeria
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            From doorstep pickup to the peak of the mountain, every second is crafted for safety, comfort, and rich cultural enlightenment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className={`group p-6 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 hover:border-${step.color}-500/40 transition-all`}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-${step.color}-500/10 border border-${step.color}-500/30 flex items-center justify-center text-${step.color}-400 font-bold text-lg mb-5 group-hover:scale-110 transition-transform`}
              >
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300">
                {step.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
