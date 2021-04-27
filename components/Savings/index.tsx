import Chart from "../Chart";
import Plan from "../Plan";
import Styles from "./styles";

const Savings = () => (
  <Styles.Savings>
    <Styles.Saved>
      Saved This Month <span>$25,999.00</span>
    </Styles.Saved>
    <Chart />
    <Plan></Plan>
  </Styles.Savings>
);

export default Savings;
