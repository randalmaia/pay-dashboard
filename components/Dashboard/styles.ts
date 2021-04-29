import styled from "styled-components";

const Dashboard = styled.div`
  box-sizing: border-box;
  border-radius: 32px;
  min-height: 700px;
  max-width: 365px;
  padding: 50px 25px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  justify-content: flex-start;

  @media (min-width: 480px) {
    max-width: 465px;
    border-radius: 64px;
    padding: 50px;
  }

  @media (min-width: 801px) {
    max-width: 465px;
  }

  @media (min-width: 1025px) {
    max-width: 965px;
    flex-direction: row;
  }

  @media (min-width: 1380px) {
    flex-direction: row;
    padding: 50px 50px 25px 50px;
    max-width: initial;
  }
`;

const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 330px;

  @media (min-width: 480px) {
    width: 375px;
  }

  @media (min-width: 801px) {
    width: 462px;
    margin-right: 35px;
  }

  @media (min-width: 1025px) {
    width: 392px;
    margin-right: 35px;
  }

  @media (min-width: 1380px) {
    width: 762px;
    margin-right: 0;
  }
`;

const CreditCardContainer = styled.div`
  margin-bottom: 50px;

  @media (min-width: 1380px) {
    margin-right: 35px;
    margin-bottom: 0;
  }
`;

export default {
  Dashboard,
  Section,
  CreditCardContainer,
};
