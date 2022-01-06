import React, { PureComponent } from "react";
import styles from "./BarCharts.module.css";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  // {
  //   name: "Page A",
  //   uv: 4000,
  //   pv: 2400,
  //   amt: 2400,
  // },
  // {
  //   name: "Page B",
  //   uv: 3000,
  //   pv: 1398,
  //   amt: 2210,
  // },
  // {
  //   name: "Page C",
  //   uv: 2000,
  //   pv: 9800,
  //   amt: 2290,
  // },
  // {
  //   name: "Page D",
  //   uv: 2780,
  //   pv: 3908,
  //   amt: 2000,
  // },
  // {
  //   name: "Page E",
  //   uv: 1890,
  //   pv: 4800,
  //   amt: 2181,
  // },
  // {
  //   name: "Page F",
  //   uv: 2390,
  //   pv: 3800,
  //   amt: 2500,
  // },
  // {
  //   name: "Page G",
  //   uv: 3490,
  //   pv: 4300,
  //   amt: 2100,
  // },
  {
    day: "2020-07-01",
    kilogram: 70,
    calories: 240,
  },
  {
    day: "2020-07-02",
    kilogram: 69,
    calories: 220,
  },
  {
    day: "2020-07-03",
    kilogram: 70,
    calories: 280,
  },
  {
    day: "2020-07-04",
    kilogram: 70,
    calories: 500,
  },
  {
    day: "2020-07-05",
    kilogram: 69,
    calories: 160,
  },
  {
    day: "2020-07-06",
    kilogram: 69,
    calories: 162,
  },
  {
    day: "2020-07-07",
    kilogram: 69,
    calories: 390,
  }
];

class ActivityBarChart extends PureComponent {

  CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.toolTip}>
          <p>{`${payload[0].value}kg`}</p>
          <p>{`${label}Kcal`}</p>
        </div>
      );
    }

    return null;
  };

  // CustomLegend = () => {
  //     return (
  //       <div>
  //         <p>{"Activité quotidienne"}</p>
  //       </div>
  //     );
  //   };

// ColorfulLegendText = (value, entry) => {
//       const { color } = entry;
      
//       return <span style={{ color }}>{value}</span>;
//     }

  render() {
    return (
      <div className="row">
        <div className={`section col-md-6 ${styles.barChartContainer}`}>
          <h3 className={`section-title ${styles.barChartTitle}`}>
            Activité quotidienne
          </h3>

          <ResponsiveContainer width="100%" aspect={3}>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis/>
              <YAxis dataKey={"kilogram"} orientation="right"  axisLine={false} tickLine={false}/>
              <Tooltip content={this.CustomTooltip} />
              <Legend
                verticalAlign="top"
                height={36}
                layout="horizontal"
                align="right"
                iconType={"circle"}
                iconSize={10}
                
                />
          

              <Bar
                name="  Poids (kg)"
                dataKey="kilogram"
                fill="#282D30"
                barSize={12}
                radius={[15, 15, 0, 0]}
               
              />
              {/* <Bar
                name="  Calories brûlées (kCal)"
                dataKey="calories"
                fill="#E60000"
                barSize={12}
                radius={[15, 15, 0, 0]}
              /> */}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}

export default ActivityBarChart;
