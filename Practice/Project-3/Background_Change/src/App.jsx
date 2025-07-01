import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("grey")

  return (
   <>
    <div className='w-full h-screen duration-1000'
      style={{backgroundColor:color}}
    >
      {/* <h1>Background Color Change</h1> */}
  
      <div className='fixed flex bottom-10 justify-center inset-x-0'>
        <div className='flex justify-center py-3 px-4 bg-white rounded-3xl gap-4 shadow-lg'>
          
          <button 
            onClick={()=> setColor('red')}
            className='outline-none rounded-full shadow-lg py-1 px-2 text-white'
            style={{backgroundColor:"red"}}
            >Red
          </button>
          <button 
            onClick={()=>setColor('black')}
            className='outline-none rounded-full shadow-lg py-1 px-2 text-white'
            style={{backgroundColor:'black'}}
            >Black
          </button>
          <button 
            onClick={()=>setColor('green')}
            className='outline-none rounded-full shadow-lg py-1 px-2 text-white'
            style={{backgroundColor:'green'}}
            >Green
          </button>
          <button 
            onClick={()=>setColor('pink')}
            className='outline-none rounded-full shadow-lg py-1 px-2 text-white'
            style={{backgroundColor:'pink'}}
            >Pink
          </button>
          <button 
            onClick={()=>setColor('purple')}
            className='outline-none rounded-full shadow-lg py-1 px-2 text-white'
            style={{backgroundColor:'purple'}}
            >Purple
          </button>
          <button 
            onClick={()=>setColor('yellow')}
            className='outline-none rounded-full shadow-lg py-1 px-2 text-white'
            style={{backgroundColor:'yellow'}}
            >Yellow
          </button>
          <button 
            onClick={()=>setColor('blue')}
            className='outline-none rounded-full shadow-lg py-1 px-2 text-white'
            style={{backgroundColor:'blue'}}
            >Blue
          </button>
          <button 
            onClick={()=>setColor('orange')}
            className='outline-none rounded-full shadow-lg py-1 px-2 text-white'
            style={{backgroundColor:'orange'}}
            >Orange
          </button>
          <button 
            onClick={()=>setColor('olive')}
            className='outline-none rounded-full shadow-lg py-1 px-2 text-white'
            style={{backgroundColor:'olive'}}
            >Olive
          </button>

        </div>
      </div>
    </div>
   </>
  )
}

export default App
