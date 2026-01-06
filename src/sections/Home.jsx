import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";

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
          "drop-shadow(0 0 18px rgba(239,68,68,1)) drop-shadow(0 0 42px rgba(239,68,68,0.75))",
        duration: 1.2,
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
      className="relative min-h-screen overflow-hidden text-white"
    >
      <ShaderGradientCanvas
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#000000",
        }}
      >
        <ShaderGradient
          control="query"
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=1.4&cAzimuthAngle=180&cDistance=3.9&cPolarAngle=115&cameraZoom=1&color1=%23ff2a00&color2=%232658fe&color3=%23000000&destination=onCanvas&embedMode=off&envPreset=dawn&format=gif&fov=45&frameRate=10&grain=on&lightType=3d&pixelDensity=1.1&positionX=-0.5&positionY=0.1&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=235&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.3&uFrequency=5.5&uSpeed=0.3&uStrength=4.7&uTime=0.2&wireframe=false"
        />
      </ShaderGradientCanvas>

      <div className="absolute z-20 inset-x-0 top-1/2 -translate-y-1/2 hero-text h-full flex flex-col items-center justify-center border-dashed border-t-1 border-b-1 border-white/20 bg-black/35 backdrop-blur-md shadow-xl px-9 text-center rounded-none">
        <h1 className="font-bodoni text-[clamp(7rem,8vw,7.5rem)] text-glow text-9xl sm:text-9xl font-bold text-white">
          Nataly Tuong
        </h1>
        <h2 className="font-noto mt-8 text-2xl sm:text-4xl text-white/95 mt-2">
          Aspiring Software Engineer
        </h2>
      </div>

      <div
        className="absolute z-20 left-5 right- sm:left-0 sm:right-0
 bottom-0 h-20 sm:h-32 md:h-40 bg-gradient-to-t from-black to-transparent pointer-events-none"
      />
      <a
        href="#About"
        aria-label="Scroll to About"
        className="scroll-hint absolute bottom-13 left-1/2 -translate-x-1/2 z-50"
      >
        <svg
          className="
      scroll-arrow
      w-10 h-10
      text-red-500 text-glow-red
    "
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
