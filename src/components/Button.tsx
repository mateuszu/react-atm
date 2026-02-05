import React from "react";

type Variant = "key" | "action";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  variant?: Variant;
};

export default function Button({
  className = "",
  children,
  variant = "key",
  ...rest
}: Props) {
  const base =
    "py-3 rounded-lg border font-semibold flex items-center justify-center";

  const variantClass =
    variant === "key"
      ? "border-slate-200 bg-white text-slate-800 hover:bg-slate-50"
      : "bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200";

  return (
    <button {...rest} className={`${base} ${variantClass} ${className}`}>
      {children}
    </button>
  );
}
