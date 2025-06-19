import React from 'react'
import Header from './Components/Header/header'
import Footer from './Components/Footer/Footer'
// import Home from './Components/Home/Home'
// import About from './Components/About/About'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
