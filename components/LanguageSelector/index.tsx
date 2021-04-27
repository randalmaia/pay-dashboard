import { FaChevronDown } from "react-icons/fa";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";

import Styles from "./styles";

const LanguageSelector = () => (
  <Styles.LanguageSelector>
    <Menu
      menuButton={
        <MenuButton styles={Styles.MenuButtonStyle}>
          EN
          <FaChevronDown size={13}></FaChevronDown>
        </MenuButton>
      }
      styles={Styles.MenuStyle}
      direction="bottom"
    >
      <MenuItem styles={Styles.MenuItemStyle}>PT-Br </MenuItem>
      <MenuItem styles={{ ...Styles.MenuItemStyle, borderBottom: "none" }}>
        EN
      </MenuItem>
    </Menu>
    <FaChevronDown size={13} />
  </Styles.LanguageSelector>
);

export default LanguageSelector;
