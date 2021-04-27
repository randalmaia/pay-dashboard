import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Avatar from "./index";

test("Render a basic Avatar", async () => {
  render(<Avatar image="www.google.com/image.png" name="Jonh Dow" />);

  const image = screen.getByRole("img");

  expect(image).toHaveAttribute("src", "www.google.com/image.png");
  expect(image).toHaveAttribute("alt", "Jonh Dow");
});
