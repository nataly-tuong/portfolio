import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import VideoBackground from "../components/VideoBackground";

export default function Home() {
  const scope = useRef(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.set(".hero-text", { opacity: 0, y: 20 })
        .to(".hero-text", {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        })
        .from(
          ".hero-text > *",
          {
            opacity: 0,
            y: 18,
            filter: "blur(6px)",
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.12,
          },
          "-=0.2"
        );
      gsap.set(".scroll-hint", { opacity: 0 });
      gsap.to(".scroll-hint", {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.6,
      });
      gsap.to(".scroll-arrow", {
        y: 15,
        duration: 0.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.to(".scroll-arrow", {
        filter:
          "drop-shadow(0 0 14px rgba(163,230,53,0.9)) drop-shadow(0 0 34px rgba(163,230,53,0.55))",
        duration: 1.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
      gsap.to(".hero-sparkle", {
        rotate: 180,
        duration: 14,
        ease: "none",
        repeat: -1,
      });
      gsap.to(".hero-sparkle", {
        opacity: 0.4,
        scale: 0.8,
        duration: 2.6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    },
    { scope }
  );

  return (
    <section
      ref={scope}
      id="Home"
      className="relative min-h-screen overflow-hidden text-white bg-abyss"
    >
      <VideoBackground src="/hero-bg.mp4" className="z-0" />

      <div
        className="absolute z-30 top-24 sm:top-28 left-6 sm:left-12 px-3 py-1 rounded-sm bg-[#111] border border-white/15 shadow-[0_3px_8px_rgba(0,0,0,0.5)] font-noto text-[0.65rem] tracking-[0.15em] uppercase text-white/60 select-none"
        style={{ transform: "rotate(-3deg)" }}
      >
        Based in LA
      </div>

      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 z-[4] h-[220px] sm:h-[300px] pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, #020304 0%, #020304 15%, rgba(2,3,4,0.82) 40%, rgba(2,3,4,0.45) 65%, rgba(2,3,4,0.15) 85%, transparent 100%)",
        }}
      />

      <div
        aria-hidden
        className="absolute z-[15] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[820px] h-[520px] max-w-[95vw] max-h-[60vh] rounded-full bg-black/85 pointer-events-none"
        style={{ filter: "blur(100px)" }}
      />

      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="hero-sparkle absolute z-[16] left-1/2 -translate-x-1/2 top-[26%] w-5 h-5 sm:w-6 sm:h-6 pointer-events-none text-accentPink"
        style={{ filter: "drop-shadow(0 0 8px rgba(101,163,13,0.85))" }}
      >
        <path
          d="M12 1 L13.4 10.6 L23 12 L13.4 13.4 L12 23 L10.6 13.4 L1 12 L10.6 10.6 Z"
          fill="currentColor"
        />
      </svg>

      <div className="absolute z-20 inset-0 hero-text flex flex-col items-center justify-center px-6 text-center">
        <span
          className="bracket-label mb-6"
          style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9), 0 0 16px rgba(0,0,0,0.6)" }}
        >
          <span className="bracket">( </span>PORTFOLIO<span className="bracket"> )</span>
        </span>
        <h1 className="font-bodoni text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.95] text-glow font-medium text-secondaryAccent">
          Nataly Tuong
        </h1>
        <h2
          className="font-bodoni mt-6 text-lg sm:text-2xl text-white/70 italic"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.6)" }}
        >
          Aspiring Software Engineer
        </h2>
      </div>

      <div className="absolute z-10 inset-x-0 bottom-0 h-20 sm:h-28 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 surface-shimmer"
          style={{
            background:
              "repeating-linear-gradient(0deg, rgba(163,230,53,0.06) 0px, transparent 2px, transparent 6px)",
          }}
        />
      </div>

      <a
        href="#Skills"
        aria-label="Scroll to Skills"
        className="scroll-hint absolute bottom-8 left-1/2 -translate-x-1/2 z-50"
      >
        <svg
          className="scroll-arrow w-7 h-7 text-mainAccent"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v10" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12l6 6 6-6"
          />
        </svg>
      </a>
    </section>
  );
}
