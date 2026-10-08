"use client";

import React from "react";

export function Footer() {
  return (
    <footer className="bg-[#04080a] border-t border-white/10 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-emerald-600 flex items-center justify-center font-bold text-black text-sm">
                X
              </div>
              <span className="text-xl font-bold text-white font-serif-luxury tracking-wider">
                XEPERA
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Nigeria&apos;s first story-driven tourism & chauffeur mobility network. We connect doorstep rides, historical oral folklore, and certified on-site guides into one unforgettable journey.
            </p>
            <div className="flex items-center gap-3 text-slate-400 pt-2">
              <span className="text-emerald-400 font-medium flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                HQ: Lagos, Nigeria
              </span>
              <span>•</span>
              <span>Mobile App Launching 2026</span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Initial Launch Hubs</h4>
            <ul className="space-y-2">
              <li><a href="#destinations" className="hover:text-amber-400 transition-colors">Lagos (Badagry & Lekki)</a></li>
              <li><a href="#destinations" className="hover:text-amber-400 transition-colors">Ogun (Olumo Rock)</a></li>
              <li><a href="#destinations" className="hover:text-amber-400 transition-colors">Osun (Erin-Ijesha Waterfalls)</a></li>
              <li><a href="#destinations" className="hover:text-amber-400 transition-colors">Cross River (Obudu Mountain)</a></li>
              <li><a href="#destinations" className="hover:text-amber-400 transition-colors">Abuja / Niger (Gurara & Zuma)</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="hover:text-amber-400 transition-colors">How It Works</a></li>
              <li><a href="#audio-experience" className="hover:text-amber-400 transition-colors">In-Ride Story Demo</a></li>
              <li><a href="#academy" className="hover:text-amber-400 transition-colors">Drive for Xepera</a></li>
              <li><a href="#academy" className="hover:text-amber-400 transition-colors">Guide for Xepera</a></li>
              <li><a href="#safety" className="hover:text-amber-400 transition-colors">Safety Standards</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Contact & Inquiries</h4>
            <ul className="space-y-2">
              <li className="text-slate-300">hello@xepera.com</li>
              <li className="text-slate-300">press@xepera.com</li>
              <li><a href="#waitlist" className="hover:text-amber-400 transition-colors">Investor & Partner Access</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">FAQ & Support</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-500">
            © 2026 Xepera Technologies Inc. All rights reserved. Made with pride in Nigeria 🇳🇬
          </p>
          <div className="flex items-center gap-6 text-[11px] text-slate-500">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
            <a href="#" className="hover:text-slate-400">Safety Charter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
