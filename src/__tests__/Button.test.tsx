import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Button from "../components/Button";

describe("Button", () => {
  it("renders children with key variant styles by default", () => {
    render(<Button>7</Button>);

    const button = screen.getByRole("button", { name: "7" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("border-slate-200");
    expect(button).toHaveClass("bg-white");
  });

  it("applies action variant styles", () => {
    render(<Button variant="action">Clear</Button>);

    const button = screen.getByRole("button", { name: "Clear" });
    expect(button).toHaveClass("bg-slate-100");
    expect(button).toHaveClass("text-slate-700");
  });

  it("calls onClick when clicked", () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click</Button>);

    fireEvent.click(screen.getByRole("button", { name: "Click" }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
