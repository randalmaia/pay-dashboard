import Heading from "../Heading";
import CreditCard from "../CreditCard";
import Styles from "./styles";

const Dashboard = () => (
  <Styles.Dashboard>
    <Styles.CreditCardContainer>
      <Heading level="h2" size="body1">
        Dashboard
      </Heading>
      <CreditCard></CreditCard>
    </Styles.CreditCardContainer>
  </Styles.Dashboard>
);

export default Dashboard;
