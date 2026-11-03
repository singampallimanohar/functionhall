import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import SectionHeading from "../components/SectionHeading";
import { venueConfig } from "../data/venue";
import { openWhatsAppEnquiry } from "../utils/whatsapp";
import {
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  ExternalLink,
  ShieldAlert,
  Send,
  Building,
  Navigation
} from "lucide-react";

export default function Contact() {
  const handleQuickWhatsApp = () => {
    openWhatsAppEnquiry(
      "Hello Sai Vedika Team, I would like to enquire about venue visit timings and date availability. Please guide me. Thank you."
    );
  };

  return (
    <div className="py-12 sm:py-16">
      <SEOHead
        title="Location, Address & Directions | Sai Vedika Function Hall, Tuni"
        description="Find Sai Vedika AC Function Hall in Tuni, Andhra Pradesh. View directions, Google Maps location, phone details, and WhatsApp communication channels."
        canonicalPath="/contact"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C8A45D] mb-3">
            Get in Touch
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#173D32] leading-tight">
            Contact Sai Vedika & Find Our Location
          </h1>
          <p className="mt-4 text-base text-[#252923]/80 leading-relaxed">
            We are conveniently located in Tuni, Andhra Pradesh. Contact us directly through WhatsApp or plan an in-person venue visit.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Address */}
          <div className="bg-[#FAF7F0] p-6 sm:p-8 rounded-2xl border border-[#EAE1D2] flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#173D32] text-[#C8A45D] flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#173D32]">
                Venue Address
              </h3>
              <p className="text-sm text-[#252923]/80 leading-relaxed">
                {venueConfig.fullAddress}
              </p>
              <p className="text-xs text-[#A9853E] bg-[#C8A45D]/10 p-2.5 rounded border border-[#C8A45D]/20">
                <strong>Owner Note:</strong> {venueConfig.addressPlaceholderNote}
              </p>
            </div>
            <a
              href={venueConfig.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#173D32] hover:text-[#C8A45D] transition-colors"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#C8A45D]" />
            </a>
          </div>

          {/* Card 2: Phone & WhatsApp */}
          <div className="bg-[#FAF7F0] p-6 sm:p-8 rounded-2xl border border-[#EAE1D2] flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#173D32] text-[#C8A45D] flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#173D32]">
                Phone & WhatsApp
              </h3>
              <p className="text-base font-semibold text-[#173D32]">
                {venueConfig.phone}
              </p>
              <p className="text-xs text-[#252923]/70">
                Official phone number to be confirmed by the venue owner before live public deployment.
              </p>
              <p className="text-xs text-[#A9853E] bg-[#C8A45D]/10 p-2.5 rounded border border-[#C8A45D]/20">
                WhatsApp is our primary communication channel for booking enquiries.
              </p>
            </div>
            <button
              onClick={handleQuickWhatsApp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] text-white hover:bg-[#1EBE5D] text-xs font-semibold transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Message on WhatsApp</span>
            </button>
          </div>

          {/* Card 3: Business Hours */}
          <div className="bg-[#FAF7F0] p-6 sm:p-8 rounded-2xl border border-[#EAE1D2] flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#173D32] text-[#C8A45D] flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#173D32]">
                Visiting & Office Hours
              </h3>
              <p className="text-sm text-[#252923]/80">
                Venue visits are welcomed by prior appointment so our team can personally guide you through the halls.
              </p>
              <p className="text-xs text-[#A9853E] bg-[#C8A45D]/10 p-2.5 rounded border border-[#C8A45D]/20">
                <strong>Schedule Status:</strong> {venueConfig.officeHours}
              </p>
            </div>
            <Link
              to="/enquiry"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#173D32] hover:text-[#C8A45D] transition-colors"
            >
              <span>Schedule an appointment</span>
              <Navigation className="w-3.5 h-3.5 text-[#C8A45D]" />
            </Link>
          </div>
        </div>

        {/* Interactive Google Map Section */}
        <div className="bg-white rounded-2xl border border-[#EAE1D2] overflow-hidden shadow-sm">
          <div className="p-6 border-b border-[#EAE1D2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C8A45D]">
                Interactive Map View
              </span>
              <h2 className="font-serif text-xl text-[#173D32]">
                Location in Tuni, Andhra Pradesh
              </h2>
            </div>
            <a
              href={venueConfig.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#173D32] text-[#F7F2E8] hover:bg-[#235446] text-xs font-medium transition-colors shrink-0"
            >
              <Navigation className="w-3.5 h-3.5 text-[#C8A45D]" />
              <span>Get Directions to Sai Vedika</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-[#EAE1D2]">
            <iframe
              title="Google Map of Sai Vedika Tuni"
              src={venueConfig.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Quick Contact Form CTA */}
        <div className="bg-[#173D32] text-[#F7F2E8] p-8 sm:p-12 rounded-2xl text-center space-y-6">
          <h2 className="font-serif text-2xl sm:text-4xl text-white">
            Ready to Check Hall Availability for Your Muhurtham?
          </h2>
          <p className="text-sm sm:text-base text-[#EAE1D2]/80 max-w-xl mx-auto">
            Submit our short enquiry form with your proposed event date and expected guest count. We will promptly answer your questions with date availability and booking guidance.
          </p>
          <div className="pt-2">
            <Link
              to="/enquiry"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-[#C8A45D] text-[#173D32] hover:bg-[#E0C78F] font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
            >
              <Send className="w-4 h-4" />
              <span>Proceed to Booking Enquiry Form</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
