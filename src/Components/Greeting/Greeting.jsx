import React from "react";
import styles from "../Greeting/Greeting.module.css";

/**
 * class to display the greeting message with the user name
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

export default Greeting;
