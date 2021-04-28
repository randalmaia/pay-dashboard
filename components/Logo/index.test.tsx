import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Logo from "./index";

test("Render the navbar", async () => {
  render(<Logo />);

  const Search = document.querySelector("h1");
  expect(Search).toHaveTextContent("Pay");
});
