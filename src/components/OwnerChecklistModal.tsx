import { venueConfig } from "../data/venue";
import { X, CheckCircle2, AlertTriangle, ShieldCheck, FileText, Phone, MapPin, Users, Camera } from "lucide-react";
import Logo from "./Logo";

interface OwnerChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OwnerChecklistModal({ isOpen, onClose }: OwnerChecklistModalProps) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="checklist-title"
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="bg-[#F7F2E8] border border-[#C8A45D]/40 rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="bg-[#173D32] text-[#F7F2E8] p-5 sm:p-6 flex items-start justify-between gap-4 border-b border-[#C8A45D]/30">
          <div className="flex items-start gap-3.5">
            <Logo variant="icon" theme="dark" size="md" />
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C8A45D]" />
                <span className="text-xs uppercase tracking-widest text-[#C8A45D] font-semibold">
                  Client Demonstration Review
                </span>
              </div>
              <h3 id="checklist-title" className="font-serif text-xl sm:text-2xl font-semibold text-white mt-1">
                Owner Launch Verification Checklist
              </h3>
              <p className="text-xs text-[#EAE1D2]/80 mt-1">
                Items to be verified with Sai Vedika management before making this site public.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#EAE1D2] transition-colors"
            aria-label="Close Checklist Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm text-[#252923]">
          <div className="p-4 rounded-xl bg-[#C8A45D]/15 border border-[#C8A45D]/40 flex items-start gap-3 text-xs leading-relaxed">
            <AlertTriangle className="w-5 h-5 text-[#A9853E] shrink-0 mt-0.5" />
            <p>
              In accordance with strict client data integrity rules, no capacities, prices, or contact numbers have been invented. All placeholder items are marked below for review.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-base font-semibold text-[#173D32] pb-1 border-b border-[#EAE1D2]">
              Pending Verification Items:
            </h4>

            {venueConfig.pendingOwnerItems.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-[#EAE1D2] shadow-xs space-y-1.5"
              >
                <div className="flex items-center justify-between text-xs font-semibold text-[#173D32]">
                  <span className="text-[#C8A45D] uppercase tracking-wider text-[10px]">
                    {item.category}
                  </span>
                  <span className="text-amber-800 bg-amber-50 px-2 py-0.5 rounded text-[10px]">
                    Action Required
                  </span>
                </div>
                <h5 className="font-medium text-sm text-[#252923]">{item.item}</h5>
                <p className="text-xs text-[#252923]/70">
                  <strong>Current Value:</strong> {item.currentValue}
                </p>
                <p className="text-xs text-[#173D32] bg-[#FAF7F0] p-2 rounded border border-[#EAE1D2] mt-1">
                  <strong>Verification Step:</strong> {item.actionRequired}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-[#173D32]/5 border border-[#173D32]/10 space-y-2">
            <h5 className="font-semibold text-xs text-[#173D32] uppercase tracking-wider">
              Next Steps for Official Launch
            </h5>
            <ul className="text-xs text-[#252923]/80 space-y-1 list-disc list-inside">
              <li>Confirm official WhatsApp phone number for automatic customer enquiry routing.</li>
              <li>Provide confirmed capacity specs for main hall, dining hall, and vehicle parking.</li>
              <li>Share high-resolution genuine photos of Sai Vedika premises to replace architectural references.</li>
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-[#FAF7F0] p-4 border-t border-[#EAE1D2] flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#173D32] text-[#F7F2E8] hover:bg-[#235446] font-semibold text-xs tracking-wide transition-colors"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
}
