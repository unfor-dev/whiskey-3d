    import { useFrame } from '@react-three/fiber'
    import { easing } from 'maath'
    import { useRef, useState, useEffect } from 'react'

    export default function CameraRig({ children }) {
    const groupRef = useRef()
    const [pointer, setPointer] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (event) => {
        const x = ((event.clientX / window.innerWidth) * 2 - 1) * 0.2 // Sezgirlikni pasaytirish
        const y = (-(event.clientY / window.innerHeight) * 2 + 1) * 0.2 
        setPointer({ x, y })
        }

        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    useFrame((state, delta) => {
        if (!groupRef.current) return
        easing.damp3(
        groupRef.current.rotation,
        [
            (-pointer.y * state.viewport.height) / 16, // Harakatni yumshatish
            (pointer.x * state.viewport.width) / 16,
            0
        ],
        0.5, // Reaktsiya tezligini kamaytirish
        delta
        )
    })

    return <group ref={groupRef}>{children}</group>
    }
