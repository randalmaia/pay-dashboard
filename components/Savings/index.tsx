import { FC } from "react";
import Chart from "../Chart";
import Plan from "../Plan";
import Styles from "./styles";
import { SavingProps } from "./types";

const Savings: FC<SavingProps> = ({ saving }: SavingProps) => (
  <Styles.Savings>
    <Styles.Saved>
      Saved This Month <span>${saving.saved}</span>
    </Styles.Saved>
    <Chart />
    <Plan percentSaved={saving.percentSaved}></Plan>
  </Styles.Savings>
);

export default Savings;
