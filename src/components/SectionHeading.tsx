import React from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  theme = "light"
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}`}>
      {eyebrow && (
        <p className="text-xs tracking-[0.2em] uppercase font-semibold text-[#C8A45D] mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-normal leading-tight tracking-tight ${
          isDark ? "text-[#F7F2E8]" : "text-[#173D32]"
        }`}
        style={{ textWrap: "balance" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-sm sm:text-base leading-relaxed ${
            isDark ? "text-[#EAE1D2]/80" : "text-[#252923]/75"
          }`}
        >
          {description}
        </p>
      )}
      <div
        className={`mt-4 flex items-center gap-2 ${
          isCenter ? "justify-center" : "justify-start"
        }`}
      >
        <span className="w-8 h-[1px] bg-[#C8A45D]" />
        <span className="w-2 h-2 rotate-45 border border-[#C8A45D]" />
        <span className="w-8 h-[1px] bg-[#C8A45D]" />
      </div>
    </div>
  );
}
