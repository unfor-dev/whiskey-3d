import { Environment, OrbitControls, useGLTF, Lightformer, Float, AccumulativeShadows, RandomizedLight } from '@react-three/drei';
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

export default function Experience() {
    const modelRef = useRef();

    return (
        <>
            <ambientLight intensity={1} position={[1, 2, 3]} />
            {/* <directionalLight castShadow intensity={10} position={[1, 2, 3]} /> */}
            <color attach="background" args={['#f0f0f0']} /> 

            <OrbitControls />

            {/* <Particles /> */}

            {/* Kamera harakati */}
            <CameraRig>

            {/* Bmw Model */}
            <Bmw castShadow/>

            {/* Bike Model */}
            {/* <Bike scale={[2, 2, 2]} position={[-0.5, -1.5, 0.5]} rotation={[-0.2, 0, 0]} /> */}

            {/* Godzilla Model */}
            {/* <Godzilla scale={[0.1, 0.1, 0.1]} position={[-0.5, -2.5, 0.5]} rotation={[-0.1, 0.4, 0]}/> */}

            {/* Gun Model */}
            {/* <Gun scale={[0.1, 0.1, 0.1]}/> */}

            {/* Light */}
            
            <Environment shadow resolution={260} >
                <Lightformer color={'purple'} intensity={1} position={[1, -1, 2]} scale={[1, 3, 1]} />
                <Lightformer color={'white'} intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -9]} scale={[10, 1, 1]} />
                <Lightformer color={'white'} intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -6]} scale={[10, 1, 1]} />
                <Lightformer color={'white'} intensity={2} rotation-x={Math.PI / 2} position={[0, 4, -3]} scale={[10, 1, 1]} />
                <Lightformer color={'white'} intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 0]} scale={[10, 1, 1]} />
                <Lightformer color={'white'} intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 3]} scale={[10, 1, 1]} />
                <Lightformer color={'white'} intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 6]} scale={[10, 1, 1]} />
                <Lightformer color={'white'} intensity={2} rotation-x={Math.PI / 2} position={[0, 4, 9]} scale={[10, 1, 1]} />

                <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-50, 2, 0]} scale={[100, 2, 1]} />
                <Lightformer intensity={2} rotation-y={-Math.PI / 2} position={[50, 2, 0]} scale={[100, 2, 1]} />
            </Environment>
                
            {/* SunGlass Model */}
            {/* <SunGlass scale={[3, 3, 3]} position={[0, -0.5, 0 ]} /> */}

            {/* Shoes Nike Jordan */}
            {/* <ShoesNike scale={[2, 2, 2]} position={[0, -0.8, 0]}/> */}

            {/* Magic city Model */}
            {/* <Magic scale={[0.1, 0.1, 0.1]} /> */}

            {/* Ring Model */}
            {/* <Ring scale={[7, 7, 7]} /> */}

            {/* Card  Model */}
            {/* <Card position={[-1, -2, -2]} rotation={[1, 1.6, -1.3]} scale={[0.07, 0.07, 0.07]} /> */}

            {/* Whiskey Modeli */}
            {/* <group ref={modelRef}>
                <Whiskey position={[0, -4.5, -2]} scale={[2, 2, 2]} rotation={[3, 3.14, 3.15]} />
            </group> */}

            <EffectComposer>
                <HueSaturation saturation={0.5} hue={0.01} />
                <ToneMapping mode={ToneMapping.ACES_FILMIC} />
                <Bloom luminanceThreshold={4} mipmapBlur />
            </EffectComposer>
            <CameraAnimation />
            </CameraRig>
        </>
    );
}
