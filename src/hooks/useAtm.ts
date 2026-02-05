import { useInputAmount } from "./useInputAmount";
import { useBalance } from "./useBalance";

export function useAtm(initialBalance: number = 0) {
    const { inputAmount, appendDigit, appendDecimal, clearInput, removeLastDigit } = useInputAmount();
    const { balance, deposit, withdraw } = useBalance(initialBalance);

    function depositFromInput() {
        const amount = parseFloat(inputAmount);
        const ok = deposit(amount);
        clearInput();
        return ok;
    }

    function withdrawFromInput() {
        const amount = parseFloat(inputAmount);
        const ok = withdraw(amount);
        clearInput();
        return ok;
    }

    return {
        balance,
        inputAmount,
        appendDigit,
        appendDecimal,
        clearInput,
        removeLastDigit,
        depositFromInput,
        withdrawFromInput,
    };
}
