import "./App.css";
import React from "react";
import FireIcon from "../src/Images/FireIcon";
import MeatIcon from "../src/Images/MeatIcon";
import AppleIcon from "../src/Images/AppleIcon";
import HamburgerIcon from "../src/Images/HamburgerIcon";
import Header from "../src/Components/Header/Header";
import SideBar from "../src/Components/SideBar/SideBar";
import Greeting from "./Components/Greeting/Greeting";
import HealthIndicator from "../src/Components/HealthIndicator/HealthIndicator";
import ActivityBarChart from "./Components/BarCharts/Barcharts";
import PieCharts from "./Components/PieChart/PieChart";
import RadarCharts from "./Components/RadarChart/RadarChart";
import SimpleCharts from "./Components/SimpleChart/SimpleChart";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="d-flex flex-column">
          <div>
            <Header />
          </div>
          <div className="BodyContentWithSideBar">
            <div>
              {" "}
              <SideBar />
            </div>
            <div className="BodyContentWithoutSideBar">
              <div>
                {" "}
                <Greeting />
              </div>
              <div className="container-fluid allBobyContent">
                <div className=" allChartsContent">
                  <div className="BarChart">
                    {" "}
                    <ActivityBarChart
                      caloriesColor="#E60000"
                      weightcColor="#282D30"
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

                <div className="healthIndicationMainContainer">
                  {" "}
                  <HealthIndicator
                    icon={FireIcon}
                    color="#ffe0e0"
                    indicatorNumber="1,930kCal"
                    indicatorType="Calories"
                  />
                  <HealthIndicator
                    icon={MeatIcon}
                    color="#d3edff"
                    indicatorNumber="155g"
                    indicatorType="Proteines"
                  />
                  <HealthIndicator
                    icon={AppleIcon}
                    color="#fdf7db  "
                    indicatorNumber="290g"
                    indicatorType="Glucides"
                  />
                  <HealthIndicator
                    icon={HamburgerIcon}
                    color="#FD51811A"
                    indicatorNumber="50g"
                    indicatorType="Lipides"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
