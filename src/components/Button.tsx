import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

export default function Button({ className = "", children, ...rest }: Props) {
  return (
    <button
      {...rest}
      className={`py-3 rounded-lg border border-slate-200 bg-white font-semibold text-slate-800 hover:bg-slate-50 ${className}`}
    >
      {children}
    </button>
  );
}
