import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
      <div className='w-full h-screen duration-5000'
      style={{backgroundColor:color}}>        
        <div className='fixed flex flex-wrap justify-center inset-x-0 bottom-10 p-5'>
          <div className='flex flex-wrap gap-3 bg-white text-white rounded-4xl shadow-lg px-4 py-2'>

            <button className='rounded-full p-3 outline-none py-2 '
            onClick={()=>setColor("red")}
            style={{backgroundColor:"red"}}>Red</button>

            <button className='rounded-full p-3 outline-none py-2 '
            onClick={()=>setColor("blue")}
            style={{backgroundColor:"blue"}}>Blue</button>

            <button className='rounded-full p-3 outline-none py-2 '
            onClick={()=>setColor("pink")}
            style={{backgroundColor:"pink"}}>pink</button>

            <button className='rounded-full p-3 outline-none py-2 '
            onClick={()=>setColor("yellow")}
            style={{backgroundColor:"yellow"}}>Yellow</button>

            <button className='rounded-full p-3 outline-none py-2 '
            onClick={()=>setColor("purple")}
            style={{backgroundColor:"purple"}}>Purple</button>

            <button className='rounded-full p-3 outline-none py-2 '
            onClick={()=>setColor("orange")}
            style={{backgroundColor:"orange"}}>Orange</button>

            <button className='rounded-full p-3 outline-none py-2 '
            onClick={()=>setColor("black")}
            style={{backgroundColor:"black"}}>Black</button>

            <button className='rounded-full p-3 outline-none py-2 '
            onClick={()=>setColor("green")}
            style={{backgroundColor:"green"}}>Green</button>

            <button className='rounded-full p-3 outline-none py-2 '
            onClick={()=>setColor("grey")}
            style={{backgroundColor:"grey"}}>Grey</button>

          </div>          
        </div>
      </div>
    </>
  )
}

export default App
