import Button from "./Button";

type Props = {
  digits: string[];
  onDigit: (d: string) => void;
  onDecimal: () => void;
  onRemove: () => void;
  onClear: () => void;
  onDeposit: () => void;
  onWithdraw: () => void;
  inputEmpty: boolean;
};

export default function Keypad({
  digits,
  onDigit,
  onDecimal,
  onRemove,
  onClear,
  onDeposit,
  onWithdraw,
  inputEmpty,
}: Props) {
  return (
    <div className="grid grid-cols-3 gap-2" role="group">
      {digits.map((d) => (
        <Button key={d} type="button" onClick={() => onDigit(d)}>
          {d}
        </Button>
      ))}
      <Button type="button" onClick={onDecimal} className="text-slate-600">
        .
      </Button>
      <Button
        type="button"
        onClick={onRemove}
        className="bg-slate-100 text-slate-700 hover:bg-slate-200"
      >
        &lt;
      </Button>
      <Button
        type="button"
        onClick={onClear}
        className="bg-slate-100 text-slate-700 hover:bg-slate-200"
      >
        Clear
      </Button>
      <Button
        type="button"
        onClick={() => {
          onDeposit();
        }}
        className="bg-slate-100 text-slate-700 hover:bg-slate-200"
      >
        Deposit
      </Button>
      <Button
        type="button"
        onClick={() => {
          if (inputEmpty) return;
          onWithdraw();
        }}
        className="bg-slate-100 text-slate-700 hover:bg-slate-200"
      >
        Withdraw
      </Button>
    </div>
  );
}
