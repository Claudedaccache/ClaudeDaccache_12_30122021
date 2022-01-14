import React, { PureComponent } from "react";
import styles from "./RadarCharts.module.css";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

/**
 * class to display the radar chart with its content according to the data received
 */
class RadarCharts extends PureComponent {
  /**
   *  Display custom ticks.
   *  @param {object} props chart data.
   *  @returns {string} ticks names.
   */

  customTick = (props) => {
    const { x, y, textAnchor, stroke, radius } = props;

    let performanceKindArray = [];
    let performanceKind = this.props.data.kind;
    for (let k in performanceKind) {
      performanceKindArray.push([k, performanceKind[k]]);
    }

    for (let i = 0; i < performanceKindArray.length; i++) {
      if (props.index === i) {
        return (
          <g className="recharts-layer recharts-polar-angle-axis-tick">
            <text
              radius={radius}
              stroke={stroke}
              x={x}
              y={y}
              className="recharts-text recharts-polar-angle-axis-tick-value"
              textAnchor={textAnchor}
            >
              <tspan
                x={x}
                dy="0em"
                style={{
                  fontSize: "0.8rem",
                  fill: "white",
                }}
              >
                {performanceKindArray[i][1]}
              </tspan>
            </text>
          </g>
        );
      }
    }
  };

  render() {
    return (
      <div className={styles.radarChartContainer}>
        <ResponsiveContainer width="100%">
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="80%"
            data={this.props.data.performanceData}
          >
            <PolarGrid
              gridType="polygon"
              polarRadius={[10, 20, 40, 60, 80, 100]}
              stroke="#fff"
              radialLines={false}
            />
            <PolarAngleAxis tick={this.customTick} />

            <Radar
              dataKey="value"
              stroke="#FF0101B2"
              fill="#FF0101B2"
              fillOpacity={1}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default RadarCharts;
