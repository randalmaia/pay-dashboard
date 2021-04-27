/// <reference types="next" />
/// <reference types="next/types/global" />

interface User {
  username: string;
  image: string;
}

interface Card {
  cardNumber: string;
  cardHolder: string;
}

interface Payment {
  description: string;
  value: number;
  type: string;
}

interface Payments {
  PaymentsEdges: {
    PaymentsNodes: Payment;
  }[];
}

interface Transaction {
  description: string;
  value: number;
  type: string;
  date: Date;
}

interface Transactions {
  TransactionsEdges: {
    TransactionsNodes: Transaction;
  }[];
}

interface Saving {
  saved: number;
  date: Date;
}

interface Savings {
  SavingsEdges: {
    SavingsNodes: Saving;
  }[];
}

interface DashboardData {
  user: User;
  card: Card;
  payments: Payments;
  transactions: Transactions;
  savings: Savings;
}
