import React from "react";
import styles from "../Activity/Activity.module.css";
import PropTypes from "prop-types";


/**
 * Component for showing details of the activities icons.
 * @component
 * 
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

Activity.propTypes = {
  icon: PropTypes.object,
};

export default Activity;
