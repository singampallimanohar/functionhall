import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import SectionHeading from "../components/SectionHeading";
import { venueConfig } from "../data/venue";
import {
  Sparkles,
  Building,
  HeartHandshake,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Info
} from "lucide-react";

export default function About() {
  return (
    <div className="py-12 sm:py-16">
      <SEOHead
        title="About Our Venue | Sai Vedika AC Function Hall, Tuni"
        description="Learn about Sai Vedika AC Function Hall in Tuni, Andhra Pradesh. Built for auspicious Telugu weddings and family celebrations with pillar-free architecture and modern hospitality."
        canonicalPath="/about"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C8A45D] mb-3">
            About Sai Vedika
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#173D32] leading-tight">
            A Regal Destination for Cherished Celebrations
          </h1>
          <p className="mt-4 text-base text-[#252923]/80 leading-relaxed">
            Nestled in the vibrant town of Tuni, Andhra Pradesh, Sai Vedika AC Function Hall brings architectural majesty, modern comfort, and warm cultural tradition to life.
          </p>
        </div>

        {/* Venue Story & Background */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C8A45D]">
              Our Heritage & Vision
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#173D32]">
              Created to Elevate Grand Occasions in Coastal Andhra
            </h2>
            <p className="text-sm sm:text-base text-[#252923]/80 leading-relaxed">
              Traditional South Indian weddings and milestone ceremonies are deeply sacred affairs involving multi-generational families, intricate rituals, and generous hospitality. Sai Vedika was conceived to meet the growing need for an expansive, climate-controlled venue in Tuni that honors these traditions without compromising on modern banquet standards.
            </p>
            <p className="text-sm sm:text-base text-[#252923]/80 leading-relaxed">
              From our wide, pillar-free central hall that guarantees prime visibility for all seated guests, to our hygienic independent dining spaces, every dimension is designed to minimize stress and elevate festive joy.
            </p>

            {/* Owner Story Placeholder Note (Complying with Rule 12) */}
            <div className="p-4 rounded-xl bg-[#FAF7F0] border border-[#C8A45D]/40 text-xs text-[#252923]/80 space-y-1.5">
              <div className="flex items-center gap-2 font-semibold text-[#173D32]">
                <Info className="w-4 h-4 text-[#C8A45D]" />
                <span>Founder Background & Origin Story</span>
              </div>
              <p>
                <em>[Founder statement & historical background pending confirmation by Sai Vedika business owner. This section will be populated with the owner's personal journey and dedication to the Tuni community before official launch.]</em>
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-[#EAE1D2] aspect-[3/4] shadow-sm">
              <img
                src="/src/assets/images/hero_venue_grand_hall_1793601139385.jpg"
                alt="Hall Interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-[#EAE1D2] aspect-[3/4] shadow-sm mt-8">
              <img
                src="/src/assets/images/guest_suite_room_1793601140089.jpg"
                alt="Bridal Preparation Suite"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Venue Highlights Grid */}
        <section className="bg-[#FAF7F0] rounded-2xl p-8 sm:p-12 border border-[#EAE1D2]">
          <SectionHeading
            eyebrow="Key Venue Highlights"
            title="Designed for Effortless Hosting"
            description="Our thoughtful infrastructure ensures smooth operations for hosts, wedding planners, and guests alike."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Advanced Central Air Conditioning",
                desc: "Year-round temperature control ensuring all ceremonial attendees remain refreshed even during peak summer months."
              },
              {
                title: "Pillar-Free Grand Hall Architecture",
                desc: "Unobstructed view of the wedding mandap, stage proceedings, and traditional rituals from every corner of the hall."
              },
              {
                title: "Dedicated High-Capacity Dining",
                desc: "Separate banquet hall facilitating simultaneous leaf service or buffet dining with dedicated wash facilities."
              },
              {
                title: "Attached Bride & Groom Suites",
                desc: "Private, air-conditioned preparation rooms with full-length mirrors and secure wardrobe storage for bridal parties."
              },
              {
                title: "Heavy-Duty Electrical DG Backup",
                desc: "Automatic diesel generator switchover ensuring critical muhurtham moments never suffer power interruptions."
              },
              {
                title: "Prime Tuni Location & Parking",
                desc: "Easily accessible from major transit links with ample on-site parking for cars and two-wheelers."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-[#EAE1D2] space-y-2">
                <div className="w-8 h-8 rounded-lg bg-[#173D32] text-[#C8A45D] flex items-center justify-center font-bold text-xs font-mono">
                  0{idx + 1}
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#173D32]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#252923]/75 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Types of Events Hosted */}
        <section className="space-y-8">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-wider text-[#C8A45D] font-semibold">
              Event Types Accepted
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#173D32] mt-1">
              Honoring Sacred Celebrations & Family Milestones
            </h2>
            <p className="text-sm text-[#252923]/80 mt-2">
              We specialize in hosting family-centric cultural ceremonies and milestone celebrations:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Traditional Telugu Weddings (Vivaham)",
              "Grand Wedding Receptions",
              "Engagement Ceremonies (Nischithartham)",
              "Srimantham (Seemantham / Baby Shower)",
              "Shashtipoorthi (60th Birthday Celebration)",
              "Half-Saree Functions (Langa Voni)",
              "Upanayanam & Thread Ceremonies",
              "Milestone Wedding Anniversaries",
              "Formal Corporate & Community Banquets"
            ].map((eventTitle, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-[#EAE1D2] flex items-center gap-3 text-sm text-[#252923]"
              >
                <CheckCircle className="w-4 h-4 text-[#C8A45D] shrink-0" />
                <span className="font-medium">{eventTitle}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-[#173D32] text-[#F7F2E8] p-8 sm:p-12 rounded-2xl text-center space-y-6">
          <h2 className="font-serif text-2xl sm:text-4xl text-white">
            Schedule a Personal Venue Walkthrough
          </h2>
          <p className="text-sm sm:text-base text-[#EAE1D2]/80 max-w-xl mx-auto leading-relaxed">
            We invite prospective wedding families and event organizers to explore the stage, dining hall, and bridal suites in person. Connect with our management team on WhatsApp to arrange a visit.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/enquiry"
              className="px-6 py-3 rounded-lg bg-[#C8A45D] text-[#173D32] hover:bg-[#E0C78F] font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Enquire Date Availability
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-lg border border-white/30 text-white hover:bg-white/10 font-medium text-xs uppercase tracking-wider transition-colors"
            >
              Get Venue Address & Directions
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
