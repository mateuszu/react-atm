import { formatCents } from "../utils/money";

export default function Display({
  balance,
  input,
}: {
  balance: number;
  input: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <p className="text-sm text-slate-500">Balance</p>
        <p className="text-lg font-semibold">{formatCents(balance)}$</p>
      </div>
      <div className="mt-2 bg-slate-50 p-3 rounded-md">
        <p className="text-right font-mono text-2xl tabular-nums">
          {input || "0.00"}
        </p>
      </div>
    </div>
  );
}
