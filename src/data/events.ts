export interface VenueEvent {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  highlights: string[];
  recommendedSetup: string;
}

export const eventsData: VenueEvent[] = [
  {
    id: "weddings",
    title: "Traditional & Contemporary Weddings",
    category: "Sacred Ceremonies",
    image: "/src/assets/images/hero_venue_grand_hall_1793601139385.jpg",
    description: "Celebrate your sacred wedding vows in an auspicious, opulent setting. Accommodates traditional Telugu wedding mandaps, Vedic ritual zones, and grand floral installations.",
    highlights: [
      "Custom mandap staging and homam ventilation arrangements",
      "Spacious guest seating with clear view of stage rituals",
      "Seamless flow between ceremony area and dining feast hall",
      "Dedicated bride and groom dressing suites on-site"
    ],
    recommendedSetup: "Pillar-free ceremonial seating with grand floral mandap setup"
  },
  {
    id: "receptions",
    title: "Grand Wedding Receptions",
    category: "Evening Celebrations",
    image: "/src/assets/images/wedding_stage_decor_1793601139261.jpg",
    description: "An unforgettable evening of celebration, live music, photography, and hospitality. Elegant chandelier lighting and grand stage dimensions make every reception picture-perfect.",
    highlights: [
      "Stately stage for receiving guests and extended photo sessions",
      "Dynamic cove lighting compatible with themed event decors",
      "Extensive buffet dining layout for seamless catering",
      "Acoustics optimized for classical instruments, DJ, or live orchestra"
    ],
    recommendedSetup: "High-impact floral stage backdrop with ambient mood lighting"
  },
  {
    id: "engagements",
    title: "Engagement & Nischithartham Ceremonies",
    category: "Family Rituals",
    image: "/src/assets/images/hall_interior_ambient_1793601140750.jpg",
    description: "Mark the auspicious beginning of a new alliance with intimate family rituals, ring exchange, and celebratory feasts in complete air-conditioned comfort.",
    highlights: [
      "Cosy yet majestic seating for close family members",
      "Comfortable air conditioning throughout summer and monsoon seasons",
      "Stage suitable for traditional thamboolam and ring exchange",
      "Direct dining transition for post-ceremony lunch or dinner"
    ],
    recommendedSetup: "Intimate family gathering with gold-tone backdrop styling"
  },
  {
    id: "birthdays",
    title: "Milestone Birthday Celebrations",
    category: "Social Events",
    image: "/src/assets/images/banquet_dining_hall_1793601139328.jpg",
    description: "Whether it is a child's first birthday or a joyful 60th / 80th milestone (Shashtipoorthi / Sahasra Chandra Darshanam), host an exuberant gathering for loved ones.",
    highlights: [
      "Flexible hall layout for stage cakes, games, and photo booths",
      "Safe and pristine marble flooring for children and elderly guests",
      "High-power AV connections for celebratory video montages",
      "Dedicated food stations for desserts and live chaat counters"
    ],
    recommendedSetup: "Fun stage design with customized entrance photo backdrops"
  },
  {
    id: "anniversaries",
    title: "Wedding Anniversaries & Silver Jubilees",
    category: "Milestones",
    image: "/src/assets/images/guest_suite_room_1793601140089.jpg",
    description: "Honor enduring love and cherished milestones surrounded by children, grandchildren, and lifetime friends in a serene, dignified ambiance.",
    highlights: [
      "Warm hospitality environment with step-free elder accessibility",
      "Customizable dinner seating arrangements and live audio support",
      "Air-conditioned lounge spaces for family conversations",
      "Convenient central location in Tuni for out-of-town guests"
    ],
    recommendedSetup: "Refined banquet seating with personalized milestone gallery"
  },
  {
    id: "family-functions",
    title: "Srimantham, Cradle & Thread Ceremonies",
    category: "Cultural Traditions",
    image: "/src/assets/images/hero_venue_grand_hall_1793601139385.jpg",
    description: "Preserve cherished Andhra traditions with authentic ceremonial arrangements for Upanayanam, Half-Saree functions, baby showers (Srimantham), and festive get-togethers.",
    highlights: [
      "Adequate provision for traditional puja items and rituals",
      "Pure, hygienic environment conducive to spiritual ceremonies",
      "Spacious dining area supporting traditional leaf service",
      "Convenient parking and central Tuni accessibility"
    ],
    recommendedSetup: "Traditional seating arrangement with brass lamps and marigold garlands"
  }
];
