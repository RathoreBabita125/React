import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-max px-50 py-20 bg-gray-600 rounded-4xl shadow-lg '>
        <h1>Generate Password</h1>
        <br />
        <div className='flex'>
          <div className='bg-white'>
            <input  
            className='px-100 py-5'
              type="text" value="" />
          </div>
          <div >
            <button className='bg-blue-700 py-5' type="">Copy</button>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
