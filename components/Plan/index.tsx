import { FC } from "react";
import Styles from "./styles";
import { PlanProps } from "./types";

const Plan: FC<PlanProps> = ({ percentSaved }: PlanProps) => (
  <>
    <Styles.PlanShadow></Styles.PlanShadow>
    <Styles.Plan>
      <Styles.PlanText>
        <span>Plan for 2021</span> Completed
      </Styles.PlanText>
      <Styles.Pie>
        <span>{percentSaved}%</span>
      </Styles.Pie>
    </Styles.Plan>
  </>
);

export default Plan;
