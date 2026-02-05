import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Keypad from "../components/Keypad";

const renderKeypad = (inputEmpty = false) => {
  const onDigit = vi.fn();
  const onDecimal = vi.fn();
  const onRemove = vi.fn();
  const onClear = vi.fn();
  const onDeposit = vi.fn();
  const onWithdraw = vi.fn();

  render(
    <Keypad
      onDigit={onDigit}
      onDecimal={onDecimal}
      onRemove={onRemove}
      onClear={onClear}
      onDeposit={onDeposit}
      onWithdraw={onWithdraw}
      inputEmpty={inputEmpty}
    />
  );

  return {
    onDigit,
    onDecimal,
    onRemove,
    onClear,
    onDeposit,
    onWithdraw,
  };
};

describe("Keypad", () => {
  it("calls onDigit with the clicked digit", () => {
    const { onDigit } = renderKeypad();

    fireEvent.click(screen.getByRole("button", { name: "7" }));
    expect(onDigit).toHaveBeenCalledWith("7");
  });

  it("calls the action handlers", () => {
    const { onDecimal, onRemove, onClear } = renderKeypad();

    fireEvent.click(screen.getByRole("button", { name: "." }));
    fireEvent.click(screen.getByRole("button", { name: "<" }));
    fireEvent.click(screen.getByRole("button", { name: "Clear" }));

    expect(onDecimal).toHaveBeenCalledTimes(1);
    expect(onRemove).toHaveBeenCalledTimes(1);
    expect(onClear).toHaveBeenCalledTimes(1);
  });

  it("disables deposit and withdraw when input is empty", () => {
    renderKeypad(true);

    expect(screen.getByRole("button", { name: "Deposit" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Withdraw" })).toBeDisabled();
  });

  it("enables and triggers deposit and withdraw when input is present", () => {
    const { onDeposit, onWithdraw } = renderKeypad(false);

    fireEvent.click(screen.getByRole("button", { name: "Deposit" }));
    fireEvent.click(screen.getByRole("button", { name: "Withdraw" }));

    expect(onDeposit).toHaveBeenCalledTimes(1);
    expect(onWithdraw).toHaveBeenCalledTimes(1);
  });
});
