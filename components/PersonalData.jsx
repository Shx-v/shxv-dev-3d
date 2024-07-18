import { Text3D, Center, useGLTF, Html } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const PersonalData = (props) => {
  const laptop = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  return (
    <group {...props}>
      <Center scale={0.3} position={[0, 0.17, 7]} rotation={[0, 0, 0]}>
        <RigidBody>
          <Text3D
            scale={[1, 1, 1.2]}
            position={[0, 0, 13.5]}
            font={"./fonts/helvetiker_regular.typeface.json"}
            size={1}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            S
          </Text3D>
        </RigidBody>
        <RigidBody>
          <Text3D
            scale={[1, 1, 1.2]}
            position={[0.9, 0, 13.5]}
            font={"./fonts/helvetiker_regular.typeface.json"}
            size={1}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            H
          </Text3D>
        </RigidBody>
        <RigidBody>
          <Text3D
            scale={[1, 1, 1.2]}
            position={[1.8, 0, 13.5]}
            font={"./fonts/helvetiker_regular.typeface.json"}
            size={1}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            I
          </Text3D>
        </RigidBody>
        <RigidBody>
          <Text3D
            scale={[1, 1, 1.2]}
            position={[2.1, 0, 13.5]}
            font={"./fonts/helvetiker_regular.typeface.json"}
            size={1}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            V
          </Text3D>
        </RigidBody>
        <RigidBody>
          <Text3D
            scale={[1, 1, 1.2]}
            position={[3.1, 0, 13.5]}
            font={"./fonts/helvetiker_regular.typeface.json"}
            size={1}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            R
          </Text3D>
        </RigidBody>
        <RigidBody>
          <Text3D
            scale={[1, 1, 1.2]}
            position={[3.97, 0, 13.5]}
            font={"./fonts/helvetiker_regular.typeface.json"}
            size={1}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            A
          </Text3D>
        </RigidBody>
        <RigidBody>
          <Text3D
            scale={[1, 1, 1.2]}
            position={[5, 0, 13.5]}
            font={"./fonts/helvetiker_regular.typeface.json"}
            size={1}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            N
          </Text3D>
        </RigidBody>
        <RigidBody>
          <Text3D
            scale={[1, 1, 1.2]}
            position={[6, 0, 13.5]}
            font={"./fonts/helvetiker_regular.typeface.json"}
            size={1}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            J
          </Text3D>
        </RigidBody>
        <RigidBody>
          <Text3D
            scale={[1, 1, 1.2]}
            position={[6.7, 0, 13.5]}
            font={"./fonts/helvetiker_regular.typeface.json"}
            size={1}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            A
          </Text3D>
        </RigidBody>
        <RigidBody>
          <Text3D
            scale={[1, 1, 1.2]}
            position={[7.8, 0, 13.5]}
            font={"./fonts/helvetiker_regular.typeface.json"}
            size={1}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            N
          </Text3D>
        </RigidBody>
      </Center>
      {/* <group position={[-10, 0.2, 0]} rotation={[0.3, 0.3, 0]}>
        <primitive object={laptop.scene} />
        <Html
          transform
          wrapperClass="htmlScreen"
          distanceFactor={1.17}
          position={[0, 1.54, -1.4]}
          rotation-x={-0.27}
        >
          <iframe
            className="w-[1024px] h-[670px] border-none rounded-[20px] bg-black "
            src="https://shxv-dev-2.vercel.app/"
          />
        </Html>
      </group> */}
      {/* <group scale={0.2} position={[10, 0.5, 0]}>
        <RigidBody>
          <mesh position={[0, 0, 0]}>
            <boxGeometry />
            <meshBasicMaterial />
          </mesh>
        </RigidBody>
        <RigidBody>
          <mesh position={[1.1, 0, 0]}>
            <boxGeometry />
            <meshBasicMaterial />
          </mesh>
        </RigidBody>
        <RigidBody>
          <mesh position={[2.2, 0, 0]}>
            <boxGeometry />
            <meshBasicMaterial />
          </mesh>
        </RigidBody>
        <RigidBody>
          <mesh position={[0.55, 1.1, 0]}>
            <boxGeometry />
            <meshBasicMaterial />
          </mesh>
        </RigidBody>
        <RigidBody>
          <mesh position={[1.65, 1.1, 0]}>
            <boxGeometry />
            <meshBasicMaterial />
          </mesh>
        </RigidBody>
        <RigidBody>
          <mesh position={[1.1, 2.2, 0]}>
            <boxGeometry />
            <meshBasicMaterial />
          </mesh>
        </RigidBody>
      </group> */}
      {/* <group position={[10, 1, 0]}>
        <mesh position={[0, 0, 0]} scale={[1.7, 1, 0.15]} rotation={[0, 0, 0]}>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
        <Html
          transform
          wrapperClass="htmlScreen"
          distanceFactor={1.17}
          position={[0, 1.54, -1.4]}
          rotation-x={-0.27}
        >
          hello
        </Html>
        <mesh
          position={[2, 0, 0.25]}
          scale={[1.7, 1, 0.15]}
          rotation={[0, -0.25, 0]}
        >
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
        <mesh
          position={[3.9, 0, 1]}
          scale={[1.7, 1, 0.15]}
          rotation={[0, -0.5, 0]}
        >
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </group> */}
    </group>
  );
};

export default PersonalData;
