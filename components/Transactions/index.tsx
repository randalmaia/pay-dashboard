import { FC } from "react";
import Heading from "../Heading";
import TransactionItem from "./Item";
import Styles from "./styles";
import { TransactionsProps } from "./types";

const Transactions: FC<TransactionsProps> = ({
  transactions,
}: TransactionsProps) => {
  const renderTransactions = (TransactionEdges: Array<TransactionEdge>) => {
    return TransactionEdges.map((transaction: TransactionEdge) => (
      <TransactionItem
        transaction={transaction}
        key={transaction.node.type}
      ></TransactionItem>
    ));
  };

  return (
    <Styles.Transactions>
      <Heading level="h3" size="body2">
        Recent Transaction
      </Heading>
      <Styles.TransactionsList>
        {renderTransactions(transactions.edges)}
      </Styles.TransactionsList>
    </Styles.Transactions>
  );
};

export default Transactions;
