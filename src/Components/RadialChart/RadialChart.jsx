import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Legend,
  PolarAngleAxis,
} from "recharts";
import styles from "./RadialChart.module.css";

/**
 * Component for showing the radial chart with its content according to the data received
 * @component
 *
 */

class RadialCharts extends PureComponent {
  /**
   *  Transform score in data to an array.
   *  @param {object} props data.
   *  @returns {Array} array that includes the score value.
   */
  scoreValueInArray = (props) => {
    let scoreArray = [];
    scoreArray.push(`${props.data}`);
    return scoreArray;
  };

  /**
   *  display customed legend.
   *  @returns {string} chart title.
   */

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
    /**
     *  Get score value in percentage(/100).
     *  @param {string} x score value (/1).
     *  @returns {number} score value /100.
     */
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

RadialCharts.propTypes = {
  data: PropTypes.number,
};


export default RadialCharts;
