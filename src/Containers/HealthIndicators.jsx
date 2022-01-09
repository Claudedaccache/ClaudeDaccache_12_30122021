import React from "react";
import HealthIndicator from "../Components/HealthIndicator/HealthIndicator";
import FireIcon from "../Images/FireIcon";
import MeatIcon from "../Images/MeatIcon";
import AppleIcon from "../Images/AppleIcon";
import HamburgerIcon from "../Images/HamburgerIcon";

class HealthIndicators extends React.Component {
  render() {
    let indicatorData = this.props.userHealthData.keyData;
    return (
      <>
        <HealthIndicator
          icon={FireIcon}
          color="#ffe0e0"
          indicatorNumber={`${indicatorData.calorieCount}kCal`}
          indicatorType="Calories"
        />
        <HealthIndicator
          icon={MeatIcon}
          color="#d3edff"
          indicatorNumber={`${indicatorData.proteinCount}g`}
          indicatorType="Proteines"
        />
        <HealthIndicator
          icon={AppleIcon}
          color="#fdf7db  "
          indicatorNumber={`${indicatorData.carbohydrateCount}g`}
          indicatorType="Glucides"
        />
        <HealthIndicator
          icon={HamburgerIcon}
          color="#FD51811A"
          indicatorNumber={`${indicatorData.lipidCount}g`}
          indicatorType="Lipides"
        />
      </>
    );
  }
}

export default HealthIndicators;
