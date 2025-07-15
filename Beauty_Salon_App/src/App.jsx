import { useState } from 'react'
import './App.css'
import TopText from './Components/TopBox/TopText'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'

function App() {
  
  return (
   <div className='hide-scrollbar h-screen overflow-y-scroll'>
      <TopText/>  
      <Header/>
      <Home/>
      <Footer/>
   </div>
  )
}

export default App
