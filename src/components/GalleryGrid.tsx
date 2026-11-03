import React, { useState, useEffect } from "react";
import { galleryItems, GalleryItem } from "../data/gallery";
import { X, ChevronLeft, ChevronRight, Maximize2, Info } from "lucide-react";

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Filtered items
  const filteredItems = activeFilter === "all"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") {
        setSelectedImageIndex(null);
      } else if (e.key === "ArrowLeft") {
        setSelectedImageIndex((prev) =>
          prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
        );
      } else if (e.key === "ArrowRight") {
        setSelectedImageIndex((prev) =>
          prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, filteredItems.length]);

  // Touch swipe support for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && selectedImageIndex !== null) {
      setSelectedImageIndex((prev) =>
        prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
      );
    }
    if (isRightSwipe && selectedImageIndex !== null) {
      setSelectedImageIndex((prev) =>
        prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
      );
    }
  };

  const currentItem = selectedImageIndex !== null ? filteredItems[selectedImageIndex] : null;

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {[
          { id: "all", label: "All Photographs" },
          { id: "hall", label: "Grand Hall Interior" },
          { id: "stage", label: "Wedding Stage & Decor" },
          { id: "dining", label: "Dining & Banquet" },
          { id: "suites", label: "Guest Suites" }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveFilter(tab.id);
              setSelectedImageIndex(null);
            }}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeFilter === tab.id
                ? "bg-[#173D32] text-[#F7F2E8] shadow-sm border border-[#C8A45D]"
                : "bg-[#EAE1D2]/70 text-[#252923] hover:bg-[#EAE1D2] border border-transparent"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Demonstration notice */}
      <div className="mb-6 p-3 rounded-lg bg-[#C8A45D]/10 border border-[#C8A45D]/30 flex items-center gap-2 text-xs text-[#252923]/80 max-w-2xl mx-auto">
        <Info className="w-4 h-4 text-[#A9853E] shrink-0" />
        <p>
          <strong>Demonstration Note:</strong> These photographs represent architectural and aesthetic benchmarks for demonstration and client review. Official venue photos will replace them before live launch.
        </p>
      </div>

      {/* Grid of Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setSelectedImageIndex(index)}
            className="group relative rounded-xl overflow-hidden cursor-pointer bg-[#EAE1D2] shadow-sm hover:shadow-md border border-[#EAE1D2] aspect-[4/3] flex flex-col justify-end"
          >
            <img
              src={item.image}
              alt={item.title}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            <div className="relative z-10 p-5 text-white">
              <span className="text-[10px] uppercase tracking-wider text-[#C8A45D] font-semibold">
                {item.categoryLabel}
              </span>
              <h3 className="font-serif text-lg font-medium leading-snug mt-1 text-white">
                {item.title}
              </h3>
              <p className="text-xs text-white/80 line-clamp-1 mt-1">
                {item.caption}
              </p>
              <div className="mt-3 flex items-center justify-between text-[11px] text-[#EAE1D2]/70">
                <span>Click to view full photo</span>
                <Maximize2 className="w-3.5 h-3.5 text-[#C8A45D] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full-Screen Lightbox */}
      {selectedImageIndex !== null && currentItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Lightbox Header */}
          <div className="flex items-center justify-between text-white border-b border-white/10 pb-4">
            <div>
              <p className="text-xs text-[#C8A45D] uppercase tracking-wider font-semibold">
                {currentItem.categoryLabel}
              </p>
              <h4 className="font-serif text-lg sm:text-xl font-medium text-white">
                {currentItem.title}
              </h4>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs text-white/60 font-mono">
                {selectedImageIndex + 1} / {filteredItems.length}
              </span>
              <button
                onClick={() => setSelectedImageIndex(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Main Stage */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            <button
              onClick={() =>
                setSelectedImageIndex((prev) =>
                  prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
                )
              }
              className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-black/50 text-white hover:bg-black/80 hover:text-[#C8A45D] transition-colors focus:outline-none"
              aria-label="Previous photograph"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="max-h-[75vh] max-w-[90vw] object-contain rounded-lg shadow-2xl transition-transform"
            />

            <button
              onClick={() =>
                setSelectedImageIndex((prev) =>
                  prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
                )
              }
              className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-black/50 text-white hover:bg-black/80 hover:text-[#C8A45D] transition-colors focus:outline-none"
              aria-label="Next photograph"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Footer Caption */}
          <div className="text-center text-white/80 max-w-2xl mx-auto border-t border-white/10 pt-3">
            <p className="text-xs sm:text-sm">{currentItem.caption}</p>
            <p className="text-[11px] text-[#C8A45D] mt-1">
              Swipe left/right or use keyboard arrow keys to navigate.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
