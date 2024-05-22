import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import useScrollToTop from '@/hooks/useScrollToTop'
import Landing from './pages/Landing'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App: React.FC = () => {
  useScrollToTop()

  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
      <Footer />
    </Fragment>
  )
}

export default App
