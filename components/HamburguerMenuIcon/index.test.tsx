import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HamburguerMenuIcon from "./index";

test("Render a Hamburguer", async () => {
  render(<HamburguerMenuIcon onClick={() => {}} open={false} />);

  const Spans = document.querySelectorAll("span");

  expect(Spans.length).toBe(3);
});

test("Fire event on click in Hamburguer", async () => {
  const mockClick = jest.fn();

  render(
    <HamburguerMenuIcon
      open={true}
      onClick={() => {
        mockClick();
      }}
    ></HamburguerMenuIcon>
  );

  const Icon = document.querySelector("div span") || window;

  fireEvent.click(Icon);

  expect(mockClick).toHaveBeenCalled();
});
