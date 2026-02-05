import { useState } from 'react';
import { z } from 'zod';

const amountSchema = z.string().refine((s) => {
    if (s === '') return true;

    const parts = s.split('.');
    if (parts.length > 2) return false;

    const [intPart, decPart] = parts;
    if (intPart.length === 0) return false;

    if (!Array.from(intPart).every((ch) => ch >= '0' && ch <= '9')) return false;

    if (decPart !== undefined) {
        if (decPart.length > 2) return false;
        if (!Array.from(decPart).every((ch) => ch >= '0' && ch <= '9')) return false;
    }
    return true;
}, { message: 'Invalid money format' });

export function useInputAmount() {
    const [inputAmount, setInputAmount] = useState('');

    function appendDigit(digit: string) {
        setInputAmount((prev) => {
            if (!/^[0-9]$/.test(digit)) return prev;
            // Prevent multiple leading zeros like "00"
            if (prev === "0" && digit === "0") return prev;
            let candidate: string;
            if (prev === "0" && digit !== "0") candidate = digit;
            else candidate = prev + digit;

            const ok = amountSchema.safeParse(candidate).success;
            return ok ? candidate : prev;
        });
    }

    function appendDecimal() {
        setInputAmount((prev) => {
            if (prev.includes('.')) return prev;
            const candidate = prev === '' ? '0.' : prev + '.';
            const ok = amountSchema.safeParse(candidate).success;
            return ok ? candidate : prev;
        });
    }

    function clearInput() {
        setInputAmount("");
    }

    function removeLastDigit() {
        setInputAmount((prev) => {
            if (prev.length === 0) return prev;
            const next = prev.slice(0, -1);
            const ok = amountSchema.safeParse(next).success;
            return ok ? next : "";
        });
    }
    return {
        inputAmount,
        appendDigit,
        appendDecimal,
        clearInput,
        removeLastDigit,
    };
}
