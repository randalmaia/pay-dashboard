import Logo from "../Logo";
import InputSearch from "../InputSearch";
import Notification from "../Notification";
import LanguageSelector from "../LanguageSelector";
import Avatar from "../Avatar";

import Styles from "./styles";

const Header = () => (
  <Styles.Header>
    <Logo />
    <InputSearch />
    <LanguageSelector />
    <Notification />
    <Avatar />
  </Styles.Header>
);

export default Header;
