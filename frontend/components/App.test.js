import React from "react";
import AppFunctional from "./AppFunctional";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  render(<AppFunctional />);
});

describe("Sanity Check", () => {
  test("sanity", () => {
    expect(true).toBe(false);
  });
});

describe("Renders AppFunctional properly and works as expected", () => {
  test("renders without errors", () => {});
  test("renders an error message if user did not enter valid email address", async () => {
    const submitButton = screen.getByTestId("submitBtn");
    userEvent.click(submitButton);
    const errorMsg = await screen.findByTestId("message");
    expect(errorMsg).toBeTruthy();
  });
});

describe("Submit Button", () => {
  test("Email submit Success message is correct", async () => {
    const email = screen.queryByPlaceholderText("type email");
    const submitButton = screen.getByTestId("submitBtn");
    fireEvent.change(email, { target: { value: "alex@email.com" } });
    fireEvent.click(submitButton);
    await screen.findByText("alex@email.com");
    expect(true).toBe(false);
  });

  test("email input field has the placeholder text 'type email' and it's not visible when user types", () => {
    const emailPhText = screen.queryByPlaceholderText("type email");
    expect(emailPhText).toBeVisible();
    userEvent.type(emailPhText, "soso");
    expect(emailPhText).not.toHaveValue("type email");
  });

  test("when user move right coordinates change to(3, 2)", async () => {
    const rightBtn = screen.getByText(/right/i);
    userEvent.click(rightBtn);
    const Coor = await screen.findByText("Coordinates (3, 2)");
    expect(Coor).toBeInTheDocument();
  });

  test("reset button resets coordinates and steps", async () => {
    const rightBtn = screen.getByText(/right/i);
    userEvent.click(rightBtn);
    const resetBtn = screen.getByText(/reset/i);
    userEvent.click(resetBtn);
    const Coor = await screen.findByText("Coordinates (2, 2)");
    expect(Coor).toBeInTheDocument();
    const steps = await screen.findByText("You moved 0 times");
    expect(steps).toBeInTheDocument();
  });
});
