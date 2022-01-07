import React, { PureComponent } from "react";
import styles from "./RadarCharts.module.css";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Math",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "Chinese",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "English",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "Geography",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "Physics",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "History",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];

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
            {`${payload.value}`}
          </tspan>
        </text>
      </g>
    );
  };

  render() {
    return (
        <div className={styles.radarChartContainer}>
          <ResponsiveContainer width="100%" >
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
              <PolarGrid
                gridType="polygon"
                polarRadius={[20, 40, 60, 80, 100]}
                stroke="#fff"
                radialLines={false}
              />
              <PolarAngleAxis dataKey="subject" tick={this.customTick} />

              <Radar
                name="Mike"
                dataKey="A"
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
