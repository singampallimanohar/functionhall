export default function LoadingSpinner() {
  return (
    <div
      role="status"
      aria-label="Loading page..."
      className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center select-none"
    >
      <div className="relative flex items-center justify-center w-20 h-20 mb-6">
        {/* Outer glowing ring */}
        <div className="absolute inset-0 rounded-full border-2 border-[#C8A45D]/20 animate-pulse" />

        {/* Outer spinning champagne gold accent ring */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#C8A45D] border-r-[#C8A45D]/50 animate-spin" />

        {/* Inner spinning deep emerald ring */}
        <div
          className="absolute inset-2 rounded-full border-2 border-transparent border-b-[#173D32] border-l-[#173D32]/60 animate-spin"
          style={{ animationDirection: "reverse", animationDuration: "1.2s" }}
        />

        {/* Center decorative gold diamond */}
        <div className="w-3.5 h-3.5 rotate-45 bg-[#C8A45D] rounded-xs shadow-sm" />
      </div>

      {/* Branded typography */}
      <h3 className="font-serif text-lg font-medium text-[#173D32] tracking-tight">
        Sai Vedika
      </h3>
      <p className="text-[10px] uppercase tracking-[0.25em] text-[#C8A45D] font-medium mt-1">
        AC Function Hall · Tuni
      </p>
      <span className="sr-only">Loading page contents, please wait...</span>
    </div>
  );
}
