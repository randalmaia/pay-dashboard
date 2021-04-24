import { FC } from "react";
import Styles from "./styles";
import { HamburguerMenuIconProps } from "./types";

const HamburguerMenuIcon: FC<HamburguerMenuIconProps> = ({
  open = false,
  onClick,
}: HamburguerMenuIconProps) => (
  <Styles.HamburguerMenuIcon open={open} onClick={onClick}>
    <span></span>
    <span></span>
    <span></span>
  </Styles.HamburguerMenuIcon>
);

export default HamburguerMenuIcon;
