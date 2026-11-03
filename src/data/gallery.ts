export interface GalleryItem {
  id: string;
  title: string;
  category: "all" | "hall" | "stage" | "dining" | "suites";
  categoryLabel: string;
  image: string;
  aspectRatio: string;
  caption: string;
  isDemoReference: boolean;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Centrally Air-Conditioned Grand Hall",
    category: "hall",
    categoryLabel: "Grand Hall Interior",
    image: "/src/assets/images/hero_venue_grand_hall_1793601139385.jpg",
    aspectRatio: "16/9",
    caption: "Magnificent overview of the central celebration hall featuring tiered crystal chandeliers and expansive pillar-free flooring.",
    isDemoReference: true
  },
  {
    id: "g2",
    title: "Royal Wedding Reception Mandap",
    category: "stage",
    categoryLabel: "Wedding Stage & Decor",
    image: "/src/assets/images/wedding_stage_decor_1793601139261.jpg",
    aspectRatio: "4/3",
    caption: "Intricately carved golden pillars adorned with fresh jasmine, marigold and rose garlands for auspicious nuptial rites.",
    isDemoReference: true
  },
  {
    id: "g3",
    title: "Banquet & Dining Hall Setup",
    category: "dining",
    categoryLabel: "Dining & Banquet",
    image: "/src/assets/images/banquet_dining_hall_1793601139328.jpg",
    aspectRatio: "4/3",
    caption: "Pristine, hygienic banquet dining area configured for seamless wedding feasts and multi-cuisine catering.",
    isDemoReference: true
  },
  {
    id: "g4",
    title: "Main Celebration Arena & Atmospheric Lighting",
    category: "hall",
    categoryLabel: "Grand Hall Interior",
    image: "/src/assets/images/hall_interior_ambient_1793601140750.jpg",
    aspectRatio: "4/3",
    caption: "Spacious seating perspective highlighting high acoustic ceilings and modern cove lighting.",
    isDemoReference: true
  },
  {
    id: "g5",
    title: "Air-Conditioned Bridal Suite & Vanity",
    category: "suites",
    categoryLabel: "Guest Suites & Hospitality",
    image: "/src/assets/images/guest_suite_room_1793601140089.jpg",
    aspectRatio: "4/3",
    caption: "Private dressing lounge with illuminated full-length mirror and relaxing plush seating for the wedding party.",
    isDemoReference: true
  },
  {
    id: "g6",
    title: "Traditional Floral Canopy & Archway",
    category: "stage",
    categoryLabel: "Wedding Stage & Decor",
    image: "/src/assets/images/wedding_stage_decor_1793601139261.jpg",
    aspectRatio: "4/3",
    caption: "Detailed craftsmanship of stage floral backdrop and warm champagne ambient illumination.",
    isDemoReference: true
  }
];
