import React, { PureComponent } from "react";
import styles from "./BarCharts.module.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// const data = [
//   {
//     day: "2020-07-01",
//     kilogram: 70,
//     calories: 240,
//   },
//   {
//     day: "2020-07-02",
//     kilogram: 69,
//     calories: 220,
//   },
//   {
//     day: "2020-07-03",
//     kilogram: 70,
//     calories: 280,
//   },
//   {
//     day: "2020-07-04",
//     kilogram: 70,
//     calories: 500,
//   },
//   {
//     day: "2020-07-05",
//     kilogram: 69,
//     calories: 160,
//   },
//   {
//     day: "2020-07-06",
//     kilogram: 69,
//     calories: 162,
//   },
//   {
//     day: "2020-07-07",
//     kilogram: 69,
//     calories: 390,
//   },
// ];

class ActivityBarChart extends PureComponent {
  CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.toolTip}>
          <p>{`${payload[0].value}kg`}</p>
          <p>{`${payload[1].value}Kcal`}</p>
        </div>
      );
    }

    return null;
  };

  customLegend = (props) => {
    let weightColor = props.weightColor;
    let caloriesColor = props.caloriesColor;
    return (
      <div className={`section-title ${styles.barChartTitle}`}>
        <div>
          {" "}
          <p className={styles.legendTitle}>{"Activité quotidienne"}</p>
        </div>
        <div className="d-flex flex-row">
          <div className="d-flex flex-row justify-content-center align-items-baseline">
            {" "}
            <span
              className={styles.legendDot}
              style={{ backgroundColor: weightColor }}
            ></span>
            <p className={styles.legendText}>{"Poids (kg)"}</p>
          </div>
          <div className="d-flex flex-row justify-content-center align-items-baseline ">
            {" "}
            <span
              className={styles.legendDot}
              style={{ backgroundColor: caloriesColor }}
            ></span>
            <p className={styles.legendText}>{"Calories brûlées (kCal)"}</p>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className={`${styles.barChartContainer}`}>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
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
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis tickLine={false} tickCount={10} />
            <YAxis
              orientation="right"
              axisLine={false}
              tickLine={false}
              tickCount={3}
            />
            <Tooltip content={this.CustomTooltip} />
            <Legend
              verticalAlign="top"
              content={this.customLegend(this.props)}
            />

            <Bar
              dataKey="kilogram"
              fill={this.props.weightColor}
              barSize={12}
              radius={[15, 15, 0, 0]}
            />
            <Bar
              dataKey="calories"
              fill={this.props.caloriesColor}
              barSize={12}
              radius={[15, 15, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default ActivityBarChart;
