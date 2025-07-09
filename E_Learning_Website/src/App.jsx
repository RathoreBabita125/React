import './App.css'
import { ThemeProvider } from './Context/ThemeContext'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'


function App() {

  // ThemeMode------------
  const [themeMode, setThemeMode] = useState('light')
  const lightMode = () => {
    setThemeMode('light')
  }
  const darkMode = () => {
    setThemeMode('dark')
  }

  useEffect(() => {
    if (themeMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [themeMode]);


  

  return (

    <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
      <div className='w-full overflow-y-scroll hide-vertical-scrollbar h-screen '>
        <div className="min-h-screen bg-white text-cyan-950 dark:bg-gray-900 dark:text-white">
          <NavBar />
          <Outlet/>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
