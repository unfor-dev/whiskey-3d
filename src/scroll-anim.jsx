import { Environment, OrbitControls, useGLTF, Lightformer, Float, AccumulativeShadows, RandomizedLight, ScrollControls, useScroll, useAnimations } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import Whiskey from './whiskey.jsx';
import Particles from './Particle.jsx';
import { EffectComposer, Bloom, HueSaturation, ToneMapping } from '@react-three/postprocessing';
import CameraAnimation from './CameraAnimation.jsx';
import CameraRig from "./CameraRig.jsx"
import Bmw from './bmw.jsx';
import Ring from './ring.jsx';
import Card from './card.jsx';
import Bike from './bike.jsx';
import Gun from './gun.jsx';
import Godzilla from './godzilla.jsx';
import Magic from './3d-magic.jsx';
import SunGlass from './sunGlass.jsx';
import ShoesNike from './shoesNike.jsx';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

export default function Model(props) {
  const group = useRef(null);
  const { scene, animations } = useGLTF("/godzilla.glb");
  const { actions } = useAnimations(animations, scene);
  const scroll = useScroll();

  console.log("Mavjud animationlar:", Object.keys(actions));

  useEffect(() => {
      if (actions) {
          Object.values(actions).forEach(action => {
              action.play();
              action.paused = true;
          });
      }
  }, [actions]);

  useFrame(() => {
      if (actions) {
          // Use the first animation's duration as reference
          const refAction = actions[Object.keys(actions)[0]];
          const clipDuration = refAction.getClip().duration;
          const currentTime = (clipDuration * scroll.offset) / 4;
          
          // Apply same time to all animations
          Object.values(actions).forEach(action => {
              action.time = currentTime;
          });
      }
  });

  return (
      <group ref={group} {...props}>
          <primitive object={scene} />
      </group>
  );
}