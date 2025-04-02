import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function ring(props) {
  const { nodes, materials } = useGLTF('/ring_silver_with_black_cristal.glb')
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.2536}>
        <group
          name="99806c4e4950453c91bdd780fbe83af5fbx"
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}>
          <group name="Cylinder" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              name="Cylinder_Material001_0"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_Material001_0.geometry}
              material={materials['Material.001']}
            />
            <mesh
              name="Cylinder_Material004_0"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder_Material004_0.geometry}
              // material={carbonTexture}
            >
              <meshPhysicalMaterial metalness={1} color={'black'} roughness={0} ior={0.4} />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/ring_silver_with_black_cristal.glb')
