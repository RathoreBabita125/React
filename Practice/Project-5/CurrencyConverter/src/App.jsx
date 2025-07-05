import { useState } from 'react'
import './App.css'
import InputBox from './Components/InputBox'
import useCurrencyInfo from './Hooks/UseCurrencyInfo'


function App() {

  const [amount, setAmount]=useState(0)
  const [from, setFrom]=useState("usd")
  const [to, setTo]=useState("inr")
  const [convertedAmount, setConvertedAmount]=useState(0)

  const currencyInfo=useCurrencyInfo(from)

  const options=Object.keys(currencyInfo)

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

const convert =()=>{
  setConvertedAmount(amount*currencyInfo[to])
}
  

  return (
    <>
      <div className='text-white'>
        <h1 className='text-cyan-900 font-bold text-3xl'>Currency Converter</h1>
        <div className='w-full mx-auto py-4 px-4 bg-white/30 m-2 rounded-3xl backdrop-blur-md border-gray-700 shadow-md opacity-65'>
          
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()

            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                currencyOnChange={(currency)=>setFrom(currency)}
                amountOnChange={(amount)=>setAmount(amount)}
                selectCurrency={from}
                // amountDisable={false}

              />
            </div>

            <div className="relative w-full h-0.5">
              <button
              onClick={swap}
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-900 text-white px-2 py-0.5 font-bold text-2xl"
              >
                swap
              </button>
            </div>

            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                currencyOnChange={(currency)=>setTo(currency)}
                selectCurrency={to}
                amountDisable={true}
              />
            </div>

            <button type="submit" className="w-full h-15 bg-blue-900 text-white font-bold px-3 py-2 rounded-lg ">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>

          </form>
        </div>
      </div>
    </>
  )
}

export default App
