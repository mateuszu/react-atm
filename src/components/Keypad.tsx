import Button from "./Button";

type Props = {
  onDigit: (d: string) => void;
  onRemove: () => void;
  onClear: () => void;
  onDeposit: () => void;
  onWithdraw: () => void;
  inputEmpty: boolean;
};

export default function Keypad({
  onDigit,
  onRemove,
  onClear,
  onDeposit,
  onWithdraw,
  inputEmpty,
}: Props) {
  const digits = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];

  return (
    <div className="grid grid-cols-3 gap-2" role="group">
      {digits.map((d) => (
        <Button key={d} type="button" onClick={() => onDigit(d)} variant="key">
          {d}
        </Button>
      ))}
      <Button type="button" onClick={onRemove} variant="action">
        &lt;
      </Button>
      <Button type="button" onClick={onClear} variant="action">
        Clear
      </Button>
      <Button
        type="button"
        onClick={() => onDeposit()}
        variant="action"
        disabled={inputEmpty}
        className="disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Deposit
      </Button>
      <Button
        type="button"
        onClick={() => onWithdraw()}
        variant="action"
        disabled={inputEmpty}
        className="disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Withdraw
      </Button>
    </div>
  );
}
