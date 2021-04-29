import { FC, useEffect, useState } from "react";
import Heading from "../Heading";
import TransactionItem from "./Item";
import Styles from "./styles";
import { BsArrowDown } from "react-icons/bs";
import { TransactionsProps } from "./types";
import { parseISO } from "date-fns";
import FlipMove from "react-flip-move";

const Transactions: FC<TransactionsProps> = ({
  transactions,
}: TransactionsProps) => {
  const [sortBy, setSortBy] = useState("");
  const [sortByLabel, setSortByLabel] = useState("AZ");
  const [sortedTransactions, setSortedTransactions] = useState<
    Array<TransactionEdge>
  >(transactions.edges);

  useEffect(() => {
    const items = sortedTransactions;

    if (sortBy === "value") {
      setSortByLabel("01");
      items.sort(function (a, b) {
        return a.node.value - b.node.value;
      });
    }

    if (sortBy === "type") {
      items.sort((a, b) => {
        setSortByLabel("AZ");
        const typeA = a.node.type.toLowerCase();
        const typeB = b.node.type.toLowerCase();
        if (typeA < typeB) return -1;
        if (typeA > typeB) return 1;
        return 0;
      });
    }

    if (sortBy === "date") {
      items.sort((a, b) => {
        setSortByLabel("01");
        const dateA = parseISO(a.node.date).getTime();
        const dateB = parseISO(b.node.date).getTime();

        if (dateA < dateB) return -1;
        if (dateA > dateB) return 1;
        return 0;
      });
    }

    setSortedTransactions([...items]);
  }, [sortBy]);

  const renderTransactions = () => {
    return (
      <FlipMove>
        {sortedTransactions.map((transaction: TransactionEdge) => (
          <TransactionItem
            transaction={transaction}
            key={transaction.node.id}
          ></TransactionItem>
        ))}
      </FlipMove>
    );
  };

  return (
    <Styles.Transactions>
      <Styles.TransactionHeader>
        <Heading level="h3" size="body2">
          Recent Transaction
        </Heading>

        <Styles.OrderBy>
          <select
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value);
            }}
          >
            <option value="">Sort by</option>
            <option value="date">Date</option>
            <option value="type">Type</option>
            <option value="value">Value</option>
          </select>
          <BsArrowDown size={30}></BsArrowDown>
          <Styles.OrderByIcon>{sortByLabel}</Styles.OrderByIcon>
        </Styles.OrderBy>
      </Styles.TransactionHeader>
      <Styles.TransactionsList>{renderTransactions()}</Styles.TransactionsList>
    </Styles.Transactions>
  );
};

export default Transactions;
