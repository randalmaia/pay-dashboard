import { RiPaypalLine } from "react-icons/ri";
import { BsBriefcase } from "react-icons/bs";
import Heading from "../Heading";
import Styles from "./styles";

const UpcomingPayments = () => (
  <Styles.UpcomingPayments>
    <Heading level="h2" size="body1">
      Upcoming Payments
    </Heading>
    <Styles.UpcomingPaymentsList>
      <Styles.Payment>
        <Styles.PaymentIcon>
          <BsBriefcase size={24}></BsBriefcase>
        </Styles.PaymentIcon>
        <span>Salary</span>
        <Styles.PaymentDescription>
          Belong Interactive
        </Styles.PaymentDescription>
        <span>+2000</span>
      </Styles.Payment>
      <Styles.Payment>
        <Styles.PaymentIcon>
          <RiPaypalLine size={24}></RiPaypalLine>
        </Styles.PaymentIcon>
        <span>Paypal</span>
        <Styles.PaymentDescription>Freelance payment</Styles.PaymentDescription>
        <span>+4500</span>
      </Styles.Payment>
    </Styles.UpcomingPaymentsList>
  </Styles.UpcomingPayments>
);

export default UpcomingPayments;
