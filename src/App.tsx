import { useAtm } from "./hooks/useAtm";
import Display from "./components/Display";
import Notification from "./components/Notification";
import Keypad from "./components/Keypad";

function App() {
  const {
    balance,
    inputAmount,
    amountCents,
    notification,
    appendDigit,
    clearInput,
    removeLastDigit,
    depositAction,
    withdrawAction,
  } = useAtm(0);

  return (
    <div className="min-h-screen bg-linear-to-br from-sky-100 via-indigo-50 to-white flex flex-col items-center justify-center p-6">
      <main className="w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-slate-800 mb-8">
          ATM
        </h1>
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 space-y-4">
          <Display balance={balance} input={inputAmount} />
          <Notification message={notification} />
          <Keypad
            onDigit={appendDigit}
            onRemove={removeLastDigit}
            onClear={clearInput}
            onDeposit={depositAction}
            onWithdraw={withdrawAction}
            inputEmpty={amountCents === 0}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
