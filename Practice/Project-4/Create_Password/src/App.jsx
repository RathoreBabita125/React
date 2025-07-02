import React, { useCallback, useEffect, useState } from 'react'
import './App.css'
import { useRef } from 'react'


function App() {

  const [length, setLength]=useState(8)
  const [allowNumber, setAllowNumber]=useState(false)
  const [allowCharacter, setAllowCharacter]=useState(false)
  const [password, setPassword]=useState("")

  const generatePassword=useCallback(()=>{
    
      let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      let pass=""

      if(allowNumber){
        str+='0123456789';
      }
    
      if(allowCharacter){
        str+='~`@#$%^&*(){}[]-_=+/*-+.<>?;:'
      }
    
      for (let i = 1; i <= length; i++) {
        let char=Math.floor(Math.random()*str.length+1) 
        pass+=str.charAt(char)  
      }

      setPassword(pass)
      
  },[length, allowNumber, allowCharacter])

  
  useEffect(()=>{
    generatePassword()
  },[length,allowCharacter, allowNumber, generatePassword])


  const passwordRef=useRef(password)

  const SelectPasswordRef=useCallback(()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  },[password])


  return (
    <>
      <div className= 'bg-gray-600 w-250 py-10 rounded-4xl'>
        <h1>Generate Password</h1>
        <br />
        <div className=' '>
          <input 
            value={password}
            className='bg-white w-180 text-orange-500 py-4 text-4xl rounded-l-2xl'
            type="text"
            ref={passwordRef}
          />
          <button 
          className='bg-blue-700 py-4 text-4xl rounded-r-2xl'
          onClick={SelectPasswordRef}
          type="button">Copy</button>
        </div>
      
        <div className='flex text-2xl justify-center mx-3'>
          <div>
            <input type="range"
              onChange={(e)=>setLength(e.target.value)}
              min={6}
              max={100} 
              className='w-50'
             />
             { }
             <label
             className='text-orange-500 text-xl mx-4'
             > Length: {length}</label>
          </div>
          <div>
            <input type="checkbox"
            // defaultChecked={allowNumber}
             onChange={()=>{
              setAllowNumber((pre)=>!pre)
             }} 
             name="" id="" />
            <label 
            className='text-orange-500 mx-2'
            >Number</label>
          </div>
          <div>
            <input type="checkbox"
            // defaultChecked={allowCharacter}
            onChange={()=>{
              setAllowCharacter(pre=>!pre)
            }} 
            name="" id="" />
            <label 
            className='text-orange-500 mx-2'
            >Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
