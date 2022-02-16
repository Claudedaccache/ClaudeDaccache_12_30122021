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
      return (
      <div className=" allChartsContent">
        <div className="BarChart">
          <ActivityBarChart
            data={this.props.UserActivity}
            caloriesColor="#E60000"
            weightColor="#282D30"
          />
        </div>
        <div className="allLowerCharts ">
          <div className="chartItem">
            <SimpleCharts data={this.props.userAverageSessions} />
          </div>
          <div className="chartItem">
            <RadarCharts data={this.props.userPerformance} kind={this.props.userPerformanceKind} />
          </div>
          <div className="chartItem">
            <RadialCharts data={this.props.userScore} />
          </div>
        </div>
       </div>
    );
  }
}

export default Charts;
