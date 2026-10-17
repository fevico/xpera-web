import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xpera Vianautix — See it. Book it. Live it.",
  description:
    "Discover a place, then let a certified local guide you through it. Xpera Vianautix matches travelers with vetted Storyteller Drivers who narrate the route as they drive it.",
  keywords: [
    "Xpera Vianautix",
    "Storyteller Drivers",
    "Nigeria Tourism",
    "Lagos Tours",
    "Abuja Tours",
    "Calabar Tours",
    "Freedom Park",
    "Lekki Conservation",
    "Nike Art Gallery",
    "Gurara Waterfalls",
    "Kwa Waterfalls",
    "Tourism Mobility Nigeria",
  ],
  authors: [{ name: "Xpera Vianautix" }],
  openGraph: {
    title: "Xpera Vianautix — See it. Book it. Live it.",
    description:
      "Every trip starts with somewhere worth going. Discover places with certified Storyteller Drivers across Lagos, Abuja, and Calabar.",
    siteName: "Xpera Vianautix",
    type: "website",
  },
};

const INLINE_CSS = `
  :root {
    --terracotta: #B85042;
    --terracotta-dark: #96382C;
    --espresso: #24140F;
    --espresso-2: #2E1B14;
    --sage: #7C9885;
    --sage-dark: #5F7A69;
    --sand: #F3EEE7;
    --ink: #2B2320;
    --muted: #8A7A72;
    --line: #E6DCD3;
    --card: #FFFFFF;

    --bg: #FFFFFF;
    --fg: var(--ink);
    --bg-alt: var(--sand);
  }
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    margin: 0;
    background: var(--bg);
    color: var(--fg);
    font-family: 'Manrope', -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  img, svg { max-width: 100%; }
  a { color: inherit; }
  .wrap { max-width: 1180px; margin: 0 auto; padding: 0 1.5rem; }
  .display { font-family: 'Fraunces', serif; font-optical-sizing: auto; }
  .eyebrow {
    display: inline-block;
    font-size: 0.74rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--terracotta);
    margin-bottom: 0.55rem;
  }

  /* Nav */
  nav.topnav {
    position: sticky; top: 0; z-index: 50;
    background: rgba(255, 255, 255, 0.94);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--line);
  }
  .navrow { display: flex; align-items: center; justify-content: space-between; padding: 0.95rem 0; }
  .brand { display: flex; align-items: center; gap: 0.55rem; font-family: 'Fraunces', serif; font-weight: 600; font-size: 1.25rem; color: var(--fg); text-decoration: none; }
  .brand .mark { width: 32px; height: 32px; border-radius: 50%; background: var(--terracotta); display: flex; align-items: center; justify-content: center; color: white; font-size: 0.9rem; font-weight: 700; flex-shrink: 0; }
  .navlinks { display: flex; gap: 1.8rem; align-items: center; }
  .navlinks a { font-size: 0.92rem; font-weight: 600; text-decoration: none; color: var(--muted); transition: color 0.2s; }
  .navlinks a:hover { color: var(--terracotta); }
  .navcta { background: var(--espresso); color: white; padding: 0.55rem 1.25rem; border-radius: 999px; font-size: 0.88rem; font-weight: 700; text-decoration: none; border: none; cursor: pointer; transition: all 0.2s; }
  .navcta:hover { opacity: 0.92; transform: translateY(-1px); }
  .navmenu-toggle { display: none; background: none; border: none; font-size: 1.5rem; color: var(--fg); cursor: pointer; }
  @media (max-width: 768px) {
    .navlinks { display: none; }
    .navmenu-toggle { display: block; }
  }

  /* Hero */
  .hero { padding: 3.8rem 0 3.5rem; }
  .hero-grid { display: grid; grid-template-columns: 1.08fr 0.92fr; gap: 3.2rem; align-items: center; }
  @media (max-width: 880px) { .hero-grid { grid-template-columns: 1fr; gap: 2.5rem; } }
  .hero-eyebrow-pill {
    display: inline-flex; align-items: center; gap: 0.5rem;
    background: var(--sand); border: 1px solid var(--line);
    padding: 0.38rem 0.9rem; border-radius: 999px;
    font-size: 0.76rem; font-weight: 700; color: var(--fg);
    margin-bottom: 1.1rem;
  }
  .hero-live-dot {
    width: 8px; height: 8px; border-radius: 50%; background: var(--sage);
    box-shadow: 0 0 0 3px rgba(124, 152, 133, 0.25);
  }
  .hero h1 {
    font-family: 'Fraunces', serif;
    font-size: clamp(2.4rem, 5vw, 3.7rem); line-height: 1.06; font-weight: 600;
    margin: 0 0 1.15rem; color: var(--fg); letter-spacing: -0.01em;
  }
  .hero h1 .thin { font-weight: 400; color: var(--muted); }
  .hero p.lede { font-size: 1.08rem; line-height: 1.62; color: var(--muted); max-width: 48ch; margin: 0 0 1.7rem; }
  .hero p.lede strong { color: var(--fg); font-weight: 700; }
  .cta-row { display: flex; gap: 0.75rem; flex-wrap: wrap; }
  .btn { display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.85rem 1.55rem; border-radius: 999px; font-weight: 700; font-size: 0.93rem; text-decoration: none; border: none; cursor: pointer; transition: all 0.2s; }
  .btn-primary { background: var(--terracotta); color: white; }
  .btn-primary:hover { background: var(--terracotta-dark); transform: translateY(-1px); }
  .btn-outline { background: transparent; border: 1.5px solid var(--line); color: var(--fg); }
  .btn-outline:hover { border-color: var(--terracotta); color: var(--terracotta); background: rgba(184, 80, 66, 0.03); }

  /* Hero Trust Proof Strip */
  .hero-trust-strip {
    display: flex; align-items: center; gap: 1.2rem; flex-wrap: wrap;
    margin-top: 2rem; padding-top: 1.35rem; border-top: 1px solid var(--line);
  }
  .hero-trust-item { display: flex; flex-direction: column; }
  .hero-trust-item strong { font-family: 'Fraunces', serif; font-size: 1.08rem; font-weight: 600; color: var(--fg); }
  .hero-trust-item span { font-size: 0.74rem; color: var(--muted); font-weight: 600; }
  .hero-trust-divider { width: 1px; height: 28px; background: var(--line); }
  @media (max-width: 540px) { .hero-trust-divider { display: none; } }

  /* Hero Route + Floating Destination Photos */
  .route-art { position: relative; aspect-ratio: 1/1.05; width: 100%; max-width: 490px; margin: 0 auto; }
  .route-stop { position: absolute; display: flex; align-items: center; gap: 0.5rem; z-index: 3; }
  .route-dot { width: 13px; height: 13px; border-radius: 50%; border: 2.5px solid white; box-shadow: 0 0 0 1px var(--line); flex-shrink: 0; }
  .route-label { background: var(--card); border: 1px solid var(--line); border-radius: 10px; padding: 0.45rem 0.75rem; font-size: 0.76rem; font-weight: 700; color: var(--fg); box-shadow: 0 6px 18px rgba(36, 20, 15, 0.09); white-space: nowrap; }
  .route-label .sub { font-weight: 600; color: var(--muted); font-size: 0.68rem; display: block; margin-top: 2px; }
  .hero-photo-float {
    position: absolute; width: 158px; height: 112px; border-radius: 14px; overflow: hidden;
    border: 3px solid white; box-shadow: 0 12px 28px rgba(36, 20, 15, 0.16); z-index: 2;
    background: var(--espresso);
  }
  .hero-photo-top { top: 4%; left: 2%; transform: rotate(-3deg); }
  .hero-photo-bottom { bottom: 10%; right: 0%; transform: rotate(3deg); }
  @media (max-width: 520px) {
    .hero-photo-float { width: 120px; height: 86px; }
  }
  .hero-photo-img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .hero-photo-badge {
    position: absolute; bottom: 0; left: 0; right: 0;
    background: linear-gradient(180deg, transparent, rgba(20,11,8,0.88));
    color: white; font-size: 0.64rem; font-weight: 700; padding: 0.8rem 0.45rem 0.3rem;
  }

  /* Narrative Band */
  .narrative { padding: 3.8rem 0; background: var(--bg-alt); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .narrative .wrap { max-width: 780px; }
  .narrative p { font-family: 'Fraunces', serif; font-size: clamp(1.4rem, 3vw, 1.95rem); line-height: 1.38; font-weight: 500; color: var(--fg); margin: 0; }
  .narrative p em { font-style: italic; color: var(--terracotta); }

  /* Journey Strip */
  .journey-strip { height: 2px; background: repeating-linear-gradient(90deg, var(--terracotta) 0 10px, transparent 10px 20px); margin: 0 auto; max-width: 1180px; opacity: 0.55; }

  /* Steps Section + Service Evidence Strip */
  .section { padding: 4.8rem 0; }
  .section-head { max-width: 600px; margin-bottom: 2.8rem; }
  .section-head h2 { font-family: 'Fraunces', serif; font-size: clamp(1.8rem, 3.6vw, 2.4rem); font-weight: 600; margin: 0 0 0.6rem; color: var(--fg); }
  .section-head p { font-size: 1.02rem; color: var(--muted); line-height: 1.55; margin: 0; }
  .steps { display: grid; grid-template-columns: repeat(5, 1fr); gap: 1.35rem; }
  @media (max-width: 980px) { .steps { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 560px) { .steps { grid-template-columns: 1fr; } }
  .step {
    position: relative; background: var(--card); border: 1px solid var(--line);
    border-radius: 16px; padding: 1.25rem; box-shadow: 0 4px 14px rgba(36, 20, 15, 0.03);
  }
  .step-top-row { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.65rem; }
  .step .num { font-family: 'Fraunces', serif; font-size: 1.85rem; font-weight: 600; color: var(--terracotta); line-height: 1; }
  .step-tag { font-size: 0.66rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.04em; background: var(--sand); color: var(--fg); padding: 3px 8px; border-radius: 999px; }
  .step h3 { font-size: 1.02rem; font-weight: 700; margin: 0 0 0.4rem; color: var(--fg); }
  .step p { font-size: 0.85rem; color: var(--muted); line-height: 1.52; margin: 0; }

  /* Visual Service Evidence Strip inside How It Works */
  .evidence-strip {
    margin-top: 3rem; padding: 2rem; background: var(--sand);
    border-radius: 22px; border: 1px solid var(--line);
  }
  @media (max-width: 640px) { .evidence-strip { padding: 1.3rem; } }
  .evidence-header {
    display: flex; align-items: flex-end; justify-content: space-between; gap: 1rem;
    flex-wrap: wrap; margin-bottom: 1.5rem;
  }
  .evidence-header h3 { font-family: 'Fraunces', serif; font-size: 1.4rem; font-weight: 600; margin: 0; color: var(--fg); }
  .evidence-pill {
    background: var(--card); border: 1px solid var(--line); color: var(--sage-dark);
    font-size: 0.76rem; font-weight: 800; padding: 0.4rem 0.9rem; border-radius: 999px;
  }
  .evidence-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
  @media (max-width: 900px) { .evidence-grid { grid-template-columns: 1fr; } }
  .evidence-card {
    background: var(--card); border-radius: 16px; overflow: hidden;
    border: 1px solid var(--line); display: flex; flex-direction: column;
    box-shadow: 0 6px 18px rgba(36, 20, 15, 0.05);
  }
  .evidence-img-wrap { position: relative; height: 155px; width: 100%; overflow: hidden; background: var(--espresso); }
  .evidence-img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .evidence-img-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, transparent 40%, rgba(20,11,8,0.75) 100%); }
  .evidence-img-tag {
    position: absolute; bottom: 0.6rem; left: 0.75rem;
    background: rgba(36, 20, 15, 0.82); color: white; font-size: 0.68rem; font-weight: 700;
    padding: 3px 9px; border-radius: 999px; backdrop-filter: blur(4px);
  }
  .evidence-body { padding: 1.2rem; display: flex; flex-direction: column; flex: 1; justify-content: space-between; }
  .evidence-step-badge { font-size: 0.68rem; font-weight: 800; color: var(--terracotta); text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 0.35rem; display: block; }
  .evidence-body h4 { font-family: 'Fraunces', serif; font-size: 1.08rem; font-weight: 600; margin: 0 0 0.45rem; color: var(--fg); line-height: 1.28; }
  .evidence-body p { font-size: 0.84rem; color: var(--muted); line-height: 1.52; margin: 0 0 0.9rem; }
  .evidence-meta { font-size: 0.74rem; font-weight: 700; color: var(--fg); padding-top: 0.65rem; border-top: 1px dashed var(--line); }

  /* Curated Nigerian Routes Section (Lagos, Abuja, Calabar Multi-Image Slider Showcase) */
  .routes-section { padding: 4.8rem 0; background: var(--bg-alt); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .routes-header { display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 1.5rem; margin-bottom: 2.4rem; }
  .city-slider-controls { display: flex; align-items: center; gap: 0.75rem; }
  .city-tabs { display: flex; flex-wrap: wrap; gap: 0.6rem; background: var(--sand); padding: 0.38rem; border-radius: 999px; border: 1px solid var(--line); }
  .city-tab-btn {
    display: inline-flex; align-items: center; gap: 0.5rem;
    background: transparent; border: none; color: var(--muted);
    padding: 0.6rem 1.25rem; border-radius: 999px; font-size: 0.9rem; font-weight: 700;
    cursor: pointer; transition: all 0.2s; font-family: 'Manrope', sans-serif;
  }
  .city-tab-btn:hover { color: var(--fg); }
  .city-tab-btn.active { background: var(--terracotta); color: white; box-shadow: 0 4px 12px rgba(184, 80, 66, 0.28); }
  .city-tab-num { font-family: 'Fraunces', serif; font-size: 0.8rem; opacity: 0.8; font-weight: 600; }

  .showcase-slider-wrap {
    display: grid; grid-template-columns: 1.22fr 0.98fr; gap: 2.6rem; align-items: stretch;
  }
  @media (max-width: 960px) {
    .showcase-slider-wrap { grid-template-columns: 1fr; gap: 2rem; }
  }

  /* Left: Big Multi-Image Gallery Slider */
  .showcase-gallery { display: flex; flex-direction: column; gap: 0.9rem; }
  .showcase-main-stage {
    position: relative; width: 100%; height: 430px; border-radius: 22px; overflow: hidden;
    background: var(--espresso); box-shadow: 0 14px 36px rgba(36, 20, 15, 0.12);
    border: 1px solid var(--line);
  }
  @media (max-width: 640px) {
    .showcase-main-stage { height: 310px; }
  }
  .showcase-main-img {
    width: 100%; height: 100%; object-fit: cover; display: block;
    animation: fadeSlideIn 0.35s ease;
  }
  @keyframes fadeSlideIn {
    from { opacity: 0.65; transform: scale(1.02); }
    to { opacity: 1; transform: scale(1); }
  }
  .showcase-img-gradient {
    position: absolute; inset: 0;
    background: linear-gradient(180deg, rgba(20, 11, 8, 0.42) 0%, rgba(20, 11, 8, 0.04) 40%, rgba(20, 11, 8, 0.86) 100%);
    pointer-events: none;
  }
  .showcase-top-bar {
    position: absolute; top: 1rem; left: 1.1rem; right: 1.1rem;
    display: flex; justify-content: space-between; align-items: center; gap: 0.5rem; flex-wrap: wrap;
  }
  .showcase-city-pill {
    background: rgba(36, 20, 15, 0.78); backdrop-filter: blur(8px); color: #FFFBF7;
    font-size: 0.76rem; font-weight: 700; padding: 0.38rem 0.85rem; border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.16);
  }
  .showcase-tag-pill {
    background: rgba(124, 152, 133, 0.95); color: white; font-size: 0.72rem; font-weight: 800;
    padding: 0.36rem 0.85rem; border-radius: 999px; letter-spacing: 0.03em;
  }
  .slider-arrow {
    position: absolute; top: 50%; transform: translateY(-50%);
    width: 44px; height: 44px; border-radius: 50%;
    background: rgba(255, 251, 247, 0.88); backdrop-filter: blur(6px);
    border: 1px solid rgba(36, 20, 15, 0.12); color: var(--espresso);
    font-size: 1.65rem; line-height: 1; display: flex; align-items: center; justify-content: center;
    cursor: pointer; transition: all 0.2s; box-shadow: 0 4px 14px rgba(0, 0, 0, 0.18);
  }
  .slider-arrow:hover { background: var(--terracotta); color: white; transform: translateY(-50%) scale(1.06); }
  .slider-arrow-left { left: 1rem; }
  .slider-arrow-right { right: 1rem; }
  .showcase-bottom-caption {
    position: absolute; bottom: 1.15rem; left: 1.3rem; right: 1.3rem; color: white;
  }
  .showcase-landmark-title {
    font-family: 'Fraunces', serif; font-size: 1.45rem; font-weight: 600; margin-bottom: 0.25rem;
    text-shadow: 0 2px 8px rgba(0,0,0,0.45);
  }
  .showcase-landmark-sub {
    font-size: 0.86rem; color: #EFE4DC; margin: 0; line-height: 1.45; max-width: 58ch;
  }

  /* 4-Thumbnail Strip */
  .showcase-thumbs-row {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.7rem;
  }
  @media (max-width: 540px) {
    .showcase-thumbs-row { grid-template-columns: repeat(2, 1fr); }
  }
  .showcase-thumb-btn {
    position: relative; height: 82px; border-radius: 14px; overflow: hidden;
    border: 2.5px solid transparent; padding: 0; cursor: pointer; background: var(--espresso);
    transition: all 0.2s; text-align: left;
  }
  .showcase-thumb-btn:hover { transform: translateY(-2px); }
  .showcase-thumb-btn.active {
    border-color: var(--terracotta);
    box-shadow: 0 6px 16px rgba(184, 80, 66, 0.25);
  }
  .showcase-thumb-img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .showcase-thumb-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(20,11,8,0.8) 100%);
  }
  .showcase-thumb-btn.active .showcase-thumb-overlay {
    background: linear-gradient(180deg, rgba(184,80,66,0.1) 0%, rgba(20,11,8,0.65) 100%);
  }
  .showcase-thumb-label {
    position: absolute; bottom: 0.4rem; left: 0.5rem; right: 0.4rem;
    color: white; font-size: 0.68rem; font-weight: 700; line-height: 1.2;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }

  /* Right: Open Editorial Route Details */
  .showcase-details {
    display: flex; flex-direction: column; justify-content: space-between;
    padding: 0.4rem 0;
  }
  .showcase-meta-row {
    display: flex; align-items: center; justify-content: space-between; gap: 0.75rem;
    flex-wrap: wrap; margin-bottom: 0.65rem;
  }
  .showcase-tagline {
    font-size: 0.76rem; font-weight: 800; color: var(--terracotta);
    text-transform: uppercase; letter-spacing: 0.05em;
  }
  .showcase-duration {
    font-size: 0.78rem; font-weight: 700; color: var(--muted);
    background: var(--sand); padding: 0.28rem 0.7rem; border-radius: 999px;
  }
  .showcase-headline {
    font-family: 'Fraunces', serif; font-size: clamp(1.55rem, 2.6vw, 2.05rem);
    font-weight: 600; color: var(--fg); line-height: 1.18; margin: 0 0 0.85rem;
  }
  .showcase-overview {
    font-size: 0.95rem; color: var(--muted); line-height: 1.6; margin: 0 0 1.25rem;
  }
  .showcase-stops-section { margin-bottom: 1.25rem; }
  .showcase-stops-title {
    font-size: 0.76rem; font-weight: 800; color: var(--fg); margin-bottom: 0.55rem;
  }
  .showcase-stops-pills {
    display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;
  }
  @media (max-width: 500px) {
    .showcase-stops-pills { grid-template-columns: 1fr; }
  }
  .showcase-stop-pill {
    display: flex; align-items: center; gap: 0.5rem; text-align: left;
    background: var(--card); border: 1.5px solid var(--line); border-radius: 11px;
    padding: 0.55rem 0.75rem; font-size: 0.78rem; font-weight: 700; color: var(--fg);
    cursor: pointer; transition: all 0.2s; font-family: 'Manrope', sans-serif;
  }
  .showcase-stop-pill:hover { border-color: var(--terracotta); }
  .showcase-stop-pill.active {
    background: var(--sand); border-color: var(--terracotta); color: var(--terracotta-dark);
  }
  .stop-pill-index {
    font-family: 'Fraunces', serif; font-size: 0.75rem; font-weight: 700;
    color: var(--terracotta); flex-shrink: 0;
  }
  .showcase-story-quote {
    background: var(--card); border: 1px solid var(--line); border-left: 3.5px solid var(--terracotta);
    border-radius: 0 14px 14px 0; padding: 1rem 1.15rem; margin-bottom: 1.25rem;
    box-shadow: 0 4px 14px rgba(36, 20, 15, 0.04);
  }
  .showcase-story-header {
    display: flex; justify-content: space-between; align-items: center; gap: 0.5rem;
    flex-wrap: wrap; font-size: 0.74rem; font-weight: 800; color: var(--terracotta);
    margin-bottom: 0.4rem;
  }
  .showcase-driver-tag { color: var(--muted); font-weight: 700; }
  .showcase-story-quote p {
    font-size: 0.88rem; font-style: italic; color: var(--fg); line-height: 1.55; margin: 0;
  }
  .showcase-footer {
    border-top: 1px solid var(--line); padding-top: 1rem; display: flex; flex-direction: column; gap: 1rem;
  }
  .showcase-handoff {
    display: flex; align-items: flex-start; gap: 0.55rem; font-size: 0.82rem; color: var(--muted); line-height: 1.48;
  }
  .showcase-handoff strong { color: var(--fg); }
  .handoff-dot { width: 9px; height: 9px; border-radius: 50%; background: var(--sage); margin-top: 0.3rem; flex-shrink: 0; }
  .showcase-area-nav {
    display: flex; align-items: center; justify-content: space-between; gap: 0.75rem;
  }
  .area-nav-btn {
    background: var(--card); border: 1.5px solid var(--line); color: var(--fg);
    padding: 0.55rem 1.05rem; border-radius: 999px; font-size: 0.8rem; font-weight: 700;
    cursor: pointer; transition: all 0.2s; font-family: 'Manrope', sans-serif;
  }
  .area-nav-btn:hover { border-color: var(--terracotta); }
  .area-nav-btn.primary { background: var(--espresso); border-color: var(--espresso); color: white; }
  .area-nav-btn.primary:hover { background: var(--terracotta); border-color: var(--terracotta); }
  .area-dots { display: flex; gap: 0.45rem; align-items: center; }
  .area-dot {
    width: 9px; height: 9px; border-radius: 999px; background: var(--line);
    border: none; padding: 0; cursor: pointer; transition: all 0.2s;
  }
  .area-dot.active { width: 24px; background: var(--terracotta); }


  /* Dual-Host Cultural Pillars */
  .pillars-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.6rem; }
  @media (max-width: 820px) { .pillars-grid { grid-template-columns: 1fr; } }
  .pillar-card { border-radius: 20px; padding: 2.2rem; border: 1px solid var(--line); }
  .pillar-light { background: var(--sand); color: var(--fg); }
  .pillar-dark { background: var(--espresso); color: #F0E4DD; border-color: #3A2A22; }
  .pillar-tag {
    display: inline-block; font-size: 0.72rem; font-weight: 800; text-transform: uppercase;
    letter-spacing: 0.06em; padding: 4px 10px; border-radius: 999px; margin-bottom: 0.85rem;
  }
  .pillar-light .pillar-tag { background: rgba(184, 80, 66, 0.12); color: var(--terracotta); }
  .pillar-dark .pillar-tag { background: rgba(124, 152, 133, 0.22); color: #A9C4B1; }
  .pillar-card h3 { font-family: 'Fraunces', serif; font-size: 1.45rem; font-weight: 600; margin: 0 0 0.3rem; }
  .pillar-dark h3 { color: white; }
  .pillar-sub { font-size: 0.86rem; font-weight: 700; margin-bottom: 1rem; color: var(--terracotta); }
  .pillar-dark .pillar-sub { color: #D9C9C0; }
  .pillar-card p { font-size: 0.92rem; line-height: 1.6; margin: 0 0 1.25rem; }
  .pillar-light p { color: var(--muted); }
  .pillar-dark p { color: #D9C9C0; }
  .pillar-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.6rem; }
  .pillar-list li { display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.86rem; font-weight: 600; }
  .pillar-chk {
    width: 19px; height: 19px; border-radius: 50%; background: var(--sage); color: white;
    display: inline-flex; align-items: center; justify-content: center; font-size: 0.65rem; flex-shrink: 0; margin-top: 0.1rem;
  }

  /* In-Car Story Sampler */
  .sampler-section { padding: 4.8rem 0; background: var(--bg); border-top: 1px solid var(--line); }
  .sampler-grid { display: grid; grid-template-columns: 0.95fr 1.05fr; gap: 3rem; align-items: center; }
  @media (max-width: 880px) { .sampler-grid { grid-template-columns: 1fr; gap: 2rem; } }
  .sampler-section h2 { font-family: 'Fraunces', serif; font-size: clamp(1.8rem, 3.6vw, 2.35rem); font-weight: 600; margin: 0 0 0.75rem; color: var(--fg); }
  .sampler-lede { font-size: 0.98rem; color: var(--muted); line-height: 1.6; margin: 0 0 1.5rem; }
  .sampler-tabs { display: flex; flex-direction: column; gap: 0.65rem; }
  .sampler-tab {
    text-align: left; padding: 0.9rem 1.1rem; border-radius: 14px; border: 1.5px solid var(--line);
    background: var(--card); cursor: pointer; transition: all 0.2s;
  }
  .sampler-tab:hover { border-color: var(--muted); }
  .sampler-tab.active { border-color: var(--terracotta); background: var(--sand); }
  .tab-route { font-size: 0.9rem; font-weight: 700; color: var(--fg); margin-bottom: 0.2rem; }
  .tab-driver { font-size: 0.76rem; color: var(--muted); font-weight: 600; }
  .sampler-card {
    background: var(--espresso); color: #F0E4DD; border-radius: 22px; padding: 2rem;
    border: 1px solid #3A2A22; box-shadow: 0 14px 34px rgba(36, 20, 15, 0.14);
  }
  .sampler-card-header { display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; padding-bottom: 1.1rem; border-bottom: 1px solid #3A2A22; margin-bottom: 1rem; }
  .sampler-driver-info { display: flex; align-items: center; gap: 0.8rem; }
  .sampler-avatar {
    width: 46px; height: 46px; border-radius: 50%; background: var(--terracotta); color: white;
    display: flex; align-items: center; justify-content: center; font-family: 'Fraunces', serif; font-weight: 700; font-size: 1rem;
  }
  .sampler-name { font-family: 'Fraunces', serif; font-size: 1.1rem; font-weight: 600; color: white; }
  .sampler-sub { font-size: 0.76rem; color: #B29B90; }
  .live-pill {
    display: inline-flex; align-items: center; gap: 0.4rem; background: rgba(124, 152, 133, 0.2);
    color: #B9D3C0; font-size: 0.72rem; font-weight: 700; padding: 4px 10px; border-radius: 999px;
  }
  .pulse-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--sage); }
  .sampler-landmark { font-size: 0.8rem; font-weight: 700; color: #E2A99E; margin-bottom: 0.75rem; }
  .sampler-quote {
    font-family: 'Fraunces', serif; font-size: 1.02rem; line-height: 1.58; font-style: italic;
    color: #F6ECE6; margin: 0 0 1.25rem;
  }
  .wave-row {
    display: flex; align-items: center; justify-content: space-between; background: var(--espresso-2);
    padding: 0.65rem 1rem; border-radius: 12px; border: 1px solid #3A2A22; margin-bottom: 1rem;
  }
  .wave-bars { display: flex; align-items: center; gap: 4px; height: 30px; }
  .wave-bar { width: 3px; border-radius: 99px; background: var(--terracotta); opacity: 0.85; }
  .wave-time { font-size: 0.74rem; font-weight: 700; color: #B29B90; }
  .sampler-footer { font-size: 0.8rem; color: #D9C9C0; padding-top: 0.75rem; border-top: 1px solid #3A2A22; }
  .sampler-footer strong { color: white; }

  /* Driver Section */
  .driver-section { background: var(--espresso); color: #F0E4DD; padding: 4.8rem 0; }
  .driver-grid { display: grid; grid-template-columns: 0.92fr 1.08fr; gap: 3.5rem; align-items: center; }
  @media (max-width: 880px) { .driver-grid { grid-template-columns: 1fr; gap: 2.2rem; } }
  .driver-switcher-tabs { display: flex; gap: 0.5rem; margin-bottom: 0.9rem; flex-wrap: wrap; }
  .driver-switch-btn {
    background: rgba(255,255,255,0.06); border: 1px solid #3A2A22; color: #D9C9C0;
    padding: 0.45rem 0.95rem; border-radius: 999px; font-size: 0.78rem; font-weight: 700;
    cursor: pointer; transition: all 0.2s; font-family: 'Manrope', sans-serif;
  }
  .driver-switch-btn:hover { border-color: var(--terracotta); color: white; }
  .driver-switch-btn.active { background: var(--terracotta); border-color: var(--terracotta); color: white; }
  .driver-card { background: var(--espresso-2); border-radius: 20px; padding: 1.85rem; border: 1px solid #3A2A22; box-shadow: 0 12px 32px rgba(0, 0, 0, 0.28); }
  .driver-card-top { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
  .driver-photo {
    width: 72px; height: 72px; border-radius: 50%; object-fit: cover;
    border: 2.5px solid var(--terracotta); flex-shrink: 0;
  }
  .driver-verified-pill {
    display: inline-block; background: rgba(124, 152, 133, 0.22); color: #B9D3C0;
    font-size: 0.68rem; font-weight: 800; padding: 2px 8px; border-radius: 999px; margin-bottom: 0.25rem;
  }
  .driver-card h3 { font-family: 'Fraunces', serif; font-size: 1.35rem; margin: 0 0 0.15rem; color: white; }
  .driver-card .role { font-size: 0.82rem; color: #D9C9C0; }
  .driver-vehicle-bar {
    display: flex; flex-wrap: wrap; gap: 0.75rem; justify-content: space-between;
    background: rgba(0,0,0,0.22); border: 1px solid #3A2A22; border-radius: 10px;
    padding: 0.55rem 0.8rem; font-size: 0.74rem; font-weight: 700; color: #E2A99E;
    margin-bottom: 1rem;
  }
  .driver-stats { display: flex; gap: 1.5rem; flex-wrap: wrap; margin-top: 1.2rem; padding-top: 1.1rem; border-top: 1px solid #3A2A22; }
  .driver-stats div { font-size: 0.72rem; color: #B29B90; }
  .driver-stats strong { display: block; font-family: 'Fraunces', serif; font-size: 1.1rem; color: white; font-weight: 600; }
  .driver-section h2 { font-family: 'Fraunces', serif; font-size: clamp(1.8rem, 3.6vw, 2.4rem); font-weight: 600; color: white; margin: 0 0 1rem; }
  .driver-section .lede { color: #D9C9C0; font-size: 1.04rem; line-height: 1.6; max-width: 48ch; margin: 0 0 1.6rem; }
  .vet-list { display: flex; flex-direction: column; gap: 0.75rem; }
  .vet-item { display: flex; gap: 0.7rem; align-items: flex-start; font-size: 0.94rem; color: #E8DAD3; }
  .vet-item .chk { width: 22px; height: 22px; border-radius: 50%; background: var(--sage); color: white; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; flex-shrink: 0; margin-top: 0.1rem; font-weight: 700; }

  /* Watch Section (Real Travel Experience Photos) */
  .watch-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.2rem; }
  @media (max-width: 880px) { .watch-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 520px) { .watch-grid { grid-template-columns: 1fr; } }
  .watch-card {
    position: relative; aspect-ratio: 9/13; border-radius: 18px; overflow: hidden;
    box-shadow: 0 8px 24px rgba(36, 20, 15, 0.09); transition: all 0.28s ease;
    border: 2.5px solid transparent; background: var(--espresso);
  }
  .watch-card:hover { transform: translateY(-4px); }
  .watch-card.active-watch { border-color: var(--terracotta); box-shadow: 0 12px 30px rgba(184, 80, 66, 0.25); }
  .watch-card-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 0.45s ease; }
  .watch-card:hover .watch-card-img { transform: scale(1.05); }
  .watch-card .grad { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.05) 40%, rgba(18,10,7,0.9) 100%); }
  .watch-card .badge { position: absolute; top: 0.75rem; left: 0.75rem; background: rgba(124, 152, 133, 0.95); color: white; font-size: 0.66rem; font-weight: 800; padding: 4px 9px; border-radius: 999px; }
  .watch-duration { position: absolute; top: 0.75rem; right: 0.75rem; background: rgba(20, 11, 8, 0.72); color: white; font-size: 0.66rem; font-weight: 700; padding: 3px 8px; border-radius: 999px; backdrop-filter: blur(4px); }
  .watch-card .cap { position: absolute; bottom: 0.85rem; left: 0.85rem; right: 0.85rem; color: white; }
  .cap-title { font-size: 0.84rem; font-weight: 700; line-height: 1.32; margin-bottom: 0.25rem; }
  .cap-creator { font-size: 0.68rem; color: #D9C9C0; font-weight: 600; }
  .watch-card .play { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; pointer-events: none; }
  .watch-card .play span { width: 44px; height: 44px; border-radius: 50%; background: rgba(255, 255, 255, 0.28); backdrop-filter: blur(4px); display: flex; align-items: center; justify-content: center; transition: transform 0.2s; border: 1px solid rgba(255,255,255,0.4); }
  .watch-card:hover .play span { transform: scale(1.1); background: var(--terracotta); }
  .watch-card .tri { width: 0; height: 0; border-top: 6px solid transparent; border-bottom: 6px solid transparent; border-left: 10px solid white; margin-left: 2px; }
  .watch-story-bar {
    margin-top: 1.35rem; background: var(--sand); border: 1px solid var(--line);
    border-radius: 16px; padding: 1.15rem 1.4rem;
    display: flex; align-items: center; justify-content: space-between; gap: 1.25rem; flex-wrap: wrap;
  }
  .watch-story-left { display: flex; flex-direction: column; gap: 0.2rem; min-width: 220px; }
  .watch-story-pill { font-size: 0.7rem; font-weight: 800; color: var(--terracotta); text-transform: uppercase; letter-spacing: 0.04em; }
  .watch-story-left strong { font-family: 'Fraunces', serif; font-size: 1.05rem; color: var(--fg); }
  .watch-story-text { font-size: 0.86rem; color: var(--muted); font-style: italic; margin: 0; flex: 1; line-height: 1.5; }

  /* Testimonials Section (Genuine Customer Reviews & Destination Photos) */
  .testimonials-section {
    padding: 4.8rem 0; background: var(--bg-alt);
    border-top: 1px solid var(--line); border-bottom: 1px solid var(--line);
  }
  .testimonials-top-row {
    display: flex; align-items: flex-end; justify-content: space-between;
    gap: 1.5rem; flex-wrap: wrap; margin-bottom: 2.5rem;
  }
  .trust-summary-box {
    display: flex; align-items: center; gap: 1rem;
    background: var(--card); border: 1px solid var(--line);
    padding: 0.95rem 1.35rem; border-radius: 18px;
    box-shadow: 0 6px 20px rgba(36, 20, 15, 0.05);
  }
  .trust-summary-score {
    font-family: 'Fraunces', serif; font-size: 1.75rem; font-weight: 700;
    color: var(--terracotta); line-height: 1;
  }
  .trust-summary-title { font-size: 0.86rem; font-weight: 800; color: var(--fg); }
  .trust-summary-sub { font-size: 0.74rem; color: var(--muted); }
  .testimonials-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;
  }
  @media (max-width: 960px) { .testimonials-grid { grid-template-columns: 1fr; } }
  .testimonial-card {
    background: var(--card); border: 1px solid var(--line); border-radius: 20px;
    overflow: hidden; display: flex; flex-direction: column;
    box-shadow: 0 8px 24px rgba(36, 20, 15, 0.05); transition: transform 0.25s ease;
  }
  .testimonial-card:hover { transform: translateY(-4px); }
  .testimonial-photo-wrap {
    position: relative; height: 185px; width: 100%; overflow: hidden; background: var(--espresso);
  }
  .testimonial-photo { width: 100%; height: 100%; object-fit: cover; display: block; }
  .testimonial-photo-grad {
    position: absolute; inset: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.22) 0%, transparent 40%, rgba(20,11,8,0.84) 100%);
  }
  .testimonial-city-badge {
    position: absolute; top: 0.75rem; left: 0.75rem;
    background: rgba(124, 152, 133, 0.95); color: white;
    font-size: 0.68rem; font-weight: 800; padding: 3px 10px; border-radius: 999px;
  }
  .testimonial-rating-badge {
    position: absolute; top: 0.75rem; right: 0.75rem;
    background: rgba(36, 20, 15, 0.85); color: #F9D67A;
    font-size: 0.74rem; font-weight: 800; padding: 3px 9px; border-radius: 999px;
  }
  .testimonial-photo-cap {
    position: absolute; bottom: 0.6rem; left: 0.85rem; right: 0.85rem;
    color: #FFFBF7; font-size: 0.73rem; font-weight: 600;
  }
  .testimonial-body {
    padding: 1.4rem; display: flex; flex-direction: column; flex: 1; justify-content: space-between;
  }
  .testimonial-route-pill {
    font-size: 0.74rem; background: var(--sand); border: 1px solid var(--line);
    padding: 0.45rem 0.7rem; border-radius: 10px; color: var(--fg); margin-bottom: 0.9rem;
  }
  .testimonial-route-pill strong { color: var(--terracotta); }
  .testimonial-quote {
    font-size: 0.88rem; line-height: 1.58; color: var(--fg); font-style: italic;
    margin: 0 0 1.15rem;
  }
  .testimonial-highlight-row {
    display: flex; align-items: center; justify-content: space-between; gap: 0.5rem;
    flex-wrap: wrap; margin-bottom: 0.95rem; padding-bottom: 0.8rem; border-bottom: 1px dashed var(--line);
  }
  .testimonial-tag {
    font-size: 0.68rem; font-weight: 800; color: var(--terracotta);
    background: rgba(184, 80, 66, 0.1); padding: 3px 8px; border-radius: 6px;
  }
  .testimonial-hosts { font-size: 0.72rem; font-weight: 700; color: var(--muted); }
  .testimonial-author { display: flex; align-items: center; gap: 0.75rem; }
  .testimonial-avatar {
    width: 42px; height: 42px; border-radius: 50%; object-fit: cover;
    border: 2px solid var(--terracotta); flex-shrink: 0;
  }
  .testimonial-name { font-family: 'Fraunces', serif; font-size: 0.98rem; font-weight: 600; color: var(--fg); }
  .testimonial-role { font-size: 0.74rem; color: var(--muted); }


  /* Safety Band */
  .safety-band { background: var(--bg-alt); padding: 4.5rem 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .safety-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
  @media (max-width: 800px) { .safety-grid { grid-template-columns: 1fr; } }
  .safety-card h3 { font-size: 1.1rem; font-weight: 700; margin: 0.85rem 0 0.45rem; color: var(--fg); }
  .safety-card p { font-size: 0.92rem; color: var(--muted); line-height: 1.55; margin: 0; }
  .safety-icon { width: 48px; height: 48px; border-radius: 14px; background: var(--terracotta); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.35rem; }

  /* Audience */
  .audience-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.8rem; }
  @media (max-width: 760px) { .audience-grid { grid-template-columns: 1fr; } }
  .audience-card { border-radius: 22px; padding: 2.5rem; }
  .audience-card.traveler { background: var(--sand); }
  .audience-card.driver { background: var(--espresso); color: #F0E4DD; }
  .audience-card h3 { font-family: 'Fraunces', serif; font-size: 1.6rem; font-weight: 600; margin: 0 0 0.65rem; }
  .audience-card.driver h3 { color: white; }
  .audience-card p { font-size: 0.98rem; line-height: 1.55; margin: 0 0 1.5rem; }
  .audience-card.traveler p { color: var(--muted); }
  .audience-card.driver p { color: #D9C9C0; }

  /* Founder */
  .founder-section { padding: 4.8rem 0; }
  .founder-grid { display: grid; grid-template-columns: auto 1fr; gap: 2.2rem; align-items: flex-start; }
  @media (max-width: 640px) { .founder-grid { grid-template-columns: 1fr; } }
  .founder-photo { width: 88px; height: 88px; border-radius: 50%; background: var(--terracotta); color: white; display: flex; align-items: center; justify-content: center; font-family: 'Fraunces', serif; font-size: 1.9rem; font-weight: 700; flex-shrink: 0; }
  .founder-grid blockquote { font-family: 'Fraunces', serif; font-size: 1.28rem; line-height: 1.52; font-style: italic; color: var(--fg); margin: 0 0 1.1rem; }
  .founder-grid .name { font-weight: 700; color: var(--fg); font-size: 0.98rem; }
  .founder-grid .cred { color: var(--muted); font-size: 0.86rem; }

  /* Roadmap Timeline */
  .roadmap-section { background: var(--bg-alt); padding: 4.8rem 0; border-top: 1px solid var(--line); }
  .timeline { display: flex; gap: 0; position: relative; margin-top: 2.2rem; }
  .timeline::before { content: ""; position: absolute; top: 22px; left: 0; right: 0; height: 2px; background: repeating-linear-gradient(90deg, var(--terracotta) 0 8px, transparent 8px 16px); opacity: 0.5; }
  @media (max-width: 800px) {
    .timeline { flex-direction: column; gap: 1.8rem; }
    .timeline::before { display: none; }
  }
  .tl-item { flex: 1; padding-right: 1.2rem; }
  .tl-dot { width: 44px; height: 44px; border-radius: 50%; background: var(--card); border: 2px solid var(--terracotta); display: flex; align-items: center; justify-content: center; font-family: 'Fraunces', serif; font-weight: 700; color: var(--terracotta); margin-bottom: 0.9rem; position: relative; z-index: 1; }
  .tl-item:first-child .tl-dot { background: var(--terracotta); color: white; }
  .tl-item h4 { font-size: 1rem; font-weight: 700; margin: 0 0 0.35rem; color: var(--fg); }
  .tl-item p { font-size: 0.85rem; color: var(--muted); line-height: 1.5; margin: 0; }

  /* Footer */
  footer { background: var(--espresso); color: #D9C9C0; padding: 4rem 0 2rem; }
  .footer-grid { display: grid; grid-template-columns: 1.3fr 1fr 1fr; gap: 2.8rem; margin-bottom: 2.8rem; }
  @media (max-width: 700px) { .footer-grid { grid-template-columns: 1fr; gap: 2rem; } }
  .footer-brand { font-family: 'Fraunces', serif; font-size: 1.35rem; color: white; margin-bottom: 0.6rem; }
  footer p { font-size: 0.88rem; line-height: 1.55; color: #B29B90; max-width: 36ch; }
  .footer-col h5 { font-size: 0.8rem; font-weight: 800; color: #B29B90; margin: 0 0 0.85rem; text-transform: none; }
  .footer-col a { display: block; font-size: 0.88rem; color: #E8DAD3; text-decoration: none; margin-bottom: 0.55rem; transition: color 0.2s; }
  .footer-col a:hover { color: var(--terracotta); }
  .footer-bottom { border-top: 1px solid #3A2A22; padding-top: 1.5rem; font-size: 0.78rem; color: #8A7266; display: flex; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; }
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <style dangerouslySetInnerHTML={{ __html: INLINE_CSS }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
