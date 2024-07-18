"use client";

import { Environment } from "@react-three/drei";
import { Physics, Debug, RigidBody } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import { Bloom, Vignette, EffectComposer } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

import Houses from "./Houses";
import Surrounding from "./Surrounding";
import PersonalData from "./PersonalData";
import Suv from "./Suv";

const Experience = () => {
  return (
    <>
      {/* <Perf position="top-left" /> */}
      <EffectComposer>
        <Vignette
          offset={0.2}
          darkness={0.6}
          blendFunction={BlendFunction.NORMAL}
        />
        <Bloom mipmapBlur intensity={0.5} luminanceThreshold={0.5} />
      </EffectComposer>
      <Environment preset="sunset" />
      <color args={["#FFD580"]} attach="background" />
      <Physics>
        {/* <Debug /> */}
        <RigidBody type="fixed">
          <mesh position={[0, -5, 0]}>
            <cylinderGeometry args={[20, 5, 10, 128]} />
            <meshBasicMaterial color={"#db935c"} />
          </mesh>
        </RigidBody>

        <Houses scale={2} />
        <Surrounding />
        <PersonalData />
        <Suv position={[0, 6, 8]} />
      </Physics>
    </>
  );
};

export default Experience;
