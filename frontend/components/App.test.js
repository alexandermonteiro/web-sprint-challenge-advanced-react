import React from "react";
import AppFunctional from "./AppFunctional";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

beforeEach(() => {
  render(<AppFunctional />);
});

describe("Renders AppFunctional properly and works as expected", () => {
  test("renders without errors", () => {});

  test("renders an error message if user did not enter valid email address", async () => {
    const submitButton = screen.getByTestId("submitBtn");
    fireEvent.click(submitButton);
    const errorMsg = await screen.findByTestId("message");
    expect(errorMsg).toBeTruthy();
  });
});

describe("Submit Button", () => {
  test("email input field has the placeholder text 'type email' and it's not visible when user types", () => {
    const emailPhText = screen.queryByPlaceholderText("type email");
    expect(emailPhText).toBeVisible();
    fireEvent.change(emailPhText, "soso");
    expect(emailPhText).not.toHaveValue("type email");
  });

  test("when user move right coordinates change to(3, 2)", async () => {
    const rightBtn = screen.getByText(/right/i);
    fireEvent.click(rightBtn);
    const Coor = await screen.findByText("Coordinates (3, 2)");
    expect(Coor).toBeInTheDocument();
  });

  test("reset button resets coordinates and steps", async () => {
    const rightBtn = screen.getByText(/right/i);
    fireEvent.click(rightBtn);
    const resetBtn = screen.getByText(/reset/i);
    fireEvent.click(resetBtn);
    const Coor = await screen.findByText("Coordinates (2, 2)");
    expect(Coor).toBeInTheDocument();
    const steps = await screen.findByText("You moved 0 times");
    expect(steps).toBeInTheDocument();
  });
});
