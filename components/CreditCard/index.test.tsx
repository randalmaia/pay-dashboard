import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CreditCard from "./index";

const cardDefault: Card = {
  cardNumber: "3232 2323 4324 4324",
  cardHolder: "John Dow",
  cardCSV: 434,
};

test("Render a CreditCard chip", async () => {
  render(<CreditCard card={cardDefault}></CreditCard>);

  const chip = screen.getByAltText("Chip");

  expect(chip).toBeDefined();
});

test("Render a CreditCard sign", async () => {
  render(<CreditCard card={cardDefault}></CreditCard>);

  const Sign = screen.getByAltText("Sign");

  expect(Sign).toBeDefined();
});

test("Render a CreditCard number", async () => {
  render(<CreditCard card={cardDefault}></CreditCard>);

  const CardNumber = screen.getByText(cardDefault.cardNumber);

  expect(CardNumber).toBeDefined();
});

test("Render a CreditCard Holder label", async () => {
  render(<CreditCard card={cardDefault}></CreditCard>);

  const CardHolder = screen.getByText("Card Holder");

  expect(CardHolder).toBeDefined();
});

test("Render a CreditCard Holder name", async () => {
  render(<CreditCard card={cardDefault}></CreditCard>);

  const CardHolderName = screen.getByText(cardDefault.cardHolder);

  expect(CardHolderName).toBeDefined();
});

test("Render a CreditCard csv", async () => {
  render(<CreditCard card={cardDefault}></CreditCard>);

  const CardCSV = screen.getByText(cardDefault.cardCSV);

  expect(CardCSV).toBeDefined();
});
