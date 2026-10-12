"use client";

import React, { useState } from "react";

interface NavbarProps {
  onOpenModal: (role: "traveler" | "driver") => void;
}

export function Navbar({ onOpenModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="topnav">
      <div className="wrap navrow">
        <a href="#top" className="brand">
          <span className="mark">X</span>
          Xpera Vianautix
        </a>

        <div className="navlinks">
          <a href="#how">How it works</a>
          <a href="#drivers">For Drivers</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <button
          onClick={() => onOpenModal("traveler")}
          className="navcta hidden sm:inline-block cursor-pointer"
        >
          Get early access
        </button>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="navmenu-toggle"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[var(--line)] px-6 py-4 space-y-3">
          <a
            href="#how"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-semibold text-[var(--muted)] hover:text-[var(--terracotta)]"
          >
            How it works
          </a>
          <a
            href="#drivers"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-semibold text-[var(--muted)] hover:text-[var(--terracotta)]"
          >
            For Drivers
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-semibold text-[var(--muted)] hover:text-[var(--terracotta)]"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-semibold text-[var(--muted)] hover:text-[var(--terracotta)]"
          >
            Contact
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenModal("traveler");
            }}
            className="w-full text-center py-2.5 rounded-full bg-[var(--espresso)] text-white font-bold text-sm cursor-pointer"
          >
            Get early access
          </button>
        </div>
      )}
    </nav>
  );
}
