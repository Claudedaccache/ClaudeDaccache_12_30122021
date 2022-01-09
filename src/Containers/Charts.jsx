import React from "react";
import ActivityBarChart from "../Components/BarCharts/Barcharts";
import RadialCharts from "../Components/RadialChart/RadialChart";
import RadarCharts from "../Components/RadarChart/RadarChart";
import SimpleCharts from "../Components/SimpleChart/SimpleChart";

class Charts extends React.Component {
  render() {
    let activitySessions = this.props.chartsData.activitySessions;
    let todayScore = this.props.chartsData.todayScore
    let performanceData = this.props.chartsData
    let averageSessions = this.props.chartsData.averageSessions

    return (
      <div className=" allChartsContent">
        <div className="BarChart">
          {" "}
          <ActivityBarChart
            data={activitySessions}
            caloriesColor="#E60000"
            weightColor="#282D30"
          />
        </div>
        <div className="allLowerCharts ">
          <div className="chartItem">
            {" "}
            <SimpleCharts data ={averageSessions} />
          </div>
          <div className="chartItem">
            {" "}
            <RadarCharts data={performanceData}/>
          </div>
          <div className="chartItem">
            {" "}
            <RadialCharts data = {todayScore}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Charts;
