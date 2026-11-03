import { MessageSquare } from "lucide-react";
import { openWhatsAppEnquiry } from "../utils/whatsapp";

interface WhatsAppButtonProps {
  label?: string;
  className?: string;
  customMessage?: string;
  variant?: "floating" | "inline";
}

export default function WhatsAppButton({
  label = "Chat with Venue",
  className = "",
  customMessage,
  variant = "floating"
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const defaultMsg =
      customMessage ||
      "Hello Sai Vedika Team, I am browsing your function hall website and would like to enquire about date availability and venue features. Thank you.";
    openWhatsAppEnquiry(defaultMsg);
  };

  if (variant === "inline") {
    return (
      <button
        onClick={handleClick}
        className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] text-white hover:bg-[#1EBE5D] font-medium text-xs sm:text-sm tracking-wide shadow-sm hover:shadow transition-all ${className}`}
      >
        <MessageSquare className="w-4 h-4" />
        <span>{label}</span>
      </button>
    );
  }

  // Floating button with tooltip
  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 group"
    >
      <span className="hidden group-hover:block bg-[#173D32] text-[#F7F2E8] text-xs py-1.5 px-3 rounded-lg shadow-lg border border-[#C8A45D]/40 whitespace-nowrap transition-all duration-200">
        Enquire on WhatsApp
      </span>
      <button
        onClick={handleClick}
        aria-label="Contact Sai Vedika via WhatsApp"
        className="w-13 h-13 rounded-full bg-[#25D366] text-white hover:bg-[#1EBE5D] shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white/60 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
      </button>
    </aside>
  );
}
