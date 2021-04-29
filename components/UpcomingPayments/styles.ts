import styled from "styled-components";
import Theme from "../../styles/Theme";

const UpcomingPayments = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  h2 {
    width: 100%;
  }
`;

const UpcomingPaymentsList = styled.div`
  display: flex;
  margin-top: 45px;
`;

const Payment = styled.div`
  background: ${Theme.colors.background};
  border-radius: 32px;
  font-size: 18px;
  font-weight: 600;
  height: 205px;
  width: 150px;
  margin-right: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 480px) {
    width: 170px;
  }

  span {
    display: block;
    margin-bottom: 6px;
  }
`;

const PaymentDescription = styled.div`
  font-size: 12px;
  color: #949696;
  font-weight: 400;
  margin-bottom: 6px;
`;

const PaymentIcon = styled.div`
  background: ${Theme.colors.primary};
  border-radius: 20px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export default {
  UpcomingPayments,
  UpcomingPaymentsList,
  PaymentDescription,
  PaymentIcon,
  Payment,
};
