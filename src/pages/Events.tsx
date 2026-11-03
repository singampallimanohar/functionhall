import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import SectionHeading from "../components/SectionHeading";
import { eventsData } from "../data/events";
import { Check, ArrowRight, Sparkles, MessageSquare } from "lucide-react";

export default function Events() {
  return (
    <div className="py-12 sm:py-16">
      <SEOHead
        title="Weddings, Receptions & Celebrations | Sai Vedika Tuni"
        description="Host weddings, receptions, engagements, milestone birthdays (Shashtipoorthi), and family ceremonies in complete air-conditioned comfort at Sai Vedika Tuni."
        canonicalPath="/events"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C8A45D] mb-3">
            Celebrations & Occasions
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#173D32] leading-tight">
            Events Hosted at Sai Vedika
          </h1>
          <p className="mt-4 text-base text-[#252923]/80 leading-relaxed">
            From timeless sacred ceremonies to joyous milestone gatherings, we provide a grand, air-conditioned setting tailored to traditional South Indian celebrations.
          </p>
        </div>

        {/* Detailed Event Cards */}
        <div className="space-y-12">
          {eventsData.map((event, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={event.id}
                className="bg-[#FAF7F0] rounded-2xl overflow-hidden border border-[#EAE1D2] shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12 items-stretch"
              >
                {/* Event Image */}
                <div
                  className={`lg:col-span-5 relative min-h-[260px] overflow-hidden ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-wider text-[#C8A45D] bg-[#173D32]/85 px-3 py-1 rounded backdrop-blur-xs border border-[#C8A45D]/30">
                    {event.category}
                  </span>
                </div>

                {/* Event Details */}
                <div
                  className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#C8A45D] uppercase tracking-wider mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Specialized Setup</span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#173D32] leading-snug">
                      {event.title}
                    </h2>

                    <p className="mt-3 text-sm text-[#252923]/80 leading-relaxed">
                      {event.description}
                    </p>

                    {/* Highlights */}
                    <div className="mt-6 border-t border-[#EAE1D2] pt-4">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-[#173D32] mb-3">
                        Key Ceremonial Provisions:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {event.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-[#252923]/85">
                            <Check className="w-3.5 h-3.5 text-[#C8A45D] shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 pt-6 border-t border-[#EAE1D2] flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-[#252923]/70 italic">
                      Recommended: {event.recommendedSetup}
                    </span>

                    <Link
                      to={`/enquiry?event=${encodeURIComponent(event.title)}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#173D32] text-[#F7F2E8] hover:bg-[#235446] font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#C8A45D]" />
                      <span>Enquire for {event.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Event Inquiry Box */}
        <div className="bg-[#173D32] text-[#F7F2E8] p-8 sm:p-10 rounded-2xl text-center space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl text-white">
            Planning a Custom Ceremony or Community Event?
          </h2>
          <p className="text-sm text-[#EAE1D2]/80 max-w-xl mx-auto">
            Our function hall can accommodate special seating configurations, religious homams, and customized event formats.
          </p>
          <div className="pt-2">
            <Link
              to="/enquiry"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#C8A45D] text-[#173D32] hover:bg-[#E0C78F] font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <span>Discuss Event Requirements via WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
