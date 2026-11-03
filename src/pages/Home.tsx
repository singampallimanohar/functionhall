import { Link } from "react-router-dom";
import { motion } from "motion/react";
import SEOHead from "../components/SEOHead";
import SectionHeading from "../components/SectionHeading";
import FacilityCard from "../components/FacilityCard";
import { facilitiesData } from "../data/facilities";
import { eventsData } from "../data/events";
import { galleryItems } from "../data/gallery";
import { venueConfig } from "../data/venue";
import {
  Sparkles,
  ArrowRight,
  MapPin,
  Calendar,
  Users,
  ShieldCheck,
  CheckCircle,
  Wind,
  Car,
  UtensilsCrossed,
  Clock,
  ExternalLink
} from "lucide-react";

export default function Home() {
  const featuredFacilities = facilitiesData.slice(0, 3);
  const featuredGallery = galleryItems.slice(0, 4);
  const featuredEvents = eventsData.slice(0, 4);

  return (
    <div className="overflow-hidden">
      <SEOHead
        title="Sai Vedika AC Function Hall | Premium Wedding & Event Venue in Tuni"
        description="Discover Sai Vedika AC Function Hall in Tuni, Andhra Pradesh. Premier air-conditioned convention center for grand weddings, receptions, engagements, and banquets."
        canonicalPath="/"
      />
      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] lg:min-h-[90vh] bg-[#173D32] text-[#F7F2E8] flex items-center">
        {/* Background Image with Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_venue_grand_hall_1793601139385.jpg"
            alt="Sai Vedika AC Function Hall Grand Interior"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#173D32] via-[#173D32]/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#173D32] via-transparent to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A45D]">
                <span className="w-2 h-2 rounded-full bg-[#C8A45D]" />
                <span>Premier Wedding & Event Venue in Tuni</span>
              </div>

              <h1
                className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.15] text-[#F7F2E8] tracking-tight"
                style={{ textWrap: "balance" }}
              >
                Make Every Celebration Memorable
              </h1>

              <p className="text-base sm:text-lg text-[#EAE1D2]/85 font-light leading-relaxed max-w-xl">
                Experience grand celebrations at Sai Vedika AC Function Hall in Tuni. Designed with state-of-the-art central air-conditioning, lavish stage infrastructure, and banquet dining for weddings, receptions, and family milestones.
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/facilities"
                  className="px-6 py-3.5 rounded-lg bg-[#C8A45D] text-[#173D32] hover:bg-[#E0C78F] font-semibold text-sm tracking-wide transition-all shadow-md hover:shadow-lg flex items-center gap-2 group"
                >
                  <span>Explore Venue Facilities</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/enquiry"
                  className="px-6 py-3.5 rounded-lg bg-transparent hover:bg-[#F7F2E8]/10 text-[#F7F2E8] font-semibold text-sm tracking-wide border border-[#C8A45D]/50 transition-all flex items-center gap-2"
                >
                  <span>Enquire Date Availability</span>
                </Link>
              </div>

              {/* Verified Features Quick Strip */}
              <div className="pt-6 border-t border-[#C8A45D]/20 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#EAE1D2]/90">
                <div className="flex items-center gap-2">
                  <Wind className="w-4 h-4 text-[#C8A45D]" />
                  <span>Central Air Conditioning</span>
                </div>
                <div className="flex items-center gap-2">
                  <UtensilsCrossed className="w-4 h-4 text-[#C8A45D]" />
                  <span>Dedicated Dining Hall</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C8A45D]" />
                  <span>Centrally Located in Tuni</span>
                </div>
              </div>
            </motion.div>

            {/* Right Featured Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#C8A45D]/30 shadow-2xl bg-[#173D32]/80 backdrop-blur-xs p-3">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <img
                    src="/src/assets/images/wedding_stage_decor_1793601139261.jpg"
                    alt="Wedding Stage Backdrop Reference"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs uppercase tracking-wider text-[#C8A45D] font-semibold">
                      Grand Reception Staging
                    </p>
                    <p className="font-serif text-lg text-white">
                      Royal Elegance & Festive Charm
                    </p>
                  </div>
                </div>
                <p className="text-[11px] text-[#EAE1D2]/70 text-center mt-2.5 italic">
                  Architectural reference model for client demonstration review.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Welcome to Sai Vedika & Venue Introduction */}
      <section className="py-20 bg-[#F7F2E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#EAE1D2]">
                <img
                  src="/src/assets/images/hall_interior_ambient_1793601140750.jpg"
                  alt="Sai Vedika Hall Perspective"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#173D32] text-[#F7F2E8] p-5 rounded-xl border border-[#C8A45D]/40 shadow-xl max-w-xs">
                <p className="font-serif text-xl font-bold text-[#C8A45D]">Tuni's Landmark</p>
                <p className="text-xs text-[#EAE1D2]/80 mt-1">
                  Crafted for sacred traditional rituals and unforgettable modern celebrations.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A45D]">
                <span>Welcome to Sai Vedika</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#173D32] leading-tight">
                Where Grand Occasions Meet Timeless Hospitality
              </h2>
              <p className="text-sm sm:text-base text-[#252923]/80 leading-relaxed">
                Sai Vedika AC Function Hall is conceived to offer families in Tuni and surrounding regions of Andhra Pradesh a sophisticated, fully equipped haven for life's most precious occasions.
              </p>
              <p className="text-sm sm:text-base text-[#252923]/80 leading-relaxed">
                From sacred Vedic nuptials and joyful sangeet evenings to milestone birthdays and grand receptions, our pillar-free hall architecture ensures every guest has an unobstructed view of the auspicious rituals.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "High-capacity central air conditioning ensuring continuous comfort",
                  "Independent dining hall allowing smooth parallel feast arrangements",
                  "Dedicated bridal suites for peaceful ceremonial preparation",
                  "Prime connectivity in Tuni with convenient vehicle parking"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-[#252923]">
                    <CheckCircle className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#173D32] hover:text-[#C8A45D] transition-colors group"
                >
                  <span>Learn more about our venue philosophy</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Facilities */}
      <section className="py-20 bg-[#FAF7F0] border-y border-[#EAE1D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="World-Class Amenities"
            title="Engineered for Flawless Celebrations"
            description="Explore our hallmark facilities designed with comfort, hygiene, and celebratory grandeur in mind."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredFacilities.map((facility) => (
              <FacilityCard key={facility.id} facility={facility} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/facilities"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#173D32] text-[#F7F2E8] hover:bg-[#235446] font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm"
            >
              <span>View All Verified Facilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Events & Celebrations */}
      <section className="py-20 bg-[#F7F2E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Occasions We Host"
            title="A Perfect Setting for Every Milestone"
            description="Whether an auspicious Vedic wedding or an intimate family reunion, Sai Vedika provides the ideal ambiance."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-xl overflow-hidden border border-[#EAE1D2] shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-2 left-3 text-[10px] text-[#C8A45D] uppercase tracking-wider font-semibold">
                    {event.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[#173D32] group-hover:text-[#C8A45D] transition-colors leading-snug">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-xs text-[#252923]/75 line-clamp-3 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#EAE1D2]">
                    <Link
                      to={`/enquiry?event=${encodeURIComponent(event.title)}`}
                      className="text-xs font-semibold text-[#173D32] hover:text-[#C8A45D] flex items-center justify-between group/link"
                    >
                      <span>Enquire for this event</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform text-[#C8A45D]" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/events"
              className="text-xs font-semibold text-[#173D32] hover:text-[#C8A45D] underline underline-offset-4"
            >
              Explore all celebrations & ceremonies we host →
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Photo Gallery Preview */}
      <section className="py-20 bg-[#173D32] text-[#F7F2E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Visual Experience"
            title="A Glimpse into Royal Elegance"
            description="Explore the architectural ambiance of Sai Vedika through our curated visual references."
            theme="dark"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredGallery.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-black/40 border border-[#C8A45D]/20 shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] uppercase text-[#C8A45D] font-medium tracking-wide">
                    {item.categoryLabel}
                  </span>
                  <h4 className="font-serif text-sm font-medium leading-snug mt-0.5 truncate">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#C8A45D] text-[#173D32] hover:bg-[#E0C78F] font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm"
            >
              <span>Explore Complete Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Sai Vedika */}
      <section className="py-20 bg-[#F7F2E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Commitment"
            title="Why Families in Tuni Choose Sai Vedika"
            description="We prioritize comfort, dignity, and meticulous event arrangements to ensure your special day is completely seamless."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-[#EAE1D2] shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#173D32] text-[#C8A45D] flex items-center justify-center">
                <Wind className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#173D32]">
                Uncompromising Climate Control
              </h3>
              <p className="text-sm text-[#252923]/75 leading-relaxed">
                Centrally air-conditioned main hall and dining area ensure that heavy ceremonial attire and wedding rituals remain joyful, no matter the summer heat outside.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#EAE1D2] shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#173D32] text-[#C8A45D] flex items-center justify-center">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#173D32]">
                Hygienic Dining Operations
              </h3>
              <p className="text-sm text-[#252923]/75 leading-relaxed">
                Dedicated independent dining layout with smooth transit corridors and dedicated wash stations, avoiding crowd congestion during wedding meals.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#EAE1D2] shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#173D32] text-[#C8A45D] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#173D32]">
                100% Uninterrupted Power
              </h3>
              <p className="text-sm text-[#252923]/75 leading-relaxed">
                Commercial DG backup ensures stage lighting, audio systems, and cooling continue without a momentary glitch throughout your sacred muhurtham.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Location Preview */}
      <section className="py-20 bg-[#FAF7F0] border-t border-[#EAE1D2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs tracking-[0.2em] uppercase font-semibold text-[#C8A45D]">
                Convenient Accessibility
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#173D32]">
                Easily Accessible in Tuni, Andhra Pradesh
              </h2>
              <p className="text-sm text-[#252923]/80 leading-relaxed">
                Strategically situated in Tuni, Kakinada District, Sai Vedika offers convenient road access for guests traveling from Vizag, Rajahmundry, Annavaram, and nearby towns.
              </p>

              <div className="space-y-3 pt-2 text-sm text-[#252923]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C8A45D] shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#173D32]">Sai Vedika AC Function Hall</p>
                    <p className="text-xs text-[#252923]/70">Tuni, Kakinada District, Andhra Pradesh 533401</p>
                    <p className="text-[11px] text-[#C8A45D] italic mt-0.5">
                      [Exact street address pending final owner confirmation]
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Car className="w-4 h-4 text-[#C8A45D] shrink-0" />
                  <span className="text-xs text-[#252923]/80">Spacious parking space for private cars and two-wheelers.</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={venueConfig.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#173D32] text-[#F7F2E8] hover:bg-[#235446] text-xs font-semibold tracking-wide transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#C8A45D]" />
                  <span>Get Google Maps Directions</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>

                <Link
                  to="/contact"
                  className="text-xs font-semibold text-[#173D32] hover:text-[#C8A45D] underline underline-offset-4"
                >
                  View full contact details
                </Link>
              </div>
            </div>

            {/* Map Preview Frame */}
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#EAE1D2] shadow-sm bg-white aspect-[16/10] relative">
              <iframe
                title="Sai Vedika Tuni Location Map"
                src={venueConfig.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              <div className="absolute bottom-2 left-2 bg-[#173D32]/90 backdrop-blur-xs text-[#F7F2E8] px-3 py-1 rounded text-[11px]">
                Tuni, Andhra Pradesh
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Booking Enquiry Call-to-Action */}
      <section className="py-20 bg-[#173D32] text-[#F7F2E8] relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img
            src="/src/assets/images/banquet_dining_hall_1793601139328.jpg"
            alt="Venue background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.2em] text-[#C8A45D] font-semibold">
            Reserve Your Auspicious Date
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#F7F2E8] leading-tight">
            Plan Your Grand Celebration at Sai Vedika
          </h2>
          <p className="text-sm sm:text-base text-[#EAE1D2]/85 max-w-2xl mx-auto leading-relaxed">
            Muhurtham dates fill up quickly. Get in touch with our team via WhatsApp to enquire about date availability, explore banquet facilities, and receive official booking procedures.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/enquiry"
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#C8A45D] text-[#173D32] hover:bg-[#E0C78F] font-bold text-sm tracking-wide transition-all shadow-lg"
            >
              Start WhatsApp Booking Enquiry
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-transparent hover:bg-white/10 text-white font-medium text-sm tracking-wide border border-white/30 transition-colors"
            >
              Contact Information
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
