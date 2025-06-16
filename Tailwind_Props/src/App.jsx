import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {


  return (
    <>
      <h1 className='bg-green-400 p-2 text-black rounded-2xl mb-2'>Tailwind Props</h1>
      <Card username="Latest Beautiful Cot" buttonName="Click Me"/>
      <Card username="Black Beautiful Blazer" buttonName="Visit Me"/>
      
    </>
  )
}

export default App
