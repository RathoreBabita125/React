import { useState } from 'react'
import './App.css'
import React, { useEffect } from 'react'
import ThemeBtn from './Components/ThemeBTN'
import Card from './Components/Card'
import { ThemeProvider } from './Context/ThemeContext'

function App() {

  const[themeMode, setThemeMode]=useState('light')

  const lightTheme=()=>{
    setThemeMode('light')
  }

  const darkTheme=()=>{
    setThemeMode('dark')
  }

  useEffect(()=>{
        document.querySelector('html').classList.remove('light','dark')
        document.querySelector('html').classList.add(themeMode)
  },[themeMode])


  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className='w-full '>
        <div className='w-1/3 items-center m-auto'>
          <h1 className='bg-gray-900 font-bold text-amber-100 mb-[12px]'>Theme Changer</h1>
          <ThemeBtn/>
          <Card/>
        </div>
      </div>
    </ThemeProvider>
    
  )
}

export default App
