
import { useId } from 'react';



function InputBox({
    label,
    amount,
    amountOnChange,
    currencyOnChange,
    selectCurrency,
    currencyOptions=[],
    amountDisable=false,
    currencyDisable=false,
    className = "",

}) {
   
   const amountID=useId()
    return (
        <div className={`bg-white p-4 rounded-lg text-sm flex ${className} `}>

            <div className="w-1/2">
                <label  
                htmlFor={amountID}
                className="text-black/60 font-bold mb-2 inline-block mr-40">
                    {label}
                </label>
                              
                <input  
                    id={amountID}                  
                    className="outline-none w-full bg-transparent py-1.5 text-black"
                    type="number"
                    value={amount}
                    disabled={amountDisable}
                    onChange={(e)=>amountOnChange && amountOnChange(Number(e.target.value))}
                    placeholder="Amount"
                />
            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right">

                <p className="text-black/60 font-bold mb-2 w-full">Currency Type</p>
                <select
                    className=" rounded-lg px-2 py-1.5 bg-gray-400 cursor-pointer outline-none"    
                    value={selectCurrency}
                    disabled={currencyDisable}
                    onChange={(e)=>currencyOnChange && currencyOnChange(e.target.value)}
                >

                    {currencyOptions.map((currency)=>(

                        <option 
                        key={currency}
                        value={currency}>
                            {currency}
                        </option>

                    ))}
                </select>
            </div>

        </div>
    );
}

export default InputBox;
