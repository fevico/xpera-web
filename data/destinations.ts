export type DestinationCategory = "all" | "heritage" | "nature" | "art" | "highlands";

export interface Destination {
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

export const DESTINATIONS: Destination[] = [
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
