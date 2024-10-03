// Page.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, vi, expect } from "vitest";
import { Page } from "./page";
import "@testing-library/jest-dom";

// Mock the useAppState hook
const mockSetAppData = vi.fn();

vi.mock("../hooks/useAppState", () => {
  const appData = { test: "initial value" }; // Create a local appData object
  return {
    useAppState: () => ({
      appData, // Use the local appData object
      setAppData: (newData: unknown) => {
        // Update the local appData object with newData
        Object.assign(appData, newData);
        mockSetAppData(newData); // Call the mock function for tracking
      },
      liveData: "initial live data",
    }),
  };
});

vi.mock("../assets/data", () => ({
  groupedOptions: [
    { label: "Group 1", options: [{ label: "Option 1", value: "option1" }] },
  ],
}));

describe("Page component", () => {
  it("renders the initial appData.test value", () => {
    render(<Page />);

    const spanElement = screen.getByText("initial value");
    expect(spanElement).toBeInTheDocument();
  });

  it("updates appData.test when the button is clicked", async () => {
    render(<Page />);

    const spanElem = screen.getByText("initial value");
    expect(spanElem).toBeInTheDocument();

    const buttonElement = screen.getByTestId("btn-live-data");
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);

    const updatedSpanElement = screen.getByTestId("span-test");
    expect(updatedSpanElement).toHaveTextContent("live data updated");
  });

  it("handles selection in the Select component", () => {
    render(<Page />);

    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();

    // Simulate selecting an option
    fireEvent.change(selectElement, { target: { value: "option1" } });

    const selectValue = selectElement as HTMLSelectElement;
    expect(selectValue.value).toBe("option1");
  });
});
