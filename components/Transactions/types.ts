export type TransactionsProps = {
  transactions: Transactions;
};

export type TransactionItemProps = {
  transaction: { node: Transaction };
  ref: React.MutableRefObject<HTMLLIElement>;
};
