"use client";

import React, { useState, useEffect } from "react";

// Types
type DestinationCategory = "all" | "heritage" | "nature" | "art" | "highlands";

interface Destination {
  id: string;
  title: string;
  location: string;
  category: "heritage" | "nature" | "art" | "highlands";
  duration: string;
  tag: string;
  rating: number;
  reviews: number;
  image: string;
  storySnippet: string;
  highlights: string[];
  priceRange: string;
}

interface AudioStory {
  id: string;
  title: string;
  destination: string;
  driverName: string;
  driverRole: string;
  driverRating: number;
  duration: string;
  accent: string;
  narration: string;
  route: string;
  bgGradient: string;
}

const DESTINATIONS: Destination[] = [
  {
    id: "olumo-rock",
    title: "The Fortress Citadel of Olumo Rock",
    location: "Abeokuta, Ogun State",
    category: "heritage",
    duration: "Full Day • 6-8 hrs",
    tag: "Ancient Wonder",
    rating: 4.95,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1000&q=80",
    storySnippet:
      "Listen as your chauffeur recounts the 1830 inter-tribal wars and how sacred caves inside this 137-meter monolith gave refuge and victory to the entire Egba nation.",
    highlights: [
      "Doorstep pickup in Lagos/Ibadan",
      "Historical wartime cave exploration",
      "Ancient shrine & herbalist heritage",
      "Panoramic views of Abeokuta rooftops",
    ],
    priceRange: "₦45,000 / person (All-inclusive)",
  },
  {
    id: "lekki-conservation",
    title: "Lekki Mangrove & Longest Canopy Walk",
    location: "Lekki, Lagos State",
    category: "nature",
    duration: "Half Day • 4-5 hrs",
    tag: "Eco Paradise",
    rating: 4.9,
    reviews: 310,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80",
    storySnippet:
      "Learn the untold secrets of the Lagos coastal wetlands, sacred monkeys, and how indigenous fishermen navigated these serene mangrove canals centuries ago.",
    highlights: [
      "Africa's longest 401m canopy walkway",
      "Endangered flora & fauna sanctuary",
      "Giant tortoise & treehouse climb",
      "Chauffeured pickup from Victoria Island/Ikoyi/Mainland",
    ],
    priceRange: "₦28,000 / person (All-inclusive)",
  },
  {
    id: "badagry-heritage",
    title: "Badagry Freedom Trail & First Storey House",
    location: "Badagry, Lagos State",
    category: "heritage",
    duration: "Full Day • 7-9 hrs",
    tag: "Living History",
    rating: 4.98,
    reviews: 215,
    image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1000&q=80",
    storySnippet:
      "A soul-stirring journey. Your driver unveils the coastal oral history of the 15th-century slave routes, the Attenuation Well of forgetfulness, and the 1845 mission house.",
    highlights: [
      "Point of No Return boat crossing",
      "The 1845 First Storey Building in Nigeria",
      "Vlekete Slave Market & Relics Museum",
      "Trained historian guide accompanying on-site",
    ],
    priceRange: "₦48,000 / person (All-inclusive)",
  },
  {
    id: "obudu-mountain",
    title: "Obudu Mountain Sanctuary & High Clouds",
    location: "Obudu, Cross River State",
    category: "highlands",
    duration: "Weekend • 2-3 Days",
    tag: "Highland Retreat",
    rating: 4.97,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    storySnippet:
      "Winding through the 11km mountain curves, your driver narrates legends of the Becheve mountain tribe, ancient hunting trails, and the breathtaking plateau.",
    highlights: [
      "Famous Holy Mountain & Grotto Waterfalls",
      "Canopy walkway over 1,600m above sea level",
      "Cattle ranch & temperate organic dairy farms",
      "Luxury SUV pickup from Calabar/Enugu",
    ],
    priceRange: "₦185,000 / package (Transport + Lodge + Guide)",
  },
  {
    id: "erin-ijesha",
    title: "Erin-Ijesha (Olumirin) 7 Sacred Cascades",
    location: "Erin-Ijesha, Osun State",
    category: "nature",
    duration: "Full Day • 8-10 hrs",
    tag: "Mystic Waterfalls",
    rating: 4.88,
    reviews: 176,
    image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80",
    storySnippet:
      "Discovered in 1140 AD by Oduduwa's daughter, the seven tiers of sacred rushing waters hold ancient spiritual tales that your chauffeur shares along the scenic highway.",
    highlights: [
      "Hike all 7 cascading waterfall levels",
      "Fresh natural spring pools for swimming",
      "Ancient Abake settlement at the peak",
      "Doorstep pickup & safety gear provided",
    ],
    priceRange: "₦52,000 / person (All-inclusive)",
  },
  {
    id: "nike-art-gallery",
    title: "Nike Art Gallery & National Heritage Tour",
    location: "Lekki & Onikan, Lagos State",
    category: "art",
    duration: "Half Day • 5 hrs",
    tag: "Royal African Art",
    rating: 4.96,
    reviews: 420,
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1000&q=80",
    storySnippet:
      "Discover the royal Adire textile traditions of Osun, modern Nigerian sculpture, and the vibrant life of Chief Nike Davies-Okundaye from your cultured driver.",
    highlights: [
      "5 floors holding over 8,000 African art pieces",
      "Batik & Adire textile live demonstration",
      "National Museum Lagos historical archives",
      "Private VIP art curator meet-and-greet",
    ],
    priceRange: "₦32,000 / person (All-inclusive)",
  },
];

