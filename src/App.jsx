import { useState } from 'react'
import stonks from './assets/stonks.png'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [amount, setAmount] = useState("")
  const [conv, setConv] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConv(0)
  }

  const convert = () => {
    setConv(Number(amount) * currencyInfo[to])
  }

  return (
    <>
        <div className='grid grid-cols-12 grid-rows-12 h-screen bg-cover bg-position-(--my-bg-position) sm:bg-center opacity-85 bg-no-repeat sm:px-15' style={{ '--my-bg-position': '30% 10%' ,backgroundImage: `url(${stonks})` }}>
          <div className='bg-white/30 backdrop-blur-sm border pb-5 border-gray-100 px-5 min-h-fit col-span-10 col-start-2 sm:col-span-6 sm:col-start-4 row-start-4 rounded-lg flex flex-col justify-center items-center'>
            <h1 className='text-white p-2 text-2xl font-mono'>CURRENCY CONVERTER</h1>
            <form action="" className='w-full flex flex-col justify-center items-center'
             onSubmit = {(e) => {
              e.preventDefault()
              convert()
             }}
            >
              <InputBox label='From' amount={amount} currencyOptions={options} selectCurrency={from}
               onCurrencyChange={(currency) => setFrom(currency)}
               onAmountChange={(amount) => setAmount(amount)}
              />
              <button type='button' className="-translate-y-1/3 z-2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
               onClick={() => swap()}
              >
                Swap
              </button>
              <InputBox className='-translate-y-1/4 z-1' label='To' amountDisable={true} amount={conv} currencyOptions={options} selectCurrency={to}
                onCurrencyChange={(currency) => setTo(currency)}
              />
              <button type='submit' className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
    </>
  )
}

export default App
