import React, { useEffect } from 'react'

const Ciphernode: React.FC = () => {
  useEffect(() => {
    // Load the Tally embed script
    const script = document.createElement('script')
    script.src = 'https://tally.so/widgets/embed.js'
    script.async = true
    document.body.appendChild(script)

    // Clean up on unmount
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="relative w-full h-screen">
      <iframe
        data-tally-src="https://tally.so/r/meJPjo"
        title="Request Early Access to Run an Enclave Ciphernode"
        width="100%"
        height="100%"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        className="absolute inset-0 border-0"
      />
    </div>
  )
}

export default Ciphernode
