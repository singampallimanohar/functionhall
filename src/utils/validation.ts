/**
 * Form validation utilities for Sai Vedika Booking Enquiry.
 */

export function isValidIndianMobile(phone: string): boolean {
  // Accepts 10 digits, or with optional +91 / 0 prefix
  const clean = phone.replace(/[\s\-\(\)]/g, "");
  const pattern = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
  return pattern.test(clean);
}

export function isValidFutureDate(dateStr: string): boolean {
  if (!dateStr) return false;
  const inputDate = new Date(dateStr);
  if (isNaN(inputDate.getTime())) return false;
  
  // Set to start of day for comparison
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return inputDate >= today;
}

export function sanitizeGuestCount(val: string | number): number | null {
  const num = typeof val === "number" ? val : parseInt(val, 10);
  if (isNaN(num) || num <= 0) return null;
  return num;
}
