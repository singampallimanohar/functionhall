import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, PhoneCall, Info } from "lucide-react";
import Logo from "./Logo";

interface NavbarProps {
  onOpenChecklist?: () => void;
}

export default function Navbar({ onOpenChecklist }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Facilities", path: "/facilities" },
    { label: "Gallery", path: "/gallery" },
    { label: "Events", path: "/events" },
    { label: "Contact", path: "/contact" }
  ];

  return (
    <>
      {/* Top Demonstration Notice Bar */}
      <div className="bg-[#173D32] text-[#F7F2E8] text-xs py-1.5 px-4 border-b border-[#C8A45D]/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45D] shrink-0" />
            <span className="truncate text-[#EAE1D2]/90">
              Client Demonstration Project · Sai Vedika AC Function Hall, Tuni, AP
            </span>
          </div>
          {onOpenChecklist && (
            <button
              onClick={onOpenChecklist}
              className="text-[#C8A45D] hover:text-[#E0C78F] font-medium flex items-center gap-1 shrink-0 text-xs transition-colors underline underline-offset-2"
              title="Review items pending venue owner confirmation"
            >
              <Info className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Owner Verification Checklist</span>
              <span className="sm:hidden">Checklist</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Sticky Navbar (Top Bar Contract: Zone 1 - Brand, Zone 2 - Links, Zone 3 - Action) */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F7F2E8]/95 backdrop-blur-md shadow-sm border-b border-[#EAE1D2]"
            : "bg-[#F7F2E8] border-b border-[#EAE1D2]/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark & Emblem */}
          <Link
            to="/"
            className="group whitespace-nowrap shrink-0 text-left focus:outline-none"
          >
            <Logo variant="full" theme="light" size="md" />
          </Link>

          {/* Zone 2: Navigation Links (Single-line, subtle underlines) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#252923]">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                    isActive
                      ? "text-[#173D32] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#C8A45D]"
                      : "text-[#252923]/80 hover:text-[#173D32] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-[#C8A45D]/50"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <Link
              to="/enquiry"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#173D32] text-[#F7F2E8] hover:bg-[#235446] text-xs font-semibold tracking-wide transition-all shadow-sm hover:shadow active:scale-98 whitespace-nowrap border border-[#C8A45D]/40"
            >
              <span>Enquire Now</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45D]" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/enquiry"
              className="sm:hidden px-3 py-1.5 rounded-md bg-[#173D32] text-[#F7F2E8] text-xs font-medium"
            >
              Enquire
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#173D32] hover:bg-[#EAE1D2]/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C8A45D]"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F7F2E8] border-b border-[#EAE1D2] px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-base py-2 px-3 rounded-md transition-colors ${
                      isActive
                        ? "bg-[#173D32] text-[#F7F2E8] font-semibold"
                        : "text-[#252923] hover:bg-[#EAE1D2]"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="pt-4 border-t border-[#EAE1D2] flex flex-col gap-3">
                <Link
                  to="/enquiry"
                  className="w-full text-center py-3 rounded-lg bg-[#173D32] text-[#F7F2E8] font-medium text-sm border border-[#C8A45D]/40 shadow-sm"
                >
                  Send Booking Enquiry
                </Link>
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-xs text-[#173D32] font-medium hover:text-[#C8A45D]"
                >
                  <PhoneCall className="w-4 h-4 text-[#C8A45D]" />
                  <span>View Location & Contact Info</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
