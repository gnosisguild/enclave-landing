import { useState, useEffect } from 'react'

interface AnimatedTextProps {
  text: string
  animationDuration?: number
  finalizationDuration?: number
}

const AnimatedText = ({ text, animationDuration = 1000, finalizationDuration = 4000 }: AnimatedTextProps) => {
  const characters = '0.123456789enclaveENCLAVE%%%#$∛∜∝∯∰≀≁≂≃≄≅≉≍≎≏≑≒≓≖≗≘≙≚≛≜≝≞≟≢≣≨≩≪≫≬≭≮≯≰≱≲≳⊖⊗⊘⊙⊚⊛⊜⊝⊞⊟⊠⊡⊢'

  const [displayText, setDisplayText] = useState<string[]>(text.split('').map((char) => (char === ' ' ? ' ' : '')))

  useEffect(() => {
    let intervals: any[] = []

    text.split('').forEach((char, index) => {
      if (char === ' ') return

      const finalizeTime = animationDuration + (index * finalizationDuration) / text.length

      intervals[index] = setInterval(() => {
        setDisplayText((prev) => {
          const newText = [...prev]
          newText[index] = characters[Math.floor(Math.random() * characters.length)]
          return newText
        })
      }, 100)

      setTimeout(() => {
        clearInterval(intervals[index])
        setDisplayText((prev) => {
          const newText = [...prev]
          newText[index] = char
          return newText
        })
      }, finalizeTime)
    })

    return () => intervals.forEach((interval) => clearInterval(interval))
  }, [text])

  return (
    <div className='whitespace-pre font-mono'>
      {displayText.map((char, index) => (
        <span key={index} className='w-4'>
          {char === '' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  )
}

export default AnimatedText
