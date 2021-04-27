import Heading from "../Heading";
import TransactionItem from "./Item";
import Styles from "./styles";

const Transactions = () => (
  <Styles.Transactions>
    <Heading level="h3" size="body2">
      Recent Transaction
    </Heading>
    <Styles.TransactionsList>
      <TransactionItem></TransactionItem>
      <TransactionItem></TransactionItem>
      <TransactionItem></TransactionItem>
      <TransactionItem></TransactionItem>
      <TransactionItem></TransactionItem>
    </Styles.TransactionsList>
  </Styles.Transactions>
);

export default Transactions;
