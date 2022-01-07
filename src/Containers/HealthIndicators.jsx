import React from "react";
import HealthIndicator from "../Components/HealthIndicator/HealthIndicator";
import FireIcon from "../Images/FireIcon";
import MeatIcon from "../Images/MeatIcon";
import AppleIcon from "../Images/AppleIcon";
import HamburgerIcon from "../Images/HamburgerIcon";

class HealthIndicators extends React.Component {
  render() {
    return (
      <>
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
                  /></>
 
    
    );
  }
}

export default HealthIndicators;
