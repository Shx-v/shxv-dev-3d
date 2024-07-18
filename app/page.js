"use client";

import Image from "next/image";
import { Canvas, useThree } from "@react-three/fiber";
import { KeyboardControls } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import * as THREE from "three";

import Experience from "@/components/Experience";

function Fog() {
  const { scene } = useThree();

  useEffect(() => {
    scene.fog = new THREE.Fog("#FFD580", 1, 17);
    return () => {
      scene.fog = null;
    };
  }, [scene]);

  return null;
}

const Home = () => {
  return (
    <div className="w-full h-auto fixed inset-0 z-[20]">
      <Suspense>
        <KeyboardControls
          map={[
            { name: "ahead", keys: ["ArrowUp", "KeyW"] },
            { name: "back", keys: ["ArrowDown", "KeyS"] },
            { name: "left", keys: ["ArrowLeft", "KeyA"] },
            { name: "right", keys: ["ArrowRight", "KeyD"] },
            { name: "jump", keys: ["Space"] },
          ]}
        >
          <Canvas
            className="w-full h-[100vh]"
            shadows
            camera={{
              fov: 45,
              near: 0.001,
              far: 5000,
              position: [0, 0.5, 10],
            }}
            // fog={{ color: 'white', near: 0, far: 1 }}
            gl={{ preserveDrawingBuffer: true }}
          >
            <Fog />
            <Experience />
          </Canvas>
        </KeyboardControls>
      </Suspense>
    </div>
  );
};

export default Home;
