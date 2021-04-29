import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Transactions from "./index";

const transactionsDefault: Transactions = {
  edges: [
    {
      node: {
        date: "2021-04-08T14:33:00.000Z",
        description: "Shopping",
        id: "dHJhbnNhY3Rpb246UW9nSHVWMlVmTQ==",
        type: "Shopping",
        value: 300,
      },
    },
    {
      node: {
        date: "2021-04-07T14:34:00.000Z",
        description: "Grocery",
        id: "dHJhbnNhY3Rpb246WU55Z09sbzVIZA==",
        type: "Grocery",
        value: 45,
      },
    },
    {
      node: {
        date: "2021-04-27T14:34:52.622Z",
        description: "Gym",
        id: "dHJhbnNhY3Rpb246S3NNS3Bid2RWaw==",
        type: "Gym",
        value: 125,
      },
    },
    {
      node: {
        date: "2021-04-25T14:36:00.000Z",
        description: "Laundry",
        id: "dHJhbnNhY3Rpb246Z29jbENFMXJHWA==",
        type: "Laundry",
        value: 30,
      },
    },
    {
      node: {
        date: "2021-04-13T22:35:00.000Z",
        description: "Car repair",
        id: "dHJhbnNhY3Rpb246Q0xMRkhzT2Q2RQ==",
        type: "Car repair",
        value: 200,
      },
    },
  ],
};

test("Render Transactions heading", async () => {
  render(<Transactions transactions={transactionsDefault} />);

  const heading = screen.getByText("Recent Transaction");

  expect(heading).toBeVisible();
});

test("Render Transactions list", async () => {
  render(<Transactions transactions={transactionsDefault} />);

  const items = document.querySelectorAll("li");

  expect(items.length).toBe(5);
});

test("Render Transactions list item description", async () => {
  render(<Transactions transactions={transactionsDefault} />);

  const description = document.querySelectorAll("li div")[1];

  expect(description).toHaveTextContent("Shopping");
});

test("Render Transactions list item description sort by date", async () => {
  const { getByTestId } = render(
    <Transactions transactions={transactionsDefault} />
  );

  fireEvent.change(getByTestId("select"), { target: { value: "date" } });
  const description = document.querySelectorAll("li div")[1];

  expect(description).toHaveTextContent("Grocery");
});

test("Render Transactions list item description sort by type", async () => {
  const { getByTestId } = render(
    <Transactions transactions={transactionsDefault} />
  );

  fireEvent.change(getByTestId("select"), { target: { value: "type" } });
  const description = document.querySelectorAll("li div")[1];

  expect(description).toHaveTextContent("Car repair");
});
