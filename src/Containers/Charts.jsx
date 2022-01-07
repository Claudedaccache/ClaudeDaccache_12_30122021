import React from "react";
import ActivityBarChart from "../Components/BarCharts/Barcharts";
import PieCharts from "../Components/PieChart/PieChart";
import RadarCharts from "../Components/RadarChart/RadarChart";
import SimpleCharts from "../Components/SimpleChart/SimpleChart";

class Charts extends React.Component {
  render() {
    return (
      <div className=" allChartsContent">
      <div className="BarChart">
        {" "}
        <ActivityBarChart
          caloriesColor="#E60000"
          weightColor="#282D30"
        />
      </div>
      <div className="allLowerCharts ">
        <div className="chartItem">
          {" "}
          <SimpleCharts />
        </div>
        <div className="chartItem">
          {" "}
          <RadarCharts />
        </div>
        <div className="chartItem">
          {" "}
          <PieCharts />
        </div>
      </div>
    </div>
    );
  }
}

export default Charts;
