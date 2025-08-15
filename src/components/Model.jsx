import React from "react";
import { useGLTF } from "@react-three/drei";
import modelUrl from "../assets/Model.glb"; // path is relative to Model.jsx

export default function Model(props) {
  const { nodes, materials } = useGLTF(modelUrl);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </group>
  );
}

useGLTF.preload(modelUrl);
