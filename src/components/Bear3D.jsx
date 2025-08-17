import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";

export default function Bear3D() {
  return (
    <div className="hidden lg:block pl-60">
      <Canvas
        gl={{ antialias: true }}
        camera={{ fov: 45, position: [0, 0, 8] }}
        shadows
        style={{
          width: "900px",
          height: "900px",
          position: "absolute",
          top: 20,
          right: -1000,
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

        <Model scale={4} rotation={[-0.3, -0.6, 0]} />

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
