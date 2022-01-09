import React, { PureComponent } from "react";
import styles from "./SimpleChart.module.css";
import {
  LineChart,
  Line,
  Rectangle,
  XAxis,
  Tooltip,
  Legend,
  Area,
  ResponsiveContainer,
} from "recharts";


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













  // customCursor = (props) => {
  // console.log(props);
  // const { points, width, height, stroke } = props;
  // const { x, y } = points[0];
  // console.log(props);

  // return (
  //   <Rectangle
  //     fill="black"
  //     stroke="black"
  //     x={x}
  //     y={y}
  //     width={width}
  //     height={height}
  //   />
  // );
  // };

  customLegend = () => {
    return (
      <div className={styles.legendContainer}>
        <p className={styles.legendText}>{"Durée moyenne des sessions"}</p>
      </div>
    );
  };

  render() {
    return (
      <div className={styles.lineChartContainer}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            width={500}
            height={300}
            data={this.props.data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <defs>
              <linearGradient id="linear">
                <stop offset="0%" stopColor="white" stopOpacity={0.2} />
                <stop offset="50%" stopColor="white" stopOpacity={0.7} />
                <stop offset="100%" stopColor="white" stopOpacity={1} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "white", opacity: "0.6" }}
            />
            <Tooltip
              content={this.customTooltip}
              //  cursor={this.customCursor}
            />
            <Legend
              iconSize={0}
              verticalAlign="insideTopLeft"
              content={this.customLegend}
              
              // wrapperStyle={{
              //   top: 20,
              //   left: -110,
              //   opacity: "0.6",
              //   color: "white",
              // }}
            />
            <Line
              // name={this.legendText()}
              type="monotone"
              dataKey="sessionLength"
              strokeWidth={3}
              stroke="url(#linear)"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default SimpleCharts;
