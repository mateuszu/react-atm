export function formatCents(amountCents: number) {
  const safe = Number.isFinite(amountCents) ? Math.max(0, Math.floor(amountCents)) : 0;
  const dollars = Math.floor(safe / 100);
  const cents = safe % 100;
  return `${dollars}.${cents.toString().padStart(2, "0")}`;
}

