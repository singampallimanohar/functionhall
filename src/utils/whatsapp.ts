import { venueConfig } from "../data/venue";

export interface EnquiryPayload {
  customerName: string;
  mobileNumber: string;
  eventType: string;
  eventDate: string;
  guestCount: string | number;
  requirements?: string;
}

/**
 * Builds the structured enquiry message requested by Sai Vedika management.
 */
export function formatEnquiryMessage(data: EnquiryPayload): string {
  const requirementsText = data.requirements && data.requirements.trim() 
    ? data.requirements.trim() 
    : "None specified";

  return [
    "Hello Sai Vedika Team,",
    "I would like to enquire about your function hall.",
    "",
    `Name: ${data.customerName.trim()}`,
    `Phone: ${data.mobileNumber.trim()}`,
    `Event: ${data.eventType}`,
    `Preferred Date: ${data.eventDate}`,
    `Expected Guests: ${data.guestCount}`,
    "",
    "Additional Requirements:",
    requirementsText,
    "",
    "Please share the availability and booking details.",
    "Thank you."
  ].join("\n");
}

/**
 * Generates the official WhatsApp Click-to-Chat URL.
 * URL format: https://wa.me/COUNTRYCODEPHONENUMBER?text=ENCODED_MESSAGE
 */
export function getWhatsAppUrl(
  message: string, 
  customPhoneNumber?: string
): { url: string; isConfigured: boolean; displayPhone: string } {
  // Use custom number if provided (e.g. testing in demo), else fallback to central config
  const rawNumber = customPhoneNumber || venueConfig.whatsappNumber;
  
  // Clean non-digits
  const cleanNumber = rawNumber.replace(/\D/g, "");
  
  // Flag if using placeholder number (all zeroes or length < 10)
  const isConfigured = venueConfig.isWhatsappConfigured || (cleanNumber.length >= 10 && !cleanNumber.endsWith("00000"));

  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;

  return {
    url,
    isConfigured,
    displayPhone: venueConfig.phone
  };
}

/**
 * Opens WhatsApp safely in a new browser tab.
 */
export function openWhatsAppEnquiry(message: string, customPhone?: string): boolean {
  const { url } = getWhatsAppUrl(message, customPhone);
  if (typeof window !== "undefined") {
    window.open(url, "_blank", "noopener,noreferrer");
    return true;
  }
  return false;
}
