import React from "react";
import Activity from "../Activity/Activity";
import styles from "../SideBar/SideBar.module.css";
import YogaActivity from "../../Images/YogaActivity";
import SwimmingActivity from "../../Images/SwimmingActivity";
import BikingActivity from "../../Images/BikingActivity";
import MusculationActivity from "../../Images/MusculationActivity";

/**
 * Component for showing the sideBar with its contents(activity icons and rights text)
 * @component
 *
 */

class SideBar extends React.Component {
  render() {
    return (
      <div className={styles.SideBarContainer}>
        <div className={styles.activityContainer}>
          <Activity icon={YogaActivity} />
          <Activity icon={SwimmingActivity} />
          <Activity icon={BikingActivity} />
          <Activity icon={MusculationActivity} />
        </div>
        <div className={styles.sideBarText}>copyright, SportSee 2022</div>
      </div>
    );
  }
}

export default SideBar;
