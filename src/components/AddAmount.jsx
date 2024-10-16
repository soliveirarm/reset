import { FiPlus, FiMinus } from "react-icons/fi"

export default function AddAmount({
  sign,
  switchSign,
  addAmount,
  amountLabel,
  setAmountLabel,
  amount,
  setAmount,
}) {
  const color = sign ? "-positive" : "-negative"

  return (
    <div className="fixed left-0 bottom-4 w-full p-2">
      <form onSubmit={addAmount} className="flex flex-col gap-4">
        <input
          value={amountLabel}
          onChange={setAmountLabel}
          type="text"
          id="amount-label"
          placeholder="Título"
          className={`input ${color} `}
        />
        <div className="flex gap-2 *:flex-1">
          <input
            value={amount}
            onChange={setAmount}
            type="number"
            id="amount"
            className={`input ${color}`}
            placeholder="Valor"
          />

          <button
            type="button"
            onClick={switchSign}
            className={`sign-button ${color}`}
          >
            {sign ? <FiPlus size="22" /> : <FiMinus size="22" />}
          </button>
        </div>
        <button
          type="submit"
          className="p-3 bg-slate-200 text-dark border-b-2 border-slate-500 custom-border"
        >
          Adicionar valor
        </button>
      </form>
    </div>
  )
}
