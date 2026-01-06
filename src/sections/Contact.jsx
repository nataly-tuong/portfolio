import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Contact() {
  const sideStar1 = useRef();
  const sideStar2 = useRef();
  const sideStar3 = useRef();
  const sideStar4 = useRef();
  const sideStar5 = useRef();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const stars = [sideStar1, sideStar2, sideStar3, sideStar4, sideStar5];
    const starAnimationProps = {
      scrollTrigger: {
        trigger: "#Contact",
        start: "top bottom",
        end: "bottom top",
        scrub: isMobile ? 0.5 : true,
      },
    };

    stars.forEach((star, i) => {
      if (!star.current) return;
      const offsets = isMobile
        ? [
            { y: 20, x: -10 },
            { y: -10, x: 10 },
            { y: 0, x: -5 },
            { y: 10, x: 5 },
            { y: -15, x: 15 },
          ]
        : [
            { y: 50, x: -25 },
            { y: -50, x: 25 },
            { y: 30, x: -15 },
            { y: -40, x: 20 },
            { y: 0, x: 40 },
          ];
      const randomRotation = Math.random() * 720 - 360;
      gsap.fromTo(
        star.current,
        { y: offsets[i].y - 20, x: offsets[i].x - 10, opacity: 0, rotation: 0 },
        {
          y: offsets[i].y + 20,
          x: offsets[i].x + 10,
          opacity: Math.random() * 0.5 + 0.5,
          rotation: randomRotation,
          ...starAnimationProps,
        }
      );
    });
  }, [isMobile]);

  return (
    <section
      id="Contact"
      className="relative flex flex-col items-center text-white py-12 px-8 sm:py-16 sm:px-8 md:py-20 md:px-16"
    >
      <h3 className="self-start font-bodoni text-6xl sm:text-5xl md:text-6xl font-bold mb-12 text-white">
        Contact
      </h3>

      <div
        ref={sideStar1}
        className="absolute top-1/4 left-1/6 w-16 h-16 sm:w-20 sm:h-20 bg-[url('/Texturelabs_LensFX_242S.jpg')] bg-cover bg-center mix-blend-plus-lighter brightness-150 animate-pulse z-50"
      />
      <div
        ref={sideStar2}
        className="absolute bottom-1/4 right-1/6 w-20 h-20 sm:w-24 sm:h-24 bg-[url('/Texturelabs_LensFX_242S.jpg')] bg-cover bg-center mix-blend-plus-lighter brightness-130 animate-pulse z-50"
      />
      <div
        ref={sideStar3}
        className="absolute top-1/3 right-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-[url('/Texturelabs_LensFX_242S.jpg')] bg-cover bg-center mix-blend-plus-lighter brightness-180 animate-pulse z-50"
      />
      <div
        ref={sideStar4}
        className="absolute bottom-1/3 left-1/4 w-16 h-16 sm:w-20 sm:h-20 bg-[url('/Texturelabs_LensFX_242S.jpg')] bg-cover bg-center mix-blend-plus-lighter brightness-160 animate-pulse z-50"
      />
      <div
        ref={sideStar5}
        className="absolute top-1/2 left-3/4 w-12 h-12 sm:w-16 sm:h-16 bg-[url('/Texturelabs_LensFX_242S.jpg')] bg-cover bg-center mix-blend-plus-lighter brightness-140 animate-pulse z-50"
      />

      <div className="relative w-full bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border-2 border-white/20 shadow-lg transition-all duration-300 hover:border-red-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] px-6 sm:px-8 py-6 max-w-3xl z-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(600px 350px at 15% 2%, rgba(239,68,68,0.2), transparent 70%), radial-gradient(700px 300px at 80% 100%, rgba(239,68,68,0.1), transparent 70%)",
          }}
        />

        <div className="relative flex flex-col sm:flex-row gap-6 sm:gap-8 justify-around">
          <a
            href="https://www.linkedin.com/in/nataly-tuong/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 hover:text-red-500 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.25h-3v-5c0-1.379-1.121-2.5-2.5-2.5s-2.5 1.121-2.5 2.5v5h-3v-10h3v1.354c.666-1.016 2.208-1.354 3.5-1.354 2.485 0 4.5 2.015 4.5 4.5v5.5z" />
            </svg>
            <span className="font-semibold">LinkedIn</span>
            <span className="text-gray-300 text-sm">/nataly-tuong/</span>
          </a>

          <a
            href="mailto:ntuong1117@gmail.com"
            className="flex flex-col items-center gap-2 hover:text-red-500 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 13.065l-11-7v14h22v-14l-11 7zm0-2.13l11-7h-22l11 7z" />
            </svg>
            <span className="font-semibold">Email</span>
            <span className="text-gray-300 text-sm">ntuong1117@gmail.com</span>
          </a>

          <a
            href="https://github.com/nataly-tuong"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 hover:text-red-500 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.76-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.467-2.381 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.289-1.552 3.296-1.23 3.296-1.23.654 1.653.243 2.874.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.814 1.102.814 2.222v3.293c0 .319.218.694.825.576 4.765-1.586 8.2-6.082 8.2-11.384 0-6.627-5.373-12-12-12z" />
            </svg>
            <span className="font-semibold">GitHub</span>
            <span className="text-gray-300 text-sm">@nataly-tuong</span>
          </a>
        </div>
      </div>
    </section>
  );
}
