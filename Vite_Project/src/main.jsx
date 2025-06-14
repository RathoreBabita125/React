import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function AddTwoNumber(){
  return(
    <div>
      <h1>Now I am learning React!!!</h1>
    </div>
  )
}

// const ReactElement={
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'Click me to visit google'
// }


const anotherElement=(
    <a href="http://google.com" target="_blank">Click here to google</a>
)


// there are 3 steps to create html element
// tag
// all attributes
// text whatever you want to write



// const reactElement=React.createElement(
  //   'a',
  //   {href:'https://google.com',target:'_blank'},
  //   'click to google'
  // )
  
const anotherId="George Ghosle"
const reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click to google',
  anotherId
)

// const reactElement=React.createElement(
//   'a',
//   {href:'https://google.com',target:'_blank'},
//   'click to google',
//   anotherElement
// )

createRoot(document.getElementById('root')).
render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,

  // <App />
  // AddTwoNumber()
  // <AddTwoNumber />
  // ReactElement

  // anotherElement

  reactElement

)
