import { Link } from "react-router-dom";
import { venueConfig } from "../data/venue";
import { MapPin, Phone, MessageSquare, Clock, ShieldCheck, ChevronRight } from "lucide-react";
import Logo from "./Logo";

interface FooterProps {
  onOpenChecklist?: () => void;
}

export default function Footer({ onOpenChecklist }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#173D32] text-[#F7F2E8] border-t border-[#C8A45D]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14">
          {/* Col 1: Venue Brand & Story */}
          <div className="space-y-4">
            <Link to="/" className="group inline-block focus:outline-none">
              <Logo variant="full" theme="dark" size="md" />
            </Link>
            <p className="text-sm text-[#EAE1D2]/80 leading-relaxed pt-1">
              A premium, centrally air-conditioned wedding and celebration destination designed to host grand sacred nuptials, receptions, and memorable family milestones in Tuni, Andhra Pradesh.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-[#C8A45D] border border-[#C8A45D]/30 px-2.5 py-1 rounded">
                <ShieldCheck className="w-3.5 h-3.5" />
                Client Demonstration Build
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium text-[#F7F2E8] mb-4 pb-2 border-b border-[#C8A45D]/20">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Home Overview", path: "/" },
                { label: "About Venue", path: "/about" },
                { label: "Hall & Amenities", path: "/facilities" },
                { label: "Photo Gallery", path: "/gallery" },
                { label: "Event Occasions", path: "/events" },
                { label: "Location & Contact", path: "/contact" },
                { label: "Booking Enquiry", path: "/enquiry" }
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-[#EAE1D2]/80 hover:text-[#C8A45D] transition-colors flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#C8A45D] group-hover:translate-x-0.5 transition-transform" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Location & Contact */}
          <div>
            <h4 className="font-serif text-lg font-medium text-[#F7F2E8] mb-4 pb-2 border-b border-[#C8A45D]/20">
              Venue Location
            </h4>
            <div className="space-y-3.5 text-sm text-[#EAE1D2]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C8A45D] shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-[#F7F2E8]">Tuni, Andhra Pradesh</p>
                  <p className="text-xs text-[#EAE1D2]/70 mt-0.5">
                    Kakinada District, PIN 533401
                  </p>
                  <p className="text-[11px] text-[#C8A45D]/90 mt-1 italic">
                    [Exact street address pending owner confirmation]
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C8A45D] shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-[#F7F2E8]">{venueConfig.phone}</p>
                  <p className="text-[11px] text-[#C8A45D]/90 mt-0.5 italic">
                    [Demo placeholder - to be updated with owner's number]
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C8A45D] shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-[#EAE1D2]/70">
                    Visiting hours: Pending management confirmation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Demonstration Review Panel */}
          <div>
            <h4 className="font-serif text-lg font-medium text-[#F7F2E8] mb-4 pb-2 border-b border-[#C8A45D]/20">
              Demonstration Status
            </h4>
            <p className="text-xs text-[#EAE1D2]/80 leading-relaxed mb-4">
              This preview website was created for client review and verification. Official launch requires business owner approval and verification of capacities, contact numbers, and actual photography.
            </p>
            {onOpenChecklist && (
              <button
                onClick={onOpenChecklist}
                className="w-full text-center py-2 px-3 text-xs font-medium rounded bg-[#C8A45D] text-[#173D32] hover:bg-[#E0C78F] transition-colors font-semibold"
              >
                View Owner Verification Checklist
              </button>
            )}
            <div className="mt-3">
              <Link
                to="/enquiry"
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-medium rounded border border-[#C8A45D]/50 text-[#F7F2E8] hover:bg-[#235446] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#C8A45D]" />
                <span>Test WhatsApp Enquiry Flow</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#C8A45D]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EAE1D2]/70">
          <p>
            © {currentYear} Sai Vedika AC Function Hall, Tuni. Client Demonstration Preview.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-[#C8A45D] transition-colors">
              Directions
            </Link>
            <span>·</span>
            <Link to="/facilities" className="hover:text-[#C8A45D] transition-colors">
              Amenities
            </Link>
            <span>·</span>
            <Link to="/enquiry" className="hover:text-[#C8A45D] transition-colors">
              Enquiry
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
