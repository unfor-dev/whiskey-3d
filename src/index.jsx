import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import Header from './Header.jsx'
import Main from './Main.jsx'
import { useState } from 'react'
import Main2 from './Main-2.jsx'
import { useAnimationStore } from './store.jsx';

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>  
        <Canvas className='r3f'>
            <Experience />
        </Canvas>

        <div className='container'>
            <Header />
            <Main />
            <Main2 />
        </div>
        
    </>
)