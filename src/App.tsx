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

  const digits = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4">
      <main className="w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-slate-800 mb-8">
          ATM
        </h1>
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 space-y-4">
          <Display balance={balance} input={inputAmount} />
          <Notification message={notification} />
          <Keypad
            digits={digits}
            onDigit={appendDigit}
            onDecimal={appendDecimal}
            onRemove={removeLastDigit}
            onClear={clearInput}
            onDeposit={() => {
              depositFromInput();
              setNotification("");
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
