import React from "react";
import ActivityBarChart from "../Components/BarCharts/Barcharts";
import RadialCharts from "../Components/RadialChart/RadialChart";
import RadarCharts from "../Components/RadarChart/RadarChart";
import SimpleCharts from "../Components/SimpleChart/SimpleChart";

/**
 * Component for showing all the charts
 * @component
 * 
 */

class Charts extends React.Component {
  render() {
    let todayScore = this.props.userScore.todayScore ?  this.props.userScore.todayScore :  this.props.userScore.score;
    let activitySessions = this.props.UserActivity;
    let averageSessions = this.props.userAverageSessions
    let performanceData = this.props.userPerformance;
    let userPerformanceKind = this.props.userPerformanceKind

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
            <SimpleCharts data={averageSessions} />
          </div>
          <div className="chartItem">
            {" "}
            <RadarCharts data={performanceData} kind={userPerformanceKind} />
          </div>
          <div className="chartItem">
            {" "}
            <RadialCharts data={todayScore} />
          </div>
        </div>
       </div>
    );
  }
}

export default Charts;
