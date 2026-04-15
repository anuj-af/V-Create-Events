export function SectionDivider() {
  return (
    <div className="flex items-center justify-center py-2 bg-background">
      <div className="flex items-center gap-4">
        <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent to-gold/40"></div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          className="text-gold/50"
        >
          <rect
            x="10"
            y="2"
            width="11"
            height="11"
            rx="1"
            transform="rotate(45, 10, 10)"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
        <div className="w-16 sm:w-24 h-px bg-gradient-to-l from-transparent to-gold/40"></div>
      </div>
    </div>
  );
}