const AUDIO_STORIES: AudioStory[] = [
  {
    id: "story-badagry",
    title: "The Whispering Sands of Badagry & The First Storey House",
    destination: "Badagry Heritage Trail, Lagos",
    driverName: "Chauffeur Femi Olatunji",
    driverRole: "Certified Historian Driver • 580+ Trips",
    driverRating: 4.99,
    duration: "3:42 mins",
    accent: "Rich Yoruba-English Storytelling",
    route: "Lekki / Ikeja ➔ Badagry Expressway",
    bgGradient: "from-amber-950/40 via-emerald-950/30 to-slate-900/90",
    narration:
      "“As we cross the historic Ojo bridge towards Badagry, look at the lagoon to your right. By 1845, when Reverend C.A. Gollmer laid the foundation for the first two-storey building in Nigeria, there were no roads—everything traveled on these waters. When you reach the site today with our guide Amaka, look closely at the iron wood rafters shipped from England that have stood for over 180 years without a single nail rusting. Let me tell you how the local chiefs welcomed the very first scholars...”",
  },
  {
    id: "story-olumo",
    title: "The Fortress That Sheltered the Egba Warriors",
    destination: "Olumo Rock, Abeokuta",
    driverName: "Chauffeur Rasheed Balogun",
    driverRole: "Cultural Heritage Chauffeur • 410+ Trips",
    driverRating: 4.98,
    duration: "4:15 mins",
    accent: "Engaging Folklorist & Griot",
    route: "Lagos-Ibadan Expressway ➔ Abeokuta",
    bgGradient: "from-emerald-950/40 via-slate-900/90 to-amber-950/30",
    narration:
      "“Look at those rolling hills rising in the distance. The word 'Olumo' literally means 'Under the rock, the Lord built our refuge'. During the 19th-century wars with Dahomey, the hunters found these caves. Inside, they found natural spring water flowing continuously out of solid granite—a miracle that allowed 5,000 people to survive in secret. When we arrive, I will hand you directly to Baba Alao, our certified 4th-generation rock custodian...”",
  },
  {
    id: "story-obudu",
    title: "The Misty Highland Legends of Becheve",
    destination: "Obudu Mountain Sanctuary, Cross River",
    driverName: "Chauffeur Blessing Ekpenyong",
    driverRole: "Highland Specialist Chauffeur • 320+ Trips",
    driverRating: 4.97,
    duration: "3:18 mins",
    accent: "Lyrical Efik-English Narration",
    route: "Calabar Airport ➔ Obudu Mountain Ridge",
    bgGradient: "from-teal-950/40 via-slate-900/90 to-emerald-950/40",
    narration:
      "“Feel how crisp the air is turning as our vehicle climbs higher into the Cross River highlands. We are now passing the 8th curve of the famous 22-bend serpent road. Local legends say the clouds touch this mountain because the sky spirits visit to drink from the sacred Grotto waterfall. Our guide Ntufam is already waiting at the cable summit with warm cocoa and mountain boots for your walk above the rainforest canopy...”",
  },
];

