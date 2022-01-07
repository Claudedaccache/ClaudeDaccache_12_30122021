import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Legend,
  Label,
  Cell,
} from "recharts";
import styles from "./PieChart.module.css";

const data = [
  { name: "Score", value: 0.12 },
  { name: "empty", value: 0.88 },
];

class PieCharts extends PureComponent {
  state = {
    innerText: 0,
  };

  CustomLabel = ({ viewBox, innerText = 12 }) => {
    const { cx, cy } = viewBox;

    return (
      <React.Fragment>
        <text x={cx - 15} y={cy - 5}>
          <tspan
            style={{
              fontWeight: 700,
              fontSize: "1.4rem",
              fill: "black",
              fontFamily: "Roboto",
            }}
          >
            {innerText}%
          </tspan>
        </text>
        <text x={cx - 55} y={cy + 15}>
          <tspan
            style={{
              fontSize: "1rem",
              fill: "black",
              opacity: "0.6",
              fontFamily: "Roboto",
              }}
          >
            de votre objective{" "}
          </tspan>
        </text>
      </React.Fragment>
    );
  };

  customLegend = () => {
    return (
      <div className={`${styles.PieChartTitle}`}>
        <div>
          {" "}
          <p className={styles.legendTitle}>{"Score"}</p>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className={`${styles.pieChartContainer}`}>
        <ResponsiveContainer width="100%">
          <PieChart width={400}>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={70}
              outerRadius={80}
              fill="#FF0000"
            >
              {data.map((entry, index) => {
                if (index === 1) {
                  return <Cell key={entry.value} fill="#f3f6f9" />
                }
                return <Cell key={entry.value} fill="#FF0000" />;
              })}

              <Label content={this.CustomLabel} position="center" />
            </Pie>
            <Legend verticalAlign="insideTopLeft" content={this.customLegend} />{" "}
          </PieChart>
        </ResponsiveContainer>
      </div>
      // </div>
    );
  }
}

export default PieCharts;
