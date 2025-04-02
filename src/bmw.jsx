
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Bmw(props) {
  const { nodes, materials } = useGLTF('/bmw_m5_cs.glb')
  // console.log(nodes)
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="BMW021_0"
                position={[-0.0679, 0.1687, 0.9836]}
                rotation={[1.5704, 0, Math.PI]}
                scale={3}>
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials['TEX.018']}
                />
              </group>
              <group
                name="BMW020_1"
                position={[-0.0679, 0.1687, 0.9836]}
                rotation={[1.5704, 0, Math.PI]}
                scale={0.3}>
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials['TEX.017']}
                >
                </mesh>
              </group>
              <group
                name="BMW022_2"
                position={[-0.0679, 0.1687, 0.9836]}
                rotation={[1.5704, 0, Math.PI]}
                scale={0.3}>
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials['TEX.016']}
                />
              </group>
              <group
                name="BMW019_3"
                position={[-0.0679, 0.1687, 0.9836]}
                rotation={[1.5704, 0, Math.PI]}
                scale={0.3}>
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials['TEX.016']}
                />
              </group>
              <group
                name="BMW017_4"
                position={[-0.0679, 0.1687, 0.9836]}
                rotation={[1.5704, 0, Math.PI]}
                scale={0.3}>
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials['TEX.019']}
                />
              </group>
              <group
                name="BMW007_5"
                position={[-0.0679, 0.1687, 0.9836]}
                rotation={[1.5704, 0, Math.PI]}
                scale={0.3}>
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials['TEX.004']}
                />
              </group>
              <group
                name="BMW012_6"
                position={[-0.0679, 0.1687, 0.9836]}
                rotation={[1.5704, 0, Math.PI]}
                scale={0.3}>
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials['TEX.010']}
                />
              </group>
              <group
                name="BMW014_7"
                position={[-0.0679, 0.1687, 0.9836]}
                rotation={[1.5704, 0, Math.PI]}
                scale={0.003}>
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials['TEX.012']}
                />
              </group>
              <group
                name="BMW018_8"
                position={[-0.0679, 0.1687, 0.9836]}
                rotation={[1.5704, 0, Math.PI]}
                scale={0.3}>
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20.geometry}
                  material={materials['TEX.015']}
                />
              </group>
              <group
                name="BMW008_9"
                position={[-0.0679, 0.1687, 0.9836]}
                rotation={[1.5704, 0, Math.PI]}
                scale={0.3}>
                <mesh
                  name="Object_22"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_22.geometry}
                  // material={materials['TEX.005']}
                >
                  <meshPhysicalMaterial metalness={0.3} color={'black'} roughness={0} ior={0.4} />
                </mesh>
                <mesh
                  name="Object_23"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_23.geometry}
                  material={materials['TEX.006']}
                />
              </group>
              <group
                name="BMW010_10"
                position={[-0.0679, 0.1687, 0.9836]}
                rotation={[1.5704, 0, Math.PI]}
                scale={0.3}>
                <mesh
                  name="Object_25"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_25.geometry}
                  material={materials['TEX.008']}
                />
              </group>
              <group
                name="BMW027_11"
                position={[-0.0679, 0.1687, 0.9836]}
                rotation={[1.5704, 0, Math.PI]}
                scale={0.03}>
                <mesh
                  name="Object_27"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_27.geometry}
                  material={materials['TEX.040']}
                />
              </group>
              <group
                name="BMW006_12"
                position={[-0.0679, 0.1687, 0.9836]}
                rotation={[1.5704, 0, Math.PI]}
                scale={0.3}>
                <mesh
                  name="Object_29"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_29.geometry}
                  material={materials['TEX.019']}
                />
              </group>
              <group
                name="BMW009_13"
                position={[-0.0679, 0.1687, 0.9836]}
                rotation={[1.5704, 0, Math.PI]}
                scale={3}>
                <mesh
                  name="Object_31"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_31.geometry}
                  material={materials['TEX.007']}
                />
              </group>
              <group
                name="BMW011_14"
                position={[-0.0679, 0.1687, 0.9836]}
                rotation={[1.5704, 0, Math.PI]}
                scale={0.3}>
                <mesh
                  name="Object_33"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_33.geometry}
                  material={materials['TEX.009']}
                />
              </group>
              <group
                name="BMW013_15"
                position={[-0.0679, 0.1687, 0.9836]}
                rotation={[1.5704, 0, Math.PI]}
                scale={0.3}>
                <mesh
                  name="Object_35"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_35.geometry}
                  material={materials['TEX.011']}
                />
              </group>
              <group
                name="BMW015_16"
                position={[-0.0679, 0.1687, 0.9836]}
                rotation={[1.5704, 0, Math.PI]}
                scale={0.003}>
                <mesh
                  name="Object_37"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_37.geometry}
                  // material={materials['TEX.013']}
                >
                  <meshPhysicalMaterial metalness={1.8} ior={1} color={'white'} roughness={0.4} />
                </mesh>
              </group>
              <group
                name="BMW016_17"
                position={[-0.0679, 0.1687, 0.9836]}
                rotation={[1.5704, 0, Math.PI]}
                scale={0.3}>
                <mesh
                  name="Object_39"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_39.geometry}
                  material={materials['TEX.014']}
                >
                  {/* <meshPhysicalMaterial metalness={2} ior={2} color={'pink'} roughness={0.1} /> */}
                </mesh>
              </group>
              <group
                name="BMW028_18"
                position={[-0.0502, 0.2615, 2.9651]}
                rotation={[1.5704, 0, Math.PI]}>
                <mesh
                  name="Object_41"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_41.geometry}
                  material={materials.material}
                />
              </group>
              <group
                name="BMW029_19"
                position={[0.4529, 0.2615, 2.9651]}
                rotation={[1.5704, 0, Math.PI]}>
                <mesh
                  name="Object_43"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_43.geometry}
                  material={materials['TEX.026']}
                />
              </group>
              <group
                name="BMW030_20"
                position={[0.6349, 0.069, 3.0583]}
                rotation={[1.5704, 0, Math.PI]}>
                <mesh
                  name="Object_45"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_45.geometry}
                  material={materials['TEX.006']}
                />
              </group>
              <group
                name="BMW031_21"
                position={[0.6347, 0.1784, 3.0002]}
                rotation={[1.5704, 0, Math.PI]}>
                <mesh
                  name="Object_47"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_47.geometry}
                  // material={materials['TEX.025']}
                >
                  <meshPhysicalMaterial metalness={1.8} ior={1} color={'white'} roughness={0.4} />
                </mesh>
                
              </group>
              <group
                name="BMW032_22"
                position={[0.6347, 0.1782, 3.0002]}
                rotation={[1.5704, 0, Math.PI]}>
                <mesh
                  name="Object_49"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_49.geometry}
                  material={materials['TEX.027']}
                />
              </group>
              <group
                name="BMW033_23"
                position={[0.6684, -0.2326, 3.0521]}
                rotation={[1.5704, 0, Math.PI]}>
                <mesh
                  name="Object_51"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_51.geometry}
                  material={materials['TEX.029']}
                />
              </group>
              <group
                name="BMW034_24"
                position={[0.7507, -0.1881, 2.9801]}
                rotation={[1.5704, 0, Math.PI]}>
                <mesh
                  name="Object_53"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_53.geometry}
                  material={materials['TEX.030']}
                />
              </group>
              <group
                name="BMW035_25"
                position={[0.7542, -0.1358, 3.0559]}
                rotation={[1.5704, 0, Math.PI]}>
                <mesh
                  name="Object_55"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_55.geometry}
                  // material={materials['TEX.031']}
                >
                  <meshPhysicalMaterial metalness={1.1} color={'black'} roughness={0.2} />
                </mesh>
              </group>
              <group
                name="BMW025_26"
                position={[0.6262, 0.2719, 2.3581]}
                rotation={[1.5704, 0, 0]}
                scale={3.0684}>
                <mesh
                  name="Object_57"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_57.geometry}
                  material={materials['TEX.020']}
                />
                <mesh
                  name="Object_58"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_58.geometry}
                  material={materials['TEX.021']}
                />
                <mesh
                  name="Object_59"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_59.geometry}
                  material={materials['TEX.022']}
                />
                <mesh
                  name="Object_60"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_60.geometry}
                  material={materials['TEX.023']}
                />
                <mesh
                  name="Object_61"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_61.geometry}
                  material={materials['TEX.024']}
                />
                <mesh
                  name="Object_62"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_62.geometry}
                  material={materials['TEX.025']}
                />
                <mesh
                  name="Object_63"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_63.geometry}
                  material={materials['TEX.026']}
                />
                <mesh
                  name="Object_64"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_64.geometry}
                  material={materials['TEX.027']}
                />
                <mesh
                  name="Object_65"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_65.geometry}
                  material={materials.material}
                />
                <mesh
                  name="Object_66"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_66.geometry}
                  material={materials['TEX.029']}
                />
                <mesh
                  name="Object_67"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_67.geometry}
                  material={materials['TEX.030']}
                />
                <mesh
                  name="Object_68"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_68.geometry}
                  material={materials['TEX.031']}
                />
                <mesh
                  name="Object_69"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_69.geometry}
                  material={materials['TEX.032']}
                />
                <mesh
                  name="Object_70"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_70.geometry}
                  material={materials['TEX.038']}
                />
              </group>
              <group
                name="BMW004_27"
                position={[-0.0245, 0.0102, 1.184]}
                rotation={[1.5704, 0, 0]}
                scale={0.0105}>
                <mesh
                  name="Object_72"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_72.geometry}
                  material={materials['TEX.003']}
                />
                <mesh
                  name="Object_73"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_73.geometry}
                  material={materials['TEX.001']}
                />
              </group>
              <group
                name="BMW023_28"
                position={[-0.6262, 0.2719, 2.3581]}
                rotation={[1.5704, 0, Math.PI]}
                scale={3.0684}>
                <mesh
                  name="Object_75"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_75.geometry}
                  material={materials['TEX.020']}
                />
                <mesh
                  name="Object_76"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_76.geometry}
                  material={materials['TEX.021']}
                />
                <mesh
                  name="Object_77"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_77.geometry}
                  material={materials['TEX.022']}
                />
                <mesh
                  name="Object_78"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_78.geometry}
                  material={materials['TEX.023']}
                />
                <mesh
                  name="Object_79"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_79.geometry}
                  material={materials['TEX.024']}
                />
                <mesh
                  name="Object_80"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_80.geometry}
                  material={materials['TEX.025']}
                />
                <mesh
                  name="Object_81"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_81.geometry}
                  material={materials['TEX.026']}
                />
                <mesh
                  name="Object_82"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_82.geometry}
                  material={materials['TEX.027']}
                />
                <mesh
                  name="Object_83"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_83.geometry}
                  material={materials.material}
                />
                <mesh
                  name="Object_84"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_84.geometry}
                  material={materials['TEX.029']}
                />
                <mesh
                  name="Object_85"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_85.geometry}
                  material={materials['TEX.030']}
                />
                <mesh
                  name="Object_86"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_86.geometry}
                  material={materials['TEX.031']}
                />
                <mesh
                  name="Object_87"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_87.geometry}
                  material={materials['TEX.032']}
                />
                <mesh
                  name="Object_88"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_88.geometry}
                  material={materials['TEX.038']}
                />
              </group>
              <group
                name="BMW001_29"
                position={[0.0245, 0.0112, 3.5324]}
                rotation={[1.5704, 0, Math.PI]}
                scale={0.0105}>
                <mesh
                  name="Object_90"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_90.geometry}
                  material={materials['TEX.003']}
                />
                <mesh
                  name="Object_91"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_91.geometry}
                  material={materials['TEX.001']}
                />
              </group>
              <group
                name="BMW024_30"
                position={[0.6297, 0.2709, -0.0001]}
                rotation={[1.5704, 0, 0]}
                scale={[3.0856, 3.0684, 3.0684]}>
                <mesh
                  name="Object_93"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_93.geometry}
                  material={materials['TEX.020']}
                />
                <mesh
                  name="Object_94"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_94.geometry}
                  material={materials['TEX.021']}
                />
                <mesh
                  name="Object_95"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_95.geometry}
                  material={materials['TEX.022']}
                />
                <mesh
                  name="Object_96"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_96.geometry}
                  material={materials['TEX.023']}
                />
                <mesh
                  name="Object_97"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_97.geometry}
                  material={materials['TEX.024']}
                />
                <mesh
                  name="Object_98"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_98.geometry}
                  material={materials['TEX.025']}
                />
                <mesh
                  name="Object_99"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_99.geometry}
                  material={materials['TEX.026']}
                />
                <mesh
                  name="Object_100"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_100.geometry}
                  material={materials['TEX.027']}
                />
                <mesh
                  name="Object_101"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_101.geometry}
                  material={materials.material}
                />
                <mesh
                  name="Object_102"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_102.geometry}
                  material={materials['TEX.029']}
                />
                <mesh
                  name="Object_103"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_103.geometry}
                  material={materials['TEX.030']}
                />
                <mesh
                  name="Object_104"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_104.geometry}
                  material={materials['TEX.031']}
                />
                <mesh
                  name="Object_105"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_105.geometry}
                  material={materials['TEX.032']}
                />
                <mesh
                  name="Object_106"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_106.geometry}
                  material={materials['TEX.038']}
                />
              </group>
              <group
                name="BMW002_31"
                position={[-0.0247, 0.0092, -1.1742]}
                rotation={[1.5704, 0, 0]}
                scale={0.0105}>
                <mesh
                  name="Object_108"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_108.geometry}
                  material={materials['TEX.003']}
                />
                <mesh
                  name="Object_109"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_109.geometry}
                  material={materials['TEX.001']}
                />
              </group>
              <group
                name="BMW026_32"
                position={[-0.6297, 0.2709, -0.0001]}
                rotation={[1.5704, 0, Math.PI]}
                scale={[3.0856, 3.0684, 3.0684]}>
                <mesh
                  name="Object_111"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_111.geometry}
                  material={materials['TEX.020']}
                />
                <mesh
                  name="Object_112"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_112.geometry}
                  material={materials['TEX.021']}
                />
                <mesh
                  name="Object_113"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_113.geometry}
                  material={materials['TEX.022']}
                />
                <mesh
                  name="Object_114"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_114.geometry}
                  material={materials['TEX.023']}
                />
                <mesh
                  name="Object_115"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_115.geometry}
                  material={materials['TEX.024']}
                />
                <mesh
                  name="Object_116"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_116.geometry}
                  material={materials['TEX.025']}
                />
                <mesh
                  name="Object_117"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_117.geometry}
                  material={materials['TEX.026']}
                />
                <mesh
                  name="Object_118"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_118.geometry}
                  material={materials['TEX.027']}
                />
                <mesh
                  name="Object_119"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_119.geometry}
                  material={materials.material}
                />
                <mesh
                  name="Object_120"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_120.geometry}
                  material={materials['TEX.029']}
                />
                <mesh
                  name="Object_121"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_121.geometry}
                  material={materials['TEX.030']}
                />
                <mesh
                  name="Object_122"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_122.geometry}
                  material={materials['TEX.031']}
                />
                <mesh
                  name="Object_123"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_123.geometry}
                  material={materials['TEX.032']}
                />
                <mesh
                  name="Object_124"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_124.geometry}
                  material={materials['TEX.038']}
                />
              </group>
              <group
                name="BMW003_33"
                position={[0.0247, 0.0102, 1.1742]}
                rotation={[1.5704, 0, Math.PI]}
                scale={0.0105}>
                <mesh
                  name="Object_126"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_126.geometry}
                  material={materials['TEX.003']}
                />
                <mesh
                  name="Object_127"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_127.geometry}
                  material={materials['TEX.001']}
                />
              </group>
              <group
                name="BMW005_34"
                position={[0, 0.6058, -0.7803]}
                rotation={[0.2609, 0, 0]}
                scale={[0.187, 0.0405, 0.008]}>
                <mesh
                  name="Object_129"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_129.geometry}
                  material={materials['TEX.002']}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/bmw_m5_cs.glb')
