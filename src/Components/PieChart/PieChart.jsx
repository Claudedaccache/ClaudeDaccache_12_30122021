import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Legend,
  Label,
} from "recharts";
import styles from "./PieChart.module.css";

const data = [{ name: "Score", value: 0.12}];

class PieCharts extends PureComponent {
  state = {
    activeIndex: 0,
  };

  CustomLabel = ({ viewBox, innerText = 12 }) => {
    const { cx, cy } = viewBox;
    return (
      <React.Fragment>
        <text x={cx - 15} y={cy - 5}>
          <tspan
            style={{
              fontWeight: 700,
              fontSize: "1.2rem",
              fill: "black",
              fontFamily: "Roboto",
            }}
          >
            {`${innerText}%`}
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

  render() {
    return (
      <div className="row">
        <div className="section col-md-6">
          <ResponsiveContainer width="100%" aspect={3}>
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                // dataKey="value"
                innerRadius={70}
                outerRadius={80}
                fill="#FF0000"
              >

                <Label content={this.CustomLabel} position="center" />
              </Pie>
              <Legend
                verticalAlign="insideTopLeft"
                height={36}
                layout="horizontal"
                align="left"
                iconType={"circle"}
                iconSize={0}
              />{" "}
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}

export default PieCharts;
