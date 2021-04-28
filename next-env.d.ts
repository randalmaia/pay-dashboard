/// <reference types="next" />
/// <reference types="next/types/global" />

interface User {
  username: string;
  image: string;
}

interface Card {
  cardNumber: string;
  cardHolder: string;
  cardCSV: number;
}

interface Payment {
  description: string;
  value: number;
  type: string;
}

interface Payments {
  edges: Array<PaymentEdge>;
}

interface PaymentEdge {
  node: Payment;
}

interface Transaction {
  description: string;
  value: number;
  type: string;
  date: Date;
}

interface Transactions {
  edges: {
    nodes: Transaction;
  }[];
}

interface Saving {
  saved: number;
  date: Date;
}

interface Savings {
  edges: {
    nodes: Saving;
  }[];
}

interface DashboardData {
  user: User;
  card: Card;
  payments: Payments;
  transactions: Transactions;
  savings: Savings;
}
