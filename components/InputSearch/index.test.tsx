import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import InputSearch from "./index";

test("Render the input search", async () => {
  render(<InputSearch />);

  const Search = document.querySelector("input");
  expect(Search).toHaveAttribute("placeholder", "Search");
});

test("Render the input search icon", async () => {
  render(<InputSearch />);

  const Icon = document.querySelector("svg");

  expect(Icon).toHaveAttribute("height", "16");
  expect(Icon).toHaveAttribute("width", "16");
});
