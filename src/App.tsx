import React, { Fragment } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import useScrollToTop from '@/hooks/useScrollToTop'
import Landing from './pages/Landing'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { asciiArt } from './constants/asciiart'

const App: React.FC = () => {
  const { pathname } = useLocation()
  useScrollToTop()

  console.log(asciiArt)

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
