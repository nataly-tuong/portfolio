import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState, useEffect } from "react";
import Model from "./Model";

export default function Bear3D() {
  const [scale, setScale] = useState(4);
  const [canvasSize, setCanvasSize] = useState({ width: 300, height: 300 });
  const [position, setPosition] = useState({ top: 0, right: 0 });
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const updateResponsiveSettings = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setScale(4);
        setCanvasSize({ width: 300, height: 300 });
        setPosition({ top: 0, right: 0 });
        setIsMobile(true);
      } else if (width < 1024) {
        setScale(4);
        setCanvasSize({ width: 450, height: 450 });
        setPosition({ top: 20, right: -50 });
        setIsMobile(false);
      } else if (width < 1280) {
        setScale(4);
        setCanvasSize({ width: 600, height: 600 });
        setPosition({ top: 20, right: -100 });
        setIsMobile(false);
      } else if (width < 1536) {
        setScale(4);
        setCanvasSize({ width: 750, height: 750 });
        setPosition({ top: 20, right: -150 });
        setIsMobile(false);
      } else {
        setScale(4);
        setCanvasSize({ width: 900, height: 900 });
        setPosition({ top: 20, right: -200 });
        setIsMobile(false);
      }
    };

    updateResponsiveSettings();
    window.addEventListener("resize", updateResponsiveSettings);
    return () => window.removeEventListener("resize", updateResponsiveSettings);
  }, []);

  return (
    <div className={isMobile ? "w-full flex justify-center mt-8" : "block"}>
      <Canvas
        gl={{ antialias: true }}
        camera={{ fov: 45, position: [0, 0, 8] }}
        shadows
        style={{
          width: `${canvasSize.width}px`,
          height: `${canvasSize.height}px`,
          position: isMobile ? "relative" : "absolute",
          top: isMobile ? 0 : position.top,
          right: isMobile ? 0 : position.right,
          left: isMobile ? "50%" : "auto",
          transform: isMobile ? "translateX(-50%)" : "none",
          zIndex: 30,
        }}
        id="bear"
      >
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <directionalLight
          position={[-3, -3, -3]}
          intensity={0.4}
          color="#5555bb"
        />
        <directionalLight
          position={[3, -5, 2]}
          intensity={0.3}
          color="#bb4444"
        />
        <directionalLight
          position={[0, -8, 0]}
          intensity={0.2}
          color="#ffffff"
        />
        <Model scale={scale} rotation={[-0.3, -0.6, 0]} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={2}
          enableRotate={true}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
