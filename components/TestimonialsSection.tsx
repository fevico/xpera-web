"use client";

import React from "react";

interface TestimonialItem {
  id: string;
  guestName: string;
  guestRole: string;
  guestAvatar: string;
  city: string;
  routeTaken: string;
  hosts: string;
  tripPhoto: string;
  tripPhotoCaption: string;
  rating: string;
  date: string;
  quote: string;
  highlightTag: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "review-lagos",
    guestName: "Adaora Nwosu",
    guestRole: "Diaspora Traveler · Visiting from London, UK",
    guestAvatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    city: "Lagos",
    routeTaken: "Lekki Canopy Walk → Nike Art Gallery → Freedom Park",
    hosts: "Driver Kemi A. + Curator Tunde O.",
    tripPhoto:
      "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=800&q=80",
    tripPhotoCaption: "Private gallery walkthrough at Nike Art Gallery, Lekki",
    rating: "5.0 ★",
    date: "Verified Pilot Trip · Lagos",
    quote:
      "I’ve visited Lagos four times, usually sitting in silent Ubers wondering about the history of the neighborhoods we passed. With Xpera, Kemi turned the drive across Lekki into a warm conversation about Yoruba indigo textiles—and when we arrived at Nike Art Gallery, our curator was already waiting with our passes. Zero stress, total peace of mind.",
    highlightTag: "Door-to-Door Escorted · Zero Queue",
  },
  {
    id: "review-abuja",
    guestName: "Marcus & Elena Vance",
    guestRole: "Expat Couple · Based in Maitama, Abuja",
    guestAvatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80",
    city: "Abuja",
    routeTaken: "Zuma Rock Pass → Ushafa Pottery → Gurara Waterfalls",
    hosts: "Driver Ibrahim D. + Guide Amina K.",
    tripPhoto:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80",
    tripPhotoCaption: "Afternoon spray at Gurara Waterfalls & Ushafa Village",
    rating: "5.0 ★",
    date: "Verified Pilot Trip · Abuja",
    quote:
      "We always wanted to explore Gurara Waterfalls and Ushafa Pottery Village outside central Abuja, but didn't know which driver to trust for a full-day highway outing. Ibrahim's knowledge of Gbagyi history was extraordinary, our live trip link kept our colleagues updated, and molding clay with the women in Ushafa was our favorite Saturday in Nigeria.",
    highlightTag: "Highway Safe · Live GPS Shared",
  },
  {
    id: "review-calabar",
    guestName: "Chinedu & Somto Okafor",
    guestRole: "Anniversary Getaway · Port Harcourt to Calabar",
    guestAvatar:
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=300&q=80",
    city: "Calabar",
    routeTaken: "Old Residency Museum → Kwa Gorge → Agbokim Cascades",
    hosts: "Driver Etim B. + Eco-Ranger Bassey",
    tripPhoto:
      "https://images.unsplash.com/photo-1546587348-d12660c30c50?auto=format&fit=crop&w=800&q=80",
    tripPhotoCaption: "The seven-stream rainforest drop at Agbokim Falls",
    rating: "4.9 ★",
    date: "Verified Pilot Trip · Calabar",
    quote:
      "Seeing the seven streams of Agbokim Waterfalls in person felt surreal. Etim picked us up at our hotel in a spotless SUV, shared fascinating Efik stories of Old Calabar along the rainforest corridor, and handed us over to a certified eco-ranger at the gorge. Having one upfront price with all entry fees included made it effortless.",
    highlightTag: "All-Inclusive Tickets · Local Folklore",
  },
];

export function TestimonialsSection() {
  return (
    <section className="testimonials-section" id="reviews">
      <div className="wrap">
        <div className="testimonials-top-row">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <span className="eyebrow">
              Genuine Traveler Reviews · Verified Pilot Rides
            </span>
            <h2>Stories from the backseat.</h2>
            <p>
              Hear from diaspora returnees, weekend explorers, and expats who
              experienced Lagos, Abuja, and Calabar with an Xpera Storyteller
              Driver and on-site guide.
            </p>
          </div>

          {/* Trust & Confidence Summary Pill Box */}
          <div className="trust-summary-box">
            <div className="trust-summary-score">4.96 ★</div>
            <div>
              <div className="trust-summary-title">
                Verified Pilot Satisfaction
              </div>
              <div className="trust-summary-sub">
                Across 180+ escorted cultural rides in Lagos, Abuja & Calabar
              </div>
            </div>
          </div>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((item) => (
            <article key={item.id} className="testimonial-card">
              {/* Destination Experience Photo Banner */}
              <div className="testimonial-photo-wrap">
                <img
                  src={item.tripPhoto}
                  alt={item.tripPhotoCaption}
                  className="testimonial-photo"
                  loading="lazy"
                />
                <div className="testimonial-photo-grad" />
                <span className="testimonial-city-badge">
                  ✓ {item.date}
                </span>
                <span className="testimonial-rating-badge">{item.rating}</span>
                <div className="testimonial-photo-cap">
                  📸 {item.tripPhotoCaption}
                </div>
              </div>

              <div className="testimonial-body">
                <div>
                  <div className="testimonial-route-pill">
                    <strong>Route:</strong> {item.routeTaken}
                  </div>

                  <p className="testimonial-quote">&ldquo;{item.quote}&rdquo;</p>
                </div>

                <div>
                  <div className="testimonial-highlight-row">
                    <span className="testimonial-tag">{item.highlightTag}</span>
                    <span className="testimonial-hosts">{item.hosts}</span>
                  </div>

                  <div className="testimonial-author">
                    <img
                      src={item.guestAvatar}
                      alt={item.guestName}
                      className="testimonial-avatar"
                      loading="lazy"
                    />
                    <div>
                      <div className="testimonial-name">{item.guestName}</div>
                      <div className="testimonial-role">{item.guestRole}</div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
