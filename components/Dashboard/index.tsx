import Heading from "../Heading";
import CreditCard from "../CreditCard";
import UpcomingPayments from "../UpcomingPayments";
import Transactions from "../Transactions";
import Savings from "../Savings";
import Styles from "./styles";
import DashboardProps from "./types";
import { FC } from "react";

const Dashboard: FC<DashboardProps> = ({ card }: DashboardProps) => (
  <Styles.Dashboard>
    <Styles.Section>
      <Styles.CreditCardContainer>
        <Heading level="h2" size="body1">
          Dashboard
        </Heading>
        <CreditCard card={card}></CreditCard>
      </Styles.CreditCardContainer>
      <UpcomingPayments />
      <Transactions />
    </Styles.Section>
    <Savings></Savings>
  </Styles.Dashboard>
);

export default Dashboard;
