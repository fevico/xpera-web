"use client";

import React, { useState } from "react";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalRole, setModalRole] = useState<"traveler" | "driver">("traveler");
  const [emailInput, setEmailInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleOpenModal = (role: "traveler" | "driver") => {
    setModalRole(role);
    setSubmitted(false);
    setEmailInput("");
    setNameInput("");
    setModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setSubmitted(true);
  };

  return (
    <div>
      {/* ---------- Nav ---------- */}
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
            onClick={() => handleOpenModal("traveler")}
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

        {/* Mobile menu */}
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
                handleOpenModal("traveler");
              }}
              className="w-full text-center py-2.5 rounded-full bg-[var(--espresso)] text-white font-bold text-sm"
            >
              Get early access
            </button>
          </div>
        )}
      </nav>

      {/* ---------- Hero ---------- */}
      <section className="hero" id="top">
        <div className="wrap hero-grid">
          <div>
            <h1>
              Every trip starts
              <br />
              with <span className="thin">somewhere worth</span>
              <br />
              going.
            </h1>
            <p className="lede">
              Discover a place, then let a certified local guide you through it.
              Xpera Vianautix matches travelers with vetted Storyteller Drivers
              who narrate the route as they drive it.
            </p>
            <div className="cta-row">
              <button
                onClick={() => handleOpenModal("traveler")}
                className="btn btn-primary"
              >
                Get early access
              </button>
              <a href="#drivers" className="btn btn-outline">
                Drive with us
              </a>
            </div>
          </div>

          {/* Route Artwork */}
          <div className="route-art">
            <svg
              viewBox="0 0 420 440"
              style={{ width: "100%", height: "100%" }}
              className="overflow-visible"
            >
              <path
                d="M60,400 C110,360 90,290 150,260 C210,230 200,160 270,130 C320,108 330,70 370,45"
                fill="none"
                stroke="#B85042"
                strokeWidth="3"
                strokeDasharray="1 11"
                strokeLinecap="round"
              />
              <circle cx="60" cy="400" r="8" fill="#24140F" />
              <circle cx="150" cy="260" r="7" fill="#7C9885" />
              <circle cx="270" cy="130" r="7" fill="#7C9885" />
              <circle cx="370" cy="45" r="9" fill="#B85042" />
            </svg>

            {/* Stop 1 */}
            <div className="route-stop" style={{ left: "2%", bottom: "3%" }}>
              <div className="route-dot" style={{ background: "#24140F" }}></div>
              <div className="route-label">
                You are here
                <span className="sub">Lagos, Nigeria</span>
              </div>
            </div>

            {/* Stop 2 */}
            <div className="route-stop" style={{ left: "30%", bottom: "40%" }}>
              <div className="route-dot" style={{ background: "#7C9885" }}></div>
              <div className="route-label">
                Lekki Conservation
                <span className="sub">25 min away</span>
              </div>
            </div>

            {/* Stop 3 */}
            <div className="route-stop" style={{ left: "56%", bottom: "63%" }}>
              <div className="route-dot" style={{ background: "#7C9885" }}></div>
              <div className="route-label">
                Nike Art Gallery
                <span className="sub">15 min away</span>
              </div>
            </div>

            {/* Stop 4 */}
            <div className="route-stop" style={{ left: "76%", top: "6%" }}>
              <div className="route-dot" style={{ background: "#B85042" }}></div>
              <div className="route-label">
                Freedom Park
                <span className="sub">Final stop</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Narrative band ---------- */}
      <div className="narrative">
        <div className="wrap">
          <p>
            Most apps get you from one point to another.{" "}
            <em>Ours gets you to know the place in between</em> — the driver who
            shows up isn&apos;t just driving, they&apos;re certified to tell you
            why the stop matters.
          </p>
        </div>
      </div>

      {/* ---------- How it works ---------- */}
      <section className="section" id="how">
        <div className="wrap">
          <div className="section-head">
            <h2>How it works</h2>
            <p>
              Five steps from opening the app to being dropped back home, safely
              and with a story to tell.
            </p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="num">1</div>
              <h3>Discover</h3>
              <p>
                Open the app and see curated, AI-vetted attractions near you —
                automatically.
              </p>
            </div>
            <div className="step">
              <div className="num">2</div>
              <h3>Build the trip</h3>
              <p>
                Pick up to three stops. Cost is calculated for you, before you
                book.
              </p>
            </div>
            <div className="step">
              <div className="num">3</div>
              <h3>Match a driver</h3>
              <p>
                Choose from certified, nearby Storyteller Drivers — rated, with
                languages and experience shown.
              </p>
            </div>
            <div className="step">
              <div className="num">4</div>
              <h3>Ride &amp; discover</h3>
              <p>
                Live tracking and safety check-ins run quietly, while your
                driver narrates each stop.
              </p>
            </div>
            <div className="step">
              <div className="num">5</div>
              <h3>Close &amp; review</h3>
              <p>
                Rate your driver and every place you visited — it helps the next
                traveler decide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Journey strip divider ---------- */}
      <div className="journey-strip"></div>

      {/* ---------- Driver profile ---------- */}
      <section className="driver-section" id="drivers">
        <div className="wrap driver-grid">
          <div className="driver-card">
            <div className="driver-avatar">AT</div>
            <h3>Amaka T.</h3>
            <div className="role">Certified Storyteller Driver, Lagos</div>
            <div
              style={{
                fontSize: "0.88rem",
                lineHeight: 1.5,
                color: "#D9C9C0",
              }}
            >
              &ldquo;I didn&apos;t just learn the roads — I learned the stories
              behind every stop on my route. That&apos;s what makes a trip with
              me different.&rdquo;
            </div>
            <div className="driver-stats">
              <div>
                <strong>4.9</strong>Rating
              </div>
              <div>
                <strong>English, Yoruba</strong>Languages
              </div>
              <div>
                <strong>120+</strong>Trips guided
              </div>
            </div>
          </div>

          <div>
            <h2>Every driver earns that badge the hard way.</h2>
            <p className="lede">
              Before anyone appears in a traveler&apos;s app, they pass a dual
              vetting pipeline — an AI-scored storytelling assessment, and
              approval from a local ambassador who stakes their own reputation
              on the recommendation.
            </p>
            <div className="vet-list">
              <div className="vet-item">
                <span className="chk">✓</span>
                In-app storytelling training, specific to their routes and city
              </div>
              <div className="vet-item">
                <span className="chk">✓</span>
                AI-scored assessment before any human review begins
              </div>
              <div className="vet-item">
                <span className="chk">✓</span>
                Final approval from a vetted local ambassador
              </div>
              <div className="vet-item">
                <span className="chk">✓</span>
                70% of every fare goes directly to the driver who earned it
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Watch section ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <h2>Watch, before you go</h2>
            <p>
              Real clips from creators and past travelers — every one
              AI-verified against the attraction it claims to show, before it
              ever reaches your feed.
            </p>
          </div>
          <div className="watch-grid">
            <div className="watch-card">
              <div className="bg1"></div>
              <div className="grad"></div>
              <span className="badge">✓ AI-verified</span>
              <div className="play">
                <span>
                  <div className="tri"></div>
                </span>
              </div>
              <div className="cap">Canopy walk at sunrise 🌿</div>
            </div>

            <div className="watch-card">
              <div className="bg2"></div>
              <div className="grad"></div>
              <span className="badge">✓ AI-verified</span>
              <div className="play">
                <span>
                  <div className="tri"></div>
                </span>
              </div>
              <div className="cap">Live jazz, Sunday evenings 🎷</div>
            </div>

            <div className="watch-card">
              <div className="bg3"></div>
              <div className="grad"></div>
              <span className="badge">✓ AI-verified</span>
              <div className="play">
                <span>
                  <div className="tri"></div>
                </span>
              </div>
              <div className="cap">The carvers of Nike Gallery</div>
            </div>

            <div className="watch-card">
              <div className="bg4"></div>
              <div className="grad"></div>
              <span className="badge">✓ AI-verified</span>
              <div className="play">
                <span>
                  <div className="tri"></div>
                </span>
              </div>
              <div className="cap">Calabar&apos;s quiet waterfront</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Safety band ---------- */}
      <section className="safety-band">
        <div className="wrap">
          <div className="section-head">
            <h2>Safety isn&apos;t a feature. It&apos;s the floor.</h2>
            <p>Every trip, every time — not an upgrade you have to ask for.</p>
          </div>
          <div className="safety-grid">
            <div className="safety-card">
              <div className="safety-icon">🛡️</div>
              <h3>Live, monitored trips</h3>
              <p>
                Real-time tracking and automated check-ins run in the background
                of every ride, with an always-visible SOS control.
              </p>
            </div>
            <div className="safety-card">
              <div className="safety-icon">✓</div>
              <h3>Dual-vetted drivers</h3>
              <p>
                AI assessment and human ambassador approval, both required before
                a driver can accept a single trip.
              </p>
            </div>
            <div className="safety-card">
              <div className="safety-icon">💬</div>
              <h3>Everything stays in-app</h3>
              <p>
                No phone numbers exchanged. Every conversation is logged
                against the trip, for your safety and ours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Two audiences ---------- */}
      <section className="section">
        <div className="wrap">
          <div className="audience-grid">
            <div className="audience-card traveler">
              <h3>For travelers</h3>
              <p>
                Land somewhere new and already know where to go — and who to
                trust to take you there.
              </p>
              <button
                onClick={() => handleOpenModal("traveler")}
                className="btn btn-primary"
              >
                Get early access
              </button>
            </div>

            <div className="audience-card driver">
              <h3>For drivers &amp; creators</h3>
              <p>
                Turn local knowledge into income — as a certified Storyteller
                Driver, or as an ambassador who vets and earns alongside them.
              </p>
              <button
                onClick={() => handleOpenModal("driver")}
                className="btn btn-primary"
              >
                Apply to join
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Founder note ---------- */}
      <section className="founder-section" id="about">
        <div className="wrap founder-grid">
          <div className="founder-photo">AA</div>
          <div>
            <blockquote>
              &ldquo;I built Xpera because I kept watching travelers pass
              through incredible places with no one to tell them why those
              places mattered. A ride should never be the least memorable part
              of the trip.&rdquo;
            </blockquote>
            <div className="name">Alexander Adekunle Adeyemi</div>
            <div className="cred">
              Founder, Xpera Vianautix · NIHOTOUR Certified, Hospitality &amp;
              Tourism
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Roadmap timeline ---------- */}
      <section className="roadmap-section">
        <div className="wrap">
          <div className="section-head">
            <h2>Where we&apos;re headed</h2>
            <p>
              Launching with the core experience first, then building outward.
            </p>
          </div>
          <div className="timeline">
            <div className="tl-item">
              <div className="tl-dot">1</div>
              <h4>Pilot</h4>
              <p>
                Lagos, Abuja, and Calabar. Attraction discovery, Storyteller
                trips, and the full safety core.
              </p>
            </div>
            <div className="tl-item">
              <div className="tl-dot">2</div>
              <h4>Marketplace</h4>
              <p>
                Local artisan goods, group and fleet travel, a loyalty passport
                for returning travelers.
              </p>
            </div>
            <div className="tl-item">
              <div className="tl-dot">3</div>
              <h4>Pan-African</h4>
              <p>
                Multi-lingual support, expansion across West, East, and Southern
                Africa.
              </p>
            </div>
            <div className="tl-item">
              <div className="tl-dot">4</div>
              <h4>Global network</h4>
              <p>
                AR cultural overlays, eco-tourism recognition, a
                creator-ambassador network at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer id="contact">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <div className="footer-brand">Xpera Vianautix</div>
              <p>
                Attraction-first tourism, guided by certified Storyteller
                Drivers. Built in Lagos, for every traveler arriving somewhere
                new.
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

      {/* ---------- Early Access Modal ---------- */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 space-y-5 relative shadow-2xl border border-[var(--line)]">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-[var(--muted)] hover:text-[var(--ink)] text-xl font-bold w-8 h-8 rounded-full flex items-center justify-center"
            >
              ✕
            </button>

            {!submitted ? (
              <>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[var(--ink)]">
                    {modalRole === "traveler"
                      ? "Join Early Access"
                      : "Drive With Xpera"}
                  </h3>
                  <p className="text-sm text-[var(--muted)] mt-1">
                    {modalRole === "traveler"
                      ? "Be the first to experience story-driven journeys across Lagos, Abuja & Calabar."
                      : "Apply to become a certified Storyteller Driver or Ambassador."}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-[var(--ink)] mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={nameInput}
                      onChange={(e) => setNameInput(e.target.value)}
                      placeholder="e.g. Tunde Adeyemi"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-[var(--line)] bg-[var(--sand)] text-[var(--ink)] text-sm focus:outline-none focus:border-[var(--terracotta)]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[var(--ink)] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="e.g. tunde@example.com"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-[var(--line)] bg-[var(--sand)] text-[var(--ink)] text-sm focus:outline-none focus:border-[var(--terracotta)]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-[var(--terracotta)] hover:bg-[var(--terracotta-dark)] text-white font-bold text-sm transition-colors cursor-pointer"
                  >
                    {modalRole === "traveler"
                      ? "Get Early Access"
                      : "Submit Application"}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-4 space-y-3">
                <div className="w-12 h-12 rounded-full bg-[var(--sage)]/20 text-[var(--sage)] flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h3 className="font-serif text-xl font-bold text-[var(--ink)]">
                  You&apos;re on the list!
                </h3>
                <p className="text-xs text-[var(--muted)] leading-relaxed">
                  Thank you, {nameInput || "Explorer"}! We&apos;ll notify{" "}
                  <strong>{emailInput}</strong> as soon as the pilot launches.
                </p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="mt-2 px-6 py-2 rounded-full bg-[var(--espresso)] text-white text-xs font-bold"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
