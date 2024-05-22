import { AdaptiveDpr, AsciiRenderer, OrbitControls, OrthographicCamera } from '@react-three/drei'
import Experience from './Experience'
import { Canvas } from '@react-three/fiber'
import { colors } from '@/constants/colors'
import { Suspense, useLayoutEffect, useState } from 'react'

function App() {
  const [showAnimation, setShowAnimation] = useState(false)

  useLayoutEffect(() => {
    setTimeout(() => {
      setShowAnimation(true)
    }, 250)
  })

  return (
    <Canvas className='canvas' flat>
      <Suspense fallback={null}>
        <OrthographicCamera makeDefault position={[250, 500, 1000]} zoom={2.5} near={1} far={10000} />
        <OrbitControls enabled={false} />
        <Experience />
        <AsciiRenderer
          bgColor='transparent'
          fgColor={showAnimation ? colors.gold[600] : 'transparent'} // weird glitch where the ascii shows the full page on load
          characters='   .⋄,∴⍣⏦≁*+≀≁≂≃≄≆≇≈≉≌≍≎≏≐≑≒≓eacnvEl#@'
        />
        <AdaptiveDpr pixelated />
      </Suspense>
    </Canvas>
  )
}

export default App
