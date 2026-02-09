import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Display from "../components/Display";

describe("Display", () => {
  it("shows the balance with a dollar sign", () => {
    render(<Display balance={120} input="15.00" />);

    expect(screen.getByText("Balance")).toBeInTheDocument();
    expect(screen.getByText("1.20$")).toBeInTheDocument();
  });

  it("shows the input amount when provided", () => {
    render(<Display balance={0} input="42.50" />);

    expect(screen.getByText("42.50")).toBeInTheDocument();
  });

  it("falls back to 0.00 when input is empty", () => {
    render(<Display balance={0} input="" />);

    expect(screen.getByText("0.00")).toBeInTheDocument();
  });
});
