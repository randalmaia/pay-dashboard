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
  id: string;
  description: string;
  value: number;
  type: string;
  date: string;
}

interface Transactions {
  edges: Array<TransactionEdge>;
}

interface TransactionEdge {
  node: Transaction;
}

interface Saving {
  saved: string;
  percentSaved: number;
}

interface DashboardData {
  user: User;
  card: Card;
  payments: Payments;
  transactions: Transactions;
  saving: Saving;
}
