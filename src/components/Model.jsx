import React from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

import modelUrl from "../assets/Model.glb";

export default function Model(props) {
  const { nodes } = useGLTF(modelUrl);

  const material = nodes.mesh_0?.material;
  if (material) {
    material.flatShading = false;
    material.metalness = 0;
    material.roughness = 0.5;
    material.needsUpdate = true;
  }

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={material}
      />
    </group>
  );
}

useGLTF.preload(modelUrl);
