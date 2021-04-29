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

const TransactionHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const OrderBy = styled.div`
  display: flex;

  select {
    border-radius: 10px;
    font-size: 12px;
    color: #9d9b9d;
    border: 1px #e0e5ee solid;
    outline: none;
    padding: 5px 25px 5px 15px;
    width: 144px;
    margin-right: 14px;
    appearance: none;
  }
`;

const OrderByIcon = styled.div`
  width: 10px;
  height: 30px;
  font-size: 11px;
  color: #9d9b9d;
  margin-right: 10px;
  margin-left: -5px;
  overflow-wrap: break-word;
`;

const SelectWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    left: 80%;
    top: 9px;
  }
`;

export default {
  Transactions,
  TransactionsList,
  TransactionHeader,
  OrderBy,
  OrderByIcon,
  SelectWrapper,
};
