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


/**
 * class to display the activity chart with its content according to the data received
 */
class ActivityBarChart extends PureComponent {
  /**
   *  Display tooltip content according to active position.
   *  @param {boolean} active status.
   *  @param {object} payload chart data.
   *  @returns {string} active point values.
   */

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

  /**
   *  Display a custom legend content.
   *  @param {boolean} props data.
   *  @returns {string} data displayed identifier.
   */
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
            <XAxis
              tickLine={false}
              allowDecimals={false}
              tickFormatter={(tick) => tick + 1}
            />
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
