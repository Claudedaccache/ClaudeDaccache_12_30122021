import React from "react";
import styles from "../Greeting/Greeting.module.css";
import PropTypes from "prop-types";


/**
 * Component for showing the greeting message with the user name
 * @component
 *
 */

class Greeting extends React.Component {
  render() {
    let userFirstName = this.props.userName.userInfos.firstName;
    return (
      <div className={styles.greetingContainer}>
        <p className={styles.userGreeting}>
          Bonjour <span className={styles.userName}>{userFirstName}</span>
        </p>
        <p className={styles.userEncouragingMessage}>
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>
    );
  }
}

Greeting.propTypes = {
  userFirstName: PropTypes.string,
};


export default Greeting;
