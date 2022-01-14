import React from "react";
import styles from "../Activity/Activity.module.css";

/**
 * class to display the icons in the sideBar
 */

class Activity extends React.Component {
  render() {
    return (
        <div className={styles.activityContainer}>
        {this.props.icon}

        </div>
    );
  }
}

export default Activity;
