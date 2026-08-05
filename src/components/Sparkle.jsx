import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Sparkle({
  className = "",
  hue = 100,
  trigger,
  offsetX = 10,
  offsetY = 10,
}) {
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) return;
    const rotation = Math.random() * 180 - 90;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { x: offsetX - 6, y: offsetY - 6, opacity: 0, rotation: 0 },
        {
          x: offsetX + 6,
          y: offsetY + 6,
          opacity: 0.8,
          rotation,
          scrollTrigger: {
            trigger,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
    return () => ctx.revert();
  }, [trigger, offsetX, offsetY]);

  return (
    <span
      ref={ref}
      aria-hidden
      className={`pointer-events-none bg-[url('/Texturelabs_LensFX_242S.jpg')] bg-cover bg-center mix-blend-plus-lighter opacity-50 ${className}`}
      style={{ filter: `hue-rotate(${hue}deg) saturate(1.8) brightness(1.3)` }}
    />
  );
}
