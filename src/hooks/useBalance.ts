import { useState } from "react";

export function useBalance(initialBalance: number = 0) {
    const [balance, setBalance] = useState(Math.max(0, Math.floor(initialBalance)));

    function deposit(amountCents: number) {
        if (!Number.isFinite(amountCents)) {
            return false;
        }
        const safe = Math.max(0, Math.floor(amountCents));
        setBalance((prev) => prev + safe);
        return true;
    }

    function withdraw(amountCents: number) {
        if (!Number.isFinite(amountCents)) {
            return false;
        }
        const safe = Math.max(0, Math.floor(amountCents));
        if (safe > balance) {
            return false;
        }
        setBalance((prev) => prev - safe);
        return true;
    }

    return {
        balance,
        deposit,
        withdraw,
    };
}
