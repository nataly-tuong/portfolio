function Fish({ className = "", style }) {
  return (
    <svg
      viewBox="0 0 60 24"
      className={className}
      style={style}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinejoin="round"
    >
      <path d="M4 12c6-8 20-8 26 0-6 8-20 8-26 0z" />
      <path d="M30 12l9-6.5v13z" />
      <circle cx="10" cy="10.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-abyss text-white pt-14 pb-8 text-center border-t border-white/10 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px surface-shimmer"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(163,230,53,0.6), rgba(101,163,13,0.4), transparent)",
        }}
      />

      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden opacity-40">
        <Fish
          className="fish-drift-right absolute w-10 h-4 text-mainAccent"
          style={{ top: "28%", animationDuration: "26s", animationDelay: "-4s" }}
        />
        <Fish
          className="fish-drift-left absolute w-7 h-3 text-accentPink/80"
          style={{ top: "55%", animationDuration: "34s", animationDelay: "-14s" }}
        />
        <Fish
          className="fish-drift-right absolute w-5 h-2.5 text-white/50"
          style={{ top: "70%", animationDuration: "20s", animationDelay: "-8s" }}
        />
        <span
          className="bubble-rise absolute h-1 w-1 rounded-full bg-white/30"
          style={{ left: "18%", bottom: "20%", animationDuration: "5s", animationDelay: "-1.5s" }}
        />
        <span
          className="bubble-rise absolute h-[3px] w-[3px] rounded-full bg-white/25"
          style={{ left: "72%", bottom: "15%", animationDuration: "6.5s", animationDelay: "-3s" }}
        />
      </div>

      <div className="relative">
        <p className="font-noto font-light tracking-[0.35em] uppercase text-[0.65rem] text-white/30">
          Nataly Tuong
        </p>
        <p className="mt-3 text-xs text-white/20">
          &copy; {new Date().getFullYear()} Nataly Tuong. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
