import React, { PureComponent } from "react";
import styles from "./SimpleChart.module.css";
import {
  LineChart,
  Line,
  Rectangle,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },

];

class SimpleCharts extends PureComponent {
  customTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.toolTip}>
          <p className={styles.toolTipText}>{`${payload[0].value} min`}</p>
        </div>
      );
    }

    return null;
  };

  customCursor = (props) => {
    const { points, width, height, stroke } = props;
    const { x, y } = points[0];
    const { x1, y1 } = points[1];
    console.log(props);
    return (
      <Rectangle
        fill="black"
        stroke="black"
        x={x}
        y={y}
        width={width}
        height={height}
      />
    );
  };
  legendText = (text) => {
    return (
      <div className={styles.legendContainer}>
        <p className={styles.legendText}>{text}</p>
      </div>
    );
  };

  render() {
    return (
      // <div className="row">
        <div className={styles.lineChartContainer}>
          <ResponsiveContainer  width="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <defs>
                <linearGradient id="linear">
                  <stop offset="0%" stopColor="white" stopOpacity={0.3} />
                  <stop offset="50%" stopColor="white" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="white" stopOpacity={1} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="name"
                tickLine={false}
                axisLine={false}
                tick={{ fill: "white", opacity: "0.6" }}
              />
              <Tooltip
                content={this.customTooltip}
                cursor={this.customCursor}
              />
              <Legend
                iconSize={0}
                wrapperStyle={{
                  top: 20,
                  left: -110,
                  opacity: "0.6",
                  color: "white",
                }}
              />
              <Line
                name={this.legendText("Durée moyenne des sessions")}
                type="monotone"
                dataKey="uv"
                strokeWidth={2}
                stroke="url(#linear)"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
       </div>
      // </div>
    );
  }
}

export default SimpleCharts;
