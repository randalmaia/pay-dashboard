import { FC } from "react";
import Styles from "./styles";
import { ChartSelectorProps } from "./types";

const ChartSelector: FC<ChartSelectorProps> = ({
  active,
  text,
  onClick,
}: ChartSelectorProps) => (
  <Styles.ChartSelector onClick={onClick} active={active}>
    {text}
  </Styles.ChartSelector>
);

export default ChartSelector;
