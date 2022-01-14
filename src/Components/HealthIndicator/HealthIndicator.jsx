import React from "react";
import styles from "../HealthIndicator/HealthIndicator.module.css";

/**
 * class to display the health indicators with icons and value
 */
class HealthIndicator extends React.Component {
  render() {
    return (
      <div className={styles.HealthIndicatorContainer}>
        <div
          className={styles.iconContainer}
          style={{ backgroundColor: `${this.props.color}` }}
        >
          {this.props.icon}
        </div>
        <div className={styles.indicatorContent}>
          <div className={styles.indicatorNumber}>
            {this.props.indicatorNumber}
          </div>
          <div className={styles.indicatorType}>{this.props.indicatorType}</div>
        </div>
      </div>
    );
  }
}

export default HealthIndicator;
