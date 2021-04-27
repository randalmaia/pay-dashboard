import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./index";

test("Render the user Avatar", async () => {
  render(
    <Header user={{ image: "www.google.com/image.png", username: "Joao" }} />
  );

  const image = screen.getByRole("img");

  expect(image).toHaveAttribute("src", "www.google.com/image.png");
  expect(image).toHaveAttribute("alt", "Joao");
});

test("Render Pay Logo", async () => {
  render(
    <Header user={{ image: "www.google.com/image.png", username: "Joao" }} />
  );

  const Logo = screen.getByRole("heading");

  expect(Logo).toHaveTextContent("Pay");
});

test("Render Search Input", async () => {
  render(
    <Header user={{ image: "www.google.com/image.png", username: "Joao" }} />
  );

  const Search = document.querySelector("input");
  expect(Search).toHaveAttribute("placeholder", "Search");
});
