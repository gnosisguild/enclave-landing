import { memo, useEffect, useRef, useState } from 'react'
import Butterfly from './Butterfly.tsx'
import * as THREE from 'three'
import butterflyTexture from '@/assets/textures/tex.png'
import { TorusKnot, meshBounds } from '@react-three/drei'

const Experience: React.FC<{ showAnimation: boolean }> = ({ showAnimation }) => {
  const directionalLightRef = useRef<THREE.DirectionalLight | null>(null)
  const torusRef1 = useRef<THREE.Mesh | null>(null)
  const torusRef2 = useRef<THREE.Mesh | null>(null)
  const [showTorus] = useState(false)
  const [texture, setTexture] = useState<THREE.Texture | null>(null)

  useEffect(() => {
    if (!texture) {
      const loader = new THREE.TextureLoader()
      loader.load(butterflyTexture, (texture) => {
        texture.magFilter = THREE.LinearFilter
        texture.minFilter = THREE.LinearFilter
        setTexture(texture)
      })
    }
  }, [texture])

  return texture ? (
    <>
      <ambientLight intensity={0.08 * 0.15} />
      <directionalLight ref={directionalLightRef} intensity={0.1} position={[-250, 0, 500]} />
      <group raycast={meshBounds}>
        {showTorus && (
          <>
            <TorusKnot args={[1, 0.9, 64, 8, 5, 5]} ref={torusRef1} scale={130} position={[450, 0, 400]}>
              <meshStandardMaterial color='#fff' />
            </TorusKnot>
            <TorusKnot args={[1, 0.5, 256, 64, 8, 2]} ref={torusRef2} scale={70} position={[-300, 400, 500]}>
              <meshStandardMaterial color='#fff' />
            </TorusKnot>
          </>
        )}
        {Array.from({ length: 3 }, (_, i) => (
          <Butterfly key={i} index={i} texture={texture} />
        ))}
      </group>
      <color attach='background' args={[!showAnimation ? '#fff' : '#000']} />
    </>
  ) : null
}

export default memo(Experience)
