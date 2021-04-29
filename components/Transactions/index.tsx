import { FC, useEffect, useState } from "react";
import Heading from "../Heading";
import TransactionItem from "./Item";
import Styles from "./styles";
import { BsArrowDown } from "react-icons/bs";
import { SortByMapInterface, TransactionsProps } from "./types";
import { parseISO } from "date-fns";
import FlipMove from "react-flip-move";

const Transactions: FC<TransactionsProps> = ({
  transactions,
}: TransactionsProps) => {
  const [sortBy, setSortBy] = useState<string>("");
  const [sortByLabel, setSortByLabel] = useState("AZ");
  const [sortedTransactions, setSortedTransactions] = useState<
    Array<TransactionEdge>
  >(transactions.edges);

  const sortByDates = (items: Array<TransactionEdge>) =>
    items.sort((transcationA, transcationB) => {
      const dateTimeA = parseISO(transcationA.node.date).getTime();
      const dateTimeB = parseISO(transcationB.node.date).getTime();

      if (dateTimeA < dateTimeB) return -1;
      if (dateTimeA > dateTimeB) return 1;
      return 0;
    });

  const sortByTypes = (items: Array<TransactionEdge>) =>
    items.sort((transcationA, transcationB) => {
      const typeA = transcationA.node.type.toLowerCase();
      const typeB = transcationB.node.type.toLowerCase();

      if (typeA < typeB) return -1;
      if (typeA > typeB) return 1;
      return 0;
    });

  const sortByValues = (items: Array<TransactionEdge>) =>
    items.sort((a, b) => a.node.value - b.node.value);

  useEffect(() => {
    if (sortBy === "") return;

    let items = sortedTransactions;
    const sortByMap: SortByMapInterface = {
      value: { function: sortByValues, label: "01" },
      type: { function: sortByTypes, label: "AZ" },
      date: { function: sortByDates, label: "01" },
    };

    setSortByLabel(sortByMap[sortBy].label);
    items = sortByMap[sortBy].function(items);

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
            data-testid="select"
          >
            <option value="">Sort by</option>
            <option data-testid="option-date" value="date">
              Date
            </option>
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
