import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Surrounding = (props) => {
  const tree = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-lime/model.gltf"
  );
  const largeRock1 = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/formation-large-rock/model.gltf"
  );
  const largeRock2 = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/formation-rock/model.gltf"
  );
  const smallRock1 = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/rocks-forrest/model.gltf"
  );
  const bricks = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bricks/model.gltf"
  );
  const longPalmTree = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/palm-detailed-long/model.gltf"
  );
  const shortPalmTree = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/palm-detailed-short/model.gltf"
  );
  const well = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/hole/model.gltf"
  );
  const bench = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bench-2/model.gltf"
  );
  const lamp = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/lamp-post/model.gltf"
  );
  return (
    <group {...props}>
      <RigidBody type="fixed" colliders={"trimesh"}>
        <primitive object={tree.scene} scale={0.2} position={[0, 0.1, 4]} />
      </RigidBody>
      <RigidBody type="fixed" colliders={"hull"}>
        <primitive
          object={largeRock1.scene}
          scale={3.5}
          position={[-7, 0, 30]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders={"hull"}>
        <primitive
          object={largeRock2.scene}
          scale={3}
          position={[-18.5, 0, 25]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <primitive
          object={bricks.scene}
          scale={0.3}
          position={[-0.12, 0, 3.9]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <primitive
          object={longPalmTree.scene}
          scale={1}
          position={[-0.12, 0, 3.9]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <primitive
          object={shortPalmTree.scene}
          scale={1}
          position={[1.5, 0, 4]}
        />
      </RigidBody>
      <RigidBody type="fixed" colliders={"hull"}>
        <primitive object={smallRock1.scene} scale={1} position={[-2, 0, -2]} />
      </RigidBody>
      <RigidBody type="fixed" colliders={"hull"}>
        <primitive object={well.scene} scale={1} position={[4.8, 0.03, 12]} />
      </RigidBody>

      <RigidBody type="fixed">
        <primitive
          object={bench.scene}
          scale={0.5}
          position={[-2.5, 0, 3]}
          rotation={[0, Math.PI * 0.5, 0]}
        />
      </RigidBody>
      <RigidBody type="fixed">
        <primitive
          object={lamp.scene}
          scale={0.5}
          position={[1.5, 0, 2]}
          rotation={[0, Math.PI * 0.5, 0]}
        />
      </RigidBody>
    </group>
  );
};

export default Surrounding;
