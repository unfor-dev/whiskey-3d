import React, { useRef, forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useLoader, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { TextureLoader } from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Model = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF('/whiskey.glb');
  const group = useRef();
  
  const carbonTexture = useLoader(TextureLoader, '/texture-2.jpeg');
  carbonTexture.wrapS = THREE.RepeatWrapping;
  carbonTexture.wrapT = THREE.RepeatWrapping;
  carbonTexture.repeat.set(3, 3);
  carbonTexture.flipY = false;
  carbonTexture.colorSpace = THREE.SRGBColorSpace;

  const carbonMaterial = new THREE.MeshStandardMaterial({
    map: carbonTexture,
    metalness: 1,
    roughness: 1,
  });

  useGSAP(() => {
    gsap.to(carbonMaterial, {
      metalness: 1.6,  // Maksimum 1 bo‘lishi kerak
      roughness: 3, // 0.8 optimal
      scrollTrigger: {
        trigger: ".element-1",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 0.5,
      },
    });
  
    gsap.to(carbonMaterial, {
      metalness: 2, // O‘rtacha metall effekt
      roughness: 0, // Yuzani silliqlashtirish
      scrollTrigger: {
        trigger: ".element-2",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 0.5,
      },
    });
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      
      <group ref={group} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="untitledfbx_Collectionfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
              <group name="RootNode">
                <group name="botella-jd" position={[-0.111, 0.025, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={1669.032}>
                  <mesh
                    name="botella-jd_glass_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['botella-jd_glass_0'].geometry}
                    // material={carbonMaterial}
                  >
                    <meshPhysicalMaterial metalness={1} color={'black'} roughness={0} ior={0.4} />
                  </mesh>
                  <group name="etiqueta-tapa-jd" position={[0, 0, 0.095]}>
                    <mesh
                      name="etiqueta-tapa-jd_etiqueta_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['etiqueta-tapa-jd_etiqueta_0'].geometry}
                      material={materials.etiqueta}
                    />
                  </group>
                  <group name="etiqueta-botella-jd" position={[0, 0, 0.094]}>
                    <mesh
                      name="etiqueta-botella-jd_etiqueta_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['etiqueta-botella-jd_etiqueta_0'].geometry}
                      material={materials.etiqueta}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </>
  );
});

useGLTF.preload('/whiskey.glb');
export default Model;
