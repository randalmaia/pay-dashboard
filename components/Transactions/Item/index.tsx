import Styles from "./styles";
import { BsGift } from "react-icons/bs";
import TransactionMenu from "../Menu";

const Item = () => (
  <Styles.TransactionsItem>
    <Styles.TransactionsItemIcon>
      <BsGift size={30}></BsGift>
    </Styles.TransactionsItemIcon>
    <Styles.TransactionsItemDescription>
      Shopping
    </Styles.TransactionsItemDescription>
    <Styles.TransactionsItemDate>50 de jun 10:00</Styles.TransactionsItemDate>
    <Styles.TransactionsItemValue>$50</Styles.TransactionsItemValue>
    <Styles.TransactionsItemAction>
      <TransactionMenu />
    </Styles.TransactionsItemAction>
  </Styles.TransactionsItem>
);

export default Item;
