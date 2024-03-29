import Styles from "./styles";
import { BsGift } from "react-icons/bs";
import { GrBasket } from "react-icons/gr";
import { GiWeightLiftingUp } from "react-icons/gi";
import { MdLocalLaundryService } from "react-icons/md";
import { IoCarOutline } from "react-icons/io5";
import TransactionMenu from "../Menu";
import { TransactionItemProps } from "../types";
import { forwardRef, Ref } from "react";
import { format, parseISO } from "date-fns";

const Item = forwardRef(
  ({ transaction }: TransactionItemProps, ref: Ref<HTMLLIElement>) => {
    const iconMap: { [key: string]: JSX.Element } = {
      Shopping: <BsGift size={30} />,
      Grocery: <GrBasket size={30} />,
      Gym: <GiWeightLiftingUp size={30} />,
      Laundry: <MdLocalLaundryService size={30} />,
      "Car repair": <IoCarOutline size={30} />,
    };

    return (
      <Styles.TransactionsItem ref={ref}>
        <Styles.TransactionsItemIcon>
          {iconMap[transaction.node.type]}
        </Styles.TransactionsItemIcon>
        <Styles.TransactionsItemDescription>
          {transaction.node.description}
        </Styles.TransactionsItemDescription>
        <Styles.TransactionsItemDate>
          {format(parseISO(transaction.node.date), "d MMM yyyy H:m")}
        </Styles.TransactionsItemDate>
        <Styles.TransactionsItemValue>
          ${transaction.node.value}
        </Styles.TransactionsItemValue>
        <Styles.TransactionsItemAction>
          <TransactionMenu />
        </Styles.TransactionsItemAction>
      </Styles.TransactionsItem>
    );
  }
);

export default Item;
