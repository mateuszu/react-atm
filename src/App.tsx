import { useAtm } from "./hooks/useAtm";

function App() {
  const { balance, inputAmount, appendDigit, appendDecimal, clearInput, depositFromInput, withdrawFromInput } = useAtm(0);

  const digits = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4">
      <main className="w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-slate-800 mb-8">
          ATM
        </h1>
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 space-y-4">
          <p>Balance: {balance}$</p>
          <p className="text-right font-mono text-xl tabular-nums">
            {inputAmount || "0.00"}
          </p>
          <div className="grid grid-cols-3 gap-2" role="group" aria-label="Keypad">
            {digits.map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => appendDigit(d)}
                className="py-3 rounded-lg border border-slate-200 bg-white font-semibold text-slate-800 hover:bg-slate-50"
              >
                {d}
              </button>
            ))}
            <button
              type="button"
              onClick={appendDecimal}
              className="py-3 rounded-lg border border-slate-200 bg-white font-semibold text-slate-600 hover:bg-slate-50"
            >
              .
            </button>
            <button
              type="button"
              onClick={clearInput}
              className="py-3 rounded-lg border border-slate-200 bg-slate-100 font-semibold text-slate-700 hover:bg-slate-200"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={() => depositFromInput()}
              className="py-3 rounded-lg border border-slate-200 bg-slate-100 font-semibold text-slate-700 hover:bg-slate-200"
            >
              Deposit
            </button>
            <button
              type="button"
              onClick={() => withdrawFromInput()}
              className="py-3 rounded-lg border border-slate-200 bg-slate-100 font-semibold text-slate-700 hover:bg-slate-200"
            >
              Withdraw
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;