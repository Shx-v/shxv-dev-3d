"use client";

import { useGLTF, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRapier, RigidBody } from "@react-three/rapier";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import useGame from "./useGame.js";

const Suv = (props) => {
  const suvRef = useRef();
  const [subscribeKeys, getKeys] = useKeyboardControls();
  const smoothedCameraPosition = new THREE.Vector3(10, 10, 10);
  const smoothedCameraTarget = new THREE.Vector3();
  const { rapier, world } = useRapier();
  const rapierWorld = world.raw();
  const start = useGame((state) => state.start);
  const end = useGame((state) => state.end);
  const restart = useGame((state) => state.restart);

  const jump = () => {
    const origin = suvRef.current.translation();
    origin.y -= 0.31;
    const direction = { x: 0, y: -1, z: 0 };
    const ray = new rapier.Ray(origin, direction);
    const hit = rapierWorld.castRay(ray, 10, true);

    if (hit?.toi < 0.15) {
      suvRef.current.applyImpulse({ x: 0, y: 0.015, z: 0 });
    }
  };

  const reset = () => {
    suvRef.current.setTranslation({ x: 0, y: 6, z: 8 });
    suvRef.current.setLinvel({ x: 0, y: 0, z: 0 });
    suvRef.current.setAngvel({ x: 0, y: 0, z: 0 });
  };

  useEffect(() => {
    const unsubscribeReset = useGame.subscribe(
      (state) => state.phase,
      (value) => {
        if (value === "ready") reset();
      }
    );

    const unsubscribeJump = subscribeKeys(
      (state) => state.jump,
      (value) => {
        if (value) jump();
      }
    );

    const unsubscribeAny = subscribeKeys(() => {
      start();
    });

    return () => {
      unsubscribeReset();
      unsubscribeJump();
      unsubscribeAny();
    };
  }, []);

  useFrame((state, delta) => {
    const { ahead, back, left, right } = getKeys();

    const impulse = { x: 0, y: 0, z: 0 };
    const torque = { x: 0, y: 0, z: 0 };

    const impulseStrength = 0.02 * delta;
    const torqueStrength = 0.001 * delta;

    if (ahead) {
      impulse.z -= impulseStrength;
      torque.x -= torqueStrength;
    }

    if (right) {
      impulse.x += impulseStrength;
      torque.z -= torqueStrength;
    }

    if (back) {
      impulse.z += impulseStrength;
      torque.x += torqueStrength;
    }

    if (left) {
      impulse.x -= impulseStrength;
      torque.z += torqueStrength;
    }

    suvRef.current.applyImpulse(impulse);
    suvRef.current.applyTorqueImpulse(torque);

    const bodyPosition = suvRef.current.translation();

    const cameraPosition = new THREE.Vector3();
    cameraPosition.copy(bodyPosition);
    cameraPosition.z += 2.25;
    cameraPosition.y += 0.65;
    // cameraPosition.x += 1;

    const cameraTarget = new THREE.Vector3();
    cameraTarget.copy(bodyPosition);
    cameraTarget.y += 0.25;

    smoothedCameraPosition.lerp(cameraPosition, 5 * delta);
    smoothedCameraTarget.lerp(cameraTarget, 5 * delta);

    state.camera.position.copy(smoothedCameraPosition);
    state.camera.lookAt(smoothedCameraTarget);

    if (bodyPosition.y < -4) {
      reset();
    }
  });

  return (
    <RigidBody
      ref={suvRef}
      colliders="ball"
      restitution={1}
      friction={1}
      linearDamping={1}
      angularDamping={1}
      {...props}
    >
      <mesh>
        <icosahedronGeometry args={[0.1, 1]} />
        <meshStandardMaterial flatShading color="mediumpurple" />
      </mesh>
    </RigidBody>
  );
};

export default Suv;
