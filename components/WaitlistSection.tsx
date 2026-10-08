"use client";

import React, { useState } from "react";

interface WaitlistSectionProps {
  waitlistEmail: string;
  setWaitlistEmail: (email: string) => void;
  waitlistName: string;
  setWaitlistName: (name: string) => void;
  waitlistRole: string;
  setWaitlistRole: (role: string) => void;
  waitlistCity: string;
  setWaitlistCity: (city: string) => void;
  waitlistSubmitted: boolean;
  setWaitlistSubmitted: (submitted: boolean) => void;
  vipTicketNumber: string;
  setVipTicketNumber: (num: string) => void;
}

export function WaitlistSection({
  waitlistEmail,
  setWaitlistEmail,
  waitlistName,
  setWaitlistName,
  waitlistRole,
  setWaitlistRole,
  waitlistCity,
  setWaitlistCity,
  waitlistSubmitted,
  setWaitlistSubmitted,
  vipTicketNumber,
  setVipTicketNumber,
}: WaitlistSectionProps) {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail || !waitlistEmail.includes("@")) return;

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setVipTicketNumber(`XEP-2026-NGR-${randomNum}`);
    setWaitlistSubmitted(true);
  };

  const copyReferral = () => {
    navigator.clipboard.writeText(`https://xepera.com/join?ref=${vipTicketNumber}`);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <section id="waitlist" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#070c0e] via-[#091518] to-[#070c0e]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {!waitlistSubmitted ? (
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/90 border border-amber-500/40 shadow-2xl backdrop-blur-2xl space-y-8 text-center">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest font-bold text-amber-400 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                Exclusive Early Access
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-luxury font-bold text-white">
                Be the First to Experience <span className="gold-gradient-text">Xepera</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
                Reserve your VIP early-bird pass. The first 500 members receive an exclusive 30% discount on their first two journeys and early beta app testing.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 text-left max-w-xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Your Full Name</label>
                  <input
                    type="text"
                    value={waitlistName}
                    onChange={(e) => setWaitlistName(e.target.value)}
                    placeholder="e.g. Babatunde Okafor"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Email Address</label>
                  <input
                    type="email"
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    placeholder="e.g. babatunde@gmail.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-amber-400"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Primary City / Region</label>
                  <select
                    value={waitlistCity}
                    onChange={(e) => setWaitlistCity(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400"
                  >
                    <option value="Lagos">Lagos State</option>
                    <option value="Abuja">Abuja (FCT)</option>
                    <option value="Calabar">Calabar (Cross River)</option>
                    <option value="Ibadan">Ibadan (Oyo)</option>
                    <option value="Port Harcourt">Port Harcourt (Rivers)</option>
                    <option value="Enugu">Enugu State</option>
                    <option value="Diaspora">Visiting from Abroad / Diaspora</option>
                    <option value="Other">Other Nigerian City</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">I Want To Join As:</label>
                  <select
                    value={waitlistRole}
                    onChange={(e) => setWaitlistRole(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400"
                  >
                    <option value="traveler">Traveler / Tourism Explorer</option>
                    <option value="driver">Chauffeur-Storyteller (Driver)</option>
                    <option value="guide">Certified On-Ground Tour Guide</option>
                    <option value="partner">Attraction Site / Hospitality Partner</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-emerald-600 text-white font-bold text-base shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.01] transition-all"
              >
                Generate My VIP Early Access Pass 🎫
              </button>
            </form>
          </div>
        ) : (
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-amber-400/60 shadow-2xl space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-3xl mx-auto">
              🎉
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-bold text-emerald-400">
                Welcome to the Pioneer Circle
              </span>
              <h3 className="text-3xl font-bold font-serif-luxury text-white">
                You&apos;re on the Xepera VIP Access List!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Congratulations <strong className="text-amber-300">{waitlistName || "Explorer"}</strong>! Your early access boarding pass has been registered.
              </p>
            </div>

            <div className="max-w-md mx-auto p-6 rounded-2xl bg-gradient-to-br from-amber-950/60 via-black to-emerald-950/60 border-2 border-dashed border-amber-400/50 text-left space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-amber-400 text-black font-bold flex items-center justify-center text-xs">
                    X
                  </div>
                  <span className="font-serif-luxury font-bold text-white tracking-widest text-sm">
                    XEPERA VIP PASS
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/40">
                  VALIDATED
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase">Pass Holder</span>
                  <div className="font-bold text-white">{waitlistName || "VIP Guest"}</div>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase">Hub City</span>
                  <div className="font-bold text-amber-300">{waitlistCity}</div>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase">Role</span>
                  <div className="font-bold text-emerald-300 capitalize">{waitlistRole}</div>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase">Ticket ID</span>
                  <div className="font-mono font-bold text-amber-400">{vipTicketNumber}</div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
                <span>🎁 30% Off Maiden 2 Journeys</span>
                <span className="font-mono text-amber-300">NGR-2026-PILOT</span>
              </div>
            </div>

            <div className="max-w-md mx-auto space-y-3 pt-2">
              <div className="text-xs text-slate-400">Share your referral link with friends:</div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-black/40 border border-white/10">
                <input
                  type="text"
                  readOnly
                  value={`https://xepera.com/join?ref=${vipTicketNumber}`}
                  className="bg-transparent w-full text-xs text-slate-300 font-mono focus:outline-none px-2"
                />
                <button
                  onClick={copyReferral}
                  className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shrink-0 transition-colors"
                >
                  {copiedLink ? "Copied!" : "Copy Link"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