const FAQS = [
  {
    q: "How does the Xepera experience work from start to finish?",
    a: "It's simple and seamless! You open the Xepera mobile app, select your desired Nigerian destination or tour package, and choose your pickup location and time. On the tour day, a vetted, hospitality-trained chauffeur arrives directly at your doorstep in an air-conditioned vehicle. During your ride, the driver shares captivating oral histories, folklore, and local trivia about the destination. Upon arrival at the site, your driver connects you with our certified on-ground tour guide for an immersive, safe, and curated exploration.",
  },
  {
    q: "Are the drivers and tour guides trained and vetted?",
    a: "Absolutely. Safety and cultural excellence are our highest priorities. All Xepera chauffeurs undergo rigorous background checks, defensive driving certifications, and graduate from our 'Storyteller Masterclass' developed in partnership with Nigerian historians and tourism experts. Our on-site tour guides are accredited by tourism boards and certified in first aid, photography, and indigenous heritage preservation.",
  },
  {
    q: "Where is Xepera launching first?",
    a: "We are launching first across Nigeria, with our initial pilot hubs in Lagos State (Badagry, Lekki, Epe, Nike Art Gallery), Ogun State (Olumo Rock, Bilikisu Sungbo), Osun State (Erin-Ijesha, Osun-Osogbo Sacred Grove), Cross River (Obudu Mountain, Calabar Marina), and the Federal Capital Territory / Niger State (Gurara Waterfalls, Zuma Rock).",
  },
  {
    q: "What is included in the tour price?",
    a: "Xepera offers 100% transparent all-inclusive pricing. Every booking includes doorstep roundtrip ride transportation, highway tolls, site entry permits, chauffeur storytelling, certified on-ground tour guide fees, bottled water, snacks, and complimentary photo-memory captures. There are zero surprise fees or haggling.",
  },
  {
    q: "When will the mobile app be available on iOS and Android?",
    a: "The mobile app is actively under development. By joining our Early Access Waitlist today, you will receive an exclusive beta invite, priority booking access before public launch, and a 30% discount on your first two curated journeys.",
  },
  {
    q: "Can I apply to become a Driver-Storyteller or Tour Guide?",
    a: "Yes! We are currently screening passionate drivers who own clean vehicles and love sharing Nigerian culture, as well as licensed/experienced local tour guides. You can register via our waitlist form by selecting 'Become a Driver-Storyteller' or 'Become a Tour Guide'.",
  },
];

