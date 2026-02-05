import { useInputAmount } from "./useInputAmount";
import { useBalance } from "./useBalance";

export function useAtm(initialBalance: number = 0) {
    const { inputAmount, appendDigit, appendDecimal, clearInput } = useInputAmount();
    const { balance, deposit, withdraw } = useBalance(initialBalance);

    function depositFromInput() {
        const amount = parseFloat(inputAmount);
        deposit(amount);
        clearInput();
    }

    function withdrawFromInput() {
        const amount = parseFloat(inputAmount);
        withdraw(amount);
        clearInput();
    }

    return {
        balance,
        inputAmount,
        appendDigit,
        appendDecimal,
        clearInput,
        depositFromInput,
        withdrawFromInput,
    };
}
