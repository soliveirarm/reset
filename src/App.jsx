import { useState } from "react"
import AddAmount from "./components/AddAmount"
import Bill from "./components/Bill"

export default function App() {
  const [sign, setSign] = useState(true)
  const [amount, setAmount] = useState(0)
  const [amountLabel, setAmountLabel] = useState("")

  const [bill, setBill] = useState([])

  const addAmount = (e) => {
    e.preventDefault()

    if (!amount || !amountLabel) return

    if (sign) setBill([...bill, { label: amountLabel, amount: +amount }])
    else setBill([...bill, { label: amountLabel, amount: -amount }])

    setAmount("")
    setAmountLabel("")
  }

  return (
    <div className="h-screen bg-gradient-to-r from-white to-slate-50">
      <header className="flex items-center gap-2 p-4 m-2 custom-border bg-emerald-400">
        <img
          className="w-12"
          src="favicon.svg"
          alt="black power-off icon with greenish background"
        />
        <h1 className="font-light text-2xl">Reset</h1>
      </header>

      <Bill group={bill} />

      <AddAmount
        addAmount={addAmount}
        sign={sign}
        switchSign={() => setSign((prev) => !prev)}
        amount={amount}
        setAmount={(e) => setAmount(e.target.value)}
        amountLabel={amountLabel}
        setAmountLabel={(e) => setAmountLabel(e.target.value)}
      />
    </div>
  )
}
