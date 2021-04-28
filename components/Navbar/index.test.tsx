import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "./index";

test("Render closed navbar", async () => {
  render(<Navbar />);

  const Search = screen.getByText("Search");

  expect(Search).toBeVisible();
});
