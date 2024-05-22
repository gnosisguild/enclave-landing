import { useEffect, useState } from 'react'

const useWindowSize = () => {
  const [isMobile, setIsMobile] = useState<boolean>()
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0)

  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window?.innerWidth
      setWindowWidth(newWindowWidth)

      setIsMobile(windowWidth <= 768)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [windowWidth])

  return {
    width: windowWidth,
    isMobile: isMobile,
    isDesktop: !isMobile,
  }
}

export default useWindowSize
