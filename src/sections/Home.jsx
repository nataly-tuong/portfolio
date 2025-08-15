import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "../components/Model";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

export default function Home() {
  const star1 = useRef();
  const star2 = useRef();
  const star3 = useRef();

  const timeline = gsap.timeline({ repeat: 0 });

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    timeline.from(".hero-text", {
      x: -1250,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.3,
    });

    timeline.to("#bear", {
      right: 35,
      ease: "power2.out",
      duration: 0.8,
    });

    gsap.fromTo(
      star1.current,
      { y: -80, opacity: 0, rotation: 0 },
      {
        y: 50,
        opacity: 1,
        rotation: 360,
        scrollTrigger: {
          trigger: "#Home",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
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
        scrollTrigger: {
          trigger: "#Home",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
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
        scrollTrigger: {
          trigger: "#Home",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section id="Home">
      <div className="bg-black bg-[url('/Texturelabs_LensFX_130M.jpg')] bg-cover px-55 pb-50 pt-50 text-white bg-[position:10%_center] relative overflow-hidden">
        <div
          ref={star1}
          className="absolute top-30 right-15 bg-[url('Texturelabs_LensFX_242S.jpg')] bg-cover bg-center mix-blend-plus-lighter w-40 h-40 brightness-125 animate-pulse z-50"
        ></div>
        <div
          ref={star2}
          className="absolute top-120 left-70 bg-[url('Texturelabs_LensFX_242S.jpg')] bg-cover bg-center mix-blend-plus-lighter w-20 h-20 brightness-200 rotate-[20deg] animate-pulse z-50"
        ></div>
        <div
          ref={star3}
          className="absolute top-115 left-35 bg-[url('Texturelabs_LensFX_242S.jpg')] bg-cover bg-center mix-blend-plus-lighter w-50 h-50 brightness-80 rotate-[5deg] animate-pulse z-50"
        ></div>

        <div className="flex">
          <div>
            <h1 className="hero-text text-5xl font-bold bg-gradient-to-r from-mainAccent to-secondaryAccent inline-block py-2 text-transparent bg-clip-text mb-2">
              Nataly Tuong
            </h1>
            <div>
              <h2 className="hero-text custom-class font-bold mb-2">
                aspiring software engineer & web developer
              </h2>
            </div>
            <p className="hero-text text-left pr-70">
              ✧ദ്ദി( ˶^ᗜ^˶ ) Hi! Hello, I love exploring what tech has to offer.
              Specifically, I'm interested in creating works with thoughtful
              architecture and intent. I'm deeply committed to innovation and
              continuous learning. I'm a huge lover of anything silly, cats, and
              music. Feel free to reach out!
            </p>
            <div></div>
            <div className="hero-text flex mt-4 gap-4">
              <button className="bg-black border-1 border-mainAccent rounded-4xl py-2 px-4">
                Connect
              </button>
              <button className="bg-black border-1 border-secondaryAccent rounded-4xl py-2 px-4">
                Resume
              </button>
            </div>
          </div>
          <div>
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

        <div className="bg-gradient-to-t from-black to-transparent bottom-0 left-0 w-full h-40 absolute"></div>
      </div>
    </section>
  );
}
