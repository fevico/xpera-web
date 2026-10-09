"use client";

import React, { useState } from "react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
      
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#070c0e]/90 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-emerald-800 p-0.5 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#070c0e] rounded-[10px] flex items-center justify-center">
              <svg
                width="20"
                height="20"
                className="w-5 h-5 text-amber-400 transform group-hover:rotate-45 transition-transform duration-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold tracking-wider text-white font-serif-luxury flex items-center gap-1.5">
              XEPERA
            </span>
            <span className="text-[10px] tracking-widest uppercase text-amber-400/80 font-medium">
              The Story Begins on the Road
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#how-it-works" className="hover:text-amber-400 transition-colors">
            How It Works
          </a>
          <a href="#audio-experience" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            The Story Ride
          </a>
          <a href="#destinations" className="hover:text-amber-400 transition-colors">
            Destinations
          </a>
          <a href="#academy" className="hover:text-amber-400 transition-colors">
            Trained Storytellers
          </a>
          <a href="#safety" className="hover:text-amber-400 transition-colors">
            Safety & Comfort
          </a>
          <a href="#faq" className="hover:text-amber-400 transition-colors">
            FAQ
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#waitlist"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-emerald-600 text-white font-semibold text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all"
          >
            <span className="flex items-center gap-2">
              Join Early Access
              <svg width="16" height="16" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200"
          aria-label="Toggle Menu"
        >
          <svg width="24" height="24" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a1114] border-b border-white/10 px-6 py-6 space-y-4">
          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-amber-400 font-medium">How It Works</a>
          <a href="#audio-experience" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-amber-400 font-medium">The Story Ride</a>
          <a href="#destinations" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-amber-400 font-medium">Destinations</a>
          <a href="#academy" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-amber-400 font-medium">Trained Specialists</a>
          <a href="#safety" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-amber-400 font-medium">Safety</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-amber-400 font-medium">FAQ</a>
          <a href="#waitlist" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-amber-500 to-emerald-600 text-white font-semibold">Join Waitlist</a>
        </div>
      )}
    </header>
  );
}
