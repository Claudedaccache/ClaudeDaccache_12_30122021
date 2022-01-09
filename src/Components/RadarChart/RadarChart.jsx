import React, { PureComponent } from "react";
import styles from "./RadarCharts.module.css";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

class RadarCharts extends PureComponent {
  customTick = ({ payload, x, y, textAnchor, stroke, radius }) => {
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
            {"hello"}
            {/* {this.props.data.performanceData.map((x) => x.kind)} */}
            {/* {`${payload.value}`} */}
          </tspan>
        </text>
      </g>
    );
  };

  render() {
    return (
      <div className={styles.radarChartContainer}>
        <ResponsiveContainer width="100%">
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="70%"
            data={this.props.data.performanceData}
          >
            <PolarGrid
              gridType="polygon"
              polarRadius={[10, 20, 40, 60, 80]}
              stroke="#fff"
              radialLines={false}
              dataKey={"value"}
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
