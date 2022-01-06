import React from "react";
import styles from "../Activity/Activity.module.css";

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
