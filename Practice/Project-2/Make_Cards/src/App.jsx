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
      <br />

      <div style={{ display: 'flex', gap: 20,}}>

        <div>
          <Card name="Veg Restaurant" image="https://shorturl.at/I6VOx" btnName="Click Here"/>
          <Card name="Nonveg Food" image="https://shorturl.at/vBEVp" btnName="Visit More"/>
                   
        </div>
  
        <div>
          <Card name="Gujrati Food" image="https://shorturl.at/ELvbN" btnName="Explore Here"/>
          <Card name="Famous Viryani" image="https://shorturl.at/Qs0t2" btnName="Know More"/>  
        </div>

        <div>
          <Card name="Madhuvani" image="https://shorturl.at/i66Iv" btnName="Explore Here"/>
          <Card name="Ashok Dhaba" image="https://shorturl.at/uvp51" btnName="Know More"/>  
        </div>

        <div>
          <Card name="Chinese Food" image="https://shorturl.at/rs8Hk" btnName="Explore Here"/>
          <Card name="Five Star Hotel" image="https://shorturl.at/EO2np" btnName="Know More"/>  
        </div>
        

      </div>
    </>
  )
}

export default App
