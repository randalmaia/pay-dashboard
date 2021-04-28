import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "./index";

test("Render closed navbar", async () => {
  render(<Navbar />);

  window.innerWidth = width;
  window.innerHeight = height;
  window.dispatchEvent(new Event("resize"));

  const Search = screen.getByText("Search");

  console.log(Search);
  expect(Search).toBeVisible();
});
