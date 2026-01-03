import { useState , useId } from "react"

function InputBox({
    label = 'label',
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = 'usd',
    amountDisable = false,
    className = ""
}) 
{
    const amountInputID = useId()

    return(
        <div className={`bg-white p-3 rounded-lg text-sm flex w-full ${className}`}>
            <div className="w-1/2 px-5 pt-2">
                <label className="text-black/40 mb-2 inline-block" htmlFor={amountInputID}>
                    {label}
                </label>
                <input htmlFor={amountInputID} type="number" disabled={amountDisable} className="outline-none w-full bg-transparent py-1.5" placeholder="Amount" value={amount}
                 onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right px-5 pt-2">
                <p className="text-black/40 mb-2 w-full">Currency</p>
                <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" value={selectCurrency}
                 onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((curr) => (
                        <option key={curr} value={curr}>
                            {curr}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default InputBox