import { FC } from "react";
import Logo from "../Logo";
import InputSearch from "../InputSearch";
import Notification from "../Notification";
import LanguageSelector from "../LanguageSelector";
import Avatar from "../Avatar";

import Styles from "./styles";
import { HeaderProps } from "./types";

const Header: FC<HeaderProps> = ({ user }: HeaderProps) => (
  <Styles.Header>
    <Logo />
    <InputSearch />
    <LanguageSelector />
    <Notification />
    <Avatar image={user.image} name={user.username} />
  </Styles.Header>
);

export default Header;
