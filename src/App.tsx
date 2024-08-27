import React, { Fragment, Suspense, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import useScrollToTop from '@/hooks/useScrollToTop'
import Landing from './pages/Landing'
import Footer from './components/Footer'
import { createAsciiArt } from './constants/asciiart'
import { binaryToHex, loadBinaryFile } from './utils/methods'
import { HIRING_MSG } from './utils/contants'

const App: React.FC = () => {
  const [showMsg, setShowMsg] = useState(false)
  const [encryptedMessage, setEncryptedMessage] = useState<Uint8Array | null>(null)

  useEffect(() => {
    const fetchEncryptedMessage = async () => {
      const data = await loadBinaryFile('/encryptedMessage.bin')
      setEncryptedMessage(data)
    }

    fetchEncryptedMessage()
  }, [])

  useScrollToTop()

  useEffect(() => {
    if (encryptedMessage && !showMsg) {
      setShowMsg(true)
      const asciiArt = createAsciiArt(binaryToHex(encryptedMessage))
      console.log(asciiArt)
      console.log(HIRING_MSG)
    }
  }, [encryptedMessage, showMsg])

  return (
    <Fragment>
      <Suspense fallback={<div className='h-screen w-screen' />}>
        <div className='flex min-h-screen flex-grow flex-col'>
          <Routes>
            <Route path='/' element={<Landing />} />
          </Routes>
          <Footer />
        </div>
      </Suspense>
    </Fragment>
  )
}

export default App
