import { useState } from "react";
import { useInputAmount } from "./useInputAmount";
import { useBalance } from "./useBalance";

export function useAtm(initialBalance: number = 0) {
    const { inputAmount, amountCents, appendDigit, clearInput, removeLastDigit } = useInputAmount();
    const { balance, deposit, withdraw } = useBalance(initialBalance);
    const [notification, setNotification] = useState("");

    function notify(message: string) {
        setNotification(message);
        if (message) {
            setTimeout(() => setNotification(""), 3000);
        }
    }

    function depositFromInput() {
        const ok = deposit(amountCents);
        clearInput();
        return ok;
    }

    function withdrawFromInput() {
        const ok = withdraw(amountCents);
        clearInput();
        return ok;
    }

    function depositAction() {
        if (amountCents === 0) {
            notify("Enter amount to deposit");
            return;
        }
        const ok = depositFromInput();
        if (!ok) {
            notify("Invalid amount");
        } else {
            notify("");
        }
    }

    function withdrawAction() {
        if (amountCents === 0) {
            notify("Enter amount to withdraw");
            return;
        }
        const ok = withdrawFromInput();
        if (!ok) {
            notify("Insufficient funds for withdrawal");
        } else {
            notify("");
        }
    }

    return {
        balance,
        inputAmount,
        amountCents,
        notification,
        appendDigit,
        clearInput,
        removeLastDigit,
        depositAction,
        withdrawAction,
    };
}
