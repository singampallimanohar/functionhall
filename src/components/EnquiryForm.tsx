import { useState } from "react";
import { useForm } from "react-hook-form";
import { formatEnquiryMessage, openWhatsAppEnquiry, getWhatsAppUrl } from "../utils/whatsapp";
import { isValidIndianMobile, isValidFutureDate, sanitizeGuestCount } from "../utils/validation";
import { venueConfig } from "../data/venue";
import { MessageSquare, Calendar, Users, Phone, User, Sparkles, AlertCircle, CheckCircle2, Send, ExternalLink, Settings2 } from "lucide-react";

interface EnquiryFormData {
  customerName: string;
  mobileNumber: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  requirements: string;
}

interface EnquiryFormProps {
  initialEventType?: string;
  initialFacilityNote?: string;
}

export default function EnquiryForm({ initialEventType, initialFacilityNote }: EnquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState<string>("");
  const [customTestNumber, setCustomTestNumber] = useState<string>("");
  const [showConfigHelper, setShowConfigHelper] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<EnquiryFormData>({
    defaultValues: {
      customerName: "",
      mobileNumber: "",
      eventType: initialEventType || "Wedding Celebration",
      eventDate: "",
      guestCount: "",
      requirements: initialFacilityNote ? `Enquiring specifically about: ${initialFacilityNote}` : ""
    }
  });

  const onSubmit = async (data: EnquiryFormData) => {
    setIsSubmitting(true);
    
    // Format message
    const formatted = formatEnquiryMessage({
      customerName: data.customerName,
      mobileNumber: data.mobileNumber,
      eventType: data.eventType,
      eventDate: data.eventDate,
      guestCount: data.guestCount,
      requirements: data.requirements
    });

    setGeneratedMessage(formatted);

    // Simulate brief processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionSuccess(true);
      
      // Open WhatsApp automatically
      openWhatsAppEnquiry(formatted, customTestNumber || undefined);
    }, 600);
  };

  const handleManualOpenWhatsApp = () => {
    if (generatedMessage) {
      openWhatsAppEnquiry(generatedMessage, customTestNumber || undefined);
    }
  };

  const todayStr = new Date().toISOString().split("T")[0];

  return (
    <div className="bg-[#FAF7F0] rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#EAE1D2] shadow-sm">
      {/* Header */}
      <div className="mb-8 pb-6 border-b border-[#EAE1D2]">
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="text-xs tracking-[0.18em] uppercase font-semibold text-[#C8A45D]">
              Direct Venue Availability
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#173D32] mt-1">
              Check Hall Availability & Pricing
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setShowConfigHelper(!showConfigHelper)}
            className="text-xs text-[#252923]/60 hover:text-[#173D32] flex items-center gap-1.5 p-2 rounded-lg hover:bg-[#EAE1D2] transition-colors"
            title="Demonstration Phone Setting"
          >
            <Settings2 className="w-4 h-4 text-[#C8A45D]" />
            <span className="hidden sm:inline">WhatsApp Testing Mode</span>
          </button>
        </div>
        <p className="mt-2 text-sm text-[#252923]/80 leading-relaxed">
          Fill in your proposed event parameters below. When you submit, our system will format a detailed enquiry message and open WhatsApp for you to review and send directly to the venue management.
        </p>
      </div>

      {/* Demonstration WhatsApp Number Helper / Override */}
      {showConfigHelper && (
        <div className="mb-8 p-4 rounded-xl bg-[#EAE1D2]/50 border border-[#C8A45D]/40 text-xs text-[#252923] space-y-2">
          <div className="flex items-center gap-2 font-semibold text-[#173D32]">
            <Settings2 className="w-4 h-4 text-[#C8A45D]" />
            <span>Demonstration WhatsApp Configuration</span>
          </div>
          <p className="text-[#252923]/80">
            Current configured venue phone: <strong>{venueConfig.phone}</strong> (Marked as demo placeholder). You may enter your own WhatsApp number below to test the click-to-chat dispatch on your actual phone.
          </p>
          <div className="flex items-center gap-3 pt-1">
            <input
              type="text"
              placeholder="e.g. 919876543210 (Country code + 10 digits)"
              value={customTestNumber}
              onChange={(e) => setCustomTestNumber(e.target.value)}
              className="bg-white px-3 py-1.5 rounded-lg border border-[#C8A45D]/50 text-xs w-full max-w-xs focus:ring-1 focus:ring-[#173D32]"
            />
            {customTestNumber && (
              <button
                type="button"
                onClick={() => setCustomTestNumber("")}
                className="text-[11px] text-red-600 underline"
              >
                Reset to default
              </button>
            )}
          </div>
        </div>
      )}

      {/* Form or Success State */}
      {!submissionSuccess ? (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          {/* Row 1: Name and Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="customerName" className="block text-xs font-semibold uppercase tracking-wider text-[#173D32] mb-2">
                Your Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-[#C8A45D] absolute left-3.5 top-3.5" />
                <input
                  id="customerName"
                  type="text"
                  placeholder="e.g. Srikanth Varma"
                  {...register("customerName", {
                    required: "Please provide your name",
                    minLength: {
                      value: 2,
                      message: "Name must have at least 2 characters"
                    }
                  })}
                  className={`w-full pl-10 pr-4 py-2.5 bg-white text-sm rounded-lg border text-[#252923] placeholder:text-[#252923]/40 focus:outline-none focus:ring-2 focus:ring-[#C8A45D] transition-all ${
                    errors.customerName ? "border-red-400 bg-red-50/20" : "border-[#EAE1D2]"
                  }`}
                  aria-invalid={errors.customerName ? "true" : "false"}
                />
              </div>
              {errors.customerName && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.customerName.message}</span>
                </p>
              )}
            </div>

            <div>
              <label htmlFor="mobileNumber" className="block text-xs font-semibold uppercase tracking-wider text-[#173D32] mb-2">
                Mobile Number (WhatsApp) <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-[#C8A45D] absolute left-3.5 top-3.5" />
                <input
                  id="mobileNumber"
                  type="tel"
                  placeholder="e.g. 98480 12345"
                  {...register("mobileNumber", {
                    required: "Valid 10-digit mobile number is required",
                    validate: (val) =>
                      isValidIndianMobile(val) || "Please enter a valid 10-digit Indian mobile number"
                  })}
                  className={`w-full pl-10 pr-4 py-2.5 bg-white text-sm rounded-lg border text-[#252923] placeholder:text-[#252923]/40 focus:outline-none focus:ring-2 focus:ring-[#C8A45D] transition-all ${
                    errors.mobileNumber ? "border-red-400 bg-red-50/20" : "border-[#EAE1D2]"
                  }`}
                  aria-invalid={errors.mobileNumber ? "true" : "false"}
                />
              </div>
              {errors.mobileNumber && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.mobileNumber.message}</span>
                </p>
              )}
            </div>
          </div>

          {/* Row 2: Event Type and Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="eventType" className="block text-xs font-semibold uppercase tracking-wider text-[#173D32] mb-2">
                Occasion / Event Type <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Sparkles className="w-4 h-4 text-[#C8A45D] absolute left-3.5 top-3.5 pointer-events-none" />
                <select
                  id="eventType"
                  {...register("eventType", { required: "Please select an event type" })}
                  className="w-full pl-10 pr-8 py-2.5 bg-white text-sm rounded-lg border border-[#EAE1D2] text-[#252923] focus:outline-none focus:ring-2 focus:ring-[#C8A45D] transition-all appearance-none cursor-pointer"
                >
                  <option value="Wedding Celebration">Wedding Celebration (Vivaham)</option>
                  <option value="Wedding Reception">Wedding Reception</option>
                  <option value="Engagement Ceremony">Engagement / Nischithartham</option>
                  <option value="Birthday Celebration">Milestone Birthday / Shashtipoorthi</option>
                  <option value="Anniversary Function">Wedding Anniversary Celebration</option>
                  <option value="Family Function">Srimantham / Thread / Half-Saree Ceremony</option>
                  <option value="Corporate / Other Event">Corporate Gathering / Community Event</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="eventDate" className="block text-xs font-semibold uppercase tracking-wider text-[#173D32] mb-2">
                Preferred Event Date <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-[#C8A45D] absolute left-3.5 top-3.5 pointer-events-none" />
                <input
                  id="eventDate"
                  type="date"
                  min={todayStr}
                  {...register("eventDate", {
                    required: "Please choose your preferred date",
                    validate: (val) =>
                      isValidFutureDate(val) || "Please pick an upcoming calendar date"
                  })}
                  className={`w-full pl-10 pr-4 py-2.5 bg-white text-sm rounded-lg border text-[#252923] focus:outline-none focus:ring-2 focus:ring-[#C8A45D] transition-all ${
                    errors.eventDate ? "border-red-400 bg-red-50/20" : "border-[#EAE1D2]"
                  }`}
                  aria-invalid={errors.eventDate ? "true" : "false"}
                />
              </div>
              {errors.eventDate && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.eventDate.message}</span>
                </p>
              )}
            </div>
          </div>

          {/* Row 3: Guest Count */}
          <div>
            <label htmlFor="guestCount" className="block text-xs font-semibold uppercase tracking-wider text-[#173D32] mb-2">
              Expected Number of Guests <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Users className="w-4 h-4 text-[#C8A45D] absolute left-3.5 top-3.5" />
              <input
                id="guestCount"
                type="number"
                min="20"
                max="5000"
                placeholder="e.g. 500"
                {...register("guestCount", {
                  required: "Please enter estimated guest attendance",
                  validate: (val) => {
                    const count = sanitizeGuestCount(val);
                    return (count !== null && count >= 10) || "Please enter at least 10 attendees";
                  }
                })}
                className={`w-full pl-10 pr-4 py-2.5 bg-white text-sm rounded-lg border text-[#252923] placeholder:text-[#252923]/40 focus:outline-none focus:ring-2 focus:ring-[#C8A45D] transition-all ${
                  errors.guestCount ? "border-red-400 bg-red-50/20" : "border-[#EAE1D2]"
                }`}
                aria-invalid={errors.guestCount ? "true" : "false"}
              />
            </div>
            {errors.guestCount && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.guestCount.message}</span>
              </p>
            )}
          </div>

          {/* Row 4: Requirements */}
          <div>
            <label htmlFor="requirements" className="block text-xs font-semibold uppercase tracking-wider text-[#173D32] mb-2">
              Special Requirements or Timings (Optional)
            </label>
            <textarea
              id="requirements"
              rows={3}
              placeholder="e.g. Need bride & groom dressing rooms from morning 6 AM, floral stage setup preferences, dining hall arrangements..."
              {...register("requirements")}
              className="w-full px-4 py-2.5 bg-white text-sm rounded-lg border border-[#EAE1D2] text-[#252923] placeholder:text-[#252923]/40 focus:outline-none focus:ring-2 focus:ring-[#C8A45D] transition-all"
            />
          </div>

          {/* Disclaimer Banner */}
          <div className="p-3.5 rounded-lg bg-[#EAE1D2]/60 border border-[#EAE1D2] text-xs text-[#252923]/80 leading-relaxed flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
            <p>
              <strong>Important Notice:</strong> Submitting this form generates your structured enquiry and redirects to WhatsApp. It does not constitute a confirmed booking. Our venue team will review date availability and respond with detailed booking guidelines.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 rounded-lg bg-[#173D32] text-[#F7F2E8] hover:bg-[#235446] font-semibold text-sm tracking-wide transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed border border-[#C8A45D]/40"
          >
            {isSubmitting ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Generating WhatsApp Enquiry...</span>
              </>
            ) : (
              <>
                <MessageSquare className="w-4 h-4 text-[#C8A45D]" />
                <span>Enquire via WhatsApp</span>
              </>
            )}
          </button>
        </form>
      ) : (
        /* Submission Success / WhatsApp Sent Preview State */
        <div className="space-y-6 text-center py-4">
          <div className="w-16 h-16 rounded-full bg-[#173D32] text-[#C8A45D] mx-auto flex items-center justify-center shadow-inner">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div>
            <h4 className="font-serif text-2xl font-semibold text-[#173D32]">
              Enquiry Generated Successfully!
            </h4>
            <p className="mt-2 text-sm text-[#252923]/80 max-w-md mx-auto">
              Your formatted message has been prepared for WhatsApp. If WhatsApp did not open automatically in a new window, click the button below to send it now.
            </p>
          </div>

          {/* Preformatted Message Card */}
          <div className="bg-white p-5 rounded-xl border border-[#EAE1D2] text-left max-w-lg mx-auto shadow-sm">
            <div className="flex items-center justify-between text-xs text-[#173D32] font-semibold border-b border-[#EAE1D2] pb-2 mb-3">
              <span>Formatted Message Preview:</span>
              <span className="text-[#C8A45D]">Ready to dispatch</span>
            </div>
            <pre className="text-xs text-[#252923] whitespace-pre-wrap font-sans leading-relaxed bg-[#FAF7F0] p-3 rounded-lg border border-[#EAE1D2]">
              {generatedMessage}
            </pre>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={handleManualOpenWhatsApp}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#25D366] text-white hover:bg-[#1EBE5D] font-semibold text-sm transition-all shadow flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Open in WhatsApp Now</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </button>

            <button
              onClick={() => setSubmissionSuccess(false)}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#EAE1D2] text-[#252923] hover:bg-[#E0C78F] font-semibold text-sm transition-colors"
            >
              Modify Enquiry Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
