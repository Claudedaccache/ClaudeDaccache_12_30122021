import "./App.css";

import React from "react";
import FireIcon from "../src/Images/FireIcon"
import MeatIcon from "../src/Images/MeatIcon"
import AppleIcon from "../src/Images/AppleIcon"
import HamburgerIcon from "../src/Images/HamburgerIcon"



import Header from "../src/Components/Header/Header";
import SideBar from "../src/Components/SideBar/SideBar";
import Greeting from "./Components/Greeting/Greeting";
import HealthIndicator from "../src/Components/HealthIndicator/HealthIndicator"
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
        <div>
          {/* <SideBar /> */}
          <Greeting/>
          {/* <HealthIndicator icon={FireIcon} color="rgb(204, 131, 131)" indicatorNumber="1,930kCal" indicatorType="Calories"/>
          <HealthIndicator icon={MeatIcon} color="black" indicatorNumber="155g" indicatorType="Proteines"/>
          <HealthIndicator icon={AppleIcon} color="black" indicatorNumber="290g" indicatorType="Glucides"/>
          <HealthIndicator icon={HamburgerIcon} color="#FD51811A" indicatorNumber="50g" indicatorType="Lipides"/> */}
          {/* <ActivityBarChart /> */}
          {/* <PieCharts/> */}
          {/* <RadarCharts /> */}
          <SimpleCharts />

        </div>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default App;
