import { useSearchParams } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import EnquiryForm from "../components/EnquiryForm";
import { MessageSquare, ShieldCheck, Check, Sparkles, HelpCircle } from "lucide-react";

export default function Enquiry() {
  const [searchParams] = useSearchParams();
  const initialEvent = searchParams.get("event") || undefined;
  const initialFacility = searchParams.get("facility") || undefined;

  return (
    <div className="py-12 sm:py-16">
      <SEOHead
        title="Check Availability & Book Enquiry | Sai Vedika Tuni"
        description="Check auspicious date availability and request function hall booking quotes for Sai Vedika AC Function Hall in Tuni directly through WhatsApp."
        canonicalPath="/enquiry"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C8A45D] mb-3">
            Reservation Inquiries
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#173D32] leading-tight">
            Enquire for Sai Vedika AC Function Hall
          </h1>
          <p className="mt-4 text-base text-[#252923]/80 leading-relaxed">
            Submit your event details below to initiate an official date availability and package enquiry directly through WhatsApp.
          </p>
        </div>

        {/* Two-Column Layout on Desktop: Form on Left, Process & FAQ on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Enquiry Form */}
          <div className="lg:col-span-8">
            <EnquiryForm
              initialEventType={initialEvent}
              initialFacilityNote={initialFacility}
            />
          </div>

          {/* Sidebar Information: How It Works & Guarantees */}
          <div className="lg:col-span-4 space-y-6">
            {/* Box 1: How the WhatsApp Flow Works */}
            <div className="bg-[#FAF7F0] p-6 rounded-2xl border border-[#EAE1D2] space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#173D32]">
                <MessageSquare className="w-4 h-4 text-[#C8A45D]" />
                <span>How Enquiry Routing Works</span>
              </div>
              <ol className="space-y-3 text-xs text-[#252923]/85">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#173D32] text-[#C8A45D] flex items-center justify-center font-bold shrink-0 mt-0.5">
                    1
                  </span>
                  <span>
                    <strong>Fill Details:</strong> Provide your preferred celebration date, estimated guest count, and event category.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#173D32] text-[#C8A45D] flex items-center justify-center font-bold shrink-0 mt-0.5">
                    2
                  </span>
                  <span>
                    <strong>Automatic WhatsApp Formatting:</strong> Our system compiles your specifications into a structured formal template.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#173D32] text-[#C8A45D] flex items-center justify-center font-bold shrink-0 mt-0.5">
                    3
                  </span>
                  <span>
                    <strong>Direct Chat Dispatch:</strong> WhatsApp opens in a safe window allowing you to review and send the message to venue management.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#173D32] text-[#C8A45D] flex items-center justify-center font-bold shrink-0 mt-0.5">
                    4
                  </span>
                  <span>
                    <strong>Official Confirmation:</strong> The venue team verifies slot availability and coordinates booking formalities.
                  </span>
                </li>
              </ol>
            </div>

            {/* Box 2: Important Booking Disclaimers */}
            <div className="bg-white p-6 rounded-2xl border border-[#EAE1D2] space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#173D32]">
                <ShieldCheck className="w-4 h-4 text-[#C8A45D]" />
                <span>Reservation Policy</span>
              </div>
              <ul className="space-y-2 text-xs text-[#252923]/80">
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C8A45D] shrink-0 mt-0.5" />
                  <span>Submission does not confirm date booking until advance payment and official receipt.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C8A45D] shrink-0 mt-0.5" />
                  <span>Dates during prime Telugu wedding seasons (Karthika / Magha / Vaisakha) are booked on first-confirmed basis.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C8A45D] shrink-0 mt-0.5" />
                  <span>Outside catering and stage decorator terms can be discussed with management.</span>
                </li>
              </ul>
            </div>

            {/* Box 3: Client Demonstration Note */}
            <div className="bg-[#173D32] text-[#F7F2E8] p-5 rounded-2xl border border-[#C8A45D]/40 space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-[#C8A45D] font-bold">
                Client Review Note
              </span>
              <p className="text-xs text-[#EAE1D2]/85 leading-relaxed">
                As this is a demonstration deployment, you can use the "WhatsApp Testing Mode" toggle in the form to test routing to your own phone number.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
