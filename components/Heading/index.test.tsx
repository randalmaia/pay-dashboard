import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Heading from "./index";

test("Render a Title", async () => {
  render(<Heading>Title</Heading>);

  const title = screen.getByRole("heading");

  expect(title).toHaveTextContent("Title");
});

test("Render a Title as h3", async () => {
  render(<Heading level="h3">Title</Heading>);

  const title = document.querySelector("h3");

  expect(title).toHaveTextContent("Title");
});
