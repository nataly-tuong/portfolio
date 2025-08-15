import ShinyText from "../components/ShinyText/ShinyText";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "../components/Model";

export default function Home() {
  return (
    <section id="Home">
      <div
        className="bg-black
                   bg-[url('/Texturelabs_LensFX_130M.jpg')] bg-cover
                   px-55 pb-50 pt-50 text-white
                   bg-[position:10%_center] relative"
      >
        <div
          className="absolute top-30 right-15
                        bg-[url('Texturelabs_LensFX_242S.jpg')]
                        bg-cover bg-center
                        mix-blend-plus-lighter
                        w-40 h-40 brightness-125
                        animate-pulse z-50"
        ></div>
        <div
          className="absolute top-120 left-70
                        bg-[url('Texturelabs_LensFX_242S.jpg')]
                        bg-cover bg-center
                        mix-blend-plus-lighter
                        w-20 h-20 brightness-200
                        rotate-[20deg]
                        animate-pulse z-50"
        ></div>
        <div
          className="absolute top-130 left-35
                        bg-[url('Texturelabs_LensFX_242S.jpg')]
                        bg-cover bg-center
                        mix-blend-plus-lighter
                        w-50 h-50 brightness-80
                        rotate-[5deg]
                        animate-pulse z-50"
        ></div>

        <div class="flex">
          <div class="pl-40">
            <h1
              className="text-5xl font-bold bg-gradient-to-r
                       from-mainAccent to-secondaryAccent inline-block py-2 
                       text-transparent bg-clip-text
                       mb-2"
            >
              Nataly Tuong
            </h1>
            <div>
              <ShinyText
                text="aspiring software engineer & web developer"
                disabled={false}
                speed={2}
                className="custom-class font-bold mb-2"
              />
            </div>
            <p class="text-left pr-70">
              ✧ദ്ദി( ˶^ᗜ^˶ ) Hi! Hello, I love exploring what tech has to offer.
              Specifically, I'm interested in creating works with thoughtful
              architecture and intent. I'm deeply committed to innovation and
              continuous learning. I'm a huge lover of anything silly, cats, and
              music. Feel free to reach out!
            </p>
            <div></div>

            <div class="flex mt-4 gap-4">
              <button class="bg-black border-1 border-mainAccent rounded-4xl py-2 px-4">
                Connect
              </button>
              <button class="bg-black border-1 border-secondaryAccent rounded-4xl py-2 px-4">
                Resume
              </button>
            </div>
          </div>
          <div>
            <div>
              <Canvas
                style={{
                  position: "absolute",
                  top: 70,
                  right: 90,
                  width: 500,
                  height: 500,
                }}
              >
                <ambientLight intensity={0.8} />
                <directionalLight position={[5, 5, 5]} />
                <Model scale={4} />
                <OrbitControls
                  enableZoom={false}
                  autoRotate={true}
                  autoRotateSpeed={1}
                  enableRotate={true}
                  maxPolarAngle={Math.PI / 1.5}
                  minPolarAngle={Math.PI / 4}
                />
              </Canvas>
            </div>
          </div>
        </div>

        <div
          class="bg-gradient-to-t from-black to-transparent
        bottom-0 left-0 w-full h-40 absolute"
        ></div>
      </div>
    </section>
  );
}
