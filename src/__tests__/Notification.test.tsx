import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Notification from "../components/Notification";

describe("Notification", () => {
  it("renders the message visibly when provided", () => {
    const { getByText } = render(<Notification message="Invalid amount" />);

    const message = getByText("Invalid amount");
    expect(message).toBeInTheDocument();
    expect(message).toHaveClass("text-red-600");
    expect(message).not.toHaveClass("invisible");
  });

  it("renders an invisible placeholder when message is empty", () => {
    const { container } = render(<Notification message="" />);

    const paragraph = container.querySelector("p");
    expect(paragraph).not.toBeNull();
    expect(paragraph).toHaveClass("invisible");
    expect(paragraph?.textContent).toBe(" ");
  });
});
