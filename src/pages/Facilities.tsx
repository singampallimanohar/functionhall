import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import SectionHeading from "../components/SectionHeading";
import FacilityCard from "../components/FacilityCard";
import { facilitiesData } from "../data/facilities";
import { ShieldAlert, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Facilities() {
  return (
    <div className="py-12 sm:py-16">
      <SEOHead
        title="Grand AC Hall, Dining & Amenities | Sai Vedika Tuni"
        description="Explore verified facilities at Sai Vedika: centrally air-conditioned grand hall, dedicated dining banquet, bridal suites, ample parking, and 100% DG power backup."
        canonicalPath="/facilities"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C8A45D] mb-3">
            Venue Amenities & Infrastructure
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#173D32] leading-tight">
            Facilities Engineered for Grand Celebrations
          </h1>
          <p className="mt-4 text-base text-[#252923]/80 leading-relaxed">
            Every feature at Sai Vedika is thoughtfully designed to guarantee convenience, comfort, and safety for your wedding party and honored guests.
          </p>
        </div>

        {/* Client Demo Notice */}
        <div className="p-4 rounded-xl bg-[#C8A45D]/15 border border-[#C8A45D]/40 max-w-3xl mx-auto flex items-start gap-3 text-xs text-[#252923] leading-relaxed">
          <ShieldAlert className="w-5 h-5 text-[#A9853E] shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-[#173D32]">Demonstration Specification Note:</p>
            <p className="text-[#252923]/80 mt-0.5">
              Numerical seating capacities, exact vehicle slots, and room counts are pending official verification by Sai Vedika management before the public launch. Cards below display verified functional capabilities.
            </p>
          </div>
        </div>

        {/* All Facility Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitiesData.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>

        {/* Additional Verified Amenities Strip */}
        <div className="bg-[#FAF7F0] p-8 sm:p-10 rounded-2xl border border-[#EAE1D2] space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl text-[#173D32]">
              Additional Verified On-Site Amenities
            </h3>
            <p className="text-xs text-[#252923]/70 mt-1">
              Standard essential infrastructure included with hall booking reservations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            {[
              {
                title: "24/7 Water Storage",
                desc: "High-capacity overhead tanks & purified continuous water for catering prep and dining washes."
              },
              {
                title: "Modern Washrooms",
                desc: "Frequently maintained, hygienic restrooms for ladies and gents with high-quality sanitary fixtures."
              },
              {
                title: "Acoustics & Sound Setup",
                desc: "Specially calibrated acoustic ceiling dampening ensuring minimal echo for auspicious nadaswaram and speeches."
              },
              {
                title: "Vendor Loading Zone",
                desc: "Separate rear access path for caterers, floral decorators, and lighting equipment crews."
              }
            ].map((amenity, idx) => (
              <div key={idx} className="bg-white p-5 rounded-xl border border-[#EAE1D2] space-y-2">
                <CheckCircle2 className="w-4 h-4 text-[#C8A45D]" />
                <h4 className="font-semibold text-sm text-[#173D32]">{amenity.title}</h4>
                <p className="text-xs text-[#252923]/75 leading-relaxed">{amenity.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <Link
            to="/enquiry"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#173D32] text-[#F7F2E8] hover:bg-[#235446] font-semibold text-xs uppercase tracking-wider transition-colors shadow"
          >
            <span>Enquire for Your Preferred Date</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
