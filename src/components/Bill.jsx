import { formatAmount } from "../utils/format-amount"

export default function Bill({ group = [] }) {
  const TOTAL = group.reduce((acc, { amount }) => acc + amount, 0)

  if (!group.length) {
    return (
      <p className="text-center mt-4 p-4 text-slate-500 text-lg">
        Nada por aqui ainda 😴
      </p>
    )
  }

  return (
    <main className="p-4 max-w-screen-sm mx-auto flex flex-col gap-3">
      {group.map(({ label, amount }) => (
        <section
          className={`${
            amount > 0
              ? "bg-emerald-100 text-emerald-900 self-end"
              : "bg-red-100 text-red-900 self-start"
          }  custom-border p-3 flex justify-between w-60`}
          key={crypto.randomUUID()}
        >
          <span className="font-medium">{label}</span>
          <span>{formatAmount(amount)}</span>
        </section>
      ))}
      <p
        className={`${
          TOTAL > 0 ? "text-emerald-600" : "text-red-500"
        } mt-4 text-xl font-semibold self-end`}
      >
        Total: R${formatAmount(TOTAL)}
      </p>
    </main>
  )
}