export default function LandingPage() {
  const [activeCategory, setActiveCategory] = useState<DestinationCategory>("all");
  const [selectedStory, setSelectedStory] = useState<AudioStory>(AUDIO_STORIES[0]);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioProgress, setAudioProgress] = useState(25);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedDestinationModal, setSelectedDestinationModal] = useState<Destination | null>(null);

  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistName, setWaitlistName] = useState("");
  const [waitlistRole, setWaitlistRole] = useState("traveler");
  const [waitlistCity, setWaitlistCity] = useState("Lagos");
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const [vipTicketNumber, setVipTicketNumber] = useState("");
  const [copiedLink, setCopiedLink] = useState(false);

  const filteredDestinations =
    activeCategory === "all"
      ? DESTINATIONS
      : DESTINATIONS.filter((d) => d.category === activeCategory);

  useEffect(() => {
    let interval: any;
    if (isPlayingAudio) {
      interval = setInterval(() => {
        setAudioProgress((prev) => {
          if (prev >= 100) {
            setIsPlayingAudio(false);
            return 0;
          }
          return prev + 1;
        });
      }, 350);
    }
    return () => clearInterval(interval);
  }, [isPlayingAudio]);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
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
    <div className="min-h-screen bg-[#070c0e] text-slate-100 flex flex-col selection:bg-amber-500/30 selection:text-amber-200">
      {/* 1. NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#070c0e]/90 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
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
                <span className="text-[10px] uppercase font-sans-luxury tracking-widest px-1.5 py-0.5 rounded bg-emerald-900/60 border border-emerald-500/40 text-emerald-300 font-semibold">
                  🇳🇬 NG
                </span>
              </span>
              <span className="text-[10px] tracking-widest uppercase text-amber-400/80 font-medium">
                The Story Begins on the Road
              </span>
            </div>
          </a>

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

      {/* 2. HERO SECTION */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-amber-500/15 via-emerald-600/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>🇳🇬 Mobile App in Active Development • Launching First in Nigeria</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-luxury font-extrabold tracking-tight text-white leading-[1.15]">
                Travel Isn&apos;t Just Where You Go.{" "}
                <span className="gold-gradient-text block mt-2">
                  It&apos;s the Stories Along the Way.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Discover Nigeria&apos;s most breathtaking heritage with <strong className="text-amber-300 font-semibold">doorstep ride pickup</strong> just like Uber. On your way there, our certified chauffeur brings the land alive with <strong className="text-emerald-300 font-semibold">captivating oral folklore & history</strong>—seamlessly handing you over to an accredited local guide on site.
              </p>

              <div className="max-w-xl mx-auto lg:mx-0 pt-2">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("waitlist");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex flex-col sm:flex-row gap-3 p-2 rounded-2xl bg-slate-900/90 border border-amber-500/30 shadow-2xl backdrop-blur-xl"
                >
                  <div className="flex-1 flex items-center px-4 py-2 text-slate-300">
                    <svg width="20" height="20" className="w-5 h-5 text-amber-400 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.206" />
                    </svg>
                    <input
                      type="email"
                      value={waitlistEmail}
                      onChange={(e) => setWaitlistEmail(e.target.value)}
                      placeholder="Enter your email for VIP access..."
                      className="bg-transparent w-full text-white placeholder-slate-400 focus:outline-none text-sm"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-emerald-600 text-white font-bold text-sm shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all shrink-0 flex items-center justify-center gap-2"
                  >
                    <span>Reserve VIP Pass</span>
                    <svg width="16" height="16" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </form>
                <div className="flex items-center justify-center lg:justify-start gap-4 mt-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-amber-300">
                    <svg width="14" height="14" className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Early Bird: 30% Off First 2 Tours
                  </span>
                  <span>•</span>
                  <span className="text-emerald-400 font-medium">3,420+ On Waitlist</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-500/40 transition-colors">
                  <div className="text-amber-400 font-bold text-base flex items-center gap-2">
                    <span>🚗</span> Doorstep Pickup
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Chauffeured directly from your home or hotel.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/40 transition-colors">
                  <div className="text-emerald-400 font-bold text-base flex items-center gap-2">
                    <span>🎙️</span> In-Ride Stories
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Trained drivers share rich oral heritage & lore.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-500/40 transition-colors">
                  <div className="text-amber-300 font-bold text-base flex items-center gap-2">
                    <span>🏛️</span> Certified Guides
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Accredited historians guide your walk on site.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Hero Phone Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[340px] sm:max-w-[360px]">
                <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/30 via-emerald-500/20 to-amber-300/20 rounded-[48px] blur-xl opacity-75 animate-pulse" />

                <div className="relative rounded-[40px] bg-[#0c1418] border-[6px] border-slate-700/80 shadow-2xl p-4 overflow-hidden">
                  <div className="w-28 h-4 bg-slate-800 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-slate-900 mr-2" />
                    <div className="w-8 h-1 bg-slate-700 rounded-full" />
                  </div>

                  <div className="space-y-3.5 text-left">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-400 to-emerald-600 flex items-center justify-center text-xs font-bold text-slate-950">
                          X
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white leading-tight">Xepera Experience</div>
                          <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                            Live Tour In Progress
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30">
                        GPS Active
                      </span>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden border border-white/15 h-36 bg-slate-800">
                      <img
                        src="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=600&q=80"
                        alt="Olumo Rock"
                        className="w-full h-full object-cover brightness-75"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-3 flex flex-col justify-end">
                        <span className="text-[9px] uppercase tracking-wider text-amber-300 font-bold">
                          En Route (18 mins away)
                        </span>
                        <h4 className="text-xs font-bold text-white">Olumo Rock Ancient Citadel</h4>
                        <p className="text-[10px] text-slate-300">Pickup: Victoria Island, Lagos</p>
                      </div>
                    </div>

                    <div className="p-3 rounded-2xl bg-gradient-to-br from-slate-900 to-emerald-950/70 border border-emerald-500/30 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 font-bold text-xs">
                            FO
                          </div>
                          <div>
                            <div className="text-[11px] font-bold text-white flex items-center gap-1">
                              Capt. Femi O.
                              <span className="text-[9px] text-amber-400">★ 4.99</span>
                            </div>
                            <div className="text-[9px] text-emerald-300">Certified Chauffeur-Storyteller</div>
                          </div>
                        </div>
                        <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[9px] font-medium animate-pulse">
                          Speaking Now 🎙️
                        </span>
                      </div>

                      <div className="bg-black/40 rounded-xl p-2.5 border border-white/5 space-y-1.5">
                        <div className="flex items-center justify-between text-[10px] text-slate-300">
                          <span className="font-medium text-amber-300 flex items-center gap-1">
                            <svg width="12" height="12" className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                            </svg>
                            The 1830 Wartime Caves
                          </span>
                          <span className="text-slate-400 font-mono text-[9px]">02:14 / 04:15</span>
                        </div>

                        <div className="h-6 flex items-center justify-center gap-1 px-1">
                          {[...Array(16)].map((_, i) => (
                            <span
                              key={i}
                              className="soundwave-bar w-1 bg-gradient-to-t from-emerald-500 to-amber-400 rounded-full"
                              style={{
                                animationDelay: `${(i % 5) * 0.15}s`,
                                height: `${Math.max(6, (i * 7) % 24)}px`,
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      <p className="text-[10px] italic text-slate-300 line-clamp-2">
                        &quot;As we pass the Ogun river, notice the granite rocks on the horizon. In 1830, the Egba warriors used these secret caves...&quot;
                      </p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-emerald-600/30 flex items-center justify-center text-[10px] text-emerald-300 font-bold">
                          🏛️
                        </div>
                        <div>
                          <div className="text-[10px] font-semibold text-white">On-Site Guide Ready</div>
                          <div className="text-[8px] text-slate-400">Baba Alao (Certified Custodian)</div>
                        </div>
                      </div>
                      <span className="text-[9px] text-amber-400 font-medium">Stage 2 Ready</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-around text-slate-400 text-[9px]">
                    <span className="text-amber-400 font-bold flex flex-col items-center">
                      <span>🧭</span> Explore
                    </span>
                    <span className="flex flex-col items-center">
                      <span>🚗</span> Rides
                    </span>
                    <span className="flex flex-col items-center">
                      <span>🎙️</span> Stories
                    </span>
                    <span className="flex flex-col items-center">
                      <span>👤</span> Profile
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
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
            <div className="group p-6 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 hover:border-amber-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-lg mb-5 group-hover:scale-110 transition-transform">
                01
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300">
                Discover & Book on App
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Browse hand-picked Nigerian historical, cultural, and eco-tourism sites. Choose your pickup location, group size, and custom preferences with transparent all-inclusive pricing.
              </p>
            </div>

            <div className="group p-6 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 hover:border-emerald-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-lg mb-5 group-hover:scale-110 transition-transform">
                02
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300">
                Doorstep Chauffeur Pickup
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                No navigating chaotic interstate motor parks or stressful taxi haggling. A vetted, certified driver arrives right at your home, hotel, or airport in a pristine, air-conditioned vehicle.
              </p>
            </div>

            <div className="group p-6 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 hover:border-amber-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-lg mb-5 group-hover:scale-110 transition-transform">
                03
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300">
                The In-Transit Storytelling
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Your journey is the destination. Your trained driver brings the route alive with indigenous folklore, historical chronicles, architectural trivia, and regional music as you travel.
              </p>
            </div>

            <div className="group p-6 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 hover:border-emerald-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-lg mb-5 group-hover:scale-110 transition-transform">
                04
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300">
                Certified On-Site Tour
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Arrive smoothly at the destination where an accredited, licensed local tour guide welcomes you for a deep, private walking tour with exclusive access and photography assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE STORY DRIVE WIDGET */}
      <section id="audio-experience" className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold">
                <span>🎙️ Interactive Experience</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-white leading-tight">
                Turn Traffic & Transit Into <span className="gold-gradient-text">Pure Wonder.</span>
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                In Nigeria, the journey between cities can take 1 to 4 hours. With Xepera, you won&apos;t just stare at asphalt or traffic. Our drivers are trained storytellers who transform every mile into a vivid tapestry of folklore, heroic battles, and cultural revelations.
              </p>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Select a Sample Story Drive:
                </div>
                {AUDIO_STORIES.map((story) => (
                  <button
                    key={story.id}
                    onClick={() => {
                      setSelectedStory(story);
                      setIsPlayingAudio(false);
                      setAudioProgress(0);
                    }}
                    className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between ${
                      selectedStory.id === story.id
                        ? "bg-amber-500/15 border-amber-500/50 text-white shadow-lg shadow-amber-500/10"
                        : "bg-white/[0.03] border-white/10 text-slate-300 hover:bg-white/[0.06]"
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold">{story.destination}</div>
                      <div className="text-[11px] text-slate-400">{story.driverName}</div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-black/40 text-amber-300 font-mono">
                      {story.duration}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className={`p-6 sm:p-8 rounded-3xl bg-gradient-to-br ${selectedStory.bgGradient} border border-amber-500/30 shadow-2xl backdrop-blur-xl relative space-y-6`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 text-lg font-bold">
                      🚗
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">{selectedStory.driverName}</h3>
                      <p className="text-xs text-amber-300 font-medium">{selectedStory.driverRole}</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">Route: {selectedStory.route}</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[11px] font-semibold flex items-center gap-1 self-start sm:self-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Certified Chauffeur
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Now Narrating:</span>
                  <h4 className="text-xl font-bold text-white font-serif-luxury">&ldquo;{selectedStory.title}&rdquo;</h4>
                  <p className="text-xs text-slate-400">Accent Style: {selectedStory.accent}</p>
                </div>

                <div className="p-4 rounded-2xl bg-black/50 border border-white/10 relative">
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic pr-6 font-sans">
                    {selectedStory.narration}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-mono text-emerald-400 flex items-center gap-1.5">
                      {isPlayingAudio ? (
                        <>
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                          Playing Live Story Simulation
                        </>
                      ) : (
                        "Click Play to Preview Voice Simulation"
                      )}
                    </span>
                    <span className="font-mono text-slate-300">
                      {Math.floor((audioProgress / 100) * 3)}:
                      {String(Math.floor(((audioProgress / 100) * 60) % 60)).padStart(2, "0")} / {selectedStory.duration}
                    </span>
                  </div>

                  <div className="relative h-10 bg-black/40 rounded-xl px-3 flex items-center justify-between gap-1 overflow-hidden border border-white/10">
                    {[...Array(32)].map((_, i) => {
                      const isActive = (i / 32) * 100 <= audioProgress;
                      return (
                        <div
                          key={i}
                          className={`w-1.5 rounded-full transition-all duration-200 ${
                            isActive
                              ? "bg-gradient-to-t from-amber-500 to-emerald-400"
                              : "bg-slate-700/50"
                          }`}
                          style={{
                            height: `${Math.max(8, ((i * 13) % 28) + 4)}px`,
                          }}
                        />
                      );
                    })}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                        className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-emerald-600 text-slate-950 font-bold flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                        aria-label="Play Story"
                      >
                        {isPlayingAudio ? (
                          <svg width="20" height="20" className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0v-12a.75.75 0 01.75-.75zm10.5 0a.75.75 0 01.75.75v12a.75.75 0 01-1.5 0v-12a.75.75 0 01.75-.75z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg width="20" height="20" className="w-5 h-5 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                      <button
                        onClick={() => setAudioProgress(0)}
                        className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 text-xs"
                        title="Restart Story"
                      >
                        <svg width="16" height="16" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      </button>
                    </div>

                    <span className="text-[11px] text-slate-400">
                      💡 <em>Every driver has 50+ curated stories per route</em>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DESTINATIONS */}
      <section id="destinations" className="py-20 bg-[#080e12] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                Starting In Nigeria
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-white">
                Hand-Crafted Nigerian Journeys
              </h2>
              <p className="text-slate-400 text-sm max-w-xl">
                Select your next adventure. Every package includes private round-trip chauffeur pickup, transit storytelling, entrance fees, and certified on-ground guide.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All Experiences" },
                { id: "heritage", label: "Heritage & History" },
                { id: "nature", label: "Nature & Waterfalls" },
                { id: "art", label: "Art & Culture" },
                { id: "highlands", label: "Highlands & Mountain" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as DestinationCategory)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeCategory === tab.id
                      ? "bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                      : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/5"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest) => (
              <div
                key={dest.id}
                className="group rounded-3xl bg-slate-900/60 border border-white/10 hover:border-amber-500/40 overflow-hidden shadow-xl transition-all flex flex-col"
              >
                <div className="relative h-56 w-full overflow-hidden bg-slate-800">
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-semibold text-amber-300 border border-amber-400/30">
                      {dest.tag}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-bold text-white flex items-center gap-1 border border-white/20">
                    <span className="text-amber-400">★</span> {dest.rating} ({dest.reviews})
                  </div>

                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[11px] text-amber-300 font-medium flex items-center gap-1">
                      <svg width="14" height="14" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {dest.location}
                    </span>
                    <h3 className="text-lg font-bold text-white font-serif-luxury mt-0.5 leading-snug">
                      {dest.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-amber-500/[0.06] border border-amber-500/20">
                      <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wide">
                        🎙️ Transit Story:
                      </div>
                      <p className="text-xs text-slate-300 mt-1 italic line-clamp-3">
                        &quot;{dest.storySnippet}&quot;
                      </p>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        Included Experience:
                      </div>
                      <ul className="space-y-1 text-xs text-slate-300">
                        {dest.highlights.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="text-emerald-400">✓</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] uppercase text-slate-400 font-semibold">Estimated Package</div>
                      <div className="text-xs font-bold text-amber-300">{dest.priceRange}</div>
                    </div>
                    <button
                      onClick={() => setSelectedDestinationModal(dest)}
                      className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-amber-500 hover:text-slate-950 text-white font-semibold text-xs transition-colors"
                    >
                      View Itinerary
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TRAINING ACADEMY */}
      <section id="academy" className="py-20 bg-[#060c0e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
              The Xepera Academy Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-white">
              Two Trained Specialists. One Flawless Journey.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Unlike regular ride-hailing apps, every Xepera chauffeur and local guide undergoes specialized masterclasses to guarantee unparalleled hospitality, storytelling excellence, and safety.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-amber-950/30 border border-amber-500/30 shadow-xl space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-2xl text-amber-400">
                  🚗
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">Phase 1: Transit Specialist</span>
                  <h3 className="text-2xl font-bold text-white font-serif-luxury">
                    The Chauffeur-Storyteller
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Our drivers are not just navigators; they are custodians of Nigerian oral tradition. They turn transit time into an enchanting prelude before you step foot at the landmark.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  {
                    title: "Historical & Folklore Masterclasses",
                    desc: "Trained on verified Nigerian regional histories, kingdom dynasties, and local anecdotes.",
                  },
                  {
                    title: "Defensive Driving & Route Safety",
                    desc: "Comprehensive vetting, VIP defensive driving protocols, and vehicle comfort audits.",
                  },
                  {
                    title: "Hospitality & Guest Etiquette",
                    desc: "Discrete, respectful communication with options for quiet drives or active storytelling.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 p-3 rounded-xl bg-black/30 border border-white/5">
                    <span className="text-amber-400 font-bold text-sm">✦</span>
                    <div>
                      <h4 className="text-xs font-bold text-white">{item.title}</h4>
                      <p className="text-[11px] text-slate-300 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-amber-300 font-semibold">Are you a driver with passion?</span>
                <a
                  href="#waitlist"
                  onClick={() => setWaitlistRole("driver")}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors"
                >
                  Apply as Storyteller Driver
                </a>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-emerald-950/30 border border-emerald-500/30 shadow-xl space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-2xl text-emerald-400">
                  🏛️
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold">Phase 2: On-Site Master</span>
                  <h3 className="text-2xl font-bold text-white font-serif-luxury">
                    The Certified Tour Guide
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                When you step out of the vehicle, your on-site guide takes over. Living on or around the heritage site, they unlock doors, sacred paths, and hidden viewpoints visitors rarely see.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  {
                    title: "Accredited Heritage Curators",
                    desc: "Licensed by tourism boards and certified in deep site archaeology and sacred folklore.",
                  },
                  {
                    title: "First-Aid & Trail Safety Certified",
                    desc: "Trained in terrain navigation, mountain safety, and medical emergency response.",
                  },
                  {
                    title: "Photography & Cultural Respect",
                    desc: "Skilled in capturing memories while honoring sacred traditions.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 p-3 rounded-xl bg-black/30 border border-white/5">
                    <span className="text-emerald-400 font-bold text-sm">✦</span>
                    <div>
                      <h4 className="text-xs font-bold text-white">{item.title}</h4>
                      <p className="text-[11px] text-slate-300 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-emerald-300 font-semibold">Are you a local guide or historian?</span>
                <a
                  href="#waitlist"
                  onClick={() => setWaitlistRole("guide")}
                  className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors"
                >
                  Apply as Tour Guide
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SAFETY & TRUST */}
      <section id="safety" className="py-20 bg-[#070d10] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest font-bold text-emerald-400 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                Peace of Mind Guaranteed
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-white leading-tight">
                Designed for Locals, Expats & the Global Diaspora.
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Traveling across Nigeria should feel inspiring, safe, and utterly effortless. We eliminate the friction of unvetted interstate travel so you can immerse yourself in pure cultural beauty.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="text-amber-400 font-bold text-sm mb-1">🛡️ Live SOS & GPS Tracking</div>
                  <p className="text-xs text-slate-300">
                    Share your real-time journey link with loved ones abroad or at home with 24/7 support.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="text-emerald-400 font-bold text-sm mb-1">❄️ Premium AC Fleet</div>
                  <p className="text-xs text-slate-300">
                    Clean, comfortable SUVs and executive sedans inspected for air conditioning and road safety.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="text-amber-400 font-bold text-sm mb-1">💳 100% Cashless & Upfront</div>
                  <p className="text-xs text-slate-300">
                    No sudden fuel surcharges, park tout negotiations, or awkward tipping pressure.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="text-emerald-400 font-bold text-sm mb-1">🌍 Multilingual Storytellers</div>
                  <p className="text-xs text-slate-300">
                    Narrations available in English, Yoruba, Igbo, Hausa, Pidgin, and French.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-amber-950/20 border border-amber-500/20 shadow-xl space-y-3">
                <div className="text-amber-400 text-sm">★★★★★</div>
                <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                  &ldquo;Visiting Nigeria from the UK, I always wanted to see Badagry and Olumo Rock, but navigating Lagos traffic and unvetted drivers felt intimidating. Xepera’s concept of having a trained driver pick you up at your hotel and narrate the history along the way is sheer genius.&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-9 h-9 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center text-xs font-bold text-amber-300">
                    TA
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Tunde Adeyemi</div>
                    <div className="text-[10px] text-slate-400">Diaspora Explorer (London, UK)</div>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-emerald-950/20 border border-emerald-500/20 shadow-xl space-y-3">
                <div className="text-emerald-400 text-sm">★★★★★</div>
                <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                  &ldquo;As someone living in Abuja who loves weekend road trips, having an app that bundles ride pickup + storyteller + tour guide is exactly what Nigerian tourism has been missing for decades.&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-400 flex items-center justify-center text-xs font-bold text-emerald-300">
                    ZN
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Zainab Nwachukwu</div>
                    <div className="text-[10px] text-slate-400">Travel Blogger & Tech Professional (Abuja)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WAITLIST & VIP PASS */}
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

              <form onSubmit={handleWaitlistSubmit} className="space-y-5 text-left max-w-xl mx-auto">
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

      {/* 9. FAQ ACCORDION */}
      <section id="faq" className="py-20 bg-[#060a0c] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs uppercase tracking-widest font-bold text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
              Questions & Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-sm">
              Everything you need to know about the upcoming Xepera mobile app and tourism network.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-white/[0.02]"
                >
                  <span className="font-bold text-sm sm:text-base text-white">{faq.q}</span>
                  <span className="text-amber-400 text-lg font-bold shrink-0">
                    {openFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. MODAL */}
      {selectedDestinationModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-amber-500/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto relative shadow-2xl">
            <button
              onClick={() => setSelectedDestinationModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 flex items-center justify-center text-sm font-bold"
            >
              ✕
            </button>

            <div className="space-y-2">
              <span className="text-xs uppercase font-bold text-amber-400">
                {selectedDestinationModal.location}
              </span>
              <h3 className="text-2xl font-bold font-serif-luxury text-white">
                {selectedDestinationModal.title}
              </h3>
            </div>

            <div className="h-52 rounded-2xl overflow-hidden relative">
              <img
                src={selectedDestinationModal.image}
                alt={selectedDestinationModal.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-1">
              <div className="text-xs font-bold text-amber-300 uppercase">
                🎙️ En-Route Story Theme:
              </div>
              <p className="text-xs text-slate-200 italic">
                &quot;{selectedDestinationModal.storySnippet}&quot;
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Full Experience Schedule:
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {selectedDestinationModal.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-emerald-400 font-bold">✓</span> {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div>
                <span className="text-[10px] text-slate-400 uppercase">Estimated All-Inclusive</span>
                <div className="text-sm font-bold text-amber-300">{selectedDestinationModal.priceRange}</div>
              </div>
              <a
                href="#waitlist"
                onClick={() => setSelectedDestinationModal(null)}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-emerald-600 text-white font-bold text-xs shadow-md"
              >
                Reserve on Waitlist
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 11. FOOTER */}
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
    </div>
  );
}
