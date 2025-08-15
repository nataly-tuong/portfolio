import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "../components/Model";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef, useEffect, useState } from "react";

export default function Home() {
  const star1 = useRef();
  const star2 = useRef();
  const star3 = useRef();
  const [isMobile, setIsMobile] = useState(false);

  const timeline = gsap.timeline({ repeat: 0 });

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    document.title = "Nataly's Portfolio";

    const favicon =
      document.querySelector('link[rel="icon"]') ||
      document.createElement("link");
    favicon.rel = "icon";
    favicon.href =
      "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐻</text></svg>";
    document.head.appendChild(favicon);

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
      timeline.to("#bear", {
        right: 35,
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

    gsap.fromTo(
      star1.current,
      { y: -80, opacity: 0, rotation: 0 },
      {
        y: 50,
        opacity: 1,
        rotation: 360,
        ...starAnimationProps,
      }
    );

    gsap.fromTo(
      star2.current,
      { y: -50, x: 0, opacity: 0, rotation: -45 },
      {
        y: 60,
        x: 30,
        opacity: 1,
        rotation: 45,
        ...starAnimationProps,
      }
    );

    gsap.fromTo(
      star3.current,
      { y: -50, x: 0, opacity: 0, rotation: 30 },
      {
        y: 40,
        x: -30,
        opacity: 1,
        rotation: -30,
        ...starAnimationProps,
      }
    );
  }, [isMobile]);

  return (
    <section id="Home" className="relative">
      <div className="bg-black bg-[url('/Texturelabs_LensFX_130M.jpg')] bg-cover px-4 sm:px-8 md:px-16 lg:px-55 pb-16 sm:pb-32 md:pb-50 pt-16 sm:pt-32 md:pt-50 text-white bg-[position:center] sm:bg-[position:10%_center] relative overflow-hidden min-h-screen">
        <div
          ref={star1}
          className="absolute top-8 right-4 sm:top-20  pointer-events-none sm:right-10 md:top-30 md:right-15 bg-[url('Texturelabs_LensFX_242S.jpg')] bg-cover bg-center mix-blend-plus-lighter w-8 h-8 sm:w-12 sm:h-12 md:w-40 md:h-40 brightness-125 animate-pulse z-50"
        ></div>
        <div
          ref={star2}
          className="absolute top-32 left-16 pointer-events-none sm:top-60 sm:left-40 md:top-120 md:left-70 bg-[url('Texturelabs_LensFX_242S.jpg')] bg-cover bg-center mix-blend-plus-lighter w-4 h-4 sm:w-6 sm:h-6 md:w-20 md:h-20 brightness-200 rotate-[20deg] animate-pulse z-50"
        ></div>
        <div
          ref={star3}
          className="absolute pointer-events-none top-28 left-8 sm:top-56 sm:left-20 md:top-115 md:left-35 bg-[url('Texturelabs_LensFX_242S.jpg')] bg-cover bg-center mix-blend-plus-lighter w-12 h-12 sm:w-16 sm:h-16 md:w-50 md:h-50 brightness-80 rotate-[5deg] animate-pulse z-50"
        ></div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="hero-text text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-mainAccent to-secondaryAccent inline-block py-2 text-transparent bg-clip-text mb-2">
              Nataly Tuong
            </h1>
            <div>
              <h2 className="hero-text custom-class font-bold mb-2 text-sm sm:text-base md:text-lg">
                aspiring software engineer & web developer
              </h2>
            </div>
            <p className="hero-text text-left text-xs sm:text-sm md:text-base lg:pr-70 leading-relaxed">
              ✧ദ്ദി( ˶^ᗜ^˶ ) Hi! Hello, I love exploring what tech has to offer.
              Specifically, I'm interested in creating works with thoughtful
              architecture and intent. I'm deeply committed to innovation and
              continuous learning. I'm a huge lover of anything silly, cats, and
              music. Feel free to reach out!
            </p>
            <div className="hero-text flex flex-col sm:flex-row mt-4 gap-3 sm:gap-4 items-center lg:items-start">
              <div className="hero-text flex flex-col sm:flex-row mt-4 gap-3 sm:gap-4 items-center lg:items-start">
                <button
                  className="relative z-50 bg-black border-2 border-mainAccent rounded-4xl py-2 px-6 text-sm sm:text-base w-full sm:w-auto 
                   transition-all duration-300 hover:shadow-[0_0_10px_rgba(255,0,255,0.7)]"
                >
                  Connect
                </button>

                <button
                  className="bg-black border-2 border-secondaryAccent rounded-4xl py-2 px-6 text-sm  pointer-events-none sm:text-base w-full sm:w-auto 
                     transition-all duration-100 hover:shadow-[0_0_10px_rgba(0,255,255,0.7)]"
                >
                  Resume
                </button>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div>
              <Canvas
                id="bear"
                style={{
                  position: "absolute",
                  top: 70,
                  right: -1000,
                  width: 500,
                  height: 500,
                }}
                className="cursor-pointer transform transition-transform duration-500 ease-out hover:scale-110"
              >
                <ambientLight intensity={0.4} />
                <directionalLight position={[5, 5, 5]} />
                <Model scale={4} />
                <OrbitControls
                  enableZoom={false}
                  enablePan={false}
                  autoRotate={true}
                  autoRotateSpeed={3}
                  enableRotate={true}
                  maxPolarAngle={Math.PI / 1.5}
                  minPolarAngle={Math.PI / 4}
                />
              </Canvas>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-20 sm:h-32 md:h-40 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>
      </div>
    </section>
  );
}
