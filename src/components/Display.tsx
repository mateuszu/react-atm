export default function Display({
  balance,
  input,
}: {
  balance: number;
  input: string;
}) {
  return (
    <>
      <p>Balance: {balance}$</p>
      <p className="text-right font-mono text-xl tabular-nums">
        {input || "0.00"}
      </p>
    </>
  );
}
