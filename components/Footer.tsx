"use client";

import React from "react";

export function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">Xpera Vianautix</div>
            <p>
              Attraction-first tourism, guided by certified Storyteller Drivers.
              Built in Lagos, for every traveler arriving somewhere new.
            </p>
          </div>
          <div className="footer-col">
            <h5>Get in touch</h5>
            <a href="mailto:hello@xperavianautix.com">
              hello@xperavianautix.com
            </a>
            <a href="mailto:partners@xperavianautix.com">
              partners@xperavianautix.com
            </a>
            <a href="mailto:invest@xperavianautix.com">
              invest@xperavianautix.com
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
          <span>© 2026 Xpera Vianautix. All rights reserved.</span>
          <span>Lagos, Nigeria</span>
        </div>
      </div>
    </footer>
  );
}
