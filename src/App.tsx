import React, { Fragment, useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import useScrollToTop from '@/hooks/useScrollToTop'
import Landing from './pages/Landing'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { createAsciiArt } from './constants/asciiart'
import { loadBinaryFile } from './utils/methods'
import { HIRING_MSG } from './utils/contants'

const App: React.FC = () => {
  const { pathname } = useLocation()
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
      const asciiArt = createAsciiArt(encryptedMessage)
      console.log(asciiArt)
      console.log(HIRING_MSG)
    }
  }, [encryptedMessage, showMsg])

  return (
    <Fragment>
      {pathname !== '/' && <Navbar />}
      <div className='flex min-h-screen flex-grow flex-col'>
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
        <Footer />
      </div>
    </Fragment>
  )
}

export default App
