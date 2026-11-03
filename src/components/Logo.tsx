interface LogoProps {
  variant?: "full" | "icon";
  theme?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Logo({
  variant = "full",
  theme = "light",
  size = "md",
  className = ""
}: LogoProps) {
  const isDark = theme === "dark";

  // Emblem size mapping
  const emblemSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10 sm:w-11 sm:h-11",
    lg: "w-14 h-14"
  };

  const titleSizes = {
    sm: "text-lg",
    md: "text-2xl sm:text-[26px]",
    lg: "text-3xl sm:text-4xl"
  };

  const subtitleSizes = {
    sm: "text-[8px] tracking-[0.2em]",
    md: "text-[9px] sm:text-[10px] tracking-[0.25em]",
    lg: "text-xs tracking-[0.3em]"
  };

  const emblemSvg = (
    <div
      className={`relative shrink-0 rounded-xl overflow-hidden shadow-xs border transition-transform duration-300 group-hover:scale-105 ${
        emblemSizes[size]
      } ${
        isDark
          ? "border-[#C8A45D]/50 shadow-[0_2px_10px_rgba(200,164,93,0.15)]"
          : "border-[#C8A45D]/40"
      }`}
    >
      <svg
        viewBox="0 0 128 128"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`gold-${theme}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E5CA8F" />
            <stop offset="50%" stopColor="#C8A45D" />
            <stop offset="100%" stopColor="#9E7832" />
          </linearGradient>
          <linearGradient id={`emerald-${theme}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isDark ? "#0F2820" : "#1A4639"} />
            <stop offset="100%" stopColor={isDark ? "#081A15" : "#103127"} />
          </linearGradient>
        </defs>

        {/* Medallion Background */}
        <rect width="128" height="128" fill={`url(#emerald-${theme})`} />
        <rect
          x="6"
          y="6"
          width="116"
          height="116"
          rx="18"
          fill="none"
          stroke={`url(#gold-${theme})`}
          strokeWidth="2.2"
          opacity="0.9"
        />
        <circle
          cx="64"
          cy="64"
          r="52"
          fill="none"
          stroke={`url(#gold-${theme})`}
          strokeWidth="1.2"
          strokeDasharray="3 3"
          opacity="0.6"
        />

        {/* Ceremonial Arch & Kalash Top */}
        <path
          d="M 34 50 C 34 30, 64 22, 64 22 C 64 22, 94 30, 94 50"
          fill="none"
          stroke={`url(#gold-${theme})`}
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <path
          d="M 64 16 C 62 20, 66 20, 64 24 C 62 20, 66 20, 64 16 Z"
          fill={`url(#gold-${theme})`}
        />

        {/* Lotus Petal Base */}
        <path
          d="M 40 92 C 52 86, 76 86, 88 92 C 80 99, 48 99, 40 92 Z"
          fill={`url(#gold-${theme})`}
          opacity="0.95"
        />

        {/* Monogram SV */}
        <g
          fill="none"
          stroke={`url(#gold-${theme})`}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* S */}
          <path
            d="M 58 46 C 54 42, 45 42, 45 48 C 45 57, 59 55, 59 66 C 59 74, 48 74, 43 69"
            strokeWidth="3.6"
          />
          {/* V */}
          <path d="M 67 44 L 77 71 L 87 44" strokeWidth="3.6" />
        </g>

        {/* Auspicious Accents */}
        <circle cx="64" cy="33" r="2.4" fill={`url(#gold-${theme})`} />
        <circle cx="64" cy="103" r="2.5" fill={`url(#gold-${theme})`} />
      </svg>
    </div>
  );

  if (variant === "icon") {
    return <div className={`inline-flex items-center ${className}`}>{emblemSvg}</div>;
  }

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {emblemSvg}
      <div className="flex flex-col text-left">
        <span
          className={`font-serif font-semibold tracking-tight transition-colors leading-none ${
            titleSizes[size]
          } ${isDark ? "text-[#F7F2E8] group-hover:text-[#C8A45D]" : "text-[#173D32] group-hover:text-[#C8A45D]"}`}
        >
          Sai Vedika
        </span>
        <span
          className={`uppercase font-medium text-[#C8A45D] mt-1 ${subtitleSizes[size]}`}
        >
          AC Function Hall · Tuni
        </span>
      </div>
    </div>
  );
}
