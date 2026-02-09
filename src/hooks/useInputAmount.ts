import { useState } from "react";
import { formatCents } from "../utils/money";

export function useInputAmount() {
    const [amountCents, setAmountCents] = useState(0);

    function appendDigit(digit: string) {
        setAmountCents((prev) => {
            if (!/^[0-9]$/.test(digit)) return prev;
            const next = prev * 10 + Number(digit);
            return next;
        });
    }

    function clearInput() {
        setAmountCents(0);
    }

    function removeLastDigit() {
        setAmountCents((prev) => Math.floor(prev / 10));
    }
    return {
        inputAmount: formatCents(amountCents),
        amountCents,
        appendDigit,
        clearInput,
        removeLastDigit,
    };
}
