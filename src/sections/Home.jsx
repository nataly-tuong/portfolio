import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef, useEffect, useState } from "react";
import Bear3D from "../components/Bear3D";

export default function Home() {
  const star1 = useRef();
  const star2 = useRef();
  const star3 = useRef();
  const star4 = useRef();
  const star5 = useRef();
  const star6 = useRef();
  const star7 = useRef();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const timeline = gsap.timeline({ repeat: 0 });

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useGSAP(() => {
    const startX = isMobile ? -300 : -1250;

    timeline.from(".hero-text", {
      x: startX,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.3,
    });

    if (!isMobile) {
      timeline.fromTo(
        "#bear",
        { right: -1000 },
        { right: -200, ease: "power2.out", duration: 0.8 }
      );
    } else {
      timeline.from("#bear", {
        y: 50,
        opacity: 0,
        ease: "power2.out",
        duration: 0.8,
      });
    }

    const starAnimationProps = {
      scrollTrigger: {
        trigger: "#Home",
        start: "top top",
        end: "bottom top",
        scrub: isMobile ? 0.5 : true,
      },
    };

    const stars = [star1, star2, star3, star4, star5, star6, star7];

    stars.forEach((star) => {
      const randomY = Math.random() * 80 - 40;
      const randomX = Math.random() * 40 - 20;
      const randomRotation = Math.random() * 720 - 360;

      gsap.fromTo(
        star.current,
        { y: randomY - 80, x: randomX - 20, opacity: 0, rotation: 0 },
        {
          y: randomY + 60,
          x: randomX + 20,
          opacity: Math.random() * 0.5 + 0.5,
          rotation: randomRotation,
          ...starAnimationProps,
        }
      );
    });
  }, [isMobile]);

  return (
    <section id="Home" className="relative">
      <div className="bg-black bg-[url('/Texturelabs_LensFX_130L.jpg')] bg-cover px-4 sm:px-8 md:px-16 lg:px-55 pb-7 sm:pb-32 md:pb-50 pt-24 sm:pt-32 md:pt-50 text-white bg-[position:center] sm:bg-[position:10%_center] relative overflow-hidden min-h-screen">
        <div
          ref={star1}
          className="absolute top-8 right-4 sm:top-20 sm:right-10 md:top-30 md:right-15 w-8 h-8 sm:w-12 sm:h-12 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-[url('/Texturelabs_LensFX_242S.jpg')] bg-cover bg-center mix-blend-plus-lighter brightness-125 animate-pulse z-50"
        ></div>
        <div
          ref={star2}
          className="absolute top-32 left-16 sm:top-60 sm:left-40 md:top-120 md:left-70 w-4 h-4 sm:w-6 sm:h-6 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-[url('/Texturelabs_LensFX_242S.jpg')] bg-cover bg-center mix-blend-plus-lighter brightness-200 rotate-[20deg] animate-pulse z-50"
        ></div>
        <div
          ref={star3}
          className="absolute top-28 left-8 sm:top-56 sm:left-20 md:top-115 md:left-35 w-12 h-12 sm:w-16 sm:h-16 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-[url('/Texturelabs_LensFX_242S.jpg')] bg-cover bg-center mix-blend-plus-lighter brightness-80 rotate-[5deg] animate-pulse z-50"
        ></div>
        <div
          ref={star4}
          className="absolute top-16 right-1/4 sm:top-32 sm:right-1/3 md:top-60 md:right-1/4 lg:top-40 lg:right-1/5 w-6 h-6 sm:w-8 sm:h-8 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-[url('/Texturelabs_LensFX_242S.jpg')] bg-cover bg-center mix-blend-plus-lighter brightness-150 rotate-[45deg] animate-pulse z-50"
        ></div>
        <div
          ref={star5}
          className="absolute bottom-40 left-1/3 sm:bottom-48 sm:left-1/4 md:bottom-80 md:left-1/3 w-7 h-7 sm:w-10 sm:h-10 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-[url('/Texturelabs_LensFX_242S.jpg')] bg-cover bg-center mix-blend-plus-lighter brightness-110 rotate-[-30deg] animate-pulse z-50"
        ></div>
        <div
          ref={star6}
          className="absolute top-60 left-1/2 sm:top-80 sm:left-1/2 md:top-140 md:left-1/2 w-5 h-5 sm:w-8 sm:h-8 md:w-22 md:h-22 lg:w-28 lg:h-28 bg-[url('/Texturelabs_LensFX_242S.jpg')] bg-cover bg-center mix-blend-plus-lighter brightness-180 rotate-[120deg] animate-pulse z-50"
        ></div>
        <div
          ref={star7}
          className="absolute bottom-20 right-1/3 sm:bottom-32 sm:right-1/4 md:bottom-50 md:right-1/3 w-9 h-9 sm:w-12 sm:h-12 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-[url('/Texturelabs_LensFX_242S.jpg')] bg-cover bg-center mix-blend-plus-lighter brightness-90 rotate-[75deg] animate-pulse z-50"
        ></div>

        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="flex-1 text-center md:text-left mb-8 md:mb-0 pl-10 pr-4 sm:pr-8 md:pr-16 lg:pr-32 xl:pr-40 2xl:pr-48">
            <h1 className="hero-text tracking-tighter text-space text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-5xl font-bold inline-block py-2 mb-2">
              Hi, I'm <span className="special">Nataly Tuong</span>. Welcome to
              my corner of creations!
            </h1>
            <h2 className="hero-text tracking-tighter custom-class font-bold mb-2 text-sm sm:text-base md:text-lg lg:text-2xl">
              aspiring software engineer & web developer
            </h2>
            <p className="hero-text tracking-tighter text-left text-sm sm:text-base md:text-lg lg:text-2xl xl:text-md lg:pr-10 pt-8 sm:pt-12 md:pt-16 lg:pt-20 leading-relaxed relative z-60">
              ✧ദ്ദി( ˶^ᗜ^˶ ) Hi! Hello, I love exploring and{" "}
              <span className="text-mainAccent font-semibold">learning</span>{" "}
              about what tech has to offer. Specifically, I'm interested in
              creating works with thoughtful architecture and intent. I'm deeply{" "}
              <span className="text-mainAccent font-semibold">committed</span>{" "}
              to{" "}
              <span className="text-mainAccent font-semibold">innovation</span>.
              I'm a huge lover of anything silly, cats, and music. Feel free to
              reach out!
            </p>
          </div>
          <div className="w-full md:w-auto flex justify-center md:block">
            <Bear3D />
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-20 sm:h-32 md:h-40 lg:h-100 bg-gradient-to-t from-black to-transparent z-30"></div>
      </div>
    </section>
  );
}
