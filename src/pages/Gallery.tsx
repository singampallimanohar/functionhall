import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import GalleryGrid from "../components/GalleryGrid";
import { ArrowRight, Camera } from "lucide-react";

export default function Gallery() {
  return (
    <div className="py-12 sm:py-16">
      <SEOHead
        title="Photo Gallery & Stage Decors | Sai Vedika AC Function Hall"
        description="Browse photos of Sai Vedika AC Function Hall in Tuni. View our grand celebration hall, royal reception stage decors, dining banquet, and bridal suites."
        canonicalPath="/gallery"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C8A45D] mb-3">
            Visual Portfolio
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl text-[#173D32] leading-tight">
            Sai Vedika Photo Gallery
          </h1>
          <p className="mt-4 text-base text-[#252923]/80 leading-relaxed">
            Experience our grand celebrations, majestic floral stages, dining hall setups, and bridal preparation suites.
          </p>
        </div>

        {/* Gallery Grid & Lightbox */}
        <GalleryGrid />

        {/* Bottom CTA */}
        <div className="bg-[#FAF7F0] p-8 sm:p-12 rounded-2xl border border-[#EAE1D2] text-center space-y-4 max-w-4xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-[#173D32] text-[#C8A45D] mx-auto flex items-center justify-center">
            <Camera className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl text-[#173D32]">
            Envisioning Your Special Day at Sai Vedika?
          </h3>
          <p className="text-xs sm:text-sm text-[#252923]/80 max-w-lg mx-auto">
            Our function hall is ready to host your custom stage decor, traditional catering, and cherished guests. Send us an enquiry via WhatsApp to verify available auspicious dates.
          </p>
          <div className="pt-2">
            <Link
              to="/enquiry"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#173D32] text-[#F7F2E8] hover:bg-[#235446] font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>Send Booking Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
