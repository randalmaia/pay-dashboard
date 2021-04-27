import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import { FC } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Styles from "./styles";

const TransactionMenu: FC = () => (
  <Menu
    menuButton={
      <MenuButton styles={Styles.MenuButtonStyle}>
        <BsThreeDotsVertical color="#959496" size={24}></BsThreeDotsVertical>
      </MenuButton>
    }
    styles={Styles.MenuStyle}
    direction="left"
  >
    <MenuItem styles={Styles.MenuItemStyle}>Apple pay</MenuItem>
    <MenuItem styles={Styles.MenuItemStyle}>Transfer to account</MenuItem>
    <MenuItem styles={{ ...Styles.MenuItemStyle, borderBottom: "none" }}>
      Report for transaction
    </MenuItem>
  </Menu>
);

export default TransactionMenu;
