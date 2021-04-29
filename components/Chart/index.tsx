import { useState } from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import ChartSelector from "../ChartSelector";
import CustomizedLabel from "./CustomizedLabel";
import CustomizedDot from "./CustomizedDot";
import Styles from "./styles";

const Chart = () => {
  const summariesMonth = {
    savings: [
      { view: false, period: "Jan", amount: 500 },
      { view: true, period: "Feb", amount: 300 },
      { view: true, period: "Mar", amount: 500 },
      { view: true, period: "Apr", amount: 800 },
      { view: true, period: "May", amount: 600 },
      { view: true, period: "Jun", amount: 900 },
      { view: true, period: "Jul", amount: 300 },
      { view: true, period: "Aug", amount: 400 },
      { view: true, period: "Sep", amount: 500 },
      { view: true, period: "Oct", amount: 600 },
      { view: true, period: "Nov", amount: 200 },
      { view: false, period: "Dec", amount: 300 },
    ],
  };

  const summariesDay = {
    savings: [
      { view: false, period: "19", amount: 200 },
      { view: true, period: "20", amount: 100 },
      { view: true, period: "21", amount: 200 },
      { view: true, period: "22", amount: 300 },
      { view: true, period: "23", amount: 300 },
      { view: true, period: "24", amount: 900 },
      { view: true, period: "25", amount: 400 },
      { view: true, period: "26", amount: 500 },
      { view: true, period: "27", amount: 500 },
      { view: true, period: "28", amount: 600 },
      { view: true, period: "29", amount: 700 },
      { view: false, period: "30", amount: 300 },
    ],
  };

  const summariesWeek = {
    savings: [
      { view: false, period: "1", amount: 500 },
      { view: true, period: "2", amount: 300 },
      { view: true, period: "3", amount: 400 },
      { view: true, period: "4", amount: 700 },
      { view: true, period: "5", amount: 800 },
      { view: true, period: "6", amount: 900 },
      { view: true, period: "7", amount: 800 },
      { view: true, period: "8", amount: 500 },
      { view: true, period: "9", amount: 300 },
      { view: true, period: "10", amount: 200 },
      { view: true, period: "11", amount: 700 },
      { view: false, period: "12", amount: 300 },
    ],
  };

  const summariesYear = {
    savings: [
      { view: false, period: "11", amount: 500 },
      { view: true, period: "12", amount: 100 },
      { view: true, period: "13", amount: 200 },
      { view: true, period: "14", amount: 300 },
      { view: true, period: "15", amount: 400 },
      { view: true, period: "16", amount: 900 },
      { view: true, period: "17", amount: 500 },
      { view: true, period: "18", amount: 400 },
      { view: true, period: "19", amount: 300 },
      { view: true, period: "20", amount: 600 },
      { view: true, period: "21", amount: 700 },
      { view: false, period: "22", amount: 300 },
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
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={data.savings}
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
              animationDuration={500}
              type="natural"
              dataKey="amount"
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
        </ResponsiveContainer>
      </Styles.ChartContainer>
    </Styles.ChartWrapper>
  );
};

export default Chart;
