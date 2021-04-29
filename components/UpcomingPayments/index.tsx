import { RiPaypalLine } from "react-icons/ri";
import { BsBriefcase } from "react-icons/bs";
import Heading from "../Heading";
import Styles from "./styles";
import { UpcomingPaymentsProps } from "./types";
import { FC } from "react";

const UpcomingPayments: FC<UpcomingPaymentsProps> = ({
  payments,
}: UpcomingPaymentsProps) => {
  const iconMap: { [key: string]: JSX.Element } = {
    Paypal: <RiPaypalLine size={32} />,
    Salary: <BsBriefcase size={32} />,
  };

  const renderPayments = (PaymentsEdges: Array<PaymentEdge>) => {
    return PaymentsEdges.map((payment: PaymentEdge) => (
      <Styles.Payment key={payment.node.type}>
        <Styles.PaymentIcon>{iconMap[payment.node.type]}</Styles.PaymentIcon>

        <span>{payment.node.type}</span>
        <Styles.PaymentDescription>
          {payment.node.description}
        </Styles.PaymentDescription>
        <span>+${payment.node.value}</span>
      </Styles.Payment>
    ));
  };

  return (
    <Styles.UpcomingPayments>
      <Heading level="h2" size="body1">
        Upcoming payments
      </Heading>
      <Styles.UpcomingPaymentsList>
        {renderPayments(payments.edges)}
      </Styles.UpcomingPaymentsList>
    </Styles.UpcomingPayments>
  );
};

export default UpcomingPayments;
