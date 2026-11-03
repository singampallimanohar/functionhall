import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4">
      <SEOHead
        title="Page Not Found | Sai Vedika AC Function Hall, Tuni"
        description="The requested page could not be found. Return to Sai Vedika AC Function Hall in Tuni, Andhra Pradesh."
      />
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-2xl border border-[#EAE1D2] shadow-sm">
        <span className="font-serif text-6xl font-bold text-[#C8A45D]">
          404
        </span>
        <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-[#173D32]">
          Page Not Found
        </h1>
        <p className="text-sm text-[#252923]/75 leading-relaxed">
          The celebration or page you are looking for is unavailable or may have been moved. Let's return you to Sai Vedika AC Function Hall.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#173D32] text-[#F7F2E8] hover:bg-[#235446] text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
          >
            <Home className="w-4 h-4 text-[#C8A45D]" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/enquiry"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#EAE1D2] text-[#252923] hover:bg-[#E0C78F] text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            <span>Book Enquiry</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
