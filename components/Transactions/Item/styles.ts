import styled from "styled-components";

const TransactionsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  width: 100%;
  padding: 24px 0;
`;

const TransactionsItemIcon = styled.div`
  width: 10%;
`;

const TransactionsItemDescription = styled.div`
  width: 35%;
  font-weight: 600;
`;

const TransactionsItemDate = styled.div`
  width: 30%;
  color: #959496;
  font-size: 14px;
`;

const TransactionsItemValue = styled.div`
  width: 15%;
  font-size: 16px;
  font-weight: 600;
`;

const TransactionsItemAction = styled.div`
  width: 10%;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

export default {
  TransactionsItem,
  TransactionsItemIcon,
  TransactionsItemDescription,
  TransactionsItemDate,
  TransactionsItemValue,
  TransactionsItemAction,
};
