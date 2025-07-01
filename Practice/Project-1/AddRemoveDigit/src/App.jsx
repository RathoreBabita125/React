import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [value, setValue] = useState(20)

  const AddedValue=()=>{
    value=value+1
    // console.log(value);  
    if(value>=50){
      value=50;
    } 
    setValue(value)
  }

  const RemovedValue=()=>{
    value=value-1
    console.log(value);
    if(value<0){
      value=0;
      alert("Value should be Positive");
      
    }
    setValue(value)
  }

  return (
   <>
    <h1>Add and Remove Buttom</h1>
    <button onClick={AddedValue}>Add Value: {value}</button> 
    <br /><br />
    <button onClick={RemovedValue}>Remove Value: {value}</button>
    
    <div style={{padding:10}}>Current Value: {value}</div>
    <br />
    <span style={{padding:10}}> Added Value: <button>{value}</button></span>
    {   }
    <span>Removed Value: <button>{value}</button></span>
    <br /><br />
    <button>Total Value: {value}</button>
   </>
  )
}

export default App
