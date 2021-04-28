import styled from "styled-components";

const Transactions = styled.div`
  min-height: 370px;
  width: 400px;
  margin: 60px 0 50px 0;

  @media (min-width: 1025px) {
    width: 730px;
    margin: 60px 0 0 0;
  }
`;

const TransactionsList = styled.ul`
  margin: 8px 0 0 0;
  padding: 0;
  list-style: none;
  width: 100%;

  li {
    border-bottom: 1px solid #d9d9d9;
  }

  li:last-child {
    border-bottom: none;
  }
`;

export default {
  Transactions,
  TransactionsList,
};
