import { useState } from "react";

export function useBalance(initialBalance: number = 0) {
    const [balance, setBalance] = useState(initialBalance);

    function deposit(amount: number) {
        if (isNaN(amount)) {
            return;
        }
        setBalance((prev) => prev + amount);
    }

    function withdraw(amount: number) {
        if (isNaN(amount)) {
            return;
        }
        if (amount > balance) {
            return;
        }
        setBalance((prev) => prev - amount);
    }

    return {
        balance,
        deposit,
        withdraw,
    };
}