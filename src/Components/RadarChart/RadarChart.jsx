import React, { PureComponent } from "react";
import styles from "./RadarCharts.module.css";
import PropTypes from "prop-types";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

/**
 * Component for showing the radar chart with its content according to the data received
 * @component
 *
 */

class RadarCharts extends PureComponent {
  /**
   *  Display custom ticks.
   *  @param {object} props chart data.
   *  @returns {string} ticks names.
   */

  customTick = (props) => {
    const { x, y, textAnchor, stroke, radius } = props;

    let i = props.index;
    switch (i) {
      case 0:
        i = "Intensité";
        break;
      case 1:
        i = "Vitesse";
        break;
      case 2:
        i = "Force";
        break;
      case 3:
        i = "Endurance";
        break;
      case 4:
        i = "Energie";
        break;
      case 5:
        i = "Cardio";
        break;
      default:
        console.log("no label");
    }

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
            {i}
          </tspan>
        </text>
      </g>
    );
    // }
    // }
  };

  render() {
    return (
      <div className={styles.radarChartContainer}>
        <ResponsiveContainer width="100%">
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="75%"
            data={this.props.data}
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

RadarCharts.propTypes = {
  performanceData: PropTypes.object,
  performanceKind: PropTypes.object,
};

export default RadarCharts;
