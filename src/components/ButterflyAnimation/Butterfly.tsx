import { useEffect, useRef, useState } from 'react'
import { ReactThreeFiber, extend, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { shaderMaterial } from '@react-three/drei'
import { fragmentShader, vertexShader } from './shaders'

const ButterflyShader = shaderMaterial(
  {
    index: 0,
    time: 0,
    size: 280,
    uTexture: null,
  },
  vertexShader,
  fragmentShader,
)

extend({ ButterflyShader })

interface ButterflyProps {
  index: number
  texture: THREE.Texture
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      butterflyShader: ReactThreeFiber.Object3DNode<THREE.ShaderMaterial, typeof ButterflyShader>;
    }
  }
}

const Butterfly = ({ index, texture }: ButterflyProps) => {
  const ref = useRef<any>()
  const dpr = useRef(1)
  const [butterflySize, setButterflySize] = useState(280)
  const { viewport } = useThree()

  useEffect(() => {
    dpr.current = window.devicePixelRatio * 1.001
  }, [])

  useFrame(({ clock, viewport }) => {
    if (dpr.current === 1) return
    const t = clock.elapsedTime
    const scale = Math.min(Math.max(butterflySize / 280, 1), 3)
    setButterflySize(viewport.width < 650 ? viewport.height * 0.8 : viewport.height * (dpr.current > 1 ? 0.6 : 1))
    ref.current.scale.set(scale, scale, scale)
    ref.current.material.uniforms.time.value = t
    ref.current.material.uniforms.size.value = butterflySize
    ref.current.position.z = ref.current.position.z > -viewport.height * 6 ? ref.current.position.z - 1.5 : viewport.height * 3
  })

  return (
    <mesh
      ref={ref}
      rotation={[-Math.PI * 0.3 - index * 0.05, 0, Math.PI * index * 0.01]}
      position={[viewport.width * 0.15, 0, viewport.height * 3 * index + viewport.height * 1.5]}
    >
      <planeGeometry args={[butterflySize, butterflySize / 2, 24, 12]} />
      <butterflyShader
        key={ButterflyShader.key}
        uniforms-index={index}
        uniforms-time-value={0}
        uniforms-size-value={butterflySize}
        uniforms-uTexture-value={texture}
        depthWrite={false}
        side={THREE.DoubleSide}
        transparent
      />
    </mesh>
  )
}

export default Butterfly
