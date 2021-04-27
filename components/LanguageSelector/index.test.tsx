import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import LanguageSelector from "./index";

test("Render the language selector", async () => {
  render(<LanguageSelector />);

  const Search = document.querySelector("div");
  expect(Search).toHaveTextContent("EN");
});

test("Render the input chevron icon", async () => {
  render(<LanguageSelector />);

  const Icon = document.querySelector("svg");

  expect(Icon).toHaveAttribute("height", "13");
  expect(Icon).toHaveAttribute("width", "13");
});

test("Render the button to menu container", async () => {
  render(<LanguageSelector />);

  const Menu = screen.getByRole("presentation");

  expect(Menu).toHaveAttribute("class", "rc-menu-container");
});
