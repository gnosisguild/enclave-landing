import { AdaptiveDpr, AsciiRenderer, OrbitControls, OrthographicCamera } from '@react-three/drei'
import Experience from './Experience'
import { Canvas } from '@react-three/fiber'
import { useLayoutEffect, useState } from 'react'

function ButterflyAnimation() {
  const [showAnimation, setShowAnimation] = useState(false)

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='absolute z-[-1] h-full w-full overflow-hidden'>
      {!showAnimation && <div className='absolute z-50 h-screen w-screen bg-white'></div>}

      <Canvas flat>
        <OrthographicCamera makeDefault position={[250, 500, 1000]} zoom={2.5} near={1} far={10000} />
        <OrbitControls enabled={false} />
        <Experience showAnimation={showAnimation} />
        {showAnimation && <AsciiRenderer bgColor='#fff' fgColor='#000' characters='   .⋄,∴⍣⏦≁*+≀≁≂≃≄≆≇≈≉≌≍≎≏≐≑≒≓eacnvEl#@' />}
        <AdaptiveDpr pixelated />
      </Canvas>
    </div>
  )
}

export default ButterflyAnimation
