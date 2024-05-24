import React, { Fragment } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import useScrollToTop from '@/hooks/useScrollToTop'
import Landing from './pages/Landing'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhitePaper from './pages/Whitepaper'
import Hiring from './pages/Hiring'
import { asciiArt } from './constants/asciiart'

const App: React.FC = () => {
  const { pathname } = useLocation()
  useScrollToTop()

  console.log(asciiArt)

  return (
    <Fragment>
      {pathname !== '/' && <Navbar />}
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/whitepaper' element={<WhitePaper />} />
      </Routes>
      <Footer />
    </Fragment>
  )
}

export default App
