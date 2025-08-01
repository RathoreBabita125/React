import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color, setColor] = useState("grey")

  return (
    <>
      <div className='w-full h-screen duration-200'
        style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap 
        justify-center bottom-10 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 bg-white rounded-3xl'>
            <button
              onClick={() => setColor("red")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "red" }}>Red</button>

            <button
              onClick={() => setColor("blue")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "blue" }}>Blue</button>

            <button
              onClick={() => setColor("green")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "green" }}>Green</button>

            <button
              onClick={() => setColor("pink")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "pink" }}>Pink</button>

            <button
              onClick={() => setColor("yellow")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "yellow" }}>Yellow</button>

            <button
              onClick={() => setColor("purple")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "purple" }}>Purple</button>

            <button
              onClick={() => setColor("black")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "black" }}>Black</button>

            <button
              onClick={() => setColor("orange")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "orange" }}>Orange</button>
            

          </div>
        </div>
      </div>
    </>
  )
}

export default App
