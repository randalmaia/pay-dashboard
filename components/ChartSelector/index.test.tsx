import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ChartSelector from "./index";

test("Render a  ChartSelector", async () => {
  render(
    <ChartSelector
      active={false}
      onClick={() => {}}
      text="Selecione"
    ></ChartSelector>
  );

  const Selector = document.querySelector("div");

  expect(Selector).toHaveTextContent("Selecione");
});

test("Fire event on click in ChartSelector", async () => {
  const mockClick = jest.fn();

  render(
    <ChartSelector
      active={true}
      onClick={() => {
        mockClick();
      }}
      text="Selecione"
    ></ChartSelector>
  );

  fireEvent.click(screen.getByText("Selecione"));

  expect(mockClick).toHaveBeenCalled();
});
