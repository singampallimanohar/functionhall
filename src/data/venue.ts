/**
 * Central venue data configuration for Sai Vedika AC Function Hall.
 * All details follow strict compliance: Unconfirmed information is clearly marked as demonstration placeholders.
 */

export interface VenueInfo {
  name: string;
  tagline: string;
  city: string;
  state: string;
  country: string;
  fullAddress: string;
  addressPlaceholderNote: string;
  phone: string;
  isPhoneVerified: boolean;
  whatsappNumber: string; // Country code + phone without symbols (e.g., 919876543210)
  isWhatsappConfigured: boolean;
  emailPlaceholder: string;
  officeHours: string;
  isOfficeHoursConfirmed: boolean;
  googleMapsDirectionsUrl: string;
  googleMapsEmbedUrl: string;
  isDemonstrationPreview: boolean;
  demonstrationDisclaimer: string;
  pendingOwnerItems: {
    category: string;
    item: string;
    currentValue: string;
    actionRequired: string;
  }[];
}

export const venueConfig: VenueInfo = {
  name: "Sai Vedika AC Function Hall",
  tagline: "Make Every Celebration Memorable",
  city: "Tuni",
  state: "Andhra Pradesh",
  country: "India",
  fullAddress: "Sai Vedika AC Function Hall, Tuni, Kakinada District, Andhra Pradesh, 533401, India",
  addressPlaceholderNote: "Exact street address & door number to be verified with Sai Vedika management prior to official launch.",
  phone: "+91 94900 00000",
  isPhoneVerified: false,
  whatsappNumber: "919490000000",
  isWhatsappConfigured: false,
  emailPlaceholder: "contact@saivedika.tuni.demo (Pending Official Domain Email)",
  officeHours: "Office timings pending business owner confirmation",
  isOfficeHoursConfirmed: false,
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Sai+Vedika+AC+Function+Hall+Tuni+Andhra+Pradesh",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=Tuni,+Andhra+Pradesh,+India&t=&z=14&ie=UTF8&iwloc=&output=embed",
  isDemonstrationPreview: true,
  demonstrationDisclaimer: "Demonstration Project Preview — All photographs and capacity metrics shown are high-fidelity architectural references for client review and will be replaced with official Sai Vedika photography upon owner approval.",
  pendingOwnerItems: [
    {
      category: "Contact Details",
      item: "Primary Mobile / WhatsApp Number",
      currentValue: "+91 94900 00000 [Demo Placeholder]",
      actionRequired: "Provide official mobile number linked to business WhatsApp for incoming client enquiries."
    },
    {
      category: "Location",
      item: "Exact Street & Landmark Address",
      currentValue: "Tuni, Andhra Pradesh [Area Level]",
      actionRequired: "Confirm exact survey/street number, nearby landmark, and Google Maps pin link."
    },
    {
      category: "Specifications",
      item: "Main Hall & Dining Seating Capacity",
      currentValue: "[Pending Owner Confirmation]",
      actionRequired: "Provide seating count for main hall and concurrent dining hall capacity."
    },
    {
      category: "Amenities",
      item: "Air-Conditioned Rooms & Parking Slots",
      currentValue: "[Pending Owner Confirmation]",
      actionRequired: "Confirm count of bridal suites, guest bedrooms, and 2-wheeler / 4-wheeler parking space."
    },
    {
      category: "Visuals",
      item: "Official Venue Photography",
      currentValue: "Demonstration Architectural References",
      actionRequired: "Upload high-resolution photographs of actual hall interior, stage, exterior, and dining area."
    }
  ]
};
