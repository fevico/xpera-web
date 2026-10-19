"use client";

import React from "react";

export function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">Rident Drive</div>
            <p>
              Attraction-first tourism, guided by certified Storyteller Drivers.
              Built in Lagos, for every traveler arriving somewhere new.
            </p>
          </div>
          <div className="footer-col">
            <h5>Get in touch</h5>
            <a href="mailto:hello@ridentdrive.com">
              hello@ridentdrive.com
            </a>
            <a href="mailto:partners@ridentdrive.com">
              partners@ridentdrive.com
            </a>
            <a href="mailto:invest@ridentdrive.com">
              invest@ridentdrive.com
            </a>
          </div>
          <div className="footer-col">
            <h5>Explore</h5>
            <a href="#how">How it works</a>
            <a href="#drivers">For drivers</a>
            <a href="#about">About</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Rident Drive. All rights reserved.</span>
          <span>Lagos, Nigeria</span>
        </div>
      </div>
    </footer>
  );
}
