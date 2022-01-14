import React, { PureComponent } from "react";
import CustomCursor from "./CustomCursor";
import styles from "./SimpleChart.module.css";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

/**
 * class to display the simple Line chart with its content according to the data received

 */
class SimpleCharts extends PureComponent {
  /**
   *  Display custom tooltip content according to active position.
   *  @param {boolean} active status.
   *  @param {object} payload chart data.
   *  @returns {string} active point values.
   *  @returns {null} if not active or no payload.
   */

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

  /**
   *  Display custom tick content in the Xaxis.
   *  @param {object} props chart data.
   *  @returns {string} Xaxis customed ticks (week days).
   */
  customTicks = (props) => {
    const { x, y, stroke, orientation, width, height, type, textAnchor } =
      props;
    const days = ["L", "M", "M", "J", "V", "S", "D"];
    for (let i = 0; i < days.length; i++) {
      if (props.index == i) {
        return (
          <g className="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
            <text
              orientation={orientation}
              width={width}
              height={height}
              type={type}
              x={x}
              y={y}
              stroke={stroke}
              className="recharts-text recharts-cartesian-axis-tick-value"
              textAnchor={textAnchor}
            >
              <tspan
                x={x}
                dy="0.71em"
                style={{
                  fontSize: "0.8rem",
                  fill: "white",
                  opacity: "0.7",
                }}
              >
                {days[i]}
              </tspan>
            </text>
          </g>
        );
      }
    }
  };

  /**
   *  display customed legend.
   *  @returns {string} chart title.
   */

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
                <stop offset="0%" stopColor="white" stopOpacity={0.3} />
                <stop offset="50%" stopColor="white" stopOpacity={0.7} />
                <stop offset="100%" stopColor="white" stopOpacity={1} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tick={this.customTicks}
              scale="point"
            />
            <Tooltip
              allowEscapeViewBox={{ x: true, y: true }}
              content={this.customTooltip}
              cursor={<CustomCursor />}
            />
            <Legend
              iconSize={0}
              verticalAlign="insideTopLeft"
              content={this.customLegend}
            />
            <Line
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
