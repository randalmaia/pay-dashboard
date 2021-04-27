import Heading from "../Heading";
import CreditCard from "../CreditCard";
import UpcomingPayments from "../UpcomingPayments";
import Transactions from "../Transactions";
import Savings from "../Savings";
import Styles from "./styles";

const Dashboard = () => (
  <Styles.Dashboard>
    <Styles.Section>
      <Styles.CreditCardContainer>
        <Heading level="h2" size="body1">
          Dashboard
        </Heading>
        <CreditCard></CreditCard>
      </Styles.CreditCardContainer>
      <UpcomingPayments />
      <Transactions />
    </Styles.Section>
    <Savings></Savings>
  </Styles.Dashboard>
);

export default Dashboard;
