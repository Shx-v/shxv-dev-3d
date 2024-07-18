import { useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"

const Houses = (props) => {
  const house1 = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/house-5/model.gltf");
  const house2 = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/house-4/model.gltf");
  const house3 = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/house-7/model.gltf");
  return (
    <RigidBody type="fixed" {...props} >
        <primitive
        object={house1.scene}
        position={[0, 0, 0]}
      />
        <primitive
        object={house2.scene}
        position={[-2, 0.29, 1.5]}
        rotation={[0, Math.PI * 0.5, 0]}
      />
        <primitive
        object={house3.scene}
        position={[2, 0, 1.5]}
        rotation={[0, -Math.PI * 0.5, 0]}
      />
    </RigidBody>
  )
}

export default Houses