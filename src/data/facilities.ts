export interface Facility {
  id: string;
  title: string;
  category: string;
  image: string;
  shortDescription: string;
  details: string[];
  ownerConfirmed: boolean;
  capacityOrSpecNote: string;
}

export const facilitiesData: Facility[] = [
  {
    id: "main-function-hall",
    title: "Centrally Air-Conditioned Grand Hall",
    category: "Main Venue",
    image: "/src/assets/images/hero_venue_grand_hall_1793601139385.jpg",
    shortDescription: "A spacious, pillar-free central hall engineered with modern architecture, acoustic ceiling panels, and grand chandeliers for magnificent celebrations.",
    details: [
      "Heavy-duty central cooling for year-round comfort",
      "Vibrant decorative chandelier and cove lighting setup",
      "Wide unobstructed sightlines from all guest angles",
      "Polished marble flooring ideal for grand processions"
    ],
    ownerConfirmed: false,
    capacityOrSpecNote: "Hall seating capacity: [To be confirmed by Management]"
  },
  {
    id: "wedding-stage-setup",
    title: "Grand Stage & Decoration Infrastructure",
    category: "Celebration",
    image: "/src/assets/images/wedding_stage_decor_1793601139261.jpg",
    shortDescription: "Elevated, wide-span stage infrastructure tailored to accommodate traditional floral mandaps, contemporary reception setups, and photography teams.",
    details: [
      "Substantial width & depth for large family photography",
      "Dedicated high-load electrical points for stage lighting & trusses",
      "Smooth ramp and step access for elders and couples",
      "Custom backdrop mounting structures"
    ],
    ownerConfirmed: false,
    capacityOrSpecNote: "Stage dimensions & vendor guidelines: [To be confirmed by Management]"
  },
  {
    id: "dining-banquet-hall",
    title: "Dedicated Dining & Banquet Hall",
    category: "Dining",
    image: "/src/assets/images/banquet_dining_hall_1793601139328.jpg",
    shortDescription: "A hygienic, well-ventilated separate dining arena designed for seamless traditional banana leaf service as well as modern buffet banquets.",
    details: [
      "Separate service entry and exit corridors to prevent congestion",
      "Hygienic hand-wash stations with high-capacity continuous water supply",
      "Spacious layout allowing quick table turnaround",
      "Dedicated caterer prep and staging utility zones"
    ],
    ownerConfirmed: false,
    capacityOrSpecNote: "Dining seating count: [To be confirmed by Management]"
  },
  {
    id: "bridal-guest-suites",
    title: "Air-Conditioned Bridal & Guest Rooms",
    category: "Hospitality",
    image: "/src/assets/images/guest_suite_room_1793601140089.jpg",
    shortDescription: "Comfortable, climate-controlled preparation rooms equipped with vanity mirrors, attached clean restrooms, and secure storage for wedding families.",
    details: [
      "Full-length dressing mirrors and professional grooming vanity lighting",
      "Attached Western washrooms with clean hot/cold water",
      "Comfortable lounge seating for close family members",
      "Safe storage for ceremonial attire and personal belongings"
    ],
    ownerConfirmed: false,
    capacityOrSpecNote: "Room count & suite amenities: [To be confirmed by Management]"
  },
  {
    id: "parking-facility",
    title: "Spacious Dedicated Parking",
    category: "Convenience",
    image: "/src/assets/images/hall_interior_ambient_1793601140750.jpg",
    shortDescription: "Convenient on-site parking compound ensuring smooth vehicular movement and stress-free arrival for all your attendees in Tuni.",
    details: [
      "Wide vehicular entry and exit gates",
      "Dedicated zones for two-wheeler and four-wheeler parking",
      "Well-lit compound during late-night receptions",
      "Easy drop-off zone directly at the main entrance porch"
    ],
    ownerConfirmed: false,
    capacityOrSpecNote: "Vehicle capacity & valet space: [To be confirmed by Management]"
  },
  {
    id: "power-utility-backup",
    title: "100% DG Power Backup & Utilities",
    category: "Infrastructure",
    image: "/src/assets/images/hero_venue_grand_hall_1793601139385.jpg",
    shortDescription: "Uninterrupted electrical and water infrastructure so your ceremonial rituals and celebrations continue smoothly without a single pause.",
    details: [
      "Automatic switchover diesel generator backup",
      "Continuous filtered water storage for large gathering banquets",
      "Advanced acoustic dampening for crisp audio clarity",
      "Fire safety systems and emergency evacuation signage"
    ],
    ownerConfirmed: false,
    capacityOrSpecNote: "Generator kVA rating & safety compliance: [To be confirmed by Management]"
  }
];
