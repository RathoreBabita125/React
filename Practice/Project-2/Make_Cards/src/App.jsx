import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 style={{backgroundColor:'grey', color:'#fff'}}>Different Restaurants Cards</h1>

      <div style={{ display: 'flex', gap: 20,}}>

        <div>
          <Card name="Veg Restaurant" image="https://shorturl.at/I6VOx" btnName="Click Here"/>
          <Card name="Nonveg Food" image="https://shorturl.at/vBEVp" btnName="Visit More"/>
                   
        </div>
  
        <div>
          <Card name="Gujrati Food" image="https://shorturl.at/ELvbN" btnName="Explore Here"/>
          <Card name="Famous Viryani" image="https://shorturl.at/Qs0t2" btnName="Know More"/>  
        </div>

      </div>
    </>
  )
}

export default App
