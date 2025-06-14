import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter=10;

  // syntax [variable, function]=useState(value of variable what you want)

  let [counter,setCounter] = useState(10)

  let addValue=()=>{
    // console.log("Clicked",Math.random());
    // console.log(counter);

    counter=counter+1;
    if(counter>=30){
      counter=30;
    }
    setCounter(counter)  
    
  }

  let removeValue=()=>{

    counter=counter-1;
    if(counter<=0){
      counter=0;
    }
    setCounter(counter) 
  
  }

  return (
   <>
      <h1>Today, We are going to learn about hooks</h1>
      <h3>Hooks Concepts</h3>
      <button onClick={addValue}>Add Value : {counter}</button>
      <br/><br />
      <button onClick={removeValue}>Remove Value : {counter}</button>

       <h5>here counter = {counter}</h5>
       <h5>Value : {counter}</h5>
       <p>Lorem, ipsum:{counter}</p>

    </>
  )
}

export default App
