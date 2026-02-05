import { useState } from "react";
import { useAtm } from "./hooks/useAtm";
import Display from "./components/Display";
import Notification from "./components/Notification";
import Keypad from "./components/Keypad";

function App() {
  const {
    balance,
    inputAmount,
    appendDigit,
    appendDecimal,
    clearInput,
    removeLastDigit,
    depositFromInput,
    withdrawFromInput,
  } = useAtm(0);
  const [notification, setNotification] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-indigo-50 to-white flex flex-col items-center justify-center p-6">
      <main className="w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-slate-800 mb-8">
          ATM
        </h1>
        <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 space-y-4">
          <Display balance={balance} input={inputAmount} />
          <Notification message={notification} />
          <Keypad
            onDigit={appendDigit}
            onDecimal={appendDecimal}
            onRemove={removeLastDigit}
            onClear={clearInput}
            onDeposit={() => {
              if (!inputAmount) {
                setNotification("Enter amount to deposit");
                setTimeout(() => setNotification(""), 3000);
                return;
              }
              const ok = depositFromInput();
              if (!ok) {
                setNotification("Invalid amount");
                setTimeout(() => setNotification(""), 3000);
              } else {
                setNotification("");
              }
            }}
            onWithdraw={() => {
              const ok = withdrawFromInput();
              if (!ok) {
                setNotification("Insufficient funds for withdrawal");
                setTimeout(() => setNotification(""), 3000);
              } else {
                setNotification("");
              }
            }}
            inputEmpty={!inputAmount}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
