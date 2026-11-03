import { Link } from "react-router-dom";
import { Facility } from "../data/facilities";
import { Check, AlertCircle } from "lucide-react";

interface FacilityCardProps {
  facility: Facility;
}

export default function FacilityCard({ facility }: FacilityCardProps) {
  return (
    <div className="bg-[#FAF7F0] rounded-xl overflow-hidden border border-[#EAE1D2] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group">
      {/* Card Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#EAE1D2]/50">
        <img
          src={facility.image}
          alt={facility.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
          <span className="font-medium tracking-wide uppercase text-[10px] bg-[#173D32]/80 backdrop-blur-xs px-2.5 py-1 rounded text-[#C8A45D] border border-[#C8A45D]/30">
            {facility.category}
          </span>
          <span className="text-[10px] text-white/80 italic">
            Architectural Reference
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif text-xl font-semibold text-[#173D32] group-hover:text-[#C8A45D] transition-colors leading-snug">
            {facility.title}
          </h3>

          <p className="mt-3 text-sm text-[#252923]/80 leading-relaxed">
            {facility.shortDescription}
          </p>

          {/* Details list */}
          <ul className="mt-4 space-y-2 border-t border-[#EAE1D2] pt-4">
            {facility.details.map((detail, index) => (
              <li key={index} className="flex items-start gap-2 text-xs text-[#252923]/85">
                <Check className="w-3.5 h-3.5 text-[#C8A45D] shrink-0 mt-0.5" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer info: Placeholder note and action button */}
        <div className="mt-6 pt-4 border-t border-[#EAE1D2] space-y-3">
          <div className="flex items-center gap-1.5 text-[11px] text-[#A9853E] bg-[#C8A45D]/10 px-2.5 py-1.5 rounded">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{facility.capacityOrSpecNote}</span>
          </div>

          <div className="flex items-center justify-between gap-3 pt-1">
            <Link
              to={`/enquiry?facility=${encodeURIComponent(facility.title)}`}
              className="w-full text-center py-2 px-3 text-xs font-semibold rounded bg-[#173D32] text-[#F7F2E8] hover:bg-[#235446] transition-colors"
            >
              Enquire for this Facility
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
