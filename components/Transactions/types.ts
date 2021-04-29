export type TransactionsProps = {
  transactions: Transactions;
};

export type TransactionItemProps = {
  transaction: { node: Transaction };
  ref: React.MutableRefObject<HTMLLIElement>;
};

export interface SortByMapInterface {
  [key: string]: {
    function: (items: Array<TransactionEdge>) => TransactionEdge[];
    label: string;
  };
}
