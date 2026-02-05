import { useState } from "react";

export function useBalance(initialBalance: number = 0) {
    const [balance, setBalance] = useState(initialBalance);

    function deposit(amount: number) {
        if (isNaN(amount)) {
            return false;
        }
        setBalance((prev) => prev + amount);
        return true;
    }

    function withdraw(amount: number) {
        if (isNaN(amount)) {
            return false;
        }
        if (amount > balance) {
            return false;
        }
        setBalance((prev) => prev - amount);
        return true;
    }

    return {
        balance,
        deposit,
        withdraw,
    };
}