import { useState } from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  Tooltip,
} from "recharts";
import ChartSelector from "../ChartSelector";
import CustomizedLabel from "./CustomizedLabel";
import CustomizedDot from "./CustomizedDot";
import Styles from "./styles";

const Chart = () => {
  const summariesMonth = {
    payments: [
      { view: false, period: "Jan", received: { amount: 900, quantity: 20 } },
      { view: true, period: "Feb", received: { amount: 400, quantity: 30 } },
      { view: true, period: "Mar", received: { amount: 800, quantity: 40 } },
      { view: true, period: "Apr", received: { amount: 1000, quantity: 50 } },
      { view: true, period: "May", received: { amount: 800, quantity: 40 } },
      { view: true, period: "Jun", received: { amount: 400, quantity: 30 } },
      { view: true, period: "Jul", received: { amount: 500, quantity: 70 } },
      { view: true, period: "Aug", received: { amount: 600, quantity: 80 } },
      { view: true, period: "Sep", received: { amount: 500, quantity: 39 } },
      { view: true, period: "Oct", received: { amount: 900, quantity: 50 } },
      { view: true, period: "Nov", received: { amount: 1000, quantity: 80 } },
      { view: false, period: "Dec", received: { amount: 800, quantity: 70 } },
    ],
  };

  const summariesDay = {
    payments: [
      { view: false, period: "18", received: { amount: 400, quantity: 20 } },
      { view: true, period: "19", received: { amount: 400, quantity: 30 } },
      { view: true, period: "20", received: { amount: 800, quantity: 40 } },
      { view: true, period: "21", received: { amount: 600, quantity: 80 } },
      { view: true, period: "22", received: { amount: 500, quantity: 39 } },
      { view: true, period: "23", received: { amount: 900, quantity: 50 } },
      { view: true, period: "24", received: { amount: 300, quantity: 80 } },
      { view: true, period: "25", received: { amount: 100, quantity: 80 } },
      { view: true, period: "26", received: { amount: 300, quantity: 80 } },
      { view: true, period: "27", received: { amount: 700, quantity: 80 } },
      { view: true, period: "28", received: { amount: 400, quantity: 80 } },
      { view: false, period: "29", received: { amount: 300, quantity: 70 } },
    ],
  };

  const summariesWeek = {
    payments: [
      { view: false, period: "18", received: { amount: 500, quantity: 20 } },
      { view: true, period: "19", received: { amount: 100, quantity: 30 } },
      { view: true, period: "20", received: { amount: 200, quantity: 40 } },
      { view: true, period: "21", received: { amount: 300, quantity: 80 } },
      { view: true, period: "22", received: { amount: 300, quantity: 39 } },
      { view: true, period: "23", received: { amount: 900, quantity: 50 } },
      { view: true, period: "24", received: { amount: 400, quantity: 80 } },
      { view: true, period: "25", received: { amount: 500, quantity: 80 } },
      { view: true, period: "26", received: { amount: 500, quantity: 80 } },
      { view: true, period: "27", received: { amount: 600, quantity: 80 } },
      { view: true, period: "28", received: { amount: 700, quantity: 80 } },
      { view: false, period: "29", received: { amount: 300, quantity: 70 } },
    ],
  };

  const summariesYear = {
    payments: [
      { view: false, period: "11", received: { amount: 500, quantity: 20 } },
      { view: true, period: "12", received: { amount: 100, quantity: 30 } },
      { view: true, period: "13", received: { amount: 200, quantity: 40 } },
      { view: true, period: "14", received: { amount: 300, quantity: 80 } },
      { view: true, period: "15", received: { amount: 300, quantity: 39 } },
      { view: true, period: "16", received: { amount: 900, quantity: 50 } },
      { view: true, period: "17", received: { amount: 400, quantity: 80 } },
      { view: true, period: "18", received: { amount: 500, quantity: 80 } },
      { view: true, period: "19", received: { amount: 500, quantity: 80 } },
      { view: true, period: "20", received: { amount: 600, quantity: 80 } },
      { view: true, period: "21", received: { amount: 700, quantity: 80 } },
      { view: false, period: "22", received: { amount: 300, quantity: 70 } },
    ],
  };

  const [data, setData] = useState(summariesMonth);
  const [period, setPeriod] = useState("Month");

  return (
    <Styles.ChartWrapper>
      <Styles.ChartOptions>
        <ChartSelector
          active={period === "Day"}
          text="Day"
          onClick={() => {
            setPeriod("Day");
            setData(summariesDay);
          }}
        />
        <ChartSelector
          active={period === "Week"}
          text="Week"
          onClick={() => {
            setPeriod("Week");
            setData(summariesWeek);
          }}
        />
        <ChartSelector
          active={period === "Month"}
          text="Month"
          onClick={() => {
            setPeriod("Month");
            setData(summariesMonth);
          }}
        />
        <ChartSelector
          active={period === "Year"}
          text="Year"
          onClick={() => {
            setPeriod("Year");
            setData(summariesYear);
          }}
        />
      </Styles.ChartOptions>
      <Styles.ChartContainer>
        <AreaChart
          width={450}
          height={300}
          data={data.payments}
          margin={{ top: 20, right: 8, left: 8, bottom: 20 }}
        >
          <defs>
            <linearGradient id="amount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#15121d" stopOpacity={0.3} />
              <stop offset="75%" stopColor="#15121d" stopOpacity={0} />
            </linearGradient>
          </defs>

          <Area
            isAnimationActive={true}
            animationDuration={300}
            type="natural"
            dataKey="received.amount"
            stroke="#15121d"
            strokeWidth={7}
            fillOpacity={1}
            fill="url(#amount)"
            dot={<CustomizedLabel />}
            activeDot={<CustomizedDot />}
          />

          <Tooltip
            viewBox={{ x: 0, y: 0, width: 0, height: 0 }}
            wrapperStyle={{ display: "none" }}
            position={{ x: 0, y: 0 }}
            cursor={false}
          ></Tooltip>

          <CartesianGrid horizontal={false} vertical={false} />
          <XAxis hide={true}></XAxis>
          <YAxis hide={true}></YAxis>
        </AreaChart>
      </Styles.ChartContainer>
    </Styles.ChartWrapper>
  );
};

export default Chart;
