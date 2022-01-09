import React, { PureComponent } from "react";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Legend,
  PolarAngleAxis,
} from "recharts";
import styles from "./RadialChart.module.css";

class RadialCharts extends PureComponent {
  scoreValueInArray = (props) => {
    let scoreArray = [];
    scoreArray.push(`${props.data}`);
    return scoreArray;
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
    let getFullValue = (x) => {
      return x * 100;
    };

    return (
      <div className={`${styles.pieChartContainer}`}>
        <ResponsiveContainer width="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={80}
            barSize={10}
            data={this.scoreValueInArray(this.props)}
            startAngle={90}
            endAngle={450}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />
            <Legend verticalAlign="insideTopLeft" content={this.customLegend} />{" "}
            <RadialBar
              background
              dataKey={getFullValue}
              cornerRadius="50%"
              fill="#FF0000"
            />
            <text
              x="50%"
              y="45%"
              textAnchor="middle"
              dominantBaseline="middle"
              className={styles.progressLabelValue}
            >
              {`${this.props.data * 100}%`}
            </text>
            <text
              x="50%"
              y="53%"
              textAnchor="middle"
              dominantBaseline="middle"
              className={styles.progressLabelTex}
            >
              {`de votre objective`}
            </text>
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default RadialCharts;
