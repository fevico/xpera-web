export interface AudioStory {
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

export const AUDIO_STORIES: AudioStory[] = [
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
