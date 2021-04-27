import styled from "styled-components";

const Dashboard = styled.div`
  box-sizing: border-box;
  border-radius: 64px;
  min-height: 700px;
  padding: 50px 50px 25px 50px;
  display: flex;
  background-color: #fff;
  justify-content: flex-start;
`;

const Section = styled.div`
  width: 762px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const CreditCardContainer = styled.div`
  margin-right: 35px;
`;

export default {
  Dashboard,
  Section,
  CreditCardContainer,
};
