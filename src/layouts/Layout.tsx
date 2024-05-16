import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import HomePage from '../pages/HomePage/HomePage'

const Layout = () => {
  return (
      <div>
          <Navbar />
          <Routes>
              <Route path='/' element={<HomePage/>}/>
          </Routes>
    </div>
  )
}

export default Layout