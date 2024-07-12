import React from 'react'
import Header2 from '../components/Header2'
import Footer from '../components/Footer'

import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header2/>
      <Outlet/>

      <Footer/>
    </>
  )
}

export default Layout
